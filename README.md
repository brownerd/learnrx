# [Learn Rx](http://reactivex.io/learnrx/)


## Functional Programming in Javascript

This is a series of interactive exercises for learning Microsoft's Reactive Extensions (Rx) Library for Javascript. So why is the title "Functional Programming in Javascript"? Well it turns out that the key to learning Rx is training yourself to use functional programming to manipulate collections. Functional programming provides developers with the tools to abstract common collection operations into reusable, composable building blocks. You'll be surprised to learn that most of the operations you perform on collections can be accomplished with five simple functions (some native to JavaScript and some included in the RxJS library):

- map
- filter
- concatAll
- reduce
- zip

### Here's my promise to you:
If you learn these 5 functions your code will become shorter, more self-descriptive, and more durable. Also, for reasons that might not be obvious right now, you'll learn that these five functions hold the key to simplifying asynchronous programming. Once you've finished this tutorial you'll also have all the tools you need to easily avoid race conditions, propagate and handle asynchronous errors, and sequence events and AJAX requests. In short, these 5 functions will probably be the most powerful, flexible, and useful functions you'll ever learn.

### Finishing the Interactive Exercises

This isn't just a tutorial, it's a series of interactive exercises that you can fill out right in your browser! It's easy to finish the exercises. Just edit the code and press "Run." If the code works, a newexercise  will appear below. Otherwise an error will appear.

This tutorial may have bugs, so if you get into a weird state or you're sure you've got the right answer but can't move on, just refresh your browser. If you're using a modern browser, and if you're here I assume you are, the state of your exercises will be saved. If you want, you can also restart the lab.

This tutorial is on GitHub, and is asymptotically approaching completion. If you'd like to add an exercise, clarify a problem description, or fix a bug feel free to fork and send us a pull request. We'll try and fit user-contributed exercises into a narrative.

Your answers will be saved in local storage. Use the buttons below if you want to transfer them to another machine:


## Working with Arrays

The Array is Javascript's only collection type. Arrays are everywhere. We're going to add the five functions to the Array type, and in the process make it much more powerful and useful. As a matter of fact, Array already has the map, filter, and reduce functions! However we're going to reimplement these functions as a learning exercise.

This section will follow a pattern. First we'll solve problems the way you probably learned in school, or on your own by reading other people's code. In other words, we'll transform collections into new collections using loops and statements. Then we'll implement one of the five functions, and then use it to solve the same problem again without the loop. Once we've learned the five functions, you'll learn how to combine them to solve complex problems with very little code.

## Traversing an Array


#### Exercise 1: Print all the names in an array
```js
function(console) {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
		counter;

	for(counter = 0; counter < names.length; counter++) {
		console.log(names[counter]);
	}
}
```


#### Exercise 2: Use forEach to print all the names in an array
```js
function(console) {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

	names.forEach(function(name) {
		console.log(name);
	});
}
```

#### Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()

For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

```js
function() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }]
			}
		],
		videoAndTitlePairs = [];

	newReleases.forEach(function(video) {
		videoAndTitlePairs.push({id:video.id, title: video.title});
	});

	return videoAndTitlePairs;
}

```

#### Exercise 4: Implement map()

To make projections easier, let's add a map() function to the Array type. Map accepts the projection function to be applied to each item in the source array, and returns the projected array.

```js
Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		results.push(projectionFunction(itemInArray));

	});

	return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

```

#### Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs

Let's repeat theexercise  of collecting {id, title} pairs for each video in the newReleases array, but this time we'll use our map function.

```js
function() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }]
			}
		];

  return newReleases.map(function(video) { return {id: video.id, title: video.title}; });
}

```

#### Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array.

```js
function() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		],
		videos = [];

	newReleases.forEach(function(video) {
		if (video.rating === 5.0) {
			videos.push(video);
		}
	});

	return videos;
}
```

#### Exercise 7: Implement filter()

To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a predicate. A predicate is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.

```js
Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
	  if (predicateFunction(itemInArray)) {
		results.push(itemInArray);
	  }
	});

	return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]
```

## Query Data by Chaining Method Calls

#### Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0

```js
function() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Chain the filter and map functions to select the id of all videos
	// with a rating of 5.0.

	return newReleases.
		filter(function(video) {
			return video.rating === 5.0;
		}).
		map(function(video) {
			return video.id;
		});
	// ------------   INSERT CODE HERE!  -----------------------------------
}

```

---

## Querying Trees

Sometimes, in addition to flat arrays, we need to query trees. Trees pose a challenge because we need to flatten them into arrays in order to apply filter() and map() operations on them. In this section we'll define a concatAll() function that we can combine with map() and filter() to query trees.

#### Exercise 9: Flatten the movieLists array into an array of video ids

Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.

```js
function() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "Dramas",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		],
		allVideoIdsInMovieLists = [];

	movieLists.forEach(function(movieList) {
		movieList.videos.forEach(function(video) {
			allVideoIdsInMovieLists.push(video.id);
		});
	});

	return allVideoIdsInMovieLists;

}
```

#### Exercise 10: Implement concatAll()

Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.

```js
Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

```

#### Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids

Hint: use two nested calls to map() and one call to concatAll().

```js
function() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "Dramas",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use map and concatAll to flatten the movieLists in a list of video ids.
	// ------------   INSERT CODE HERE!  -----------------------------------

	return movieLists.
	  map(function(movieList) {
		return movieList.videos.map(function(video) {
			return video.id;
		  });
	  }).
	  concatAll();

}
```

#### Exercise 12:  Retrieve id, title, and a 150x200 box art url for every video

You've managed to flatten a tree that's two levels deep, let's try for three! Let's say that instead of a single boxart url on each video, we had a collection of boxart objects, each with a different size and url. Create a query that selects {id, title, boxart} for every video in the movieLists. This time though, the boxart property in the result will be the url of the boxart object with dimensions of 150x200px. Let's see if you can solve this problem with map(), concatAll(), and filter().

There's just more one thing: you can't use indexers. In other words, this is illegal:

Furthermore, you're not allowed to use indexers in any of the remaining exercises unless you're implementing one of the five functions. There is a very good reason for this restriction, and that reason will eventually be explained. For now, you'll simply have to accept it on faith that this restriction serves a purpose. :-)

```js
function() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		];


	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists.
	  map(function(movieList) {
		return movieList.videos.
		  map(function(video) {
			return video.boxarts.
			  filter(function(boxart) {
				return boxart.width === 150;
			  }).
			  map(function(boxart) {
				return {id: video.id, title: video.title, boxart: boxart.url};
			  });
		  }).
		  concatAll();
	  }).
	  concatAll();

}
```

#### Exercise 13: Implement concatMap()

Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.

```js
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.
		map(function(item) {
			return projectionFunctionThatReturnsArray(item);
		}).
		// apply the concatAll function to flatten the two-dimensional array
		concatAll();
};

/*
	var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
	// collect all the words for each number, in every language, in a single, flat list
	var allWords = [0,1,2].
		concatMap(function(index) {
			return spanishFrenchEnglishWords[index];
		});

	return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/
```

#### Exercise 14:  Use concatMap() to retrieve id, title, and 150x200 box art url for every video

Let's repeat theexercise  we just performed. However this time we'll simplify the code by replacing the map().concatAll() calls with concatMap().

```js
function() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		];


	// Use one or more concatMap, map, and filter calls to create an array with the following items
	// [
	//     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists.concatMap(function(movieList) {
		return movieList.videos.concatMap(function(video) {
			return video.boxarts.
				filter(function(boxart) {
					return boxart.width === 150;
			  	}).
			  	map(function(boxart) {
					return {id: video.id, title: video.title, boxart: boxart.url};
				});
		  });
	  });
}
```

## Reducing Arrays

Sometimes we need to perform an operation on more than one item in the array at the same time. For example, let's say we need to find the largest integer in an array. We can't use a filter() operation, because it only examines one item at a time. To find the largest integer we need to compare items in the array to each other.

One approach could be to select an item in the array as the assumed largest number (perhaps the first item), and then compare that value to every other item in the array. Each time we come across a number that was larger than our assumed largest number, we'd replace it with the larger value, and continue the process until the entire array was traversed.

If we replaced the specific size comparison with a closure, we could write a function that handled the array traversal process for us. At each step our function would apply the closure to the last value and the current value and use the result as the last value the next time. Finally we'd be left with only one value. This process is known as reducing because we reduce many values to a single value.

#### Exercise 15: Use forEach to find the largest box art

In this example we use forEach to find the largest box art. Each time we examine a new boxart we update a variable with the currently known maximumSize. If the boxart is smaller than the maximum size, we discard it. If it's larger, we keep track of it. Finally we're left with a single boxart which must necessarily be the largest.

```js
function() {
	var boxarts = [
			{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		],
		currentSize,
		maxSize = -1,
		largestBoxart;

	boxarts.forEach(function(boxart) {
		currentSize = boxart.width * boxart.height;
		if (currentSize > maxSize) {
			largestBoxart = boxart;
			maxSize = currentSize;
		}
	});

	return largestBoxart;
}
```

#### Exercise 16: Implement reduce()

Let's add a reduce() function to the Array type. Like map

```js
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one function.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};
```

#### Exercise 17: Retrieve the largest rating.

Let's use our new reduce function to isolate the largest value in an array of ratings.

```js
function() {
	var ratings = [2,3,1,4,5];

	// You should return an array containing only the largest rating. Remember that reduce always
	// returns an array with one item.
	return ratings.
	  reduce(function(acc, curr) {
		if(acc > curr) {
		  return acc;
		}
		else {
		  return curr;
		}
	  });
}
```

#### Exercise 18: Retrieve url of the largest boxart

Let's try combining reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.

```js
function() {
	var boxarts = [
			{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		];

	// You should return an array containing only the largest box art. Remember that reduce always
	// returns an array with one item.
	return boxarts.
	  reduce(function(acc,curr) {
		if (acc.width * acc.height > curr.width * curr.height) {
		  return acc;
		}
		else {
		  return curr;
		}
	  }).
	  map(function(boxart) {
		return boxart.url;
	  });
}
```

#### Exercise 19: Reducing with an initial value

Sometimes when we reduce an array, we want the reduced value to be a different type than the items stored in the array. Let's say we have an array of videos and we want to reduce them to a single map where the key is the video id and the value is the video's title.

```js
function() {
	var videos = [
		{
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"id": 675465,
			"title": "Fracture"
		},
		{
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"id": 654356453,
			"title": "Bad Boys"
		}
	];

	// Expecting this output...
	// [
	//     {
	//         "65432445": "The Chamber",
	//         "675465": "Fracture",
	//         "70111470": "Die Hard",
	//         "654356453": "Bad Boys"
	//     }
	// ]
	return videos.
		reduce(function(accumulatedMap, video) {

			// Object.create() makes a fast copy of the accumulatedMap by
			// creating a new object and setting the accumulatedMap to be the
			// new object's prototype.
			// Initially the new object is empty and has no members of its own,
			// except a pointer to the object on which it was based. If an
			// attempt to find a member on the new object fails, the new object
			// silently attempts to find the member on its prototype. This
			// process continues recursively, with each object checking its
			// prototype until the member is found or we reach the first object
			// we created.
			// If we set a member value on the new object, it is stored
			// directly on that object, leaving the prototype unchanged.
			// Object.create() is perfect for functional programming because it
			// makes creating a new object with a different member value almost
			// as cheap as changing the member on the original object!

			var copyOfAccumulatedMap = Object.create(accumulatedMap);

			copyOfAccumulatedMap[video.id] = video.title;

			return copyOfAccumulatedMap;
		},
		// Use an empty map as the initial value instead of the first item in
		// the list.
		{});
}
```

#### Exercise 20: Retrieve the id, title, and smallest box art url for every video.

This is a variation of the problem we solved earlier, where we retrieved the url of the boxart with a width of 150px. This time we'll use reduce() instead of filter() to retrieve the smallest box art in the boxarts array.

```js
function() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id:432534, time:65876586 }]
				}
			]
		},
		{
			name: "Thrillers",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
						{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id:432534, time:65876586 }]
				}
			]
		}
	];


	// Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
	// [
	//     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	//     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	//     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
	//     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists.concatMap(function(movieList) {
	  return movieList.videos.concatMap(function(video) {
	    return video.boxarts.
		  reduce(function(acc,curr) {
			if (acc.width * acc.height < curr.width * curr.height) {
			  return acc;
			}
			else {
			  return curr;
			}
		  }).
		  map(function(boxart) {
			return {id: video.id, title: video.title, boxart: boxart.url};
		  });
	  });
	});

}
```

## Zipping Arrays

Sometimes we need to combine two arrays by progressively taking an item from each and combining the pair. If you visualize a zipper, where each side is an array, and each tooth is an item, you'll have a good idea of how the zip operation works.


#### Exercise 21: Combine videos and bookmarks by index

Use a for loop to traverse the videos and bookmarks array at the same time. For each video and bookmark pair, create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.

```js
function() {
	var videos = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			}
		],
		bookmarks = [
			{id: 470, time: 23432},
			{id: 453, time: 234324},
			{id: 445, time: 987834}
		],
	counter,
	videoIdAndBookmarkIdPairs = [];

	for(var counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
	  videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
	}

	return videoIdAndBookmarkIdPairs;
}

```

#### Exercise 22: Implement zip

Let's add a static zip() function to the Array type. The zip function accepts a combiner function, traverses each array at the same time, and calls the combiner function on the current item on the left-hand-side and right-hand-side. The zip function requires an item from each array in order to call the combiner function, therefore the array returned by zip will only be as large as the smallest input array.

```js
// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		results.push(combinerFunction(left[counter],right[counter]));
	}

	return results;
};
```

#### Exercise 23: Combine videos and bookmarks by index

Let's repeatexercise  21, but this time lets use your new zip() function. For each video and bookmark pair, create a {videoId, bookmarkId} pair.

```js
function() {
	var videos = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			}
		],
		bookmarks = [
			{id: 470, time: 23432},
			{id: 453, time: 234324},
			{id: 445, time: 987834}
		];

	return Array.
		zip(
		  videos,
		  bookmarks,
		  function(video, bookmark) {
			return {videoId: video.id, bookmarkId: bookmark.id};
		  });
}

```

#### Exercise 24: Retrieve each video's id, title, middle interesting moment time, and smallest box art url.

This is a variation of the problem we solved earlier. This time each video has an interesting moments collection, each representing a time during which a screenshot is interesting or representative of the title as a whole. Notice that both the boxarts and interestingMoments arrays are located at the same depth in the tree. Retrieve the time of the middle interesting moment and the smallest box art url simultaneously with zip(). Return an {id, title, time, url} object for each video.

```js
function() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:213432 },
							{ type: "Start", time: 64534 },
							{ type: "Middle", time: 323133}
						]
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:54654754 },
							{ type: "Start", time: 43524243 },
							{ type: "Middle", time: 6575665}
						]
					}
				]
			},
			{
				name: "Instant Queue",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:132423 },
							{ type: "Start", time: 54637425 },
							{ type: "Middle", time: 3452343}
						]
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:45632456 },
							{ type: "Start", time: 234534 },
							{ type: "Middle", time: 3453434}
						]
					}
				]
			}
		];

	//------------ COMPLETE THIS EXPRESSION --------------
	return movieLists.concatMap(function(movieList) {
		return movieList.videos.concatMap(function(video) {
			return Array.zip(
				video.boxarts.reduce(function(acc,curr) {
					if (acc.width * acc.height < curr.width * curr.height) {
				  	  	return acc;
					}
					else {
				  		return curr;
					}
			  	}),
				video.interestingMoments.filter(function(interestingMoment) {
					return interestingMoment.type === "Middle";
				}),
			  	function(boxart, interestingMoment) {
					return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
			  	});
		});
	});
}
```

## Powerful Queries

Now that we've learned the five operators let's flex our muscles and write some powerful queries.

#### Exercise 25: Converting from Arrays to Trees

When information is organized in a tree like a JSON expression, relationships point from parent to child. In relational systems like databases, relationships point from children to their parents. Both ways of organizing information are equivalent, and depending on the circumstances, we might get data organized in one way or another. It may surprise you to learn that you can use the 5 query functions you already know to easily convert between these representations. In other words, not only can you query arrays from trees, you can query trees from arrays.

We have 2 arrays each containing lists, and videos respectively. Each video has a listId field indicating its parent list. We want to build an array of list objects, each with a name and a videos array. The videos array will contain the video's id and title. In other words we want to build the following structure:

```js
[
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"id": 675465,
				"title": "Fracture"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"id": 654356453,
				"title": "Bad Boys"
			}
		]
	}
]
```

Note: please make sure when creating objects (both lists and videos) that you add properties in the same order as above. This doesn't impact the correctness of your code, but the verifier expects properties to be created in this order.

```js
function() {
	var lists = [
			{
				"id": 5434364,
				"name": "New Releases"
			},
			{
				"id": 65456475,
				name: "Thrillers"
			}
		],
		videos = [
			{
				"listId": 5434364,
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"listId": 5434364,
				"id": 675465,
				"title": "Fracture"
			},
			{
				"listId": 65456475,
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"listId": 65456475,
				"id": 654356453,
				"title": "Bad Boys"
			}
		];

	return lists.map(function(list) {
		return {
			name: list.name,
			videos:
				videos.
					filter(function(video) {
						return video.listId === list.id;
					}).
					map(function(video) {
						return {id: video.id, title: video.title};
					})
		};
	});
}
```

#### Exercise 26: Converting from Arrays to Deeper Trees

Let's try creating a deeper tree structure. This time we have 4 separate arrays each containing lists, videos, boxarts, and bookmarks respectively. Each object has a parent id, indicating its parent. We want to build an array of list objects, each with a name and a videos array. The videos array will contain the video's id, title, bookmark time, and smallest boxart url. In other words we want to build the following structure:

```js
[
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber",
				"time": 32432,
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
			},
			{
				"id": 675465,
				"title": "Fracture",
				"time": 3534543,
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard",
				"time": 645243,
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"time": 984934,
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
			}
		]
	}
]
```

Note: please make sure when creating objects (both lists and videos) that you add properties in the same order as above. This doesn't impact the correctness of your code, but the verifier expects properties to be created in this order.

```js
function() {
	var lists = [
			{
				"id": 5434364,
				"name": "New Releases"
			},
			{
				"id": 65456475,
				name: "Thrillers"
			}
		],
		videos = [
			{
				"listId": 5434364,
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"listId": 5434364,
				"id": 675465,
				"title": "Fracture"
			},
			{
				"listId": 65456475,
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"listId": 65456475,
				"id": 654356453,
				"title": "Bad Boys"
			}
		],
		boxarts = [
			{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
			{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
			{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
			{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
			{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
			{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
			{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
		],
		bookmarks = [
			{ videoId: 65432445, time: 32432 },
			{ videoId: 675465, time: 3534543 },
			{ videoId: 70111470, time: 645243 },
			{ videoId: 654356453, time: 984934 }
		];

	return lists.map(function(list) {
		return {
			name: list.name,
			videos:
				videos.
					filter(function(video) {
						return video.listId === list.id;
					}).
					concatMap(function(video) {
						return Array.zip(
							bookmarks.filter(function(bookmark) {
								return bookmark.videoId === video.id;
							}),
							boxarts.filter(function(boxart) {
								return boxart.videoId === video.id;
							}).
							reduce(function(acc,curr) {
								return acc.width * acc.height < curr.width * curr.height ? acc : curr;
							}),
							function(bookmark, boxart) {
								return { id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url };
							});
				})
		};
	});
```

#### Exercise 27: Stock Ticker

Let's try an easier question. Let's say we have a collection of all of the prices for NASDAQ stocks over time. Every time the price of a stock changes on the NASDAQ ticker an entry is added to this collection. Let's say that ten days ago you bought shares in Microsoft, and now you want to print all of the MSFT share prices since then. Filter the collection for MSFT trades starting from ten days ago and print each price record (including the time stamp) using the print() function.

Note: this is not a trick question. It's as easy as it seems.

```js
// The pricesNASDAQ collection looks something like this...
var pricesNASDAQ = [
	// ... from the NASDAQ's opening day
	{name: "ANGI", price: 31.22, timeStamp: new Date(2011,11,15) },
	{name: "MSFT", price: 32.32, timeStamp: new Date(2011,11,15) },
	{name: "GOOG", price: 150.43, timeStamp: new Date(2011,11,15)},
	{name: "ANGI", price: 28.44, timeStamp: new Date(2011,11,16)},
	{name: "GOOG", price: 199.33, timeStamp: new Date(2011,11,16)},
	// ...and up to the present.
];

```

```js
function(pricesNASDAQ, printRecord) {
	var microsoftPrices,
		now = new Date(),
		tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);

	// use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
	microsoftPrices =
		pricesNASDAQ.
			filter(function(priceRecord) {
			  return priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo;
			});

	// Print the trades to the output console
	microsoftPrices.
		forEach(function(priceRecord) {
			printRecord(priceRecord);
		});
}

```

## Working with Observables

Microsoft's open-source Reactive Extensions library introduces a new collection type to Javascript: Observable. An Observable is a lot like an Event. Like an Event, an Observable is a sequence of values that a data producer pushes to the consumer. However unlike an Event, an Observable can signal to a listener that it has completed, and will send no more data.

Observables can send data to consumers asynchronously. Unlike Array, there's no Javascript literal syntax for creating Observable sequences. However we can build a helper method that visually describes the contents of sequences as well as the times between each item's arrival. The seq function creates an Observable from an array of items, and adds a delay for every empty item encountered. Every ,,, adds up to a second.

```js
// An array of numbers 1,2,3
var numbers123Array =      [1,2,3];

// A sequence that returns 1, and then after 4 seconds returns 2,
// and then after another second returns 3, and then completes.
var numbers123Observable = seq([1,,,,,,,,,,,,2,,,3]);

// Like Arrays, Observables can contain any object - even Arrays.
var observableOfArrays = seq([ [1,2,3],,,,,,[4,5,6],,,,,,,,,,,[1,2] ]);
```

Observables are a sequence of values, delivered one after the other. Therefore it's possible that an Observable can go on sending data to a listener forever just like a mouse move event. To create a sequence that doesn't complete, you can add a trailing ,,, to the end of the items passed to seq().

```js
// The trailing ,,, ensures that the sequence will not complete.
var mouseMovesObservable =
	seq([ {x: 23, y: 55},,,,,,,{x: 44, y: 99},,,{x:55,y:99},,,{x: 54, y:543},,, ]);

// No trailing ,,, indicates that sequence will complete.
var numbers123Observable = seq([1,,,2,,,3]);
```

Querying Arrays only gives us a snapshot. By contrast, querying Observables allows us to create data sets that react and update as the system changes over time. This enables a very powerful type of programming known as reactive programming.

Let's start off by contrasting Observable with Events...


#### Exercise 28: Subscribing to an event

You're probably used to thinking about events as a list of handlers stored in an object. In this example, we subscribe to a button click event and then unsubscribe the first time the button is clicked.

```js

```

#### Exercise 29: Traversing an Event

Subscribing to an Event and traversing an Array are fundamentally the same operation. The only difference is that Array traversal is synchronous and completes, and Event traversal is asynchronous and never completes. If we convert a button click Event to an Observable object, we can use forEach() to traverse the Event.

```js

```

#### Exercise 30: Completing Sequences with take()

Have you ever wished that you could listen for the next occurrence of an event and then immediately unsubscribe? For example, developers will often attach an event handler to window.onload, expecting that their event handler will only be called once.

In instances such as this, it's good practice to unsubscribe from the event after it's fired. Failing to unsubscribe is a memory leak. Depending on the circumstances, memory leaks can seriously destablize your application and can be very difficult to track down. Unfortunately unsubscribing from an event after one occurrence can be cumbersome:

Wouldn't it be nice if there was an easier way to code this? That's why Observable has a take() function. The take() function works like this...

An Observable based on an Event will never complete on its own. The take() function creates a new sequence that completes after a discrete number of items arrive. This is important, because unlike an Event, when an Observable sequence completes it unsubscribes all of its listeners. That means that if we use take() to complete our Event sequence, we don't need to unsubscribe!

Let's repeat the previous exercise, in which we listened for a single button click and then unsubscribed. This time let's use the take() function to complete the sequence after the button is clicked.

```js

```

#### Exercise 31: Completing sequences with takeUntil()

Have you ever wanted to unsubscribe from one Event when another Event fires? Observable's takeUntil() function is a convenient way of completing a sequence when another Event occurs. Here's how takeUntil() works:

Earlier we (unknowningly) built a dynamic Microsoft price stock ticker using Observable. The problem with that stock ticker was that it kept going on forever. If left unchecked, all the entries in the log could use up all of the memory on the page. In theexercise  below, filter the Observable sequence of NASDAQ prices for MSFT stock prices, use the fromEvent() function to create an Observable .

Stop <-Press this button to complete the sequence of microsoft stock prices.

```js

```

#### Exercise 32: Creating a mouse drag event

Remember theexercise  we solved earlier? The one in which we retrieved all the movies with a rating of 5.0 from an array of movie lists? If we were to describe the solution in pseudocode it might read something like this...

"For every movie list, retrieve only those videos with a rating of 5.0"

Now we're going to create a mouseDrag event for a DOM object. If we were to describe this problem as pseudocode it might read something like this...

"For every movie list mouse down event on the sprite, retrieve only those videos with a rating of 5.0 mouse move events that occur before the next mouse up event."

```js

```

#### Exercise 33: Improving our mouse drag event

Our mouse drag event is a little too simple. Notice that when we drag around the sprite, it always positions itself at the top-left corner of the mouse. Ideally we'd like our drag event to offset its coordinates, based on where the mouse was when the mouse down event occurred. This will make our mouse drag more closely resemble moving a real object with our finger.

Let's see if you can adjust the coordinates in the mouse drag event, based on the mousedown location on the sprite. The mouse events are sequences, and they look something like this:

Each item in the mouse event sequences contains an x, y value that represents that absolute location of the mouse event on the page. The moveSprite() function uses these coordinates to position the sprite. Each item in the sequence also contains a pair of offsetX and offsetY properties that indicate the position of the mouse event relative to the event target.

```js

```

#### Exercise 34: HTTP requests

Events aren't the only source of asynchronous data in an application. There's also HTTP requests. Most of the time HTTP requests are exposed via a callback-based API. To receive data asynchronously from a callback-based API, the client typically passes a success and error handler to the function. When the asynchronous operation completes, the appropriate handler is called with the data. In thisexercise  we'll use jQuery's getJSON api to asynchronously retrieve data.

```js

```

#### Exercise 35: Sequencing HTTP requests with callbacks

Let's say that we're writing the startup flow for a web application. On startup, the application must perform the following operations:

Download the URL prefix to use for all subsequent AJAX calls. This URL prefix will vary based on what AB test the user is enrolled in.
Use the url prefix to do the following actions in parallel:

- Retrieve a movie list array
- Retrieve configuration information and...
- make a follow up call for an instant queue list if the config property "showInstantQueue" is truthy

If an instant queue list was retrieved, append it to the end of movie list.
If all operations were successful then display the movie lists after the window loads. Otherwise inform the user that there was a connectivity error.

```js

```

#### Exercise 36: Traversing callback-based Asynchronous APIs

If a callback API were a sequence, what kind of sequence would it be? We've seen that UI Event sequences can contain anywhere from 0 to infinite items, but will never complete on their own.

In contrast, if we were to convert output from the $.getJSON() function we've been using into a sequence it would always return a sequence that completes after sending a single item.

It might seem strange to create sequences that contain only one object. We could introduce an Observable-like type specifically for scalar values, but that would make callback-based APIs more difficult to query with Events. Thankfully, an Observable sequence is flexible enough to model both.

So how do we convert a callback API into an Observable sequence? Unfortunately, because callback-based APIs vary so much in their interfaces, we can't create a conversion function like we did with fromEvent(). However there is a more flexible function we can use to build Observable sequences...

Observable.create() is powerful enough to convert any asynchronous API into an Observable. Observable.create() relies on the fact that all asynchronous APIs have the following semantics:

- The client needs to be able to receive data.
- The client needs to be able to receive error information.
- The client needs to be able to be alerted that the operation is complete.
- The client needs to be able to indicate that they're no longer interested in the result of the operation.

In the following example, we'll use the Observable.create() function to create an Observable that issues a request to getJSON when it's traversed.

```js

```


#### Exercise 37: Sequencing HTTP requests with Observable

Let's use the getJSON function that returns Observables, and the Observable.fromEvent() to complete theexercise  we completed earlier.

```js

```

#### Exercise 38: Throttle Input

When dealing with user input, there will be times when the user's input is too noisy, and will potentially clog your servers with extraneous requests. We want the ability to throttle the users's input so that if they interacting for one second, then we will get the user input. Let's say for example, the user clicks a button once too many times upon saving and we only want to fire after they've stopped for a second.

```js

```

#### Exercise 39: Autocomplete Box

One of the most common problems in web development is the autocomplete box. This seems like it should be an easy problem, but is actually quite challenging. For example, how do we throttle the input? How do we make sure we're not getting out of order requests coming back? For example if I type "react" then type "reactive" I want "reactive" to be my result, regardless of which actually returned first from the service.

In the example below, you will be receiving a sequence of key presses, a textbox, and a function when called returns an array of search results.

```js

```

#### Exercise 40: Distinct Until Changed Input

You'll notice in the previousexercise  that if you pressed your arrow keys while inside the textbox, the query will still fire, regardless of whether the text actually changed or not. How do we prevent that? The distinctUntilChanged filters out successive repetitive values.

```js

```

#### Exercise 41: Autocomplete Box Part 2: Electric Boogaloo

In the previous version of the autocomplete box, there were two bugs

Multiple successive searches are made for the same string
Attempts are made to retrieve results for an empty string.
The example below is the same as above, but this time, fix the bugs!

```js

```

#### Exercise 42: Retrying after errors

You'll notice in the previousexercise  that if you pressed your arrow keys while inside the textbox, the query will still fire, regardless of whether the text actually changed or not. How do we prevent that? The distinctUntilChanged filters out successive repetitive values.

```js

```
