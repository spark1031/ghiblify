class Api::PlaylistsController < ApplicationController

  def create
    playlist_covers = [
      'https://s3.amazonaws.com/ghiblify-resources/Other/48365122_1820833841353979_6382637554398658560_n.jpg',
      "https://s3.amazonaws.com/ghiblify-resources/Other/pink_playlist_default.jpg",
      "https://s3.amazonaws.com/ghiblify-resources/Other/green_playlist_default.jpg",
      "https://s3.amazonaws.com/ghiblify-resources/Other/grey_playlist_default.jpg",
      "https://s3.amazonaws.com/ghiblify-resources/Other/red_playlist_default.jpg",
      "https://s3.amazonaws.com/ghiblify-resources/Other/black_playlist_default.png"
    ]
    index = rand(0...playlist_covers.length)
    cover_file = playlist_covers[index]
    @playlist = Playlist.new(playlist_params)
    @playlist.creator_id = current_user.id
    @playlist.cover_url.attach({io: EzDownload.open(cover_file), filename: "playlist.jpg"})
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlists = Playlist.all.includes(:songs, :artists)
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
      render json: @playlist.errors.full_messages, status: 422
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