// $(function(){
//   $('#search-term').submit(function(e){
//     e.preventDefault();
//     var searchTerm = $('#query').val();
//     getRequest(searchTerm);
//   });
// });

// function getRequest(searchTerm){
//   var params = {
//     part: 'snipet',
//     // key: 'AIzaSyChbz3MFtKY3RooOSLAZrqXnjppHlHEWTo',
//     q: 'json'
//   };

//   url = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyChbz3MFtKY3RooOSLAZrqXnjppHlHEWTo';

//   $.getJSON(url, params, function(data){
//     showResults(data.Search);
//   });
// }

// function showResults(results){
//   var html = "";
//   $.each(results, function(index,value){
//     html += '<p>' + value.Title + '</p>';
//     console.log(value.Title);
//   });
//   $('#search-results').html(html);
// }

$(function(){

  $.getJSON('https://www.googleapis.com/youtube/v3/search', function(data){
    console.log(data);
  })
})
