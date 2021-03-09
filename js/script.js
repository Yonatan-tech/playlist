let songArtists = ["The Weeknd"];
let songLengths = ["336"];
let songImages = ["https://images-na.ssl-images-amazon.com/images/I/81XiZxda-8L._AC_UL600_SR600,600_.jpg"];
let songLinks = ["https://music.youtube.com/watch?v=tEeK40cjmkw&list=RDAMVMtEeK40cjmkw"];
let songNames = ["Save Your Tears"];

/*for (let artist of songArtists) {
  $(".add-song").append(artist);
}

for (let length of songLengths) {
  $(".add-song").append(length);
}

for (let image of songImages) {
  $(".add-song").append(image);
}

for (let link of songLinks) {
  $(".add-song").append(link);
}
*/

$("button#add").click(function(){
  let songName = $("#song").val();
  songNames.push(songName);
  
  let artist = $("#artist").val();
  songArtists.push(artist);
});

function render (artist, name, length, image, link) {
  let div = `<div class = "song"> 
          <div>
            ${artist}
          </div>
          <div>
            336
          </div>
          <img src = "https://images-na.ssl-images-amazon.com/images/I/81XiZxda-8L._AC_UL600_SR600,600_.jpg" width = "250">
          <a href = "https://music.youtube.com/watch?v=tEeK40cjmkw&list=RDAMVMtEeK40cjmkw"></a>
          
        </div>`;
  $("#playlist").append(div);
}

render("The Weeknd");