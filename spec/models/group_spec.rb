require File.dirname(__FILE__) + "/../spec_helper"

describe 'Group' do
  it "should create an assembly from an agenda" do
    group = Group.make do |group|
      3.times { group.users.make }
    end
    group.users.size.should == 3
    agenda = Agenda.make!(:group => group) 
  end

end
