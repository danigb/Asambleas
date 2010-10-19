class Activity < ActiveRecord::Base
  def self.register(controller)
    action = controller.request.params[:action]
    if action == 'create' or action == 'update' or action == 'destroy'
      model_id = action == 'create' ? nil : controller.request.params[:id]
      a = Activity.new(:action => action, :model => controller.send(:resource_class), :model_id => model_id)
      a.save
      a
    end
  end
end
