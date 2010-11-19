# Read about factories at http://github.com/thoughtbot/factory_girl

Factory.define :operation do |f|
  f.action "MyString"
  f.model "MyString"
  f.params "MyText"
  f.user nil
end
