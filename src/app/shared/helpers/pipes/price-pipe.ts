export const pricePipe = (price: number) => {
  return `$${price.toFixed(2)}`;
}
