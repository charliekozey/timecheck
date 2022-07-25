# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

puts "seeding data..."

User.destroy_all
Piece.destroy_all
Designer.destroy_all

8.times do
    designer = Designer.create(
        display_name: Faker::Name.name,
        email: Faker::Internet.email,
        password_digest: Faker::Alphanumeric.alphanumeric(number: 10, min_alpha: 1, min_numeric: 1)
    )
end

24.times do
    user = User.create(
        display_name: Faker::Name.name,
        email: Faker::Internet.email,
        password_digest: Faker::Alphanumeric.alphanumeric(number: 10, min_alpha: 1, min_numeric: 1)
    )
end




