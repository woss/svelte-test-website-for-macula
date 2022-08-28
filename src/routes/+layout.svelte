<script>
	import '../app.css';
</script>

<div class="image-background">
	<div class="navbar bg-base-100">
		<div class="navbar-start" />
		<div class="navbar-center gap-4">
			<a sveltekit:prefetch class="btn" href="/">index</a>
			<a sveltekit:prefetch class="btn" href="/config?name=yo">config</a>
			<a sveltekit:prefetch class="btn" href="/about">about</a>
			<a sveltekit:prefetch class="btn" href="/features">features</a>
			<a sveltekit:prefetch class="btn" href="/features/feature-a">feature-a</a>
			<a sveltekit:prefetch class="btn" href="/redirect">redirect</a>
		</div>
		<div class="navbar-end" />
	</div>
	<div class="hero h-screen">
		<div class="hero-content text-center">
			<div class="bg-base-200 p-40 rounded-3xl opacity-70">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.image-background {
		background-image: url('/beach-stars.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-attachment: fixed;
	}
</style>
