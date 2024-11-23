import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../assets/styles/AddEdit.css";

const schema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function AddEdit({ user, onSave }) {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: user || {},
  });

  useEffect(() => {
    if (user) {
      reset(user);
    } else {
      reset({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "",
        image_url: "",
        showBirthday: false,
      });
    }
  }, [user, reset]);

  const onSubmit = (dataForm) => {
    if (!dataForm.image_url) {
      // Use the default image if no image is provided
      dataForm.image_url = "./src/assets/img/user.svg";
    }
    if (!dataForm.birthday) {
      dataForm.birthday = "2000-01-01";
    }
    if (user) {
      onSave(dataForm, user.id);
    } else {
      onSave(dataForm);
    }
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      image_url: "",
      showBirthday: false,
    });
  };

  const showBirthday = watch("showBirthday", false);

  return (
    <div className="form">
      <h2 className="form__title">{user ? "Update" : "Register User"}</h2>
      <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label className="form__label">First Name:</label>
          <input
            className="form__input"
            type="text"
            {...register("first_name")}
          />
          <span className="form__error">
            {errors.first_name && errors.first_name.message}
          </span>
        </div>
        <div className="form__group">
          <label className="form__label">Last Name:</label>
          <input
            className="form__input"
            type="text"
            {...register("last_name")}
          />
          <span className="form__error">
            {errors.last_name && errors.last_name.message}
          </span>
        </div>
        <div className="form__group">
          <label className="form__label">Email:</label>
          <input className="form__input" type="text" {...register("email")} />
          <span className="form__error">
            {errors.email && errors.email.message}
          </span>
        </div>
        <div className="form__group">
          <label className="form__label">Password:</label>
          <input
            className="form__input"
            type="password"
            {...register("password")}
          />
          <span className="form__error">
            {errors.password && errors.password.message}
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            {...register("showBirthday")}
            id="showBirthday"
          />
          <label className="form__label" htmlFor="showBirthday">
            Do you {user ? "want to update your" : "want to add your"} birthday?
          </label>
          <br />
        </div>
        {showBirthday && (
          <div className="form__group">
            <label className="form__label">Birthday:</label>
            <input
              className="form__input"
              type="date"
              {...register("birthday")}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>
        )}
        <div className="form__group">
          <label className="form__label">Upload Profile Picture:</label>
          <input
            className="form__input"
            type="file"
            accept="image/*"
            {...register("image_url")}
          />
        </div>

        <button className="submit" type="submit">
          {user ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}
