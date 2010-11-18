class CreateRepositories < ActiveRecord::Migration
  def self.up
    create_table :repositories do |t|
      t.string :name, :limit => 300
      t.timestamps
    end
  end

  def self.down
    drop_table :repositories
  end
end
