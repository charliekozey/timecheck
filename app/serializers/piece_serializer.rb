class PieceSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :seller, :photo_url, :listing_url, :price, :rating, :seller_rating, :is_chosen, :user_id
end