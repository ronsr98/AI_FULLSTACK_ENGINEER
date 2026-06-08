# Git Branches - Practice

The 14 steps of the branches practice, with the exact git commands.
(`master` is the main branch in this exercise.)

### Setup — a test repo with `test.txt` (2 lines)
```bash
git init
# create test.txt with 2 lines:
echo "line 1" >> test.txt
echo "line 2" >> test.txt
git add .
git commit -m "initial commit with test.txt"
git remote add origin <your-remote-url>
git push -u origin master
```

### 1. Create 2 branches from master: forest, beach
```bash
git branch forest
git branch beach
```

### 2. List the local branches
```bash
git branch
```

### 3. Add a new line to test.txt in the forest branch
```bash
git checkout forest
echo "forest line" >> test.txt
git commit -am "add line in forest"
```

### 4. Push each branch to the remote
```bash
git push origin master forest beach
```

### 5. List all branches (local and remote)
```bash
git branch -a
```

### 6. Merge forest into master
```bash
git checkout master
git merge forest
```

### 7. Update the origin: push master
```bash
git push origin master
```

### 8. Delete the remote forest branch and the local one
```bash
git push origin --delete forest
git branch -d forest
```

### 9. Merge master into the beach branch
```bash
git checkout beach
git merge master
```

### 10. Add a new line to test.txt in the beach branch
```bash
echo "beach line" >> test.txt
git commit -am "add line in beach"
```

### 11. Push the beach branch to the remote
```bash
git push origin beach
```

### 12. Merge beach into master
```bash
git checkout master
git merge beach
```

### 13. Update the origin: push master
```bash
git push origin master
```

### 14. Delete the remote beach branch and the local one
```bash
git push origin --delete beach
git branch -d beach
```

### Result
Only `master` remains, and `test.txt` ends up as:
```
line 1
line 2
forest line
beach line
```
