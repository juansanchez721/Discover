class User < ApplicationRecord

    validates :username, :email, :age, :gender, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :tracks,
    foreign_key: :owner_id,
    class_name: :Track,
    dependent: :destroy

    has_one_attached :photo

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def self.search(word)
            User.exists?(email: word)
    end

end
