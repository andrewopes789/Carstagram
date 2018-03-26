# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  # after_commit { MessageRelayJob.perform_later(self, self.interface) }
  validates :sender_id, :recipient_id, :chatroom_id, :body, presence: true

  belongs_to :sender,
             foreign_key: :sender_id,
             class_name: :User

  belongs_to :recipient,
             foreign_key: :recipient_id,
             class_name: :User

  belongs_to :chatroom,
             foreign_key: :chatroom_id,
             class_name: :Chatroom
end
