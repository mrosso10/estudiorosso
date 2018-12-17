class Mailers::Contact
  include Hanami::Mailer

  from    'Estudio ROSSO Web <mail@programando.com.ar>'
  to      :destination_address
  subject 'Contacto desde web'
  templates

  def destination_address
    mail_to
  end
end
