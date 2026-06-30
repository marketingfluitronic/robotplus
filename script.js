(function(){
  var topbar=document.getElementById('topbar');
  var idx=Array.from(document.querySelectorAll('#indexnav li'));
  var sections=Array.from(document.querySelectorAll('section'));
  var hero=document.getElementById('hero');
  var depthEls=Array.from(document.querySelectorAll('[data-depth]'));
  var fan=document.getElementById('fan');
  var mx=0,my=0,tmx=0,tmy=0,scrollY=window.scrollY;
  idx.forEach(function(li){li.addEventListener('click',function(){var el=document.getElementById(li.dataset.t);if(el)el.scrollIntoView({behavior:'smooth'});});});
  window.addEventListener('scroll',function(){scrollY=window.scrollY;},{passive:true});
  hero.addEventListener('mousemove',function(e){var r=hero.getBoundingClientRect();tmx=(e.clientX/r.width-0.5);tmy=(e.clientY/r.height-0.5);});
  hero.addEventListener('mouseleave',function(){tmx=0;tmy=0;});
  function frame(){
    mx+=(tmx-mx)*0.08; my+=(tmy-my)*0.08;
    var heroH=hero.offsetHeight;
    depthEls.forEach(function(el){
      var d=parseFloat(el.getAttribute('data-depth'))||0;
      var mm=parseFloat(el.getAttribute('data-mouse'))||0;
      var ty=scrollY*d; var px=mx*mm*18; var py=my*mm*18;
      el.style.transform='translate3d('+px+'px,'+(ty+py)+'px,0)';
    });
    document.querySelectorAll('.parallax-img').forEach(function(el){
      var rect=el.getBoundingClientRect();
      var prog=(rect.top+rect.height/2 - window.innerHeight/2)/window.innerHeight;
      el.style.transform='translateY('+(prog*-40)+'px)';
    });
    if(scrollY>heroH*0.7) topbar.classList.add('solid'); else topbar.classList.remove('solid');
    var mid=scrollY+window.innerHeight*0.4;var act=sections[0];
    sections.forEach(function(s){if(s.offsetTop<=mid)act=s;});
    idx.forEach(function(li){li.classList.toggle('active',li.dataset.t===act.id);});
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in');});},{threshold:0.18});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  var fio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var c=Array.from(e.target.querySelectorAll('.fcard'));var n=c.length;c.forEach(function(card,i){var a=(i-(n-1)/2)*12;var x=(i-(n-1)/2)*150;card.style.transform='translateX(calc(-50% + '+x+'px)) rotate('+a+'deg) translateY('+Math.abs(i-(n-1)/2)*18+'px)';});}});},{threshold:0.3});
  if(fan)fio.observe(fan);
})();