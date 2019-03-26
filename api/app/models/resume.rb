class Resume < ApplicationRecord
  belongs_to :student
  has_many :degrees
  has_many :experiences
end
