const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header__top'>
          <a href='#'>Homepage</a>
          <a className='active' href='#'>
            All Products
          </a>
        </div>

        <div className='header__bottom d-flex flex-row align-items-center'>
          <p className='page-show'>
            Showing <span>1 – 40</span> of <span>80,068</span> products
          </p>

          <div className='refine d-flex flex-row align-items-center'>
            <p>Refine by</p>
            <div className='dropdown'>
              <button
                className='btn dropdown-toggle'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Price
              </button>
              <div
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton'
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </div>
          </div>

          <div className='sort-by d-flex flex-row align-items-center'>
            <p>Sort by</p>
            <div className='dropdown'>
              <button
                className='btn dropdown-toggle'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Best Sellers
              </button>
              <div
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton'
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </div>
          </div>

          <div className='search ml-auto'>
            <img src='/assets/img/search.png' alt='' />
            <input className='form-control' type='text' placeholder='Search' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
