# frozen_string_literal: true

module Api
  class SongsController < ApplicationController
    before_action :set_song, only: %i[show update destroy]

    # GET /api/songs or /api/songs.json
    def index
      @songs = Song.all
      render json: @songs
    end

    # GET /api/songs/1 or /api/songs/1.json
    def show
      render json: song
    end

    # POST /api/songs or /api/songs.json
    def create
      @song = Song.new(song_params)

      if @song.save
        render json: @song, status: :created
      else
        render json: @song.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/songs/1 or /api/songs/1.json
    def update
      respond_to do |format|
        if @song.update(song_params)
          format.json { render :show, status: :ok, location: @song }
        else
          format.json { render json: @song.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /api/songs/1 or /api/songs/1.json
    def destroy
      @song.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def song_params
      params.fetch(:song, {}).permit(:name, :lyric, :spotify_link)
    end
  end
end
