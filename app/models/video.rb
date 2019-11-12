class Video < ApplicationRecord
  validates :title, :owner_id, presence: true

  has_one_attached :video

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  #has_many likes/comments

end
