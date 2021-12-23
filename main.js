function rain(){
    let amount = 120;
    let body = document.querySelector('body');
    let f = 0;
    while(f < amount){
      let drop = document.createElement('f');
      
      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;
      let duration = Math.random() * 5;
      
      drop.style.width = 0.2 + size+ 'px';
      drop.style.left = posX + 'px';
      drop.style.animationDelay = 1 + delay+'s';
      drop.style.animationDuration = 1 + duration+'s';
      body.appendChild(drop);
      f++
    }
  }
  rain();