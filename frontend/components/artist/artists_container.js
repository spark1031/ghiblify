import {
  connect
} from 'react-redux';
import Collection from '../collection/collection';
import loader from '../hocs/loader';
import {
  fetchAllArtists
} from '../../actions/artist_actions';
// import {
//   hydratedArtistsSelector
// } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    artists: Object.values(state.entities.artists)
  };
};

//CAUSES ISSUES!! (probably with loader/fetching) wanted to do this to implement search filtering!
// const mapStateToProps = (state, ownProps) => {
//   let artists;
//   ownProps.artists ? artists = ownProps.artists : Object.values(state.entities.artists);
//   return {
//     artists
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    wrappedPropsLoader: () => dispatch(fetchAllArtists())
    // playSongs: (arrayOfSongObjects) => dispatch(playSongs(arrayOfSongObjects))
  };
};

const mergeProps = (connectedState, connectedDispatch) => {
  return {
    initialWrappedProps: {
      collectionItemInfos: connectedState.artists.map(convertArtistToCollectionItemInfo)
    },
    wrappedPropsLoader: () => connectedDispatch.wrappedPropsLoader()
  };
};

const convertArtistToCollectionItemInfo = (artist) => {
  return {
    circular: true,
    imageUrl: artist.photoUrl,
    title: artist.name,
    primaryTo: '/search'
    // primaryTo: `/browse/artists/${artist.id}`
  };
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(Collection));

// depending on ownProps.type,
// we want to get all albums OR albums we follow


//in library:
// wrappedPropsLoader: () => dispatch(fetchSavedAlbums())

//playSongs(arrayOfSongObjects) action creator that comes from music_player_actions; -> updates the current array of songs that are playing