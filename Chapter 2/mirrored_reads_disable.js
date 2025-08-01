db.adminCommand({ 
   setParameter: 1,
   mirrorReads: { samplingRate: 0.0 }
})
