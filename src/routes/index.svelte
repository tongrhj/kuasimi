<script context="module">
	export function preload() {
		return this.fetch(`app.json`).then(r => r.json()).then(posts => {
			return { 
				posts
			};
		});
	}
</script>

<script>
	export let posts;

	const categoryPosts = (category) => posts.filter(p => p.category === category)
	const categories = [...new Set(posts.map(post => post.category))]
	const capitalize = (s) => {
		if (typeof s !== 'string') return ''
		return s.charAt(0).toUpperCase() + s.slice(1)
	}

	let badWordIndex = 0

	setInterval(() => {
		if (badWordIndex > 3) {
			badWordIndex = 0
		} else {
			badWordIndex += 1
		}
	}, 3000);

	const BAD_WORDS = ['marketing', 'data mining', 'spam', 'tracking', 'data selling']

	$: badWord = BAD_WORDS[badWordIndex]
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
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(90deg,rgb(255, 62,0),rgb(200, 15, 0));
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
	<h1>
		Opt-out of <br/><span class="primary">{badWord}</span>
	</h1>
	<h2> 
		“Easily” withdraw consent for marketing. Control which third-parties get your data
	</h2>
	<p>Starting with some 🇸🇬 Singapore apps and growing over time...</p>
</div>

{#each categories as category}
	<h3>{capitalize(category)}</h3>
	<ul>
		{#each categoryPosts(category) as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
			<li><a rel="prefetch" href="{post.slug}">{post.title}</a></li>
		{/each}
	</ul>
{/each}