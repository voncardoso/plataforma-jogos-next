import styled from "styled-components";

export const Container = styled.section`
   max-width: 1440px;
   position: relative;
   top: -1px;
   max-height: 800px;
   margin: 0 auto;
   background: linear-gradient(180.59deg, #9504EC 0.53%, #B164E8 74.14%);
   display: grid;

   .Vector{
         display: flex;
         align-self: flex-end;
         position: relative;
         margin: 0 auto;
         z-index: 1;
         height: 200px;
         width: 100%;
         max-height: 200px;
         top: -150px;
         background-size: cover; 
      }

      @media (max-width: 1231px){
            height: 800px;  
        }

        @media (max-width: 1209px){
            height: 720px;  
        }

        @media (max-width: 932px){
         height: 640px; 
        }

        @media (max-width: 700px){
         height: 400px; 
         .Vector{
                top: -300px;
            }
        }

        @media (max-width: 494px){
            height: 350px;  
            
            .Vector{
                top: -350px;
            }
        }

`;

export const Content = styled.div`
   display: flex;
   justify-content: space-between;

   div {
      align-self: center;
      margin: 0 auto;
      color: var(--title);
         h1{
            font-size: min(72px, 7vw);
            line-height: min(80px, 7vw);
            font-weight: bold;
         }

         h4 {
            font-size: min(36px, 3vw);
            line-height: 2.75rem;
            margin-left: 14px;
            margin-bottom: -12px;
         }

         p{
            font-size: min(24px, 2vw);
            max-width: 500px;
            letter-spacing: 0.2px;
         }
   }

   .Mascote{
      position: relative;
      width: 100%;
      z-index: 3;
      top: 120px;
      max-width:620px;
      min-width: 100px;
   }

   @media (max-width: 1300px){
      margin-left: 40px;
   }

   @media (max-width: 1209px){
            .Mascote{
               margin-left: 50px;
               height: 700px;
            }
   }

        @media (max-width: 932px){
          
         .Mascote{
            top: 80px;
               margin-left: 50px;
               height: 600px;
            }
        }
        @media (max-width: 700px){
           div{
              position: relative;
              top: -90px;
           }
         .Mascote{
            top: -50px;
            }
        }
        

        @media (max-width: 494px){
         
            div{
               top: -120px;
               h4{
                  margin-left: 7px;
               }
            }
            
           .Mascote{
               top: -70px;
               margin-left: 0px;
            }
        }
`;


// Jogos

export const Main = styled.section`
   margin: 0 auto;
   max-width: 1040px;
   min-width:280px ;
      h2{
         font-size: min(64px, 7vw);
         color: var(--titleBlck);
         font-weight: bold;
         margin-left: 20px;
         margin-bottom: min(60px, 5vw);
      }
   .ContainerJogos{
      margin-left: 20px;
         h3{
            font-size: min(36px, 4vw);
            color: var(--titleBlck);
            margin-bottom: min(60px, 5vw);
         }
      .QuebraCabeca{
         display: flex;
         justify-content: space-between;
            img{
               max-width: 450px;
               max-height: 450px;
               min-width: 100px;
               min-height: 100px;
               width: 100%;
               margin-right: min(200px, 10vw);
            }

            ul{
               list-style: none;
               h4{
                  font-size: min(30px, 3.7vw);
                  margin-bottom: min(30px, 5vw);
                  margin-right: 10px;
               }



               li{
                  display: flex;
                  margin-bottom: min(30px, 2vw);
                  font-size: min(24px, 3vw);
                  max-height: 70px;
                  margin-right: 10px;
                  
                     strong{
                        font-size: min(30px, 3vw);
                        margin-right: min(20px, 5vw);
                        background: #B164E8;
                        padding: min(16px, 2vw);
                        border-radius: 100%;
                        max-height: 50px;
                        text-align: center;
                        color: var(--title);
                        
                     }

                     p{
                        align-self: center;
                     }
                     a{
                        font-size: min(30px, 3vw);
                        text-align: center;
                        max-width: 250px;
                        max-height: 108px;
                        width: 100%;
                        height: 100%;
                        padding: min(10px, 2vw) min(30px, 2vw);
                        text-decoration: none;
                        background: #B164E8;
                        border-radius: min(10px, 2vw);
                        color: var(--title);
                        cursor: pointer;
                     }
                     
               }

               .download{
                     justify-content: flex-end;
               }

               a:hover{
                  background: rgba(177, 100, 232, 0.8);
               }
            }
      }

      .h3RitimoMania{
         margin-top: 40px;
      }

      .RitmoMania{
         display: flex;
         justify-content: space-between;

            img{
               max-width: 450px;
               max-height: 450px;
               min-width: 100px;
               min-height: 100px;
               width: 100%;
               margin-right: min(200px, 10vw);
            }

            ul{
               list-style: none;
               h4{
                  font-size: min(30px, 3.7vw);
                  margin-bottom: min(30px, 5vw);
                  margin-right: 10px;
               }



               li{
                  display: flex;
                  margin-bottom: min(30px, 2vw);
                  font-size: min(24px, 3vw);
                  max-height: 70px;
                  margin-right: 10px;
                  
                     strong{
                        font-size: min(30px, 3vw);
                        margin-right: min(20px, 5vw);
                        background: #37B89C;
                        padding: min(16px, 2vw);
                        border-radius: 100%;
                        max-height: 50px;
                        text-align: center;
                        color: var(--title);
                        
                     }

                     p{
                        align-self: center;
                     }
                     a{
                        font-size: min(30px, 3vw);
                        text-align: center;
                        max-width: 250px;
                        max-height: 108px;
                        width: 100%;
                        height: 100%;
                        padding: min(10px, 2vw) min(30px, 2vw);
                        text-decoration: none;
                        background: #37B89C;
                        border-radius: min(10px, 2vw);
                        color: var(--title);
                        cursor: pointer;
                     }
                     
               }

               .download{
                     justify-content: flex-end;
               }

               a:hover{
                  background: rgba(133, 218, 200, 0.8);
               }
            }
      }

   }

   @media (max-width: 700px){
      margin-top: -300px;
   }

   @media (max-width: 494px){
      z-index: 2;
      margin-top: -400px;
   }
`;

export const Financiadores = styled.section`
      h2{
         margin-top: 60px;
         font-size: min(64px, 7vw);
         color: var(--titleBlck);
         font-weight: bold;
         margin-left: 20px;
         margin-bottom: min(60px, 5vw);
      }

      ul {
         list-style: none;
         margin: 0 auto;
         display: flex;
         justify-content: space-between;
         flex-wrap: wrap;
         li{
            align-self: center;
            margin-left: 20px;
            align-self: center;
            margin-right: 10px;
            img{
               width: min(300px, 16vw);
   
            }
            .Capes{
               max-height: 131px;
               max-width: 141px;
            }
         }
      }

      @media (max-width: 3000px){
         img{
               max-width: 240px;
            }


   }
`;

export  const Contato = styled.section`
   margin: 0 auto;
   max-width: 1440px;
   width: 100%;
   min-width:280px ;
   background: #A23EDE;
   margin-top: min(60px, 5vw);
   
   div{
      max-width: 1040px;
      margin: 0 auto;
      padding: 4px;
      color: var(--title);
      h4{
         margin-left: min(50px, 5vw);
         font-size: min(24px, 2vw);
      }

      ul{
         margin-left: min(115px, 10vw);
         li{
            font-size: min(20px, 2vw);
            font-family: "Signika", sans-serif;
         }
      }
   }
`;

export const Footer = styled.section`
   max-width: 1440px;
   margin: 0 auto;
   padding: 5px;
   text-align: center;
      p{
         font-size: min(14px, 1.5vw);
      }
`;