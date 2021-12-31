Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :songs, except: [:new, :edit]
    resources :genres, except: [:new, :edit]
  end
  get '/songs/:id', to: 'home#song_detail', as: :song
  get '/songs', to: 'home#songs'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
