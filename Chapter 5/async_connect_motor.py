import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.server_api import ServerApi

async def ping_server():
    uri = "<connection string>"
    client = AsyncIOMotorClient(uri, server_api=ServerApi('1'))

    try:
        await client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)
asyncio.run(ping_server())
