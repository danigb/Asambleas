class Agenda < ActiveRecord::Base
  has_many :topics, :order => "position"
  belongs_to :group
  has_many :assemblies

  validates :name, :presence => true
end
