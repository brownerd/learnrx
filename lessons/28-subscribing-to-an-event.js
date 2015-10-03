/*

Notice that the console is changing over time. Now look at the time stamps on the stock prices. We're displaying stock prices sampled after we ran our program! How could our array have contained stock price records from the future? Did we accidentally rip a hole in the space-time continuum?

The solution to the riddle is that pricesNASDAQ is not an array. Unlike an array, which can only store a snapshot of stock prices, this new type can react to changes and update over time.

In the next section I'll reveal the inner workings of this magical type. You'll learn how you can use it to model everything from mouse events to asynchronous JSON requests. Finally I'll show you how you can query this type using the 5 query functions you already know. It's about time we gave this magical type a name...

Working with Observables

Microsoft's open-source Reactive Extensions library introduces a new collection type to Javascript: Observable. An Observable is a lot like an Event. Like an Event, an Observable is a sequence of values that a data producer pushes to the consumer. However unlike an Event, an Observable can signal to a listener that it has completed, and will send no more data.

Observables can send data to consumers asynchronously. Unlike Array, there's no Javascript literal syntax for creating Observable sequences. However we can build a helper method that visually describes the contents of sequences as well as the times between each item's arrival. The seq function creates an Observable from an array of items, and adds a delay for every empty item encountered. Every ,,, adds up to a second.

// An array of numbers 1,2,3
var numbers123Array =      [1,2,3];

// A sequence that returns 1, and then after 4 seconds returns 2,
// and then after another second returns 3, and then completes.
var numbers123Observable = seq([1,,,,,,,,,,,,2,,,3]);

// Like Arrays, Observables can contain any object - even Arrays.
var observableOfArrays = seq([ [1,2,3],,,,,,[4,5,6],,,,,,,,,,,[1,2] ]);

Observables are a sequence of values, delivered one after the other. Therefore it's possible that an Observable can go on sending data to a listener forever just like a mouse move event. To create a sequence that doesn't complete, you can add a trailing ,,, to the end of the items passed to seq().

// The trailing ,,, ensures that the sequence will not complete.
var mouseMovesObservable =
	seq([ {x: 23, y: 55},,,,,,,{x: 44, y: 99},,,{x:55,y:99},,,{x: 54, y:543},,, ]);

// No trailing ,,, indicates that sequence will complete.
var numbers123Observable = seq([1,,,2,,,3]);

Querying Arrays only gives us a snapshot. By contrast, querying Observables allows us to create data sets that react and update as the system changes over time. This enables a very powerful type of programming known as reactive programming.

Let's start off by contrasting Observable with Events...

Exercise 28: Subscribing to an event

You're probably used to thinking about events as a list of handlers stored in an object. In this example, we subscribe to a button click event and then unsubscribe the first time the button is clicked.

 */


function(button) {
	// the button click handler
	var handler = function(ev) {
		// Unsubscribe from the button event.
		button.removeEventListener("click", handler);

		alert("Button was clicked. Unsubscribing from event.");
	};

	// add the button click handler
	button.addEventListener("click", handler);
}
		
