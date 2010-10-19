class Activity < ActiveRecord::Base
  def self.register(controller)
    action = controller.request.params[:action]
    if action == 'create' or action == 'update'
      a = Activity.new(:action => action, :model => controller.send(:resource_class), :model_id => controller.request.params[:id])
      a.save
      a
    end
  end
end
