class CreateExperiences < ActiveRecord::Migration[5.2]
    def change
        create_table :experiences, id: :uuid do |t|
            t.string :title
            t.string :company
            t.string :achievements, array: true, default: []
            t.references :resume, type: :uuid, foreign_key: true

            t.timestamps
        end
    end
end