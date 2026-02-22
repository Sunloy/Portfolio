export const API_URL = 'http://localhost:3001/api';

const getHeaders = (isFormData = false) => {
    const token = localStorage.getItem('token');
    const headers = {
        'Authorization': token ? `Bearer ${token}` : '',
    };
    if (!isFormData) {
        headers['Content-Type'] = 'application/json';
    }
    return headers;
};

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            headers: getHeaders()
        });
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                window.location.href = '/login';
                throw new Error('Session expired');
            }
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        if (error.message !== 'Session expired') {
            // alert(`API Error: ${error.message}`);
        }
        throw error;
    }
};

export const createData = async (endpoint, data) => {
    const isFormData = data instanceof FormData;
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: getHeaders(isFormData),
            body: isFormData ? data : JSON.stringify(data),
        });
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem('token');
                window.location.href = '/login';
                throw new Error('Session expired');
            }
            const errData = await response.json();
            throw new Error(errData.error || 'Failed to create data');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        alert(`Creation Error: ${error.message}`);
        throw error;
    }
};

export const updateData = async (endpoint, id, data) => {
    const isFormData = data instanceof FormData;
    try {
        const response = await fetch(`${API_URL}${endpoint}/${id}`, {
            method: 'PUT',
            headers: getHeaders(isFormData),
            body: isFormData ? data : JSON.stringify(data),
        });
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem('token');
                window.location.href = '/login';
                throw new Error('Session expired');
            }
            const errData = await response.json();
            throw new Error(errData.error || 'Failed to update data');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        alert(`Update Error: ${error.message}`);
        throw error;
    }
};

export const deleteData = async (endpoint, id) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}/${id}`, {
            method: 'DELETE',
            headers: getHeaders(),
        });
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem('token');
                window.location.href = '/login';
                throw new Error('Session expired');
            }
            const errData = await response.json();
            throw new Error(errData.error || 'Failed to delete data');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        alert(`Delete Error: ${error.message}`);
        throw error;
    }
};
