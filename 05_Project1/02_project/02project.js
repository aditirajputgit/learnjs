const form = document.querySelector('form');
//ye ek form type ka aur form ya submit type ka event perform hoga
//form two type se submit hota h get ya post type se
//height aur weight ki value andar lege kuki page load hoga to value empty ho jayegi
//bhar likhne se value empty a jayegi
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const guide = document.querySelector('#weight-guide');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid Weight ${height}`;
  } else {
    const BMI = weight / ((height * height) / 10000).toFixed(3);
    if (BMI <= 18.6) {
      result.innerHTML = `<span>${BMI}</span> </br> Your weight is underweight`;
    } else if (BMI >= 18.6 && BMI <= 20.4) {
      result.innerHTML = `<span>${BMI}</span> </br> Your weight is Normal`;
    } else {
      result.innerHTML = `<span>${BMI}</span> </br> Your weight is Overweight`;
    }
  }
});
