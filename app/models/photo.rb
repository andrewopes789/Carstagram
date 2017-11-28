# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  img_url    :string           not null
#  caption    :string
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  belongs_to :poster,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    foreign_key: :photo_id,
    class_name: :Like

  has_many :likers,
    through: :likes,
    source: :liker

  has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment

  def likes_by_id
    self.likes.map(&:id)
  end

  def comments_by_id
    self.comments.map(&:id)
  end
end
