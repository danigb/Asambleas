class AgendasController < InheritedResources::Base
  before_filter :authenticate_user!
  after_filter { |controller| @activity = Activity.register(controller) }
  
end
