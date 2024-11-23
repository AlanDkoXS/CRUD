import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Backdrop,
} from '@mui/material';

export default function Modal({ isOpen, setIsOpen, children }) {
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Dialog>

      <Backdrop
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: 'blur(5px)',
        }}
        open={isOpen}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
