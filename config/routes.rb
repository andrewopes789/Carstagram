Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :messages, only: %i(index)
    resources :chatrooms, only: %i(index)
    resources :users, only: %i(create show) do
      resources :chatrooms, only: %i(create)
      resources :messages, only: %i(create)
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
end
