
  (function(){
    const root=document.getElementById('prototype');
    function syncOnboardingBackground(){root.classList.toggle('onboarding-active',/^#q-/.test(location.hash))}
    syncOnboardingBackground();
    root.addEventListener('click',function(e){
      const t=e.target.closest('[data-toast]');
      if(t){const n=document.createElement('div');n.className='toast';n.textContent=t.dataset.toast;root.appendChild(n);setTimeout(()=>n.remove(),2200)}
      const c=e.target.closest('.choice');
      if(c&&!c.querySelector('input')){c.parentElement.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));c.classList.add('selected')}
    });
    let playing=true,progress=27,timer;
    const toggle=document.getElementById('play-toggle'),bar=document.getElementById('play-progress'),time=document.getElementById('play-time');
    function tick(){if(!playing||!bar)return;progress=Math.min(100,progress+.25);bar.style.width=progress+'%';const sec=Math.round(252*progress/100);if(time)time.textContent=String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0')}
    timer=setInterval(tick,1000);
    if(toggle)toggle.addEventListener('click',function(e){playing=!playing;toggle.querySelector('i').textContent=playing?'Ⅱ':'▶';toggle.querySelector('span').textContent=playing?'Pause':'Play'});
    window.addEventListener('hashchange',function(){syncOnboardingBackground();const s=document.querySelector(location.hash+' .scroll');if(s)s.scrollTop=0});
  })();
