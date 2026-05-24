<template>
  <div class="stat-card surface" :class="`stat-card--${variant}`">
    <div class="stat-card__icon">
      <slot name="icon" />
    </div>

    <div class="stat-card__content">
      <div class="stat-card__label">{{label}}</div>
      <div class="stat-card__summary">
        <div class="stat-card__value">{{value}}</div>
        <div
            class="stat-card__trend"
            :class="`stat-card__trend--${trendVariant}`"
        >
          {{trend}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'blue' | 'purple' | 'indigo',
  label: string,
  value: string,
  trend?: string,
  trendVariant?: 'positive' | 'negative',
}>(),
    {
      variant: 'blue'
})
</script>

<style scoped lang="scss">
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

  &--blue {
    --stat-card-bg: var(--metric-blue-bg);
    --stat-card-border: var(--metric-blue-border);
    --stat-card-icon-bg: var(--metric-blue-icon-bg);
    --stat-card-icon-color: var(--metric-blue-icon-color);
  }

  &--purple {
    --stat-card-bg: var(--metric-purple-bg);
    --stat-card-border: var(--metric-purple-border);
    --stat-card-icon-bg: var(--metric-purple-icon-bg);
    --stat-card-icon-color: var(--metric-purple-icon-color);
  }

  &--indigo {
    --stat-card-bg: var(--metric-indigo-bg);
    --stat-card-border: var(--metric-indigo-border);
    --stat-card-icon-bg: var(--metric-indigo-icon-bg);
    --stat-card-icon-color: var(--metric-indigo-icon-color);
  }

  &__icon {
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
}

.stat-card__trend--positive {
  color: var(--status-success);
}

.stat-card__trend--negative {
  color: var(--status-danger);
}
</style>