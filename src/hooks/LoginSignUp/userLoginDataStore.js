import { create } from "zustand";

export const useLoginStore = create((set) => ({
    loginData: {
        patient_id: '',
        username: '',
        first_name: '',
        token: ''
    },
    setLoginData: (newData) => set({loginData: newData})
}))