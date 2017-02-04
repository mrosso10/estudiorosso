class Mailers::Contact
  include Hanami::Mailer

  from    'web@estudiorosso.com.ar'
  to      ENV['MAIL_TO']
  subject 'Email desde Web'
  templates
end
