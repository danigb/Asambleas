require 'factory_girl'

Factory.define :user do |u|
  u.email {Factory.next(:email)}
end