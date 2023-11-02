import { create } from "zustand";

export const useSignUpStore = create((set) => ({
    signUpData: {
        emailAdd: '',
        userName: '',
        passWord: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        middleName: '',
        birthDate: '',
        age: '',
        civilStats: '',
        gender: '',
        homeAdd: '',
        contact: '',
        religion: ''
    },
    setSignUpData: (newData) => set({signUpData: newData}),
    clearSignUpData: () => set((state) => ({...state, data: {}})),
}));  

export function saveToLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}
  
export function loadFromLocalStorage(key) {
    const data = window.localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}