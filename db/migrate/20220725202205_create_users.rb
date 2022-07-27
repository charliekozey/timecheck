class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :display_name
      t.integer :designer_id

      t.timestamps
    end
  end
end
