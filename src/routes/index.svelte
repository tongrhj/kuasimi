<script context="module">
	export function preload() {
		return this.fetch(`app.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	h2 {
		font-weight: 1rem;
		font-weight: 400;
		color: #666666;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	p {
		margin: 1em auto;
	}

	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	.content {
		text-align: center;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}

		h2 {
			font-size: 1.25rem;
		}
	}
</style>

<svelte:head>
	<title>Kua Simi - Opt-out of Data Mining</title>
	<meta name="description" content="“Easily” opt-out of use of your personal data for marketing. Supports Singapore's most popular apps. No signup required!">
</svelte:head>

<div class="content">
	<h1>Opt-out of Data Mining</h1>
	<h2> 
		“Easily” withdraw consent for use of your personal data for marketing purposes.
	</h2>
	<p>Starting with Singapore's banks and growing over time...</p>
</div>

<h3>Banks</h3>
<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="app/{post.slug}">{post.title}</a></li>
	{/each}
</ul>