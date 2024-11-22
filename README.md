Bookstore Backend API
A role-based backend API for an e-bookstore system built using Node.js, Express.js, and MongoDB. This API supports Authors for publishing books and Users for browsing and purchasing books. Role-based middleware ensures secure and separated access for Authors and Users.

Features
For Authors:
Signup: Create an author account.
Add Books: Publish new books to the platform.
View Books: View a list of all published books.

For Users:
Signup: Create a user account.
Browse Books: Explore available books.
Purchase Books: Buy books and save them to your library.
View Purchased Books: See details of purchased books.

Technologies Used
Node.js: Backend server.
Express.js: Framework for building APIs.
MongoDB: Database to store users, authors, and books.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
API Endpoints
Author Routes
HTTP Method	Endpoint	Description	Authentication Required
POST	/author/signup	Register a new author account.	No
POST	/author/books	Publish a new book.	Yes
GET	/author/books	View all books (admin only).	Yes
User Routes
HTTP Method	Endpoint	Description	Authentication Required
POST	/user/signup	Register a new user account.	No
GET	/user/books	Browse all available books.	No
POST	/user/books/:id	Purchase a specific book.	Yes
GET	/user/purchasedbooks	View details of purchased books.	Yes
Installation & Setup
Clone the repository:
git clone https://github.com/SoloDevAbu/Bookstore-Backend.git
cd Bookstore-Backend

Install dependencies:
npm install

Create a .env file and add your MongoDB connection string:
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority

Start the server:
node index.js

The API will run on http://localhost:3000.

Folder Structure
Bookstore-Backend/
├── db/                   # Database models
│   ├── index.js          # Schemas for Authors, Users, and Books
├── middlewares/          # Authentication middleware
│   ├── authormiddleware.js
│   ├── usermiddleware.js
├── routes/               # API routes
│   ├── authorroute.js
│   ├── userroute.js
├── server.js             # Main server file

Future Improvements
Add JWT-based authentication for enhanced security.
Integrate file upload for book cover images.
Implement pagination for book listings.
Enable search and filtering for books.

Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request to improve the project.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
Created with ❤️ by SoloDevAbu. For inquiries, reach out on GitHub.
