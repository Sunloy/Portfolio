-- Existing tables
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level_percent VARCHAR(10) NOT NULL,
    color VARCHAR(50) DEFAULT 'bg-blue-500',
    display_order SERIAL
);

CREATE TABLE IF NOT EXISTS experience (
    id SERIAL PRIMARY KEY,
    role VARCHAR(100) NOT NULL,
    company VARCHAR(100) NOT NULL,
    period VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    display_order SERIAL
);

CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    paragraph1 TEXT NOT NULL,
    paragraph2 TEXT,
    display_order SERIAL
);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    icon_name VARCHAR(50) DEFAULT 'FiCode',
    border_color VARCHAR(50) DEFAULT 'border-blue-500',
    display_order SERIAL
);

CREATE TABLE IF NOT EXISTS work_projects (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    image_url TEXT NOT NULL,
    display_order SERIAL
);

-- NEW: Users table for authentication
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
