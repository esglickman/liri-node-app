//make variable to grab stuff from keys.js
var keys = require("./keys.js");


var nodeArgv = process.argv;
//whatever the process.argv are will be names searches
var searches = "";

//twitter node
var Twitter = require('twitter');

//console.log(keys.twitterKeys.consumer_key);

for (var i = 2; i < nodeArgv.length; i++) {
    searches = searches + "" + nodeArgv[i];
    console.log(searches);
}
// 
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

//replace for 'statuses/user_timeline' on line 16
//var statuses = process.argv[2];
 
var params = {screen_name: '@EvanGlickmanAp'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else if (searches == "my-tweets") {
      
      console.log("hello");
   
    
     console.log(JSON.stringify(response, null, 2));
  }
});

