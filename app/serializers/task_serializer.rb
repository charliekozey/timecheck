class TaskSerializer < ActiveModel::Serializer
  attributes :id, :task_name, :expected_time, :actual_time
end
