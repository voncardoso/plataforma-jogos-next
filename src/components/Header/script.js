
export function initMenuMobile() {
    const menuButton = document.querySelector('.ButtonMobile');
    const List = document.querySelector('.List');
    const ListMobile  = document.querySelector('.ListMobile ');
    const ListNav = document.querySelector('.nav');
    const divSecundaria = document.querySelector('.divSecundaria');
    const linksInternos = document.querySelectorAll('.ListMobile a[href^="#"]');

       menuButton.classList.toggle('active');
        ListMobile.classList.toggle('active');
       divSecundaria.classList.toggle('active'); 
       

      function fecharMenu(){
            menuButton.classList.remove('active');
            List.classList.remove('active');
            divSecundaria.classList.remove('active'); 
            ListMobile.classList.toggle('active');
        }
        function initScrollSuaveMobile(event){
          console.log(linksInternos)
          event.preventDefault();
          const href = event.currentTarget.getAttribute('href');
          const section = document.querySelector(href);
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }

        ListNav.addEventListener('click', fecharMenu);
        divSecundaria.addEventListener('click', fecharMenu);
        linksInternos.forEach((link) => {
          link.addEventListener('click', initScrollSuaveMobile);
        });
}





// Escrol Suave

export  function initScrollSuave(event) {
  const linksInternos = document.querySelectorAll('.List a[href^="#"]');
    console.log(linksInternos)
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
    linksInternos.forEach((link) => {
      link.addEventListener('click', initScrollSuave);
    });
}

