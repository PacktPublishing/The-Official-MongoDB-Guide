db.adminCommand({ 
    setDefaultRWConcern: 1,  
    defaultReadConcern: {<read concern>},  
    defaultWriteConcern: {<write concern>},  
    writeConcern: {<write concern>},  
    comment: <any> 
})
