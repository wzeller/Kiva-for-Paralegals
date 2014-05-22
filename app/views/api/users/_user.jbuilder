json.extract! user, :id, :fname, :lname, :email, :money, :avatar_file_name
json.paralegals user.paralegals, partial 'api/paralegals/paralegal', as :paralegal

