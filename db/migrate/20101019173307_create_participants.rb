class CreateParticipants < ActiveRecord::Migration
  def self.up
    create_table :participants do |t|
      t.string :name, :limit => 16
      t.string :color, :limit => 8
      t.references :user
      t.references :assembly

      t.timestamps
    end
  end

  def self.down
    drop_table :participants
  end
end
