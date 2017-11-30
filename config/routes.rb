Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create show)
    resource :session, only: %i(create destroy)
    resources :photos, except: %i(new edit) do
      resources :comments, only: %i(index create)
      member do
        post 'like', to: "likes#create"
        delete 'like', to: "likes#destroy", as: 'unlike'
      end
    end
    resources :comments, only: %i(destroy)
    resources :follows, only: %i(create destroy)
  end
end
