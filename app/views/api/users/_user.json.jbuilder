json.(user, :id, :fname, :lname, :email, :team_id, :money, :avatar_file_name, :avatar, :total_sponsorships)

paralegals ||= nil

unless paralegals.nil?
  json.paralegals(paralegals) do |paralegal|
    json.partial!("api/paralegals/paralegal", :paralegal => paralegal)
  end
end

teams ||= nil

unless teams.nil?
  json.teams(teams) do |team|
    json.partial!("api/teams/team", :team => team)
  end
end