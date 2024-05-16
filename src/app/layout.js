'use client'

import StyledComponentsRegistry from './registry'
import { Inter } from "next/font/google";
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import styled from 'styled-components'

const inter = Inter({ subsets: ["latin"] });


const StyledBody = styled.body`
margin: 0;
padding: 0;
`

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-br">

        <StyledBody className={inter.className} style={{ margin: '0px', padding: '0px' }}>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </StyledBody>
      </html>

    </>
  );
}