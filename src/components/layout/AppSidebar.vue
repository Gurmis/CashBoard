<template>
  <aside class="sidebar">
    <div class="sidebar__brand">CashBoard</div>

    <nav class="sidebar__nav">
      <a href="#" class="sidebar__link sidebar__link--active">Dashboard</a>
      <a href="#" class="sidebar__link">Expenses</a>
      <a href="#" class="sidebar__link">Reports</a>
      <a href="#" class="sidebar__link">Settings</a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-sidebar-bg);
  border-right: 1px solid var(--color-sidebar-border);
  color: var(--color-sidebar-text);
  padding: 24px 16px;
  transition:
      background-color var(--transition-base),
      border-color var(--transition-base),
      color var(--transition-base);
}

.sidebar__brand {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-sidebar-brand);
  margin-bottom: 32px;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar__link {
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 12px;
  border-radius: var(--radius-md);
  color: var(--color-sidebar-text);
  font-weight: 500;
  transition:
      background-color var(--transition-fast),
      color var(--transition-fast);
}

.sidebar__link:hover {
  background: var(--color-sidebar-item-hover);
}

.sidebar__link--active {
  background: var(--color-sidebar-item-active);
  color: var(--color-sidebar-text-active);
  font-weight: 600;
}

.sidebar__link--active:hover {
  background: var(--color-sidebar-item-active);
}
</style>