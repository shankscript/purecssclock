window.onload = function () {
    var d = new Date();
    var secDeg = d.getSeconds() / 60 * 360;
    var minDeg = d.getMinutes() / 60 * 360 + secDeg  / 60;
    var hrDeg = (d.getHours() % 12) / 12 * 360 + minDeg / 12;
    console.log(d.getMinutes());
    document.querySelector('.sec .wrap').style.transform = 'rotateZ(' + secDeg + 'deg)';
    document.querySelector('.min .wrap').style.transform = 'rotateZ(' + minDeg + 'deg)';
    document.querySelector('.hr .wrap').style.transform = 'rotateZ(' + hrDeg + 'deg)';
    document.querySelector('.clock').classList.add('anim');
    console.log(d.getSeconds(), secDeg);
    d = secDeg = minDeg = hrDeg = null;
};