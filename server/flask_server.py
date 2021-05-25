import mysql_connection

from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/analysis/')
def analysis():
    idx = request.args.get('idx')
    
    mysql_connection.updateSentimentAnalysis(int(idx))
    
    return idx


@app.route('/')
def hello_world():
    return 'Hello, World!'
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)