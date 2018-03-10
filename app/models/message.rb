class Message < ApplicationRecord
  validates :sender_id, :recipient_id, :body, presence: true

  belongs_to :sender,
             foreign_key: :sender_id,
             class_name: :User

  belongs_to :recipient_id,
             foreign_key: :recipient_id,
             class_name: :User
end
