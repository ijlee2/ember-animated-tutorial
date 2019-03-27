class CreateResumes < ActiveRecord::Migration[5.2]
    def change
        create_table :resumes, id: :uuid do |t|
            t.references :student, type: :uuid, foreign_key: true

            t.timestamps
        end
    end
end