$(document).ready(function() {
  $('.grab-tweets').on('click', 'input', function() {
    var username = $('#username').text();
    grabTweets(username);
    return false;
  });

  $('.tweet').on('click', 'a', function() {
    var thisTweet = $(this).text('.tweet');
    favorite(thisTweet);
  });

  $(document).on('scroll', function() {
    if ($(document).scrollTop() > 2000) {
      scrolly();
    }
  });
});

var grabTweets = function(username) {
  $.getJSON('http://bstshk-replacement.herokuapp.com/?callback=?&screen_name='+username+'',
            function(data) {
              var html = '';
              $.each(data, function(tweetIndex, tweet) {
                html += '<div class="tweet">';
                html += '<h3 class="username">' + tweet.username + '</h3>';
                html += '<div class="tweet-text">';
                html += tweet.status;
                html += '</div>';
                html += '<a href=#grab-tweets class="favorite">Click to Like</a>';
                html += '</div>';
              });
            });
    $('.span4').html(html);
};

var favorite = function(tweet) {
  $(tweet).insertAfter('.span8');
};

var scrolly = function() {
  console.log($(document).scrollTop());
  $('.button').raptorize();

};