class SkillSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :category, :synonyms
    belongs_to :resume
end