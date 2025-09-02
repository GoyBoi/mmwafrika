# GitHub Push Instructions

## Method 1: Using the provided script

1. Make sure you're logged into GitHub in your browser as "GoyBoi"
2. Run the provided script:
   ```bash
   ./push_to_github.sh
   ```

## Method 2: Manual steps

1. Set up your Git configuration:
   ```bash
   git config --global user.email "your-email@example.com"
   git config --global user.name "GoyBoi"
   ```

2. Add the GitHub remote:
   ```bash
   git remote add origin https://github.com/GoyBoi/mmwafrika.git
   ```

3. Rename the branch to main:
   ```bash
   git branch -M main
   ```

4. Push to GitHub:
   ```bash
   git push -u origin main
   ```

## If you encounter authentication issues:

1. Generate a Personal Access Token on GitHub:
   - Go to GitHub Settings
   - Developer Settings
   - Personal Access Tokens
   - Generate New Token
   - Give it repo permissions
   - Copy the token

2. When prompted for password, use the Personal Access Token instead

3. Alternatively, configure Git to store credentials:
   ```bash
   git config --global credential.helper store
   ```
   Then try pushing again - you'll be prompted for username and token/password

## Method 3: Using SSH (more secure)

1. Generate SSH keys if you don't have them:
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com"
   ```

2. Add your SSH key to the ssh-agent:
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

3. Add your SSH key to your GitHub account:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub Settings -> SSH and GPG keys
   - Add New SSH Key
   - Paste your public key

4. Change the remote URL to SSH:
   ```bash
   git remote set-url origin git@github.com:GoyBoi/mmwafrika.git
   ```

5. Push to GitHub:
   ```bash
   git push -u origin main
   ```