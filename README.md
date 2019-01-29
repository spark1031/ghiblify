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

### Browse: 
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

### Playlist Creation: 
*Users can create and delete their own playlists, and can add/remove songs from their playlists*

Custom modal components were used to implement this feature. Based on user input, the appropriate AJAX request was sent to the Rails backend and upon closing the modal, the playlist immediately displayed any updates, such as adding/removing a song. 

### Music Player: 
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



### Search:
*Users can search for specific songs, albums, artists, and playlists*

---

### Search

Users can search for other songs, other users, artists, etc. and interact with the top results from the displayed search results.

This feature used React's rerendering on state change to immediately display the results as the user types. The input box the user types in updates the search results after a .3 second delay. This allows the ajax requests to be made after a short delay, so the calls are sent with the correct input and the results are rendered quicker.

```javascript
// onChange function
updateInput(e) {
  this.setState({render: false})

  let val = e.target.value

  if(this.timeout) clearTimeout(this.timeout);

  this.timeout = setTimeout(() => {
    this.setState({ render: true });
  }, 300);
  this.setState({ searchTerm: val });
}

// input element
<input autoFocus="autoFocus"
  type="text"
  value={this.state.searchTerm}
  onChange={this.updateInput}
  placeholder="Start typing..."></input>

// results element rendered in return, which rerenders its children on change of searchTerm
<SearchResults searchTerm={searchTerm} ></SearchResults>
```

![alt text](http://g.recordit.co/04xYCJAxV4.gif)

### Continuous Play

Songs continuously play in the bottom of the page. When a song is played, the other songs in the list are queued. If the queue is empty, the song will repeat if repeat is selected, or it will stop playing. This was achieved by having a slice of state for the music player, storing the current song and queue, which was updated by the individual song items and also the music player itself, so the currently playing song can be accessed in other components, allowing the currently playing song to be highlighted when displayed elsewhere.

![alt text](https://github.com/amanpriya-k/spookify/blob/master/play.png)

### User's Saves & Follows

Using polymorphic tables for Saves and Follows, the user's saved and followed songs, albums, artists, and playlists are displayed in their library. From any show page for those items, they can save or unsave them.

![alt text](https://github.com/amanpriya-k/spookify/blob/master/library-songs.png)

### Playlist CRUD

Users can create, add to/remove songs from, and delete playlists. Most of these actions were done using modals, passing necessary information to make the requests to the modal and on close, immediately updating the playlist's displayed songs.

![alt text](https://github.com/amanpriya-k/spookify/blob/master/create-playlist.png)
![alt text](http://g.recordit.co/SzcvyMMzG8.gif)

---

## Future plans

Some features I would like to add in the future are

- the ability to edit playlist information
- a user show page (for other users) with more information (currently it only displays their username)
- the ability to add single songs to the queue
- a suggested/explore feature taking a user's preferences into account
