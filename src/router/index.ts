import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from "@/views/DashboardView.vue";
import ExpensesView from "@/views/ExpensesView.vue";
import AuthLayout from "@/components/layout/AuthLayout.vue";
import AppLayout from "@/components/layout/AppLayout.vue";
import LoginView from "@/views/LoginView.vue";
import ReportsView from "@/views/ReportsView.vue";
import SettingsView from "@/views/SettingsView.vue";

const appRoutes = [
    { name: 'dashboard', path: '/dashboard', component: DashboardView },
    { name: 'expenses', path: '/expenses', component: ExpensesView },
    { name: 'reports', path: '/reports', component: ReportsView },
    { name: 'settings', path: '/settings', component: SettingsView },
]

const authRoutes = [
    { path: '', component: LoginView }
]

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '', redirect: {name: 'dashboard'}},
            ...appRoutes
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: AuthLayout,
        children: authRoutes
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router