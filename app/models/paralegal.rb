# == Schema Information
#
# Table name: paralegals
#
#  id              :integer          not null, primary key
#  name            :string(255)      not null
#  country         :string(255)      not null
#  organization_id :integer          not null
#  created_at      :datetime
#  updated_at      :datetime
#  money           :integer
#

class Paralegal < ActiveRecord::Base
  validates :name, :country, :organization_id,  presence: true 
  
  has_many :sponsorships, inverse_of: :paralegal
  has_many :sponsors, through: :sponsorships, source: :user
  belongs_to :organization 
end
