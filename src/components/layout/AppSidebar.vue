<template>
  <aside class="sidebar">
    <div class="sidebar__brand">CashBoard</div>

    <nav class="sidebar__nav">
      <NavItem href="#serus" class="sidebar__link" active>
        <Icon icon="lucide:home" />
        Dashboard
      </NavItem>
      <NavItem href="#serus" class="sidebar__link">
        <Icon icon="lucide:wallet" />
        Expenses
      </NavItem>
      <NavItem href="#serus" class="sidebar__link">Reports</NavItem>
      <NavItem href="#serus" class="sidebar__link">Settings</NavItem>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import NavItem from "@/components/ui/NavItem.vue";
import {Icon} from "@iconify/vue";
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

.sidebar__link {
  min-height: 44px;
  padding: 8px 12px;
}

.sidebar__link:hover {
}

.sidebar__link--active {
}

.sidebar__link--active:hover {
}
</style>