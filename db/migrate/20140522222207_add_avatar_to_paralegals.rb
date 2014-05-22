class AddAvatarToParalegals < ActiveRecord::Migration
  def self.up
    add_attachment :paralegals, :avatar
  end

  def self.down
    remove_attachment :paralegals, :avatar
  end
end
