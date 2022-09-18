// /////////////////////////////////////get cookies//////////////////////////////////////////////
let getCookie = (name) => {
  let cookieArr = document.cookie.split(';');

  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split('=');

    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
};
getCookie();

let colorSelect = document.querySelectorAll('#color-select');
let style = document.querySelectorAll('#style');
var cookieColor = getCookie('color');

/////////////////////////// check cookies//////////////////////////////////
let checkCookies = () => {
  style.forEach((attr) => {
    singleColor = attr.getAttribute('data-color');
    if (cookieColor == singleColor) {
      attr.removeAttribute('disabled');
    } else {
      attr.setAttribute('disabled', 'true');
    }
  });
};
checkCookies();

// //////////////////create cookies///////////////////////////////////////
// //////////////////color toggle///////////////////////////////////////
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
colorSelect.forEach((item) => {
  item.addEventListener('click', () => {
    attr = item.getAttribute('data-color');
    style.forEach((link) => {
      singleColor = link.getAttribute('data-color');
      if (attr == singleColor) {
        link.removeAttribute('disabled');
        setCookie('color', singleColor, 30);
      } else {
        link.setAttribute('disabled', 'true');
      }
    });
  });
});
