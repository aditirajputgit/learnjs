const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e); //ye bta h ki click event perform hua h
    console.log(e.target); //ye kise element ya box se target aya ya fir clcik kiya h
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey'; //or e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});