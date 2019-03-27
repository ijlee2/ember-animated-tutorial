class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.string :name
      t.string :category
      t.string :synonyms, array: true, default: []
      t.references :resume, foreign_key: true

      t.timestamps
    end
  end
end
