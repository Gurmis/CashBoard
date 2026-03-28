import {createRouter, createWebHistory} from 'vue-router'
import DashboardView from "../view/DashboardView.vue";
import ExpensesView from "@/view/ExpensesView.vue";

const routes = [
    { path: '/', component: DashboardView },
    { path: '/expenses', component: ExpensesView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router