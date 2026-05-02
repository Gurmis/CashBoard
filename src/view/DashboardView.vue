<template>
  <div class="dashboard">
    <div class="dashboard-toolbar">
      <div class="dashboard-toolbar__left">
        <div class="dashboard-toolbar__filter">
          Last 30 days
        </div>
      </div>
      <div class="dashboard-toolbar__right">
        <button class="dashboard-toolbar__action">+ Add Transaction</button>
      </div>
    </div>
    <div class="dashboard-stats">
      <div class="stat-card stat-card--blue surface">
        <div class="stat-card__icon">
          <Icon icon="lucide:euro" />
        </div>

        <div class="stat-card__content">
          <div class="stat-card__label">Total Balance</div>
          <div class="stat-card__summary">
            <div class="stat-card__value">$18,300.45</div>
            <div class="stat-card__trend stat-card__trend--positive">+8%</div>
          </div>
        </div>
      </div>

      <div class="stat-card stat-card--purple surface">
        <div class="stat-card__icon">
          <Icon icon="lucide:wallet" />
        </div>

        <div class="stat-card__content">
          <div class="stat-card__label">Available Balance</div>
          <div class="stat-card__summary">
            <div class="stat-card__value">$6,240.00</div>
            <div class="stat-card__trend stat-card__trend--negative">-3%</div>
          </div>
        </div>
      </div>

      <div class="stat-card surface stat-card--indigo">
        <div class="stat-card__icon">
          <Icon icon="lucide:piggy-bank" />
        </div>

        <div class="stat-card__content">
          <div class="stat-card__label">Savings</div>
          <div class="stat-card__summary">
            <div class="stat-card__value">$12,060.45</div>
            <div class="stat-card__trend stat-card__trend--positive">+12%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-content">
      <div class="dashboard-content__main-panel">
        <div class="main-panel__header">
            <h3 class="text-2xl font-medium">Recent Transactions</h3>
        </div>
        <div class="main-panel__body surface">
          <div class="table-wrapper">
            <table class="transactions-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Connor McDavid</td>
                  <td>Income</td>
                  <td>7 April 2026</td>
                  <td>-$2000</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>Connor McDavid</td>
                  <td>Expense</td>
                  <td>7 April 2026</td>
                  <td>-$2000</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>Austin Mathews</td>
                  <td>Income</td>
                  <td>7 May 2026</td>
                  <td>+$400</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>Leon Draisaitl</td>
                  <td>Income</td>
                  <td>7 January 2026</td>
                  <td>+$2000</td>
                  <td>...</td>
                </tr>
              <tr>
                <td>Juraj Slafkovsky</td>
                <td>Income</td>
                <td>7 February 2026</td>
                <td>+$2000</td>
                <td>...</td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="5" class="table-footer-cell text-right">
                  <button class="table-footer-action">View All →</button>
                </td>
              </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div class="dashboard-content__side-panel surface">Side Panel</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

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
  border-radius: var(--radius-xl);
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;

  @media (max-width: 1195px) {
    grid-template-columns: repeat(2, minmax(250px, 320px));
    justify-content: start;
  }

  @media (max-width: 830px) {
    grid-template-columns: minmax(0, 1fr);
  }
}

.stat-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 16px;
  min-height: 100px;
  background: var(--stat-card-bg);
  border: 1px solid var(--stat-card-border);
  color: var(--text-primary);
}

.stat-card--purple {
  --stat-card-bg: var(--metric-purple-bg);
  --stat-card-border: var(--metric-purple-border);
  --stat-card-icon-bg: var(--metric-purple-icon-bg);
  --stat-card-icon-color: var(--metric-purple-icon-color);
}

.stat-card--blue {
  --stat-card-bg: var(--metric-blue-bg);
  --stat-card-border: var(--metric-blue-border);
  --stat-card-icon-bg: var(--metric-blue-icon-bg);
  --stat-card-icon-color: var(--metric-blue-icon-color);
}

.stat-card--indigo {
  --stat-card-bg: var(--metric-indigo-bg);
  --stat-card-border: var(--metric-indigo-border);
  --stat-card-icon-bg: var(--metric-indigo-icon-bg);
  --stat-card-icon-color: var(--metric-indigo-icon-color);
}

.stat-card__icon {
  width: 38px;
  height: 48px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--radius-lg);

  background: var(--stat-card-icon-bg);
  color: var(--stat-card-icon-color);
}

.stat-card__icon--balance {
  background: var(--accent-soft);
  color: var(--accent-primary);
}

.stat-card__icon--available {
  background: var(--status-success-soft);
  color: var(--status-success);
}

.stat-card__icon--savings {
  background: var(--status-warning-soft);
  color: var(--status-warning);
}

.stat-card__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.stat-card__label {
  font-size: 0.975rem;
  color: var(--text-muted);
}


.stat-card__summary {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 8px;
}

.stat-card__value {
  font-size: 1.225rem;
  font-weight: 500;
  color: var(--text-primary);
}

.stat-card__trend {
  font-size: 0.9rem;
  color: var(--stat-card-trend-color);
}

.stat-card__trend--positive {
  color: var(--status-success);
}

.stat-card__trend--negative {
  color: var(--status-danger);
}

.dashboard-content {
  display: flex;
  margin-top: 16px;
  gap: 32px;
}

.dashboard-content__main-panel {
  display: flex;
  flex-direction: column;
  flex: 3;
  align-self: flex-start;
  //min-height: 200px;
  //background: var(--card-bg);
}

.main-panel__header {
  margin-bottom: 16px;
}

.main-panel__body {
  flex: 1;
  min-width: 0;
}

.dashboard-content__side-panel {
  flex: 1;
  align-self: flex-start;
  min-height: 320px;
  padding: 16px;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.transactions-table {
  width: 100%;
  border-collapse: collapse;
}

.transactions-table th,
.transactions-table td {
  padding: 14px 12px;
  white-space: nowrap;
}

.transactions-table th {
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border-subtle);
}

.transactions-table td {
  font-size: 0.95rem;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-subtle);
}

.transactions-table tfoot tr td {
  border-bottom: none;
}

.text-right {
  text-align: right;
}
</style>