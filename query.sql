create table users (
	id serial primary key,
	sEmail varchar(100) not null,
	spasswork varchar(100) not null,
	sname varchar(100) not null,
	avatar varchar(100) not null, 
	roles varchar(100) default ("user")
);

CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id INT REFERENCES users(id),  -- foreign key reference to users table
    time_up DATE NOT NULL,  -- assuming this is the publication date
    is_watched INT DEFAULT 0
);

số lượng comment và số lượng like






cm
id-user
id-blog
content
time
CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),  -- foreign key reference to the users table
    blog_id INT REFERENCES blog(id),   -- foreign key reference to the blog table
    content TEXT NOT NULL,
    time_up TIMESTAMP NOT NULL  -- timestamp for the time the comment was posted
);

report
id-blog
id-user
content

CREATE TABLE report (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),  -- foreign key reference to the users table
    blog_id INT REFERENCES blog(id),   -- foreign key reference to the blog table
    content TEXT NOT NULL,
    time_up TIMESTAMP NOT NULL  -- timestamp for the time the comment was posted
);

like 
id-user
id-blog
time

CREATE TABLE likeBlog (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),  -- foreign key reference to the users table
    blog_id INT REFERENCES blog(id),   -- foreign key reference to the blog tabl
    time_up TIMESTAMP NOT NULL  -- timestamp for the time the comment was posted
);

frend
id-one
id-two
time
status (0,1, block)


chat 




blog 
id 
content
id-user
time
count (like)
count (coment)

