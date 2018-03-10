# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, presence: true, uniqueness: { scope: :photo_id }

  belongs_to :liker,
             foreign_key: :user_id,
             class_name: :User

  belongs_to :photo,
              foreign_key: :photo_id,
              class_name: :Photo
end
