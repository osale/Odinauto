# Odin Auto — AI-Powered HR Knowledge Assistant

![Frontend](https://img.shields.io/badge/Frontend-React%20%2F%20TypeScript-blue)
![C#](https://img.shields.io/badge/Backend-C%23%20%2F%20.NET-purple)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)
![AI](https://img.shields.io/badge/AI-Microsoft%20Agent%20Framework-green)

---

## 👥 Team Members

| Name |
|---|
| Hamza Simsek |
| Anh Ngoc Le |
| Shabnam Iftikhar |

---

## 📖 Description

Many companies can struggle with information overload, especially within Human Resources. Employees waste time searching through HR documents, manuals, and policies just to find simple answers, or end up depending on experienced colleagues for answers that should be easily accessible. Important HR knowledge is often scattered across different files, folders, and systems, making it hard to find the right information at the right time. This can slow down productivity and lead to frustration.

Our project will be a full-stack web application with an integrated AI-powered chatbot focused on HR knowledge. The application will allow HR administrators to upload internal documents such as employee handbooks, leave policies, onboarding guides, and workplace procedures into one central platform. Employees can then ask questions in plain natural language and get instant, accurate answers with a source reference attached to the response. To demonstrate the platform, we will be using a mock company called Odin Auto, a Norwegian car dealership, as a real-world example of how the system works in practice.

The system will be built with React, C# / .NET, and PostgreSQL, using Retrieval Augmented Generation (RAG) via Microsoft Agent Framework. This will ensure the AI strictly answers based on the company's own uploaded HR documents. The result is a reliable, accurate, and relevant assistant for any employee. This will also reduce the workload on the HR team by automating responses to common questions. While the initial version focuses on HR, the platform is designed with a scalable architecture that can later be expanded to support additional departments such as IT, Sales, and Customer Service.

---

## 📋 Example Scenario

A new mechanic joins Odin Auto on his first day. He needs to know the procedure for reporting a workplace injury, but does not know who to ask. He opens the chatbot and asks *"What do I do if I get injured at work?"* and instantly receives the correct procedure with a reference to the workplace safety policy.

---

## ✅ Functional Requirements

### Must Have

- Admin panel for managing HR documents and the knowledge base
- Employee can register and login
- Upload HR documents as the core knowledge base — PDF, Word, TXT
- AI chatbot answers questions based strictly on uploaded HR documents
- Chatbot is only accessible to authenticated employees — not publicly available
- Answer shows source reference from the uploaded documents in the chatbot

### Should Have

- Expand knowledge base with two additional sources:
  - Manual Q&A — admin manually types question and answer pairs directly
  - Code — internal code standards, API docs, deployment guides
- View and delete uploaded knowledge base items
- Manage company settings — name, logo
- See analytics — most asked questions, unanswered questions
- Chat history saved per employee session
- Expand with extra departments such as IT, Sales and Finance

### Could Have

- Multi language support — adding Norwegian alongside English
- User roles — admin, manager, and employee with different access levels
- Feedback on answers — employees can rate whether the answer was helpful
- Expand knowledge base with additional sources such as website scraping and database records

---

## ⚙️ Technical Requirements

### Frontend — React + TypeScript

- Admin dashboard for uploading and managing HR documents and company settings
- Chat interface with real time responses and source reference display
- Mock company website — Odin Auto

### Backend — C# / .NET

- REST API connecting frontend to database and AI
- Document processing pipeline — PDF, Word, TXT text extraction and chunking
- AI integration via Microsoft Agent Framework
- Authentication technology ensuring only registered employees can access the chatbot

### Database — PostgreSQL

- Stores users, HR documents and maybe we will add chat history

### AI — Microsoft Agent Framework

- Develop own chatbot with Microsoft Agent Framework
- AI response generation strictly based on uploaded HR documents with source references

### Hosting

- Local development using Docker Compose
- In the future potentially deployed to Azure
