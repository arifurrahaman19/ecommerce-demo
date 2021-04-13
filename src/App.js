import Header from './layout/Header'
import Footer from './layout/Footer'
import Filter from './layout/Filter'
import AllProducts from './pages/all-products'
import './sass/main.scss'

function App() {
  return (
    <div className='App'>
      <>
        <div className='container'>
          <Header />
          <div className='row'>
            <div className='col-md-3'>
              <Filter />
            </div>
            <div className='col-md-9'>
              <AllProducts />
            </div>
          </div>

          <Footer />
        </div>
      </>
    </div>
  )
}

export default App
