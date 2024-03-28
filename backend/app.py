from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)

# Replace your_uri with your actual MongoDB Atlas connection string
app.config["MONGO_URI"] = "mongodb+srv://i202424:waleedsufi123@task5.njfplee.mongodb.net/user?retryWrites=true&w=majority&appName=Task5"
mongo = PyMongo(app)

@app.route('/submit', methods=['POST'])
def submit_user_data():
    try:
        user_data = request.json
        print("hi")
        print("User data:", user_data)

        result = mongo.db.user.insert_one(user_data)
        print("Insert result:", result)
        return jsonify({"message": "User data saved successfully", "id": str(result.inserted_id)}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
