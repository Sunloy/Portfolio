export const API_URL = 'http://localhost:3001/api';

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch from ${endpoint}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        return []; // Return empty array on error to prevent crashes
    }
};
