import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect } from 'react'

const schema = yup
  .object({
    username: yup.string().required('El nombre de usuario es requerido'),
    email: yup.string().email().required('El email es requerido'),
    password: yup.string().required('La contraseña es requerida'),
    first_name: yup.string().required('El nombre es requerido'),
    last_name: yup.string().required('El apellido es requerido'),
    birthdate: yup.date().required('La fecha de nacimiento es requerida').nullable(),
    profile_image: yup.string().url('La URL de la imagen debe ser válida').required('La imagen es requerida')
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
      reset({ username: '', email: '', password: '', first_name: '', last_name: '', birthdate: '', profile_image: '' })
    }
  }, [user])

  const onSubmit = (data) => {
    setData(data)
  }

  return (
    <div>
      <h2>{user ? 'Actualizar' : 'Registro'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Imagen de Usuario:</label>
          <input type="text" {...register("profile_image")} />
          <span>{errors.profile_image && errors.profile_image.message}</span>
        </div>
        <div>
          <label>Nombre:</label>
          <input {...register("first_name")} />
          <span>{errors.first_name && errors.first_name.message}</span>
        </div>
        <div>
          <label>Apellido:</label>
          <input {...register("last_name")} />
          <span>{errors.last_name && errors.last_name.message}</span>
        </div>
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
        <div>
          <label>Fecha de Nacimiento:</label>
          <input type='date' {...register("birthdate")} />
          <span>{errors.birthdate && errors.birthdate.message}</span>
        </div>

        <br />
        <button type="submit">{user ? 'Actualizar' : 'Guardar'}</button>
      </form>
    </div>
  )
}

export default AddEdit;
