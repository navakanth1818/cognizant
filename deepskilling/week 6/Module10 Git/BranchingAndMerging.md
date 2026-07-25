# Branching and Merging in Git

## Introduction

Branching is one of the most powerful features of Git. It allows developers to work on new features, bug fixes, or experiments without affecting the main project. Once the work is completed, the changes can be merged back into the main branch.

---

# What is a Branch?

A branch is an independent line of development in a Git repository.

Each branch has its own commits and changes.

The default branch is usually called:

- main
- master (older repositories)

Using branches allows multiple developers to work on different tasks simultaneously.

---

# Why Do We Use Branches?

Branches help developers:

- Develop new features safely.
- Fix bugs without affecting the main project.
- Test new ideas.
- Work independently.
- Collaborate efficiently.

---

# Creating a Branch

A new branch can be created using:

```bash
git branch feature-login
```

This creates a branch named **feature-login**.

---

# Viewing Branches

To display all branches in the repository:

```bash
git branch
```

The current branch is marked with an asterisk (*).

Example

```
* main
  feature-login
  feature-payment
```

---

# Switching Between Branches

To move from one branch to another:

```bash
git checkout feature-login
```

or

```bash
git switch feature-login
```

Now all work is done inside the selected branch.

---

# Creating and Switching Together

Git also allows creating and switching in one command.

```bash
git checkout -b feature-login
```

or

```bash
git switch -c feature-login
```

---

# Renaming a Branch

Rename the current branch

```bash
git branch -m new-branch-name
```

Example

```bash
git branch -m login-feature
```

---

# Deleting a Branch

Delete a merged branch

```bash
git branch -d feature-login
```

Force delete

```bash
git branch -D feature-login
```

Only delete branches that are no longer needed.

---

# What is Merging?

Merging combines the changes from one branch into another.

Usually,

```
Feature Branch

↓

Main Branch
```

After merging, the main branch contains the new feature.

---

# Merging Branches

First switch to the target branch.

```bash
git checkout main
```

Then merge.

```bash
git merge feature-login
```

Git combines the changes automatically if there are no conflicts.

---

# Fast Forward Merge

A Fast Forward Merge happens when the target branch has no new commits after the feature branch was created.

Example

```
main

↓

feature-login

↓

Merge

↓

main
```

Git simply moves the pointer forward.

Advantages

- Faster
- Cleaner history
- No extra merge commit

---

# Three-Way Merge

A Three-Way Merge occurs when both branches have new commits.

Git creates a new merge commit to combine the histories.

Example

```
main

↘

Merge Commit

↗

feature
```

---

# Merge Conflicts

A merge conflict occurs when two branches modify the same part of a file.

Example

Developer A edits

```
Login Button
```

Developer B edits the same code.

Git cannot decide which version to keep.

The developer must manually resolve the conflict.

---

# Resolving Merge Conflicts

Steps

1. Open the conflicted file.
2. Review the conflicting changes.
3. Choose the correct code.
4. Save the file.
5. Stage the file.

```bash
git add .
```

6. Complete the merge.

```bash
git commit
```

---

# Branching Strategies

A branching strategy defines how branches are created and managed in a project.

Popular strategies include:

- Feature Branching
- Release Branching
- Hotfix Branching
- Git Flow

---

# Feature Branching

Each new feature is developed in a separate branch.

Example

```
main

↓

feature-login

↓

feature-payment

↓

feature-dashboard
```

Advantages

- Easy testing
- Safe development
- Better collaboration

---

# Release Branch

A release branch is created before deploying software.

Purpose

- Final testing
- Bug fixing
- Documentation updates

Once ready, it is merged into the main branch.

---

# Hotfix Branch

A hotfix branch is created to quickly fix production issues.

Example

```
main

↓

hotfix-payment

↓

Merge
```

Hotfixes are completed as quickly as possible.

---

# Git Flow Workflow

Git Flow is a popular branching model.

Main Branches

- main
- develop

Supporting Branches

- feature
- release
- hotfix

Example

```
main

↓

develop

↓

feature

↓

release

↓

main
```

Git Flow is commonly used in large software projects.

---

# Branch Workflow

```
Create Branch

↓

Develop Feature

↓

Commit Changes

↓

Merge Branch

↓

Delete Branch
```

---

# Best Practices

- Keep branches small.
- Use meaningful branch names.
- Merge frequently.
- Delete unused branches.
- Pull the latest changes before merging.
- Resolve conflicts immediately.

---

# Summary

Branching allows developers to work independently without affecting the main project. Git provides powerful commands to create, switch, merge, and manage branches. Following proper branching strategies such as Feature Branching and Git Flow improves collaboration and simplifies software development.