# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  img_url         :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :photos,
    foreign_key: :author_id,
    class_name: :Photo

  has_many :likes,
    foreign_key: :user_id,
    class_name: :Like

  has_many :comments,
    foreign_key: :user_id,
    class_name: :Comment

  has_many :user_followers,
    foreign_key: :following_id,
    class_name: :Follow

  has_many :user_followings,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followers,
    through: :user_followers,
    source: :follower

  has_many :followings,
    through: :user_followings,
    source: :following

  has_many :following_photos,
    through: :followings,
    source: :photos

  after_initialize :ensure_session_token

  def feed_photos
    following_photos.sample(12)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
