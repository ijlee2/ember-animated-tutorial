class Experience < ApplicationRecord
  belongs_to :resume
  has_many :achievements
end
