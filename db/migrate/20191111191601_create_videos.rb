class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description
      t.string :privacy
      t.string :tags
      t.string :language
      t.boolean :content_rate, default: false
      t.integer :owner_id, null: false
      t.timestamps
    end

    add_index :videos, :owner_id
  end
end
