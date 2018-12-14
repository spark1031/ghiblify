class Api::AlbumsController < ApplicationController

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.creator_id = current_user.id
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlists = Playlist.all.includes(:songs, :artist)
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update_attributes(playlist_params)
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if current_user.playlists.include?(@playlist)
      @playlist.destroy!
      render 'api/playlists/show'
    else
      render json: ["User is unauthorized to delete this playlist."]
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name, :creator_id)
  end

end