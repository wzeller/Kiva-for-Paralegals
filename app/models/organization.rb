# == Schema Information
#
# Table name: organizations
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  country    :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class Organization < ActiveRecord::Base
  validates :name, :country, presence: true 

  has_many :paralegals, inverse_of: :organization

end
