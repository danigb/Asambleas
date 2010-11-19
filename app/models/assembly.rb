class Assembly < ActiveRecord::Base
  belongs_to :agenda
  has_many :participants
  has_many :users,  :through => :participants
  belongs_to :user
  after_create :add_participant

  validates :user, :presence => true
  has_many :operations

  
  private
  def add_participant
    participants.create!(:user => self.user, :name => self.user.name, :roles => 'owner')
  end

end
