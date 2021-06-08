from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime
import mariadb

app = Flask(__name__)

# ============데이터베이스서버 연결=================
config = {
    'host': 'datadrink.synology.me',
    'port': 3306,
    'user': 'root',
    'password': 'tjqj123',
    'database': 'flask'
}
# =================================================

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:tjqj123@datadrink.synology.me/flask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# db = SQLAlchemy(app)

# class Articles(db.Model):
#     id = db.Column(db.Interger, primary_key = True)
#     title = db.Column(db.String(100))
#     body = db.Column(db.text(100))
#     date = db.Column(db.DateTime, default = datetime.datetime.now)


def __init__(self, title, body):
    self.title = title
    self.body = body

@app.route('/get', methods = ['GET'])

# def get_articles():
#     return jsonify({"Hello":"World"})

def index():
   # connection for MariaDB
   conn = mariadb.connect(**config)
   # create a connection cursor
   cur = conn.cursor()
   # execute a SQL statement
   cur.execute("select * from users")

   # serialize results into JSON
   row_headers=[x[0] for x in cur.description]
   rv = cur.fetchall()
   json_data=[]
   for result in rv:
        json_data.append(dict(zip(row_headers,result)))
 # return the results!
   return jsonify(json_data)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5500,debug=True)
