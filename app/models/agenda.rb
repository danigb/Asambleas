class Agenda < ActiveRecord::Base
  has_many :topics, :order => "position"
end
