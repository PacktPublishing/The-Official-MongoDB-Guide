db.users.aggregate([
  {
    $addFields: {
      age_group: {
        $switch: {
          branches: [
            { case: { $lt: ["$age", 18] }, then: "18 and under" },
            { case: { $lt: ["$age", 25] }, then: "19 to 25" },
          ],
          default: "26 and Older"
        }
      }
    }
  },
  {
    $group: {
      _id: "$age_group",
      count: { $sum: 1 },
      names: { $push: "$name" }
    }
  },
  {
    $sort: { count: 1 }
  },
  {
    $project: {
      _id: 0,
      ageGroup: "$_id",
      count: 1,
      names: 1
    }
  }
])
