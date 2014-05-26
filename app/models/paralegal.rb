# == Schema Information
#
# Table name: paralegals
#
#  id                  :integer          not null, primary key
#  name                :string(255)      not null
#  country             :string(255)      not null
#  organization_id     :integer          not null
#  created_at          :datetime
#  updated_at          :datetime
#  money               :integer
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class Paralegal < ActiveRecord::Base
  validates :name, :country, :organization_id,  presence: true 
  
  has_many :sponsorships, inverse_of: :paralegal, dependent: :destroy
  has_many :sponsors, through: :sponsorships, source: :user
  belongs_to :organization 

  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "50x50>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  validates_attachment_file_name :avatar, :matches => [/png\Z/, /jpe?g\Z/]
  
end
