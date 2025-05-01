import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null,
    }),
    actions: {
        login({ email }) {
            this.user = { email }
            this.isAuthenticated = true
            console.log(`user ${email} logged in`)
        },
        logout() {
            this.user = null
            this.isAuthenticated = false
        }
    },
    persist: {
        storage: localStorage,
    }
})