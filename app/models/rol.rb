class Rol < ActiveRecord::Base
  belongs_to :participant

  OWNER = 'owner'
end
