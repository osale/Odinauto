# Odin Auto — AI-Powered Company Knowledge Assistant

![React](https://img.shields.io/badge/React-TypeScript-blue)
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

A full-stack AI-powered knowledge assistant that allows companies to upload internal documents and connect their existing tools, enabling employees to get instant accurate answers through a smart chatbot. Built with React, C# / .NET, and PostgreSQL, the system uses Retrieval Augmented Generation (RAG) via Microsoft Agent Framework, ensuring every answer is strictly based on the company's own knowledge with a source reference attached to every response.

---

## ✅ Functional Requirements

### 1. Company Admin Panel

- Admin can register and login
- Upload knowledge base through three sources:
  - Documents — PDF, Word, TXT
  - Code — internal code standards, API docs, deployment guides
  - Manual Q&A — admin manually types question and answer pairs directly
- View and delete uploaded knowledge base items
- See analytics — most asked questions, unanswered questions
- Generate embeddable chat widget code
- Manage company settings — name, logo

### 2. Chat Bot — Internal Employees Only

- Employee logs in to access the chatbot
- Asks questions in natural language
- AI answers based strictly on company's uploaded knowledge base
- Every answer shows source reference
- Chat history saved per employee session

### 3. Odin Bilhandel AS — Demo Company

- Mock car dealership with preloaded internal knowledge base
- Includes employee handbook, sales procedures, financing guide, service manuals, warranty policy, commission structure, code standards and API docs for internal dev team

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

- pgvector extension for vector similarity search
- Auth handled inside PostgreSQL
- Stores companies, users, documents, code files, text chunks, embeddings, Q&A pairs and chat history

### AI — Microsoft Agent Framework

- Document, code and Q&A chunking and embeddings
- Vector similarity search
- AI response generation with source references

### Hosting

- Local development using Docker Compose for development and testing
- In the future potentially deployed to Azure — Static Web Apps, App Service and PostgreSQL
