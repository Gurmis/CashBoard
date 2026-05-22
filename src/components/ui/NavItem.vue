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
.nav-item__content {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>