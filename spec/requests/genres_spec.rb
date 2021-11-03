# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Genres', type: :request do
  describe 'GET /api/genres' do
    it 'can be access' do
      get api_genres_path
      expect(response).to have_http_status(:ok)
    end

    describe "Genres' names and their Spotify links" do
      let!(:genre) { FactoryBot.create(:genre) }

      before do
        get api_genres_path
      end

      it 'fully displayed' do
        expect(response.body).to include(genre.name)
      end
    end

    describe 'paginations' do
      let!(:genres) { FactoryBot.create_list(:genre, 4) }

      before do
        stub_const('Api::GenresController::PAGE_LIMIT', 3)
      end

      context 'Page 1' do
        before do
          get api_genres_path, params: { page: 1 }
        end

        it 'contains genre 1, genre 2 and genre 3' do
          expect(response).to have_http_status(:ok)
          expect(response.body).to include(genres[0].name, genres[1].name, genres[2].name)
          expect(response.body).not_to include(genres[3].name)
        end
      end

      context 'Page 2' do
        before do
          get api_genres_path, params: { page: 2 }
        end

        it 'contains genre 4' do
          expect(response).to have_http_status(:ok)
          expect(response.body).to include(genres[3].name)
          expect(response.body).not_to include(genres[0].name, genres[1].name, genres[2].name)
        end
      end

      context 'Page 3' do
        before do
          get api_genres_path, params: { page: 3 }
        end

        it 'contains no genre' do
          json_response = JSON.parse(response.body)

          expect(response).to have_http_status(:ok)
          expect(json_response.length).to eq(0)
        end
      end
    end
  end

  describe 'GET /api/genres/:id' do
    let!(:genre) { FactoryBot.create(:genre) }

    it "shows a genre's info" do
      get api_genre_path(id: genre.id)
      json = JSON.parse(response.body)
      expect(response).to have_http_status(:ok)
      expect(json['name']).to eq(genre.name)
    end
  end

  describe 'POST /api/genres' do
    context 'SUCCESS' do
      let(:valid_params) { { name: 'Genre', lyric: 'The lyric of the genre', spotify_link: 'https://example.com' } }

      it 'create new genres' do
        expect { post '/api/genres', params: { genre: valid_params } }.to change(Genre, :count).by(+1)
        expect(response).to have_http_status(:created)
      end
    end
  end

  describe 'PUT/PATCH /api/genres/:id' do
    let!(:genre) { FactoryBot.create(:genre) }

    context 'SUCCESS' do
      it 'update the genre' do
        put "/api/genres/#{genre.id}", params: { genre: { name: 'new-title' } }
        json = JSON.parse(response.body)

        expect(response).to have_http_status(:ok)
        expect(json['name']).to eq('new-title')
      end
    end
  end

  describe 'DELETE /api/genres/:id' do
    let!(:genre) { FactoryBot.create(:genre) }

    it 'successfully delete a genre' do
      expect { delete "/api/genres/#{genre.id}" }.to change(Genre, :count).by(-1)
      expect(response).to have_http_status(:ok)
    end
  end
end
