<template>
 <button
     class="button"
     :class="[`button--${variant}`, `button--${size}`]"
     :type="props.type"
     :disabled="props.disabled || props.loading"
     @click="emit('click', $event)"

 >
   <slot name="icon" v-if="hasIcon && props.iconPosition === 'left'"/>
   <slot />
   <slot name="icon" v-if="hasIcon && props.iconPosition === 'right'"/>
 </button>
</template>

<script setup lang="ts">
import {computed, useSlots} from "vue";

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary',
  size?: 'sm' | 'md' | 'lg',
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  loading?: boolean,
  iconPosition?: 'left' | 'right'
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  iconPosition: 'left'
})

const emit = defineEmits(['click'])
const slots = useSlots();

const hasIcon = computed(() => {
  return !!slots.icon;
})
</script>

<style scoped lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast),
      color var(--transition-fast),
      box-shadow var(--transition-fast),
      transform var(--transition-fast);

  &--primary {
    background: var(--button-primary-bg);
    border: 1px solid var(--button-primary-border);
    color: var(--button-primary-color);

    &:hover {
      background: var(--button-primary-hover-bg);
      border-color: var(--button-primary-hover-border);
      color: var(--button-primary-hover-color);
    }
  }

  &--secondary {
    background: var(--button-secondary-bg);
    border: 1px solid var(--button-secondary-border);
    color: var(--button-secondary-color);

    &:hover {
      background: var(--button-secondary-hover-bg);
      border-color: var(--button-secondary-hover-border);
      color: var(--button-secondary-hover-color);
    }
  }

  &:disabled {
    background: var(--button-disabled-bg);
    border: 1px solid var(--button-disabled-border);
    color: var(--button-disabled-color);
    cursor: not-allowed;
  }

  &--sm {
    min-height: 36px;
    padding: 0 14px;
    border-radius: var(--radius-lg);
  }

  &--md {
    min-height: 44px;
    padding: 0 20px;
    border-radius: var(--radius-xl);
  }

  &--lg {
    min-height: 52px;
    padding: 0 24px;
    border-radius: var(--radius-xl);
  }
}
</style>