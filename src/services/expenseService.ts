import { expensesMock, expenseSummaryMock } from "@/mocks/expenses.ts";
import type { Expense, ExpenseSummary } from "@/features/expenses/types.ts";

export const getExpenses = (): Promise<Expense[]> => {
    console.log('getExpenses');

    return new Promise(resolve =>
        setTimeout(() => resolve(expensesMock), 1000)
    );
}

export const getExpenseSummary = (): Promise<ExpenseSummary[]> => {
    console.log('getExpens eSummary');

    return new Promise(resolve =>
        setTimeout(() => resolve(expenseSummaryMock), 1000)
    );
}
