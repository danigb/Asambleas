class CreateAssemblies < ActiveRecord::Migration
  def self.up
    create_table :assemblies do |t|
      t.string :title, :limit => 256
      t.references :user

      t.timestamps
    end
  end

  def self.down
    drop_table :assemblies
  end
end
