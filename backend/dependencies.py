from database import SessionLocal


# get_db dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
