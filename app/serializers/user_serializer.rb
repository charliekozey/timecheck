class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :display_name
end
