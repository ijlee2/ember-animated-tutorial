Rails.application.routes.draw do
  resources :students
  resources :resumes
  resources :degrees
  resources :experiences
  resources :skills
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_ember_app :frontend, to: "/"
end
