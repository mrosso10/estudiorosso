source 'https://rubygems.org'

gem 'bundler'
gem 'rake'
gem 'hanami',       '~> 0.9'
gem 'hanami-model', '~> 0.7'

gem 'pg'

gem 'slim'
gem 'puma', '~> 3.12.4'
gem 'sass'
gem 'bootstrap-sass'
gem 'font-awesome-sass'
gem 'jquery-hanami'
gem 'device_detector'
gem 'letter_opener'

gem 'whenever', require: false

group :development do
  # Code reloading
  # See: http://hanamirb.org/guides/projects/code-reloading
  gem 'shotgun'
end

group :test, :development do
  gem 'dotenv', '~> 2.0'
  gem 'byebug'
  gem 'letter_opener'
end

group :test do
  gem 'minitest'
  gem 'capybara'
end

group :production do
  # gem 'puma'
end
