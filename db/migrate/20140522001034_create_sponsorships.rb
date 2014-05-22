class CreateSponsorships < ActiveRecord::Migration
  def change
    create_table :sponsorships do |t|
      t.integer :user_id, null:false 
      t.integer :paralegal_id, null:false 

      t.timestamps
    end
  end
end
