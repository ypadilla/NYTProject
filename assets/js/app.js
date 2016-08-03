// API key = 17f97c3e4f624814b0eb1d2cbc291270

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var term = ""
var numRecords = ""
var startYear = ""
var endYear = ""

url += '?' + $.param({
  'api-key': "17f97c3e4f624814b0eb1d2cbc291270",
  'q': "clinton"
});
$.ajax({
  url: url,
  begin_date: startYear,
  end_date: endYear,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});