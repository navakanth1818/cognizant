# Moq Framework - Complete Notes

## Introduction

While writing Unit Tests, our classes often depend on other classes such as databases, APIs, file systems or external services. During testing, we don't want to use these real dependencies because they make testing slow and unreliable.

The Moq framework helps us create fake objects (called Mock Objects) so that we can test only the class we want.

---

# Dependency Injection (DI)

## What is Dependency Injection?

Dependency Injection is a design technique where the required objects are provided from outside instead of creating them inside the class.

This makes the code flexible, reusable and easy to test.

### Without Dependency Injection

```csharp
public class OrderService
{
    Database db = new Database();
}
```

Here, OrderService creates the Database object itself.

This creates tight coupling.

---

### With Dependency Injection

```csharp
public class OrderService
{
    private IDatabase db;

    public OrderService(IDatabase database)
    {
        db = database;
    }
}
```

Now the database object is passed from outside.

This creates loose coupling.

---

# Advantages of Dependency Injection

- Makes code easier to test.
- Reduces dependency between classes.
- Improves code reusability.
- Makes maintenance easier.
- Supports Mocking Frameworks like Moq.

---

# Loose Coupling

## What is Loose Coupling?

Loose Coupling means classes depend on interfaces instead of concrete classes.

If one class changes, other classes require little or no modification.

### Advantages

- Easy maintenance.
- Easy testing.
- Better scalability.
- Better code reuse.

---

# Tight Coupling vs Loose Coupling

### Tight Coupling

- Direct object creation.
- Difficult to test.
- Hard to maintain.
- Less reusable.

### Loose Coupling

- Uses interfaces.
- Easy testing.
- Easy maintenance.
- Highly reusable.

---

# Mock Objects

## What is a Mock Object?

A Mock Object is a fake object used during testing instead of a real object.

Mock Objects simulate the behavior of real objects.

Example:

Instead of connecting to a real database, we use a fake database object.

This helps perform testing without affecting actual data.

---

# Why use Mock Objects?

- Faster testing.
- No database dependency.
- No API dependency.
- Repeatable test results.
- Easy debugging.

---

# Moq Framework

## What is Moq?

Moq is an open-source Mocking Framework used with NUnit.

It creates fake implementations of interfaces during Unit Testing.

Instead of calling real services, we use Mock objects.

---

# Creating a Mock Object

Example

```csharp
var mockRepository = new Mock<IProductRepository>();
```

This creates a fake implementation of IProductRepository.

---

# Setup()

## What is Setup()?

Setup() tells the Mock object what value should be returned when a particular method is called.

Example

```csharp
mockRepository
.Setup(x => x.GetProduct())
.Returns("Laptop");
```

Whenever GetProduct() is called,

Output:

```
Laptop
```

will be returned.

---

# Returns()

Returns() specifies the value that the Mock should return.

Example

```csharp
mockRepository
.Setup(x => x.GetPrice())
.Returns(50000);
```

Whenever GetPrice() is called,

Result

```
50000
```

is returned.

---

# Verify()

Verify() checks whether a particular method was called during execution.

Example

```csharp
mockRepository.Verify(x => x.Save());
```

This verifies that Save() was called.

---

# Times.Once()

Sometimes we need to verify how many times a method was called.

Example

```csharp
mockRepository.Verify(x => x.Save(), Times.Once());
```

This confirms Save() executed exactly one time.

Other options

```csharp
Times.Never()

Times.Exactly(2)

Times.AtLeastOnce()

Times.AtMost(3)
```

---

# State Testing

## What is State Testing?

State Testing verifies the final result after executing a method.

Example

```csharp
Balance = 5000

Withdraw(1000)

Balance = 4000
```

The balance changed correctly.

State Testing focuses on checking data or object state.

---

# Interaction Testing

## What is Interaction Testing?

Interaction Testing verifies whether one object correctly interacted with another object.

It checks whether expected methods were called.

Example

```csharp
mockRepository.Verify(x => x.Save());
```

Instead of checking the data,

Interaction Testing checks communication between objects.

---

# State Testing vs Interaction Testing

| State Testing | Interaction Testing |
|---------------|---------------------|
| Checks result | Checks method calls |
| Verifies object state | Verifies interaction |
| Uses Assertions | Uses Verify() |
| Focuses on output | Focuses on communication |

---

# Advantages of Moq

- Easy to create Mock Objects.
- Removes dependency on databases.
- Faster Unit Testing.
- Improves test reliability.
- Supports Dependency Injection.
- Easy integration with NUnit.

---

# Best Practices

- Mock only external dependencies.
- Do not mock simple classes unnecessarily.
- Use meaningful test names.
- Verify important method calls.
- Keep tests small and independent.
- Use Dependency Injection wherever possible.

---

# My Understanding

Moq is a Mocking Framework used with NUnit to test applications without using real external dependencies. Instead of connecting to databases or APIs, Moq creates fake objects called Mock Objects. Methods like Setup(), Returns() and Verify() help control and validate object behavior. Dependency Injection and Loose Coupling make applications easier to test, while State Testing checks output values and Interaction Testing checks whether methods are called correctly.

PRACTISE:
# Moq Hands-on

## Objective

The objective of this exercise is to understand how Moq creates fake objects for Unit Testing.

---

## Example Interface

```csharp
public interface IProductRepository
{
    string GetProductName();
}
```

---

## Creating Mock Object

```csharp
var mockRepository = new Mock<IProductRepository>();
```

---

## Setup Example

```csharp
mockRepository
.Setup(x => x.GetProductName())
.Returns("Laptop");
```

Whenever GetProductName() is called, the Mock object returns

```
Laptop
```

---

## Verify Example

```csharp
mockRepository.Verify(x => x.GetProductName(), Times.Once());
```

This verifies that the method was called exactly one time.

---

## Learning

This exercise helped me understand that Moq removes dependencies on databases and APIs by creating fake objects, making Unit Testing faster and more reliable.
