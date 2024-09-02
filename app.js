let night = document.querySelector('.night_theme');
let light = document.querySelector('.light_theme');

night.addEventListener('click', function(){
    night.classList.add('dark_mode');
})
light.addEventListener('click', function(){
    night.classList.remove('dark_mode');
})

let user = document.querySelector('.user');
let main = document.querySelector('.main');
let close_it = document.querySelector('.close')


    user.addEventListener('click' , function(){
        main.classList.add('active');
    });

    close_it.addEventListener('click' , function(){
        main.classList.remove('active');
    })

let navigation = document.querySelector('.navbar');
let full_body = document.querySelector('.full_body');
let menu_bar = document.querySelector('.menu-bar')


    night.addEventListener('click', function(){
        navigation.classList.toggle('random_clr');
        menu_bar.classList.toggle('random_clr');
        full_body.classList.toggle('dark_theme');

    })
    light.addEventListener('click', function(){
        navigation.classList.toggle('random_clr');
        menu_bar.classList.toggle('random_clr');
        full_body.classList.toggle('dark_theme');

    })
    



    

