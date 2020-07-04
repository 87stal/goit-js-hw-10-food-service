const checkboxRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

//Theme default and saved
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');


if (localStorage.getItem('theme') === null) {
  bodyRef.classList.add(Theme.LIGHT);
} else {
  bodyRef.classList.add(JSON.parse(savedTheme));
  if (JSON.parse(savedTheme) === Theme.DARK) {
    checkboxRef.checked = true;
  }
}
//Change Theme
checkboxRef.addEventListener('change', onChangeTheme);

function onChangeTheme(event) {
  if (event.target.checked) {
   bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
  return;
}





