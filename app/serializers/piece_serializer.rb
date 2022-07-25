class PieceSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :seller, :price, :rating, :seller_rating
end
