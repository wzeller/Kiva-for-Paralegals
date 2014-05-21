# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string(255)      not null
#  lname           :string(255)      not null
#  password_digest :string(255)      not null
#  email           :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
attr_reader :password 
validates :fname, :lname, :password_digest, presence: :true
validates :email, :session_token, presence: true, uniqueness: true
validates :password, length: {minimum: 6, allow_nil: :true}

before_validation :ensure_session_token

def self.generate_session_token
  SecureRandom::urlBaseSafe(16)
end

def find_by_credentials(email, password)
  user = User.find_by_email(email)
  user.try(:is_password?, password) ? user : nil 
end

def password=(plainText)
  @password = plainText
  self.password_digest = BCRypt::Password.create(@password)
end

def is_password?(plaintext)
  BCRypt::Password.new(self.password_digest).is_password?(plaintext)
end

def reset_session_token!
  self.session_token = self.class.generate_session_token
  self.save!
  self.session_token 
end

private

def ensure_session_token
  self.session_token ||= self.class.generate_session_token
end

end
