export const getAmountVariant = (amount: number) => {
    return amount < 0 ? "negative" : "positive";
}

export const getTrendVariant = (trend?: string) =>{
    return trend?.startsWith("-") ? "negative" : "positive";
}