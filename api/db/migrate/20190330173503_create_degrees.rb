class CreateDegrees < ActiveRecord::Migration[5.2]
    def change
        create_table :degrees, id: :uuid do |t|
            t.string :name
            t.references :resume, type: :uuid, foreign_key: true

            t.timestamps
        end
    end
end