# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  follower_id  :integer          not null
#  following_id :integer          not nullç
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, presence: true, uniqueness: { scope: :following_id }

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :following,
    foreign_key: :following_id,
    class_name: :User
end
