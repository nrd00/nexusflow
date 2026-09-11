import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLogged: true,

  login: () => {
    set({ isLogged: true });
  },

  logout: () => {
    set({ isLogged: false });
  },
}));

export default useAuthStore;