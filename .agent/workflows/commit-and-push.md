---
description: Analyze local changes, commit using Conventional Commits, and push to remote.
---

// turbo-all

1. Check the current status of the repository and the specific changes.
   `git status`
   `git diff`

2. Stage all changed and new files.
   `git add .`

3. Analyze the diff and determine the appropriate conventional commit type:
   - `feat`: A new feature
   - `fix`: A bug fix
   - `docs`: Documentation only changes
   - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
   - `refactor`: A code change that neither fixes a bug nor adds a feature
   - `perf`: A code change that improves performance
   - `test`: Adding missing tests or correcting existing tests
   - `build`: Changes that affect the build system or external dependencies
   - `ci`: Changes to CI configuration files and scripts
   - `chore`: Other changes that don't modify src or test files
   - `revert`: Reverts a previous commit

4. Commit the changes using the format: `<type>(<scope>): <description>`
   Example: `git commit -m "style(landing): refine hero section and responsiveness"`

5. Push the changes to the current branch.
   `git push origin $(git rev-parse --abbrev-ref HEAD)`
