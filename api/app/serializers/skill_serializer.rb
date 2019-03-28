class SkillSerializer
    include FastJsonapi::ObjectSerializer
    set_key_transform :dash
    attributes :name, :category, :synonyms
    belongs_to :resume
end