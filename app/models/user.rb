# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :name, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true
  
  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(name, password)
    user = User.findy_by(name: name)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = unique_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= unique_session_token
  end

  def random_session_token
    SecureRandom.urlsafe_base64
  end

  def unique_session_token
    random_token = random_session_token
    while (User.find_by(session_token: random_token))
      random_token = unique_session_token
    end
    random_token
  end

end
