# GitHub Push Instructions

## Step 1: Generate a Personal Access Token (PAT)

1. Go to [GitHub Settings](https://github.com/settings/profile)
2. Click on **Developer settings** (at the bottom of the left sidebar)
3. Click on **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Give your token a name (e.g., "Dracula Website")
6. Select the **repo** scope (this gives full control of repositories)
7. Click **Generate token**
8. **IMPORTANT**: Copy the token immediately - you won't see it again!

## Step 2: Set the Remote URL with Your Token

Run the following command in your terminal, replacing `YOUR-TOKEN` with the token you just created:

```
git remote set-url origin https://GeorgeHub123:YOUR-TOKEN@github.com/GeorgeHub123/garden.git
```

## Step 3: Push Your Code

```
git push -u origin master
```

## Alternative Method: Cloning with PAT

If you want to clone this repository on another machine, you can use:

```
git clone https://GeorgeHub123:YOUR-TOKEN@github.com/GeorgeHub123/garden.git
```

Remember to replace `YOUR-TOKEN` with your actual personal access token. 