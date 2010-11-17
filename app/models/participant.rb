class Participant < ActiveRecord::Base
  belongs_to :user
  belongs_to :assembly
  has_many :roles, :class_name => Rol

  validates :name, :presence => true
end
