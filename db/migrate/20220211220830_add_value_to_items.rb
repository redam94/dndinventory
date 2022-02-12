class AddValueToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :value, :integer
  end
end
