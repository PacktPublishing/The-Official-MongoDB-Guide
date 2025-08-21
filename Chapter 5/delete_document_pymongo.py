isbn_to_delete = '303'

delete_result = library.delete_one({"isbn": isbn_to_delete})

print(delete_result.raw_result)
