import FilterItem from '../components/FilterItem'

const Filter = () => {
  return (
    <div className='fliters'>
      <div className='filter-tags'>
        <h2 className='mb-3'>Filters</h2>
        <div className='filter-tag'>
          <p>Out of Stock</p>
          <img src='/assets/img/close.png' alt='' />
        </div>

        <div className='filter-tag'>
          <p>Out of Stock</p>
          <img src='/assets/img/close.png' alt='' />
        </div>

        <div className='filter-tag clear-all'>
          <p>Clear all</p>
        </div>
      </div>

      <div className='category'>
        <h2 className='mb-3'>Category</h2>

        <div className='category-nested'>
          <h4>Men's Clothing</h4>
          <div className='neted-item'>
            <h3> Casual Wear</h3>

            <div className='neted-item'>
              <h4>Shirt</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='brands'>
        <div className='title-search'>
          <h2>Brand</h2>
          <div className='search'>
            <img src='/assets/img/search.png' alt='' />
            <input className='form-control' type='text' placeholder='Search' />
          </div>
        </div>
        <div>
          <FilterItem />
          <FilterItem />
          <FilterItem />
          <FilterItem />
          <FilterItem />
          <FilterItem />
        </div>

        <a className='more mt-2 d-block' href='#'>
          236 MORE
        </a>
      </div>
    </div>
  )
}

export default Filter
