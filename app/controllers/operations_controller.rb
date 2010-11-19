class OperationsController < InheritedResources::Base
  before_filter :authenticate_user!
  belongs_to :assembly
  actions :all, :except => [:show]
  respond_to :html, :xml, :json
  
  URL = 'http://api.beaconpush.com/1.0.0/5ed7901c/channels/asamblea'

  def create
    # TODO: ensure currect (use cancan)
    participant_id = params[:operation][:participant_id]
    current_user.participants.find(participant_id)

    create! do |format|
      data = {:type => 'action',
        :participant_id => participant_id, :assembly_id => params[:assembly_id],
        :operation => @operation
      }
      RestClient.post URL + params[:assembly_id], data.to_json, :content_type => :json, :accept => :json

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
