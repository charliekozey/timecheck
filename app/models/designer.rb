class Designer < ApplicationRecord
    has_many :users
    has_many :pieces, through: :users
    has_secure_password
    validates :display_name, uniqueness: true
    validates :email, uniqueness: true
end
