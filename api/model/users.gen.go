// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameUser = "users"

// User mapped from table <users>
type User struct {
	ID       int64  `gorm:"column:id;type:bigint;primaryKey" json:"id"`
	UID      string `gorm:"column:uid;type:character varying(255);not null;uniqueIndex:idx_uid,priority:1;comment:LINE User ID" json:"uid"` // LINE User ID
	Name     string `gorm:"column:name;type:character varying(255);not null;uniqueIndex:idx_name,priority:1" json:"name"`
	Nickname string `gorm:"column:nickname;type:character varying(255);not null" json:"nickname"`
}

// TableName User's table name
func (*User) TableName() string {
	return TableNameUser
}
