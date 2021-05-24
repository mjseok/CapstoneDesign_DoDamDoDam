import sys
sys.path.append("../SentimentAnalysis")

import SentimentAnalysis
import MorphemeSeparation

from flask import Flask
from flask import request

app = Flask(__name__)
'''
@app.route('/')
def post():
    diary = request.form['diary']
    return diary
'''

@app.route('/')
def hello_world():
    return 'Hello, World!'
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
