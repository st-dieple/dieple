export default function getTotalPrice(carts) {
  return carts.reduce((acc, currValue) => {
    let priceWithQuantity: number;
    if (currValue.priceWithSale === 0) {
      priceWithQuantity = currValue.price * currValue.quantity;
    } else {
      priceWithQuantity = currValue.priceWithSale * currValue.quantity;
    }
    return acc + priceWithQuantity;
  }, 0)
}

export function getPriceWithSale(price, sale) {
  let a = price;
  let b = parseFloat(sale);
  if (sale.includes('-')) {
    if (sale.includes('%')) {
      return a + (a * b/100);
    }
    return a + b;
  }
  return 0;
}

export function getItemTotalPrice(price: number, quantity: number) {
  return price * quantity;
}
