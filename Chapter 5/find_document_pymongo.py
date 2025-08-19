library = client.resources.library

result = library.find_one( {"name": "Python and MongoDB"} )
print (result)
