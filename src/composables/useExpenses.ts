import { ref } from "vue";
import type { Expense, ExpenseSummary } from "@/features/expenses/types.ts";
import type {StatCardConfig} from "@/types.ts";

export const useExpenses = () => {
const summary = ref<ExpenseSummary[]>([]);
const statCards = ref<StatCardConfig[]>([]);
const expenses = ref<Expense[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);
const loadData = async () => {};

return {
    statCards,
    expenses,
    isLoading,
    error,
    loadData
    }
}