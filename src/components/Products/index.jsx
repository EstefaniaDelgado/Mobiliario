import styles from './Products.module.css'
import Product from './components'

const Products = () => {
  return (
    <div>
        <h2 className={styles.subtitle} >Productos</h2>
      <Product/>
    </div>
  )
}

export default Products
