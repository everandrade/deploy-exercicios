-- Active: 1678383253790@@127.0.0.1@1433

CREATE TABLE courses (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    lessons INTEGER NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO courses (id, name, lessons, created_at)
VALUES
	("c001", "React", 12, "09/03/2023 11:20"),
	("c002", "HTML", 8, "09/03/2023 10:20"),
	("c003", "CSS", 3, "09/03/2023 13:20");
	
CREATE TABLE students (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    age INTEGER DEFAULT (0) NOT NULL
);

INSERT INTO students (id, name, age)
VALUES
    ("s001", "Paulo", 12),
    ("s002", "Carlos", 14),
    ("s003", "Fábio", 16);