class Mailers::Contact
  include Hanami::Mailer

  from    'web@estudiorosso.com.ar'
  to      'mrosso10@gmail.com'
  subject 'Email desde Web'
  templates
end
