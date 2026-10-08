const intro=document.getElementById('intro');
const openButton=document.getElementById('openButton');
const stage=document.getElementById('invitationStage');

openButton.addEventListener('click',()=>{
  intro.classList.add('open');
  openButton.blur();
  setTimeout(()=>{
    stage.classList.add('show');
    stage.setAttribute('aria-hidden','false');
    stage.scrollIntoView({behavior:'smooth',block:'start'});
  },1050);
});
