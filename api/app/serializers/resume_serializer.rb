class ResumeSerializer
    include FastJsonapi::ObjectSerializer
    belongs_to :student
    has_many :degrees
    has_many :experiences
    has_many :skills
end