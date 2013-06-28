Exam 4

Finding elements
Adding click handlers
Creating elements
Adding resilient click handlers
Ajax

## Project idea

Tweet sorter:
Start with a 2-column layout
At the top of column 1, add an input field and a submit button
When submit is clicked, download the tweets for the username in the input field
Display downloaded tweet text below with a link called "favorite"
When you click favorite, move the tweet to the right column
Tweets should be sorted in reverse chronological order (newest at top)

## Extensions

Polling:
Make the tweet sorter "poll" the api every n seconds for new tweets
If there are any new tweets, display them at the top of the left column

Search:
Add an input field that will search through the text of tweets
Each time you press a letter, do the search
But only if there are 2 letters
When you find that a tweet doesn't match the search, hide it and allow the other tweets to float up
When you clear the search box, show all the hidden tweets again
Use the html5 search element so we get a clear button for free