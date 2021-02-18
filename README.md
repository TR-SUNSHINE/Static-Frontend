# Static-Frontend

As part of this project the Static-Frontend repository will be used to version control the source code which was developed to build the applications static frontend web pages developed in HTML and CSS. This source code is not included in the final application build but was developed as an intermediary step for translating wireframe sketches\prototypes to HTML and CSS which could later be converted into a set of React pages. 

## Steps to clone the repository locally
### Navigate to working directory <br>
&ensp; git clone https://github.com/TR-SUNSHINE/Static-Frontend.git <br>

## Repository Rules

### Change Type
Throughout the project there will be changes that fall into different categories depending on the piece of work that is going to be delivered. Each change type is categorised as below:

FEAT: The new feature you're adding to a particular application <br/>
FIX: A bug fix <br/>
STYLE: Feature and updates related to styling <br/>
REFACTOR: Refactoring a specific section of the codebase <br/>
TEST: Everything related to testing <br/>
DOCS: Everything related to documentation

### New Branches
A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process. You can think of them as a way to request a brand new working directory, staging area, and project history.

The below naming convention and rules should be used when creating a new branch:

The new branch name must be created with the change type (listed above) in capital letters, followed by underscore, followed by a short description of what you are developing all in lowercase
If the feature name is more than one word then each word must be separated with a _

#### Usage
For creating a new branch the git command would be similar to below:
git checkout -b FEAT_sunshine_api  <br/>
For pushing a change to the remote branch the git command would be similar to the below commands:
-git add .  <br/>
-git commit -m “FEAT: Individual_walk”  <br/>
-git push origin br_sunshine_api  <br/>
	
### Merging changes to the main branch
Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

#### Usage
Merging to the main branch should happen by each team member once per day
When a member of the team has completed work in their branch they should first initiate a pull from the remote main branch to their local main branch following the below commands (FEAT_sunshine_api represents the name of the branch that was created which contains the code changes):
-git checkout main <br/>
-git pull origin main <br/>
-git checkout FEAT_sunshine_api <br/>
-git merge main <br/>
-git push origin FEAT_sunshine_api <br/>
Before merging the changes to the remote main branch you should initiate a pull request via the pull request menu at the top of the repository in GitHub.
Set the base branch as main
Set the compare branch to the branch containing the change
Press “Create pull request”
Specify a pull request name
Add a descriptive comment about each change you are wanting to merge
Assign two members in the team to the list of reviewers on the right hand side
Each reviewer will receive a notification to review the merge. Once each member in the team has performed a review and approve the final approver should perform the  action of merging the change by pressing the Merge button which will merge the changes to the main branch.

### Commit Messages
The commit command is used to save changes to a local repository after staging in Git.

The below naming convention and rules should be used when committing any change to any repository in this project:

-The first word of the commit should be the keyword from the ‘Change Type’ list above in this document with capitalization of each character. <br/>
-Followed by a semicolon and space character <br/>
-Followed by a brief description of the change where the first character of the sentence is capitalized <br/>
-Total length of the commit message is limited to 50 chars <br/>
-Commits to the repository should be little and often

#### Usage
For fixing a bug in code the git command would be similar to below:
-git commit -m “FIX: Null Exception in Function GetWeather”

### Branch Rules
In this project we are enforcing a two step review and approval by the code owner for each change to each branch.

