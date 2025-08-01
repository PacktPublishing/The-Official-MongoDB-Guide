var userAccess = [ "bar" ];
db.collection.aggregate(
   [
     { $redact: {
         $cond: {
           if: { $gt: [ { $size: { $setIntersection: [ "$tags", userAccess ] } }, 0 ] },  
           then: "$$DESCEND",  
           else: "$$PRUNE"  
         }  
       }  
     }  
   ]  
);
