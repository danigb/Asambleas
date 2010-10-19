class TopicsController < InheritedResources::Base
  belongs_to :agenda
  before_filter :authenticate_user!
  after_filter { |controller| @activity = Activity.register(controller) }


  def update
    update! {agenda_path(@agenda)}
  end

  def create
    create! {agenda_path(@agenda)}
  end

  def destroy
    destroy! {agenda_path(@agenda)}
  end

end
