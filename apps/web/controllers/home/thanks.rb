module Web::Controllers::Home
  class Thanks
    include Web::Action

    def call(params)
      if request.referer.nil?
        redirect_to routes.root_path
      end
    end
  end
end
