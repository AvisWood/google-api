$(document).ready(function(){
    $("#submitButton").click(function(){
       let searchResults = $("#searchBar").val()
       const url =`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchResults}&type=video&key=${key}`
console.log(url)
// $.get(url, function (data) {
//     console.log(data)
// })
$.ajax({
    url: url,
    success: function(data){
        console.log(data)
        let videos= data.items
        for(i=0;i<videos.length;i++){
                console.log(videos[i])
                $("#video" + i).attr("src", "https://www.youtube.com/embed/" + videos[i].id.videoId + "?autoplay=1")

            }
           }
       })
    })



})