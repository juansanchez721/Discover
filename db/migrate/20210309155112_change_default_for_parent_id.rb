class ChangeDefaultForParentId < ActiveRecord::Migration[5.2]
  def change
    change_column_default :comments, :parent_comment_id, nil
  end
end
