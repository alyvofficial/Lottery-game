var lottery = document.querySelector('.lottery-box')
var start = document.querySelector('.start')
var stop = document.querySelector('.stop')
var reset = document.querySelector('.reset')
var arr = []

start.onclick = function () {
   var x = setInterval(() => {
       var number = Math.floor(Math.random() * (100 - 1) + 1)
        if (arr.includes(number) == false) {
            var balls = document.createElement('div')
            balls.classList.add('ball')
            balls.innerText = number
            lottery.append(balls)
            arr.push(number)
        }

    }, 500);
    stop.onclick=function(){
        clearInterval(x)

    }
    reset.onclick=function(){
        clearInterval(x)
        lottery.innerText=""
        arr=[]
    }

}