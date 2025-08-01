db.createRole( {  
   role: "my-role",  
   privileges: [   
     {   
       resource: {   
         db: "my-db",  
         collection: ""  
       },  
       actions: [ "find" ]  
     }  
   ],  
   roles: [ ]  
} )
