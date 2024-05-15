let text = document.querySelector(".text");
let light = document.querySelector(".light");

document.addEventListener('mousemove', (e) =>{
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    light.style.left = mouseX + 'px';
    light.style.top = mouseY + 'px';

    let distanceX = mouseX - text.offsetLeft - text.offsetWidth / 2;
    let distanceY = mouseY - text.offsetTop - text.offsetHeight / 2;

    let shadow = '';
    for(let i = 0; i < 200; i++){
        let shadowX = -distanceX * (i/400);
        let shadowY = -distanceY * (i/400);
        let opacity = 1 - (1/200);
        shadow += `
            ${shadow? ',' : ''} 
            ${shadowX}px ${shadowY}px 0 rgba(33, 33, ${opacity})
        ` ;
    }
    text.style.textShadow = shadow;
})