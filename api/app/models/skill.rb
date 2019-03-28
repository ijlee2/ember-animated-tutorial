class Skill < ApplicationRecord
    belongs_to :resume, optional: true
end