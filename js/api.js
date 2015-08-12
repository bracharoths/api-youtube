$(function(){
  $('#search-term').submit(function(e){
    e.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(search){
  var params = {
    part: 'snippet',
    key: 'AIzaSyChbz3MFtKY3RooOSLAZrqXnjppHlHEWTo',
    type: 'video',
    q: search
  };

  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    // showResults(data.Search);
    console.log(data)
  });
}

// function showResults(results){
//   var str = JSON.stringify(response.result)
//   $.each(results, function(index,value){
//     html += '<p>' + value.Title + '</p>';
//     console.log(value.Title);
//   });
//   $('#search-results').html(html);
// }

// $(function(){
// console.log('ready');
//   $.getJSON('https://www.googleapis.com/youtube/v3/search', {
//   	key: 'AIzaSyChbz3MFtKY3RooOSLAZrqXnjppHlHEWTo',
//   	part: 'snippet',
//   	type: 'video'
//   }, 
//   function(data){

//   	console.log(data)
//   });

//   $.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyChbz3MFtKY3RooOSLAZrqXnjppHlHEWTo&part=snippet&type=video', function(data){
//     // myData = data.Search;
//     // $.each(myData, function(index,value){
//     // console.log(value.Title);
//     // });
//   console.log(data);
//   });
// });
