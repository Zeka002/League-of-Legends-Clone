let riotbtn = document.getElementById('riotLogo');
let riotbar = document.getElementById('riotbar');
let divRiotBtn = document.getElementById('divRiotBtn');

riotbtn.addEventListener('click', function() {
    riotbar.classList.remove('riotSlideUp');
    riotbar.classList.add('riotSlideDown');
});

divRiotBtn.addEventListener('click', function () {
    riotbar.classList.remove('riotSlideDown');
    riotbar.classList.add('riotSLideUp');
})

closeRiot.addEventListener('click', function() {

    riotbar.classList.remove('riotSlideDown');
    riotbar.classList.add('riotSLideUp');
});

