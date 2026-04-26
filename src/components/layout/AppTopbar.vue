<template>
  <header class="topbar">
    <div class="topbar__title">Dashboard</div>

    <div class="topbar__actions">
      <button class="topbar__theme-button" type="button" @click="isDark = !isDark">
        {{ isDark ? 'Light' : 'Dark'}}
      </button>

      <div class="topbar__avatar">PG</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

const isDark = ref(false);

watch(isDark, (value) => {
  document.documentElement.classList.toggle('dark', value);
  localStorage.setItem('theme', value ? 'dark' : 'light');
})

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  isDark.value = savedTheme === "dark";
});
</script>

<style lang="scss" scoped>
.topbar {
  height: 64px;
  background: var(--surface-panel);
  border-bottom: 1px solid var(--border-subtle);
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
  color: var(--text-primary);
}

.topbar__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.topbar__theme-button {
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  background: var(--surface-panel);
  color: var(--text-primary);
  font-weight: 500;
  transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast);
}

.topbar__theme-button:hover {
  background: var(--surface-card-muted);
}

.topbar__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
</style>