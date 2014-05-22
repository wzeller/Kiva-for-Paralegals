class CreateParalegals < ActiveRecord::Migration
  def change
    create_table :paralegals do |t|
      t.string :name, null:false 
      t.string :country, null:false 
      t.integer :organization_id, null:false 

      t.timestamps
    end
  end
end
