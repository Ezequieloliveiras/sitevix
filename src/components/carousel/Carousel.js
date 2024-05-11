import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, CircularProgress } from '@mui/material'; // Importe os componentes necessários do Material-UI

function MyCarousel() {
  const [loading, setLoading] = useState(true);

  // Simulação de carregamento de dados
  useEffect(() => {
    // Aqui você pode fazer chamadas para carregar os dados necessários
    // Por enquanto, apenas simulamos um atraso para demonstrar o indicador de carregamento
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula 2 segundos de carregamento
  }, []);

  return (
    <Box sx={{ position: 'relative', height: '500px' }}>
      {loading && ( // Se estiver carregando, exibe o indicador de carregamento
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {/* Exibe o Carousel apenas quando não estiver carregando */}
      {!loading && (
        <Carousel autoPlay>
          <div>
            {/* Seus slides aqui */}
            <img src="https://source.unsplash.com/random?a=1" alt="slide1" style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="https://source.unsplash.com/random?a=2" alt="slide2" style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="https://source.unsplash.com/random?a=3" alt="slide3" style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
          </div>
        </Carousel>
      )}
    </Box>
  );
}

export default MyCarousel;
