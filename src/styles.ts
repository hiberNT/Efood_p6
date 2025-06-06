import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  Branco: '#FFF8F2',
  rosaClaro: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    list-style: none;

    .container {
         max-width: 1024px;
         width: 100%;
         margin: 0 auto;

         @media (max-width: ${breakpoints.desktop}) {
            width: 80%
         }
       }
 }

 body {
    background-color: ${cores.Branco};
    color: ${cores.rosaClaro};
 }
`
