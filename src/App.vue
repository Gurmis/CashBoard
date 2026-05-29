<template>
  <div class="app-shell">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.app-shell {
  display: flex;
  min-height: 100vh;
  background: var(--surface-page);
}
</style>
