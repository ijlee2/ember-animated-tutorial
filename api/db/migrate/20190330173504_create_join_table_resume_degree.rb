class CreateJoinTableResumeDegree < ActiveRecord::Migration[5.2]
    def change
        create_join_table(:resumes, :degrees, column_options: { type: :uuid })
    end
end