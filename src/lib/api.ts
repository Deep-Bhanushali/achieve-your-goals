// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

interface ApiResponse<T> {
  message: string;
  data?: T;
  user?: T;
}

// User API calls
export const userApi = {
  signUp: async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
  }) => {
    const response = await fetch(`${API_BASE_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  getUser: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    return response.json();
  },

  getAllUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
  },

  updateUser: async (
    id: string,
    userData: { firstName?: string; lastName?: string; phone?: string }
  ) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  deleteUser: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

// Contact Form API calls
export const contactApi = {
  submitForm: async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    subject?: string;
    serviceType?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/contact/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
  },

  getForms: async () => {
    const response = await fetch(`${API_BASE_URL}/contact`);
    return response.json();
  },

  getForm: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/contact/${id}`);
    return response.json();
  },

  deleteForm: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

// Health check
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
};
