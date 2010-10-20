class Participant < ActiveRecord::Base
  belongs_to :user
  belongs_to :assembly
  has_many :roles, :model_class => Rol

  validates :name, :presence => true
end
