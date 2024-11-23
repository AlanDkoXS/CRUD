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
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Backdrop */}
      <Backdrop
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: 'blur(5px)', // Applying the blur effect here
        }}
        open={isOpen}
        onClick={() => setIsOpen(false)} // Cerrar el modal si se hace clic en el fondo
      />
    </>
  );
}
