export interface Expense {
    id: string;
    description: string;
    amount: number;
    category: string;
    date: string;
}

export interface ExpenseSummary {
    id: string;
    label: string;
    value: string;
    trend?: string;
}