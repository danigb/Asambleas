class ParticipantsController < InheritedResources::Base
  before_filter :authenticate_user!
  belongs_to :assembly
  actions :all, :except => [:show]

  def create
    create! { assembly_participants_path(@assembly) }
  end

  def update
    update! {assembly_participants_path(@assembly)  }
  end

  def destroy
    destroy! { assembly_participants_path(@assembly) }
  end
end
