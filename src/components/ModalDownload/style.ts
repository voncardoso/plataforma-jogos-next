import styled from 'styled-components';

export const StyleModal = styled.div`
text-align: center;
    strong{
        display: block;
        font-size: min(42px, 10vw);
        margin-bottom: 40px;
        width: 100%;
        text-align: center;
        color: var(--titleBlck);
    }
    .DonwloadQuebraCabeca{
        font-size: min(30px, 5vw);
        margin-bottom: 20px;
    }
    .DonwloadRitimoMAnia{
        font-size: min(30px, 5vw);
        margin-top: 40px;
        margin-bottom: 20px;
    }

    a {

        text-decoration: none;
        background: #37B89C;
        padding: min(10px, 5vw) min(60px, 3vw);
        border-radius: 6px;
        font-size: min(20px, 5vw);
        color: #FFFFFF;
    }

    .buttonAndroid{
        position: relative;
        top: 3px;
        margin-left: 10px;
        height: 20px;
        align-self: flex-end;
     }

     .ButtonQuebraCabeca{
         background: #B164E8;
     }

`;