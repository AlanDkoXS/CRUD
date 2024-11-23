import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  FormGroup,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const schema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export default function AddEdit({ user, onSave }) {
  const [imagePreview, setImagePreview] = useState(null);
  const theme = useTheme();

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
      setImagePreview(user.image_url);
    } else {
      reset({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: '',
        image_url: '',
        showBirthday: false,
      });
    }
  }, [user, reset]);

  const onSubmit = (dataForm) => {
    if (!dataForm.image_url) {
      dataForm.image_url = './src/assets/img/user.svg';
    }
    if (!dataForm.birthday) {
      dataForm.birthday = '2000-01-01';
    }
    if (user) {
      onSave(dataForm, user.id);
    } else {
      onSave(dataForm);
    }
    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: '',
      image_url: '',
      showBirthday: false,
    });
  };

  const showBirthday = watch('showBirthday', false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      className="form"
      sx={{
        padding: 3,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <h2 className="form__title" style={{ color: theme.palette.primary.main }}>
        {user ? 'Update' : 'Register User'}
      </h2>
      <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.first_name}
            helperText={errors.first_name?.message}
            {...register('first_name')}
            sx={{
              marginBottom: 2,
              '& .MuiInputLabel-root': { color: theme.palette.primary.main },
              '& .MuiInputBase-root': { color: theme.palette.primary.main },
            }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.last_name}
            helperText={errors.last_name?.message}
            {...register('last_name')}
            sx={{
              marginBottom: 2,
              '& .MuiInputLabel-root': { color: theme.palette.primary.main },
              '& .MuiInputBase-root': { color: theme.palette.primary.main },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
            sx={{
              marginBottom: 2,
              '& .MuiInputLabel-root': { color: theme.palette.primary.main },
              '& .MuiInputBase-root': { color: theme.palette.primary.main },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
            sx={{
              marginBottom: 2,
              '& .MuiInputLabel-root': { color: theme.palette.primary.main },
              '& .MuiInputBase-root': { color: theme.palette.primary.main },
            }}
          />

          <FormControlLabel
            control={<Checkbox {...register('showBirthday')} />}
            label={`Do you ${user ? 'want to update your' : 'want to add your'} birthday?`}
            sx={{
              color: theme.palette.primary.main,
            }}
          />

          {showBirthday && (
            <TextField
              label="Birthday"
              variant="outlined"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...register('birthday')}
              inputProps={{ max: new Date().toISOString().split('T')[0] }}
              sx={{
                marginBottom: 2,
                '& .MuiInputLabel-root': { color: theme.palette.primary.main },
                '& .MuiInputBase-root': { color: theme.palette.primary.main },
              }}
            />
          )}

          <div className="form__group">
            <InputLabel
              htmlFor="image_url"
              sx={{ color: theme.palette.primary.main }}
            >
              Upload Profile Picture:
            </InputLabel>
            <input
              type="file"
              accept="image/*"
              {...register('image_url')}
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="form__image-preview">
                <img src={imagePreview} alt="Preview" width={100} />
              </div>
            )}
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {user ? 'Update' : 'Save'}
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
}
