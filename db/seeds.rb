# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all

user1 = User.create(name: 'DemoUser', email: 'demo@email.com', password: 'movieo')
user2 = User.create(name: 'Phil Zheng', email: 'phils@gmail.com', password: 'asd123qw')

Video.destroy_all

Video.create(title: "first video", owner_id: user1.id).video.attach(io: open("https://movie-dev.s3-us-west-1.amazonaws.com/Drone+Winter+Mountains+4K.mp4"), filename: "mountain.mp4")
Video.create(title: "Black Coast", owner_id: user2.id).video.attach(io: open("https://movie-dev.s3-us-west-1.amazonaws.com/XFyGKkXCo4RFHJAL8bkgsvhw"), filename: "black_coast")
Video.create(title: "Shy Girl", owner_id: user2.id).video.attach(io: open("https://movie-dev.s3-us-west-1.amazonaws.com/wWmr95uWDKZEWWV8nUwVw79k"), filename: "shy_girl")
Video.create(title: "Sail", owner_id: user1.id).video.attach(io: open("https://movie-dev.s3-us-west-1.amazonaws.com/QT8JgUvYmYjTeCPpJE8CtZRY"), filename: "sail")
