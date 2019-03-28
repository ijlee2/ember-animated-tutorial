class ExperienceSerializer
    include FastJsonapi::ObjectSerializer
    set_key_transform :dash
    attributes :title, :company, :achievements
    belongs_to :resume
end