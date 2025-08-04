db.users.find( { age: { $gt: 23 } } ).sort( { age: 1 } )
db.users.find( { age: { $gt: 21 } } ).sort( { age: -1 } )
