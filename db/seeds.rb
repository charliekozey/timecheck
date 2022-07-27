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

2.times do
    designer = Designer.create(
        display_name: Faker::Name.unique.name,
        email: Faker::Internet.unique.email,
        password_digest: Faker::Alphanumeric.unique.alphanumeric(number: 10, min_alpha: 1, min_numeric: 1)
    )

    2.times do
        user = User.create(
            display_name: Faker::Name.unique.name,
            email: Faker::Internet.unique.email,
            password_digest: Faker::Alphanumeric.unique.alphanumeric(number: 10, min_alpha: 1, min_numeric: 1),
            designer_id: designer.id
        )

    end

end

piece1 = Piece.create(
    name: "nuLOOM Traditional Vintage Vibrant Area Rug in Red, Blue, Orange Multi", 
    category: "Area Rugs", 
    seller: "nuloom", 
    photo_url: "https://i.ebayimg.com/images/g/dqEAAOSwPCFeM4pG/s-l1600.jpg",
    listing_url: "https://www.ebay.com/itm/401460838668?hash=item5d78ee410c:g:dqEAAOSwPCFeM4pG", 
    price: 52.35, 
    seller_rating: 97.5,
    is_chosen: true,
    user_id: 1
)

piece2 = Piece.create(
    name: "Lot of 2, Target x Bullseyes Playground Summer 2022, Decorative Pillows. BNWT", 
    category: "Decorative Pillows", 
    seller: "alizer-83", 
    photo_url: "https://i.ebayimg.com/images/g/Fo4AAOSw1eZivJjA/s-l1600.jpg",
    listing_url: "https://www.ebay.com/itm/125433908118?hash=item1d34718b96:g:Fo4AAOSw1eZivJjA", 
    price: 18.00, 
    seller_rating: 100.0,
    is_chosen: false,
    user_id: 1
)

piece3 = Piece.create(
    name: "Rustic Wood Coffee Table Rectangular Coffee Table with Storage Shelf Durable 31 in.", 
    category: "Coffee Tables", 
    seller: "appletree-oz", 
    photo_url: "https://i.ebayimg.com/images/g/QxIAAOSwjV9friHi/s-l1600.jpg",
    listing_url: "https://www.ebay.com/itm/133575050213?hash=item1f19b183e5:g:QxIAAOSwjV9friHi", 
    price: 55.58, 
    seller_rating: 99.2,
    is_chosen: true,
    user_id: 2
)

piece4 = Piece.create(
    name: "4d Concepts Alex Kitchen Island Cart 980520", 
    category: "Kitchen Islands", 
    seller: "bisonoffice", 
    photo_url: "https://i.ebayimg.com/images/g/XUQAAOSw~0RiRq8w/s-l1600.jpg",
    listing_url: "https://www.ebay.com/p/11030342485?iid=175223298685", 
    price: 302.42, 
    seller_rating: 96.5,
    is_chosen: false,
    user_id: 2
)

piece5 = Piece.create(
    name: "Minecraft Bed Sheets and Comforter Set Drapers Twin Kids Bedding 6pc", 
    category: "Kids' & Teens' Bedding Sets", 
    seller: "d_lander", 
    photo_url: "https://i.ebayimg.com/images/g/gXgAAOSw-R9fzlQv/s-l1600.jpg",
    listing_url: "https://www.ebay.com/p/23044022996?iid=303894978795", 
    price: 62.99, 
    seller_rating: 94.2,
    is_chosen: false,
    user_id: 3
)

piece6 = Piece.create(
    name: "Alpine Outdoor Birdbath 25 in. Weather Resistant Ceramic Turquoise Glaze", 
    category: "Bird Baths", 
    seller: "davidstoreusa", 
    photo_url: "https://i.ebayimg.com/images/g/jhsAAOSwrk5etUI2/s-l640.jpg",
    listing_url: "https://www.ebay.com/p/28005616322?iid=284246211199", 
    price: 85.99, 
    seller_rating: 98.3,
    is_chosen: true,
    user_id: 3
)

piece7 = Piece.create(
    name: "INK+IVY Imani Cotton Printed Window Panel with Chenille Stripe and Lining", 
    category: "Window Curtains & Drapes", 
    seller: "designerlivingus", 
    photo_url: "https://i.ebayimg.com/images/g/a70AAOSwbFJihy0u/s-l1600.jpg",
    listing_url: "https://www.ebay.com/itm/154630827107?hash=item2400b72c63:g:a70AAOSwbFJihy0u", 
    price: 59.99, 
    seller_rating: 96.6,
    is_chosen: true,
    user_id: 4
)

piece8 = Piece.create(
    name: "Ashley Furniture Alenya Charcoal Sectional 1660167", 
    category: "Sofas, Armchairs & Couches", 
    seller: "jngfurniture1", 
    photo_url: "https://i.ebayimg.com/images/g/8N8AAOSwijhbYgZt/s-l1600.jpg",
    listing_url: "https://www.ebay.com/p/660415028?iid=185475092098", 
    price: 995.00, 
    seller_rating: 100,
    is_chosen: false,
    user_id: 4
)

piece9 = Piece.create(
    name: "5 Piece Mission Counter Height Dining Set, Including Table & 4 Chairs, Cherry Co", 
    category: "Dining Room Sets", 
    seller: "md2031-2", 
    photo_url: "https://i.ebayimg.com/images/g/RNAAAOSw-d1i3xp7/s-l1600.png",
    listing_url: "https://www.ebay.com/itm/225089951772?hash=item346868181c:g:RNAAAOSw-d1i3xp7", 
    price: 383.14, 
    seller_rating: 100,
    is_chosen: true,
    user_id: 2
)

piece10 = Piece.create(
    name: "66.5in Ladder Shelf 5 Tier Stand Storage Rack Vintage Bookshelf Bookcase Plant US", 
    category: "Bookcases & Shelving", 
    seller: "molblly-mattress", 
    photo_url: "https://i.ebayimg.com/images/g/dHkAAOSwaN9ivXTA/s-l1600.jpg",
    listing_url: "https://www.ebay.com/itm/363890801071?hash=item54b994f9af:g:v1kAAOSwp~tivXSa&var=633126479821", 
    price: 46.75, 
    seller_rating: 97.8,
    is_chosen: false,
    user_id: 3
)

puts "done seeding"