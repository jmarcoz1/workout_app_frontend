import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // replace with your actual API URL

const login = async (username, password) => {
    const response = await axios.post('http://localhost:8000/api/token/', {
        username: username,
        password: password
    });

    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
    localStorage.setItem('username', response.data.username);
    // this.setState({ username: response.data.username });

}

// const userId = async (username) => {
//     const response = await axios.get(`/api/users/${username}/id/`)
//     console.log({response})
// }

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
    // userId('Jorge')
    let username = localStorage.getItem('username').toString()
    let uidResponse = await axios.get(`${API_URL}/users/${username}/id/`)
    const userID = uidResponse.data.id
    // fetch(`/api/users/${username}/id/`, {
    //     headers: {
    //       'Authorization': `Bearer ${access}`,  // Assuming `token` is your JWT token
    //     },
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     const userId = data.id;
    //     console.log({userId})
    //     // Now you can use the user ID in your other requests
    //   })
    //   .catch(error => console.error(error));
    
    const response = await axios.get(`${API_URL}/user/${userID}/workouts/`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
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

