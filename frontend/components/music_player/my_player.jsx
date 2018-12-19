import React from "react";

class MyPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.audio = new Audio(props.url);
		this.audio.addEventListener("ended", props.onEnded);
		this.audio.addEventListener("loadeddata", props.onLoaded);
		this.audio.addEventListener("timeupdate", () => {
			const playedSeconds = this.audio.currentTime;
			props.onProgress({
				playedSeconds
			});
		});
		console.log(props);
		props.playerRef(this.audio);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.url !== this.props.url) {
			this.audio.src = nextProps.url;
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
