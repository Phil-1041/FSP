class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :video_id, null: false
      t.integer :owner_id, null: false
      t.integer :comment_id
      t.timestamps
    end

    add_index :comments, :video_id
    add_index :comments, :owner_id
  end
end
