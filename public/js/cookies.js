window.addEventListener("DOMContentLoaded", (event) => {
  document.cookie = "favorite_cookie=snickerdoodle";
  //console.log('cookies: ', document.cookie)
  document.cookie = "monster_name=cookie";
  //console.log('cookies: ', document.cookie)
  document.cookie ='another_cookie=chocolatechip';
  window.alert(document.cookie)
  //alert('hello world')
});

console.log('outside event listener')
