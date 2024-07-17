import React from 'react'

export default function Sidebar({docs}) {
  
  const roots = docs.filter((doc)=> !doc.parent)


  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
);

// ei group by korar por ki holo j sob element root level a nai. jar mane jar modhe value ase . 
// ogula k amra group kortse tader parent er upoor vitti kore 

console.log(nonRoots)

  return (
    <div>Sidebar</div>
  )
}
