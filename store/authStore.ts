import create, { GetState, SetState } from "zustand";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import api from "../lib/api";
type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
};

type AuthState = {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
  loggedIn: boolean;
  authLoading: boolean;
};

const useAuthStore = create<AuthState>(
  (set: SetState<AuthState>, get: GetState<AuthState>) => ({
    user: null,
    loggedIn: false,
    authLoading: false,
    signIn: (user) =>
      set((state) => ({
        ...state,
        user,
        loggedIn: true,
      })),
    signOut: () =>
      set((state) => ({
        ...state,
        loggedIn: false,
        user: null,
      })),
    auth: () =>
      set((state) => ({
        ...state,
        loggedIn: false,
        user: null,
      })),
  })
);

export default useAuthStore;
