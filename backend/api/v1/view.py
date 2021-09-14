from flask import Flask
from flask_cors import CORS, cross_origin
from flask_restplus import Api, Resource, reqparse

app = Flask(__name__)
CORS(app)
api = Api(app)
parser = reqparse.RequestParser()
parser.add_argument("html_content", type=str)


@api.route("/copycat")
class CopyCat(Resource):
    def html_duplicate_algorithm(self, html_data):
        return html_data

    @api.expect(parser)
    def post(self):
        args = parser.parse_args()
        html_data = args["html_content"]
        duplicate_data = self.html_duplicate_algorithm(html_data)
        response = [
            '<button value="Foo" class="aa"/>',
            '<div><h1 class="red-text"> My Text </h1></div>',
        ]
        return {"data": response}, 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
