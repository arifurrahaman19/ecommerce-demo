import { v4 as uuidv4 } from 'uuid'

const FilterItem = () => {
  const uuid = uuidv4()
  return (
    <>
      <div className='filter-item d-flex flex-row align-items-center'>
        <input id={uuid} type='radio' />
        <label className='ml-2' htmlFor={uuid}>
          Aeropostale
        </label>
      </div>
    </>
  )
}

export default FilterItem
