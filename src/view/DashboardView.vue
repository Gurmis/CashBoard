<template>
  <div class="dashboard">
    <div class="dashboard-toolbar">
      <div class="dashboard-toolbar__left">
        <div class="dashboard-toolbar__filter">
          Last 30 days
        </div>
      </div>
      <div class="dashboard-toolbar__right">
        <Button @click="clickHandler">
          <template #icon>
            <Icon icon="lucide:plus" width="25" height="25" />
          </template>
            <span>Add Transaction</span>
        </Button>
      </div>
    </div>
    <div class="dashboard-stats">
      <div class="stat-card stat-card--blue surface">
        <div class="stat-card__icon">
          <Icon icon="lucide:euro" width="25" height="25"/>
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
          <Icon icon="lucide:wallet" width="25" height="25" />
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
          <Icon icon="lucide:piggy-bank" width="25" height="25" />
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
                  <td>
                    <Badge variant="danger">Expense</Badge>
                  </td>
                  <td>7 April 2026</td>
                  <td class="status-negative">-$2000</td>
                  <td>
                    <button class="icon-button" type="button" aria-label="Open transaction actions">
                      <Icon icon="lucide:ellipsis" class="icon-button__icon" aria-hidden="true" />
                    </button>
                  </td>                </tr>
                <tr>
                  <td>Connor McDavid</td>
                  <td><Badge variant="danger">Expense</Badge></td>
                  <td>7 April 2026</td>
                  <td class="status-negative">-$2000</td>
                  <td>
                    <button class="icon-button" type="button" aria-label="Open transaction actions">
                      <Icon icon="lucide:ellipsis" class="icon-button__icon" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Austin Mathews</td>
                  <td>
                    <Badge variant="success">Income</Badge>
                  </td>
                  <td>7 May 2026</td>
                  <td class="status-positive">+$400</td>
                  <td>
                    <button class="icon-button" type="button" aria-label="Open transaction actions">
                      <Icon icon="lucide:ellipsis" class="icon-button__icon" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Leon Draisaitl</td>
                  <td>
                    <Badge variant="success">Income</Badge>
                  </td>
                  <td>7 January 2026</td>
                  <td class="status-positive">+$2000</td>
                  <td>
                    <button class="icon-button" type="button" aria-label="Open transaction actions">
                      <Icon icon="lucide:ellipsis" class="icon-button__icon" aria-hidden="true" />
                    </button>
                  </td>                </tr>
              <tr>
                <td>Juraj Slafkovsky</td>
                <td>
                  <Badge variant="success">Income</Badge>
                </td>
                <td>7 February 2026</td>
                <td class="status-positive">+$2000</td>
                <td>
                  <button class="icon-button" type="button" aria-label="Open transaction actions">
                    <Icon icon="lucide:ellipsis" class="icon-button__icon" aria-hidden="true" />
                  </button>
                </td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="5" class="table-footer-cell text-right">
                  <button class="table-footer-action text-link">View All →</button>
                </td>
              </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div class="dashboard-content__side-panel">
        <div class="side-card surface">
          <div class="side-card__media">
            <img src="../assets/images/getting_started.png" alt="getting_started">
          </div>

          <div class="side-card__content">
            <h3 class="side-card__title">Getting Started</h3>

            <p class="side-card__text">
              Learn how to effectively manage your finances with CashBoard.
            </p>

            <button class="side-card__cta text-link">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Button from "@/components/ui/Button.vue";
import Badge from "@/components/ui/Badge.vue";

const clickHandler = () => {
  console.log('click');
}

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

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
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
  gap: 24px;
}

.dashboard-content__main-panel {
  display: flex;
  flex-direction: column;
  flex: 3;
  align-self: flex-start;
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
  min-width: 240px;
  overflow: hidden;
}

.side-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
}

.side-card__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.side-card__text {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 0;
}

.side-card__cta {
  align-self: flex-start;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.transactions-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 400;
}

.transactions-table th,
.transactions-table td {
  padding: 14px 12px;
  white-space: nowrap;
}

.transactions-table th {
  text-align: left;
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 600;
  border-bottom: 1px solid var(--border-subtle);
}

.transactions-table td {
  border-bottom: 1px solid var(--border-subtle);
}

.transactions-table td:first-child {
  color: var(--link-color);
  font-weight: 500;
}

.transactions-table tfoot tr td {
  border-bottom: none;
}

.text-right {
  text-align: right;
}

.icon-button {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--icon-button-border);
  border-radius: var(--radius-md);
  background: var(--icon-button-bg);
  color: var(--icon-button-color);

  cursor: pointer;
  transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast),
      color var(--transition-fast);
}

.icon-button:hover {
  background: var(--icon-button-hover-bg);
  border-color: var(--icon-button-hover-border);
  color: var(--icon-button-hover-color);
}

.icon-button__icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 1090px) {
  .dashboard-content {
    flex-direction: column;
  }

  .dashboard-content__main-panel {
    width: 100%;
  }

  .side-card {
    max-width: 320px;
  }
}
</style>