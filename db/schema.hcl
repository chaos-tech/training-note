schema "public" {
  comment = "standard public schema"
}

table "users" {
  schema = schema.public
  column "id" {
    type = bigint
    null = false
    identity {
      generated = ALWAYS
    }
  }
  column "uid" {
    type = varchar(255)
    comment = "LINE User ID"
  }
  column "name" {
    type = varchar(255)
    null = false
  }
  column "nickname" {
    type = varchar(255)
    null = false
  }
  primary_key {
    columns = [column.id]
  }
  index "idx_name" {
    columns = [column.name]
    unique = true
  }
  index "idx_uid" {
    columns = [column.uid]
    unique = true
  }
}
