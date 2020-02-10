// main.js

// sanity check
 
$(document).ready(function () {
  $("#save-btn").on("click", function () {
    // is the local storage available for us to use?
    if (window.localStorage) {
      // get what we want to save
      var notes = $("#notes").val();
 
      // make sure we really have it
      /* console.log(notes); */
 
      // save it to local storage
      //                   |--- key
      //                   |       |--- value
      localStorage.setItem("MyStorage", notes);      
      document.getElementById("showlocalstorage").innerHTML = '<span style="color:#ff0000;">You saved this data inside local storage => </span>' + localStorage.getItem("MyStorage");
      
      /* $.cookies.set("MyStorage2", notes);
      $.cookies.get("MyStorage2");
      document.getElementById("showlocalstorage2").innerHTML = localStorage.getItem("MyStorage2"); */

      /* var html_string;
      document.getElementById("showlocalstorage").html(html_string); */
      console.log(localStorage.getItem("MyStorage"));
    }
  });
 
 
  /* var package = {
    "id": 157,
    "name": "7D USA",
    "description": "Discover New York City",
    "latitude": 40.6971494,
    "longitude": -74.2598655,
    "travel_period": "01 March 2019 to 31 March 2020",
    "promotion": "no",
    "price": 1866,
    "image": "https://createtheweb.biz/wmp/img/photocards.png"
  }  */
 
  localStorage.setItem("package-" + packid.id, JSON.stringify(packages));
  /* localStorage.setItem("packageo-" + package.id, package); */
 
  var ul = $("<ul></ul>");
  var href = $("<a></a>").attr("href", "page2.html?id=" + package.id).text(package.name);
  var li_package = $("<li></li>").append(href);
 
  ul.append(li_package);
 
  $("#packages").html("");
  $("#packages").append(ul);  

});

function retrieve() {    
  document.getElementById("showlocalstorage2").innerHTML = '<span style="color:#ff0000;">Current Local Storage Data => </span>' + localStorage.getItem("MyStorage");

}
