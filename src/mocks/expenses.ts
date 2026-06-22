import type { Expense, ExpenseSummary } from "@/features/expenses/types.ts";

export const expensesMock: Expense[] = [
    {
        id: "1",
        description: "Groceries",
        amount: 52.3,
        category: "Food",
        date: "2026-06-21",
    },
    {
        id: "2",
        description: "Electricity Bill",
        amount: 118.5,
        category: "Utilities",
        date: "2026-06-19",
    },
    {
        id: "3",
        description: "Netflix",
        amount: 13.99,
        category: "Subscriptions",
        date: "2026-06-18",
    },
    {
        id: "4",
        description: "Fuel",
        amount: 75,
        category: "Transport",
        date: "2026-06-16",
    },
    {
        id: "5",
        description: "Restaurant",
        amount: 64.2,
        category: "Food",
        date: "2026-06-15",
    },
    {
        id: "6",
        description: "Mobile Plan",
        amount: 29.9,
        category: "Utilities",
        date: "2026-06-14",
    },
    {
        id: "7",
        description: "Tennis Court",
        amount: 18,
        category: "Sports",
        date: "2026-06-12",
    },
    {
        id: "8",
        description: "Dog Food",
        amount: 42.5,
        category: "Pets",
        date: "2026-06-11",
    },
    {
        id: "9",
        description: "Kids Toys",
        amount: 87.4,
        category: "Family",
        date: "2026-06-09",
    },
    {
        id: "10",
        description: "Car Insurance",
        amount: 420,
        category: "Insurance",
        date: "2026-06-05",
    },
];
export const expenseSummaryMock: ExpenseSummary[] = [
    {
        id: "monthly-expenses",
        label: "Monthly Expenses",
        value: "$1,820.00",
        trend: "-3%",
    },
    {
        id: "average-expense",
        label: "Average Expense",
        value: "$60.67",
        trend: "+5%",
    },
    {
        id: "largest-expense",
        label: "Largest Expense",
        value: "$420.00",
        trend: "+12%",
    },
];