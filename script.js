const halls = {
    active: [
        './assets/jpg/j69hTg2SZxE.jpg',
        './assets/jpg/qMJCs1Da7Mg.jpg',
        './assets/jpg/l6SKF5mHfCI.jpg',
        './assets/jpg/image 30.png',
        './assets/jpg/QcYXfigXtbA.jpg',
        './assets/jpg/bvlJE0DWZ1c.jpg'
    ],
    stretch: [
        './assets/jpg/rectangle1.jpg',
        './assets/jpg/rectangle2.jpg',
        './assets/jpg/rectangle3.jpg',
        './assets/jpg/rectangle4.jpg',
        './assets/jpg/rectangle5.jpg',
        './assets/jpg/rectangle6.jpg'
      
    ],
    aero: [
      './assets/jpg/aero1.jpg',
      './assets/jpg/aero2.jpg',
      './assets/jpg/aero3.jpg',
      './assets/jpg/aero4.jpg',
      './assets/jpg/aero5.jpg',
      './assets/jpg/aero6.jpg'
    ],
    trx: [
      './assets/jpg/trx1.jpg',
      './assets/jpg/trx2.jpg',
      './assets/jpg/trx3.jpg',
      './assets/jpg/trx4.jpg',
      './assets/jpg/trx5.jpg',
      './assets/jpg/trx6.jpg'
    ],
  }
  
  
  function changeImage (event) {
    const hall = event.target.dataset.hall;
    const hallImages = document.querySelectorAll('.halls__img');
    Array.from(hallImages).forEach((image, index) => {
        image.src = halls[hall][index];
        // console.log(image);
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
  
  document.querySelector('.buttins').addEventListener('click', buttonClick);
  