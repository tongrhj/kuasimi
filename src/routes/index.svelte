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
		font-size: 1rem;
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

	.primary {
		color: rgb(255, 62,0);
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

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://kuasimi.com/">
	<meta property="og:title" content="Kuasimi.com - Opt-out of Data Mining">
	<meta property="og:description" content="“Easily” opt-out of use of your personal data for marketing. 🇸🇬 Singapore Edition">
	<meta property="og:image" content="https://kuasimi.com/share.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://kuasimi.com/">
	<meta property="twitter:title" content="Kuasimi.com - Opt-out of Data Mining">
	<meta property="twitter:description" content="“Easily” opt-out of use of your personal data for marketing. 🇸🇬 Singapore Edition">
	<meta property="og:image" content="https://kuasimi.com/share.png">
</svelte:head>

<div class="content">
	<h1>Opt-out of <span class="primary">Data Mining</span></h1>
	<h2> 
		“Easily” withdraw consent for use of your personal data for marketing purposes.
	</h2>
	<p>Starting with 🇸🇬 Singapore's banks and growing over time...</p>
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