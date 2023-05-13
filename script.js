const hall = {
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
        console.log(image);
     });
      Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
     const buttins = document.querySelector('.buttins').children;
     Array.from(buttins).forEach(button => {
       if (button.dataset.hall == hall) {
         button.classList.add('button_color');
         //console.log("egegeg");
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

const imagesLeft = Array.from(document.querySelectorAll('.slider_left > li > .halls__img'));
const imagesCenter = Array.from(document.querySelectorAll('.slider_center > li > .halls__img'));
const imagesRight = Array.from(document.querySelectorAll('.slider_right > li > .halls__img'));

let buttonss = 'active';

function redrawPhoto(arr) {
 console.log(arr);
  arr.forEach((image, index) => image.src = halls[buttonss][index]);
}

function changeImage(event) {
  buttonss = event.target.dataset.hall;
  redrawPhoto(imagesCenter);
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
      if (button.dataset.hall == buttonss) {
          button.classList.add('button_color');
      } else {
          button.classList.remove('button_color');
      };
  });

};

function buttonClick(event) {
  if (event.target.classList.contains('button')) {
      changeImage(event);
  };
};

document.querySelector('.buttins').addEventListener('click', buttonClick);

//slider
function shiftPhoto(arrow) {
  let w;
  if (window.innerWidth >= 1024){
      w = 6;
  }
  else if (window.innerWidth >= 768 && window.innerWidth <=1023) {
      w = 4;
  }
  else {
      w = 1;
  }
  
  if (arrow == 'left') {
      halls[buttonss] = halls[buttonss].slice(w).concat(halls[buttonss].slice(0, w));
  } else if (arrow == 'right') {
      halls[buttonss] = halls[buttonss].slice(-w).concat(halls[buttonss].slice(0, -w));
  }
}

const slider = document.querySelector('.slider');

const buttonLeft = document.querySelector('.button_slider_left');
const buttonRight = document.querySelector('.button_slider_right');

function sliderLeft() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_left');
  shiftPhoto('left');
  redrawPhoto(imagesRight);
};

function sliderRight() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_right');
  shiftPhoto('right');
  redrawPhoto(imagesLeft);
};

slider.addEventListener('animationend', () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove('move_left');
  slider.classList.remove('move_right');
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
});

buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);


 