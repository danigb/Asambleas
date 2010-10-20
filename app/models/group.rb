class Group < ActiveRecord::Base
  has_many :members
  has_many :users, :through => :members

  validates :name, :presence => true

  def create_assembly(agenda)
    assembly = nil
    Group.transaction do
      assembly = agenda.assemblies.create!(:name => "#{self.name} - #{agenda.name}")
      self.users do |user|
        participant = assembly.participants.create!(:user => user, :name => user.name)
        participant.roles.create!(:name => Rol::OWNER)
      end 
    end
    assembly
  end

end
