json.array!(@teams) do |team|
  json.partial!("team", :team=> team, :members=> team.team_members )
end 