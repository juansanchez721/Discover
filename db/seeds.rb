# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

rara = Track.create!(title: "RaRa", owner_id: 7, description: "Travi$ Leak")
rara_photo = open('https://discover-aa-seeds.s3.amazonaws.com/rara.jpg')
rara.photo.attach(io: rara_photo, filename: 'rara.jpg')
rara_song = open("https://discover-aa-seeds.s3.amazonaws.com/RaRa+ft.+Lil+Uzi+Vert.mp3")
rara.song.attach(io: rara_song, filename: "RaRa+ft.+Lil+Uzi+Vert.mp3")


skeleton = Track.create!(title: "skeleton", owner_id: 1, description: "Carti Leak")
skeleton_photo = open('https://discover-aa-seeds.s3.amazonaws.com/Wholelottared.png')
skeleton.photo.attach(io: skeleton_photo, filename: 'Wholelottared.png')
skeleton_song = open("https://discover-aa-seeds.s3.amazonaws.com/Skeleton.mp3")
skeleton.song.attach(io: skeleton_song, filename: "skeleton.mp3")