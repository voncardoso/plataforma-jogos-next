import styled from "styled-components";

export const Container = styled.section`
        max-width: 1440px;
        height: 100vh;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        background-image: linear-gradient(90deg, #F7F3FA 0 50%, #9504EC 50%);

    .Login{
        position: relative;
        max-width: 411px;
        width: 100%;
        margin: 0 auto;
        h2{
            font-size: min(32px, 6vw);
            margin-bottom: min(40px, 3vw);
        }

        strong{
            font-size: min(24px, 5vw);
            display: block;
            margin-bottom: min(10px, 5vw);

        }
        input{
            max-width: 400px;
            width: 100%;
            height: min(50px, 10vw);
            border-radius: 10px;
            font-size: min(20px, 5vw);


            margin-bottom: 15px;
            padding-left: 0.5rem;
            border: 2px solid #3D3145;
            &::placeholder{
                color:  var(--title);
             }
        }

        input:focus {
            outline: none !important;
            border: 2px solid #B164E8;
            border-radius: 10px;
        }

        button{
                max-width: 420px;
                width: 100%;
                background: #08D9AB;
                border: none;
                padding: min(12px, 5vw);
                margin-top: 30px;
                font-size: min(30px, 5vw);
                color: #FFFFFF;
                border-radius: 10px;
                cursor: pointer;
            }
            button:hover{
                  background: #37B89C;
            }

        .ExtrasLogin{
            display: flex;
            justify-content: space-between;
            max-width: 435px;
            width: 100%;
            text-align: center;
            margin: 0 auto;
            div{
                display: flex;
                max-width: 150px;
                width: 100%;

                input[type="checkbox"]{
                    max-width: 15px;
                    max-height: 15px;
                    margin-right: 10px;
                    margin-top: 2px;
                    
                }
                
                label{
                    font-size: min(16px, 5vw);
                }
            }

            a{
                font-size: min(16px, 5vw);
                color: #5CCEB5;
                font-weight: 400;
                margin-left: 20px;
                margin-left: 100px;
                cursor: pointer;
            }

            a:hover{
                color: #37B89C;  
            }


        }
        }

    .Ilustracao{
        max-width: 720px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            position: relative;
            max-height: 600px;
            max-width: 600px;
            width: 100%;
 

        }
    }

    @media (max-width: 840px){
        display: grid;
        grid-template-columns: 1fr;
        background: #F7F3FA;
        .Ilustracao{
            img{
                 display: none;
            }
        }
    }

    @media (max-width: 600px){
        .Login{
            display: block;
            align-items: center;
            justify-content: center;
            right: 20px;
        }
    }

    @media (max-width: 500px){
        .Login{
            width: min(400px, 80vw);
            left: -5px;
            input{
            max-width: 400px;
            width: 100%;
            height: min(50px, 10vw);
            border-radius: 10px;
            font-size: min(20px, 5vw);

            margin-bottom: 15px;
            padding-left: 0.5rem;
            border: 2px solid #3D3145;
            &::placeholder{
                color:  var(--title);
             }
        }
        }
    }
      
`;  