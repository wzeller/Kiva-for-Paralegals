# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Paralegal.create({name: "Juochi Chinelo", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1450127.jpg"})
Paralegal.create({name: "Onyinye Amarchi", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1457525.jpg"})
Paralegal.create({name: "Ohanuma Ikouwem", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1594733.jpg"})
Paralegal.create({name: "Adenike Titlayomi", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1594739.jpg"})
Paralegal.create({name: "Omarsirichi Chukwubundo", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1599024.jpg"})
Paralegal.create({name: "Chata Nmesoma", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1599592.jpg"})
Paralegal.create({name: "Ashake Mitchelle", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1599835.jpg"})
Paralegal.create({name: "Nkemdiri Omosed", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1600566.jpg"})
Paralegal.create({name: "Affiong Chikimiri", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1600707.jpg"})
Paralegal.create({name: "Omolara Olusola", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1601294.jpg"})
Paralegal.create({name: "Chimezie Affiong", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1601336.jpg"})
Paralegal.create({name: "Ijioma Takira", country: "Nigeria", organization_id: 1, money: 100, avatar_file_name: "assets/KivaPhotos/1602445.jpg"})

#  id                  :integer          not null, primary key
#  name                :string(255)      not null
#  country             :string(255)      not null
#  organization_id     :integer          not null
#  created_at          :datetime
#  updated_at          :datetime
#  money               :integer
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#