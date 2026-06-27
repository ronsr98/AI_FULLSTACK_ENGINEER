import Item from './Item'

// gets the whole store from App and renders an Item for each product
const Home = ({ store, shouldDiscount }) => {
  return (
    <div>
      <h3>Home</h3>
      {store.map((product) => (
        <Item
          key={product.item}
          item={product.item}
          price={product.price}
          discount={product.discount}
          shouldDiscount={shouldDiscount}
        />
      ))}
    </div>
  )
}

export default Home
