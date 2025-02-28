Team Name - Deadline Tech

Team Members
Name - Md Fahad Alam
Name - Md Zahid Ahmad

PRABUDDHA Tech Fest Website Documentation

1. Introduction

The PRABUDDHA Tech Fest Website is a comprehensive, dynamic, and interactive online platform designed to serve as the central hub for Techno International New Town's annual tech festival. Its primary objective is to provide a seamless and engaging experience for all participants, attendees, and organizers. The website streamlines event management, enhances participant engagement, and ensures easy access to vital information.

Key aspects of the website include:

	- Centralized Information: A single source for all event-related details, schedules, and updates.
	- User-Friendly Interface: Intuitive navigation and a visually appealing design to ensure accessibility for all users.
	- Efficient Registration: A streamlined online registration system for participants and attendees.

2. Project Overview

Project Name: PRABUDDHA Tech Fest Website
Purpose: To manage and promote the PRABUDDHA Tech Fest, facilitate registration, and provide comprehensive event information.
Developed Using:
    Frontend: HTML5, CSS3, React.js, Bootstrap.
    Backend: Node.js (Express.js).
    Database: MongoDB.
Target Users: Students, faculty, guest speakers and tech enthusiasts.

3. Detailed Features

3.1. Home Page:

Event Banner: A visually striking banner with the event logo, theme, and countdown timer.
Event Highlights: Sections showcasing key event features, such as guest speaker profiles, workshop highlights, and competition previews.
Call-to-Action Buttons: Prominent buttons for registration, event schedule viewing, contact information, and social media links.

3.2. About Page:

Fest History and Objectives: A detailed overview of the PRABUDDHA Tech Fest's history, mission, and objectives.
Organizing Committee Details: Information about the organizing committee members, including their roles and responsibilities.
Sponsors and Partners: A list of sponsors and partners with their logos and links to their websites.

3.3. Event Section:

Event Categorization: Events are categorized into technical competitions (coding, robotics, AI challenges, Dev your Web, Debates etc.).
Individual Event Pages: Each event has a dedicated page with:
    - Detailed description of the event.
    - Date, time, and venue information.
    - Rules and eligibility criteria.
    - Registration link.
    - Any required resources or documents.

3.4. Registration System:

Online Registration Form: A user-friendly online registration form with the following fields:
    - Full name.
    - Email address.
    - Phone number.
    - College name.
    - Year of study.
    - Selection of events to participate in.
    - File upload for student ID or payment receipt.
*Registration Confirmation: Automated email confirmation upon successful registration.
Admin Panel: Backend interface to manage registrations, view participant lists, and generate reports.

3.5. Schedule and Live Updates:

Event Schedule: A comprehensive event schedule with date, time, venue, and event details.
Event Description: A detailed description about the  events.

3.6. Contact and Query Section:

Contact Information: Contact details of the organizing committee, including email addresses and phone numbers.
Social Media Links: Links to the organization's social media profiles.
*Frequently Asked Questions (FAQ): A comprehensive FAQ section addressing common queries about registration, participation, and event details.
*Query Form: An online form for users to submit specific queries.

4. Technology Stack

Frontend:
    HTML5, CSS3, JavaScript (ES6+).
    React.js (for dynamic UI components).
    Bootstrap (for responsive design).
Backend:
    Node.js (Express.js) for server-side logic.
Database:
    MongoDB for data storage.
Version Control:
    Git (GitHub).

5. Database Schema (MongoDB)

In MongoDB, we use collections instead of tables. Documents within these collections will have the following structure:

Users Collection:
    {
        _id: ObjectId, // MongoDB's default primary key
        name: String,
        email: String,
        phoneNumber: String,
        collegeName: String,
        yearOfStudy: String
    }

Events Collection:
    {
        _id: ObjectId,
        eventName: String,
        description: String,
        date: Date,
        time: String,
        venue: String,
        rules: String
    }

Registrations Collection:
    {
        _id: ObjectId,
        userId: ObjectId, // Reference to Users collection
        eventId: ObjectId, // Reference to Events collection
        filePath: String,
        registrationDate: Date
    }

Note:
    - MongoDB uses BSON (Binary JSON) documents.
    - Relationships are typically handled by storing IDs of related documents.
    - Dates are stored as ISODate objects.
    - _id is automatically generated.

6. System Architecture

Model-View-Controller (MVC) Architecture:
    View: React.js frontend for rendering the user interface.
    Controller: Node.js (Express.js) backend for handling user requests and business logic.
    Model: MongoDB database for data storage and retrieval.

7. Development and Deployment

Development Tools:
    VS Code (Integrated Development Environment).
    Git (Version Control).
    Node Package Manager (npm).
Deployment Process:
    Code upload to GitHub repository.
    Server hosting on a platform like Netlify for the front end, and a cloud provider like AWS or Google Cloud for the backend.
    Database setup on a cloud-based MongoDB service (e.g., MongoDB Atlas).
    Domain setup and DNS configuration to link the website to a custom domain.

8. Future Enhancements

AI-Powered Chatbot: Integration of a chatbot for instant query resolution.
Mobile App Version: Development of a mobile app for iOS and Android platforms.
Blockchain-Based Certificate Issuance: Implementation of blockchain technology for secure and verifiable certificate issuance.
Live Streaming Integration: Integration of live streaming for guest lectures and panel discussions.
Payment Gateway Integration: Direct payment integration for event ticket purchases.

9. Conclusion

The PRABUDDHA Tech Fest Website is designed to be a robust, user-friendly, and comprehensive platform that enhances the overall event experience. By providing efficient registration, detailed event information, and real-time updates, the website ensures smooth event management and successful participation. The planned future enhancements will further improve the platform's functionality and user engagement.
