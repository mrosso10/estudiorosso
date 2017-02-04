module Web::Controllers::Home
  class Contact
    include Web::Action

    def call(params)
      MessageRepository.new.create(name: params[:nombre], email: params[:email], telephone: params[:telefono], message: params[:mensaje])
      redirect_to routes.thanks_path
    end
  end
end
