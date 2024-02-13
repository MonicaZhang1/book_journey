from pydantic import BaseModel

# Pydantic schemas


# Book
class Book(BaseModel):
    title: str
    author: str
    summary: str

    class Config:
        from_attributes = True


# Book with ID
class Book_With_Id(Book):
    id: int


# Review
class Review(BaseModel):
    review: str
    book_title: str

    class Config:
        from_attributes = True


# Review with ID
class Review_With_Id(Review):
    id: int


# Login
class Login(BaseModel):
    username: str
    password: str

    class Config:
        from_attributes = True


# Update No Password
class Update_No_Password(BaseModel):
    username: str
    first_name: str
    last_name: str

    class Config:
        from_attributes = True
