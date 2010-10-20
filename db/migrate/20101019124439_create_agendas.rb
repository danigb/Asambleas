class CreateAgendas < ActiveRecord::Migration
  def self.up
    create_table :agendas do |t|
      t.string :name, :limit => 256
      t.string :state, :limit => 32
      t.references :group
      t.timestamps
    end
  end

  def self.down
    drop_table :agendas
  end
end
