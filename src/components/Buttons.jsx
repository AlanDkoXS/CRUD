import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useTheme } from '@mui/material/styles';

export default function Buttons({ page, maxPage, setPage }) {
  const theme = useTheme();
  const onPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onNext = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={onPrev}
        disabled={page === 1}
        sx={{
          minWidth: 40,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ChevronLeftRoundedIcon
          sx={{ fontSize: 30, color: theme.palette.background.paper }}
        />
      </Button>
      <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
        {page} of {maxPage}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onNext}
        disabled={page === maxPage}
        sx={{
          minWidth: 40,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ChevronRightRoundedIcon
          sx={{ fontSize: 30, color: theme.palette.background.paper }}
        />
      </Button>
    </Box>
  );
}
