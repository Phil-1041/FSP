class Video < ApplicationRecord
  validates :title, :owner_id, presence: true

  validate :ensure_video 

  has_one_attached :video

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  #has_many likes/comments

  def ensure_video
    unless self.video.attached?
      errors[:video] << "Please choose a video"
    end
  end

end
