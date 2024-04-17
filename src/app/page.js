'use client'

import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Carousel from '../components/Carousel';
import image1 from '../app/image1.jpg'
import image2 from '../app/image2.jpg'
import image3 from '../app/image3.jpg'
import Image from 'next/image';

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={25}>
        <Carousel />
      </Grid>
      <Grid item xs={12} style={{
        backgroundColor: '#f9f9f9',
        padding: '50px 10px 50px 10px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: isSmallScreen ? '2.5rem' : '3rem',
            color: '#757575',
            marginBottom: '20px',
            textAlign: 'center',
          }}>
            Tenha um site incrível para o seu negócio!
          </h1>
          <p style={{
            fontSize: isSmallScreen ? '1rem' : '1.2rem',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            Nossa equipe especializada está pronta para criar um site que destaque sua marca, atraia mais clientes e impulsione suas vendas. Não perca tempo, dê o próximo passo para o sucesso online!
          </p>
          <button style={{
            padding: '15px 30px',
            fontSize: isSmallScreen ? '1.2rem' : '1.5rem',
            backgroundColor: '#f57c00',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}>
            Comece agora
          </button>
        </div>
      </Grid>
      <Grid item xs={12} style={{
        backgroundColor: '#fff',
        padding: '50px 0',
        textAlign: 'center'
      }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
          <h2 style={{
            color: '#757575',
            fontSize: '2.5rem',
            marginBottom: '40px',
            textAlign: 'center',
            '@media (max-width: 600px)': { fontSize: '2rem' }
          }}>
            Por que nos escolher?
          </h2>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4} >
              <h3 style={{
                color: '#f57c00',
                fontSize: '2rem',
                marginBottom: '15px',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1.5rem' }
              }}>
                Experiência Profissional
              </h3>
              <p style={{
                color: '#666',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1rem' }
              }}>
                Nossa equipe tem anos de experiência em design e desenvolvimento de sites, garantindo qualidade e profissionalismo em cada projeto.
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 style={{
                color: '#f57c00',
                fontSize: '2rem',
                marginBottom: '15px',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1.5rem' }
              }}>
                Design Personalizado
              </h3>
              <p style={{
                color: '#666',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1rem' }
              }}>
                Criamos sites sob medida para cada cliente, garantindo que cada detalhe represente fielmente a sua marca e atraia seu público-alvo.
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 style={{
                color: '#f57c00',
                fontSize: '2rem',
                marginBottom: '15px',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1.5rem' }
              }}>
                Suporte Contínuo
              </h3>
              <p style={{
                color: '#666',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1rem' }
              }}>
                Estamos sempre aqui para ajudar! Oferecemos suporte contínuo após o lançamento do site, garantindo que você esteja sempre satisfeito com nosso serviço.
              </p>
            </Grid>
      <Grid item xs={12} style={{
        backgroundColor: '#f9f9f9',
        padding: '50px 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            color: '#757575',
            fontSize: '2.5rem',
            marginBottom: '40px',
            textAlign: 'center',
            '@media (max-width: 600px)': { fontSize: '2rem' }
          }}>
            Tipos de Sites que Criamos
          </h2>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <h3 style={{
                color: '#f57c00',
                fontSize: '2rem',
                marginBottom: '15px',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1.5rem' }
              }}>
                Sites Corporativos
              </h3>
              <p style={{
                color: '#666',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1rem' }
              }}>
                Destaque a sua marca e alcance um público global com um site corporativo profissional.
              </p>
              <div style={{
                maxWidth: '100%',
                height: 'auto',
                marginTop: '20px'
              }}>
                <Image src={image1} alt="Sites Corporativos" style={{
                  maxWidth: '100%',
                  height: 'auto'
                }} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 style={{
                color: '#f57c00',
                fontSize: '2rem',
                marginBottom: '15px',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1.5rem' }
              }}>
                Lojas Online
              </h3>
              <p style={{
                color: '#666',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1rem' }
              }}>
                Venda seus produtos e serviços 24 horas por dia, 7 dias por semana, com uma loja online personalizada.
              </p>
              <div style={{
                maxWidth: '100%',
                height: 'auto',
                marginTop: '20px'
              }}>
                <Image src={image2} alt="Lojas Online" style={{
                  maxWidth: '100%',
                  height: 'auto'
                }} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 style={{
                color: '#f57c00',
                fontSize: '2rem',
                marginBottom: '15px',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1.5rem' }
              }}>
                Portfólios de Arte
              </h3>
              <p style={{
                color: '#666',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                textAlign: 'center',
                '@media (max-width: 600px)': { fontSize: '1rem' }
              }}>
                Exiba seu trabalho de forma deslumbrante e conquiste novos clientes com um portfólio de arte online.
              </p>
              <div style={{
                maxWidth: '100%',
                height: 'auto',
                marginTop: '20px'
              }}>
                <Image src={image3} alt="Portfólios de Arte" style={{
                  maxWidth: '100%',
                  height: 'auto'
                }} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}


// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
