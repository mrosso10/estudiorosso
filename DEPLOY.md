cd /var/www

git clone git@github.com:mrosso10/estudiorosso.git

rbenv install 2.3.0

gem install bundler

bundle install

sudo -u postgres psql template1

create role estudiorosso password 'estudiorosso' createdb login;
create database estudiorosso owner estudiorosso;


bundle exec hanami assets precompile

mkdir tmp/pids
mkdir tmp/sockets

# Start puma
puma -b unix://./tmp/sockets/puma.sock -e production --pidfile tmp/pids/puma.pid -d

# Restart puma
kill `cat tmp/pids/puma.pid`; puma -b unix://./tmp/sockets/puma.sock -e production --pidfile tmp/pids/puma.pid -d

bundle exec whenever --update-crontab
