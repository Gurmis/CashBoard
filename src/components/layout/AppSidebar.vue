<template>
  <aside class="sidebar">
    <div class="sidebar__brand">CashBoard</div>

    <nav class="sidebar__nav">
      <a href="#" class="sidebar__link sidebar__link--active nav-item nav-item--active">Dashboard</a>
      <a href="#" class="sidebar__link nav-item">Expenses</a>
      <a href="#" class="sidebar__link nav-item">Reports</a>
      <a href="#" class="sidebar__link nav-item">Settings</a>
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
  min-height: 40px;
  padding: 0 12px;
}

.sidebar__link:hover {
}

.sidebar__link--active {
}

.sidebar__link--active:hover {
}
</style>