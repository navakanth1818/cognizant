-- ============================================
-- SQL Exercise 4 - Stored Procedure
-- Exercise 1 & Exercise 5
-- ============================================

USE RetailStore;
GO

SELECT * FROM Products;
GO

-- Exercise 1
CREATE PROCEDURE GetAllProducts
AS
BEGIN
    SELECT * FROM Products;
END;
GO

EXEC GetAllProducts;
GO

-- Exercise 5
CREATE PROCEDURE GetProductsByCategory
    @Category VARCHAR(50)
AS
BEGIN
    SELECT *
    FROM Products
    WHERE Category = @Category;
END;
GO

EXEC GetProductsByCategory 'Electronics';
GO

EXEC GetProductsByCategory 'Furniture';
GO

SELECT name
FROM sys.procedures;
GO