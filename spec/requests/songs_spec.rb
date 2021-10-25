# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Songs', type: :request do
  describe 'GET /api/songs' do
    it 'shows all songs' do
      get api_songs_path
      expect(response).to have_http_status(:ok)
    end
  end
end
