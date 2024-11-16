import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect } from 'react'

const schema = yup
  .object({
    username: yup.string().required('El nombre de usuario es requerido'),
    email: yup.string().email().required('El email es requerido'),
    password: yup.string().required('La contraseña es requerida')
  })

function AddEdit ({ user, setData }) {
  const { handleSubmit, register, watch, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: user || {}
  })

  useEffect(() => {
    if (user) {
      reset(user)
    } else {
      reset({ username: '', email: '', password: '' })
    }
  }, [user])

  // console.log(watch("username"))

  const onSubmit = (data) => {
    setData(data)
  }

  return (
    <div>
      <h2>{user ? 'Actualizar' : 'Registro'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input {...register("username")} />
          <span>{errors.username && errors.username.message}</span>
        </div>
        <div>
          <label>Email:</label>
          <input type='email' {...register("email")} />
          <span>{errors.email && errors.email.message}</span>
        </div>
        <div>
          <label>Password:</label>
          <input type='password' {...register("password")} />
          <span>{errors.password && errors.password.message}</span>
        </div>

        <br />
        <button type="submit">{user ? 'Actualizar' : 'Guardar'}</button>
      </form>
    </div>
  )
}
export default AddEdit