# frozen_string_literal: true

module Api
  class SongsController < ApplicationController
    before_action :set_song, only: %i[show update destroy]
    PAGE_LIMIT = 10

    # GET /api/songs or /api/songs.json
    def index
      @songs = Song.
               select('id, name, spotify_link').
               page(params[:page]).
               per(PAGE_LIMIT)
      render json: @songs
    end

    # GET /api/songs/1 or /api/songs/1.json
    def show
      render json: @song.to_json(include: :genre)
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
      if @song.update(song_params)
        render json: @song, status: :ok
      else
        render json: @song.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/songs/1 or /api/songs/1.json
    def destroy
      @song.destroy
      render json: { status: 'SUCCESS', message: 'Deleted the song', data: @song }
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def song_params
      params.fetch(:song, {}).permit(:name, :lyric, :spotify_link, :genre_id)
    end
  end
end
