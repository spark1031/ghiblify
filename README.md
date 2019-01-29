![splash](https://media.giphy.com/media/wKbSHPvnCIM2bYTdu3/source.gif)

# Ghiblify

---

[Visit Ghiblify Now](https://ghiblify.herokuapp.com)

Ghiblify is a Studio Ghibli-themed music streaming application (Spotify-clone) that allows users to: 1) create their own playlists 2) save their favorite Studio Ghibli soundtrack songs to their libraries by adding songs to their playlists, and 3) continuously play music while navigating the site.

This project was built over the course of 10 days, and more features will continue to be added.

---

## Technologies
*React* | *Redux* | *Ruby on Rails* | *PostgreSQL* | *Amazon S3* 

This project's backend was built using **Ruby on Rails** in combination with **PostgreSQL** and **Amazon S3**. The majority of images and music files were uploaded to S3 via Rails ActiveStorage to ensure high performance scalability as the number of files increased over time. On the frontend, **React/Redux** were used to create a single-page application with seamless navigation and dynamic updating.

---

## Features
Browse | Playlist Creation | Music Player | Search

### 1) Browse: 
*Users can browse song, album, artist, and playlist collections*

React was used to create a general Collection component to ensure uniform displays for all collection types. This strategy also cut out a significant number of lines of code by preventing the need to repeat code for each collection type. 

```javascript
class Collection extends React.Compnent {
  render() {
    let { title, collectionItemInfos, songId } = this.props;
    let collectionTitle;
    if(title) {
      collectionTitle = <div className="title">{title}</div>;
    } else {
      collectionTitle = null;
    }
    let items = collectionItemInfos.map((itemInfo, i) => (
      <CollectionItem key={i} {...itemInfo} />
    ));
    return (
      <div className="collection">
        {collectionTitle}
        <div className="collection-items-wrapper">
          <div className="item-grid">{items}</div>
        </div>
      </div>
    );
  }
}
```

### 2) Playlist Creation: 
*Users can create and delete their own playlists, and can add/remove songs from their playlists*

Custom modal components were used to implement this feature. Based on user input, the appropriate AJAX request was sent to the Rails backend and upon closing the modal, the playlist immediately displayed any updates, such as adding/removing a song. 

![playlist-crud](https://s2.gifyu.com/images/ghiblifyplaylist.gif)

### 3) Music Player: 
*Users can play music continuously while navigating the site*

React was used to create the music player at the bottom of the application and Redux was used to store a music player slice of state to keep track of which songs were currently playing and which songs were queued to play next. The player controls were first implemented using a combination of HTML5 Audio Controls and custom event listeners and then subsequently integrated with the rest of the application.

```javascript
class MyPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(props.url);
    this.audio.addEventListener("ended", props.onEnded);
    this.audio.addEventListener("loadeddata", props.onLoaded);
    this.audio.addEventListener("timeupdate", () => {
      const playedSeconds = this.audio.currentTime;
      props.onProgress({
        playedSeconds: playedSeconds
      });
    });
    console.log(props);
    props.playerRef(this.audio);
    if (props.playing) {
      this.audio.autoplay = true;
    }
  }

  componentWillUnmount() {
    this.audio.pause();
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
```

### 4) Search:
*Users can search for specific songs, albums, artists, and playlists*

To create a dynamic searching feature, this project capitalized on React's re-rendering on state change functionality. Following a 0.5 second delay, the user input search query was updated and sent as part of the AJAX request. This meant the search results would change in real-time as the user typed their search query, creating the illusion of a dynamically updating search feature.

![search](https://media.giphy.com/media/37q3YXy7fq8nvapbMS/source.gif)

```javascript
handleChange(e) {
  clearTimeout(this.timer);
  this.setState({ query: e.target.value });
  this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
}

triggerChange() {
  const { query } = this.state;
  this.props
    .fetchSearchResults(query)
    .then(results =>
      query
        ? this.props.history.push(`/search/results/${query}`)
        : this.props.history.push(`/search`)
    );
}
```

---


---

## Future plans

Some features I would like to add in the future are

- the ability to edit playlist information
- a user show page (for other users) with more information (currently it only displays their username)
- the ability to add single songs to the queue
- a suggested/explore feature taking a user's preferences into account
