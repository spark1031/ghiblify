class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all.includes(:songs, :albums)
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end
  
  
end