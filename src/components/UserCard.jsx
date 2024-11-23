import React from 'react';
import userUnknow from '../assets/img/user.svg';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Box, Typography, IconButton, Avatar } from '@mui/material';

export default function UserCard({
  user,
  openEdit,
  openDelete,
  cardColor,
  iconColor,
  borderColor,
}) {
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
        borderRadius: 2,
        p: 2,
        position: 'relative',
        overflow: 'visible',
        backgroundColor: cardColor || 'background.paper',
      }}
    >
      <Box
        className="card__header"
        sx={{
          position: 'relative',
          width: '100%',
          height: 120,
          overflow: 'visible',
        }}
      >
        <Avatar
          alt={
            user?.first_name
              ? `${user.first_name} ${user.last_name}`
              : 'User image'
          }
          src={user?.image_url ? user.image_url : userUnknow}
          sx={{
            position: 'absolute',
            top: '-40%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 160,
            height: 160,
            objectFit: 'cover',
            borderRadius: '50%',
            border: `4px solid ${borderColor || 'background.default'}`,
            bgcolor: 'background.default',
          }}
        />
      </Box>

      <Box sx={{ mt: 0 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: 'primary.main' }}
        >
          {user?.first_name && user?.last_name
            ? `${user.first_name} ${user.last_name}`
            : 'Name not available'}
        </Typography>
      </Box>

      <Box className="card__info" sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EmailRoundedIcon
            sx={{ mr: 1, color: iconColor || 'primary.main' }}
          />
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {user?.email || 'Not available'}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CakeRoundedIcon sx={{ mr: 1, color: iconColor || 'primary.main' }} />
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {formattedBirthday}
          </Typography>
        </Box>
      </Box>

      <Box
        className="card__btns"
        sx={{ display: 'flex', justifyContent: 'right', mt: 2 }}
      >
        <IconButton
          className="btn btn--edit"
          onClick={() => openEdit(user)}
          aria-label={`Edit user ${user?.first_name}`}
          sx={{ color: iconColor || 'secondary.main' }}
        >
          <EditRoundedIcon />
        </IconButton>
        <IconButton
          className="btn btn--erase"
          onClick={() => openDelete(user)}
          aria-label={`Delete user ${user?.first_name}`}
          sx={{ color: 'error.main' }}
        >
          <DeleteForeverRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
