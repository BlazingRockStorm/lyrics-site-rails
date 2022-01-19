class AddGenreIdToSong < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :genre_id, :bigint
    add_foreign_key :songs, :genres
  end
end
