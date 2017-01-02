module Web::Controllers::Home
  class Contact
    include Web::Action

    def call(params)
      redirect_to routes.thanks_path
    end
  end
end
