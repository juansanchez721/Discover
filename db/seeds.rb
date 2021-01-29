# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


playboi = User.create!(username: "playboi carti", email: "playboicarti@playboi.com", password: "password", age: 27, gender: "Male")
playboi_photo = open("https://discover-aa-seeds.s3.amazonaws.com/Playboi-Carti-768x435.jpg")
playboi.photo.attach(io: playboi_photo, filename: 'Playboi-Carti-768x435.jpg')

travis = User.create!(username: "Travis $cott", email: "itslit@scott.com", password: "password", age: 27, gender: "Male")
travis_photo = open("https://discover-aa-seeds.s3.amazonaws.com/scott.jpg")
travis.photo.attach(io: travis_photo, filename: 'scott.jpg')

wifisfuneral = User.create!(username: "Wifisfuneral", email: "wifisfuneral@weef.com", password: "password", age: 27, gender: "Male")
wifisfuneral_photo = open("https://discover-aa-seeds.s3.amazonaws.com/weef.jpg")
wifisfuneral.photo.attach(io: wifisfuneral_photo, filename: 'weef.jpg')

nav = User.create!(username: "Nav", email: "nav@test.com", password: "password", age: 27, gender: "Male")
nav_photo = open("https://discover-aa-seeds.s3.amazonaws.com/nav.jpg")
nav.photo.attach(io: nav_photo, filename: 'nav.jpg')

cudi = User.create!(username: "Kid Cudi", email: "kid@cudi.com", password: "password", age: 27, gender: "Male")
cudi_photo = open("https://discover-aa-seeds.s3.amazonaws.com/cudi.jpg")
cudi.photo.attach(io: cudi_photo, filename: 'cudi.jpg')

jaycritch = User.create!(username: "Jay Critch", email: "jay@critch.com", password: "password", age: 27, gender: "Male")
jaycritch_photo = open("https://discover-aa-seeds.s3.amazonaws.com/jaycritch.jpg")
jaycritch.photo.attach(io: jaycritch_photo, filename: 'jaycritch.jpg')

rara = Track.create!(title: "RaRa", owner_id: travis.id, description: "Travi$ Leak")
rara_photo = open('https://discover-aa-seeds.s3.amazonaws.com/rara.jpg')
rara.photo.attach(io: rara_photo, filename: 'rara.jpg')
rara_song = open("https://discover-aa-seeds.s3.amazonaws.com/RaRa+ft.+Lil+Uzi+Vert.mp3")
rara.track.attach(io: rara_song, filename: "RaRa+ft.+Lil+Uzi+Vert.mp3")

backyard = Track.create!(title: "backyard", owner_id: travis.id, description: "Days Before Rodeo")
backyard_photo = open('https://discover-aa-seeds.s3.amazonaws.com/rodeo.jpg')
backyard.photo.attach(io: backyard_photo, filename: 'rodeo.jpg')
backyard_song = open("https://discover-aa-seeds.s3.amazonaws.com/Backyard.mp3")
backyard.track.attach(io: backyard_song, filename: "Backyard.mp3")

skeleton = Track.create!(title: "skeleton", owner_id: playboi.id, description: "Carti Leak")
skeleton_photo = open('https://discover-aa-seeds.s3.amazonaws.com/Wholelottared.png')
skeleton.photo.attach(io: skeleton_photo, filename: 'Wholelottared.png')
skeleton_song = open("https://discover-aa-seeds.s3.amazonaws.com/Skeleton.mp3")
skeleton.track.attach(io: skeleton_song, filename: "Skeleton.mp3")

lean4real = Track.create!(title: "Lean 4 Real", owner_id: playboi.id, description: "Die Lit")
lean4real_photo = open('https://discover-aa-seeds.s3.amazonaws.com/dielit.jpg')
lean4real.photo.attach(io: lean4real_photo, filename: 'dielit.jpg')
lean4real_song = open("https://discover-aa-seeds.s3.amazonaws.com/Lean+4+Real.mp3")
lean4real.track.attach(io: lean4real_song, filename: "Lean+4+Real.mp3")

talk = Track.create!(title: "talk - remix", owner_id: playboi.id, description: "")
talk_photo = open('https://discover-aa-seeds.s3.amazonaws.com/talk.jpg')
talk.photo.attach(io: talk_photo, filename: 'talk.jpg')
talk_song = open("https://discover-aa-seeds.s3.amazonaws.com/Talk.mp3")
talk.track.attach(io: talk_song, filename: "Talk.mp3")

callme = Track.create!(title: "Call Me", owner_id: nav.id, description: "Perfect Timing")
callme_photo = open('https://discover-aa-seeds.s3.amazonaws.com/callme.png')
callme.photo.attach(io: callme_photo, filename: 'callme.png')
callme_song = open("https://discover-aa-seeds.s3.amazonaws.com/Call+Me.mp3")
callme.track.attach(io: callme_song, filename: "Call+Me.mp3")

fashion = Track.create!(title: "Fashion ft Rich the Kid", owner_id: jaycritch.id, description: "check out my fashion")
fashion_photo = open('https://discover-aa-seeds.s3.amazonaws.com/fashion.png')
fashion.photo.attach(io: fashion_photo, filename: 'fashion.png')
fashion_song = open("https://discover-aa-seeds.s3.amazonaws.com/Fashion+ft.+Rich+the+Kid.mp3")
fashion.track.attach(io: fashion_song, filename: "Fashion+ft.+Rich+the+Kid.mp3")


genesis = Track.create!(title: "Genesis", owner_id: wifisfuneral.id, description: "Ethernet")
genesis_photo = open('https://discover-aa-seeds.s3.amazonaws.com/genesis.png')
genesis.photo.attach(io: genesis_photo, filename: 'genesis.png')
genesis_song = open("https://discover-aa-seeds.s3.amazonaws.com/Genesis.mp3")
genesis.track.attach(io: genesis_song, filename: "Genesis.mp3")

showout = Track.create!(title: "Show Out ft Skepta & Pop Smoke", owner_id: cudi.id, description: "MOTMIII")
showout_photo = open('https://discover-aa-seeds.s3.amazonaws.com/kid-cudi-motm3.jpg')
showout.photo.attach(io: showout_photo, filename: 'kid-cudi-motm3.jpg')
showout_song = open("https://discover-aa-seeds.s3.amazonaws.com/Show+Out+ft.++Skepta+%26+Pop+Smoke.mp3")
showout.track.attach(io: showout_song, filename: "Show+Out+ft.++Skepta+%26+Pop+Smoke.mp3")