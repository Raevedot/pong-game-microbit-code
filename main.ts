input.onButtonPressed(Button.A, function () {
    playera = playera % 5 + 1
    led.plot(0, playera - 1)
    led.unplot(0, playerapos[playera])
})
input.onButtonPressed(Button.B, function () {
    playerb = playerb % 5 + 1
    led.plot(4, Math.abs(playerb - 5))
    led.unplot(4, playerbpos[playerb])
})
input.onGesture(Gesture.Shake, function () {
    led.plot(4, 4)
    led.plot(0, 0)
    playera = 1
    playerb = 1
    ballx = 2
    bally = 2
    rng1 = randint(0, 3)
})
let rng2 = 0
let rng1 = 0
let bally = 0
let ballx = 0
let playerbpos: number[] = []
let playerapos: number[] = []
let playerb = 0
let playera = 0
led.plot(4, 4)
led.plot(0, 0)
playera = 1
playerb = 1
playerapos = [
0,
4,
0,
1,
2,
3
]
playerbpos = [
0,
0,
4,
3,
2,
1
]
ballx = 2
bally = 2
rng1 = randint(0, 3)
basic.forever(function () {
    basic.pause(1000)
    if (rng1 == 0) {
        while (ballx != 5) {
            ballx = ballx + 1
            bally = bally - 1
            led.unplot(ballx - 1, bally + 1)
            basic.pause(1000)
        }
    } else if (rng1 == 1) {
        while (bally != -1) {
            ballx = ballx - 1
            bally = bally + 1
            led.unplot(ballx + 1, bally - 1)
            basic.pause(1000)
        }
    } else if (rng1 == 2) {
        while (bally != -1) {
            ballx = ballx - 1
            bally = bally - 1
            led.unplot(ballx + 1, bally + 1)
            basic.pause(1000)
        }
    } else if (rng1 == 3) {
        while (ballx != 5) {
            ballx = ballx + 1
            bally = bally + 1
            led.unplot(ballx - 1, bally - 1)
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    if (ballx == 5) {
        basic.showString("Player A wins!")
    } else if (ballx == -1) {
        basic.showString("Player B wins!")
    }
})
basic.forever(function () {
    led.plot(ballx, bally)
})
basic.forever(function () {
    if (led.point(ballx + 1, bally)) {
        rng2 = randint(0, 1)
        if (rng2 == 0) {
            ballx = ballx - 1
            bally = bally + 1
            led.unplot(ballx + 1, bally - 1)
            basic.pause(1000)
        } else if (rng2 == 1) {
            ballx = ballx - 1
            bally = bally - 1
            led.unplot(ballx + 1, bally - 1)
            basic.pause(1000)
        }
    }
    if (led.point(ballx - 1, bally)) {
        rng2 = randint(0, 1)
        if (rng2 == 0) {
            ballx = ballx + 1
            bally = bally - 1
            led.unplot(ballx + 1, bally - 1)
            basic.pause(1000)
        } else if (rng2 == 1) {
            ballx = ballx - 1
            bally = bally - 1
            led.unplot(ballx + 1, bally - 1)
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    if (bally == 4) {
        basic.pause(1000)
        bally = bally - 1
        rng1 = 0
    } else if (bally == 0) {
        basic.pause(1000)
        bally = bally + 1
    }
})
