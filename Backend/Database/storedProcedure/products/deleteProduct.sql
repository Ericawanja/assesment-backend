
CREATE OR ALTER PROCEDURE deleteProduct (@product_id varchar(200) )
AS
BEGIN
UPDATE productsTable set instore ='no' where product_id= @product_id
END