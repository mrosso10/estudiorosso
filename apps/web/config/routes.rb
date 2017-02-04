# Configure your routes here
# See: http://hanamirb.org/guides/routing/overview/
#
# Example:
# get '/hello', to: ->(env) { [200, {}, ['Hello from Hanami!']] }
# get '/messages', to: 'messages#index'
# post '/messages', to: 'messages#create'
# get '/messages/:id', to: 'messages#show'
get '/', to: 'home#index', as: :root
get '/thanks', to: 'home#thanks', as: :thanks
post '/contact', to: 'home#contact'
