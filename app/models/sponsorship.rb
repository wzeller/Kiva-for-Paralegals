# == Schema Information
#
# Table name: sponsorships
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  paralegal_id :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

class Sponsorship < ActiveRecord::Base
  validates :user, :paralegal, presence: true 
  
  belongs_to :user, inverse_of: :sponsorships
  belongs_to :paralegal, inverse_of: :sponsorships
end
