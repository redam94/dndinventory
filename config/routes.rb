Rails.application.routes.draw do
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get 'api/v1/logged_in', to: 'sessions#is_logged_in?'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]
      get '/items/:id', to: 'items#index'
      get '/items/show/:id', to: 'items#show'
      post '/items/:id', to: 'items#create'
      delete '/items/destroy/:id', to: 'items#destroy'
      put '/items/:id', to: 'items#update'
      resources :characters, only: [:create, :show, :destroy, :index]
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'

  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
