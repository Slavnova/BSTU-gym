const halls = {
    active: [
        './assets/jpg/active/j69hTg2SZxE.jpg',
        './assets/jpg/active/qMJCs1Da7Mg.jpg',
        './assets/jpg/active/l6SKF5mHfCI.jpg',
        './assets/jpg/active/image 30.png',
        './assets/jpg/active/QcYXfigXtbA.jpg',
        './assets/jpg/active/bvlJE0DWZ1c.jpg'
      
     
    ],
    stretch: [
        './assets/jpg/stretch/rectangle1.jpg',
        './assets/jpg/stretch/rectangle2.jpg',
        './assets/jpg/stretch/rectangle3.jpg',
        './assets/jpg/stretch/rectangle4.jpg',
        './assets/jpg/stretch/rectangle5.jpg',
        './assets/jpg/stretch/rectangle6.jpg'
      
    ],
    aero: [
      './assets/jpg/aero/aero1.jpg',
      './assets/jpg/aero/aero2.jpg',
      './assets/jpg/aero/aero3.jpg',
      './assets/jpg/aero/aero4.jpg',
      './assets/jpg/aero/aero5.jpg',
      './assets/jpg/aero/aero6.jpg'
    ],
    trx: [
      './assets/jpg/trx/trx1.jpg',
      './assets/jpg/trx/trx2.jpg',
      './assets/jpg/trx/trx3.jpg',
      './assets/jpg/trx/trx4.jpg',
      './assets/jpg/trx/trx5.jpg',
      './assets/jpg/trx/trx6.jpg'
    ],
  }
  
  
  function changeImage (event) {
    const hall = event.target.dataset.hall;
    const hallImages = document.querySelectorAll('.halls__img');
    Array.from(hallImages).forEach((image, index) => {image.src = halls[hall][index];
      console.log(image);
    });
    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
    const buttins = document.querySelector('.buttins').children;
    Array.from(buttins).forEach(button => {
      if (button.dataset.hall == hall) {
        button.classList.add('button_color');
      } else {
        button.classList.remove('button_color');
      };
    });
    
  };
  
  function buttonClick (event) {
    if (event.target.classList.contains('button')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.buttons').addEventListener('click', buttonClick);