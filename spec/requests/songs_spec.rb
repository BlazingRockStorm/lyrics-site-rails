# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Songs', type: :request do
  describe 'GET /api/songs' do
    let!(:songs) { FactoryBot.create_list(:song, 3) }

    it 'shows all songs' do
      get api_songs_path
      json = JSON.parse(response.body)
      expect(response).to have_http_status(:ok)
      expect(json.length).to eq(3)
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
      it 'create new songs' do
        valid_params = { name: 'Song', lyric: 'The lyric of the song', spotify_link: 'https://example.com' }
        expect { post '/api/songs', params: { song: valid_params } }.to change(Song, :count).by(+1)
        expect(response).to have_http_status(:created)
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
