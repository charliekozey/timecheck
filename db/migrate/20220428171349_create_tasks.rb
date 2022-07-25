class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.int :expected_time
      t.int :actual_time

      t.timestamps
    end
  end
end
