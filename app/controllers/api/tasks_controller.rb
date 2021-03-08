class Api::TasksController < ApplicationController

  def index
    render json: Task.all
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task
    else
      render json: {error: task.errors}, status: :unprocessable_entity
    end
  end

  def update
    task = Task.find(params[:id])
    if task.update(task_params)
      render json: task
    else
      render json: {error: task.errors}, status: :unprocessable_entity
    end
  end
 
  def destroy
    task = Task.find(params[:id]).destroy
    render json: task
  end



  private

  def task_params
    params.require(:task).permit(:title, :description, :duedate)
  end



end
