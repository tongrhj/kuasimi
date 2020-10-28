<script context="module" lang="ts">
	import type { Preload } from "@sapper/common";

	export const preload = async function(this, page, session) {
		const { user } = session;

		if (!user) {
			return this.redirect(302, 'dbs'); // TypeScript will know the type of `this` now
		}

		return { user };
	}
</script>