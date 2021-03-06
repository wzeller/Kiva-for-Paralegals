# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140530052442) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "organizations", force: true do |t|
    t.string   "name",       null: false
    t.string   "country",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "paralegals", force: true do |t|
    t.string   "name",                null: false
    t.string   "country",             null: false
    t.integer  "organization_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "money"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "sponsorships", force: true do |t|
    t.integer  "user_id",      null: false
    t.integer  "paralegal_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "donation"
  end

  create_table "team_memberships", force: true do |t|
    t.integer  "team_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "teams", force: true do |t|
    t.string   "name",                null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "fname",               null: false
    t.string   "lname",               null: false
    t.string   "password_digest",     null: false
    t.string   "email",               null: false
    t.string   "session_token",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "team_id"
    t.integer  "money"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["team_id"], name: "index_users_on_team_id", using: :btree

end
