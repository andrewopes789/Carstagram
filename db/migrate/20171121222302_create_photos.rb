class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :img_url, null: false
      t.string :caption
      t.integer :author_id

      t.timestamps
    end
    add_index :photos, :author_id
  end
end
