class NonResourcefulController < ApplicationController
    # GET /search (queryParams: skillIds)
    def search
        render json: {
            foo: 'bar'
        }
    end
end