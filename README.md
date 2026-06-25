# Odinauto

Description
A full-stack AI-powered knowledge assistant that allows companies to upload internal documents and connect their existing tools, enabling employees to get instant accurate answers through a smart chatbot. Built with React, C# / NET, and PostgreSQL, the system uses Retrieval Augmented Generation (RAG) via Microsoft Agent Framework, ensuring every answer is strictly based on the company's own knowledge with a source reference attached to every response.

Functional requirements
Here are the updated Functional Requirements:
________________________________________
Functional Requirements
1. Company Admin Panel
•	Admin can register and login
•	Upload knowledge base through three sources: 
o	Documents — PDF, Word, TXT
o	Code — internal code standards, API docs, deployment guides
o	Manual Q&A — admin manually types question and answer pairs directly
•	View and delete uploaded knowledge base items
•	See analytics — most asked questions, unanswered questions
•	Generate embeddable chat widget code
•	Manage company settings — name, logo
________________________________________
2. Chat Bot — Internal Employees Only
•	Employee logs in to access the chatbot
•	Asks questions in natural language
•	AI answers based strictly on company's uploaded knowledge base
•	Every answer shows source reference
•	Chat history saved per employee session
________________________________________
3. Odin Bilhandel AS — Demo Company
•	Mock car dealership with preloaded internal knowledge base
•	Employee handbook, sales procedures, financing guide, service manuals, warranty policy, commission structure, code standards and API docs for internal dev team.



Frontend: React with JavaScript/TypeScript
Backend: C#/.NET and PostgreSQL

Auth inside PostGreSQL
Hosting: Maybe Azure

AI platform: Microsoft Agent Framework.
