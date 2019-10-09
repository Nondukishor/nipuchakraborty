

var element= document.getElementById('popular-article')
element.onmousedown=function(event) {
element.style.position='absolute';
element.style.zIndex=1000;
document.getElementById('main').append(element);
moveAt(event.pageX, event.pageY);
function moveAt(pageX,pageY) {
    element.style.left=pageX-element.offsetWidth/2+"px";
    element.style.top=pageY-element.offsetHeight/2+"px";
}
function onMouseMove(event) {
    moveAt(event.pageX,event.pageY);
}

document.addEventListener('mousemove',onMouseMove)
element.onmouseup=function() {
    document.removeEventListener('mousemove',onMouseMove);
    element.onmouseup=null;
}

element.ondragstart = function() {
    return false;
  };
}