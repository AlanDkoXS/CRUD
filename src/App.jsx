import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Layout from "./layouts/Layout";
import AddEdit from "./components/AddEdit";
import UserList from "./components/UserList";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import Confirm from "./components/Confirm";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Importación del tema de Material-UI
import "./assets/styles/App.css";

const baseUrl = "https://users-crud-api-81io.onrender.com/api/v1";

// Definir el tema de Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul primario
    },
    secondary: {
      main: '#0288d1', // Azul secundario
    },
    background: {
      default: '#f5f5f5', // Fondo Surface
      paper: '#ffffff', // Fondo de las tarjetas más claras
    },
    text: {
      primary: '#000000', // Color de texto
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Tipografía estándar
  },
});

function App() {
  const [users, setUsers, loading] = useFetch();
  const [isOpen, setIsOpen] = useState(false);
  const [currentChild, setCurrentChild] = useState(null);

  useEffect(() => {
    readUsers();
  }, [isOpen]);

  // Create
  const createUser = (dataForm) => {
    setUsers({
      url: `${baseUrl}/users`,
      method: "POST",
      body: dataForm,
    });
    setIsOpen(false);
  };

  // Read
  const readUsers = () => {
    setUsers({ url: `${baseUrl}/users` });
  };

  // Update
  const updateUser = (dataForm, userId) => {
    setUsers({
      url: `${baseUrl}/users/${userId}`,
      method: "PATCH",
      body: dataForm,
    });
    setIsOpen(false);
  };

  // Delete
  const deleteUser = (userId) => {
    setUsers({
      url: `${baseUrl}/users/${userId}`,
      method: "DELETE"
    })
  }

  // Handler Open Modal
  const openAdd = () => {
    setIsOpen(true);
    setCurrentChild(<AddEdit onSave={createUser} />);
  };

  const openEdit = (user) => {
    setIsOpen(true);
    setCurrentChild(<AddEdit user={user} onSave={updateUser} />);
  };

  const openDelete = (user) => {
    setIsOpen(true);
    setCurrentChild(<Confirm user={user} deleteUser={deleteUser} setIsOpen={setIsOpen} />);
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <header className="header">
          <div className="header__container">
            <h1 className="header__title">Users</h1>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={openAdd}
              >
                Add User
              </Button>
            </div>
          </div>
        </header>

        {/* Modal para agregar, editar o eliminar */}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {currentChild}
        </Modal>

        <main className="container">
          {loading ? (
            <Loader />
          ) : (
            <UserList users={users} openEdit={openEdit} openDelete={openDelete} />
          )}
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
