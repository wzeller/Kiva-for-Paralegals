# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class Team < ActiveRecord::Base
  
  validates :name, presence: true 

  has_many :members,
    foreign_key: :team_id,
    class_name: "User"

end
