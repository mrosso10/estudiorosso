module Web
  module DeviceDetect
    def self.included(action)
      action.class_eval do
        expose :current_device
      end
    end

    private

    def current_device
      DeviceDetector.new(request.user_agent).device_type
    end
  end
end