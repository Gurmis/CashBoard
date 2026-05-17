<template>
 <button
     class="icon-button"
     :class="['icon-button--' + size]"
     :type="type"
     :disabled="disabled"
     @click="emit('click', $event)"
 >
   <slot />
 </button>
</template>

<script setup lang="ts">
 const props = withDefaults(defineProps<{
   type?: 'button' | 'submit' | 'reset'
   size?: 'sm' | 'md' | 'lg'
   disabled?: boolean
 }>(), {
   type: 'button',
   size: 'md',
   disabled: false
 })

 const emit = defineEmits(['click'])
</script>

<style scoped lang="scss">
.icon-button {
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

  :deep(svg) {
    width: var(--icon-button-icon-size);
    height: var(--icon-button-icon-size);
  }

  &--sm {
    height: 28px;
    width: 28px;
    --icon-button-icon-size: 14px;
  }

  &--md {
    height: 32px;
    width: 32px;
    --icon-button-icon-size: 18px;
  }

  &--lg {
    height: 40px;
    width: 40px;
    --icon-button-icon-size: 22px;
  }
}

.icon-button:hover {
  background: var(--icon-button-hover-bg);
  border-color: var(--icon-button-hover-border);
  color: var(--icon-button-hover-color);
}
</style>