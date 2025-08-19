db.adminCommand(
  {
    setAuditConfig: 1,
    filter: {
      "atype": "authCheck",
      "param.command": {
        "$in": [
          "find",
          "insert",
          "delete",
          "update",
          "findAndModify"
        ]
      }
    }
  }
)
