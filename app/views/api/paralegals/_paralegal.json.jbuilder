json.(paralegal, :id, :name, :country, :money, :avatar_file_name)

sponsors ||= nil

unless sponsors.nil?
  json.sponsors(sponsors) do |sponsor|
    json.partial!("api/users/user", :user => sponsor)
  end
end




