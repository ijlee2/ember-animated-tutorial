class Degree < ApplicationRecord
    belongs_to :resume, optional: true
end