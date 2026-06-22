import { computed, ref } from "vue";
import type { Expense, ExpenseSummary } from "@/features/expenses/types.ts";
import type { StatCardConfig } from "@/types.ts";
import { getExpenses, getExpenseSummary } from "@/features/expenses/services/expenseService.ts";

const summaryCardMeta = {
    "monthly-expenses": {
        icon: "lucide:wallet",
        variant: "blue",
    },
    "average-expense": {
        icon: "lucide:chart-line",
        variant: "purple",
    },
    "largest-expense": {
        icon: "lucide:receipt",
        variant: "indigo",
    },
} as const ;

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

const getTrendVariant = (trend?: string): "positive" | "negative" => {
    return trend?.startsWith("-") ? "negative" : "positive";
};

const statCards = computed<StatCardConfig[]>(() => {
    return expenseSummary.value.map((item) => {
        const meta = summaryCardMeta[item.id as keyof typeof summaryCardMeta];

        return {
            variant: meta.variant,
            label: item.label,
            value: item.value,
            trend: item.trend,
            trendVariant: getTrendVariant(item.trend),
            icon: meta.icon,
        }
    })
})

return {
    expenses,
    statCards,
    isLoading,
    error,
    loadData
    }
}