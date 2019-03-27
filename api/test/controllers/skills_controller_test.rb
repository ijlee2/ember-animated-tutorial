require 'test_helper'

class SkillsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @skill = skills(:one)
  end

  test "should get index" do
    get skills_url, as: :json
    assert_response :success
  end

  test "should create skill" do
    assert_difference('Skill.count') do
      post skills_url, params: { skill: { category: @skill.category, name: @skill.name, resume_id: @skill.resume_id, synonyms: @skill.synonyms } }, as: :json
    end

    assert_response 201
  end

  test "should show skill" do
    get skill_url(@skill), as: :json
    assert_response :success
  end

  test "should update skill" do
    patch skill_url(@skill), params: { skill: { category: @skill.category, name: @skill.name, resume_id: @skill.resume_id, synonyms: @skill.synonyms } }, as: :json
    assert_response 200
  end

  test "should destroy skill" do
    assert_difference('Skill.count', -1) do
      delete skill_url(@skill), as: :json
    end

    assert_response 204
  end
end
