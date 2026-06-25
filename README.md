# Odin Auto — AI-Powered Company Knowledge Assistant

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

Many companies can struggle with information overload, especially within Human Resources. Employees waste time searching through HR documents, manuals, and policies just to find simple answers, or end up depending on experienced colleagues for answers that should be easily accessible. Important HR knowledge is often scattered across different files, folders, and systems, making it hard to find the right information at the right time. This can slow down productivity, lead to frustration, and make onboarding new employees unnecessarily difficult.

Our project will be a full-stack web application with an integrated AI-powered chatbot focused on HR knowledge. The application will allow HR administrators to upload internal documents such as employee handbooks, leave policies, onboarding guides, and workplace procedures into one central platform. Employees can then ask questions in plain natural language and get instant, accurate answers with a source reference attached to every response. To demonstrate the platform, we will be using a mock company called Odin Auto, a Norwegian car dealership, as a real-world example of how the system works in practice.

The system will be built with React, C# / .NET, and PostgreSQL, using Retrieval Augmented Generation (RAG) via Microsoft Agent Framework. This will ensure the AI strictly answers based on the company's own uploaded HR documents. The result is a reliable, accurate, and relevant assistant for any employee. This will also reduce the workload on the HR team by automating responses to common questions. While the initial version focuses on HR, the platform is designed with a scalable architecture that can later be expanded to support additional departments such as IT, Sales, and Customer Service.

## Example scenario
A new mechanic joins Odin Auto on his first day. He needs to know the procedure for reporting a workplace injury, but does not know who to ask. Furthermore, he opens the chatbot and asks, "What do I do if I get injured at work?" and instantly receives the correct procedure with a reference to the workplace safety policy.

---

## ✅ Functional Requirements

## Must Have
- Admin can register and login
- Employee can register and login
- Upload HR documents as the core knowledge base — PDF, Word, TXT
- AI chatbot answers questions based strictly on uploaded HR documents
- Every answer shows source reference

## Should Have
- Expand knowledge base with two additional sources:
     Manual Q&A — admin manually types question and answer pairs directly
     Code — internal code standards, API docs, deployment guides
- View and delete uploaded knowledge base items
- Manage company settings — name, logo
- See analytics — most asked questions, unanswered questions
- Support for additional departments such as IT, Sales and Finance


## Could Have
- Expand knowledge base with additional sources such as website scraping and database records
- Multi language support — adding Norwegian alongside English
- Chat history saved per employee session
- User roles — admin, manager, and employee with different access levels
- Feedback on answers — employees can rate whether the answer was helpful

---

## ⚙️ Technical Requirements

### Frontend — React + TypeScript

- Admin dashboard SPA
  - Document, code and Q&A upload interface
  - Knowledge base management
  - Analytics dashboard
  - Widget code generator
  - Company settings page
- Chat widget component
  - Real time chat interface
  - Source reference display
- Mock company website — Odin Bilhandel AS

### Backend — C# / ASP.NET Core

- REST API connecting frontend to database and AI
- Document processing pipeline — PDF, Word, TXT text extraction and code file parsing
- Text chunking and embedding generation
- RAG pipeline via Microsoft Agent Framework
- JWT authentication for admin and employees
- Multi tenant architecture — one platform, many companies

### Database — PostgreSQL

- Auth handled inside PostgreSQL
- Stores companies, users, documents, code files, text chunks, embeddings, Q&A pairs and chat history

### AI — Microsoft Agent Framework

- Document, code and Q&A chunking and embeddings
- Vector similarity search
- AI response generation with source references

### Hosting

- Local development and maybe in the future use Azure.
