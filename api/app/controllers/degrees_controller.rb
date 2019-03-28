class DegreesController < ApplicationController
    before_action :set_degree, only: [:show, :update, :destroy]

    # GET /degrees
    def index
        @degrees = Degree.all

        render json: ResumeSerializer.new(@degrees).serialized_json
    end

    # GET /degrees/1
    def show
        render json: ResumeSerializer.new(@degree).serialized_json
    end

    # POST /degrees
    def create
        @degree = Degree.new(degree_params)

        if @degree.save
            render json: @degree, status: :created, location: @degree
        else
            render json: @degree.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /degrees/1
    def update
        if @degree.update(degree_params)
            render json: @degree
        else
            render json: @degree.errors, status: :unprocessable_entity
        end
    end

    # DELETE /degrees/1
    def destroy
        @degree.destroy
    end

    private
        # Use callbacks to share common setup or constraints between actions.
        def set_degree
            @degree = Degree.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def degree_params
            params.require(:degree).permit(:name, :resume_id)
        end
end