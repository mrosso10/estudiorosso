Hanami::Model.migration do
  change do
    create_table :messages do
      primary_key :id
      column :name,  String
      column :email, String
      column :telephone, String
      column :message, String
      column :created_at, DateTime
      column :updated_at, DateTime
    end
  end
end
