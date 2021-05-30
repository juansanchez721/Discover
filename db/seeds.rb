# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Track.destroy_all
Follow.destroy_all
Like.destroy_all
Comment.destroy_all


playboi = User.create!(username: "playboi carti", email: "playboicarti@playboi.com", password: "password", age: 27, gender: "Male", bio: 'slatt')
playboi_photo = open("https://discover-aa-seeds.s3.amazonaws.com/Playboi-Carti-768x435.jpg")
playboi.photo.attach(io: playboi_photo, filename: 'Playboi-Carti-768x435.jpg')

rihanna = User.create!(username: "Rihanna", email: "rihanna@rihanna.com", password: "password", age: 27, gender: "Female", bio: '')
rihanna_photo = open("https://discover-aa-seeds.s3.amazonaws.com/rihanna.jpg")
rihanna.photo.attach(io: rihanna_photo, filename: 'rihanna.jpg')

sza = User.create!(username: "SZA", email: "sza@sza.com", password: "password", age: 27, gender: "Female", bio: '')
sza_photo = open("https://discover-aa-seeds.s3.amazonaws.com/SZA.jpg")
sza.photo.attach(io: sza_photo, filename: 'SZA.jpg')

kesha = User.create!(username: "ke$ha", email: "kesha@kesha.com", password: "password", age: 27, gender: "Female", bio: '')
kesha_photo = open("https://discover-aa-seeds.s3.amazonaws.com/kesha.jpg")
kesha.photo.attach(io: kesha_photo, filename: 'kesha.jpg')

bbunny = User.create!(username: "Bad Bunny", email: "bad@bunny.com", password: "password", age: 27, gender: "Male", bio: 'YHLQMDLG')
bbunny_photo = open("https://discover-aa-seeds.s3.amazonaws.com/badbunny.jpg")
bbunny.photo.attach(io: bbunny_photo, filename: 'badbunny.jpg')

curry = User.create!(username: "Denzel Curry", email: "denzel@curry.com", password: "password", age: 27, gender: "Male", bio: 'ZUU/UNLOCKED available now')
curry_photo = open("https://discover-aa-seeds.s3.amazonaws.com/currycurry.jfif")
curry.photo.attach(io: curry_photo, filename: 'currycurry.jfif')

amine = User.create!(username: "Amine", email: "amine@amine.com", password: "password", age: 27, gender: "Male", bio: '')
amine_photo = open("https://discover-aa-seeds.s3.amazonaws.com/amine.jpg")
amine.photo.attach(io: amine_photo, filename: 'amine.jpg')


travis = User.create!(username: "Travis $cott", email: "itslit@scott.com", password: "password", age: 27, gender: "Male", bio: 'is lit')
travis_photo = open("https://discover-aa-seeds.s3.amazonaws.com/scott.jpg")
travis.photo.attach(io: travis_photo, filename: 'scott.jpg')

wifisfuneral = User.create!(username: "Wifisfuneral", email: "wifisfuneral@weef.com", password: "password", age: 27, gender: "Male", bio: '3thernet')
wifisfuneral_photo = open("https://discover-aa-seeds.s3.amazonaws.com/weef.jpg")
wifisfuneral.photo.attach(io: wifisfuneral_photo, filename: 'weef.jpg')

nav = User.create!(username: "Nav", email: "nav@test.com", password: "password", age: 27, gender: "Male", bio: 'perfect timing')
nav_photo = open("https://discover-aa-seeds.s3.amazonaws.com/nav.jpg")
nav.photo.attach(io: nav_photo, filename: 'nav.jpg')

cudi = User.create!(username: "Kid Cudi", email: "kid@cudi.com", password: "password", age: 27, gender: "Male")
cudi_photo = open("https://discover-aa-seeds.s3.amazonaws.com/cudi.jpg")
cudi.photo.attach(io: cudi_photo, filename: 'cudi.jpg')

jaycritch = User.create!(username: "Jay Critch", email: "jay@critch.com", password: "password", age: 27, gender: "Male", bio: 'hoodFAIF')
jaycritch_photo = open("https://discover-aa-seeds.s3.amazonaws.com/jaycritch.jpg")
jaycritch.photo.attach(io: jaycritch_photo, filename: 'jaycritch.jpg')

demo_user = User.create!(username:"demouser", email: "demouser@test.com", password: "demopassword", age: 18, gender: "NA", bio: "Click the edit button above to change this bio or profile picture")

stargazing = Track.create!(title: "STARGAZING", owner_id: travis.id, description: "ASTROWORLD")
stargazing_photo = open('https://discover-aa-seeds.s3.amazonaws.com/astro.jpg')
stargazing.photo.attach(io: stargazing_photo, filename: 'astro.jpg')
stargazing_song = open("https://discover-aa-seeds.s3.amazonaws.com/STARGAZING.mp3")
stargazing.track.attach(io: stargazing_song, filename: "STARGAZING.mp3")

daynite = Track.create!(title: "Day 'N' Nite", owner_id: cudi.id, description: "MOTM")
daynite_photo = open('https://discover-aa-seeds.s3.amazonaws.com/manonmoon.jpg')
daynite.photo.attach(io: daynite_photo, filename: 'manonmoon.jpg')
daynite_song = open("https://discover-aa-seeds.s3.amazonaws.com/Kid+Cudi+-+Day+'N'+Nite.mp3")
daynite.track.attach(io: daynite_song, filename: "Kid+Cudi+-+Day+'N'+Nite.mp3")



vete = Track.create!(title: "Vete", owner_id: bbunny.id, description: "")
vete_photo = open('https://discover-aa-seeds.s3.amazonaws.com/YHLQMDLG_BadBunny.jpg')
vete.photo.attach(io: vete_photo, filename: 'YHLQMDLG_BadBunny.jpg')
vete_song = open("https://discover-aa-seeds.s3.amazonaws.com/Vete.mp3")
vete.track.attach(io: vete_song, filename: "Vete.mp3")


dontstopmusic = Track.create!(title: "Umbrella", owner_id: rihanna.id, description: "")
dontstopmusic_photo = open('https://discover-aa-seeds.s3.amazonaws.com/rihannagoodgirlgonebad.jpg')
dontstopmusic.photo.attach(io: dontstopmusic_photo, filename: 'rihannagoodgirlgonebad.jpg')
dontstopmusic_song = open("https://discover-aa-seeds.s3.amazonaws.com/Don't+Stop+The+Music.mp3")
dontstopmusic.track.attach(io: dontstopmusic_song, filename: "Don't+Stop+The+Music.mp3")

reelitin = Track.create!(title: "REEL IT IN", owner_id: amine.id, description: "i got the bag")
reelitin_photo = open('https://discover-aa-seeds.s3.amazonaws.com/amine.jpg')
reelitin.photo.attach(io: reelitin_photo, filename: 'amine.jpg')
reelitin_song = open("https://discover-aa-seeds.s3.amazonaws.com/Amin%C3%A9+-+REEL+IT+IN+(Audio).mp3")
reelitin.track.attach(io: reelitin_song, filename: "Amin%C3%A9+-+REEL+IT+IN+(Audio).mp3")

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


genesis = Track.create!(title: "Genesis", owner_id: wifisfuneral.id, description: "Ethernet")
genesis_photo = open('https://discover-aa-seeds.s3.amazonaws.com/genesis.png')
genesis.photo.attach(io: genesis_photo, filename: 'genesis.png')
genesis_song = open("https://discover-aa-seeds.s3.amazonaws.com/Genesis.mp3")
genesis.track.attach(io: genesis_song, filename: "Genesis.mp3")

callme = Track.create!(title: "Call Me", owner_id: nav.id, description: "Perfect Timing")
callme_photo = open('https://discover-aa-seeds.s3.amazonaws.com/callme.png')
callme.photo.attach(io: callme_photo, filename: 'callme.png')
callme_song = open("https://discover-aa-seeds.s3.amazonaws.com/Call+Me.mp3")
callme.track.attach(io: callme_song, filename: "Call+Me.mp3")

talk = Track.create!(title: "talk - remix", owner_id: playboi.id, description: "")
talk_photo = open('https://discover-aa-seeds.s3.amazonaws.com/talk.jpg')
talk.photo.attach(io: talk_photo, filename: 'talk.jpg')
talk_song = open("https://discover-aa-seeds.s3.amazonaws.com/Talk.mp3")
talk.track.attach(io: talk_song, filename: "Talk.mp3")


dakiti = Track.create!(title: "dakiti", owner_id: bbunny.id, description: "")
dakiti_photo = open('https://discover-aa-seeds.s3.amazonaws.com/dakiti.jpg')
dakiti.photo.attach(io: dakiti_photo, filename: 'dakiti.jpg')
dakiti_song = open("https://discover-aa-seeds.s3.amazonaws.com/Bad+Bunny+x+Jhay+Cortez+-+Dakiti.mp3")
dakiti.track.attach(io: dakiti_song, filename: "Bad+Bunny+x+Jhay+Cortez+-+Dakiti.mp3")

tiktok = Track.create!(title: "Tik Tok", owner_id: kesha.id, description: "")
tiktok_photo = open('https://discover-aa-seeds.s3.amazonaws.com/keshanaimal.jpg')
tiktok.photo.attach(io: tiktok_photo, filename: 'keshanaimal.jpg')
tiktok_song = open("https://discover-aa-seeds.s3.amazonaws.com/Kesha+-+TiK+ToK.mp3")
tiktok.track.attach(io: tiktok_song, filename: "Kesha+-+TiK+ToK.mp3")

showout = Track.create!(title: "Show Out ft Skepta & Pop Smoke", owner_id: cudi.id, description: "MOTMIII")
showout_photo = open('https://discover-aa-seeds.s3.amazonaws.com/kid-cudi-motm3.jpg')
showout.photo.attach(io: showout_photo, filename: 'kid-cudi-motm3.jpg')
showout_song = open("https://discover-aa-seeds.s3.amazonaws.com/Show+Out+ft.++Skepta+%26+Pop+Smoke.mp3")
showout.track.attach(io: showout_song, filename: "Show+Out+ft.++Skepta+%26+Pop+Smoke.mp3")


umbrella = Track.create!(title: "Umbrella", owner_id: rihanna.id, description: "")
umbrella_photo = open('https://discover-aa-seeds.s3.amazonaws.com/rihannagoodgirlgonebad.jpg')
umbrella.photo.attach(io: umbrella_photo, filename: 'rihannagoodgirlgonebad.jpg')
umbrella_song = open("https://discover-aa-seeds.s3.amazonaws.com/umbrella.mp3")
umbrella.track.attach(io: umbrella_song, filename: "umbrella.mp3")


myself = Track.create!(title: "Myself", owner_id: nav.id, description: "")
myself_photo = open('https://discover-aa-seeds.s3.amazonaws.com/myself.jpg')
myself.photo.attach(io: myself_photo, filename: 'myself.jpg')
myself_song = open("https://discover-aa-seeds.s3.amazonaws.com/Myself.mp3")
myself.track.attach(io: myself_song, filename: "Myself.mp3")



weAre = Track.create!(title: "We R Who We R", owner_id: kesha.id, description: "")
weAre_photo = open('https://discover-aa-seeds.s3.amazonaws.com/keshacannibal.jpg')
weAre.photo.attach(io: weAre_photo, filename: 'keshacannibal.jpg')
weAre_song = open("https://discover-aa-seeds.s3.amazonaws.com/We+R+Who+We+R.mp3")
weAre.track.attach(io: weAre_song, filename: "We+R+Who+We+R.mp3")


lovegalore = Track.create!(title: "Love Galore", owner_id: sza.id, description: "")
lovegalore_photo = open('https://discover-aa-seeds.s3.amazonaws.com/CTRL.jpg')
theweekend.photo.attach(io: lovegalore_photo, filename: 'CTRL.jpg')
lovegalore_song = open("https://discover-aa-seeds.s3.amazonaws.com/Love+Galore+-+SZA.mp3")
lovegalore.track.attach(io: lovegalore_song, filename: "Love+Galore+-+SZA.mp3")


rudeboy = Track.create!(title: "Rude Boy", owner_id: rihanna.id, description: "")
rudeboy_photo = open('https://discover-aa-seeds.s3.amazonaws.com/rihannaratedr.png')
rudeboy.photo.attach(io: rudeboy_photo, filename: 'rihannaratedr.jpg')
rudeboy_song = open("https://discover-aa-seeds.s3.amazonaws.com/Rudeboy.mp3")
rudeboy.track.attach(io: rudeboy_song, filename: "Rudeboy.mp3")

goosebumps = Track.create!(title: "goosebumps ft kendrick Lamar", owner_id: travis.id, description: "i get those goosebumps everytime")
goosebumps_photo = open('https://discover-aa-seeds.s3.amazonaws.com/bint.jpg')
goosebumps.photo.attach(io: goosebumps_photo, filename: 'bint.jpg')
goosebumps_song = open("https://discover-aa-seeds.s3.amazonaws.com/goosebumps.mp3")
goosebumps.track.attach(io: goosebumps_song, filename: "goosebumps.mp3")

fashion = Track.create!(title: "Fashion ft Rich the Kid", owner_id: jaycritch.id, description: "check out my fashion")
fashion_photo = open('https://discover-aa-seeds.s3.amazonaws.com/fashion.png')
fashion.photo.attach(io: fashion_photo, filename: 'fashion.png')
fashion_song = open("https://discover-aa-seeds.s3.amazonaws.com/Fashion+ft.+Rich+the+Kid.mp3")
fashion.track.attach(io: fashion_song, filename: "Fashion+ft.+Rich+the+Kid.mp3")

rara = Track.create!(title: "RaRa", owner_id: travis.id, description: "Travi$ Leak")
rara_photo = open('https://discover-aa-seeds.s3.amazonaws.com/rara.jpg')
rara.photo.attach(io: rara_photo, filename: 'rara.jpg')
rara_song = open("https://discover-aa-seeds.s3.amazonaws.com/RaRa+ft.+Lil+Uzi+Vert.mp3")
rara.track.attach(io: rara_song, filename: "RaRa+ft.+Lil+Uzi+Vert.mp3")

theweekend = Track.create!(title: "The Weekend", owner_id: sza.id, description: "")
theweekend_photo = open('https://discover-aa-seeds.s3.amazonaws.com/CTRL.jpg')
theweekend.photo.attach(io: theweekend_photo, filename: 'CTRL.jpg')
theweekend_song = open("https://discover-aa-seeds.s3.amazonaws.com/The+Weekend.mp3")
theweekend.track.attach(io: theweekend_song, filename: "The+Weekend.mp3")

speedboat = Track.create!(title: "SPEEDBOAT", owner_id: curry.id, description: "ZUU")
speedboat_photo = open('https://discover-aa-seeds.s3.amazonaws.com/ZUU.jpg')
speedboat.photo.attach(io: speedboat_photo, filename: 'ZUU.jpg')
speedboat_song = open("https://discover-aa-seeds.s3.amazonaws.com/SPEEDBOAT+%5BClean%5D+-+Denzel+Curry.mp3")
speedboat.track.attach(io: speedboat_song, filename: "SPEEDBOAT+%5BClean%5D+-+Denzel+Curry.mp3")

pursuit = Track.create!(title: "Pursuit of Happiness", owner_id: cudi.id, description: "MOTM")
pursuit_photo = open('https://discover-aa-seeds.s3.amazonaws.com/manonmoon.jpg')
pursuit.photo.attach(io: pursuit_photo, filename: 'manonmoon.jpg')
pursuit_song = open("https://discover-aa-seeds.s3.amazonaws.com/Pursuit+Of+Happiness+(nightmare).mp3")
pursuit.track.attach(io: pursuit_song, filename: "Pursuit+Of+Happiness+(nightmare).mp3")

lean4real = Track.create!(title: "Lean 4 Real", owner_id: playboi.id, description: "Die Lit")
lean4real_photo = open('https://discover-aa-seeds.s3.amazonaws.com/dielit.jpg')
lean4real.photo.attach(io: lean4real_photo, filename: 'dielit.jpg')
lean4real_song = open("https://discover-aa-seeds.s3.amazonaws.com/Lean+4+Real.mp3")
lean4real.track.attach(io: lean4real_song, filename: "Lean+4+Real.mp3")



Follow.create!(followee_id: playboi.id, follower_id: travis.id)
Follow.create!(followee_id: playboi.id, follower_id: nav.id)
Follow.create!(followee_id: playboi.id, follower_id: cudi.id)
Follow.create!(followee_id: playboi.id, follower_id: rihanna.id)
Follow.create!(followee_id: playboi.id, follower_id: sza.id)

Follow.create!(followee_id: travis.id, follower_id: playboi.id)
Follow.create!(followee_id: travis.id, follower_id: cudi.id)
Follow.create!(followee_id: travis.id, follower_id: wifisfuneral.id)
Follow.create!(followee_id: travis.id, follower_id: curry.id)
Follow.create!(followee_id: travis.id, follower_id: rihanna.id)
Follow.create!(followee_id: travis.id, follower_id: sza.id)

Follow.create!(followee_id: amine.id, follower_id: playboi.id)
Follow.create!(followee_id: amine.id, follower_id: cudi.id)
Follow.create!(followee_id: amine.id, follower_id: nav.id)
Follow.create!(followee_id: amine.id, follower_id: rihanna.id)

Follow.create!(followee_id: wifisfuneral.id, follower_id: jaycritch.id)
Follow.create!(followee_id: wifisfuneral.id, follower_id: amine.id)
Follow.create!(followee_id: wifisfuneral.id, follower_id: sza.id)

Follow.create!(followee_id: bbunny.id, follower_id: playboi.id)
Follow.create!(followee_id: bbunny.id, follower_id: cudi.id)
Follow.create!(followee_id: bbunny.id, follower_id: jaycritch.id)
Follow.create!(followee_id: bbunny.id, follower_id: nav.id)
Follow.create!(followee_id: bbunny.id, follower_id: sza.id)
Follow.create!(followee_id: rihanna.id, follower_id: sza.id)

Follow.create!(followee_id: cudi.id, follower_id: jaycritch.id)
Follow.create!(followee_id: cudi.id, follower_id: playboi.id)
Follow.create!(followee_id: cudi.id, follower_id: travis.id)
Follow.create!(followee_id: cudi.id, follower_id: sza.id)

Follow.create!(followee_id: nav.id, follower_id: playboi.id)
Follow.create!(followee_id: nav.id, follower_id: jaycritch.id)
Follow.create!(followee_id: nav.id, follower_id: sza.id)
Follow.create!(followee_id: nav.id, follower_id: rihanna.id)

Follow.create!(followee_id: curry.id, follower_id: jaycritch.id)
Follow.create!(followee_id: curry.id, follower_id: nav.id)
Follow.create!(followee_id: curry.id, follower_id: sza.id)

Follow.create!(followee_id: jaycritch.id, follower_id: travis.id)
Follow.create!(followee_id: jaycritch.id, follower_id: curry.id)
Follow.create!(followee_id: jaycritch.id, follower_id: nav.id)

Follow.create!(followee_id: rihanna.id, follower_id: travis.id)
Follow.create!(followee_id: rihanna.id, follower_id: curry.id)
Follow.create!(followee_id: rihanna.id, follower_id: weef.id)
Follow.create!(followee_id: rihanna.id, follower_id: sza.id)
Follow.create!(followee_id: rihanna.id, follower_id: kesha.id)
Follow.create!(followee_id: rihanna.id, follower_id: bbunny.id)
Follow.create!(followee_id: rihanna.id, follower_id: playboi.id)
Follow.create!(followee_id: rihanna.id, follower_id: cudi.id)
Follow.create!(followee_id: rihanna.id, follower_id: nav.id)
Follow.create!(followee_id: rihanna.id, follower_id: jaycritch.id)

Follow.create!(followee_id: sza.id, follower_id: travis.id)
Follow.create!(followee_id: sza.id, follower_id: curry.id)
Follow.create!(followee_id: sza.id, follower_id: bbunny.id)
Follow.create!(followee_id: sza.id, follower_id: playboi.id)
Follow.create!(followee_id: sza.id, follower_id: cudi.id)

Follow.create!(followee_id: kesha.id, follower_id: cudi.id)
Follow.create!(followee_id: kesha.id, follower_id: playboi.id)
Follow.create!(followee_id: kesha.id, follower_id: rihanna.id)

Like.create!(likeable_type: "Track", likeable_id: myself.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: myself.id, liker_id:cudi.id)
Like.create!(likeable_type: "Track", likeable_id: myself.id, liker_id:jaycritch.id)

Like.create!(likeable_type: "Track", likeable_id: callme.id, liker_id:cudi.id)

Like.create!(likeable_type: "Track", likeable_id: talk.id, liker_id:cudi.id)
Like.create!(likeable_type: "Track", likeable_id: talk.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: talk.id, liker_id:curry.id)


Like.create!(likeable_type: "Track", likeable_id: skeleton.id, liker_id:cudi.id)
Like.create!(likeable_type: "Track", likeable_id: skeleton.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: skeleton.id, liker_id:curry.id)
Like.create!(likeable_type: "Track", likeable_id: skeleton.id, liker_id:bbunny.id)

Like.create!(likeable_type: "Track", likeable_id: lean4real.id, liker_id:jaycritch.id)
Like.create!(likeable_type: "Track", likeable_id: lean4real.id, liker_id:amine.id)

Like.create!(likeable_type: "Track", likeable_id: fashion.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: fashion.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: fashion.id, liker_id:amine.id)

Like.create!(likeable_type: "Track", likeable_id: genesis.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: genesis.id, liker_id:cudi.id)

Like.create!(likeable_type: "Track", likeable_id: showout.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: showout.id, liker_id:wifisfuneral.id)

Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:sza.id)
Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:wifisfuneral.id)
Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:playboi.id)

Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:sza.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:rihanna.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:kesha.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:jaycritch.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:playboi.id)


Like.create!(likeable_type: "Track", likeable_id: backyard.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: backyard.id, liker_id:amine.id)
Like.create!(likeable_type: "Track", likeable_id: backyard.id, liker_id:jaycritch.id)
Like.create!(likeable_type: "Track", likeable_id: backyard.id, liker_id:cudi.id)
Like.create!(likeable_type: "Track", likeable_id: backyard.id, liker_id:sza.id)


Like.create!(likeable_type: "Track", likeable_id: goosebumps.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: goosebumps.id, liker_id:amine.id)
Like.create!(likeable_type: "Track", likeable_id: goosebumps.id, liker_id:sza.id)
Like.create!(likeable_type: "Track", likeable_id: goosebumps.id, liker_id:rihanna.id)

Like.create!(likeable_type: "Track", likeable_id: stargazing.id, liker_id:playboi.id)

Like.create!(likeable_type: "Track", likeable_id: rara.id, liker_id:nav.id)

Like.create!(likeable_type: "Track", likeable_id: dakiti.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: dakiti.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: dakiti.id, liker_id:jaycritch.id)
Like.create!(likeable_type: "Track", likeable_id: dakiti.id, liker_id:amine.id)
Like.create!(likeable_type: "Track", likeable_id: dakiti.id, liker_id:rihanna.id)
Like.create!(likeable_type: "Track", likeable_id: dakiti.id, liker_id:kesha.id)

Like.create!(likeable_type: "Track", likeable_id: vete.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: vete.id, liker_id:amine.id)
Like.create!(likeable_type: "Track", likeable_id: vete.id, liker_id: jaycritch.id)
Like.create!(likeable_type: "Track", likeable_id: vete.id, liker_id:sza.id)
Like.create!(likeable_type: "Track", likeable_id: vete.id, liker_id: amine.id)


Like.create!(likeable_type: "Track", likeable_id: reelitin.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: reelitin.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: reelitin.id, liker_id:curry.id)

Like.create!(likeable_type: "Track", likeable_id: speedboat.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: speedboat.id, liker_id:bbunny.id)
Like.create!(likeable_type: "Track", likeable_id: speedboat.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: speedboat.id, liker_id:cudi.id)

Like.create!(likeable_type: "Track", likeable_id: lovegalore.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: lovegalore.id, liker_id:bbunny.id)
Like.create!(likeable_type: "Track", likeable_id: lovegalore.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: lovegalore.id, liker_id:rihanna.id)
Like.create!(likeable_type: "Track", likeable_id: lovegalore.id, liker_id:cudi.id)
Like.create!(likeable_type: "Track", likeable_id: lovegalore.id, liker_id: amine.id)

Like.create!(likeable_type: "Track", likeable_id: theweekend.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: theweekend.id, liker_id:wifisfuneral.id)
Like.create!(likeable_type: "Track", likeable_id: theweekend.id, liker_id:travis.id)

Like.create!(likeable_type: "Track", likeable_id: umbrella.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: umbrella.id, liker_id:bbunny.id)
Like.create!(likeable_type: "Track", likeable_id: umbrella.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: umbrella.id, liker_id:sza.id)
Like.create!(likeable_type: "Track", likeable_id: umbrella.id, liker_id:cudi.id)
Like.create!(likeable_type: "Track", likeable_id: umbrella.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: umbrella.id, liker_id:wifisfuneral.id)

Like.create!(likeable_type: "Track", likeable_id: dontstopmusic.id, liker_id:bbunny.id)
Like.create!(likeable_type: "Track", likeable_id: dontstopmusic.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: dontstopmusic.id, liker_id:jaycritch.id)
Like.create!(likeable_type: "Track", likeable_id: dontstopmusic.id, liker_id:cudi.id)
Like.create!(likeable_type: "Track", likeable_id: dontstopmusic.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: dontstopmusic.id, liker_id:wifisfuneral.id)
Like.create!(likeable_type: "Track", likeable_id: dontstopmusic.id, liker_id: amine.id)

Like.create!(likeable_type: "Track", likeable_id: rudeboy.id, liker_id:bbunny.id)
Like.create!(likeable_type: "Track", likeable_id: rudeboy.id, liker_id:jaycritch.id)
Like.create!(likeable_type: "Track", likeable_id: rudeboy.id, liker_id:sza.id)
Like.create!(likeable_type: "Track", likeable_id: rudeboy.id, liker_id:cudi.id)
Like.create!(likeable_type: "Track", likeable_id: rudeboy.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: rudeboy.id, liker_id:wifisfuneral.id)
Like.create!(likeable_type: "Track", likeable_id: rudeboy.id, liker_id: amine.id)

Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:wifisfuneral.id)
Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:travis.id)
Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:playboi.id)
Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id:sza.id)
Like.create!(likeable_type: "Track", likeable_id: daynite.id, liker_id: amine.id)

Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:rihanna.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id:bbunny.id)
Like.create!(likeable_type: "Track", likeable_id: pursuit.id, liker_id: amine.id)

Like.create!(likeable_type: "Track", likeable_id: tiktok.id, liker_id:wifisfuneral.id)
Like.create!(likeable_type: "Track", likeable_id: tiktok.id, liker_id: amine.id)

Like.create!(likeable_type: "Track", likeable_id: weAre.id, liker_id:nav.id)
Like.create!(likeable_type: "Track", likeable_id: weAre.id, liker_id:playboi.id)

Comment.create!(body: "let me know", track_id: talk.id, commenter_id:cudi.id)
Comment.create!(body: "Remix is way better", track_id: talk.id, commenter_id: nav.id)

Comment.create!(body: "uzi and trav??", track_id: skeleton.id, commenter_id: nav.id)
Comment.create!(body: "me gusta", track_id: skeleton.id, commenter_id: bbunny.id)
Comment.create!(body: "this aint even out!", track_id: skeleton.id, commenter_id: curry.id)

Comment.create!(body: "A classic", track_id: backyard.id, commenter_id: amine.id)
pcomment = Comment.create!(body: "I miss this travis", track_id: backyard.id, commenter_id: jaycritch.id)
Comment.create!(parent_comment_id: pcomment.id, body: "... bruh", track_id: backyard.id, commenter_id: travis.id)

# Comment.create!(body: , track_id: rara.id, commenter_id:)
# Comment.create!(body: , track_id: stargazing.id, commenter_id:)


Comment.create!(body: "yooooo", track_id: goosebumps.id, commenter_id: nav.id)
Comment.create!(body: "!!kung fu kenny", track_id: goosebumps.id, commenter_id: amine.id)

Comment.create!(body: "that bass", track_id: lean4real.id, commenter_id: jaycritch.id)

Comment.create!(body:"wish that you would call me up" , track_id: callme.id, commenter_id:cudi.id)
Comment.create!(body:"just gimme a minute" , track_id: myself.id, commenter_id: jaycritch.id)

Comment.create!(body:"checkout my fashion" , track_id: fashion.id, commenter_id:amine.id)

Comment.create!(body:"ISLIT" , track_id: genesis.id, commenter_id:travis.id)

Comment.create!(body:"rip the woo" , track_id: showout.id, commenter_id:travis.id)

# Comment.create!(body: , track_id: dakiti.id, commenter_id:)
# Comment.create!(body: , track_id: vete.id, commenter_id:)

# Comment.create!(body: , track_id: reelitin.id, commenter_id:)
# Comment.create!(body: , track_id: speedboat.id, commenter_id:)