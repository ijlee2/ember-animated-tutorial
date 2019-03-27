class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :company
      t.string :achievements, array: true, default: []
      t.references :resume, foreign_key: true

      t.timestamps
    end
  end
end
