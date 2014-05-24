json.array!(@paralegals) do |paralegal|
  json.partial!("paralegal", :paralegal => paralegal )
end 