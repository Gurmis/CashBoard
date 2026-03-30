<template>
  <header class="topbar">
    <div class="topbar__title">Dashboard</div>

    <div class="topbar__actions">
      <button class="topbar__theme-button" type="button">
        Theme
      </button>

      <div class="topbar__avatar">PG</div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.topbar {
  height: 64px;
  background: var(--color-topbar-bg);
  border-bottom: 1px solid var(--color-topbar-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  backdrop-filter: blur(10px);
  transition:
      background-color var(--transition-base),
      border-color var(--transition-base);
}

.topbar__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
}

.topbar__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.topbar__theme-button {
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  font-weight: 500;
  transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast);
}

.topbar__theme-button:hover {
  background: var(--color-surface-muted);
}

.topbar__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
</style>