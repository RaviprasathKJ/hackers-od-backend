-- Ensure the uuid-ossp extension is created for generating UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Define ENUM types
CREATE TYPE year_enum AS ENUM ('1', '2', '3', '4');
CREATE TYPE user_type AS ENUM ('hod','teamlead');
CREATE TYPE status_enum AS ENUM ('0', '1', '-1');
-- 0 - Pending, 1 - Approved, -1 - Rejected


-- Users Table
CREATE TABLE Users (
  user_id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  dept VARCHAR(255) NOT NULL,
  sec VARCHAR(255) NOT NULL,
  year year_enum NOT NULL
);

-- OD_Details Table
CREATE TABLE OD_Details (
  od_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE DEFAULT CURRENT_DATE,
  user_id VARCHAR(255) NOT NULL,
  reason TEXT NOT NULL,
  request_by VARCHAR(255) NOT NULL,
  status status_enum DEFAULT '0' NOT NULL,
  from_time TIME DEFAULT CURRENT_TIME, 
  to_time TIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (request_by) REFERENCES Users(user_id)
);


-- Admin Table
CREATE TABLE Admin (
  admin_id VARCHAR(255) PRIMARY KEY,
  password VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  type user_type NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

