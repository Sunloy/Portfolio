import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { fetchData, createData, updateData, deleteData } from '../api/api';

const SkillsPage = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null); // null = add mode, object = edit mode
    const [formData, setFormData] = useState({ name: '', level_percent: '', color: 'bg-blue-500' });

    const loadData = async () => {
        try {
            const result = await fetchData('/skills');
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleAdd = () => {
        setCurrentItem(null);
        setFormData({ name: '', level_percent: '', color: 'bg-blue-500' });
        setIsModalOpen(true);
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setFormData({ name: item.name, level_percent: item.level_percent, color: item.color });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this skill?')) {
            await deleteData('/skills', id);
            loadData();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentItem) {
                await updateData('/skills', currentItem.id, formData);
            } else {
                await createData('/skills', formData);
            }
            setIsModalOpen(false);
            loadData();
        } catch (error) {
            console.error(error);
        }
    };

    const columns = [
        { key: 'name', label: 'Skill Name' },
        {
            key: 'level_percent',
            label: 'Level',
            render: (val) => (
                <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[100px]">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: val }}></div>
                </div>
            )
        },
        { key: 'level_percent', label: 'Value' }, // Show text value too
    ];

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage Skills</h1>
                <p className="text-gray-500">Add, edit, or remove your technical skills.</p>
            </div>

            <DataTable
                title="Skills List"
                columns={columns}
                data={data}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={currentItem ? 'Edit Skill' : 'Add New Skill'}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
                        <input
                            type="text"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Level (e.g. 90%)</label>
                        <input
                            type="text"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.level_percent}
                            onChange={(e) => setFormData({ ...formData, level_percent: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Color Class (Tailwind)</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.color}
                            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        >
                            <option value="bg-blue-500">Blue (Default)</option>
                            <option value="bg-green-500">Green</option>
                            <option value="bg-purple-500">Purple</option>
                            <option value="bg-orange-500">Orange</option>
                            <option value="bg-red-500">Red</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default SkillsPage;
