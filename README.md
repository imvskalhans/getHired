# getHired Job Portal

This is a full-stack job posting website built with modern technologies, including React for the frontend, Spring Boot for the backend, and MongoDB for the database. The platform offers features similar to popular job search websites, allowing users to post job listings, search for available positions, and apply for jobs directly through the platform.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for designing modern and responsive user interfaces.
- **React Router**: Provides navigation and routing functionalities for React applications.
- **Axios**: A promise-based HTTP client for making API requests to the backend server.
- **Styled-components**: A CSS-in-JS library for styling React components with dynamic styles.

### Backend

- **Spring Boot**: An opinionated framework for building production-ready, standalone Spring applications.
- **Java**: A widely-used programming language for building enterprise-grade applications.
- **Spring Data MongoDB**: Simplifies the interaction with MongoDB databases by providing a high-level abstraction.
- **Spring Security**: Provides authentication and authorization functionalities to secure the backend APIs.
- **Maven**: A build automation tool used for managing dependencies and building the Spring Boot application.

### Database

- **MongoDB**: A NoSQL document database that stores data in flexible, JSON-like documents.
- **MongoDB Atlas**: A fully managed cloud database service for MongoDB, providing high availability and scalability.

### Deployment

- **Heroku**: A cloud platform that allows for easy deployment of web applications. It supports applications built with Spring Boot and React.
- **GitHub Actions**: Used for continuous integration and deployment (CI/CD) to automate the deployment process from GitHub repositories to Heroku.

## Features

- **Job Posting**: Users can create and publish job listings with detailed information, including job title, type (online/offline), description, required experience, technology stack, and salary.
- **Job Search**: Users can search for job listings based on various criteria such as keywords, job type, experience level, technology, and salary range.
- **Job Application (Coming Soon)**: Users will be able to apply for jobs directly through the platform, with support for uploading resumes and cover letters.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both frontend and backend by running:

   ```sh
   npm install

4. **Start the backend server:**

   ```sh
   cd server
   mvn spring-boot:run

5. **Start the frontend development server:**

   ```sh
   cd client
   npm start
   
6. **Access the application at `http://localhost:3000` in your web browser.**

## Screenshots

![Screenshot (3)](file:///C:/Users/Vishal/OneDrive%20-%20BBDU/Pictures/Screenshots/Screenshot%20(3).png)
![Screenshot (4)](file:///C:/Users/Vishal/OneDrive%20-%20BBDU/Pictures/Screenshots/Screenshot%20(4).png)
![Screenshot (5)](file:///C:/Users/Vishal/OneDrive%20-%20BBDU/Pictures/Screenshots/Screenshot%20(5).png)
![Screenshot (6)](file:///C:/Users/Vishal/OneDrive%20-%20BBDU/Pictures/Screenshots/Screenshot%20(6).png)
![Screenshot (7)](file:///C:/Users/Vishal/OneDrive%20-%20BBDU/Pictures/Screenshots/Screenshot%20(7).png)
![Screenshot (8)](file:///C:/Users/Vishal/OneDrive%20-%20BBDU/Pictures/Screenshots/Screenshot%20(8).png)
![Screenshot (9)](file:///C:/Users/Vishal/OneDrive%20-%20BBDU/Pictures/Screenshots/Screenshot%20(9).png)


## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) when making changes to the project.

## License

This project is licensed under the [MIT License](LICENSE).

