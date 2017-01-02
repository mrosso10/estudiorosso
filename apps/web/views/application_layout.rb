module Web
  module Views
    class ApplicationLayout
      include Web::Layout

      def device
        'hola'
      end
    end
  end
end
