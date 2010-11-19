class CreateParticipants < ActiveRecord::Migration
  def self.up
    create_table :participants do |t|
      t.string :name, :limit => 128
      t.string :description, :limit => 512
      t.references :user
      t.references :assembly
      t.string :roles, :limit => 256
      t.string :login, :limit => 64
      t.string :password, :limit => 80
      t.timestamps
    end
  end

  def self.down
    drop_table :participants
  end
end
