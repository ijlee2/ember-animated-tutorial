class CreateJoinTableResumeSkill < ActiveRecord::Migration[5.2]
    def change
        create_join_table(:resumes, :skills, column_options: { type: :uuid })
    end
end