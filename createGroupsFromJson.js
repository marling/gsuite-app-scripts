importing_groups={
  "group@domain.com":{"name":"Group 1","members":["member@domain.com", "member2@domain.com"]},
  "group2@domain.com":{"name":"Group 2","members":["member2@domain.com"]},
};

function importMyGroups(){
  for (email in importing_groups){
    let gi=importing_groups[email];
    let g=AdminDirectory.newGroup();
    g.setEmail(email);
    g.setName(gi.name);
    AdminDirectory.Groups.insert(g);
    //does not yet add members
    //does not yet add group aliases
  }  
}
