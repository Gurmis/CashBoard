<template>
  <div class="auth-layout">
    <main class="auth-layout__content">
      <div class="auth-layout__content-inner">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.auth-layout {
  display: flex;
  flex: 1;
  flex-direction: column;

  &__content {
    flex: 1;
    overflow: auto;
    padding: 16px 24px 24px;

    &-inner {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>