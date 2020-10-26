input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Sad)
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showIcon(IconNames.SmallHeart)
basic.pause(100)
basic.showIcon(IconNames.Heart)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
