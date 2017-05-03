require 'rake'
require 'hanami/rake_tasks'
require 'rake/testtask'

Rake::TestTask.new do |t|
  t.pattern = 'spec/**/*_spec.rb'
  t.libs    << 'spec'
  t.warning = false
end

task default: :test
task spec: :test

task process_emails: :environment do
  puts "Procesando emails   ----------  #{Time.now}"
  repository = MessageRepository.new
  puts "A procesar: #{repository.non_delivered.count}"
  repository.non_delivered.each do |message|
    ENV['MAIL_TO'].split(';').each do |mail_to|
      Mailers::Contact.deliver(message: message, mail_to: mail_to)
    end
    repository.update(message.id, mail_delivered: true)
    puts "Procesado: #{message.to_h}"
  end
end
