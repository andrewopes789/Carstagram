class Chatroom < ApplicationRecord
  validates :sender_id, presence: true, uniqueness: { scope: :recipient_id }

  belongs_to :sender,
             foreign_key: :sender_id,
             class_name: :User

  belongs_to :recipient,
             foreign_key: :recipient_id,
             class_name: :User

  has_many :messages,
           foreign_key: :chatroom_id,
           class_name: :Message
end
