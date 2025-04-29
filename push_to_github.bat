@echo off
echo ===================================
echo GitHub Repository Push Instructions
echo ===================================
echo.
echo Step 1: Create a Personal Access Token (PAT) in GitHub
echo --------------------------------------------------
echo 1. Go to GitHub.com and log in with your account
echo 2. Click on your profile picture in the top right corner
echo 3. Select "Settings"
echo 4. Scroll down and select "Developer settings" on the left sidebar
echo 5. Select "Personal access tokens" then "Tokens (classic)"
echo 6. Click "Generate new token" and then "Generate new token (classic)"
echo 7. Give your token a name (e.g., "Dracula Website Push")
echo 8. Select at least the "repo" permissions
echo 9. Click "Generate token"
echo 10. IMPORTANT: Copy the generated token immediately - you won't see it again!
echo.
echo Step 2: Push your repository with the token
echo --------------------------------------
echo Once you have your personal access token, run these commands:
echo.
echo git remote set-url origin https://GeorgeHub123:%YOUR_TOKEN%@github.com/GeorgeHub123/garden.git
echo git push -u origin master
echo.
echo Replace %YOUR_TOKEN% with the personal access token you created.
echo.
echo Press any key to exit...
pause > nul 