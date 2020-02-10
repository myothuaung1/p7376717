// sanity check

window.onload=function(){

  function handle__ajax_weather__data_populate(div, weather) {
    /* div.html(""); */ 
    for (var i = 0; i < weather.packages.length; i++) {
        /* console.log(weather.packages[i]); */

        var weather02 = weather.packages[i];   
               
        var imageshow =  weather02.image;
        var nameshow =  weather02.name;
        var descriptionshow =  weather02.description;

        /* var pkgid = weather02.pkgid; */
        var pkglatitude = weather02.latitude;
        var pkglongitude = weather02.longitude;
        var idu = weather02.id;


        /* var wname = weather02.name;
        var wdescription = weather02.description;
        var wpromotion = weather02.promotion;
        var wprice = weather02.price; */  
       /*  document.getElementById("name-detail").innerHTML = wname;      */  
          
        /* console.log(wname);  
        console.log(wdescription);
        console.log(wpromotion);
        console.log(wprice);
        console.log('----------------------');    */ 
        /* var lat, lng;   */
        /* var lnkDetail = $("<a></a>");  
        lnkDetail.attr("href", "map.html?pkgid=" + pkgid + "&lat=" + pkglatitude + "&long=" + pkglongitude); */
        
        div.append(
          
          '<table style="background-color:#ffffff;"><tr><td><img src="' + imageshow + '"></td><td>'  + '<a href="map.html?packid=' + idu + '&mylat=' + pkglatitude + '&mylng=' + pkglongitude + '">' + nameshow +'<br>' + descriptionshow + '</a>' + '</td></tr></table>');
        
      }
    }  
   
    // by default the Fetch API uses the GET method
   /*  $("#fetch-movie-get-button").load("click", function () { */
      var url = "https://createtheweb.biz/wmp/get_travel_package.php";
      // Call the fetch function passing the url of the API as a parameter
      fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          // code for handling the data you get from the API
          var div = $("#ajax-weather-list");    
          handle__ajax_weather__data_populate(div, data);
        })
        .catch(function (err) {
          // service the errors
          console.log(err);
        });
    /* });  */
    
  }