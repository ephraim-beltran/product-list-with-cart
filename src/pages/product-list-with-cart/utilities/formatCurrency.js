const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "CAD",
});

export function formatCurrency(number) {
  return currency.format(number);
}
