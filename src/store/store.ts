import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the User type
interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string | null; // Email can be null
}

// Define the Zustand store type
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

// Create the Zustand store with persistence
const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      // Login function
      login: (user) => set({ user, isAuthenticated: true }),

      // Logout function
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage", // Key for localStorage
    }
  )
);

export default useAuthStore;
