import React from 'react';
import { Backdrop } from '@mui/material';
import '../assets/styles/Loader.css';

export default function Loader() {
  return (
    <>
      {/* Backdrop con el efecto de desenfoque */}
      <Backdrop
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con opacidad del 50%
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: 'blur(5px)', // Desenfoque del fondo
        }}
        open={true} // Mostrar el Backdrop
      >
        {/* Contenedor de loader */}
        <div className="showbox">
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </div>
        </div>
      </Backdrop>
    </>
  );
}
