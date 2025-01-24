import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/auth";

// Login function to get JWT token
export const login = async (username: string, password: string): Promise<string> => {
    try{
        const response = await axios.post(`${API_BASE_URL}/login`, {username, password});
        return response.data.token;        
    }catch(error: any){
        throw new Error(error.response?.data?.message || 'Login failed');
    }
}

//Secure API call with JWT
export const getSecureData = async (token: string): Promise<string> => {
    try{
        const response = await axios.get(`${API_BASE_URL}/secure`, {
            headers: {
                Autorization: `Bearer ${token}`,
            },
        });

        return response.data.message;
    }catch(error: any){
        throw new Error(error.response?.data?.message || 'Failed to fetch secure data');
    }
};

