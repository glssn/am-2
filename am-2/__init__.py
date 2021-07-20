from flask import Flask, request

# imports from video
# from .commands import create_tables
# from .extensions import db, login_manager
# from .models import User
# from .routes.auth import auth
# from .routes.main import main

from flask_restful import Api, Resource, reqparse, abort

app = Flask(__name__)
api = Api(app)

user_put_args = reqparse.RequestParser()
user_put_args.add_argument("name", type=str, help="User name must be specified", required=True)

users = {}

def abort_if_no_user(user_id):
    if user_id not in users:
        abort(404, message="user not found")

def abort_if_user_exist(user_id):
    if user_id in users:
        abort(409, message="user with id \"" + str(user_id) + "\" already exists")


@app.route("/")
def hello():
    return "Hello world!"

class User(Resource):
    def get(self, user_id):
        abort_if_no_user(user_id)
        return users[user_id] # return information about that user

    def put(self, user_id):
        abort_if_user_exist(user_id)
        args = user_put_args.parse_args()
        users[user_id] = args
        return users[user_id], 201 # successfully added user with information

    def delete(serlf, user_id):
        abort_if_no_user(user_id)
        del users[user_id]
        return 'user deleted', 204


api.add_resource(User, "/user/<int:user_id>")

# if __name__ == "__main__":
    # app.run(debug=True)

def create_app(config_file='settings.py'):
    app = Flask(__name__)
    app.config.from_pyfile(config_file)

    # db.init_app(app) # once db, login_manager imported, uncomment this.

    # login_manager.init_app(app)
    # login_manager.login_view = 'auth.login'
    #
    # @login_manager.user_loader
    # def load_user(user_id):
    #     return User.query.get(user_id)

    app.register_blueprint(main)
    app.register_blueprint(auth)

    # app.cli.add_command(create_tables)

    return app
