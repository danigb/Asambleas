class Operation < ActiveRecord::Base
  belongs_to :user
  belongs_to :assembly

  validates :action, :presence => true
  validates :model, :presence => true
  validates :params, :presence => true
  validates :user, :presence => true
  validates :assembly, :presence => true
end
