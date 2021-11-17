import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   :root{
       --background: #F7F3FA;
       --darkpurple: #9504EC;
       --title: #FFFFFF;
       --titleBlck: #251A2C;
   }
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
           
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
            
        }
    }

    body{
        background: var(--background);
        --webkit-font-font-smooth: antialiased; // deixar a finte mais nitida
    }

    body, input, textarea, button{
        font-family: 'Signika Negative SC', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }



    button {
        cursor: pointer;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
    }

    .react-modal-content{
        z-index: 5;
        list-style: none;
        max-width: 400px;
        width: 100%;
        min-width: 180px;
        background: var(--background);
        padding: 3rem;
        margin: 20px;
        position: relative;
        border-radius: 1rem;
        outline: 0; // tira a borda do modal
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
    }

    .react-modal-content{
        z-index: 5;
        list-style: none;
        max-width: 400px;
        width: 100%;
        min-width: 180px;
        background: var(--background);
        padding: 3rem;
        margin: 20px;
        position: relative;
        border-radius: 1rem;
        outline: 0; // tira a borda do modal
    }
`