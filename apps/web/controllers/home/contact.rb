module Web::Controllers::Home
  class Contact
    include Web::Action

    def call(params)
      Mailers::Contact.deliver(params: params)
      redirect_to routes.thanks_path
    end
  end
end
