class Character < ApplicationRecord
    belongs_to :user
    has_many :item
    validates :name, presence: true
    validates :user_id, presence: true
    validates_uniqueness_of :name, scope: :user_id
end
