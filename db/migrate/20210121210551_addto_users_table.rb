class AddtoUsersTable < ActiveRecord::Migration[5.2]
  def change

    add_column :users, :gender, :string, null: false
    add_column :users, :age, :integer, null: false
  end
end
