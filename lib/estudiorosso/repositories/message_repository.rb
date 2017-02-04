class MessageRepository < Hanami::Repository
  def non_delivered
    messages.where(mail_delivered: false)
  end
end
