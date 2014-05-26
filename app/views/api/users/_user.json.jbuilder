json.(user, :id, :fname, :lname, :email, :team_id, :money, :avatar_file_name, :avatar)

paralegals ||= nil

unless paralegals.nil?
  json.paralegals(paralegals) do |paralegal|
    json.partial!("api/paralegals/paralegal", :paralegal => paralegal)
  end
end