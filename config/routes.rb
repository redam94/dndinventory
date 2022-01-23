Rails.application.routes.draw do
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]
      resources :items, only: [:create, :show, :destroy, :index]
      resources :characters, only: [:create, :show, :destroy, :index]
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'

  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
