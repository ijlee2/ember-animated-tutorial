class CreateDegrees < ActiveRecord::Migration[5.2]
  def change
    create_table :degrees do |t|
      t.string :type
      t.string :name
      t.references :resume, foreign_key: true

      t.timestamps
    end
  end
end
