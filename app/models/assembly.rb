class Assembly < ActiveRecord::Base
  belongs_to :agenda
  has_many :participants
  has_many :users,  :through => :participants
end
