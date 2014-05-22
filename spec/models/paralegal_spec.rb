# == Schema Information
#
# Table name: paralegals
#
#  id              :integer          not null, primary key
#  name            :string(255)      not null
#  country         :string(255)      not null
#  organization_id :integer          not null
#  created_at      :datetime
#  updated_at      :datetime
#

require 'spec_helper'

describe Paralegal do
  pending "add some examples to (or delete) #{__FILE__}"
end
