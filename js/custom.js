/*

Custom script

This file will not be overwritten by the updater

*/

// JavaScript code
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}


//Analytics
function loadGoogleAnalytics(id) {
  // Google tag (gtag.js)
  var firstScript = document.getElementsByTagName("script")[0];
  let newScript = document.createElement("script");
  newScript.async = true;
  newScript.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  firstScript.parentNode.insertBefore(newScript, firstScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', id);
}

window.addEventListener("load", function() {
  if (navigator.webdriver) {
      console.log('Bot Browser');
      loadGoogleAnalytics("G-ZV6ZQ5BY4B");
  } else {
      console.log('Human Browser');
      loadGoogleAnalytics("G-T445XL67R6");
  }
});