<template>
  <Link
      class="nav-item"
      :class="{ 'nav-item--active': active }"
      :to="to"
      :href="href"
  >
    <span class="nav-item__content">
      <slot name="icon" />
      <slot />
    </span>
  </Link>
</template>

<script setup lang="ts">
import Link from "./Link.vue";
import type {RouteLocationRaw} from "vue-router";

const props = withDefaults(defineProps<{
  href?: string;
  to?: RouteLocationRaw;
  active?: boolean;
}>(), {
  active: false,
});
</script>

<style scoped lang="scss">
.nav-item {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 8px 12px;
  color: var(--nav-item-color);
  /*border: 1px solid transparent;*/
  border-radius: var(--radius-xl);
  font-weight: 500;
  text-decoration: none;
  transition:
      color var(--transition-fast);

  &:hover {
    background: var(--nav-item-hover-bg);
    border-color: var(--nav-item-hover-border);
    box-shadow: var(--nav-item-hover-shadow);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    transform: translateY(-2px);
  }

  &--active, &.router-link-exact-active {
    background: var(--nav-item-active-bg);
    color: var(--nav-item-active-color);
    border-color: var(--nav-item-active-border);
    box-shadow: var(--nav-item-active-shadow);
    font-weight: 600;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);

    &:hover {
      background: var(--nav-item-active-bg);
      border-color: var(--nav-item-active-border);
      box-shadow: var(--nav-item-active-shadow);
      transform: translateY(0);
    }
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>