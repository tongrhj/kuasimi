<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4rem;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5rem;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5rem 0;
	}

	.content :global(img) {
		max-width: 100%;
		margin-bottom: 0.5rem;
	}

	.primary { font-weight: bold; }
</style>

<svelte:head>
	<title>{post.title} - Opt-out of Data Mining - Kua Simi</title>
	<meta name="description" content="“Easily” opt-out of use of your personal data by {post.title}">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://kuasimi.com/">
	<meta property="og:title" content="Kuasimi.com - Opt-out of Data Mining">
	<meta property="og:description" content="“Easily” opt-out of use of your personal data for marketing by {post.title}">
	<meta property="og:image" content="https://kuasimi.com/share.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://kuasimi.com/">
	<meta property="twitter:title" content="Kuasimi.com - Opt-out of Data Mining">
	<meta property="twitter:description" content="“Easily” opt-out of use of your personal data for marketing by {post.title}">
	<meta property="og:image" content="https://kuasimi.com/share.png">
</svelte:head>

<h1 class="primary">{post.title}</h1>

<div class="content">
	{@html post.html}
</div>
