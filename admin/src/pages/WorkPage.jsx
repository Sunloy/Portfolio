import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { fetchData, createData, updateData, deleteData } from '../api/api';

const WorkPage = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [formData, setFormData] = useState({ category: 'Graphic Design', image_url: '' });

    const loadData = async () => {
        try {
            const result = await fetchData('/work');
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
        setFormData({ category: 'Graphic Design', image_url: '' });
        setIsModalOpen(true);
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setFormData({
            category: item.category,
            image_url: item.image_url
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            await deleteData('/work', id);
            loadData();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentItem) {
                await updateData('/work', currentItem.id, formData);
            } else {
                await createData('/work', formData);
            }
            setIsModalOpen(false);
            loadData();
        } catch (error) {
            console.error(error);
        }
    };

    const columns = [
        { key: 'category', label: 'Category' },
        {
            key: 'image_url',
            label: 'Image',
            render: (val) => (
                <img src={val} alt="Project" className="w-16 h-12 object-cover rounded border border-gray-200" />
            )
        },
        { key: 'image_url', label: 'URL', render: (val) => <span className="truncate max-w-xs block text-xs text-gray-400">{val}</span> },
    ];

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Manage Work</h1>
                <p className="text-gray-500">Showcase your best projects.</p>
            </div>

            <DataTable
                title="Projects List"
                columns={columns}
                data={data}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={currentItem ? 'Edit Project' : 'Add New Project'}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Software">Software</option>
                            <option value="Apps">Apps</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            type="url"
                            required
                            placeholder="https://images.unsplash.com/..."
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.image_url}
                            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                        />
                        {formData.image_url && (
                            <div className="mt-2">
                                <p className="text-xs text-gray-500 mb-1">Preview:</p>
                                <img src={formData.image_url} alt="Preview" className="w-full h-32 object-cover rounded bg-gray-100" />
                            </div>
                        )}
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

export default WorkPage;
