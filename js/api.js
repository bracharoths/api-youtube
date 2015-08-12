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
  	console.log(data)
    showResults(data.items);
  });
}

function showResults(results) {
	var html = "";
  $('#query').val();
  $.each(results, function(index, result) {
	html += '<a href="https://www.youtube.com/watch?v=' + result.id.videoId +'"><img src="' + result.snippet.thumbnails.medium.url +'"></a>';
  });
  $('#search-results').html(html);
}

 
 