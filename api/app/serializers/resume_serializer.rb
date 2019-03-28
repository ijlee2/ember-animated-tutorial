class ResumeSerializer
    include FastJsonapi::ObjectSerializer
    set_key_transform :dash
    belongs_to :student
    has_many :degrees
    has_many :experiences
    has_many :skills
end