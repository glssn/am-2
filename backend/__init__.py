from flask import Flask, request, send_from_directory

# imports from video
# from .commands import create_tables
# from .extensions import db, login_manager
# from .models import User
# from .routes.auth import auth
# from .routes.main import main

from flask_restful import Api, Resource, reqparse, abort

app = Flask(__name__, static_url_path='', static_folder='public')

import backend.views

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug=True)
