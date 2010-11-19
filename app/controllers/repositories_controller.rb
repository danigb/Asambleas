class RepositoriesController < ApplicationController
  before_filter :authenticate_user!
  inherit_resources
  respond_to :html, :xml, :json

  def index
    @repositories = current_user.repositories
  end

  def show
    @repository = current_user.repositories.find params[:id]
    render :layout => 'repository'
  end

  def create
    @repository = current_user.repositories.build params[:repository]
    create! { repositories_path }
  end
end
