const Product = ({ title, currentPrice, oldPrice, offer, img }) => {
  return (
    <div className='product-card card'>
      <div className='product-card__image'>
        <img src={img} alt='' />
      </div>
      <div className='product-card__body'>
        <a className='product-card__body__title' href='#'>
          {title}
        </a>
        <p className='product-card__body__price'>BDT. {currentPrice}</p>
        <div className='product-card__body__offerPrice d-flex flex-row'>
          <p>BDT. {oldPrice}</p>
          <p className='ml-auto'>{offer} Off</p>
        </div>
      </div>
    </div>
  )
}

export default Product
