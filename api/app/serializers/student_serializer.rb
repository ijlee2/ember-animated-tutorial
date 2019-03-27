class StudentSerializer
    include FastJsonapi::ObjectSerializer
    attributes :first_name, :last_name, :email, :phone, :image_url
    has_many :resumes
end