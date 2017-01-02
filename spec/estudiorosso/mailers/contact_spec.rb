require 'spec_helper'

describe Mailers::Contact do
  it 'delivers email' do
    mail = Mailers::Contact.deliver
  end
end
