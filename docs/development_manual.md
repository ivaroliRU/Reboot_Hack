### Git
First you need to create a working copy of a local repository, with the command:
`git clone username@host:/path/to/repository`

Before coding you should check for available branches, with the command:
`git branch`

To Switch from one branch to another branch, enter the command:
`git checkout <filename>`

To create a new branch and switch to it, enter the command:
`git checkout -b <branchname>`

Before you start coding you should always pull changes that have been made to the repository:
`git pull`

Before pushing you need to add the files that you have made changes to.
To add one file use this command:
`git add <filename>`
To add many files use this command:
`git add .`

After adding the file/s you need to make a commit with a message to describe the changes you made, enter the command:
`git commit -m "Commit message"`

To begin the integration test, you only have to push the branch to github, everything else is automated.
`git push`

To deploy the features you have **completed** you'll have to merge the master branch with the development branch:
`git checkout master`
`git merge development`
`git push`

### JavaScript/React
When we make a variable out of two compound words, the second word begins with a capital letter (pascal casing): 
```javascript
var firstSecond
```

When creating a function we do not allocate a seperate line for the opening bracket. We alsopu a short description above the function that explains in short what it does

```javascript
//some comment 
function testCode() {
    console.log('some text');
}
```