<template>
  <span
      :class="['badge', `badge--${variant}`, `badge--${size}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant: 'success' | 'neutral' | 'warning' | 'danger',
  size?: 'sm' | 'md'
}>(),
    {
  size: 'md'
})
</script>

<style scoped lang="scss">
.badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  font-weight: 500;
  line-height: 1;

  &--sm {
    padding: 3px 7px;
    font-size: 0.75rem;
  }

  &--md {
    padding: 4px 8px;
    font-size: 0.8125rem;
  }

  &--success {
    background: var(--status-success-soft);
    color: var(--status-success);
  }

  &--neutral {
    background: var(--accent-soft);
    color: var(--status-info);
  }

  &--warning {
    background: var(--status-warning-soft);
    color: var(--status-warning);
  }

  &--danger {
    background: var(--status-danger-soft);
    color: var(--status-danger);
  }
}
</style>