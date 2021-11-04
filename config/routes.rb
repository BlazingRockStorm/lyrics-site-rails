Rails.application.routes.draw do
  namespace :api do
    resources :songs, except: [:new, :edit]
    resources :genres, except: [:new, :edit]
  end
  root to: "api/songs#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
