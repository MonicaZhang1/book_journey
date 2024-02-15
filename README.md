## Setup 
1. Clone and open the repo
2. Set up the virtual environment by running the commands in the terminal:
    ``` 
    mkdir fenv 
    cd fenv
    python3 -m venv fenv
    ```
3. Activate the fenv environment 
    ``` 
    source fenv/bin/activate
    ```
4. Install the dependencies
    ```
    pip install -r requirements.txt
    ```
5. Install PostgreSQL (recommend to install with Homebrew). Go to https://brew.sh/ to install Homebrew. Then 
    ```
    brew install postgresql@14
    ```
6. Run PostgreSQL
    ```
    brew services start postgresql@14
    psql postgres
    ```
7. Once terminal shows postgres=#, 
    ```
    create database booksweb_db;
    ```

8. Run the commands
    ```
    \q 
    psql booksweb_db 
    ```
9. Once the terminal shows booksweb_db, run the commands in the backend/database.sql file. 

10. Navigate to the backend folder in your code editor and start the backend. 
    ```
    cd backend
    uvicorn main:app --reload
    ```
11. Open frontend/index.html on the browser to access the website. 
12. Open http://127.0.0.1:8000/docs to test the backend routes. 