<template>
  <div class="dashboard">
    <div class="dashboard-toolbar">
      <div class="dashboard-toolbar__left">
        <div class="dashboard-toolbar__filter">
          Last 30 days
        </div>
      </div>
      <div class="dashboard-toolbar__right">
        <button class="dashboard-toolbar__action">Add Transaction</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;

}
.dashboard-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.dashboard-toolbar__filter {
  min-height: 36px;
  min-width: 180px;
  display: flex;
  align-items: center;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.dashboard-toolbar__action {
  min-height: 36px;
  padding: 0 20px;
  border-radius: var(--radius-md);
  border: var(--button-primary-border);
  background: var(--button-primary-bg);
  color: var(--button-primary-color);
  font-weight: 600;
}

</style>