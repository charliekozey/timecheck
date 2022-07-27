class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.string :name
      t.string :category
      t.string :seller
      t.string :photo_url
      t.string :listing_url
      t.decimal :price
      t.decimal :rating
      t.decimal :seller_rating
      t.boolean :is_chosen
      t.integer :user_id

      t.timestamps
    end
  end
end
