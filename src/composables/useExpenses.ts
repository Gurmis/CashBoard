import {computed, ref} from "vue";
import type { Expense, ExpenseSummary } from "@/features/expenses/types.ts";
import type {StatCardConfig} from "@/types.ts";
import StatCard from "@/components/ui/StatCard.vue";

export const useExpenses = () => {
const expenseSummary = ref<ExpenseSummary[]>([]);
const expenses = ref<Expense[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);
const loadData = async () => {};

const statCards = computed<StatCardConfig[]>(() => {
    // TODO mapping
    return [];
})

return {
    expenses,
    statCards,
    isLoading,
    error,
    loadData
    }
}