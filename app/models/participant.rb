class Participant < ActiveRecord::Base
  belongs_to :user
  belongs_to :assembly

  validates :name, :presence => true
end
