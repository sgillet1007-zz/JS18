$(document).on('ready', function() {
 
quoteArray = [];

var CurrentQuote = function(quote, author){
	this.quote = quote;
	this.author = author;
	quoteArray.push(this);	
};

$('.submit').on('submit', function(){
	 event.preventDefault();
	 var inputQuote = $('#quoteInput').val();
	 var inputAuthor = $('#authorInput').val();
	 var currentQuote = new CurrentQuote(inputQuote,inputAuthor);
	 $('.quote-gallery').append('<div class="quote-wrapper"><div class="quote-text">' + currentQuote.quote + '<br>' + currentQuote.author + '</div></div>');
});








































});