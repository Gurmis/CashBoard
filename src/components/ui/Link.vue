<template>
  <RouterLink v-if="to" :to="to" v-bind="$attrs">
    <slot />
  </RouterLink>
  <a v-else-if="href" :href="href"  v-bind="$attrs" :target="target" :rel="computedRel">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { type RouteLocationRaw } from 'vue-router';
import {computed, onMounted} from "vue";

const props = defineProps<{
  to?: RouteLocationRaw,
  href?: string,
  target?: '_blank' | '_self',
  rel?: string,
}>()

const computedRel = computed(() => {
  if (props.target === "_blank") {
    return "noopener noreferrer";
  }

  return props.rel;
});


onMounted(() => {
// warning if no `to` or `href` prop is provided
  if (import.meta.env.DEV && !props.to && !props.href) {
    console.log('to', props.to)
    console.log('href', props.href)
    console.warn('Link component requires either `to` or `href` prop');
  }
})

</script>