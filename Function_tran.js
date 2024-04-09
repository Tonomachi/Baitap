import React from 'react'

export default function Function_tran(props) {
    const user={
        name:"tran quang tien",
        age: 10
    }
  return (
    <div>
      welcome to ,{user.name} voi tuoi la  {user.age}<br></br>
     props:<br></br>
     fullname:{props.fullname}<br></br>
     age:{props.age}
      
    </div>
  )
}
