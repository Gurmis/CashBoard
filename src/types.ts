import type { RouteLocationRaw } from "vue-router";

export interface NavItemConfig {
  href?: string;
  to?: RouteLocationRaw;
  icon?: string;
  label: string;
  active?: boolean;
}