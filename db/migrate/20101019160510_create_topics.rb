class CreateTopics < ActiveRecord::Migration
  def self.up
    create_table :topics do |t|
      t.integer :position
      t.string :name, :limit => 125
      t.string :description, :limit => 512
      t.references :agenda

      t.timestamps
    end
  end

  def self.down
    drop_table :topics
  end
end
