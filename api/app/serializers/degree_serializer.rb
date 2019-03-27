class DegreeSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name
    belongs_to :resume
end