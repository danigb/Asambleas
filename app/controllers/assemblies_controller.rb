class AssembliesController < InheritedResources::Base

  before_filter :authenticate_user!
  respond_to :html, :xml, :json

 
  def show
    @assembly = current_user.assemblies.find params[:id]
    if params[:participant_id]
      @participant = @assembly.participants.find(params[:participant_id])
    else
      @participant = @assembly.default_participant(current_user)
    end
    render :layout => 'client'
  end

  def create
    create! { assemblies_path }
  end

  def update
    params[:user_id] = current_user.id
    update! { assemblies_path }
  end

  protected
  def begin_of_association_chain
    current_user
  end

end
