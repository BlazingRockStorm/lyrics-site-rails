class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.text :lyrics
      t.string :spotify_link

      t.timestamps
    end
  end
end
