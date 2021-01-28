json.extract! user, :id, :username

json.image_url url_for(user.photo) if user.photo.attached?
