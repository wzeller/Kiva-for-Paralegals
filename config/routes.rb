Rails.application.routes.draw do
  root to: "static_pages#root"  
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :update] 
    resources :paralegals, only: [:index, :show]
    resources :teams, only: [:index, :show]
  end
  
  resources :teams, only: [:new, :create]
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  
  

end
