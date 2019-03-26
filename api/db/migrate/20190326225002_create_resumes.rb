class CreateResumes < ActiveRecord::Migration[5.2]
  def change
    create_table :resumes do |t|
      t.string :skills, array: true, default: []
      t.references :student, foreign_key: true

      t.timestamps
    end
  end
end
