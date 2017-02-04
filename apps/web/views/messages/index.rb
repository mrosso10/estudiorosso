module Web::Views::Messages
  class Index
    include Web::View

    layout :admin

    def collection
      MessageRepository.new.all
    end
  end
end
