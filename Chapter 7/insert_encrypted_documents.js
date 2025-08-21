const patient1 = {
   name: "Jon Doe",
   bill: 1500,
   procedure: {
     code: 174839,
     recoveryTime: 30,
     name: "appendectomy"
   },
};
const patient2 = {
   name: "Jane Doe",
   bill: 1800,
   procedure: {
     code: 149174,
     recoveryTime: 60,
     name: "ankle surgery"
  },
};
const patient3 = {
   name: "Jake S",
   bill: 700,
   procedure: {
     code: 198347,
     recoveryTime: 90,
     name: "LASIK"
   },
};
await myColl.insertMany([ patient1, patient2, patient3 ]);
