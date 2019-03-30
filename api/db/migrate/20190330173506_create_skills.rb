class CreateSkills < ActiveRecord::Migration[5.2]
    def change
        create_table :skills, id: :uuid do |t|
            t.string :name
            t.string :category
            t.string :synonyms, array: true, default: []

            t.timestamps
        end
    end
end