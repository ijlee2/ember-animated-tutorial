class ResumesController < ApplicationController
    before_action :set_resume, only: [:show, :update, :destroy]

    # GET /resumes
    def index
        @resumes = Resume.all

        # render json: @resumes
        render json: ResumeSerializer.new(@resumes).serialized_json
    end

    # GET /resumes/1
    def show
        # render json: @resume, include: [:degrees, :experiences, :skills]
        render json: ResumeSerializer.new(
            @resume,
            include: [:degrees, :experiences, :skills]
        ).serialized_json
    end

=begin
    # POST /resumes
    def create
        @resume = Resume.new(resume_params)

        if @resume.save
            render json: @resume, status: :created, location: @resume
        else
            render json: @resume.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /resumes/1
    def update
        if @resume.update(resume_params)
            render json: @resume
        else
            render json: @resume.errors, status: :unprocessable_entity
        end
    end

    # DELETE /resumes/1
    def destroy
        @resume.destroy
    end
=end

    private
        # Use callbacks to share common setup or constraints between actions.
        def set_resume
            @resume = Resume.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def resume_params
            params.require(:resume).permit(:student_id)
        end
end