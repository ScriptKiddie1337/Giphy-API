var searchTerm = "";
var topics = ["Fortnite", "Half-Life", "Counter-Strike", "Halo", "Call of Duty", "Battlefield", "The Witcher", "Portal", "God of War", "Last of Us"];

//parameters: topicsArray, classToAdd, buttonDisplay
function buttonLoop(topicsArray, classToAdd, buttonDisplay) {
    $(buttonDisplay).empty();
    for (i = 0; i < topicsArray.length; i++) {
        var btnSetup = $("<button>");
        //"data-type" is coming from the Giphy API
        btnSetup.attr("data-type", topicsArray[i]);
        btnSetup.addClass(classToAdd);
        btnSetup.text(topicsArray[i]);
        $(buttonDisplay).append(btnSetup);
    }
}

buttonLoop(topics, "add-class", "#btn-display");

$("#gif-submit").on("click", function(){
    console.log("#gif-submit");
    //eq - look it up
    var newGif = $('#gif-query').eq(0).val();
    console.log(newGif);
    topics.push(newGif);
    buttonLoop(topics, "add-class", "#btn-display");
    return false;
})

/* $("#gif-submit").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-query").val();
})
var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=jDQFggCtuPElyqZvI8D7dGMgdt0XWYPc&limit=5";

$.ajax({
    url: queryURL,
    method: "GET"
}) */