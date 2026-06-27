// Exercise 2 + 4 - shows one item, with a discounted price when asked
const Item = ({ item, price, discount, shouldDiscount }) => {
  const finalPrice = shouldDiscount ? price * (1 - discount) : price

  return (
    <div>{item} - {finalPrice}</div>
  )
}

export default Item
