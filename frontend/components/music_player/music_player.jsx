import React from "react";
// import ReactPlayer from "react-player";
import MyPlayer from "./my_player";
import PlayingSongInfoContainer from "./playing_song_info_container";

class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		let songDuration;

		this.state = {
			volume: 0.6,
			isMuted: false,
			progress: 0,
			isSeeking: false,
			isSongLoaded: false
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
			const newProgress = (event.target.value * this.props.currentSong.duration) / 100;
			this.player.currentTime = newProgress;
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
		const { isMuted, volume, progress, isSeeking, isSongLoaded } = this.state;

		// const playIcon = <i className="fa fa-play-circle" />;
		const playIcon = <div className="icon play" />;
		const pauseIcon = <div className="icon pause" />;
		// const pauseIcon = <i classNameName="fa fa-pause-circle" />;
		const prevIcon = <div className="icon prev" />;
		const nextIcon = <div className="icon next" />;
		const shuffleIcon = <div className="icon shuffle" />;
		// const loopIcon = <i classNameName="fa fa-exchange" />;
		const loopIcon = <div className="icon loop" />;
		// const noloopIcon = <i className="fa fa-exchange selected" />;
		const volumeUp = <i className="fa fa-volume-up" />;
		const volumeDown = <i className="fa fa-volume-down" />;
		const volumeOff = <i className="fa fa-volume-off" />;

		const volumeIcon =
			volume < 0.01 ? volumeOff : volume < 0.6 ? volumeDown : volumeUp;

		// Really fine tuning on the overlay div
		let seekStyle =
			progress < 0.001
				? { width: "0" }
				: {
					width: `${progress * 100 + 0.5 - progress * 0.5}%`
				};

		// let volumeStyle =
		//   volume < 0.001
		//     ? { width: '0' }
		//     : {
		//       width: `${volume * 100 + 0.5 - volume * 0.5}%`
		//     };

		return (
			<div className="music-player-wrapper">
				<div className="music-player">
					<PlayingSongInfoContainer />
					{/* <div className="song-info">
						{currentSong ? currentSong.title : ""}
					</div> */}
					<div className="play-bar col-5-11">
						<div className="play-button">
							<button>{shuffleIcon}</button>

							<button onClick={this.props.onPrevSong}>{prevIcon}</button>

							<button
								className="play-pause"
								onClick={this.props.onTogglePlaying}
							>
								{isPlaying ? pauseIcon : playIcon}
							</button>

							<button onClick={this.props.onNextSong}>{nextIcon}</button>

							<button className="loop-button">{loopIcon}</button>
						</div>
						{/* progress bar BELOW */}
						<div className="progress-bar">
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

							<div className="progress-bar-wrapper">
								<div className="progress-bar-with-duration">
									{/* <Duration seconds={duration * played} /> */}
									<div className="overlay-wrapper">
										<div className="played" style={seekStyle} />
										{/* <div className="played" /> */}
										<div className="player-underlay" />
										<div className="seek-slider-wrapper">
											<input
												disabled={!isSongLoaded}
												className="seek-slider"
												type="range"
												min={0}
												max={100}
												value={isSongLoaded ? (progress / currentSong.duration) * 100 : 0}
												onChange={this.onProgressSliderChange()}
												onMouseDown={this.onSeekBegin()}
												onMouseUp={this.onSeekEnd()}
											/>
										</div>
									</div>

									{/* <Duration seconds={duration} /> */}
								</div>
							</div>
						</div>
					</div>

					{/* volume bar BELOW */}
					<div className="volume-bar col-3-11 ">
						{/* <button className="mute" onClick={this.toggleMuted}>
            {volumeIcon}
          </button> */}
						<button className="mute" onClick={this.toggleIsMuted()}>
							{isMuted ? volumeOff : volumeUp}
						</button>
						<div className="volume-bar-with-duration">
							<div className="overlay-wrapper">
								<div className="played" />
								{/* <div className="played" style={volumeStyle} /> */}
								<div className="player-underlay" />
								<div className="seek-slider-wrapper">
									<input
										className="Play-button"
										type="range"
										min={0}
										max={100}
										value={isMuted ? 0 : volume * 100}
										onChange={this.onVolumeSliderChange()}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
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

// import React from "react";
// // import ReactPlayer from "react-player";
// import MyPlayer from "./my_player";

// class MusicPlayer extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		let songDuration;
// 		this.props.currentSong
// 			? (songDuration = this.props.currentSong.duration)
// 			: (songDuration = undefined);
// 		this.state = {
// 			volume: 0.6,
// 			isMuted: false,
// 			duration: songDuration,
// 			progress: 0,
// 			isSeeking: false
// 		};
// 	}

// 	onDuration() {
// 		return value => {
// 			this.setState({
// 				duration: value
// 			});
// 		};
// 	}

// 	onLoaded() {
// 		return () => {
// 			this.setState({
// 				isSongLoaded: true
// 			});
// 		};
// 	}

// 	onProgress() {
// 		return value => {
// 			this.setState({
// 				progress: value.playedSeconds
// 			});
// 		};
// 	}

// 	onProgressSliderChange() {
// 		return event => {
// 			const newProgress = (event.target.value * this.state.duration) / 100;
// 			this.player.seekTo(newProgress);
// 			this.setState({
// 				progress: newProgress
// 			});
// 		};
// 	}

// 	onVolumeSliderChange() {
// 		return event => {
// 			this.setState({
// 				volume: event.target.value / 100,
// 				isMuted: false
// 			});
// 		};
// 	}

// 	toggleIsMuted() {
// 		return () => {
// 			const { isMuted } = this.state;
// 			this.setState({
// 				isMuted: !isMuted
// 			});
// 		};
// 	}

// 	ref(player) {
// 		this.player = player;
// 	}

// 	onSeekBegin() {
// 		return () => {
// 			this.setState({
// 				isSeeking: true
// 			});
// 		};
// 	}

// 	onSeekEnd() {
// 		return () => {
// 			this.setState({
// 				isSeeking: false
// 			});
// 		};
// 	}

// 	render() {
// 		const { currentSong, isPlaying } = this.props;
// 		const { isMuted, volume, duration, progress, isSeeking } = this.state;
// 		const isSongLoaded = duration !== undefined;

// 		return (
// 			<div className="music-player">
// 				<button className="Play-button" onClick={this.props.onTogglePlaying}>
// 					{isPlaying ? "PAUSE" : "PLAY"}
// 				</button>
// 				<button className="Play-button" onClick={this.toggleIsMuted()}>
// 					{isMuted ? "UNMUTE" : "MUTE"}
// 				</button>
// 				<button className="Play-button" onClick={this.props.onNextSong}>
// 					NEXT SONG
// 				</button>
// 				<button className="Play-button" onClick={this.props.onPrevSong}>
// 					PREV SONG
// 				</button>
// 				<input
// 					className="Play-button"
// 					type="range"
// 					min={0}
// 					max={100}
// 					value={isMuted ? 0 : volume * 100}
// 					onChange={this.onVolumeSliderChange()}
// 				/>
// 				<input
// 					disabled={!isSongLoaded}
// 					className="Play-button"
// 					type="range"
// 					min={0}
// 					max={100}
// 					value={isSongLoaded ? (progress / duration) * 100 : 0}
// 					onChange={this.onProgressSliderChange()}
// 					onMouseDown={this.onSeekBegin()}
// 					onMouseUp={this.onSeekEnd()}
// 				/>
// 				{!currentSong || (
// 					<MyPlayer
// 						url={currentSong.songUrl}
// 						playerRef={this.ref.bind(this)}
// 						playing={isPlaying}
// 						muted={isMuted || isSeeking}
// 						volume={volume}
// 						onEnded={this.props.onNextSong}
// 						onLoaded={this.onLoaded()}
// 						onProgress={this.onProgress()}
// 					/>
// 				)}
// 			</div>
// 		);
// 	}
// }

// export default MusicPlayer;

// // {
// // !currentSong || (
// // 	<ReactPlayer
// // 		url={currentSong.songUrl}
// // 		ref={this.ref.bind(this)}
// // 		width="0px"
// // 		height="0px"
// // 		playing={isPlaying}
// // 		muted={isMuted || isSeeking}
// // 		volume={volume}
// // 		onEnded={this.props.onNextSong}
// // 		onDuration={this.onDuration()}
// // 		onProgress={this.onProgress()}
// // 		progress={progress}
// // 	/>
// // )
// // }
