from flask import Flask
from flask_restplus import Api,Resource

app = Flask(__name__)
api = Api(app)


@api.route("/copycat")
class CopyCat(Resource):
    def get(self):
        return {"status": "running"}


if __name__ == "__main__":
    app.run(debug=True)
