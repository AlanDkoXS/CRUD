import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'

const initialState = {
  brand: '',
  model: '',
  color: '',
  year: '',
  price: 0
}

function App () {
  const [cars, setCars, loading, error] = useFetch()
  const [dataForm, setDataForm] = useState(initialState)

  useEffect(() => {
    getCars()
  }, [])

  // CRUD operations
  // Verbos HTTP: GET, POST, PUT|PATCH, DELETE

  // Create (Create|Crear)
  const createCar = (dataForm) => {
    setCars({
      url: 'http://cars-crud.academlo.tech/cars/',
      method: 'Post',
      body: dataForm
    })
  }

  // Get (Read|Leer)
  const getCars = () => {
    setCars({
      url: 'http://cars-crud.academlo.tech/cars'
    })
  }

  // Update (Update|Actualizar)
  const updateCar = (id, dataForm) => {
    setCars({
      url: `http://cars-crud.academlo.tech/cars`,
      method: 'patch',
      // method: 'patch',
      id: id,
      body: dataForm
    })
  }

  // Delete (Delete|Eliminar)
  const deleteCar = (id) => {
    setCars({
      url: `http://cars-crud.academlo.tech/cars`,
      method: 'Delete',
      id: id
    })
  }

  /*
  (*) required
  body = {
    id	integer
    brand*	string
    model*	string
    color*	string
    year*	integer
    price*	string($decimal)
  }
*/

  // const increment = () => {
  //   setCount(count + 1)
  //   // La última actualización del estado en cola o prevState
  //   setCount((prevState) => prevState + 1)
  // }

  const onSubmit = (e) => {
    e.preventDefault()
    // #1
    // const form = e.currentTarget
    // const input = form.elements
    // console.log({
    //   brand: input.brand.value,
    //   model: input.model.value,
    //   color: input.color.value,
    //   year: input.year.value,
    //   price: input.price.value
    // })

    // #2
    // const form = new FormData(e.currentTarget)

    // console.log({
    //   brand: form.get('brand'),
    //   model: form.get('model'),
    //   color: form.get('color'),
    //   year: form.get('year'),
    //   price: form.get('price')
    // })

    // #3
    console.log(dataForm)
  }

  const onChange = ({ name, value }) => {
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  return (
    <div>
      <h2>App</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name='brand'
          placeholder='brand'
          value={dataForm.brand}
          onChange={(e) => onChange(e.target)}
        /> <br />
        <input
          type="text"
          name='model'
          placeholder='model'
          value={dataForm.model}
          onChange={(e) => onChange(e.target)}
        /> <br />
        <input
          type="text"
          name='color'
          placeholder='color'
          value={dataForm.color}
          onChange={(e) => onChange(e.target)}
        /> <br />
        <input
          type="text"
          name='year'
          placeholder='year'
          value={dataForm.year}
          onChange={(e) => onChange(e.target)}
        /> <br />
        <input
          type="number"
          name='price'
          value={dataForm.price}
          onChange={(e) => onChange(e.target)}
        /> <br />
        <button type='submit'>Enviar</button>
      </form>

      <button
        onClick={() => createCar({
          brand: 'Nissan',
          model: 'Sentra',
          color: 'Blue',
          year: '2024',
          price: 1000
        })}
      >
        Crear Auto
      </button>

      <button onClick={() => deleteCar(3460)}>
        Eliminar Auto
      </button>

      <button onClick={() => updateCar(3457, {
        // brand: 'Volkswagen',
        // model: 'Jetta',
        color: 'Gold',
        // year: '2024',
        // price: 1000
      })}>
        Actualizar Auto
      </button>

      <pre>
        {JSON.stringify(cars, null, 2)}
      </pre>

      {/* <h2>Count {count}</h2>
      <button onClick={increment}>Incrementar</button> */}
    </div>
  )
}

export default App
