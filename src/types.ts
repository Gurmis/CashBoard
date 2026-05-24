import type { RouteLocationRaw } from "vue-router";

export interface NavItemConfig {
  href?: string;
  to?: RouteLocationRaw;
  icon?: string;
  label: string;
  active?: boolean;
}

export interface StatCardConfig {
  variant?: 'blue' | 'purple' | 'indigo',
  label: string,
  value: string,
  trend?: string,
  trendVariant?: 'positive' | 'negative',
  icon: string
}