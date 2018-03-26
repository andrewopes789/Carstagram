class Chatroom < ApplicationRecord
  has_many :memberships,
           foreign_key: :chatroom_id,
           class_name: :ChatroomMembership

  has_many :members,
           through: :memberships,
           source: :member

  has_many :messages,
           foreign_key: :chatroom_id,
           class_name: :Message
end
