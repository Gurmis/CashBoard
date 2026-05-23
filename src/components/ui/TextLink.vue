<template>
  <Link
      class="text-link"
      :to="to"
      :href="href"
  >
    <slot />
  </Link>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import Link from "@/components/ui/Link.vue";

const props = defineProps<{
  to?: RouteLocationRaw,
  href?: string,
}>();
</script>

<style scoped lang="scss">
.text-link {
  color: var(--link-color);
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--link-hover-color);
  }
}
</style>