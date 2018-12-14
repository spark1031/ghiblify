class Api::PlaylistSongsController < ApplicationController

  #adding a song to a playlist
  def create
    @playlist_song = PlaylistSong.new(playlist_songs_params)
    if @playlist_song && @playlist_song.playlist.include?(@playlist_song.song)
      render json: ["Song already exists in playlist."]
    elsif current_user.playlists.include?(@playlist_song.playlist) && @playlist_song.save
      render 'api/playlist_songs/show'
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  #deleting a song from a playlist
  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    if current_user.playlists.include?(@playlist_song.playlist)
      @playlist_song.destroy!
      render 'api/playlist_songs/show'
    else
      render json: ["User is unauthorized to edit playlist."]
    end
  end

  private
  def playlist_songs_params
    params.require(:playlist_songs).permit(:song_id, :playlist_id)
  end
end

#dispatch an action to store selectedSong (in ui slice of state)
# if selectedSong !== null, then open "Add to Playlist" modal
# when you select playlist, dispatch action to POST 'api/playlist_songs
# when click x, exit out of "Add to Playlist" modal 