class User < ApplicationRecord
    has_many :pieces
    belongs_to :designer
    has_secure_password
    validates :display_name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :email, length: { minimum: 4 }
end
