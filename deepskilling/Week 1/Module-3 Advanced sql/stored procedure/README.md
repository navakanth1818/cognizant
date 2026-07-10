# SQL Exercise 4 - Stored Procedure

## Exercises Completed

### Exercise 1
Create a Stored Procedure.

### Exercise 5
Return data from a Stored Procedure using an input parameter.

---

## Objective

Learn how to create reusable SQL procedures and pass parameters to retrieve filtered data.

---

## Database

RetailStore

---

## Table

Products

Columns:
- ProductID
- ProductName
- Category
- Price

---

## Stored Procedures

### 1. GetAllProducts

Returns all records from the Products table.

### 2. GetProductsByCategory

Accepts a category name as a parameter and returns only the matching products.

Example:

EXEC GetProductsByCategory 'Electronics';

EXEC GetProductsByCategory 'Furniture';

---

## SQL Concepts Used

- CREATE PROCEDURE
- Parameters
- EXEC
- SELECT
- WHERE Clause

---

## Learning Outcome

- Created Stored Procedures.
- Executed Stored Procedures.
- Passed parameters to Stored Procedures.
- Retrieved filtered data using SQL procedures.