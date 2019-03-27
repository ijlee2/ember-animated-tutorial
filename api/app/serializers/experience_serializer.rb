class ExperienceSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :company, :achievements
    belongs_to :resume
end