<template>
    <div class="app-layout">
      <div class="app-layout__sidebar">
        <AppSidebar />
      </div>
      <div class="app-layout__app-main">
        <AppTopbar />
        <main class="app-layout__content">
          <div class="app-layout__content-inner">
            <RouterView />
          </div>
        </main>
      </div>
    </div>
</template>

<script setup lang="ts">

import AppSidebar from "@/components/layout/AppSidebar.vue";
import AppTopbar from "@/components/layout/AppTopbar.vue";
</script>

<style scoped lang="scss">
.app-layout {
  display: flex;
  flex: 1;

  &__sidebar {
    width: 256px;
    flex-shrink: 0;
  }

  &__app-main {
  display: flex;
  flex: 1;
  flex-direction: column;
  }

  &__content {
    flex: 1;
    overflow: auto;
    padding: 16px 24px 24px;
  }

  &__content-inner {
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>