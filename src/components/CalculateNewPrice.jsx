const calculateNewPrice = (product) => {
  let oldPrice = product.price.old;
  let newPrice;
  let discount = product.discount;
  const discountedAmount = oldPrice * (discount / 100);
  newPrice = oldPrice - discountedAmount;
  return newPrice.toFixed(2);
};

export default calculateNewPrice;
