const intro=document.getElementById('intro');
const envelope=document.getElementById('envelope');
const openButton=document.getElementById('openButton');
const stage=document.getElementById('invitationStage');
let opened=false;

function openInvitation(){
  if(opened)return;
  opened=true;
  intro.classList.add('open');
  openButton.blur();
  setTimeout(()=>{
    stage.classList.add('show');
    stage.setAttribute('aria-hidden','false');
    stage.scrollTop=0;
    intro.classList.add('done');
  },2300);
}

envelope.addEventListener('click',openInvitation);
