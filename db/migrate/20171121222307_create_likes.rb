class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end
    add_index :likes, %i(user_id photo_id), unique: true
    add_index :likes, :photo_id
  end
end
