class Topic < ActiveRecord::Base
  belongs_to :agenda
  acts_as_list :scope => :agenda
end
