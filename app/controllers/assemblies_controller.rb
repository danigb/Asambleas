class AssembliesController < InheritedResources::Base

  before_filter :authenticate_user!
  respond_to :html, :xml, :json

 
  def show
    @assembly = current_user.assemblies.find params[:id]
    render :layout => 'repository'
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
