class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.string :name
      t.string :category
      t.string :seller
      t.string :photo_url
      t.decimal :price
      t.decimal :rating
      t.decimal :seller_rating

      t.timestamps
    end
  end
end
