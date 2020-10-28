<script lang="ts">
	export let segment: string;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		position: sticky;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	a.logo {
		display: flex;
		align-items: center;
	}

	a.logo img {
		margin-right: 1rem;
		width: 16px;
		height: 16px;
	}
</style>

<nav>
	<ul>
		<li><a class="logo" href="https://kuasimi.com"><img src="./favicon.png" alt="Logo of kuasimi.com" />kua simi</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' rel="preload" href="/about">about</a></li>
	</ul>
</nav>
