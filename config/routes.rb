Rails.application.routes.draw do
  get 'pong/index'

  root :to => "visitors#index"

  get "pong", :to => 'pong#index'
end
