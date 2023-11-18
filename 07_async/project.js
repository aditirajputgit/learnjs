const randomColor = function () {
    const hex = '0123456789ABCD';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let coloris;
  const startFunction = function () {
    const bgcolor = function () {
      document.body.style.backgroundColor = randomColor();
    };
    if (!coloris) {
      coloris = setInterval(bgcolor, 1000);
    }
  };
  
  const stopFunction = function () {
    clearInterval(coloris);
    coloris = null;
  };
  
  document.querySelector('#start').addEventListener('click', startFunction);
  
  document.querySelector('#stop').addEventListener('click', stopFunction);
  