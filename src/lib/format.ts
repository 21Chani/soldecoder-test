/**
 * Format currency amount in USD format
 */
export function formatAmount(amount?: number) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount ?? 0);
}
