class Operation < ActiveRecord::Base
  belongs_to :participant
  belongs_to :assembly

  validates :action, :presence => true
  validates :model, :presence => true
  validates :params, :presence => true
  validates :participant, :presence => true
  validates :assembly, :presence => true
end
