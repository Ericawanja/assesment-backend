-- getOne product

CREATE OR ALTER PROCEDURE getOneProduct (@product_id varchar(300))
AS
BEGIN
SELECT * FROM productsTable where product_id = @product_id
END