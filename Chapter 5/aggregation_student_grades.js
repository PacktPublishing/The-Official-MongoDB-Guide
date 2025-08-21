db.student_grades.aggregate( [
  { $match: { semester: "Fall 2025" } },
  { $group: {
          _id: "$student_id",
          averageGrade: { $avg: "$grade" }
      } },
    { $project: {
            _id: 0,
            student_id: "$_id",
            averageGrade: 1
    } }
] )
