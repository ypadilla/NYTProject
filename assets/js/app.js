// API key = 17f97c3e4f624814b0eb1d2cbc291270

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "17f97c3e4f624814b0eb1d2cbc291270",
  'q': "clinton"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});