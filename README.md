# gsuite-app-scripts

A few useful scripts for interacting with the gsuite Admin API.
(such as inventorying users / groups / aliases into a JSON)

If you add, improve, or build other useful tools here: feel free to fork and send a pull request, I'd be happy to pull them in to share with others.


# Getting Started

1. Open https://script.google.com/ on the correct user/domain/permission
2. Create a new project (if the first time using these scripts, or to create a container)
3. [optional] Add "Services" on the left, "Admin SDK API" will default to adding the identifier "AdminDirectory" (which is referenced in the scripts)
4. Past the script in (often times a single function), review, and Run.
# Scripts

1. [listAllUsersAndGroups.js](listAllUsersAndGroups.js)
  * List all users in the domain, whether or not they are suspended, their email alises.  
  * List all groups in the domain, the group's email aliases, and a list of all the members
2. [createGroupsFromJson.js](createGroupsFromJson.js)
  * Edit the script to fill in your groups/members, run to create them all
