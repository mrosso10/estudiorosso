class Mailers::Contact
  include Hanami::Mailer

  from    '<from>'
  to      '<to>'
  subject 'Hello'
end
