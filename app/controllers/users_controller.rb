class UsersController < ApplicationController
  inherit_resources
  before_filter :authenticate_user!
  after_filter { |controller| @activity = Activity.register(controller) }
  respond_to :html, :xml, :json
  

end
