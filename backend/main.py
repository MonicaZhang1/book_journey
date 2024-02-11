from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models as models
from database import engine
from routers import books


# create FastAPI app
app = FastAPI()

# middleware to prevent CORS errors
origins = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

models.Base.metadata.create_all(bind=engine)

# Routers
app.include_router(books.router)
# app.include_router(reviews.router)
