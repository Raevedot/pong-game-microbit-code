input.onButtonPressed(Button.A, function () {
    if (led.point(0, 4)) {
        led.plot(0, 3)
        led.unplot(0, 4)
    } else if (led.point(0, 3)) {
        led.plot(0, 2)
        led.unplot(0, 3)
    } else if (led.point(0, 2)) {
        led.plot(0, 1)
        led.unplot(0, 2)
    } else if (led.point(0, 1)) {
        led.plot(0, 0)
        led.unplot(0, 1)
    } else if (led.point(0, 0)) {
        led.plot(0, 4)
        led.unplot(0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(4, 0)) {
        led.plot(4, 1)
        led.unplot(4, 0)
    } else if (led.point(4, 1)) {
        led.plot(4, 2)
        led.unplot(4, 1)
    } else if (led.point(4, 2)) {
        led.plot(4, 3)
        led.unplot(4, 2)
    } else if (led.point(4, 3)) {
        led.plot(4, 4)
        led.unplot(4, 3)
    } else if (led.point(4, 4)) {
        led.plot(4, 0)
        led.unplot(4, 4)
    }
})
let bally2 = 0
let ballx2 = 0
led.plot(0, 4)
led.plot(4, 0)
let ball = 7
let ballx1 = 2
let bally1 = 2
let ballpos = [
0,
1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14
]
basic.forever(function () {
    if (ball == ballpos[0]) {
        led.plot(1, 0)
        led.unplot(ballx1, bally1)
        ballx1 = 1
        bally1 = 0
    } else if (ball == ballpos[1]) {
        led.plot(2, 0)
    } else if (ball == ballpos[2]) {
        led.plot(3, 0)
    } else if (ball == ballpos[3]) {
        led.plot(1, 1)
    } else if (ball == ballpos[4]) {
        led.plot(2, 1)
    } else if (ball == ballpos[5]) {
        led.plot(3, 1)
    } else if (ball == ballpos[6]) {
        led.plot(1, 2)
    } else if (ball == ballpos[7]) {
        led.plot(2, 2)
        ballx2 = 2
        bally2 = 2
        led.unplot(ballx1, bally1)
        ballx1 = 2
        bally1 = 2
    } else if (ball == ballpos[8]) {
        led.plot(3, 2)
    } else if (ball == ballpos[9]) {
        led.plot(1, 3)
    } else if (ball == ballpos[10]) {
        led.plot(2, 3)
    } else if (ball == ballpos[11]) {
        led.plot(3, 3)
    } else if (ball == ballpos[12]) {
        led.plot(1, 4)
    } else if (ball == ballpos[13]) {
        led.plot(2, 4)
    } else if (ball == ballpos[14]) {
        led.plot(3, 4)
    }
})
basic.forever(function () {
	
})
