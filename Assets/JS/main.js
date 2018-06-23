var searchTerm = "";
var topics = ["Fortnite", "Half-Life", "Counter-Strike", "Halo", "Call of Duty", "Battlefield", "The Witcher", "Portal", "God of War", "Last of Us"];

$("#gif-submit").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-query").val();
})
var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=jDQFggCtuPElyqZvI8D7dGMgdt0XWYPc&limit=5";

$.ajax({
    url: queryURL,
    method: "GET"
})