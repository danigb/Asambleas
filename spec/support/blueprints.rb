require 'machinist/active_record'
require 'sham'
require 'faker'

Sham.name  { Faker::Name.name }
Sham.password { Faker::Name.name }
Sham.email { Faker::Internet.email }
Sham.title { Faker::Lorem.sentence }

User.blueprint do
  email
  password
end

Group.blueprint do
  name
end

Agenda.blueprint do
  name
  group { Group.make }
end
