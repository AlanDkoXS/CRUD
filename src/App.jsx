import React, { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import Layout from './layouts/Layout';
import AddEdit from './components/AddEdit';
import UserList from './components/UserList';
import Modal from './components/Modal';
import Loader from './components/Loader';
import Confirm from './components/Confirm';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './assets/styles/theme';
import AddButton from './components/AddButton';
import './assets/styles/App.css';

const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1';

function App() {
  const [users, setUsers, loading] = useFetch();
  const [isOpen, setIsOpen] = useState(false);
  const [currentChild, setCurrentChild] = useState(null);

  useEffect(() => {
    readUsers();
  }, [isOpen]);

  const createUser = (dataForm) => {
    setUsers({
      url: `${baseUrl}/users`,
      method: 'POST',
      body: dataForm,
    });
    setIsOpen(false);
  };

  const readUsers = () => {
    setUsers({ url: `${baseUrl}/users` });
  };

  const updateUser = (dataForm, userId) => {
    setUsers({
      url: `${baseUrl}/users/${userId}`,
      method: 'PATCH',
      body: dataForm,
    });
    setIsOpen(false);
  };

  const deleteUser = (userId) => {
    setUsers({
      url: `${baseUrl}/users/${userId}`,
      method: 'DELETE',
    });
  };

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
    setCurrentChild(
      <Confirm user={user} deleteUser={deleteUser} setIsOpen={setIsOpen} />,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <header className="header">
          <div className="header__container">
            <Typography
              variant="h1"
              className="header__title"
              sx={{
                color: 'primary.main',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '500',
                fontSize: '3rem',
                pl: '2rem',
                pr: '2rem',
                pt: '1.5rem',
              }}
            >
              CRUD Users App
            </Typography>
            <Typography
              variant="h2"
              className="header__subtitle"
              sx={{
                color: 'primary.main',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.5rem',
                pl: '2rem',
                pr: '2rem',
                pb: '2rem',
              }}
            >
              For Create, Read, Update, and Delete users
            </Typography>
          </div>
        </header>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {currentChild}
        </Modal>

        <main className="container">
          {loading ? (
            <Loader />
          ) : (
            <UserList
              users={users}
              openEdit={openEdit}
              openDelete={openDelete}
            />
          )}
        </main>
        <AddButton openAdd={openAdd} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
