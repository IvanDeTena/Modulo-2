var hoteles = {
    Playa: {
      name: "Almerimar",
      location: "Almerimar",
      img:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f6/0c/73/almerimar-hotel.jpg?w=1200&h=-1&s=1",
    },
    Golf: {
      name: "Golf Almerimar",
      location: "Almerimar",
      img:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/de/7e/d0/hotel-ar-golf-almerimar.jpg?w=1200&h=-1&s=1",
    },
  };
  
  var selectedHotel = prompt(
    "Sobre que hotel quiere hacer la reseña: Playa o Golf",
  );
  
  document.getElementById("name-hotel").innerHTML =
    "Hotel " + hoteles[selectedHotel].name;
  
  document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hoteles[selectedHotel].location;
  
  document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

  document.getElementById("rating").innerHTML = rating + " estrellas";
  
 
  var anonymous = confirm("¿Quiere que la reseña sea anónima?");
  
  document.getElementById("anonymous").checked = anonymous;

  var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };
  
  var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
 
  document.getElementById("rating").innerHTML = stars[rating];