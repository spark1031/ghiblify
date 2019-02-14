import React from "react";

class MyPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.audio = new Audio(props.url);
		this.audio.addEventListener("ended", props.onEnded);

		//ensures the play button is disabled until song file is loaded
		this.audio.addEventListener("loadeddata", props.onLoaded);

		this.audio.addEventListener("timeupdate", () => {
			const playedSeconds = this.audio.currentTime;
			props.onProgress({
				playedSeconds: playedSeconds
			});
		});

		props.playerRef(this.audio);
		if (props.playing) {
			this.audio.autoplay = true;
		}
	}

	componentWillUnmount() {
		this.audio.pause();
	}

	//use componentWillReceiveProps so that when I press pause, the song does not just reload on it's own and start at 0:00
	componentWillReceiveProps(nextProps) {
		//if we're onto a new song then change our audio's src to this new song's url
		if (nextProps.url !== this.props.url) {
			this.audio.src = nextProps.url;

			//edge case: if i pause a song, then click next, the next song will load but won't start playing until I press play
			if (nextProps.playing) {
				this.audio.autoplay = true;
			}
		}
		if (nextProps.playing !== this.props.playing) {
			if (nextProps.playing) {
				this.audio.play();
			} else {
				this.audio.pause();
			}
		}
		this.audio.muted = nextProps.muted;
		this.audio.volume = nextProps.volume;
	}
	render() {
		return <div />;
	}
}

export default MyPlayer;
