CREATE TABLE productsTable (
product_id varchar(200),
product_name varchar(200),
description varchar(300),
price Money,
discount DECIMAL,
imageUrl varchar(300),
instore varchar(300) DEFAULT 'yes'
)
