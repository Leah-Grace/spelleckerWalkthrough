
function getemail(users, name){
    const user = users.filter(userObj=>{
      return userObj.name === name
    });
    
 //res.send(`Name is ${name} and email is ${user[0].email}`);
    return user[0].email
  };

  module.exports = getemail;