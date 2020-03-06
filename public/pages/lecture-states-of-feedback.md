# States of Feedback

<!-- Add illustration of 10 heuristics -->
<style>
	img, video, .big{
		margin: 0 auto;
		margin-top: 2rem;
		margin-bottom: 4rem;
	}

	img{
		display: block;
		max-width: 100%;
		max-height: 98vh;
		object-fit: contain;
		object-position: center;
		box-sizing: border-box;
		border: dotted 2px #8A2BE2;
		cursor: none;
	}

	video{
		display: block;
		width: 100%;
		height: 98vh;
		object-fit: contain;
		object-position: center;
		cursor: pointer;
	}

	img:active, video:active{
		filter: saturate(1000%) contrast(2000%) grayscale(100%);
	}

	.big{
		display: block;
		text-align: center;
		width: 50%;
		padding: 2rem;
		border: dotted 2px #8A2BE2;
	}

</style>


![10 user interface heuristic guidelines: see jakob nielsen](/files/lecture_assets/10-heuristics.jpg)

## heu·ris·tic
*adjective*
enabling a person to discover or learn something for themselves.

For us, an i/o interaction contains 5 distinct states that hopefully facilitate a heuristic interface.

<!-- Add illustration here -->

1. Show ready state
2. Begin input
3. Acknowledge received input
4. Show output
5. Error state

## 1. Showing Ready State
Before a user can begin an interaction they need to know that the computer is listening and that they will be acknowledged. Apple's Siri interface uses an audio cue to indicate it is ready.

<a class="big" target="_blank" href="https://www.youtube.com/watch?v=b1dzK23CFjc">Siri Sound Effect</a>

<video onclick="if(this.paused){ this.play()}else{this.pause()}" loop muted>
	<source src="/files/lecture_assets/state-1.mp4" type="video/mp4">
</video>

<a class="big" target="_blank" href="http://cleartones.net/">Cleartones</a>


## 2. Begin an input
While a user is speaking to their device, there should be some sort of indication that they are being listened to. For example, Siri provides a subtle animation.

<video onclick="if(this.paused){ this.play()}else{this.pause()}" loop muted>
	<source src="/files/lecture_assets/state-2-3-4.mp4" type="video/mp4">
</video>


<!-- Screenshot of both siri and form submission -->
## 3. Acknowledge received input
After the input has been completed there is an indication that it is being processed. Siri will display the text that it is processing on your screen to show you what it is responding too.


<video onclick="if(this.paused){ this.play()}else{this.pause()}" loop muted>
	<source src="/files/lecture_assets/state-2-3-4.mp4" type="video/mp4">
</video>

<!-- Did you CAPTAIN Jack Sparrow meme -->
<!-- Siri Screenshot -->
## 4. Show output
Outputs can exist in many forms, Siri will both dictate part of it's response and show additional options on the screen.


![(meme) google search: jack sparrow, google suggestion: did you mean CAPTAIN JACK SPARROW?!](/files/lecture_assets/jack_sparrow_meme.png)

<video onclick="if(this.paused){ this.play()}else{this.pause()}" loop muted>
	<source src="/files/lecture_assets/state-2-3-4.mp4" type="video/mp4">
</video>

![state four: showing output of apple&rsquo;s siri](/files/lecture_assets/state4.jpeg)

## 5. Error state
Simply put, error states should indicate to a user that their interaction cannot be completed. However, in speech based interfaces, there is the possibility of the error state to be non-intrusive to the interaction. Siri will in some instances opt to google what you have said if it doesn't understand or cannot perform your requested command.

<!-- Siri handling, google and no response  -->

![state five: showing suggestions for how to interact with apple&rsquo;s siri](/files/lecture_assets/state-5-error_state-providing_options.jpeg)

![state five: showing output of google results when  apple&rsquo;s siri can&rsquo;t provide a proper response to query](/files/lecture_assets/state-5-error_state-googling_and_showing-results.jpg)

![shows error handling of Mac&rsquo;s Terminal for cd into a nonexistent](/files/lecture_assets/terminal.jpeg)


