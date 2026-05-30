import { ref } from "vue";

const isStoredAuth = localStorage.getItem('isAuthenticated');
const isAuthenticated = ref(!!isStoredAuth);

export const useFakeAuth = () => {
 const login = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    isAuthenticated.value = true;
    syncLocalStorage();
 }

 const logout = async () => {
    isAuthenticated.value = false;
    syncLocalStorage();
 }

 const syncLocalStorage = () => {
     if (isAuthenticated.value) {
         localStorage.setItem('isAuthenticated', 'true');
     } else {
         localStorage.removeItem('isAuthenticated');
     }
 }

 return {
    isAuthenticated,
    login,
    logout
 }
}