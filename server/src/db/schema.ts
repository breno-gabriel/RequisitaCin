import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull().unique(),
    password: varchar("password").notNull(),
})

export const studentTable = pgTable("student", {
    student_id: integer("student_id").notNull().references(() => userTable.id).primaryKey(),
    course: varchar("course").notNull(),
})

export const adminTable = pgTable("admin", {
    admin_id: integer("admin_id").notNull().references(() => userTable.id).primaryKey(),
    sector_id: integer("sector_id").notNull().references(() => sectorTable.sector_id),
})

export const requestTable = pgTable("request", {
    request_id: integer("request_id").notNull().references(() => userTable.id),
    student_id: integer("student_id").notNull().references(() => studentTable.student_id),
    sector_id: integer("sector_id").notNull().references(() => sectorTable.sector_id),
    title: varchar("title").notNull(),
    description: varchar("description").notNull(),
    status: varchar("status").notNull(),
    created_at: varchar("created_at").notNull(),
    finished_at: varchar("finished_at").notNull(),

})

export const sectorTable = pgTable("sector", {
    sector_id: integer("sector_id").primaryKey(),
    sector: varchar("sector").notNull(),
})

export const serviceTable = pgTable("service", {
    service_id: integer("service_id").notNull().references(() => adminTable.admin_id),
    service: varchar("service").notNull(),
    sector_id: integer("sector_id").notNull().references(() => sectorTable.sector_id),
})