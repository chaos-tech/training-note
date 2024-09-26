variable "db_host" {
  type    = string
  default = getenv("DB_HOST")
}

variable "db_port" {
  type    = string
  default = getenv("DB_PORT")
}

variable "db_user" {
  type    = string
  default = getenv("DB_USER")
}

variable "db_pass" {
  type    = string
  default = getenv("DB_PASS")
}

variable "db_name" {
  type    = string
  default = getenv("DB_NAME")
}

variable "sslmode" {
  type    = string
  default = getenv("DB_SSLMODE")
}

env "gen" {
  // Declare where the schema definition resides.
  src = "file://db/schema.hcl"

  // Define the URL of the database which is managed in this environment.
  url = "postgres://${var.db_user}:${var.db_pass}@${var.db_host}:${var.db_port}/${var.db_name}?search_path=public&sslmode=${var.sslmode}"

  // Define the URL of the Dev Database for this environment
  // See: https://atlasgo.io/concepts/dev-database
  dev = "docker://postgres/16/dev?search_path=public"

  dir = "./db/migrations"

  format {
    migrate {
      diff = "{{ sql . \"  \" }}"
    }
  }

  migration {
    dir = "file://db/migrations" # The URL to the migration directory.
  }

  diff {
    skip {
      drop_table  = false # true: do not generate `drop table SQL` migration file.
      drop_schema = true  # true: do not generate `drop schema SQL` migration file.
    }
  }
}

lint {
  non_linear {
    error = true # detects non-linear changes and cause migration linting to fail.
  }
  destructive {
    error = false # detects destuctive changes but not cause migration linting to fail
  }
  data_depend {
    error = false # detects data dependent changes but not cause migration linting to fail
  }
  incompatible {
    error = false # detects incompatible changes but not cause migration linting to fail
  }
}
