<button class="start" onclick={() => console.log('START')}>💃start</button>

<style>
	.start {
		font-weight: bolder;
		font-size: 0.9rem;
		letter-spacing: 1.2px;
		height: 60px;
		width: 100px;
		border-radius: 0 100px 100px 0;
		background:
		linear-gradient(
			0deg,
			rgba(59, 136, 58, 1) 28.75%,
			rgba(75, 177, 76, 1) 43.5%,
			rgba(73, 176, 73, 1) 60%,
			rgba(103, 172, 103, 1) 65.5%,
			rgba(140, 192, 142, 1) 75%
		) no-repeat border-box;
		border: 1px solid #2e7d32;
		text-align: center;
		line-height: 40px;
		color: white;
		font-weight: bold;
		align-self: flex-start;
		top: -15px;
		position: relative;
		display: block;
		text-shadow: 2px 2px 5px black;
		padding: 1px 4px 1px 0px;
	}
	.start:active {
		background:
		linear-gradient(
			0deg,
			rgba(50, 125, 50, 1) 28.75%,
			rgba(70, 130, 70, 1) 43.5%,
			rgba(70, 140, 70, 1) 60%,
			rgba(80, 150, 80, 1) 65.5%,
			rgba(100, 180, 100, 1) 75%
		) no-repeat border-box;
		padding-left: -5px;
	}
	.start:hover {
		filter: brightness(1.1);
	}
</style>
