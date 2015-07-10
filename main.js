$(document).on('ready', function() {
 

var Quote =(function(){
	var quoteArray = [];
	var quoteCounter = 1000;

	var currentQuote = function(quote, author){
		this.quote = quote;
		this.author = author;
		quoteArray.push(this);
	}
	return currentQuote;
});

var quoteRef = 'quote' + toString(Quote.quoteCounter) //how do I access static quote counter from outside Quote
console.log(quoteRef);

$('.submit').on('click', function(){
	// on click create a new instance of Quote pass .val() from both inputs as parameters to constructor.
	 var quoteRef = quote + Quote.quoteCounter
	 quoteRef = new Quote($('.quoteInput').val(),$('.authorInput').val());
	 quoteRef++
	 console.log(quoteRef);
	});

});