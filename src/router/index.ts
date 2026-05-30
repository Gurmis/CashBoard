import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from "@/views/DashboardView.vue";
import ExpensesView from "@/views/ExpensesView.vue";
import AuthLayout from "@/components/layout/AuthLayout.vue";
import AppLayout from "@/components/layout/AppLayout.vue";
import LoginView from "@/views/LoginView.vue";
import ReportsView from "@/views/ReportsView.vue";
import SettingsView from "@/views/SettingsView.vue";
import { useFakeAuth } from "@/composables/useFakeAuth.ts";

const appRoutes = [
    { name: 'dashboard', path: '/dashboard', component: DashboardView },
    { name: 'expenses', path: '/expenses', component: ExpensesView },
    { name: 'reports', path: '/reports', component: ReportsView },
    { name: 'settings', path: '/settings', component: SettingsView },
]

const authRoutes = [
    {   name: 'login',
        path: '',
        component: LoginView
    }
]

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '', redirect: {name: 'dashboard'}},
            ...appRoutes
        ],
        meta: {
            requiresAuth: true
        }
    },
    {
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
router.beforeEach((to, from) => {
    const { isAuthenticated } = useFakeAuth();

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !isAuthenticated.value) {
        return { name: 'login' };
    } else if (to.name === 'login' && isAuthenticated.value) {
        return { name: 'dashboard' };
    }
})

export default router