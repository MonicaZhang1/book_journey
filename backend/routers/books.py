from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from dependencies import get_db
import models as models
import schemas as schemas

router = APIRouter()


@router.get("/test")
async def test():  # async is optional
    return {"message": "Book Journey is live!"}


@router.get("/books", response_model=list[schemas.Book_With_Id], status_code=200)
async def read_all_books(db: Session = Depends(get_db)):

    # query all books
    books = db.query(models.Book).all()
    if len(books) == 0:
        raise HTTPException(status_code=404, detail="No books found.")
    # if sucessful, return a list of books
    return books


# dynamic param
@router.get("/books/{id}", response_model=schemas.Book_With_Id, status_code=200)
async def get_book_by_id(id: int, db: Session = Depends(get_db)):
    # query and filter where id = id in url
    book = db.query(models.Book).filter(models.Book.id == id).first()

    # error handling
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found.")

    # succesful, return the book
    return book


@router.post("/books", response_model=schemas.Book_With_Id, status_code=201)
async def add_new_book(new_book: schemas.Book, db: Session = Depends(get_db)):
    # create new book object
    new_book = dict(new_book)
    db_book = models.Book(**new_book)

    # add new book
    db.add(db_book)
    db.commit()
    db.refresh(db_book)

    # successful, return the new book
    return db_book


@router.put("/books/{id}", response_model=schemas.Book, status_code=200)
async def update_book(id: str, new_book: schemas.Book, db: Session = Depends(get_db)):
    # query and filter for where id = id in url
    book = db.query(models.Book).filter(models.Book.id == id)

    # error handling
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found.")

    # create new book object
    new_book = dict(new_book)

    # update book and save
    book.update(new_book)
    db.commit()

    # successful, return the new book object
    return book.first()


@router.delete("/books/{id}", response_model=list[schemas.Book_With_Id], status_code=200)
async def delete_book(id: str, db: Session = Depends(get_db)):
    # query and filter where book id = id in url
    book = db.query(models.Book).filter(models.Book.id == id).first()

    # error handling, not found
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found.")

    # if found, requery, delete
    db.query(models.Book).filter(models.Book.id == id).delete()
    # save changes to db
    db.commit()

    # successful deletion, return remaining list
    return db.query(models.Book).all()
