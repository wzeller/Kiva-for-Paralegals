class AddColtoSponsors < ActiveRecord::Migration
  def change
    add_column :sponsorships, :donation, :integer
  end
end
