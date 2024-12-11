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


// SECTION 3 (role button)

let assassin = document.getElementById('assassins');
let fighter = document.getElementById('fighters');
let mage = document.getElementById('mages');
let marksmen = document.getElementById('marksmen');
let support = document.getElementById('supports');
let tank = document.getElementById('tanks');
let assassinImg = document.getElementById('assassinRoleImg');
let fighterImg = document.getElementById('fighterRoleImg');
let marksmenImg = document.getElementById('marksmenRoleImg');
let mageImg = document.getElementById('mageRoleImg');
let supportImg = document.getElementById('supportRoleImg');
let tankImg = document.getElementById('tankRoleImg');
let changeRoleImg = document.getElementById('changeRoleImg');
let changeName = document.getElementById('changeName');
let changeInfo = document.getElementById('changeInfo');
let roleBg = document.getElementById('roleBg');

assassin.addEventListener('click', function () {
    marksmenImg.classList.remove('active-role-img');
    mageImg.classList.remove('active-role-img');
    supportImg.classList.remove('active-role-img');
    tankImg.classList.remove('active-role-img');
    fighterImg.classList.remove('active-role-img');
    assassinImg.classList.add('active-role-img');

    changeRoleImg.setAttribute("src","/asstes/images/assassin logo img.avif");
    roleBg.style.background = 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?auto=format&fit=fill&q=80&w=656)';
    roleBg.style.backgroundRepeat = "no-repeat";
    roleBg.style.backgroundSize = "cover";
    roleBg.style.backgroundPosition = "center";
    changeName.innerText = "AKALI";
    changeInfo.innerText = "The Rogue Assassin";

});

fighter.addEventListener('click', function () {
    assassinImg.classList.remove('active-role-img');
    marksmenImg.classList.remove('active-role-img');
    mageImg.classList.remove('active-role-img');
    supportImg.classList.remove('active-role-img');
    tankImg.classList.remove('active-role-img');
    fighterImg.classList.add('active-role-img');

    changeRoleImg.setAttribute("src","/asstes/images/fighter role img.avif");
    roleBg.style.background = 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fab36e5433f9457968d5f4e5c2ebed38fdd4b17c-656x657.png?auto=format&fit=fill&q=80&w=656)';
    roleBg.style.backgroundRepeat = "no-repeat";
    roleBg.style.backgroundSize = "cover";
    roleBg.style.backgroundPosition = "center";
    changeName.innerText = "YASUO";
    changeInfo.innerText = "The Unforgiven";
});

mage.addEventListener('click', function () {
    assassinImg.classList.remove('active-role-img');
    marksmenImg.classList.remove('active-role-img');
    mageImg.classList.add('active-role-img');
    supportImg.classList.remove('active-role-img');
    tankImg.classList.remove('active-role-img');
    fighterImg.classList.remove('active-role-img');

    changeRoleImg.setAttribute("src","/asstes/images/mage role img2.avif");
    roleBg.style.background = 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b5fc531af3d3e8ef47d72cbf5a2ccdddd7912276-656x657.png?auto=format&fit=fill&q=80&w=656)';
    roleBg.style.backgroundRepeat = "no-repeat";
    roleBg.style.backgroundSize = "cover";
    roleBg.style.backgroundPosition = "center";
    changeName.innerText = "LUX";
    changeInfo.innerText = "The Lady of Luminosity";
});

marksmen.addEventListener('click', function () {
    marksmenImg.classList.add('active-role-img');
    mageImg.classList.remove('active-role-img');
    supportImg.classList.remove('active-role-img');
    tankImg.classList.remove('active-role-img');
    fighterImg.classList.remove('active-role-img');
    assassinImg.classList.remove('active-role-img');

    changeRoleImg.setAttribute("src","/asstes/images/marksman role img2.avif");
    roleBg.style.background = 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/e5282eb187f0a06c879fe6996c9831ff2d7752a3-656x657.svg?auto=format&fit=fill&q=80&w=656)';
    roleBg.style.backgroundRepeat = "no-repeat";
    roleBg.style.backgroundSize = "cover";
    roleBg.style.backgroundPosition = "center";
    changeName.innerText = "JINX";
    changeInfo.innerText = "The Loose Cannon";
});

support.addEventListener('click', function () {
    marksmenImg.classList.remove('active-role-img');
    mageImg.classList.remove('active-role-img');
    supportImg.classList.add('active-role-img');
    tankImg.classList.remove('active-role-img');
    fighterImg.classList.remove('active-role-img');
    assassinImg.classList.remove('active-role-img');

    changeRoleImg.setAttribute("src","/asstes/images/support role img.avif");
    roleBg.style.background = 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a2d0a92f82549cafa4006bc47e8d7287505a3c40-656x657.png?auto=format&fit=fill&q=80&w=656)';
    roleBg.style.backgroundRepeat = "no-repeat";
    roleBg.style.backgroundSize = "cover";
    roleBg.style.backgroundPosition = "center";
    changeName.innerText = "TURESH";
    changeInfo.innerText = "The Chain Warden";
});

tank.addEventListener('click', function () {
    marksmenImg.classList.remove('active-role-img');
    mageImg.classList.remove('active-role-img');
    supportImg.classList.remove('active-role-img');
    tankImg.classList.add('active-role-img');
    fighterImg.classList.remove('active-role-img');
    assassinImg.classList.remove('active-role-img');

    changeRoleImg.setAttribute("src","/asstes/images/tank role img.avif");
    roleBg.style.background = 'url(/asstes/images/tankbg.avif)';
    roleBg.style.backgroundRepeat = "no-repeat";
    roleBg.style.backgroundSize = "cover";
    roleBg.style.backgroundPosition = "center";
    changeName.innerText = "LEONA";
    changeInfo.innerText = "The Radiant Dawn";
});
