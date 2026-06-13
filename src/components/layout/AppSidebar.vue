<template>
  <aside class="sidebar">
    <div class="sidebar__brand">CashBoard</div>

    <nav class="sidebar__nav">
      <NavItem
          v-for="item in navItems"
          :key="item.href ?? String(item.to)"
          :href="item.href"
          :to="item.to"
          :active="item.active"
      >
        <template #icon v-if="item.icon">
          <Icon :icon="item.icon" />
        </template>
        {{item.label}}
      </NavItem>
    </nav>
    <div class="sidebar__footer">
      <Button @click="handleLogout" size="sm" variant="secondary">
        <template #icon>
          <Icon icon="lucide:log-out" />
        </template>
        Logout
      </Button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import NavItem from "@/components/ui/NavItem.vue";
import { Icon } from "@iconify/vue";
import type { NavItemConfig } from "@/types.ts";
import {useFakeAuth} from "@/composables/useFakeAuth.ts";
import Button from "@/components/ui/Button.vue";
import {useRouter} from "vue-router";

const { logout } = useFakeAuth();
const router = useRouter();

const handleLogout = async () => {
  await logout();
  await router.push({ name: 'login' });
}

const navItems: NavItemConfig[] = [
  {
   to: {
     name: 'dashboard'
   },
   label: 'Dashboard',
   icon: 'lucide:home'
  },
  {
    to: {
      name: 'expenses'
    },
    label: 'Expenses',
    icon: 'lucide:wallet',
  },
  {
    to: {
      name: 'reports'
    },
    label: 'Reports',
  },
  {
    to: {
      name: 'settings'
    },
    label: 'Settings',
  }
]
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--surface-panel);
  border-right: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 24px 16px;
  transition:
      background-color var(--transition-base),
      border-color var(--transition-base),
      color var(--transition-base);
}

.sidebar__brand {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 32px;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar__footer {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}
</style>