localStorage.setItem('myCat', 'Tom');
localStorage.getItem("myCat");
localStorage.removeItem("myCat");


let lastTime = localStorage.getItem('lastTime') || new Date().getTime();
let nowTime = new Date().getTime();

console.log('与上次登录的时间差', (nowTime - lastTime) / 1000, '秒');

if (nowTime - lastTime > 1000 * 60) {
    console.log('超过60秒未操作,请重新登录');
    const LASTTIME = new Date().getTime();
    localStorage.setItem('lastTime', LASTTIME);
} else {
    const LASTTIME = new Date().getTime();
    localStorage.setItem('lastTime', LASTTIME);
}