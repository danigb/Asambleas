class Agenda < ActiveRecord::Base
  has_many :topics, :order => "position"
  belongs_to :group
  has_many :assemblies

  validates_presence_of :name, :group
end
