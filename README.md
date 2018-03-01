# UnifiedGamersWeb
The UnifiedGamers Website. Copyright © UnifiedGamers 2018

# Developer guidelines

## Versioning
The initial version is **1.0.0** This version is the basic setup of the framework. 
when a new issue/feature has been implemented, the minor version is increased. E.g from **1.0.0** to **1.0.1**.
when the minor version has reached **9** (E.g. **1.0.9**) the middle version is increased, and the minor version reset. E.g from **1.0.9** to **1.1.0**. When a milestone has been reached, the major version is increased, and the minor counters reset to **0**. E.g. from **1.4.2** to **2.0.0**.

## Vorkflow
### Overview
The **master** branch should always contain a *stable* release.
Development-versions (*nightly-builds*) are present on the **dev** branch.
All issues should be developed on it's own **feature-branch**.

### Checklist
- [ ] Find an open [Issue](https://github.com/larsjohan/UnifiedGamersWeb/issues) to work on
- [ ] Assign yourself to the issue, or add a comment saying that you are working on it
- [ ] Open git-bash in the project directory
- [ ] Go to the **dev** branch by issuing the command: ***git checkout dev***
- [ ] Create a new branch with the name **IX**, where you replace **X** with the issue-number you are working on. 
E.g. if you selected issue number 5, the branch-name would be **I5**. Issue the following command: ***git checkout -b I5***
- [ ] When you have implemented a method/comments/some small part of the issue, 
add the changes to the *staging area*: ***git add -files-***
- [ ] When all the files that should be in the commit, has been added, 
  commit the change: ***git commit -m "#-issuenumber- Some message explaining what you have done"***
- [ ] Pull the new changes from the repo if any: ***git pull origin IX***
- [ ] Push your changes to the remote repo: ***git push origin IX***
- [ ] Repeat these steps (Add/commit/push) until the issue has been implemented. Then pull in the **dev** branch, to ensure compatibility: 
***git merge dev***
- [ ] Resolve possible conflicts and push the changes: ***git push origin IX***
- [ ] Contact Repo-owner for integration with the **dev** branch. 
