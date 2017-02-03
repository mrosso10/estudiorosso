class Mailers::Contact
  include Hanami::Mailer

  from    'web@estudiorosso.com.ar'
  to      'mariana@estudiorosso.com.ar'
  subject 'Email desde Web'
  templates
end
