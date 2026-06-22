import { computed, ref } from "vue";
import type { Expense, ExpenseSummary } from "@/features/expenses/types.ts";
import type { StatCardConfig } from "@/types.ts";
import { getExpenses, getExpenseSummary } from "@/services/expenseService.ts";

export const useExpenses = () => {
const expenseSummary = ref<ExpenseSummary[]>([]);
const expenses = ref<Expense[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);
const loadData = async () => {
    isLoading.value = true;
    error.value = null;

    try {
        const [expensesData, expenseSummaryData] = await Promise.all([
            getExpenses(),
            getExpenseSummary()
        ])

        expenses.value = expensesData;
        expenseSummary.value = expenseSummaryData;
    }
    catch (err) {
        error.value = err instanceof Error
            ? err.message
            : 'Failed to load expenses';
    }
    finally {
        isLoading.value = false;
    }
};

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