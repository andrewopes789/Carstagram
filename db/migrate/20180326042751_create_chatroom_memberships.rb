class CreateChatroomMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :chatroom_memberships do |t|
      t.integer :member_id, null: false
      t.integer :chatroom_id, null: false
      
      t.timestamps
    end
  end
end
