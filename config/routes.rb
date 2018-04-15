Rails.application.routes.draw do
  root "static_pages#root"
  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    resources :recommendations, only: %i(index)
    resources :searches, only: %i(index)
    resources :messages, only: %i(show)
    resources :chatrooms, only: %i(index show) do
      resources :messages, only: %i(create)
    end

    resources :chatroom_memberships, only: %i(index show create)
    resources :users, only: %i(index create update show) do
      resources :chatrooms, only: %i(create)
      member do
        post 'follow', to: "follows#create"
        delete 'follow', to: "follows#destroy"
      end
    end

    resource :session, only: %i(create destroy)
    resources :photos, except: %i(new edit) do
      resources :comments, only: %i(index create)
      member do
        post 'like', to: "likes#create"
        delete 'like', to: "likes#destroy"
      end
    end
    resources :comments, only: %i(destroy)
  end

  #channels
  post '/api/channels/add_subscriber/:id' => 'api/channels#add_subscriber',
    as: 'api_channel_add_subscriber',
    defaults: { format: :json }
end
