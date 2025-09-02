# GitHub Authentication Setup

## Step 1: Generate a Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" (you may need to log in)
3. Give your token a descriptive name (e.g., "mmwafrika repo access")
4. Select the following scopes:
   - repo (Full control of private repositories)
   - workflow (Update GitHub Action workflows)
5. Click "Generate token"
6. Copy the generated token (you won't see it again)

## Step 2: Use the Token for Authentication

You can use the token in one of two ways:

### Method 1: Using Credential Helper (Recommended)
```bash
git config --global credential.helper store
git push -u origin master
```
When prompted, enter:
- Username: GoyBoi
- Password: [your personal access token]

### Method 2: Including Token in URL
```bash
git remote set-url origin https://GoyBoi:[YOUR_TOKEN]@github.com/GoyBoi/mmwafrika.git
git push -u origin master
```

Replace [YOUR_TOKEN] with the token you generated.

## Step 3: Verify the Push

After successful authentication, your code should push to GitHub.