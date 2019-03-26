Rails.application.routes.draw do
  resources :resumes
  resources :achievements
  resources :experiences
  resources :degrees
  resources :students
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_ember_app :frontend, to: "/"
end
