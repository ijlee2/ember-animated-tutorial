class Resume < ApplicationRecord
    belongs_to :student
    has_and_belongs_to_many :degrees
    has_many :experiences
    has_and_belongs_to_many :skills
end