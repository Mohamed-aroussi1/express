# Express TypeScript MongoDB API

A RESTful API built with Express.js, TypeScript, and MongoDB for managing student data.

## Features

- **Express.js** - Fast, unopinionated web framework for Node.js
- **TypeScript** - Type-safe JavaScript development
- **MongoDB** with **Mongoose** - NoSQL database with ODM
- **RESTful API** - Complete CRUD operations for students
- **Hot Reload** - Development server with nodemon

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or MongoDB Atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Mohamed-aroussi1/express.git
cd express
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your local machine or update the connection string in `src/index.ts`

## Usage

### Development Mode

Start the development server with hot reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Production Mode

1. Build the TypeScript code:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## API Endpoints

### Students

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/students` | Get all students |
| POST | `/students` | Create a new student |
| GET | `/students/:id` | Get student by ID |
| PUT | `/students/:id` | Update student by ID |
| DELETE | `/students/:id` | Delete student by ID |

### Student Model

```typescript
{
  fullName: string;
  email: string;
  age: number;
  class: string;
}
```

### Example Requests

#### Create a Student
```bash
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Mohamed Ali",
    "email": "mohamed@example.com",
    "age": 25,
    "class": "Computer Science"
  }'
```

#### Get All Students
```bash
curl http://localhost:3000/students
```

## Project Structure

```
├── src/
│   ├── models/
│   │   └── student.ts      # Student model and schema
│   └── index.ts            # Main application file
├── dist/                   # Compiled JavaScript files
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── nodemon.json            # Nodemon configuration
└── README.md               # Project documentation
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests (not implemented yet)

## Technologies Used

- **Express.js** - Web framework
- **TypeScript** - Programming language
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Nodemon** - Development tool for auto-restart
- **ts-node** - TypeScript execution environment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Mohamed Aroussi**
- GitHub: [@Mohamed-aroussi1](https://github.com/Mohamed-aroussi1)
- Email: aroussi644@gmail.com
