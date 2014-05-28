# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  fname               :string(255)      not null
#  lname               :string(255)      not null
#  password_digest     :string(255)      not null
#  email               :string(255)      not null
#  session_token       :string(255)      not null
#  created_at          :datetime
#  updated_at          :datetime
#  team_id             :integer
#  money               :integer
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
attr_reader :password, :avatar 
validates :fname, :lname, :password_digest, presence: :true
validates :email, :session_token, presence: true, uniqueness: true
validates :password, length: {minimum: 6, allow_nil: :true}

before_validation :ensure_session_token

belongs_to :team
has_many :sponsorships, inverse_of: :user, dependent: :destroy 
has_many :paralegals, through: :sponsorships, source: :paralegal

has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "50x50>" }, :default_url => "/images/:style/guest.jpg"
validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
validates_attachment_file_name :avatar, :matches => [/png\Z/, /jpe?g\Z/]

def self.generate_session_token
  SecureRandom::urlsafe_base64(16)
end

def self.find_by_credentials(email, password)
  user = User.find_by_email(email)
  user.try(:is_password?, password) ? user : nil 
end

def password=(plainText)
  @password = plainText
  self.password_digest = BCrypt::Password.create(@password)
end

def is_password?(plaintext)
  BCrypt::Password.new(self.password_digest).is_password?(plaintext)
end

def reset_session_token!
  self.session_token = self.class.generate_session_token
  self.save!
  self.session_token 
end

def total_sponsorships
  donations = self.sponsorships.map{|sponsorship| sponsorship.donation}
  donations.inject{|sum, donation| sum + donation}
end

private

def ensure_session_token
  self.session_token ||= self.class.generate_session_token
end

end
