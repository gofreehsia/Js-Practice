window.addEventListener('keydown', function(e){
  const keyNumber = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return;
  keyNumber.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
})

function removeTransision(e){
  if(e.propertyName!=='transform') return;
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend', removeTransision));



