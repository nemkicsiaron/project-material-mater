<button class="start" onclick={() => console.log('START')}>
	<em>
		💃start
	</em>
</button>

<style>
	.start {
		font-family: 'MS Sans Serif', Arial, Helvetica, sans-serif;
		font-size: 1.15rem;
		letter-spacing: 1.2px;
		height: 60px;
		width: 100px;
		border-radius: 0 100px 100px 0;
		background: linear-gradient(
				0deg,
				rgba(59, 136, 58, 1) 28.75%,
				rgba(75, 177, 76, 1) 43.5%,
				rgba(73, 176, 73, 1) 60%,
				rgba(103, 172, 103, 1) 65.5%,
				rgba(140, 192, 142, 1) 75%
			)
			no-repeat border-box;
		border: none;
		text-align: center;
		line-height: 40px;
		color: white;
		font-weight: bold;
		align-self: flex-start;
		top: -15px;
		position: relative;
		display: block;
		text-shadow: 2px 2px 5px black;
		padding: 2px 2px 2px 0px;
		margin-right: 10px;

		&:not(:disabled) {
			&:active,
			&.active {
				box-shadow: none;
				background: linear-gradient(
						0deg,
						rgba(50, 125, 50, 1) 28.75%,
						rgba(70, 130, 70, 1) 43.5%,
						rgba(70, 140, 70, 1) 60%,
						rgba(80, 150, 80, 1) 65.5%,
						rgba(100, 180, 100, 1) 75%
					)
					no-repeat border-box;
				padding-left: -5px;
				border: none;
			}
			&:hover {
				box-shadow: none;
				filter: brightness(1.1);
			}
		}
		&:focus,
		&.focused {
			box-shadow: none;
			outline: none;
		}
	}
</style>
