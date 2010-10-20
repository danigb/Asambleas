class CreateAssemblies < ActiveRecord::Migration
  def self.up
    create_table :assemblies do |t|
      t.string :name
      t.references :agenda

      t.timestamps
    end
  end

  def self.down
    drop_table :assemblies
  end
end
