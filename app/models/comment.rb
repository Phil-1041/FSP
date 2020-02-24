# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  video_id   :integer          not null
#  owner_id   :integer          not null
#  comment_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :video_id, :owner_id, presence: true

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

end
