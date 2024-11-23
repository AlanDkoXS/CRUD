import React from 'react';
import { Button, Box } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useTheme } from '@mui/material/styles';

const AddButton = ({ openAdd }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      onClick={openAdd}
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        borderRadius: '10em',
        width: 'auto',
        height: '4em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 8,
        flexDirection: 'row',
        padding: 1,
        zIndex: 1000,
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <AddRoundedIcon sx={{ fontSize: 30, color: (theme) => theme.palette.text.primary, }} />
      <Box
        sx={{
          display: { xs: 'none', md: 'inline-block' },
          fontSize: '1rem',
          color: (theme) => theme.palette.text.primary,
          ml: 1,
          padding: '1rem',
        }}
      >
        Add User
      </Box>
    </Button>
  );
};

export default AddButton;
