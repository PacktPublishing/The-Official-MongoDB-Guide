const encryptedFieldsMap = {
  encryptedFields: {
    fields: [
      {
        path: "name",
        bsonType: "string",
        queries: { queryType: "equality" },  
      },  
      {  
        path: "bill",  
        bsonType: "int",  
        queries: { queryType: "range" },  
      },  
      {  
        path: "procedure",  
        bsonType: "object",  
      },  
    ],  
  },  
};
