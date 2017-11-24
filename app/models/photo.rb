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
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    foreign_key: :photo_id,
    class_name: :Like

  has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment
end
