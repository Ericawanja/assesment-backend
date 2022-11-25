CREATE OR ALTER PROCEDURE getAllProducts 
AS 
BEGIN
select * from productsTable where instore= 'yes'
END

