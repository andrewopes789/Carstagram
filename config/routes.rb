Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create show)
    resource :session, only: %i(create destroy)
    resources :photos, except: %i(new edit) do
      resources :comments, only: %i(create)
      resources :likes, only: %i(create)
    end
    resources :comments, only: %i(destroy)
    resources :likes, only: %i(destroy)
  end
end
