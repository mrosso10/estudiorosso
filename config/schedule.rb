# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
env :PATH, ENV['PATH']
env :GEM_PATH, ENV['GEM_PATH']
set :output, "tmp/cron_log.log"
set :environment_variable, "HANAMI_ENV"
# set :environment, "development"
#
every 1.minute do
  rake "process_emails"
end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever
