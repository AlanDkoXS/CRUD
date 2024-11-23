import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Backdrop } from '@mui/material';

export default function Confirm({ user, deleteUser, setIsOpen }) {
  const handleDelete = () => {
    deleteUser(user.id);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <h3>Are you sure you want to delete the file?</h3>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Backdrop
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: 'blur(5px)',
        }}
        open={true}
        onClick={handleClose}
      />
    </>
  );
}
