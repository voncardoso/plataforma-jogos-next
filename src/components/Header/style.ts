import styled from 'styled-components';


export const Conatent = styled.header`
    background: var(--darkpurple);
    max-width: 1440px;
    margin: 0 auto;

    button{
        display: none;
    }



        ul{
        margin: 0 auto;
        max-width: 1040px;
        display: flex;
        justify-content: flex-end;

        li{
            list-style: none;
            margin: 1.5rem 1rem ;
            color: var(--title);
            line-height: 1.25rem;
            cursor: pointer;

            a{
                text-decoration: none;
                color: var(--title);
                line-height: 1.25rem;
                padding: 10px 15px 10px 15px;
            }

            .nav:hover{
                background: rgba(177,100,232, 0.5);
                border-radius: 5px;
            }

            .buttonLogin{
                background: #37B89C;
                padding: 10px 30px 10px 30px;
                border-radius: 5px;
            }

            .buttonLogin:hover{
                background: rgba(50,184,156, 0.9);
            }
        }
    }

    .ListMobile{
        visibility: hidden 
    }

 [data-anime="scroll"] {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
  transition: .3s;
}

 [data-anime="scroll"].ativo {
  opacity: 1;
  transform: translate3d(0, 0, 0);
 }

   
    @media (max-width: 700px){
        .List{
            visibility: hidden;
        }
        
    button{
        position: absolute;
        display: flex;
        background: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--title);
        cursor: pointer;
        top: 40px;
        z-index: 100;
    }

    button::before{
        margin-right: 6px;
        content: '';
        display: inline-block;
        height: 2px;
        width: 25px;
        background: #FFFFFF;
        box-shadow: 0 6px #fff, 0 -6px #fff ;
        transition: transform .3s;
    }

    button.active::before{
        transform: rotate(90deg);
    }
    
    .ListMobile {
        visibility: hidden;
        position: absolute;
        z-index: 6;
        display: block;
        top: 0px;
        height: 100%;
        padding-top: 80px;
        background: #B164E8;
        width: 150px;

        li{
            margin-top: 40px;
            margin-left: 0px;
        }

        .buttonLogin{
            margin-left:20px ;
            margin-bottom: 20px;
        }
    }

    ul.active{
        visibility: visible;
        animation: show-right .8s forwards;
    }
    div.active{
        position: fixed;
        width: 100%;
        padding: 100%;
        background: rgba(0,0,0,.3);
       z-index: 4;
       animation: show-right .8s forwards;
    }

    @keyframes show-right{
        from {
            opacity: 0;
            transform: translate3d(-30px, 0, 0);
        }

        to{
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    }


`;
