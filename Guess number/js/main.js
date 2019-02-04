let btn = document.getElementById('btn');
let less = document.getElementById('less');
let more = document.getElementById('more');
let myForm = document.getElementById('myForm');
let att = document.getElementById('att');
let num = document.getElementById('num');
let lifes = 3;
let myAttempt;

function getRandomInt(max = 11) {
  let randomNum = Math.floor(Math.random() * Math.floor(max));
	return randomNum;
}

let correct = getRandomInt();

num.oninput = () => {
	num.value = num.value.replace(/[^0-9]/, '');
}	

function isEqual(x) {

	if (x == correct) {
    att.innerHTML = 3;
    if (less.classList.contains('span_visible') || more.classList.contains('span_visible')) {
      less.classList.remove('span_visible');
      more.classList.remove('span_visible');
    }
    myForm.reset();
    alert('You win!');
   	correct = getRandomInt();
   	lifes = 3;
  }
  
  else if (x > correct && x <= 10) {
  	less.classList.add('span_visible');
    more.classList.remove('span_visible');
    if (lifes > 0) lifes--;
    att.innerHTML = lifes;
    if (lifes == 0) { 
    	alert('You lose!'); 
      lifes = 3; 
      att.innerHTML = 3;
      myForm.reset();
      if (less.classList.contains('span_visible') || more.classList.contains('span_visible')) {
        less.classList.remove('span_visible');
        more.classList.remove('span_visible');
      }
      correct = getRandomInt();
    }
  }
  
  else if (x < correct && x >= 0) {
  	if (x == 0) document.getElementById('num').value = 0;
 		more.classList.add('span_visible');
  	less.classList.remove('span_visible');
    if (lifes > 0) lifes--;
    att.innerHTML = lifes;
    if (lifes == 0) { 
    	alert('You lose!'); 
      lifes = 3; 
      att.innerHTML = 3;
      myForm.reset();
      correct = getRandomInt();
      if (less.classList.contains('span_visible') || more.classList.contains('span_visible')) {
        less.classList.remove('span_visible');
        more.classList.remove('span_visible');
      }
    }
  }
  
  else if (x > 10 || x < 0) {
  	if (lifes > 0) lifes--;
    att.innerHTML = lifes;
    if (lifes == 0) { 
    	alert('You lose!'); 
      lifes = 3; 
      att.innerHTML = 3;
      myForm.reset();
      correct = getRandomInt();
    }
    if (less.classList.contains('span_visible') || more.classList.contains('span_visible')) {
    	less.classList.remove('span_visible');
      more.classList.remove('span_visible');
    }
   	addLimit();
  	setTimeout(removeLimit, 1000);
  }
  
}

function addLimit() {
	let limits = document.getElementsByClassName('limits');
	for (let i = 0; i < limits.length; i++) {
  	limits[i].classList.add('warn'); 
  }
}

function removeLimit() {
	let limits = document.getElementsByClassName('limits');
	for (let i = 0; i < limits.length; i++) {
  	limits[i].classList.remove('warn'); 
  }
}

btn.onclick = function getValue() {
	myAttempt = document.getElementById('num').value;
	isEqual(myAttempt);
}
