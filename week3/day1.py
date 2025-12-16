from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProfileData(BaseModel):
    name: str
    job: str

@app.post("/profile")
def make_profile(data: ProfileData):
    return{"message":f"{data.name}さんは{data.job}です！"}

