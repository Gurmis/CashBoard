<template>
  <div class="expenses">
    <div class="expenses-toolbar">
      <div class="expenses-toolbar__left">
        <div class="expenses-toolbar__filter">
          Last 30 days
        </div>
      </div>
      <div class="expenses-toolbar__right">
        <Button @click="clickHandler">
          <template #icon>
            <Icon icon="lucide:plus" width="25" height="25" />
          </template>
          <span>Add Expense</span>
        </Button>
      </div>
    </div>
    <div class="expenses-stats">
      <StatCard
          v-for="card in statCards"
          :variant="card.variant"
          :label="card.label"
          :value="card.value"
          :trend="card.trend"
          :trend-variant="card.trendVariant"
          :key="card.label"
      >
        <template #icon>
          <Icon :icon="card.icon" width="25" height="25"/>
        </template>
      </StatCard>
    </div>
    <div class="expenses-content">
      <div class="expenses-content__main-panel">
        <div class="main-panel__header">
          <h3 class="text-2xl font-medium">Expenses</h3>
        </div>
        <div class="main-panel__body surface">
          <div class="table-wrapper">
            table here
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Badge from "@/components/ui/Badge.vue";
import StatCard from "@/components/ui/StatCard.vue";
import IconButton from "@/components/ui/IconButton.vue";
import {Icon} from "@iconify/vue";
import TextLink from "@/components/ui/TextLink.vue";
import Button from "@/components/ui/Button.vue";
import type {StatCardConfig} from "@/types.ts";
import {ref, type Ref} from "vue";

// const statCards: Ref<StatCardConfig[] | null> = ref(null);
const clickHandler = (e: Event) => {
  console.log('click', e);
}

// temporary until composable+service implemented, just to see the layout properly
const statCards: StatCardConfig[] = [
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
.expenses {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}

.expenses-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  &__left,
  &__right {
    display: flex;
  }

  &__filter {
    min-height: 44px;
    min-width: 180px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    color: var(--text-primary);
  }
}

.expenses-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.expenses-content {
  display: flex;
  margin-top: 16px;
  gap: 24px;

  &__main-panel {
    display: flex;
    flex-direction: column;
    flex: 3;
    align-self: flex-start;
  }

  &__side-panel {
    flex: 1;
    align-self: flex-start;
    min-height: 320px;
    min-width: 240px;
    overflow: hidden;
  }
}

.main-panel {
  &__header {
    margin-bottom: 16px;
  }

  &__body {
    flex: 1;
    min-width: 0;
  }
}

.side-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);

  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }

  &__text {
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-bottom: 0;
  }

  &__cta {
    align-self: flex-start;
  }
}

@media (max-width: 1090px) {
  .expenses-content {
    flex-direction: column;

    &__main-panel {
      width: 100%;
    }
  }

  .side-card {
    max-width: 320px;
  }
}
</style>