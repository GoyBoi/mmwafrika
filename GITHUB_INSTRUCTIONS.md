# GitHub Push Instructions

1. Create a new repository on GitHub (do NOT initialize with a README)
2. Run these commands in your terminal:

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

Replace `your-username` and `your-repo-name` with your actual GitHub username and the name you gave your repository.

Alternatively, if you want to use SSH (which is more secure), first add your SSH key to your GitHub account, then use:

```bash
git remote add origin git@github.com:your-username/your-repo-name.git
git branch -M main
git push -u origin main
```