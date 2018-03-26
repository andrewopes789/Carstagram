class ChatroomMembership < ApplicationRecord
  validates :member_id, presence: true, uniqueness: { scope: :chatroom_id }

  belongs_to :chatroom,
             foreign_key: :chatroom_id,
             class_name: :Chatroom

  belongs_to :member,
             foreign_key: :member_id,
             class_name: :User
end
