import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// const intialState = {
//   username: '',
//   email: '',
//   password: '',
//   age: 0
// }

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    age: yup.number().positive().integer().required()
  })
  .required()

// const [data, setData] = useState(intialState)
// // const [email, setEmail] = useState('')
// // const [password, setPassword] = useState('')
// // const [age, setAge] = useState(0)

// const onChange = ({ target }) => {
//   const { name, value } = target

//   // spread operator
//   setData({
//     ...data,
//     [name]: value
//   })
// }

function Formulario () {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (datos) => { // e = event = { target: form }
    console.log(datos)
  }

  return (
    <div>
      <h2>Formularios</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input {...register("username")} />
          {<p>{errors.username?.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type='email' {...register("email")} />
          {<p>{errors.email?.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input type='password' {...register("password")} />
          {<p>{errors.password?.message}</p>}
        </div>

        <div>
          <label>Age</label>
          <input type='number' {...register("age")} />
          {<p>{errors.age?.message}</p>}
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  )
}
export default Formulario