/*

The take() function is great way of listening for a discrete number of events and then unsubscribing, but Observable has an even more flexible function that we can use to complete sequences...

Exercise 31: Completing sequences with takeUntil()

Have you ever wanted to unsubscribe from one Event when another Event fires? Observable's takeUntil() function is a convenient way of completing a sequence when another Event occurs. Here's how takeUntil() works:

var numbersUntilStopButtonPressed =
	seq(              [ 1,,,2,,,3,,,4,,,5,,,6,,,7,,,8,,,9,,, ]).
		takeUntil(seq([  ,,, {eventType: "click"},,, ]) )                    === seq([ 1,,,2 ])

Earlier we (unknowningly) built a dynamic Microsoft price stock ticker using Observable. The problem with that stock ticker was that it kept going on forever. If left unchecked, all the entries in the log could use up all of the memory on the page. In the exercise below, filter the Observable sequence of NASDAQ prices for MSFT stock prices, use the fromEvent() function to create an Observable .

 */

function run(pricesNASDAQ, printRecord, stopButton) {
	var stopButtonClicks = // ----- To finish this expression, use Observable.fromEvent to convert the "click" event on the stop button to an Observable
		microsoftPrices =
			pricesNASDAQ.
				filter(function(priceRecord) {
					return priceRecord.name === "MSFT";
				}).
				// ----- To finish this expression, use takeUntil to complete the sequence when stopButtonClicks fires.

	microsoftPrices.
		forEach(function(priceRecord) {
			printRecord(priceRecord);
		});
}

run();
