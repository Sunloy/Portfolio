import React, { useEffect, useState } from 'react';
import { FiList, FiBriefcase, FiBook, FiLayers, FiLayout } from 'react-icons/fi';
import { fetchData } from '../api/api';

const DashboardCard = ({ title, count, icon, color }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-1">{count}</h3>
        </div>
        <div className={`p-4 rounded-full ${color.bg} ${color.text}`}>
            {icon}
        </div>
    </div>
);

const Dashboard = () => {
    const [stats, setStats] = useState({
        skills: 0,
        experience: 0,
        education: 0,
        services: 0,
        work: 0
    });

    useEffect(() => {
        const loadStats = async () => {
            try {
                // Fetch counts in parallel
                const [skills, exp, Edu, serv, work] = await Promise.all([
                    fetchData('/skills'),
                    fetchData('/experience'),
                    fetchData('/education'),
                    fetchData('/services'),
                    fetchData('/work')
                ]);

                setStats({
                    skills: skills.length,
                    experience: exp.length,
                    education: Edu.length,
                    services: serv.length,
                    work: work.length
                });
            } catch (error) {
                console.error("Failed to load stats", error);
            }
        };
        loadStats();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard
                    title="Total Skills"
                    count={stats.skills}
                    icon={<FiList size={24} />}
                    color={{ bg: 'bg-blue-50', text: 'text-blue-600' }}
                />
                <DashboardCard
                    title="Experience Entries"
                    count={stats.experience}
                    icon={<FiBriefcase size={24} />}
                    color={{ bg: 'bg-green-50', text: 'text-green-600' }}
                />
                <DashboardCard
                    title="Education Entries"
                    count={stats.education}
                    icon={<FiBook size={24} />}
                    color={{ bg: 'bg-purple-50', text: 'text-purple-600' }}
                />
                <DashboardCard
                    title="Services"
                    count={stats.services}
                    icon={<FiLayers size={24} />}
                    color={{ bg: 'bg-orange-50', text: 'text-orange-600' }}
                />
                <DashboardCard
                    title="Work Projects"
                    count={stats.work}
                    icon={<FiLayout size={24} />}
                    color={{ bg: 'bg-pink-50', text: 'text-pink-600' }}
                />
            </div>
        </div>
    );
};

export default Dashboard;
