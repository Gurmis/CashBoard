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
    <div class="dashboard-stats">
      <div class="dashboard-stats__card surface" style="background: #3b82f6">Card 1</div>
      <div class="dashboard-stats__card surface" style="background: #8b5cf6">Card 2</div>
      <div class="dashboard-stats__card surface" style="background: #7c3aed">Card 3</div>
    </div>
    <div class="dashboard-content">
      <div class="dashboard-content__main-panel surface">Main Panel</div>
      <div class="dashboard-content__side-panel surface">Side Panel</div>
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

.dashboard-toolbar__left,
.dashboard-toolbar__right {
  display: flex;
}

.dashboard-toolbar__filter {
  min-height: 44px;
  min-width: 180px;
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  color: var(--text-primary);
}

.dashboard-toolbar__action {
  min-height: 44px;
  padding: 0 20px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--button-primary-border);
  background: var(--button-primary-bg);
  color: var(--button-primary-color);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast),
      color var(--transition-fast),
      box-shadow var(--transition-fast),
      transform var(--transition-fast);
}

.dashboard-toolbar__action:hover {
  background: var(--button-primary-hover-bg);
  border-color: var(--button-primary-hover-border);
  color: var(--button-primary-hover-color);
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.dashboard-stats__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 24px;
  min-height: 100px;
  border-radius: var(--radius-lg);
  color: var(--text-primary);
}

.dashboard-content {
  display: flex;
  gap: 24px;
}

.dashboard-content__main-panel {
  flex: 3;
  min-height: 400px;
  padding: 24px;
}
.dashboard-content__side-panel {
  flex: 1;
  min-height: 400px;
  padding: 24px;
}

</style>