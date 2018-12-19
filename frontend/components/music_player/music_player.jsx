import React from "react";
// import ReactPlayer from "react-player";
import MyPlayer from "./my_player";

class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			volume: 0.6,
			isMuted: false,
			duration: undefined, //song's actual duration
			progress: 0,
			isSeeking: false
		};
	}

	onDuration() {
		return value => {
			this.setState({
				duration: value
			});
		};
	}

	onLoaded() {
		return () => {
			this.setState({
				isSongLoaded: true
			});
		};
	}

	onProgress() {
		return value => {
			this.setState({
				progress: value.playedSeconds
			});
		};
	}

	onProgressSliderChange() {
		return event => {
			const newProgress = (event.target.value * this.state.duration) / 100;
			this.player.seekTo(newProgress);
			this.setState({
				progress: newProgress
			});
		};
	}

	onVolumeSliderChange() {
		return event => {
			this.setState({
				volume: event.target.value / 100,
				isMuted: false
			});
		};
	}

	toggleIsMuted() {
		return () => {
			const { isMuted } = this.state;
			this.setState({
				isMuted: !isMuted
			});
		};
	}

	ref(player) {
		this.player = player;
	}

	onSeekBegin() {
		return () => {
			this.setState({
				isSeeking: true
			});
		};
	}

	onSeekEnd() {
		return () => {
			this.setState({
				isSeeking: false
			});
		};
	}

	render() {
		const { currentSong, isPlaying } = this.props;
		const { isMuted, volume, duration, progress, isSeeking } = this.state;
		const isSongLoaded = duration !== undefined;

		return (
			<div className="music-player">
				<button className="Play-button" onClick={this.props.onTogglePlaying}>
					{isPlaying ? "PAUSE" : "PLAY"}
				</button>
				<button className="Play-button" onClick={this.toggleIsMuted()}>
					{isMuted ? "UNMUTE" : "MUTE"}
				</button>
				<button className="Play-button" onClick={this.props.onNextSong}>
					NEXT SONG
				</button>
				<button className="Play-button" onClick={this.props.onPrevSong}>
					PREV SONG
				</button>
				<input
					className="Play-button"
					type="range"
					min={0}
					max={100}
					value={isMuted ? 0 : volume * 100}
					onChange={this.onVolumeSliderChange()}
				/>
				<input
					disabled={!isSongLoaded}
					className="Play-button"
					type="range"
					min={0}
					max={100}
					value={isSongLoaded ? (progress / duration) * 100 : 0}
					onChange={this.onProgressSliderChange()}
					onMouseDown={this.onSeekBegin()}
					onMouseUp={this.onSeekEnd()}
				/>
				{!currentSong || (
					<MyPlayer
						url={currentSong.songUrl}
						playerRef={this.ref.bind(this)}
						playing={isPlaying}
						muted={isMuted || isSeeking}
						volume={volume}
						onEnded={this.props.onNextSong}
						onLoaded={this.onLoaded()}
						onProgress={this.onProgress()}
					/>
				)}
			</div>
		);
	}
}

export default MusicPlayer;

// {
// !currentSong || (
// 	<ReactPlayer
// 		url={currentSong.songUrl}
// 		ref={this.ref.bind(this)}
// 		width="0px"
// 		height="0px"
// 		playing={isPlaying}
// 		muted={isMuted || isSeeking}
// 		volume={volume}
// 		onEnded={this.props.onNextSong}
// 		onDuration={this.onDuration()}
// 		onProgress={this.onProgress()}
// 		progress={progress}
// 	/>
// )
// }
