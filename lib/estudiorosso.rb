Hanami::Utils.require!("#{__dir__}/estudiorosso")

Hanami::Mailer.configure do
  # ...
  delivery do
    development LetterOpener::DeliveryMethod, :location => File.expand_path('../../tmp/letter_opener', __FILE__)
    test        :test
    production  :smtp,
      address:              ENV['SMTP_HOST'],
      port:                 587,
      # domain:               "bookshelf.org",
      user_name:            ENV['SMTP_USERNAME'],
      password:             ENV['SMTP_PASSWORD'],
      authentication:       "plain",
      enable_starttls_auto: true
  end
end.load!
