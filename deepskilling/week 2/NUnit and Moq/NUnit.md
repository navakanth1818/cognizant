# NUnit Framework - Complete Notes

## Introduction

Testing is an important part of software development. It helps us verify that our application works correctly and meets the expected requirements. Testing also helps identify bugs before the software is delivered to users.

---

# What is Testing?

Testing is the process of checking whether a software application works as expected.

The main objectives of testing are:

- Find defects and bugs.
- Verify that the application meets requirements.
- Improve software quality.
- Increase user confidence.

---

# Types of Testing

Testing is mainly divided into two types.

## 1. Manual Testing

In Manual Testing, a tester executes the test cases manually without using any automation tools.

### Advantages

- Easy to perform.
- Suitable for small applications.
- Human observation helps identify UI issues.

### Disadvantages

- Time consuming.
- Repetitive tasks become boring.
- Not suitable for large projects.

---

## 2. Automated Testing

Automated Testing uses testing tools or frameworks to execute test cases automatically.

Examples:
- NUnit
- xUnit
- MSTest
- Selenium

### Advantages

- Faster execution.
- Reusable test cases.
- Less human effort.
- Better accuracy.
- Suitable for regression testing.

### Disadvantages

- Initial setup takes time.
- Requires programming knowledge.

---

# Benefits of Automated Testing

- Saves testing time.
- Reduces manual effort.
- Improves software quality.
- Detects bugs quickly.
- Easy to repeat tests.

---

# Unit Testing

Unit Testing is the process of testing a small piece (unit) of code independently.

A unit can be:

- Method
- Function
- Class

Each unit is tested separately without depending on other parts of the application.

### Example

```csharp
public int Add(int a, int b)
{
    return a + b;
}
```

The Add() method can be tested independently.

---

# Test Pyramid

The Test Pyramid shows the recommended distribution of different types of tests.

```
       UI Tests
     -------------
 Integration Tests
----------------------
      Unit Tests
```

### Explanation

- Unit Tests are maximum because they are fast.
- Integration Tests are fewer.
- UI Tests are minimum because they are slow.

---

# What is NUnit?

NUnit is an open-source Unit Testing framework for .NET applications.

It helps developers write automated test cases to verify application functionality.

---

# Why use NUnit?

- Easy to write tests.
- Supports automation.
- Generates test reports.
- Integrates with Visual Studio.
- Improves code quality.

---

# NUnit Attributes

Attributes tell NUnit how a method should behave.

## [TestFixture]

Marks a class as a test class.

Example

```csharp
[TestFixture]
public class CalculatorTests
{

}
```

---

## [Test]

Marks a method as a test method.

```csharp
[Test]
public void AddTest()
{

}
```

---

## [SetUp]

Runs before every test method.

Used for object initialization.

```csharp
[SetUp]
public void Setup()
{

}
```

---

## [TearDown]

Runs after every test.

Used for cleanup.

```csharp
[TearDown]
public void Cleanup()
{

}
```

---

## [OneTimeSetUp]

Runs only once before all tests.

---

## [OneTimeTearDown]

Runs once after all tests complete.

---

## Assertions

Assertions compare expected and actual results.

Example

```csharp
Assert.AreEqual(10, result);
```

Common Assertions

- AreEqual()
- AreNotEqual()
- IsTrue()
- IsFalse()
- IsNull()
- IsNotNull()
- Throws()

---

# Test Cases

A Test Case checks one specific functionality.

Example

Testing addition

Input:

```
5 + 3
```

Expected Output

```
8
```

---

# Test Fixture

A Test Fixture is a class that contains multiple test methods.

Example

```csharp
[TestFixture]
public class StudentTests
{

}
```

---

# Setup and TearDown

Setup executes before each test.

TearDown executes after each test.

Example

```
Setup()

↓

Test Method

↓

TearDown()
```

---

# Parameterized Tests

Parameterized Tests allow the same test to run with different inputs.

Example

```csharp
[TestCase(2,3,5)]
[TestCase(4,5,9)]
public void AddTest(int a,int b,int expected)
{

}
```

Advantages

- Less duplicate code.
- Better test coverage.
- Easy maintenance.

---

# Code Coverage

Code Coverage tells how much application code is tested.

Higher code coverage generally indicates better testing.

Example

If an application contains 100 lines and tests execute 90 lines,

Code Coverage = 90%

---

# Characteristics of Good Unit Tests

A good unit test should be:

- Simple
- Independent
- Repeatable
- Fast
- Reliable
- Easy to understand

---

# Black Box Testing

Black Box Testing checks functionality without knowing internal code.

Tester only verifies inputs and outputs.

---

# White Box Testing

White Box Testing checks internal program logic.

The tester understands the source code.

---

# Best Practices

- Write small test methods.
- Test only one functionality.
- Give meaningful test names.
- Avoid duplicate code.
- Use Assertions correctly.
- Keep tests independent.
- Run tests frequently.

---

# Advantages of NUnit

- Free and Open Source.
- Easy to use.
- Supports automation.
- Works well with Visual Studio.
- Produces detailed test reports.

---

# My Understanding

NUnit is a Unit Testing framework used to test .NET applications. It allows developers to write automated test cases for individual methods or classes. By using attributes like Test, SetUp, TearDown and Assertions, we can verify whether our code behaves correctly. Unit testing improves software quality, reduces bugs and makes future code changes safer.


 PRACTISE:
 # NUnit Hands-on

## Objective

The objective of this exercise is to understand how NUnit is used for writing automated unit tests in .NET applications.

---

## Example Scenario

Suppose we have a Calculator class.

```csharp
public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }
}
```

Now we create a Unit Test.

```csharp
[TestFixture]
public class CalculatorTests
{
    private Calculator calculator;

    [SetUp]
    public void Setup()
    {
        calculator = new Calculator();
    }

    [Test]
    public void Add_ShouldReturnCorrectResult()
    {
        int result = calculator.Add(5,5);

        Assert.AreEqual(10,result);
    }
}
```

---

## Explanation

- TestFixture marks the class as a test class.
- SetUp creates the object before every test.
- Test marks the testing method.
- Assert verifies the expected result.

---

## Expected Output


Test Passed


---

## Learning

This exercise helped me understand how NUnit verifies the correctness of individual methods using Assertions.