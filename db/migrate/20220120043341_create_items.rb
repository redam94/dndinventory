class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :weight
      t.integer :qty
      t.integer :character_id
      t.integer :container_id

      t.timestamps
    end
  end
end
