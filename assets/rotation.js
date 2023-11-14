$(document).ready(function () {
   // alert(window.location.href);
      if (!(window.location.href.indexOf("sk-sk") > -1)) {  // neni tam sk-sk
          if (!(window.location.href.indexOf("admin") > -1)) {  // neni tam admin
            if (!(window.location.href.indexOf("oseid") > -1)) {   // neni tam editor sablony
          //      location.href="https://eulift.myshopify.com/sk-sk/";
            }
          }
      }
});
