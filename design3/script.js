//Variables


const searchbar = document.querySelector('.searchbar-container');
const profilecontainer = document.querySelector('.profile-container');
const root = document.documentElement.style;
const get = (param)=> document.getElementById(`${param}`);
const url = 'https://api.github.com/users/';
const noresults = get('no-results')
const btnmode = get('btn-mode')
const modetext = get('mode-text')
const modeicon =get('mode-icon')

let darkMode = localStorage.getItem('darkModeSet') || 'true';

darkMode = localStorage.getItem('darkModeSet') || 'true';

  if(darkMode == 'true'){
      darkModeProperties();
  }else{
      lightModeProperties()

  }



btnmode.addEventListener('click', function(){
  darkMode = localStorage.getItem('darkModeSet') || 'true';

    if(darkMode == 'false'){
        darkModeProperties()
    }else{
        lightModeProperties()
    }
    console.log(darkMode);

})
//functions

//dark mode default
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkModeProperties()
}

function darkModeProperties(){
    root.setProperty('--lm-bg', '#141D2F')
    root.setProperty('--lm-bg-content', '#1E2A47')
    root.setProperty('--lm-text', 'white')
    root.setProperty('--lm-text-alt', 'white')
    root.setProperty('--lm-shadow-xl', 'rgba(70,88,109,0.15)')
    modetext.innerText = "LIGHT"
    modeicon.src = "./assets/icon-sun.svg"
    root.setProperty('--lm-icon-bg', 'brightness(1000%)')
    root.setProperty('--stats-wrapper', '#293857')

    darkMode = true
    localStorage.setItem('darkModeSet','true')
}

function lightModeProperties(){
    root.setProperty('--lm-bg', '#F6F8FF')
    root.setProperty('--lm-bg-content', '#e4eaff') // #FEFEFE
    root.setProperty('--lm-text', '#000')
    root.setProperty('--lm-text-alt', '#000')
    root.setProperty('--lm-shadow-xl', 'rgba(70, 88, 109, 0.25)')
    modetext.innerText = "DARK"
    modeicon.src = "./assets/icon-moon.svg"
    root.setProperty('--lm-icon-bg', 'brightness(100%)')
    root.setProperty('--stats-wrapper', '$F6F8FF')
    darkMode = false
    localStorage.setItem('darkModeSet', 'false')
}
