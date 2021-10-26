# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Songs', type: :request do
  describe 'GET /api/songs' do
    it 'can be access' do
      get api_songs_path
      expect(response).to have_http_status(:ok)
    end

    describe "Songs' names and their Spotify links" do
      let!(:song) { FactoryBot.create(:song) }

      before do
        get api_songs_path
      end

      it 'fully displayed' do
        expect(response.body).to include(song.name)
        expect(response.body).to include(song.spotify_link)
      end
    end

    describe 'paginations' do
      let!(:songs) { FactoryBot.create_list(:song, 4) }

      before do
        stub_const('Api::SongsController::PAGE_LIMIT', 3)
      end

      context 'Page 1' do
        before do
          get api_songs_path, params: { page: 1 }
        end

        it 'contains song 1, song 2 and song 3' do
          expect(response).to have_http_status(:ok)
          expect(response.body).to include(songs[0].name, songs[1].name, songs[2].name)
          expect(response.body).not_to include(songs[3].name)
        end
      end

      context 'Page 2' do
        before do
          get api_songs_path, params: { page: 2 }
        end

        it 'contains song 4' do
          expect(response).to have_http_status(:ok)
          expect(response.body).to include(songs[3].name)
          expect(response.body).not_to include(songs[0].name, songs[1].name, songs[2].name)
        end
      end

      context 'Page 3' do
        before do
          get api_songs_path, params: { page: 3 }
        end

        it 'contains no song' do
          json_response = JSON.parse(response.body)

          expect(response).to have_http_status(:ok)
          expect(json_response.length).to eq(0)
        end
      end
    end
  end

  describe 'GET /api/songs/:id' do
    let!(:song) { FactoryBot.create(:song) }

    it "shows a song's info" do
      get api_song_path(id: song.id)
      json = JSON.parse(response.body)
      expect(response).to have_http_status(:ok)
      expect(json['name']).to eq(song.name)
      expect(json['lyric']).to eq(song.lyric)
      expect(json['spotify_link']).to eq(song.spotify_link)
    end
  end

  describe 'POST /api/songs' do
    context 'SUCCESS' do
      let(:valid_params) { { name: 'Song', lyric: 'The lyric of the song', spotify_link: 'https://example.com' } }

      it 'create new songs' do
        expect { post '/api/songs', params: { song: valid_params } }.to change(Song, :count).by(+1)
        expect(response).to have_http_status(:created)
      end
    end
  end

  describe 'PUT/PATCH /api/songs/:id' do
    let!(:song) { FactoryBot.create(:song) }

    context 'SUCCESS' do
      it 'update the song' do
        put "/api/songs/#{song.id}", params: { song: { name: 'new-title' } }
        json = JSON.parse(response.body)

        expect(response).to have_http_status(:ok)
        expect(json['name']).to eq('new-title')
      end
    end
  end

  describe 'DELETE /api/songs/:id' do
    let!(:song) { FactoryBot.create(:song) }

    it 'successfully delete a song' do
      expect { delete "/api/songs/#{song.id}" }.to change(Song, :count).by(-1)
      expect(response).to have_http_status(:ok)
    end
  end
end
