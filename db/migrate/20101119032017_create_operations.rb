class CreateOperations < ActiveRecord::Migration
  def self.up
    create_table :operations do |t|
      t.string :action, :limit => 16, :allow_nil => false
      t.string :model, :limit => 32, :allow_nil => false
      t.text :params, :allow_nil => false
      t.references :participant, :allow_nil => false
      t.references :assembly, :allow_nil => false
      t.timestamps
    end
  end

  def self.down
    drop_table :operations
  end
end
