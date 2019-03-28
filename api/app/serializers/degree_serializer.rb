class DegreeSerializer
    include FastJsonapi::ObjectSerializer
    set_key_transform :dash
    attributes :name
    belongs_to :resume
end