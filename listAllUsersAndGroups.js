function listAllUsersAndGroups() {
  let pageToken
  let page
  do {
    page = AdminDirectory.Users.list({
      customer: 'my_customer',
      maxResults: 100,
      pageToken,
      fields: 'users(name/fullName,suspended,primaryEmail,aliases),nextPageToken',
    })
    let users = page.users
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i]
        let len = 0;
        let aliasstr = '';
        if (user.aliases && user.aliases.length > 0) {
          len = user.aliases.length
          aliasstr = JSON.stringify(user.aliases);
        }
        Logger.log(`user|${user.suspended}|${user.name.fullName}|${user.primaryEmail}| `
          + `${len} alias count`
          + '|' + aliasstr);

      }
    } else {
      Logger.log('No users found.')
    }
    pageToken = page.nextPageToken
  } while (pageToken)

  do {
    page = AdminDirectory.Groups.list({
      customer: 'my_customer',
      maxResults: 100,
      pageToken//,
      // fields: 'groups(name,email,aliases),nextPageToken',
    })
    let users = page.groups
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i]
        let len = 0;
        let aliasstr = '';

        let group = user;// GroupsApp.getGroupByEmail(user.email);

        let memberPage;
        let pt;
        let memberDetails = [];

        do {
          memberPage = AdminDirectory.Members.list(group.email, {
            maxResults: 100,
            pageToken: pt,
          })
          let members = memberPage.members
          if (members) {


            for (var j = 0; j < members.length; j++) {

              memberDetails.push(members[j].email);
            }
          }
          pt = memberPage.nextPageToken

        } while (pt);

        if (user.aliases && user.aliases.length > 0) {
          len = user.aliases.length
          aliasstr = JSON.stringify(user.aliases);
        }
        Logger.log(`group||${user.name}|${user.email}| `
          + `${len} alias count`
          + '|' + aliasstr + '|' + JSON.stringify(memberDetails));

      }
    } else {
      Logger.log('No users found.')
    }
    pageToken = page.nextPageToken
  } while (pageToken)
}
