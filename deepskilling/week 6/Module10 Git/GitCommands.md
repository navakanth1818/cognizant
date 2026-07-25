# Git Commands

## Introduction

Git provides a collection of commands that help developers create repositories, track changes, manage commits, work with branches, and collaborate with remote repositories. Understanding these commands is essential for daily software development.

---

# Installing Git

Git can be downloaded from the official Git website.

Installation Steps

1. Download Git from the official website.
2. Run the installer.
3. Select the default installation options.
4. Complete the installation.
5. Verify the installation using:

```bash
git --version
```

If Git is installed successfully, the installed version number is displayed.

---

# Configuring Git

Before using Git, configure your username and email address.

Set Username

```bash
git config --global user.name "John Doe"
```

Set Email

```bash
git config --global user.email "john@example.com"
```

View Configuration

```bash
git config --list
```

These details are stored with every commit.

---

# Creating a Git Repository

A repository stores the complete history of a project.

Create a new repository

```bash
git init
```

This command creates a hidden ".git" folder inside the project.

---

# Cloning an Existing Repository

Clone downloads a copy of an existing remote repository.

Command

```bash
git clone https://github.com/user/project.git
```

Advantages

- Downloads the complete project.
- Includes commit history.
- Includes all branches.

---

# Git Status

Displays the current state of the repository.

Command

```bash
git status
```

It shows:

- Modified files
- New files
- Deleted files
- Staged files
- Untracked files

Developers often use this command before committing changes.

---

# Git Add

Adds files to the staging area.

Add one file

```bash
git add index.html
```

Add multiple files

```bash
git add file1 file2
```

Add all files

```bash
git add .
```

Only staged files are included in the next commit.

---

# Wildcards

Wildcards help select multiple files.

Example

```bash
git add *.java
```

This stages all Java files.

Another Example

```bash
git add *.txt
```

Stages every text file in the current directory.

---

# Git Commit

A commit saves the staged changes into the repository.

Command

```bash
git commit -m "Added login page"
```

The message should clearly describe the changes.

---

# Writing Good Commit Messages

A commit message should explain what was changed.

Good Examples

```text
Added user authentication

Fixed login validation

Updated product details page

Improved navigation menu
```

Bad Examples

```text
Update

Changes

Test

Done
```

Meaningful commit messages make project history easier to understand.

---

# Git Log

Displays the history of commits.

Command

```bash
git log
```

Useful Information

- Commit ID
- Author
- Date
- Commit Message

A shorter version

```bash
git log --oneline
```

---

# Git Diff

Displays the differences between file versions.

Command

```bash
git diff
```

Useful for checking modifications before committing.

---

# Git Restore

Restores a modified file to its previous state.

Command

```bash
git restore index.html
```

This discards local changes that have not been committed.

---

# Git Remove

Removes a file from both the working directory and Git tracking.

Command

```bash
git rm file.txt
```

To remove only from Git while keeping the local file

```bash
git rm --cached file.txt
```

---

# Git Workflow Using Commands

```
Create Project

↓

git init

↓

Create Files

↓

git status

↓

git add .

↓

git commit -m "Initial Commit"

↓

git log
```

---

# Frequently Used Git Commands

| Command | Purpose |
|----------|---------|
| git init | Create a repository |
| git clone | Copy an existing repository |
| git status | View repository status |
| git add | Stage files |
| git commit | Save changes |
| git log | View commit history |
| git diff | Compare file changes |
| git restore | Undo local changes |
| git rm | Remove files |

---

# Best Practices

- Check git status before committing.
- Stage only required files.
- Write clear commit messages.
- Commit small changes frequently.
- Review changes using git diff.
- Keep the repository organized.

---

# Summary

Git commands form the foundation of version control. Commands such as git init, git clone, git add, git commit, git status, and git log help developers manage project history efficiently. Understanding these commands improves collaboration and makes software development more organized.