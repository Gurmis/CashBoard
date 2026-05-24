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
      <stat-card
          v-for="card in statCardsSamle"
          :variant="card.variant"
          :label="card.label"
          :value="card.value"
          :trend="card.trend"
          :trend-variant="card.trendVariant"
      >
        <template #icon>
          <Icon :icon="card.icon" width="25" height="25"/>
        </template>
      </stat-card>
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
                    <IconButton aria-label="ellipsis_button">
                      <Icon icon="lucide:ellipsis"/>
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td>Connor McDavid</td>
                  <td><Badge variant="danger">Expense</Badge></td>
                  <td>7 April 2026</td>
                  <td class="status-negative">-$2000</td>
                  <td>
                    <IconButton aria-label="ellipsis_button" @click="clickHandler">
                      <Icon icon="lucide:ellipsis"/>
                    </IconButton>
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
                    <IconButton aria-label="ellipsis_button">
                      <Icon icon="lucide:ellipsis"/>
                    </IconButton>
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
                    <IconButton aria-label="ellipsis_button">
                      <Icon icon="lucide:ellipsis"/>
                    </IconButton>
                  </td>
                </tr>
              <tr>
                <td>Juraj Slafkovsky</td>
                <td>
                  <Badge variant="success">Income</Badge>
                </td>
                <td>7 February 2026</td>
                <td class="status-positive">+$2000</td>
                <td>
                  <IconButton aria-label="ellipsis_button">
                    <Icon icon="lucide:ellipsis" />
                  </IconButton>
                </td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="5" class="table-footer-cell text-right">
                  <text-link href="#">View All →</text-link>
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
            <text-link href="#">Learn More →</text-link>
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
import IconButton from "@/components/ui/IconButton.vue";
import TextLink from "@/components/ui/TextLink.vue";
import StatCard from "@/components/ui/StatCard.vue";
import type {StatCardConfig} from "@/types.ts";

const clickHandler = (e: Event) => {
  console.log('click', e);
}

const statCardsSamle: StatCardConfig[] = [
  {
    variant: "blue",
    label: "Total Balance",
    value: "$18,300.00",
    trend: "-3%",
    trendVariant: "negative",
    icon: "lucide:euro"
  },
  {
    variant: "purple",
    label: "Available Balance",
    value: "$6,240.00",
    trend: "-7%",
    trendVariant: "negative",
    icon: "lucide:wallet"
  },
  {
    variant: "indigo",
    label: "Savings",
    value: "$12,060.00",
    trend: "10%",
    trendVariant: "positive",
    icon: "lucide:piggy-bank"
  }
]
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