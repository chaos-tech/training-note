-- Create "users" table
CREATE TABLE "users" (
  "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
  "uid" character varying(255) NOT NULL,
  "name" character varying(255) NOT NULL,
  "nickname" character varying(255) NOT NULL,
  PRIMARY KEY ("id")
);
-- Create index "idx_name" to table: "users"
CREATE UNIQUE INDEX "idx_name" ON "users" ("name");
-- Create index "idx_uid" to table: "users"
CREATE UNIQUE INDEX "idx_uid" ON "users" ("uid");
-- Set comment to column: "uid" on table: "users"
COMMENT ON COLUMN "users"."uid" IS 'LINE User ID';
