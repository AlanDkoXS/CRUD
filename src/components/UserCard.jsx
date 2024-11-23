import React from 'react';
import userUnknow from '../assets/img/user.svg';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Box, Typography, IconButton, Avatar } from '@mui/material';

export default function UserCard({ user, openEdit, openDelete, cardColor, iconColor, borderColor }) {
  const formattedBirthday = user?.birthday
    ? new Date(user.birthday).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'Not available';

  return (
    <Box
      className="card"
      sx={{
        width: 300,
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        position: 'relative',
        overflow: 'visible',
        backgroundColor: cardColor || 'background.paper', // Color dinámico de fondo
      }}
    >
      {/* Contenedor de la imagen */}
      <Box
        className="card__header"
        sx={{
          position: 'relative',
          width: '100%',
          height: 120,  // Reducimos la altura para evitar que empuje demasiado hacia abajo
          overflow: 'visible',  // Permitimos que la imagen sobresalga
        }}
      >
        <Avatar
          alt={user?.first_name ? `${user.first_name} ${user.last_name}` : 'User image'}
          src={user?.image_url ? user.image_url : userUnknow}
          sx={{
            position: 'absolute',
            top: '-25%', // La imagen sobresale de la parte superior
            left: '50%',
            transform: 'translateX(-50%)', // Centra la imagen
            width: 120,  // Tamaño de la imagen
            height: 120,  // Tamaño de la imagen
            objectFit: 'cover', // Asegura que la imagen mantenga su aspecto
            borderRadius: '50%', // Hace la imagen redonda
            border: `4px solid ${borderColor || '#fff'}`, // Borde dinámico
            bgcolor: 'white', // Fondo blanco para el avatar
            boxShadow: 3, // Agrega sombra para darle un efecto destacado
          }}
        />
      </Box>

      {/* Contenido de la tarjeta */}
      <Box sx={{ mt: 0 }}> {/* Ajustamos el margen superior para que quede más cercano a la imagen */}
        <Typography variant="h6" align="center" sx={{ color: 'text.primary' }}>
          {user?.first_name && user?.last_name
            ? `${user.first_name} ${user.last_name}`
            : 'Name not available'}
        </Typography>
      </Box>

      <Box className="card__info" sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EmailRoundedIcon sx={{ mr: 1, color: iconColor || 'primary.main' }} />
          <Typography variant="body2">{user?.email || 'Not available'}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CakeRoundedIcon sx={{ mr: 1, color: iconColor || 'primary.main' }} />
          <Typography variant="body2">{formattedBirthday}</Typography>
        </Box>
      </Box>

      <Box className="card__btns" sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <IconButton
          className="btn btn--edit"
          onClick={() => openEdit(user)}
          aria-label={`Edit user ${user?.first_name}`}
          sx={{ color: iconColor || 'primary.main' }} // Color dinámico para los iconos
        >
          <EditRoundedIcon />
        </IconButton>
        <IconButton
          className="btn btn--erase"
          onClick={() => openDelete(user)}
          aria-label={`Delete user ${user?.first_name}`}
          sx={{ color: 'error.main' }} // Color de error para eliminar
        >
          <DeleteForeverRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
