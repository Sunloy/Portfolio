import React, { useEffect, useState } from 'react';
import * as FeatherIcons from 'react-icons/fi';
import { fetchData } from '../../api';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const loadServices = async () => {
            const data = await fetchData('/services');
            setServices(data);
        };
        loadServices();
    }, []);

    // Helper to render icon dynamically
    const renderIcon = (iconName, className) => {
        const IconComponent = FeatherIcons[iconName] || FeatherIcons.FiHelpCircle;
        return <IconComponent className={className} />;
    };

    return (
        <section id="services" className="min-h-screen py-20">
            <div className="max-w-4xl">
                <span className="text-sm font-bold text-blue-500 uppercase tracking-wider block mb-2">What I Do?</span>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 uppercase tracking-wide transition-colors duration-300">Here are some of my expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={service.id || index} className={`p-8 bg-gray-50 dark:bg-gray-800 border-b-2 ${service.border_color || 'border-blue-500'} shadow-sm transition-all hover:-translate-y-2 duration-300`}>
                            {renderIcon(service.icon_name, `text-4xl mb-4 ${service.border_color?.replace('border-', 'text-') || 'text-blue-500'}`)}
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;