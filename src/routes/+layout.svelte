<script lang="ts">
	import "../app.css";
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { ModeWatcher } from "mode-watcher";
	import Navigation from "$lib/components/navigation/navigation.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
	injectSpeedInsights();
</script>

<ModeWatcher />
<Navigation user={data.user} />

<slot />
