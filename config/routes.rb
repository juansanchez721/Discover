Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
      resources :users, only: [:create, :show, :index] do 
          resources :follows, only: [:index]
          resources :comments, only: [:index]
          resources :tracks, only: [:index]
          resources :likes, only: [:index]
      end

      resources :tracks, only: [:show, :index, :create, :destroy, :update] do 
        resources :comments, only: [:index]
        resources :likes, only: [:index]
      end
      
      resources :comments, only: [:show, :create, :destroy]
      resources :likes, only: [:index, :create, :destroy]
      resource :session, only: [:create, :destroy]
      get '/email/search', to: 'sessions#search'

  end


end
