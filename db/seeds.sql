INSERT INTO user (name, email, password)
VALUES ("Elfo", "imElfo@gmail.com", "password123"),
        ("Cinderella", "princess@gmail.com", "password123"),
        ("GreenGiant", "beanie@gmail.com", "password123"),
        ("Finn", "adventure@gmail.com", "password123"),
        ("Dusty", "paradise@gmail.com", "password123");

INSERT INTO post (user_id, post_header, post_body)
VALUES (2, "Theres a thing you should know", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        (4, "Theres two thing you should know", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        (5, "Theres three thing you should know", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        (1, "Theres four thing you should know", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        (3, "Theres jhsgdf thing you should know", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

INSERT INTO comment (comment_body, post_id, user_id)
VALUES ("This is a comment", 3, 2),
        ("This is a comment", 3, 3),
        ("This is a comment", 4, 4),
        ("This is a comment", 2, 3),
        ("This is a comment", 1, 5),
        ("This is a comment", 5, 1),
        ("This is a comment", 5, 2);