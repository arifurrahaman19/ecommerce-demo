import Pagination from '../components/Pagination'
import Product from '../components/Product'
import productDetails from '../constants/productsDetails'
import { useState } from 'react'

const AllProducts = () => {
  return (
    <>
      <div className='all-products'>
        {productDetails.map((product) => {
          return (
            <Product
              title={product.title}
              currentPrice={product.currentPrice}
              oldPrice={product.oldPrice}
              offer={product.offer}
              img={product.img}
              key={product.id}
            />
          )
        })}

        <Pagination />
      </div>
    </>
  )
}

export default AllProducts
