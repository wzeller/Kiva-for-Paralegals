json.extract! paralegal, :id, :name, :country, :money, :avatar_file_name
json.sponsors paralegal.sponsors, partial 'api/users/user', as :user


