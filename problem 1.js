let checkLogin = (email,password,allUsers) => {
  let isUserFound = false
  let passwordCorrect = false
  for(currentUser in allUsers) {
    console.log(currentUser)
    if(allUsers[currentUser]['emai']==email){
      if(allUsers[currentUser]['password'] == password){
        isUserFound = true
        passwordCorrect = true
        break
      } else {
        isUserFound = true
        passwordCorrect = false
        break
      }
    }  else {
      isUserFound = false
    }
  }

  if(isUserFound == true && passwordCorrect == true){
    alert('you are logged in')
  } else if(isUserFound == true && passwordCorrect = =false){
    alert('you have provided incorrect password')
  } else {
    alert('no user with this email found')
  }
}  //end check login

let bubble_sort=(a)  =>{
  let swapp;
  let n=a.length-1
  let x=a
  do{
    swapp = false
    for(let i=0;i<n;i++)
    {
      if(x[i] < x[i+1])
      {
        let temp=x[i]

x[i]=x[i+1]
x[i+1]=temp
swapp=true
      }
    }
   n--
  } while (swapp)
  return x
}
