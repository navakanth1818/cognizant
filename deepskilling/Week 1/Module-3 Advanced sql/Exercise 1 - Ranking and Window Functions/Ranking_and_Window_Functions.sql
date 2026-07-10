-- Create Database
CREATE DATABASE EmployeeManagement;
GO

USE EmployeeManagement;
GO

-- Create Departments Table
CREATE TABLE Departments
(
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

-- Create Employees Table
CREATE TABLE Employees
(
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE,

    FOREIGN KEY (DepartmentID)
    REFERENCES Departments(DepartmentID)
);

-- Insert Departments

INSERT INTO Departments
VALUES
(1,'HR'),
(2,'Finance'),
(3,'IT'),
(4,'Marketing');

-- Insert Employees

INSERT INTO Employees
VALUES
(1,'John','Doe',1,5000,'2020-01-15'),
(2,'Jane','Smith',2,6000,'2019-03-22'),
(3,'Michael','Johnson',3,7000,'2018-07-30'),
(4,'Emily','Davis',4,5500,'2021-11-05'),
(5,'David','Brown',3,6500,'2022-05-10'),
(6,'Sophia','Wilson',2,6000,'2023-01-18');

------------------------------------------------
-- ROW_NUMBER()
------------------------------------------------

SELECT
EmployeeID,
FirstName,
LastName,
Salary,

ROW_NUMBER()
OVER(ORDER BY Salary DESC)
AS RowNumber

FROM Employees;

------------------------------------------------
-- RANK()
------------------------------------------------

SELECT
EmployeeID,
FirstName,
LastName,
Salary,

RANK()
OVER(ORDER BY Salary DESC)
AS RankNumber

FROM Employees;

------------------------------------------------
-- DENSE_RANK()
------------------------------------------------

SELECT
EmployeeID,
FirstName,
LastName,
Salary,

DENSE_RANK()
OVER(ORDER BY Salary DESC)
AS DenseRank

FROM Employees;