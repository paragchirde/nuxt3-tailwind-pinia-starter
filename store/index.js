import { defineStore } from "pinia";
export const useStore = defineStore({
    id:'base-store',
    state: () => {
        return {
            theme:'dark'
        }
    },
    actions:{},
    getters:{}
})