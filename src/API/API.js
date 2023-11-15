import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // replace with your actual API URL

const login = async (username, password) => {
    const response = await axios.post('http://localhost:8000/api/token/', {
        username: username,
        password: password
    });

    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
}

const getPrivateData = async () => {
    const response = await axios.get('http://localhost:8000/private-endpoint/', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    });

    return response.data;
}

// CRUD operations for WORKOUTS
export const getWorkouts = async () => {
    const response = await axios.get(`${API_URL}/workout/1`, {
        // headers: {
        //     'Authorization': `Bearer ${localStorage.getItem('access')}`
        // }
    });
    return response.data;
}

export const createWorkout = async (workoutData) => {
    const response = await axios.post(`${API_URL}/workouts/`, workoutData, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    });
    return response.data;
}

export const updateWorkout = async (workoutId, workoutData) => {
    const response = await axios.put(`${API_URL}/workouts/${workoutId}/`, workoutData, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    });
    return response.data;
}

export const deleteWorkout = async (workoutId) => {
    const response = await axios.delete(`${API_URL}/workouts/${workoutId}/`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    });
    return response.data;
}

