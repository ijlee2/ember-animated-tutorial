class StudentSerializer
    include FastJsonapi::ObjectSerializer
    set_key_transform :dash
    attributes :first_name, :last_name, :email, :phone, :image_url
    has_many :resumes
end