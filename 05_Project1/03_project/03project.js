const clock = document.querySelector('#clock');
//m chahti hu ki meri clock har bar run ho bar bar run ho

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleString()); //but console pr har sec m value ayegi  but muje ye main m display krni h to m
  clock.style.textAlign = 'center';
  clock.style.fontSize = '20px';
  clock.innerHTML = date.toLocaleString();
  console.log(clock);
}, 1000);
