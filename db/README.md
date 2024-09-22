# How to use atlas

## How to create schmea.hcl
※ This operation only needs to be performed the first time.

```shell
atlas schema inspect --env gen > db/schema.hcl
```

## How to create migration file

1. update schme.hcl

Here is example.

```diff:schema.hcl
+ table "users" {
+  schema = schema.public
+  column "id" {
+    type = bigint
+  }
+  column "name" {
+    type = varchar(255)
+    null = false
+  }
+  primary_key {
+    columns = [
+      column.id
+    ]
+  }
+  index "idx_name" {
+    columns = [
+      column.name
+    ]
+    unique = true
+  }
+}
```


2. create migration file

`atlas migrate diff <migration_name> --env gen`

## How to apply migration

```shell
atlas migrate apply --env gen
```
