class Mailers::Contact
  include Hanami::Mailer

  from    'web@estudiorosso.com.ar'
  to      :destination_address
  subject 'Email desde Web'
  templates

  def destination_address
    mail_to
  end
end
