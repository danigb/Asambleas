class Group < ActiveRecord::Base
  has_many :users, :through => :members
  
  validates_presence_of :name
end
