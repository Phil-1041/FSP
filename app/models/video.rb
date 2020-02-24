# == Schema Information
#
# Table name: videos
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :string
#  privacy      :string
#  tags         :string
#  language     :string
#  content_rate :boolean          default(FALSE)
#  owner_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

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
