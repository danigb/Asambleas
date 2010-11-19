class OperationsController < InheritedResources::Base
  before_filter :authenticate_user!
  belongs_to :assembly
  actions :all, :except => [:show]
  respond_to :html, :xml, :json

  def create
    # TODO: ensure currect (use cancan)
    current_user.participants.find(params[:operation][:participant_id])

    create! do |format|
      format.html { assembly_operations_path(@assembly) }
      format.json { render :json => @operation}
      format.xml { render :xml => @operation }
    end
  end

  def update
    update! {assembly_operations_path(@assembly)  }
  end

  def destroy
    destroy! { assembly_operations_path(@assembly) }
  end
end
