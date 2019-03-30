require 'test_helper'

class DegreesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @degree = degrees(:one)
  end

  test "should get index" do
    get degrees_url, as: :json
    assert_response :success
  end

  test "should create degree" do
    assert_difference('Degree.count') do
      post degrees_url, params: { degree: { name: @degree.name } }, as: :json
    end

    assert_response 201
  end

  test "should show degree" do
    get degree_url(@degree), as: :json
    assert_response :success
  end

  test "should update degree" do
    patch degree_url(@degree), params: { degree: { name: @degree.name } }, as: :json
    assert_response 200
  end

  test "should destroy degree" do
    assert_difference('Degree.count', -1) do
      delete degree_url(@degree), as: :json
    end

    assert_response 204
  end
end
