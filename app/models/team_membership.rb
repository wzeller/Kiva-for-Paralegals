# == Schema Information
#
# Table name: team_memberships
#
#  id         :integer          not null, primary key
#  team_id    :integer
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class TeamMembership < ActiveRecord::Base

  validates :user, :team, presence: true 
  belongs_to :user, inverse_of: :team_memberships
  belongs_to :team, inverse_of: :team_memberships

end
