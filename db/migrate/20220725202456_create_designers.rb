class CreateDesigners < ActiveRecord::Migration[6.1]
  def change
    create_table :designers do |t|
      t.string :email
      t.string :password_digest
      t.string :display_name

      t.timestamps
    end
  end
end
