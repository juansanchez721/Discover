class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.string :description
      t.string :genre
      t.integer :playlist_id
      t.timestamps
    end
  end
end
