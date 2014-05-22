class AddMoneyToUsers < ActiveRecord::Migration
  def change
    add_column :users, :money, :integer
    add_column :paralegals, :money, :integer
  end
end
