require 'spec_helper'
require_relative '../../../../apps/web/controllers/messages/index'

describe Web::Controllers::Messages::Index do
  let(:action) { Web::Controllers::Messages::Index.new }
  let(:params) { Hash[] }

  it 'is successful' do
    response = action.call(params)
    response[0].must_equal 200
  end
end
