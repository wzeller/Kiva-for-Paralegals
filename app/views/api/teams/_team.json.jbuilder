json.(team, :id, :name, :avatar)

members ||= nil

unless members.nil?
  json.members(members) do |member|
    json.partial!("api/users/user", :user => member)
  end
end

