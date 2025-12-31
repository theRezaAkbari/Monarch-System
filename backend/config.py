class Config:
    SECRET_KEY = "super-secret-key"
    JWT_SECRET_KEY = "jwt-super-secret-key"

    SQLALCHEMY_DATABASE_URI = (
    "mssql+pyodbc://localhost\\SQLEXPRESS/monarch_db"
    "?driver=ODBC+Driver+17+for+SQL+Server"
    "&trusted_connection=yes"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False
