-- CREATE SCHEMA IF NOT EXISTS questions_answers;
--   CREATE TABLE IF NOT EXISTS questions(
--     id SERIAL PRIMARY KEY,
--     product_id INT,
--     question_body VARCHAR(1000),
--     question_date BIGINT,
--     email VARCHAR(60),
--     asker_name VARCHAR(60),
--     question_helpfulness INT,
--     reported BOOLEAN
--     );
--   CREATE TABLE IF NOT EXISTS answers(
--     id SERIAL PRIMARY KEY,
--     question_id INT,
--     body VARCHAR(1000),
--     date BIGINT,
--     answerer_name VARCHAR(60),
--     email VARCHAR(60),
--     reported BOOLEAN,
--     helpfulness INT,
--       FOREIGN KEY(question_id)
--         REFERENCES questions(id)
--     );
--   CREATE TABLE IF NOT EXISTS photos(
--     id SERIAL PRIMARY KEY,
--     answer_id INT,
--     url VARCHAR,
--       FOREIGN KEY(answer_id)
--         REFERENCES answers(id)
--   );

-- Seed logic
-- COPY questions("id", "product_id", "question_body", "question_date", "asker_name", "email", "reported", "question_helpfulness")
-- FROM '/Library/seed/sdc_seed_data/questions.csv' WITH DELIMITER ',' CSV HEADER

-- COPY answers("id", "question_id", "body", "date", "answerer_name", "email", "reported", "helpfulness")
-- FROM '/Library/seed/sdc_seed_data/answers.csv' WITH DELIMITER ',' CSV HEADER

-- COPY photos("id", "answer_id", "url")
-- FROM '/Library/seed/sdc_seed_data/answers_photos.csv' WITH DELIMITER ',' CSV HEADER