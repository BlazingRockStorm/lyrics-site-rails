# frozen_string_literal: true

module Api
  class GenresController < ApplicationController
    before_action :set_genre, only: %i[show update destroy]
    PAGE_LIMIT = 10

    # GET /api/genres or /api/genres.json
    def index
      @genres = Genre.
                select('id, name').
                page(params[:page]).
                per(PAGE_LIMIT)
      render json: @genres
    end

    # GET /api/genres/1 or /api/genres/1.json
    def show
      render json: @genre
    end

    # POST /api/genres or /api/genres.json
    def create
      @genre = Genre.new(genre_params)

      if @genre.save
        render json: @genre, status: :created
      else
        render json: @genre.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/genres/1 or /api/genres/1.json
    def update
      if @genre.update(genre_params)
        render json: @genre, status: :ok
      else
        render json: @genre.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/genres/1 or /api/genres/1.json
    def destroy
      @genre.destroy
      render json: { status: 'SUCCESS', message: 'Deleted the genre', data: @genre }
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_genre
      @genre = Genre.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def genre_params
      params.fetch(:genre, {}).permit(:name)
    end
  end
end
