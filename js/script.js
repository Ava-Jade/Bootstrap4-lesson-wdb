$(.'carousel').carousel({
    interval: 3000,
    keyboard: false, // управление на клавиатуре стрелочками(по умолчанию true)
    wrap: false // продолжение цикла показа слайдов (по умолчанию true)
})


$('#exampleModal').modal({
    keyboard: false, // чтобы не закрывалось с помощью кнопки esc (по умолчанию true)
    backdrop: "static" // при нажатии ВНЕ модального окна - окно закрываться не будет
})
