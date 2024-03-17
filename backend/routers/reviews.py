from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from dependencies import get_db
import models as models
import schemas as schemas

router = APIRouter()


@router.get("/reviews", response_model=list[schemas.Review_With_Id], status_code=200)
async def read_all_reviews(db: Session = Depends(get_db)):

    # query all reviews
    reviews = db.query(models.Review).all()
    if len(reviews) == 0:
        raise HTTPException(status_code=404, detail="No reviews found.")
    # if sucessful, return a list of reviews
    return reviews


# dynamic param, get review by review id 
@router.get("/reviews/{id}", response_model=schemas.Review_With_Id, status_code=200)
async def get_review_by_id(id: int, db: Session = Depends(get_db)):
    # query and filter where id = id in url
    review = db.query(models.Review).filter(models.Review.id == id).first()

    # error handling
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found.")

    # succesful, return the review
    return review

# get review by book id
@router.get("/reviews/book/{book_id}", response_model=schemas.Review_With_Id, status_code=200)
async def get_review_by_bookId(book_id: int, db: Session = Depends(get_db)):
    # query and filter where id = id in url
    review = db.query(models.Review).filter(models.Review.book_id == book_id).first()

    # error handling
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found.")

    # succesful, return the review(s)
    return review

@router.post("/reviews", response_model=schemas.Review_With_Id, status_code=201)
async def add_new_review(new_review: schemas.Review, db: Session = Depends(get_db)):
    # create new review object
    new_review = dict(new_review)
    db_review = models.Review(**new_review)

    # add new review
    db.add(db_review)
    db.commit()
    db.refresh(db_review)

    # successful, return the new review
    return db_review


@router.put("/reviews/{id}", response_model=schemas.Review, status_code=200)
async def update_review(id: str, new_review: schemas.Review, db: Session = Depends(get_db)):
    # query and filter for where id = id in url
    review = db.query(models.Review).filter(models.Review.id == id)

    # error handling
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found.")

    # create new review object
    new_review = dict(new_review)

    # update review and save
    review.update(new_review)
    db.commit()

    # successful, return the new review object
    return review.first()


@router.delete("/reviews/{id}", response_model=list[schemas.Review_With_Id], status_code=200)
async def delete_review(id: str, db: Session = Depends(get_db)):
    # query and filter where review id = id in url
    review = db.query(models.Review).filter(models.Review.id == id).first()

    # error handling, not found
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found.")

    # if found, requery, delete
    db.query(models.Review).filter(models.Review.id == id).delete()
    # save changes to db
    db.commit()

    # successful deletion, return remaining list
    return db.query(models.Review).all()
