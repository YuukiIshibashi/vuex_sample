Rails.application.routes.draw do
  root to: 'home#index'

  get :no_vuex, to: 'home#no_vuex'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
