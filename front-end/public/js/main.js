
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/api/filters?brand=&screen_type=&screen_size=&resolution=&voltage=",
    "method": "GET",
    "headers": {}
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    
  });