# Site Content Inventory

This document lists the content and data fields used by the current site. It excludes visual design, layout, colors, typography, and styling.

## Dataset summary

- Dataset: DBCM Study Material Curriculum Dataset (15 Departments - Major & Minor) (version 3.0.0)
- Dataset generated: 2026-10-20T17:33:24.470Z
- Source used by Express: `data/curriculum.json`
- Static fallback copy: `public/data/curriculum.json` (identical to the Express source)
- Counts: 15 departments, 6 semesters, 166 subjects, 826 syllabus modules, 399 IMP records, 310 note records, 465 PYQ records, 310 video records.

## Institution content

- Name: DBCM Study Material Platform
- Short name: DBCM
- Badge: Autonomous Academic Portal
- Location: DBCM Academic Campus
- Icon identifier: graduation-cap
- Academic schemes: DBCM Autonomous NEP 2024, Major-Minor Degree Framework, CBCS Undergraduate
- Displayed student count: 25,000+ Enrolled Students
- Displayed rating: 4.96

## Departments and subject counts

| ID | Department | Code | Subjects | Major | Minor |
|---|---|---:|---:|---:|---:|
| bca | Computer Science (BCA) | BCA | 12 | 8 | 4 |
| botany | Botany | BOT | 11 | 7 | 4 |
| chemistry | Chemistry | CHEM | 11 | 7 | 4 |
| physics | Physics | PHY | 11 | 7 | 4 |
| zoology | Zoology | ZOO | 11 | 7 | 4 |
| biotech | Biotechnology (BBT) | BBT | 11 | 7 | 4 |
| commerce | Commerce (B.Com) | B.COM | 11 | 7 | 4 |
| economics | Economics | ECO | 11 | 7 | 4 |
| education | Education | EDU | 11 | 7 | 4 |
| english | English | ENG | 11 | 7 | 4 |
| history | History | HIST | 11 | 7 | 4 |
| polsci | Political Science | POL | 11 | 7 | 4 |
| sociology | Sociology | SOC | 11 | 7 | 4 |
| bsw | Social Work (BSW) | BSW | 11 | 7 | 4 |
| psychology | Psychology | PYC | 11 | 7 | 4 |

## Semesters

| Number | Year | Label | Subjects |
|---:|---|---|---:|
| 1 | FY | Sem 1 (FY) | 45 |
| 2 | FY | Sem 2 (FY) | 31 |
| 3 | SY | Sem 3 (SY) | 30 |
| 4 | SY | Sem 4 (SY) | 30 |
| 5 | TY | Sem 5 (TY) | 15 |
| 6 | TY | Sem 6 (TY) | 15 |

## Subject data fields

Every subject record may include: ID, course code, name, short name, semester, track, department ID, branch IDs, university ID, credits, scheme, difficulty, passing probability, description, modules, IMP records, note records, PYQ records, and video records.

Each syllabus module has a number, title, marks weightage, and summary. The sections below include every subject and all nested records in the source data.

## Computer Science (BCA) (BCA)

### BCA101 — Programming Fundamentals with C

- ID: `bca101-cprogramming`
- Short name: C Programming
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Core fundamentals of procedural programming, pointers, memory allocation, algorithms, and file handling in C.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introduction to Algorithms & Flowcharts | 12 Marks | Problem solving paradigms, pseudocode, conditional structures. |
| 2 | Control Statements & Loops | 14 Marks | While, for, do-while loops, branching and switch-case. |
| 3 | Arrays, Strings & 2D Matrices | 16 Marks | Array storage, multidimensional arrays, string manipulation functions. |
| 4 | Pointers & Dynamic Memory Allocation | 18 Marks | Pointer arithmetic, malloc, calloc, realloc, and free. |
| 5 | Structures, Unions & Preprocessors | 12 Marks | User-defined data types, nested structs, macro definitions. |
| 6 | File Handling & Low-Level I/O | 12 Marks | File pointers, sequential and random access, error handling. |

**IMP records (3)**

- ID q-bca101-1; module 1; 10 marks; frequency: Repeated 4 Times in DBCM Exam; question text: —; answer hint: State signatures, null-checks, heap memory layout, and memory leaks.
- ID q-bca101-2; module 2; 8 marks; frequency: DBCM Mid-Sem & End-Sem Regular; question text: —; answer hint: Provide full C code with pointer arguments and stack diagrams.
- ID q-bca101-3; module 3; 10 marks; frequency: Asked in Winter 2023 Paper; question text: —; answer hint: Show row-column dot product loops and boundary checks.

**Notes (2)**

- ID n-bca101-1; Programming Fundamentals with C - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bca101-2; Programming Fundamentals with C - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Programming Fundamentals with C Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Programming Fundamentals with C Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCA102 — Computer Architecture & Digital Logic

- ID: `bca102-computerorg`
- Short name: Computer Org
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Combinational logic, flip-flops, Von Neumann architecture, instruction pipelines, and memory hierarchies.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Number Systems & Boolean Algebra | 14 Marks | Binary, octal, hex conversions, Karnaugh maps (K-Maps). |
| 2 | Combinational Logic Circuits | 16 Marks | Adders, subtractors, multiplexers, decoders, encoders. |
| 3 | Sequential Logic & Counters | 16 Marks | SR, JK, D, T flip-flops, registers, synchronous counters. |
| 4 | CPU Architecture & Micro-operations | 14 Marks | ALU, accumulator, instruction cycles, addressing modes. |
| 5 | Memory Hierarchy & Cache Memory | 14 Marks | SRAM, DRAM, cache mapping techniques, virtual memory. |
| 6 | Input-Output Organization & DMA | 12 Marks | Interrupts, polling, DMA controller architecture. |

**IMP records (2)**

- ID q-bca102-1; module 1; 10 marks; frequency: High Yield Paper 2024; question text: —; answer hint: Group 1s into quads/octets, identify prime implicants.
- ID q-bca102-2; module 2; 10 marks; frequency: DBCM Exam Regular; question text: —; answer hint: Show block diagrams, tag bits, line offsets, and hit ratio formulas.

**Notes (2)**

- ID n-bca102-1; Computer Architecture & Digital Logic - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bca102-2; Computer Architecture & Digital Logic - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Computer Architecture & Digital Logic Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Computer Architecture & Digital Logic Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCAM101 — IT Fundamentals & Office Automation

- ID: `bcam101-itbasicsminor`
- Short name: IT Basics (Minor)
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Introductory course for non-computing students covering personal computers, operating systems, MS Office tools, and digital literacy.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Computer Hardware & System Software | 15 Marks | CPU, RAM, storage, OS roles, GUI vs CLI. |
| 2 | Word Processing & Professional Documents | 18 Marks | Formatting, styles, tables, mail merge. |
| 3 | Spreadsheet Calculation & Formulas | 20 Marks | Formulas, VLOOKUP, pivot tables, data visualization. |
| 4 | Digital Presentations & Public Speaking Tools | 15 Marks | Slide master, animations, export formats. |
| 5 | Internet, Email & Cloud Collaboration | 16 Marks | Google Drive, OneDrive, web safety, netiquette. |
| 6 | Information Security Essentials | 16 Marks | Passwords, two-factor authentication, phishing defense. |

**IMP records (2)**

- ID q-bcam101-1; module 1; 8 marks; frequency: DBCM Minor Paper Regular; question text: —; answer hint: List: main document, data source, merge fields, finish.
- ID q-bcam101-2; module 2; 10 marks; frequency: High Yield Practical Exam; question text: —; answer hint: Detail lookup_value, table_array, col_index, range_lookup.

**Notes (2)**

- ID n-bcam101-1; IT Fundamentals & Office Automation - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bcam101-2; IT Fundamentals & Office Automation - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- IT Fundamentals & Office Automation Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- IT Fundamentals & Office Automation Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCA201 — Data Structures & Algorithms

- ID: `bca201-dsa`
- Short name: DSA
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Linear and non-linear data structures: Linked lists, stacks, queues, trees, graphs, hashing, and sorting algorithms.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Asymptotic Analysis & Arrays | 12 Marks | Big-O, Big-Omega, Theta notations, array traversal and searching. |
| 2 | Stacks & Queues Applications | 16 Marks | Infix to postfix conversion, circular queue, priority queue. |
| 3 | Linked Lists (Singly, Doubly, Circular) | 16 Marks | Node manipulation, pointer traversal, polynomial addition. |
| 4 | Trees, BST & AVL Trees | 18 Marks | Binary tree traversals, BST insertions/deletions, AVL tree balance factors. |
| 5 | Graphs & Graph Traversals (BFS, DFS) | 14 Marks | Adjacency matrix, adjacency lists, shortest path algorithms. |
| 6 | Sorting, Searching & Hashing | 12 Marks | QuickSort, MergeSort, Hash tables, collision resolution. |

**IMP records (2)**

- ID q-bca201-1; module 1; 12 marks; frequency: High Yield DBCM Question; question text: —; answer hint: Explain LL, RR, LR, and RL rotations with balance factor diagrams.
- ID q-bca201-2; module 2; 8 marks; frequency: Repeated 3 Times; question text: —; answer hint: Create columns: Token, Action, Stack, Output String.

**Notes (2)**

- ID n-bca201-1; Data Structures & Algorithms - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bca201-2; Data Structures & Algorithms - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Data Structures & Algorithms Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Data Structures & Algorithms Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCA202 — Object-Oriented Programming with Java

- ID: `bca202-corejava`
- Short name: Core Java
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Classes, objects, inheritance, polymorphism, interfaces, exception handling, multithreading, and collections framework.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | OOP Principles & Java Basics | 12 Marks | Encapsulation, inheritance, polymorphism, JVM architecture. |
| 2 | Classes, Objects & Constructors | 14 Marks | Constructor overloading, this keyword, static members. |
| 3 | Inheritance & Interfaces | 16 Marks | Abstract classes, method overriding, super keyword, multiple inheritance. |
| 4 | Exception Handling & Custom Exceptions | 14 Marks | Try-catch-finally blocks, throw vs throws, custom exception classes. |
| 5 | Multithreading & Synchronization | 16 Marks | Thread lifecycle, Runnable interface, synchronized blocks, deadlocks. |
| 6 | Java Collections Framework | 14 Marks | ArrayList, LinkedList, HashMap, HashSet, Iterator interface. |

**IMP records (2)**

- ID q-bca202-1; module 1; 10 marks; frequency: Asked in Every DBCM Semester Exam; question text: —; answer hint: Draw exception hierarchy (Throwable, Exception, RuntimeException).
- ID q-bca202-2; module 2; 10 marks; frequency: High Yield Question; question text: —; answer hint: Show New, Runnable, Blocked, Waiting, Terminated states.

**Notes (2)**

- ID n-bca202-1; Object-Oriented Programming with Java - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bca202-2; Object-Oriented Programming with Java - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Object-Oriented Programming with Java Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Object-Oriented Programming with Java Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCAM201 — Web Designing & HTML5/CSS3

- ID: `bcam201-webdesignminor`
- Short name: Web Design (Minor)
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Creation of modern responsive web pages without programming prerequisites. HTML5 semantics, CSS styling, flexbox, and site publishing.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introduction to Internet & Web Browsers | 14 Marks | Domain names, DNS, URLs, HTTP basics. |
| 2 | HTML5 Semantic Layouts | 18 Marks | Header, nav, main, section, article, footer, forms. |
| 3 | CSS3 Styling & Typography | 18 Marks | Colors, fonts, box model, margins, borders, padding. |
| 4 | Responsive Design & Flexbox | 18 Marks | Media queries, flex container and item properties. |
| 5 | Images, Media & Embeds | 16 Marks | Audio, video, iframes, SVG graphics. |
| 6 | Website Publishing & Free Hosting | 16 Marks | GitHub Pages, Netlify deployment basics. |

**IMP records (1)**

- ID q-bcam201-1; module 1; 8 marks; frequency: DBCM Exam Regular; question text: —; answer hint: Draw nested boxes and calculate total element width.

**Notes (2)**

- ID n-bcam201-1; Web Designing & HTML5/CSS3 - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bcam201-2; Web Designing & HTML5/CSS3 - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Web Designing & HTML5/CSS3 Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Web Designing & HTML5/CSS3 Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCA301 — Database Management Systems (DBMS)

- ID: `bca301-dbms`
- Short name: DBMS
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Relational database model, SQL queries, ER diagrams, normalization (1NF to BCNF), transaction management, and ACID properties.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | DBMS Architecture & ER Modeling | 14 Marks | Three-schema architecture, ER diagrams, primary/foreign keys. |
| 2 | Relational Algebra & Calculus | 14 Marks | Select, project, join, set operations, tuple relational calculus. |
| 3 | Structured Query Language (SQL) | 18 Marks | DDL, DML, DCL, subqueries, group by, joins, stored procedures. |
| 4 | Relational Database Normalization | 16 Marks | Functional dependencies, 1NF, 2NF, 3NF, BCNF decomposition. |
| 5 | Transaction Processing & ACID | 16 Marks | ACID properties, serializability, two-phase locking (2PL). |
| 6 | Database Recovery & Indexing | 12 Marks | Log-based recovery, checkpoints, B-Trees and B+ Trees. |

**IMP records (2)**

- ID q-bca301-1; module 1; 12 marks; frequency: Top High-Yield DBCM Question; question text: —; answer hint: Define functional dependencies and loss-less join decomposition.
- ID q-bca301-2; module 2; 10 marks; frequency: Repeated 5 Times; question text: —; answer hint: Detail Atomicity, Consistency, Isolation, Durability.

**Notes (2)**

- ID n-bca301-1; Database Management Systems (DBMS) - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bca301-2; Database Management Systems (DBMS) - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Database Management Systems (DBMS) Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Database Management Systems (DBMS) Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCAM301 — Introduction to Python for Non-Majors

- ID: `bcam301-pythonminor`
- Short name: Python Minor
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Gentle introduction to scripting with Python: syntax, conditionals, loops, lists, dictionaries, and automated file tasks.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Python Syntax & Variables | 15 Marks | Data types, input/output, operators. |
| 2 | Decision Making & Iteration | 18 Marks | If-elif-else, for loops, while loops, break, continue. |
| 3 | Python Collections (Lists, Tuples, Dictionaries) | 20 Marks | List comprehensions, dict operations, key-value lookup. |
| 4 | Functions & Reusable Code | 16 Marks | Defining functions, default arguments, return values. |
| 5 | File Reading & Simple Automation | 16 Marks | Reading text and CSV files, writing output. |
| 6 | Basic Data Visualization with Matplotlib | 15 Marks | Bar charts, line graphs, pie charts. |

**IMP records (1)**

- ID q-bcam301-1; module 1; 8 marks; frequency: DBCM Minor Regular; question text: —; answer hint: Show mutable sequence vs hash table key-value pairs.

**Notes (2)**

- ID n-bcam301-1; Introduction to Python for Non-Majors - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bcam301-2; Introduction to Python for Non-Majors - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Introduction to Python for Non-Majors Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Introduction to Python for Non-Majors Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCA401 — Web Technologies & Full-Stack Development

- ID: `bca401-webtech`
- Short name: Web Tech
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Modern web architectures: HTML5/CSS3, JavaScript ES6+, React.js frontend, Node.js/Express backend, and REST APIs.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | HTML5, CSS3 & Responsive Design | 12 Marks | Semantic HTML, Flexbox, CSS Grid, media queries. |
| 2 | JavaScript ES6+ & DOM Manipulation | 16 Marks | Arrow functions, promises, async/await, closures, fetch API. |
| 3 | Frontend Frameworks (React.js) | 18 Marks | JSX, components, hooks (useState, useEffect), state management. |
| 4 | Backend Development with Node.js & Express | 16 Marks | Middleware, routing, HTTP request-response lifecycle. |
| 5 | RESTful API Design & MongoDB Integration | 16 Marks | CRUD endpoints, Mongoose models, JWT authentication. |
| 6 | Web Security & Deployment | 12 Marks | CORS, XSS, CSRF prevention, Git and cloud deployment. |

**IMP records (2)**

- ID q-bca401-1; module 1; 10 marks; frequency: DBCM 2024 Exam Paper; question text: —; answer hint: Compare class lifecycle with hooks dependency arrays.
- ID q-bca401-2; module 2; 10 marks; frequency: High Yield Paper; question text: —; answer hint: Diagram libuv, event queue, call stack, worker threads.

**Notes (2)**

- ID n-bca401-1; Web Technologies & Full-Stack Development - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bca401-2; Web Technologies & Full-Stack Development - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Web Technologies & Full-Stack Development Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Web Technologies & Full-Stack Development Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCAM401 — Cyber Security & Digital Safety

- ID: `bcam401-cybersafetyminor`
- Short name: Cyber Safety (Minor)
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Understanding cyber threats, identity theft, malware, safe social media practices, and Indian Cyber Laws (IT Act 2000).

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Cyber Threats & Social Engineering | 16 Marks | Phishing, vishing, impersonation attacks. |
| 2 | Malware & Ransomware Defense | 18 Marks | Viruses, worms, trojans, ransomware mitigation. |
| 3 | Password Security & Safe Browsing | 18 Marks | Password managers, MFA, cookie security, VPNs. |
| 4 | Social Media Privacy & Identity Theft | 16 Marks | Profile hardening, fraud prevention, digital footprint. |
| 5 | Online Financial Fraud & UPI Safety | 16 Marks | Safe banking practices, reporting unauthorized transactions. |
| 6 | Indian IT Act 2000 & Cyber Grievance Reporting | 16 Marks | Legal penalties, cyber crime cell reporting. |

**IMP records (1)**

- ID q-bcam401-1; module 1; 10 marks; frequency: High Yield DBCM Question; question text: —; answer hint: Detail fake URLs, email headers, MFA, and red flags.

**Notes (2)**

- ID n-bcam401-1; Cyber Security & Digital Safety - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bcam401-2; Cyber Security & Digital Safety - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Cyber Security & Digital Safety Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Cyber Security & Digital Safety Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCA501 — Computer Networks & Security

- ID: `bca501-networks`
- Short name: Networks
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: OSI 7-layer model, TCP/IP, IP addressing, routing algorithms, cryptographic ciphers, and firewalls.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Network Models & Physical Layer | 12 Marks | OSI vs TCP/IP models, transmission media, modulation. |
| 2 | Data Link Layer & Framing | 14 Marks | Error detection (CRC), sliding window protocols, Ethernet. |
| 3 | Network Layer & IP Addressing | 18 Marks | IPv4, IPv6, subnetting, CIDR, OSPF and BGP routing. |
| 4 | Transport Layer & Congestion Control | 16 Marks | TCP 3-way handshake, UDP, flow control, congestion window. |
| 5 | Application Layer Protocols | 14 Marks | DNS, HTTP/HTTPS, FTP, SMTP, DHCP services. |
| 6 | Network Security & Cryptography | 14 Marks | RSA algorithm, symmetric ciphers, SSL/TLS, firewalls. |

**IMP records (2)**

- ID q-bca501-1; module 1; 10 marks; frequency: DBCM Core Exam Question; question text: —; answer hint: Draw layer comparison diagram with PDU names.
- ID q-bca501-2; module 2; 10 marks; frequency: Numerical High Yield; question text: —; answer hint: Show borrow bits, subnet mask /26, network/broadcast addresses.

**Notes (2)**

- ID n-bca501-1; Computer Networks & Security - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bca501-2; Computer Networks & Security - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Computer Networks & Security Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Computer Networks & Security Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCA601 — Artificial Intelligence & Machine Learning

- ID: `bca601-aiml`
- Short name: AI & ML
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Search heuristics, knowledge representation, supervised and unsupervised learning, neural networks, and model evaluation.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introduction to AI & Agent Architecture | 12 Marks | Intelligent agents, environments, problem spaces. |
| 2 | Heuristic Search Strategies | 16 Marks | A* search, minimax algorithm, alpha-beta pruning. |
| 3 | Supervised Learning Algorithms | 18 Marks | Linear regression, logistic regression, decision trees, SVM. |
| 4 | Unsupervised Learning & Clustering | 16 Marks | K-Means clustering, hierarchical clustering, PCA dimensionality reduction. |
| 5 | Artificial Neural Networks | 16 Marks | Perceptrons, multi-layer perceptron, backpropagation algorithm. |
| 6 | Model Evaluation & Ethical AI | 12 Marks | Precision, recall, F1-score, ROC curves, bias and fairness. |

**IMP records (2)**

- ID q-bca601-1; module 1; 10 marks; frequency: DBCM Final Exam Paper; question text: —; answer hint: State f(n) = g(n) + h(n), provide 8-puzzle or graph search example.
- ID q-bca601-2; module 2; 12 marks; frequency: High Yield Regular Question; question text: —; answer hint: Apply chain rule of partial derivatives on Mean Squared Error.

**Notes (2)**

- ID n-bca601-1; Artificial Intelligence & Machine Learning - Complete DBCM Department Notes; 58 pages; author: DBCM Computer Science (BCA) Faculty; reads: 14200; text/file: —
- ID n-bca601-2; Artificial Intelligence & Machine Learning - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Artificial Intelligence & Machine Learning Complete Video Lectures; channel: DBCM Computer Science (BCA) Faculty; item count: 28; URL: https://www.youtube.com
- Artificial Intelligence & Machine Learning Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Botany (BOT)

### BOT101 — Plant Diversity & Cryptogams

- ID: `bot101-cryptogams`
- Short name: Cryptogams
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Study of non-flowering plants: Algae, Fungi, Bryophytes, and Pteridophytes with evolutionary morphology.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Plant Diversity & Cryptogams. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bot101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bot101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bot101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bot101-1; Plant Diversity & Cryptogams - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-bot101-2; Plant Diversity & Cryptogams - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Plant Diversity & Cryptogams Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Plant Diversity & Cryptogams Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOT102 — Microbiology & Plant Pathology

- ID: `bot102-plantpathology`
- Short name: Plant Pathology
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Bacterial and viral plant pathogens, disease cycles, immunity mechanisms, and crop defense.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Microbiology & Plant Pathology. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bot102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bot102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bot102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bot102-1; Microbiology & Plant Pathology - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-bot102-2; Microbiology & Plant Pathology - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Microbiology & Plant Pathology Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Microbiology & Plant Pathology Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOTM101 — Gardening, Nursery & Floriculture

- ID: `botm101-gardeningminor`
- Short name: Gardening Minor
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Practical gardening skills, potting mixtures, vegetative propagation, and commercial flower growing.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Gardening, Nursery & Floriculture. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-botm101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-botm101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-botm101-1; Gardening, Nursery & Floriculture - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-botm101-2; Gardening, Nursery & Floriculture - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Gardening, Nursery & Floriculture Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Gardening, Nursery & Floriculture Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOT201 — Anatomy & Embryology of Angiosperms

- ID: `bot201-plantanatomy`
- Short name: Plant Anatomy
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Internal tissue systems, secondary growth, microsporogenesis, megasporogenesis, and fertilization.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Anatomy & Embryology of Angiosperms. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bot201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bot201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bot201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bot201-1; Anatomy & Embryology of Angiosperms - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-bot201-2; Anatomy & Embryology of Angiosperms - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Anatomy & Embryology of Angiosperms Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Anatomy & Embryology of Angiosperms Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOTM201 — Biofertilizers & Organic Farming

- ID: `botm201-biofertilizers`
- Short name: Biofertilizers
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Rhizobium, Mycorrhiza, blue-green algae, vermicomposting, and sustainable crop nutrition.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Biofertilizers & Organic Farming. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-botm201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-botm201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-botm201-1; Biofertilizers & Organic Farming - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-botm201-2; Biofertilizers & Organic Farming - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Biofertilizers & Organic Farming Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Biofertilizers & Organic Farming Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOT301 — Plant Taxonomy & Systematic Botany

- ID: `bot301-taxonomy`
- Short name: Taxonomy
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Principles of plant classification (Bentham & Hooker, APG), herbarium techniques, and botanical nomenclature.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Plant Taxonomy & Systematic Botany. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bot301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bot301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bot301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bot301-1; Plant Taxonomy & Systematic Botany - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-bot301-2; Plant Taxonomy & Systematic Botany - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Plant Taxonomy & Systematic Botany Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Plant Taxonomy & Systematic Botany Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOTM301 — Medicinal Plants & Home Herbal Remedies

- ID: `botm301-medicinalplants`
- Short name: Medicinal Plants
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Identification, active constituents, and cultivation of Tulsi, Neem, Aloe Vera, and Ashwagandha.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Medicinal Plants & Home Herbal Remedies. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-botm301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-botm301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-botm301-1; Medicinal Plants & Home Herbal Remedies - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-botm301-2; Medicinal Plants & Home Herbal Remedies - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Medicinal Plants & Home Herbal Remedies Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Medicinal Plants & Home Herbal Remedies Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOT401 — Plant Physiology & Metabolism

- ID: `bot401-plantphysiology`
- Short name: Plant Physiology
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Water relations, photosynthesis (C3, C4, CAM), respiration, nitrogen metabolism, and phytohormones.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Plant Physiology & Metabolism. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bot401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bot401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bot401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bot401-1; Plant Physiology & Metabolism - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-bot401-2; Plant Physiology & Metabolism - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Plant Physiology & Metabolism Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Plant Physiology & Metabolism Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOTM401 — Mushroom Cultivation Technology

- ID: `botm401-mushroomtech`
- Short name: Mushroom Tech
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Spawn production, substrate preparation, harvest and processing of Button and Oyster mushrooms.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Mushroom Cultivation Technology. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-botm401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-botm401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-botm401-1; Mushroom Cultivation Technology - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-botm401-2; Mushroom Cultivation Technology - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Mushroom Cultivation Technology Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Mushroom Cultivation Technology Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOT501 — Plant Biotechnology & Tissue Culture

- ID: `bot501-tissueculture`
- Short name: Tissue Culture
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Callus induction, micropropagation, somaclonal variation, cryopreservation, and transgenic crops.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Plant Biotechnology & Tissue Culture. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bot501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bot501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bot501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bot501-1; Plant Biotechnology & Tissue Culture - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-bot501-2; Plant Biotechnology & Tissue Culture - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Plant Biotechnology & Tissue Culture Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Plant Biotechnology & Tissue Culture Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BOT601 — Economic Botany & Ethnobotany

- ID: `bot601-economicbotany`
- Short name: Economic Botany
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Cereals, pulses, timber, spices, medicinal flora, and indigenous tribal botanical knowledge.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Economic Botany & Ethnobotany. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bot601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bot601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bot601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bot601-1; Economic Botany & Ethnobotany - Complete DBCM Department Notes; 58 pages; author: DBCM Botany Faculty; reads: 14200; text/file: —
- ID n-bot601-2; Economic Botany & Ethnobotany - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Economic Botany & Ethnobotany Complete Video Lectures; channel: DBCM Botany Faculty; item count: 28; URL: https://www.youtube.com
- Economic Botany & Ethnobotany Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Chemistry (CHEM)

### CHE101 — Inorganic Chemistry: Atomic Structure & Bonding

- ID: `che101-inorganicchemi`
- Short name: Inorganic Chem I
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Schrodinger equation, periodic trends, ionic and covalent bonding, VSEPR, and MO theory.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Inorganic Chemistry: Atomic Structure & Bonding. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-che101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-che101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-che101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-che101-1; Inorganic Chemistry: Atomic Structure & Bonding - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-che101-2; Inorganic Chemistry: Atomic Structure & Bonding - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Inorganic Chemistry: Atomic Structure & Bonding Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Inorganic Chemistry: Atomic Structure & Bonding Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHE102 — Organic Chemistry: Stereochemistry & Mechanisms

- ID: `che102-organicchemi`
- Short name: Organic Chem I
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: IUPAC nomenclature, optical isomerism, conformation of alkanes, reactive intermediates (carbocations).

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Organic Chemistry: Stereochemistry & Mechanisms. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-che102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-che102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-che102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-che102-1; Organic Chemistry: Stereochemistry & Mechanisms - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-che102-2; Organic Chemistry: Stereochemistry & Mechanisms - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Organic Chemistry: Stereochemistry & Mechanisms Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Organic Chemistry: Stereochemistry & Mechanisms Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHEM101 — Chemistry in Everyday Life

- ID: `chem101-everydaychemminor`
- Short name: Everyday Chem Minor
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Chemical principles in soaps, detergents, cosmetics, plastics, food additives, and domestic hygiene.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Chemistry in Everyday Life. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-chem101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-chem101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-chem101-1; Chemistry in Everyday Life - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-chem101-2; Chemistry in Everyday Life - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Chemistry in Everyday Life Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Chemistry in Everyday Life Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHE201 — Physical Chemistry: Thermodynamics & Chemical Kinetics

- ID: `che201-physicalchemi`
- Short name: Physical Chem I
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: First and second laws of thermodynamics, Carnot cycle, reaction rate equations, and Arrhenius equation.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Physical Chemistry: Thermodynamics & Chemical Kinetics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-che201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-che201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-che201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-che201-1; Physical Chemistry: Thermodynamics & Chemical Kinetics - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-che201-2; Physical Chemistry: Thermodynamics & Chemical Kinetics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Physical Chemistry: Thermodynamics & Chemical Kinetics Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Physical Chemistry: Thermodynamics & Chemical Kinetics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHEM201 — Environmental Chemistry & Pollution Analysis

- ID: `chem201-envchemistry`
- Short name: Env Chemistry
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Water quality parameters (BOD, COD), greenhouse effect, acid rain, and heavy metal toxicity testing.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Environmental Chemistry & Pollution Analysis. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-chem201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-chem201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-chem201-1; Environmental Chemistry & Pollution Analysis - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-chem201-2; Environmental Chemistry & Pollution Analysis - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Environmental Chemistry & Pollution Analysis Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Environmental Chemistry & Pollution Analysis Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHE301 — Transition Elements & Coordination Chemistry

- ID: `che301-coordinationchem`
- Short name: Coordination Chem
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Werner theory, crystal field theory (CFT), Jahn-Teller effect, and magnetic properties of complexes.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Transition Elements & Coordination Chemistry. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-che301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-che301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-che301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-che301-1; Transition Elements & Coordination Chemistry - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-che301-2; Transition Elements & Coordination Chemistry - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Transition Elements & Coordination Chemistry Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Transition Elements & Coordination Chemistry Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHEM301 — Food Chemistry & Adulteration Testing

- ID: `chem301-foodchem`
- Short name: Food Chem
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Nutritional biochemistry, food preservatives, artificial sweeteners, and simple chemical tests for adulterants.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Food Chemistry & Adulteration Testing. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-chem301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-chem301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-chem301-1; Food Chemistry & Adulteration Testing - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-chem301-2; Food Chemistry & Adulteration Testing - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Food Chemistry & Adulteration Testing Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Food Chemistry & Adulteration Testing Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHE401 — Quantum Chemistry & Molecular Spectroscopy

- ID: `che401-spectroscopy`
- Short name: Spectroscopy
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Rotational, vibrational (IR), electronic (UV-Vis) spectroscopy, and NMR spectroscopy fundamentals.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Quantum Chemistry & Molecular Spectroscopy. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-che401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-che401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-che401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-che401-1; Quantum Chemistry & Molecular Spectroscopy - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-che401-2; Quantum Chemistry & Molecular Spectroscopy - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Quantum Chemistry & Molecular Spectroscopy Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Quantum Chemistry & Molecular Spectroscopy Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHEM401 — Pharmaceutical Chemistry & OTC Formulations

- ID: `chem401-pharmachemminor`
- Short name: Pharma Chem Minor
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Drug action, antipyretics, antibiotics, analgesics, antacids, and dosage delivery systems.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Pharmaceutical Chemistry & OTC Formulations. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-chem401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-chem401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-chem401-1; Pharmaceutical Chemistry & OTC Formulations - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-chem401-2; Pharmaceutical Chemistry & OTC Formulations - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Pharmaceutical Chemistry & OTC Formulations Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Pharmaceutical Chemistry & OTC Formulations Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHE501 — Synthetic Organic Chemistry & Heterocycles

- ID: `che501-organicsynthesis`
- Short name: Organic Synthesis
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Named reactions (Aldol, Claisen, Wittig), heterocyclic compounds, and green chemistry principles.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Synthetic Organic Chemistry & Heterocycles. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-che501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-che501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-che501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-che501-1; Synthetic Organic Chemistry & Heterocycles - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-che501-2; Synthetic Organic Chemistry & Heterocycles - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Synthetic Organic Chemistry & Heterocycles Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Synthetic Organic Chemistry & Heterocycles Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### CHE601 — Polymer Chemistry & Material Science

- ID: `che601-polymerchem`
- Short name: Polymer Chem
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Polymerization mechanisms, molecular weight determination, conducting polymers, and nanomaterials.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Polymer Chemistry & Material Science. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-che601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-che601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-che601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-che601-1; Polymer Chemistry & Material Science - Complete DBCM Department Notes; 58 pages; author: DBCM Chemistry Faculty; reads: 14200; text/file: —
- ID n-che601-2; Polymer Chemistry & Material Science - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Polymer Chemistry & Material Science Complete Video Lectures; channel: DBCM Chemistry Faculty; item count: 28; URL: https://www.youtube.com
- Polymer Chemistry & Material Science Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Physics (PHY)

### PHY101 — Mechanics & General Properties of Matter

- ID: `phy101-mechanics`
- Short name: Mechanics
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Newtonian mechanics, rotational dynamics, central forces, elasticity, fluid dynamics, and surface tension.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Mechanics & General Properties of Matter. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-phy101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-phy101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-phy101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-phy101-1; Mechanics & General Properties of Matter - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phy101-2; Mechanics & General Properties of Matter - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Mechanics & General Properties of Matter Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Mechanics & General Properties of Matter Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHY102 — Mathematical Physics & Vectors

- ID: `phy102-mathphysics`
- Short name: Math Physics
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Vector calculus, gradient, divergence, curl, line and surface integrals, and differential equations.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Mathematical Physics & Vectors. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-phy102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-phy102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-phy102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-phy102-1; Mathematical Physics & Vectors - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phy102-2; Mathematical Physics & Vectors - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Mathematical Physics & Vectors Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Mathematical Physics & Vectors Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHYM101 — Everyday Physics & Gadget Mechanics

- ID: `phym101-everydayphysics`
- Short name: Everyday Physics
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Physical principles behind refrigerators, smartphones, microwave ovens, motors, and LED lamps.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Everyday Physics & Gadget Mechanics. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-phym101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-phym101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-phym101-1; Everyday Physics & Gadget Mechanics - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phym101-2; Everyday Physics & Gadget Mechanics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Everyday Physics & Gadget Mechanics Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Everyday Physics & Gadget Mechanics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHY201 — Thermal Physics & Statistical Mechanics

- ID: `phy201-thermalphysics`
- Short name: Thermal Physics
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Laws of thermodynamics, entropy, Maxwell-Boltzmann, Bose-Einstein, and Fermi-Dirac distributions.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Thermal Physics & Statistical Mechanics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-phy201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-phy201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-phy201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-phy201-1; Thermal Physics & Statistical Mechanics - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phy201-2; Thermal Physics & Statistical Mechanics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Thermal Physics & Statistical Mechanics Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Thermal Physics & Statistical Mechanics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHYM201 — Fundamentals of Astronomy & Space Science

- ID: `phym201-astronomyminor`
- Short name: Astronomy Minor
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Solar system, stellar evolution, black holes, telescopes, and satellite orbits.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Fundamentals of Astronomy & Space Science. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-phym201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-phym201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-phym201-1; Fundamentals of Astronomy & Space Science - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phym201-2; Fundamentals of Astronomy & Space Science - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Fundamentals of Astronomy & Space Science Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Fundamentals of Astronomy & Space Science Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHY301 — Electricity, Magnetism & Electromagnetic Theory

- ID: `phy301-electromagnetism`
- Short name: Electromagnetism
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Gauss law, Biot-Savart law, Ampere law, Maxwell equations, and electromagnetic wave propagation.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Electricity, Magnetism & Electromagnetic Theory. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-phy301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-phy301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-phy301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-phy301-1; Electricity, Magnetism & Electromagnetic Theory - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phy301-2; Electricity, Magnetism & Electromagnetic Theory - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Electricity, Magnetism & Electromagnetic Theory Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Electricity, Magnetism & Electromagnetic Theory Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHYM301 — Renewable Energy & Solar Technologies

- ID: `phym301-solartech`
- Short name: Solar Tech
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Photovoltaic cells, solar thermal energy, wind turbines, and energy storage batteries.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Renewable Energy & Solar Technologies. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-phym301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-phym301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-phym301-1; Renewable Energy & Solar Technologies - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phym301-2; Renewable Energy & Solar Technologies - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Renewable Energy & Solar Technologies Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Renewable Energy & Solar Technologies Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHY401 — Optics, Wave Propagation & Lasers

- ID: `phy401-opticslasers`
- Short name: Optics & Lasers
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Interference, diffraction, polarization, optical fibers, and laser stimulation principles.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Optics, Wave Propagation & Lasers. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-phy401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-phy401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-phy401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-phy401-1; Optics, Wave Propagation & Lasers - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phy401-2; Optics, Wave Propagation & Lasers - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Optics, Wave Propagation & Lasers Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Optics, Wave Propagation & Lasers Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHYM401 — Physics of Sound, Acoustics & Music

- ID: `phym401-acousticsminor`
- Short name: Acoustics Minor
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Sound waves, musical scales, decibels, architectural acoustics, and noise reduction.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Physics of Sound, Acoustics & Music. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-phym401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-phym401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-phym401-1; Physics of Sound, Acoustics & Music - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phym401-2; Physics of Sound, Acoustics & Music - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Physics of Sound, Acoustics & Music Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Physics of Sound, Acoustics & Music Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHY501 — Quantum Mechanics & Modern Physics

- ID: `phy501-quantumphysics`
- Short name: Quantum Physics
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Wave-particle duality, Heisenberg uncertainty, particle in a box, and harmonic oscillator.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Quantum Mechanics & Modern Physics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-phy501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-phy501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-phy501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-phy501-1; Quantum Mechanics & Modern Physics - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phy501-2; Quantum Mechanics & Modern Physics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Quantum Mechanics & Modern Physics Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Quantum Mechanics & Modern Physics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### PHY601 — Solid State Physics & Nuclear Physics

- ID: `phy601-solidstatenuclear`
- Short name: Solid State & Nuclear
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Crystal lattices, X-ray diffraction, band theory of solids, nuclear fission, and radioactivity.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Solid State Physics & Nuclear Physics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-phy601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-phy601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-phy601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-phy601-1; Solid State Physics & Nuclear Physics - Complete DBCM Department Notes; 58 pages; author: DBCM Physics Faculty; reads: 14200; text/file: —
- ID n-phy601-2; Solid State Physics & Nuclear Physics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Solid State Physics & Nuclear Physics Complete Video Lectures; channel: DBCM Physics Faculty; item count: 28; URL: https://www.youtube.com
- Solid State Physics & Nuclear Physics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Zoology (ZOO)

### ZOO101 — Non-Chordata Diversity & Classification

- ID: `zoo101-nonchordates`
- Short name: Non-Chordates
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Comparative morphology and organization of Protozoa, Porifera, Coelenterata, Annelida, and Arthropoda.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Non-Chordata Diversity & Classification. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-zoo101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-zoo101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-zoo101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-zoo101-1; Non-Chordata Diversity & Classification - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoo101-2; Non-Chordata Diversity & Classification - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Non-Chordata Diversity & Classification Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Non-Chordata Diversity & Classification Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOO102 — Biosystematics & Animal Evolution

- ID: `zoo102-animalevolution`
- Short name: Animal Evolution
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Theories of evolution (Darwinism, Synthetic theory), speciation, fossil records, and zoogeography.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Biosystematics & Animal Evolution. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-zoo102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-zoo102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-zoo102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-zoo102-1; Biosystematics & Animal Evolution - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoo102-2; Biosystematics & Animal Evolution - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Biosystematics & Animal Evolution Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Biosystematics & Animal Evolution Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOOM101 — Apiculture, Sericulture & Vermicomposting

- ID: `zoom101-appliedzoologyminor`
- Short name: Applied Zoology Minor
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Honeybee keeping, silkworm rearing, and organic compost production from earthworms.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Apiculture, Sericulture & Vermicomposting. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-zoom101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-zoom101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-zoom101-1; Apiculture, Sericulture & Vermicomposting - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoom101-2; Apiculture, Sericulture & Vermicomposting - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Apiculture, Sericulture & Vermicomposting Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Apiculture, Sericulture & Vermicomposting Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOO201 — Chordata Anatomy & Functional Biology

- ID: `zoo201-chordates`
- Short name: Chordates
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Comparative anatomy of fishes, amphibians, reptiles, birds, and mammals.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Chordata Anatomy & Functional Biology. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-zoo201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-zoo201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-zoo201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-zoo201-1; Chordata Anatomy & Functional Biology - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoo201-2; Chordata Anatomy & Functional Biology - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Chordata Anatomy & Functional Biology Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Chordata Anatomy & Functional Biology Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOOM201 — Wildlife Conservation & National Parks of India

- ID: `zoom201-wildlifeminor`
- Short name: Wildlife Minor
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Project Tiger, endangered fauna, biosphere reserves, and wildlife protection laws.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Wildlife Conservation & National Parks of India. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-zoom201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-zoom201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-zoom201-1; Wildlife Conservation & National Parks of India - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoom201-2; Wildlife Conservation & National Parks of India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Wildlife Conservation & National Parks of India Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Wildlife Conservation & National Parks of India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOO301 — Animal Physiology & Endocrinology

- ID: `zoo301-physiology`
- Short name: Physiology
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Digestion, circulation, respiration, neural transmission, and hormonal regulatory feedback.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Animal Physiology & Endocrinology. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-zoo301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-zoo301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-zoo301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-zoo301-1; Animal Physiology & Endocrinology - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoo301-2; Animal Physiology & Endocrinology - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Animal Physiology & Endocrinology Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Animal Physiology & Endocrinology Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOOM301 — Aquarium Management & Ornamental Fishes

- ID: `zoom301-aquariumkeeping`
- Short name: Aquarium Keeping
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Freshwater ornamental fish breeding, aquarium plants, filtration, and water quality testing.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Aquarium Management & Ornamental Fishes. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-zoom301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-zoom301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-zoom301-1; Aquarium Management & Ornamental Fishes - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoom301-2; Aquarium Management & Ornamental Fishes - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Aquarium Management & Ornamental Fishes Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Aquarium Management & Ornamental Fishes Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOO401 — Biochemistry, Cell Biology & Genetics

- ID: `zoo401-cellgenetics`
- Short name: Cell & Genetics
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Mendelian genetics, chromosome mapping, cellular organelles, and biomolecular pathways.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Biochemistry, Cell Biology & Genetics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-zoo401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-zoo401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-zoo401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-zoo401-1; Biochemistry, Cell Biology & Genetics - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoo401-2; Biochemistry, Cell Biology & Genetics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Biochemistry, Cell Biology & Genetics Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Biochemistry, Cell Biology & Genetics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOOM401 — Public Health, Vector Control & Sanitation

- ID: `zoom401-publichealth`
- Short name: Public Health
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Mosquito and rodent borne diseases, vector eradication, safe sanitation, and preventive healthcare.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Public Health, Vector Control & Sanitation. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-zoom401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-zoom401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-zoom401-1; Public Health, Vector Control & Sanitation - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoom401-2; Public Health, Vector Control & Sanitation - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Public Health, Vector Control & Sanitation Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Public Health, Vector Control & Sanitation Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOO501 — Immunology, Parasitology & Animal Disease

- ID: `zoo501-immunology`
- Short name: Immunology
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Innate and adaptive immunity, antibodies, antigens, malarial parasite, and helminth infections.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Immunology, Parasitology & Animal Disease. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-zoo501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-zoo501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-zoo501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-zoo501-1; Immunology, Parasitology & Animal Disease - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoo501-2; Immunology, Parasitology & Animal Disease - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Immunology, Parasitology & Animal Disease Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Immunology, Parasitology & Animal Disease Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ZOO601 — Fisheries & Applied Aquaculture

- ID: `zoo601-fisheries`
- Short name: Fisheries
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Commercial fish species, hatchery management, induced breeding, fish feeds, and pond ecology.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Fisheries & Applied Aquaculture. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-zoo601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-zoo601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-zoo601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-zoo601-1; Fisheries & Applied Aquaculture - Complete DBCM Department Notes; 58 pages; author: DBCM Zoology Faculty; reads: 14200; text/file: —
- ID n-zoo601-2; Fisheries & Applied Aquaculture - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Fisheries & Applied Aquaculture Complete Video Lectures; channel: DBCM Zoology Faculty; item count: 28; URL: https://www.youtube.com
- Fisheries & Applied Aquaculture Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Biotechnology (BBT) (BBT)

### BBT101 — Cell Biology & Biomolecules

- ID: `bbt101-cellbiomolecules`
- Short name: Cell & Biomolecules
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Cellular ultrastructure, membrane transport, proteins, lipids, carbohydrates, and nucleic acids.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Cell Biology & Biomolecules. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bbt101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bbt101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bbt101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bbt101-1; Cell Biology & Biomolecules - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbt101-2; Cell Biology & Biomolecules - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Cell Biology & Biomolecules Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Cell Biology & Biomolecules Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBT102 — Microbial Physiology & Fermentation Basics

- ID: `bbt102-microbiology`
- Short name: Microbiology
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Bacterial growth kinetics, staining methods, sterilization, and industrial microbe strains.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Microbial Physiology & Fermentation Basics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bbt102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bbt102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bbt102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bbt102-1; Microbial Physiology & Fermentation Basics - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbt102-2; Microbial Physiology & Fermentation Basics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Microbial Physiology & Fermentation Basics Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Microbial Physiology & Fermentation Basics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBTM101 — Introduction to Biotechnology in Medicine

- ID: `bbtm101-medicalbiotechminor`
- Short name: Medical Biotech Minor
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Recombinant insulin, gene therapy, diagnostics, and modern healthcare breakthroughs.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Introduction to Biotechnology in Medicine. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bbtm101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bbtm101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bbtm101-1; Introduction to Biotechnology in Medicine - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbtm101-2; Introduction to Biotechnology in Medicine - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Introduction to Biotechnology in Medicine Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Introduction to Biotechnology in Medicine Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBT201 — Molecular Biology & Gene Expression

- ID: `bbt201-molecularbiology`
- Short name: Molecular Biology
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: DNA replication, transcription, translation, genetic code, and operon models in prokaryotes/eukaryotes.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Molecular Biology & Gene Expression. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bbt201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bbt201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bbt201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bbt201-1; Molecular Biology & Gene Expression - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbt201-2; Molecular Biology & Gene Expression - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Molecular Biology & Gene Expression Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Molecular Biology & Gene Expression Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBTM201 — Forensic Science & DNA Fingerprinting

- ID: `bbtm201-forensicdna`
- Short name: Forensic DNA
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Crime scene biological evidence, STR analysis, paternity testing, and legal admissibility.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Forensic Science & DNA Fingerprinting. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bbtm201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bbtm201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bbtm201-1; Forensic Science & DNA Fingerprinting - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbtm201-2; Forensic Science & DNA Fingerprinting - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Forensic Science & DNA Fingerprinting Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Forensic Science & DNA Fingerprinting Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBT301 — Recombinant DNA Technology & Gene Cloning

- ID: `bbt301-rdnatech`
- Short name: rDNA Tech
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Restriction enzymes, cloning vectors (plasmids, phages), PCR, DNA sequencing, and genomic libraries.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Recombinant DNA Technology & Gene Cloning. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bbt301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bbt301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bbt301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bbt301-1; Recombinant DNA Technology & Gene Cloning - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbt301-2; Recombinant DNA Technology & Gene Cloning - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Recombinant DNA Technology & Gene Cloning Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Recombinant DNA Technology & Gene Cloning Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBTM301 — Food & Beverage Biotechnology

- ID: `bbtm301-foodbiotech`
- Short name: Food Biotech
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Dairy fermentation, probiotics, brewing technology, and food enzyme applications.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Food & Beverage Biotechnology. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bbtm301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bbtm301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bbtm301-1; Food & Beverage Biotechnology - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbtm301-2; Food & Beverage Biotechnology - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Food & Beverage Biotechnology Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Food & Beverage Biotechnology Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBT401 — Bioprocess Engineering & Downstream Processing

- ID: `bbt401-bioprocessengg`
- Short name: Bioprocess Engg
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Bioreactor design, aeration, scale-up, cell disruption, chromatography, and product crystallization.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Bioprocess Engineering & Downstream Processing. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bbt401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bbt401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bbt401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bbt401-1; Bioprocess Engineering & Downstream Processing - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbt401-2; Bioprocess Engineering & Downstream Processing - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Bioprocess Engineering & Downstream Processing Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Bioprocess Engineering & Downstream Processing Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBTM401 — Bioethics, Biosafety & Intellectual Property

- ID: `bbtm401-bioethicsipr`
- Short name: Bioethics & IPR
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: GMO regulations, patenting biological inventions, clinical trial ethics, and Cartagena protocol.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Bioethics, Biosafety & Intellectual Property. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bbtm401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bbtm401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bbtm401-1; Bioethics, Biosafety & Intellectual Property - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbtm401-2; Bioethics, Biosafety & Intellectual Property - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Bioethics, Biosafety & Intellectual Property Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Bioethics, Biosafety & Intellectual Property Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBT501 — Immunotechnology & Diagnostic Methods

- ID: `bbt501-immunotech`
- Short name: Immunotech
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: ELISA, Western blotting, monoclonal antibodies, flow cytometry, and vaccine development.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Immunotechnology & Diagnostic Methods. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bbt501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bbt501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bbt501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bbt501-1; Immunotechnology & Diagnostic Methods - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbt501-2; Immunotechnology & Diagnostic Methods - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Immunotechnology & Diagnostic Methods Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Immunotechnology & Diagnostic Methods Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BBT601 — Genomics, Proteomics & Bioinformatics

- ID: `bbt601-bioinformatics`
- Short name: Bioinformatics
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: BLAST, sequence alignments, phylogenetic trees, molecular docking, and mass spectrometry.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Genomics, Proteomics & Bioinformatics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bbt601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bbt601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bbt601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bbt601-1; Genomics, Proteomics & Bioinformatics - Complete DBCM Department Notes; 58 pages; author: DBCM Biotechnology (BBT) Faculty; reads: 14200; text/file: —
- ID n-bbt601-2; Genomics, Proteomics & Bioinformatics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Genomics, Proteomics & Bioinformatics Complete Video Lectures; channel: DBCM Biotechnology (BBT) Faculty; item count: 28; URL: https://www.youtube.com
- Genomics, Proteomics & Bioinformatics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Commerce (B.Com) (B.COM)

### BCOM101 — Financial Accounting - I

- ID: `bcom101-financialaccounts`
- Short name: Financial Accounts
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Accounting standards, journal, ledger, trial balance, depreciation methods, and final accounts.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Financial Accounting - I. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bcom101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bcom101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bcom101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bcom101-1; Financial Accounting - I - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcom101-2; Financial Accounting - I - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Financial Accounting - I Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Financial Accounting - I Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOM102 — Business Organization & Modern Management

- ID: `bcom102-businessorg`
- Short name: Business Org
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Forms of business ownership, planning, organizing, staffing, directing, and controlling principles.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Business Organization & Modern Management. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bcom102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bcom102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bcom102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bcom102-1; Business Organization & Modern Management - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcom102-2; Business Organization & Modern Management - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Business Organization & Modern Management Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Business Organization & Modern Management Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOMM101 — Personal Financial Planning & Wealth Building

- ID: `bcomm101-personalfinance`
- Short name: Personal Finance
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Savings habits, emergency funds, life and health insurance, PPF, NPS, and financial goal setting.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Personal Financial Planning & Wealth Building. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bcomm101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bcomm101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bcomm101-1; Personal Financial Planning & Wealth Building - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcomm101-2; Personal Financial Planning & Wealth Building - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Personal Financial Planning & Wealth Building Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Personal Financial Planning & Wealth Building Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOM201 — Corporate Accounting & Company Accounts

- ID: `bcom201-corporateaccounts`
- Short name: Corporate Accounts
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Issue and redemption of shares and debentures, valuation of goodwill, and corporate financial statements.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Corporate Accounting & Company Accounts. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bcom201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bcom201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bcom201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bcom201-1; Corporate Accounting & Company Accounts - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcom201-2; Corporate Accounting & Company Accounts - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Corporate Accounting & Company Accounts Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Corporate Accounting & Company Accounts Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOMM201 — Stock Markets, Mutual Funds & Equity Investing

- ID: `bcomm201-stockmarkets`
- Short name: Stock Markets
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: BSE, NSE, Demat accounts, SIPs, equity mutual funds, index funds, and technical/fundamental analysis.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Stock Markets, Mutual Funds & Equity Investing. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bcomm201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bcomm201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bcomm201-1; Stock Markets, Mutual Funds & Equity Investing - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcomm201-2; Stock Markets, Mutual Funds & Equity Investing - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Stock Markets, Mutual Funds & Equity Investing Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Stock Markets, Mutual Funds & Equity Investing Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOM301 — Cost Accounting & Budgetary Control

- ID: `bcom301-costaccounting`
- Short name: Cost Accounting
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Elements of cost, cost sheets, tender pricing, process costing, marginal costing, and break-even analysis.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Cost Accounting & Budgetary Control. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bcom301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bcom301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bcom301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bcom301-1; Cost Accounting & Budgetary Control - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcom301-2; Cost Accounting & Budgetary Control - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Cost Accounting & Budgetary Control Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Cost Accounting & Budgetary Control Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOMM301 — Fundamentals of Marketing & Brand Building

- ID: `bcomm301-marketingminor`
- Short name: Marketing Minor
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Marketing mix (4 Ps), consumer behavior, digital branding, social media marketing, and sales promotion.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Fundamentals of Marketing & Brand Building. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bcomm301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bcomm301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bcomm301-1; Fundamentals of Marketing & Brand Building - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcomm301-2; Fundamentals of Marketing & Brand Building - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Fundamentals of Marketing & Brand Building Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Fundamentals of Marketing & Brand Building Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOM401 — Income Tax Law & Direct Tax Practices

- ID: `bcom401-incometax`
- Short name: Income Tax
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Heads of income (Salaries, House Property, Capital Gains), deductions under Chapter VI-A, and ITR filing.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Income Tax Law & Direct Tax Practices. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bcom401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bcom401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bcom401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bcom401-1; Income Tax Law & Direct Tax Practices - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcom401-2; Income Tax Law & Direct Tax Practices - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Income Tax Law & Direct Tax Practices Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Income Tax Law & Direct Tax Practices Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOMM401 — Entrepreneurship & Startup Management

- ID: `bcomm401-startupsmsme`
- Short name: Startups & MSME
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Business plan generation, pitch decks, seed funding, angel investors, and government MSME schemes.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Entrepreneurship & Startup Management. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bcomm401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bcomm401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bcomm401-1; Entrepreneurship & Startup Management - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcomm401-2; Entrepreneurship & Startup Management - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Entrepreneurship & Startup Management Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Entrepreneurship & Startup Management Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOM501 — Goods & Services Tax (GST) & Indirect Taxes

- ID: `bcom501-gstframework`
- Short name: GST Framework
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: CGST, SGST, IGST, input tax credit (ITC), reverse charge mechanism, and GST portal compliance.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Goods & Services Tax (GST) & Indirect Taxes. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bcom501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bcom501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bcom501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bcom501-1; Goods & Services Tax (GST) & Indirect Taxes - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcom501-2; Goods & Services Tax (GST) & Indirect Taxes - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Goods & Services Tax (GST) & Indirect Taxes Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Goods & Services Tax (GST) & Indirect Taxes Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BCOM601 — Financial Management & Capital Markets

- ID: `bcom601-financialmgmt`
- Short name: Financial Mgmt
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Time value of money, capital budgeting (NPV, IRR), cost of capital, working capital management.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Financial Management & Capital Markets. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bcom601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bcom601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bcom601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bcom601-1; Financial Management & Capital Markets - Complete DBCM Department Notes; 58 pages; author: DBCM Commerce (B.Com) Faculty; reads: 14200; text/file: —
- ID n-bcom601-2; Financial Management & Capital Markets - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Financial Management & Capital Markets Complete Video Lectures; channel: DBCM Commerce (B.Com) Faculty; item count: 28; URL: https://www.youtube.com
- Financial Management & Capital Markets Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Economics (ECO)

### ECO101 — Microeconomic Theory: Consumer & Market Analysis

- ID: `eco101-microeconomicsi`
- Short name: Microeconomics I
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Consumer equilibrium, indifference curves, elasticity of demand, production functions, and cost curves.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Microeconomic Theory: Consumer & Market Analysis. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eco101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eco101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eco101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eco101-1; Microeconomic Theory: Consumer & Market Analysis - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-eco101-2; Microeconomic Theory: Consumer & Market Analysis - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Microeconomic Theory: Consumer & Market Analysis Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Microeconomic Theory: Consumer & Market Analysis Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECO102 — Mathematical Methods for Economists

- ID: `eco102-mathforecon`
- Short name: Math for Econ
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Functions, derivatives, partial differentiation, matrix algebra, and constrained optimization.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Mathematical Methods for Economists. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eco102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eco102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eco102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eco102-1; Mathematical Methods for Economists - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-eco102-2; Mathematical Methods for Economists - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Mathematical Methods for Economists Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Mathematical Methods for Economists Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECOM101 — Economic Principles in Everyday Decisions

- ID: `ecom101-everydayeconomics`
- Short name: Everyday Economics
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Opportunity cost, incentives, inflation effects, supply-demand dynamics, and behavioral economics.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Economic Principles in Everyday Decisions. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-ecom101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-ecom101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-ecom101-1; Economic Principles in Everyday Decisions - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-ecom101-2; Economic Principles in Everyday Decisions - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Economic Principles in Everyday Decisions Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Economic Principles in Everyday Decisions Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECO201 — Macroeconomics: National Income & Aggregate Output

- ID: `eco201-macroeconomicsi`
- Short name: Macroeconomics I
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: GDP, GNP, circular flow of income, classical vs Keynesian output determination, and multiplier.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Macroeconomics: National Income & Aggregate Output. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eco201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eco201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eco201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eco201-1; Macroeconomics: National Income & Aggregate Output - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-eco201-2; Macroeconomics: National Income & Aggregate Output - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Macroeconomics: National Income & Aggregate Output Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Macroeconomics: National Income & Aggregate Output Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECOM201 — Indian Banking System & Financial Inclusion

- ID: `ecom201-bankingminor`
- Short name: Banking Minor
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Commercial banks, cooperative banks, Jan Dhan Yojana, UPI payment revolution, and microfinance.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Indian Banking System & Financial Inclusion. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-ecom201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-ecom201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-ecom201-1; Indian Banking System & Financial Inclusion - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-ecom201-2; Indian Banking System & Financial Inclusion - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Indian Banking System & Financial Inclusion Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Indian Banking System & Financial Inclusion Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECO301 — Market Structures & Factor Pricing

- ID: `eco301-microeconomicsii`
- Short name: Microeconomics II
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Perfect competition, monopoly, monopolistic competition, oligopoly models (Cournot, Sweezy), wage theories.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Market Structures & Factor Pricing. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eco301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eco301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eco301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eco301-1; Market Structures & Factor Pricing - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-eco301-2; Market Structures & Factor Pricing - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Market Structures & Factor Pricing Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Market Structures & Factor Pricing Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECOM301 — Environmental Economics & Climate Policy

- ID: `ecom301-climateeconomics`
- Short name: Climate Economics
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Carbon tax, cap-and-trade systems, sustainable development goals (SDGs), and ecological valuation.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Environmental Economics & Climate Policy. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-ecom301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-ecom301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-ecom301-1; Environmental Economics & Climate Policy - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-ecom301-2; Environmental Economics & Climate Policy - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Environmental Economics & Climate Policy Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Environmental Economics & Climate Policy Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECO401 — Monetary Economics & Public Finance

- ID: `eco401-moneybanking`
- Short name: Money & Banking
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Money supply metrics (M1-M4), RBI monetary policy tools, repo rate, taxation principles, and public debt.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Monetary Economics & Public Finance. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eco401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eco401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eco401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eco401-1; Monetary Economics & Public Finance - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-eco401-2; Monetary Economics & Public Finance - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Monetary Economics & Public Finance Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Monetary Economics & Public Finance Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECOM401 — Globalization & Contemporary World Economy

- ID: `ecom401-globaleconomy`
- Short name: Global Economy
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Multinational corporations, exchange rate fluctuations, trade wars, and global supply chains.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Globalization & Contemporary World Economy. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-ecom401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-ecom401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-ecom401-1; Globalization & Contemporary World Economy - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-ecom401-2; Globalization & Contemporary World Economy - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Globalization & Contemporary World Economy Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Globalization & Contemporary World Economy Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECO501 — Indian Economy: Structural Shifts & Growth

- ID: `eco501-indianeconomy`
- Short name: Indian Economy
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Agriculture reforms, industrial policy, service sector boom, poverty, unemployment, and NITI Aayog.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Indian Economy: Structural Shifts & Growth. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eco501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eco501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eco501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eco501-1; Indian Economy: Structural Shifts & Growth - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-eco501-2; Indian Economy: Structural Shifts & Growth - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Indian Economy: Structural Shifts & Growth Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- Indian Economy: Structural Shifts & Growth Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ECO601 — International Trade & Global Finance

- ID: `eco601-internationaltrade`
- Short name: International Trade
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Comparative advantage, Heckscher-Ohlin theorem, tariffs, balance of payments, WTO, and IMF.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of International Trade & Global Finance. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eco601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eco601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eco601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eco601-1; International Trade & Global Finance - Complete DBCM Department Notes; 58 pages; author: DBCM Economics Faculty; reads: 14200; text/file: —
- ID n-eco601-2; International Trade & Global Finance - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- International Trade & Global Finance Complete Video Lectures; channel: DBCM Economics Faculty; item count: 28; URL: https://www.youtube.com
- International Trade & Global Finance Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Education (EDU)

### EDU101 — Philosophical Foundations of Education

- ID: `edu101-philosophyofedu`
- Short name: Philosophy of Edu
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Idealism, Naturalism, Pragmatism, and educational contributions of Gandhi, Tagore, and Dewey.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Philosophical Foundations of Education. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-edu101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-edu101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-edu101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-edu101-1; Philosophical Foundations of Education - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edu101-2; Philosophical Foundations of Education - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Philosophical Foundations of Education Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Philosophical Foundations of Education Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDU102 — Sociological Foundations of Education

- ID: `edu102-sociologyofedu`
- Short name: Sociology of Edu
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Education as an agent of social change, modernization, equalization of opportunities, and culture.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Sociological Foundations of Education. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-edu102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-edu102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-edu102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-edu102-1; Sociological Foundations of Education - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edu102-2; Sociological Foundations of Education - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Sociological Foundations of Education Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Sociological Foundations of Education Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDUM101 — Life Skills Education & Personal Effectiveness

- ID: `edum101-lifeskillsminor`
- Short name: Life Skills Minor
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: WHO 10 core life skills, stress management, critical thinking, empathy, and interpersonal skills.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Life Skills Education & Personal Effectiveness. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-edum101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-edum101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-edum101-1; Life Skills Education & Personal Effectiveness - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edum101-2; Life Skills Education & Personal Effectiveness - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Life Skills Education & Personal Effectiveness Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Life Skills Education & Personal Effectiveness Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDU201 — Psychological Foundations of Learning

- ID: `edu201-educationalpsych`
- Short name: Educational Psych
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Theories of learning (Pavlov, Skinner, Piaget, Vygotsky), intelligence, motivation, and personality.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Psychological Foundations of Learning. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-edu201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-edu201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-edu201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-edu201-1; Psychological Foundations of Learning - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edu201-2; Psychological Foundations of Learning - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Psychological Foundations of Learning Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Psychological Foundations of Learning Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDUM201 — Early Childhood Care & Development

- ID: `edum201-earlychildhood`
- Short name: Early Childhood
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Play-way methodology, cognitive development milestones, preschool nutrition, and safety.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Early Childhood Care & Development. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-edum201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-edum201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-edum201-1; Early Childhood Care & Development - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edum201-2; Early Childhood Care & Development - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Early Childhood Care & Development Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Early Childhood Care & Development Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDU301 — Curriculum Planning & Instructional Design

- ID: `edu301-curriculumdesign`
- Short name: Curriculum Design
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Curriculum models, Bloom taxonomy of learning objectives, lesson planning, and teaching strategies.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Curriculum Planning & Instructional Design. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-edu301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-edu301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-edu301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-edu301-1; Curriculum Planning & Instructional Design - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edu301-2; Curriculum Planning & Instructional Design - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Curriculum Planning & Instructional Design Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Curriculum Planning & Instructional Design Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDUM301 — Educational Technology & Digital Learning Tools

- ID: `edum301-edtechtools`
- Short name: EdTech Tools
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Smart classroom boards, LMS platforms (Moodle, Google Classroom), educational podcasts, and gamification.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Educational Technology & Digital Learning Tools. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-edum301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-edum301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-edum301-1; Educational Technology & Digital Learning Tools - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edum301-2; Educational Technology & Digital Learning Tools - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Educational Technology & Digital Learning Tools Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Educational Technology & Digital Learning Tools Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDU401 — Educational Measurement & Evaluation

- ID: `edu401-assessmenttests`
- Short name: Assessment & Tests
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Formative and summative assessment, standardized tests, validity, reliability, and grading systems.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Educational Measurement & Evaluation. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-edu401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-edu401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-edu401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-edu401-1; Educational Measurement & Evaluation - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edu401-2; Educational Measurement & Evaluation - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Educational Measurement & Evaluation Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Educational Measurement & Evaluation Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDUM401 — Guidance & Psychological Counselling Basics

- ID: `edum401-counsellingminor`
- Short name: Counselling Minor
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Career counselling techniques, adolescent behavioural issues, peer pressure, and student support.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Guidance & Psychological Counselling Basics. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-edum401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-edum401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-edum401-1; Guidance & Psychological Counselling Basics - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edum401-2; Guidance & Psychological Counselling Basics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Guidance & Psychological Counselling Basics Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Guidance & Psychological Counselling Basics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDU501 — Inclusive Education & Special Pedagogical Needs

- ID: `edu501-inclusiveeducation`
- Short name: Inclusive Education
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Teaching students with learning disabilities, visual/hearing impairments, and gifted children.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Inclusive Education & Special Pedagogical Needs. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-edu501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-edu501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-edu501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-edu501-1; Inclusive Education & Special Pedagogical Needs - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edu501-2; Inclusive Education & Special Pedagogical Needs - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Inclusive Education & Special Pedagogical Needs Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Inclusive Education & Special Pedagogical Needs Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### EDU601 — Educational Leadership & School Management

- ID: `edu601-schoolmanagement`
- Short name: School Management
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Institutional planning, academic supervision, school climate, teacher evaluation, and RTE Act.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Educational Leadership & School Management. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-edu601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-edu601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-edu601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-edu601-1; Educational Leadership & School Management - Complete DBCM Department Notes; 58 pages; author: DBCM Education Faculty; reads: 14200; text/file: —
- ID n-edu601-2; Educational Leadership & School Management - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Educational Leadership & School Management Complete Video Lectures; channel: DBCM Education Faculty; item count: 28; URL: https://www.youtube.com
- Educational Leadership & School Management Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## English (ENG)

### ENG101 — British Literature: Old English to Renaissance

- ID: `eng101-earlybritishlit`
- Short name: Early British Lit
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Chaucer Canterbury Tales, Spenser, Marlowe Doctor Faustus, and Elizabethan sonneteers.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of British Literature: Old English to Renaissance. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eng101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eng101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eng101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eng101-1; British Literature: Old English to Renaissance - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-eng101-2; British Literature: Old English to Renaissance - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- British Literature: Old English to Renaissance Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- British Literature: Old English to Renaissance Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENG102 — Introduction to Literary Forms & Critical Terms

- ID: `eng102-literaryforms`
- Short name: Literary Forms
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Poetic metres, tragedy, comedy, epic, ballad, irony, satire, and narrative perspectives.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Introduction to Literary Forms & Critical Terms. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eng102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eng102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eng102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eng102-1; Introduction to Literary Forms & Critical Terms - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-eng102-2; Introduction to Literary Forms & Critical Terms - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Introduction to Literary Forms & Critical Terms Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Introduction to Literary Forms & Critical Terms Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENGM101 — Effective Business Communication & Professional Writing

- ID: `engm101-communicationminor`
- Short name: Communication Minor
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Report writing, executive summaries, professional email drafting, and persuasive communication.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Effective Business Communication & Professional Writing. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-engm101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-engm101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-engm101-1; Effective Business Communication & Professional Writing - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-engm101-2; Effective Business Communication & Professional Writing - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Effective Business Communication & Professional Writing Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Effective Business Communication & Professional Writing Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENG201 — Shakespearean Dramas & Renaissance Theatre

- ID: `eng201-shakespearestudies`
- Short name: Shakespeare Studies
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Detailed study of Hamlet, As You Like It, Othello, theatrical conventions, and soliloquies.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Shakespearean Dramas & Renaissance Theatre. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eng201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eng201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eng201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eng201-1; Shakespearean Dramas & Renaissance Theatre - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-eng201-2; Shakespearean Dramas & Renaissance Theatre - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Shakespearean Dramas & Renaissance Theatre Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Shakespearean Dramas & Renaissance Theatre Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENGM201 — Creative Writing: Poetry, Fiction & Screenwriting

- ID: `engm201-creativewriting`
- Short name: Creative Writing
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Character development, plot pacing, imagery, dialogue writing, and workshop peer review.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Creative Writing: Poetry, Fiction & Screenwriting. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-engm201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-engm201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-engm201-1; Creative Writing: Poetry, Fiction & Screenwriting - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-engm201-2; Creative Writing: Poetry, Fiction & Screenwriting - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Creative Writing: Poetry, Fiction & Screenwriting Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Creative Writing: Poetry, Fiction & Screenwriting Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENG301 — Romantic & Victorian Literature

- ID: `eng301-romanticvictorian`
- Short name: Romantic & Victorian
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Wordsworth, Keats, Shelley, Tennyson, Browning, Jane Austen, and Charles Dickens.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Romantic & Victorian Literature. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eng301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eng301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eng301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eng301-1; Romantic & Victorian Literature - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-eng301-2; Romantic & Victorian Literature - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Romantic & Victorian Literature Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Romantic & Victorian Literature Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENGM301 — English for Competitive Exams & Verbal Aptitude

- ID: `engm301-verbalaptitude`
- Short name: Verbal Aptitude
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Vocabulary mastery, reading comprehension speed, sentence correction, and verbal logic.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to English for Competitive Exams & Verbal Aptitude. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-engm301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-engm301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-engm301-1; English for Competitive Exams & Verbal Aptitude - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-engm301-2; English for Competitive Exams & Verbal Aptitude - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- English for Competitive Exams & Verbal Aptitude Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- English for Competitive Exams & Verbal Aptitude Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENG401 — Modern & Postmodern Literature

- ID: `eng401-modernistlit`
- Short name: Modernist Lit
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: T.S. Eliot The Waste Land, Virginia Woolf, James Joyce, Samuel Beckett, and Theatre of the Absurd.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Modern & Postmodern Literature. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eng401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eng401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eng401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eng401-1; Modern & Postmodern Literature - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-eng401-2; Modern & Postmodern Literature - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Modern & Postmodern Literature Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Modern & Postmodern Literature Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENGM401 — Film Appreciation & Literature Adaptations

- ID: `engm401-filmstudies`
- Short name: Film Studies
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Cinematic language, camera angles, narrative adaptation from page to screen, and film critiques.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Film Appreciation & Literature Adaptations. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-engm401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-engm401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-engm401-1; Film Appreciation & Literature Adaptations - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-engm401-2; Film Appreciation & Literature Adaptations - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Film Appreciation & Literature Adaptations Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Film Appreciation & Literature Adaptations Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENG501 — Indian Writing in English & Regional Translations

- ID: `eng501-indianenglishlit`
- Short name: Indian English Lit
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: R.K. Narayan, Salman Rushdie, Amitav Ghosh, Kamala Das, and translated Indian vernacular texts.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Indian Writing in English & Regional Translations. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eng501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eng501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eng501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eng501-1; Indian Writing in English & Regional Translations - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-eng501-2; Indian Writing in English & Regional Translations - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Indian Writing in English & Regional Translations Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Indian Writing in English & Regional Translations Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### ENG601 — Linguistics, Phonetics & English Syntax

- ID: `eng601-linguistics`
- Short name: Linguistics
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: IPA symbols, phonemes, syllable structure, transformational generative grammar, and sociolinguistics.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Linguistics, Phonetics & English Syntax. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-eng601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-eng601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-eng601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-eng601-1; Linguistics, Phonetics & English Syntax - Complete DBCM Department Notes; 58 pages; author: DBCM English Faculty; reads: 14200; text/file: —
- ID n-eng601-2; Linguistics, Phonetics & English Syntax - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Linguistics, Phonetics & English Syntax Complete Video Lectures; channel: DBCM English Faculty; item count: 28; URL: https://www.youtube.com
- Linguistics, Phonetics & English Syntax Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## History (HIST)

### HIST101 — Ancient Indian History: Harappan to Mauryan Empire

- ID: `hist101-ancientindia`
- Short name: Ancient India
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Indus Valley urbanism, Vedic culture, Mahajanapadas, Buddhism, Jainism, and Ashokan edicts.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Ancient Indian History: Harappan to Mauryan Empire. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-hist101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-hist101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-hist101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-hist101-1; Ancient Indian History: Harappan to Mauryan Empire - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-hist101-2; Ancient Indian History: Harappan to Mauryan Empire - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Ancient Indian History: Harappan to Mauryan Empire Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Ancient Indian History: Harappan to Mauryan Empire Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HIST102 — World Civilizations: Egypt, Mesopotamia & Greece

- ID: `hist102-worldcivilizations`
- Short name: World Civilizations
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Nile civilization, Code of Hammurabi, Athenian democracy, Roman Republic, and ancient trade routes.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of World Civilizations: Egypt, Mesopotamia & Greece. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-hist102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-hist102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-hist102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-hist102-1; World Civilizations: Egypt, Mesopotamia & Greece - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-hist102-2; World Civilizations: Egypt, Mesopotamia & Greece - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- World Civilizations: Egypt, Mesopotamia & Greece Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- World Civilizations: Egypt, Mesopotamia & Greece Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HISTM101 — Glimpses of Indian Heritage & Architectural Marvels

- ID: `histm101-indianheritage`
- Short name: Indian Heritage
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: UNESCO World Heritage sites of India, cave temples, medieval forts, and colonial landmarks.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Glimpses of Indian Heritage & Architectural Marvels. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-histm101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-histm101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-histm101-1; Glimpses of Indian Heritage & Architectural Marvels - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-histm101-2; Glimpses of Indian Heritage & Architectural Marvels - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Glimpses of Indian Heritage & Architectural Marvels Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Glimpses of Indian Heritage & Architectural Marvels Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HIST201 — Gupta Golden Age to Early Medieval India

- ID: `hist201-classicalindia`
- Short name: Classical India
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Gupta administration, art and architecture, Harsha Vardhana, Cholas, Pallavas, and temple culture.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Gupta Golden Age to Early Medieval India. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-hist201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-hist201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-hist201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-hist201-1; Gupta Golden Age to Early Medieval India - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-hist201-2; Gupta Golden Age to Early Medieval India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Gupta Golden Age to Early Medieval India Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Gupta Golden Age to Early Medieval India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HISTM201 — Tourism & Historical Sites of Western India

- ID: `histm201-historicaltourism`
- Short name: Historical Tourism
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Tourism potential, heritage walks, museum curation, and tourist guide competencies.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Tourism & Historical Sites of Western India. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-histm201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-histm201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-histm201-1; Tourism & Historical Sites of Western India - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-histm201-2; Tourism & Historical Sites of Western India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Tourism & Historical Sites of Western India Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Tourism & Historical Sites of Western India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HIST301 — Delhi Sultanate & The Mughal Empire

- ID: `hist301-medievalindia`
- Short name: Medieval India
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Alauddin Khilji reforms, Akbar administrative setup (Mansabdari), revenue systems, and Mughal art.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Delhi Sultanate & The Mughal Empire. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-hist301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-hist301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-hist301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-hist301-1; Delhi Sultanate & The Mughal Empire - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-hist301-2; Delhi Sultanate & The Mughal Empire - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Delhi Sultanate & The Mughal Empire Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Delhi Sultanate & The Mughal Empire Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HISTM301 — History of Science & Technology in Ancient India

- ID: `histm301-historyofscience`
- Short name: History of Science
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Contributions of Aryabhata, Sushruta, Charaka, metallurgy (iron pillar), and ancient irrigation systems.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to History of Science & Technology in Ancient India. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-histm301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-histm301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-histm301-1; History of Science & Technology in Ancient India - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-histm301-2; History of Science & Technology in Ancient India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- History of Science & Technology in Ancient India Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- History of Science & Technology in Ancient India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HIST401 — Colonial Expansion & Indian National Movement

- ID: `hist401-freedomstruggle`
- Short name: Freedom Struggle
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: 1857 Revolt, rise of nationalism, Gandhian mass satyagrahas, Subhas Chandra Bose, and 1947 Partition.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Colonial Expansion & Indian National Movement. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-hist401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-hist401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-hist401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-hist401-1; Colonial Expansion & Indian National Movement - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-hist401-2; Colonial Expansion & Indian National Movement - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Colonial Expansion & Indian National Movement Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Colonial Expansion & Indian National Movement Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HISTM401 — Freedom Fighters & Revolutionaries of India

- ID: `histm401-freedomfighters`
- Short name: Freedom Fighters
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Biographical studies of Bhagat Singh, Chandrashekhar Azad, Rani Lakshmibai, and tribal resistance.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Freedom Fighters & Revolutionaries of India. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-histm401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-histm401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-histm401-1; Freedom Fighters & Revolutionaries of India - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-histm401-2; Freedom Fighters & Revolutionaries of India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Freedom Fighters & Revolutionaries of India Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Freedom Fighters & Revolutionaries of India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HIST501 — Modern World: French Revolution to World War II

- ID: `hist501-modernworld`
- Short name: Modern World
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Industrial Revolution, American Revolution, Russian Revolution, Rise of Fascism, and Cold War origins.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Modern World: French Revolution to World War II. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-hist501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-hist501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-hist501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-hist501-1; Modern World: French Revolution to World War II - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-hist501-2; Modern World: French Revolution to World War II - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Modern World: French Revolution to World War II Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Modern World: French Revolution to World War II Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### HIST601 — Historiography & Archaeological Methods

- ID: `hist601-historiography`
- Short name: Historiography
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Primary and secondary sources, carbon dating, stratigraphy, epigraphy, and schools of historical thought.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Historiography & Archaeological Methods. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-hist601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-hist601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-hist601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-hist601-1; Historiography & Archaeological Methods - Complete DBCM Department Notes; 58 pages; author: DBCM History Faculty; reads: 14200; text/file: —
- ID n-hist601-2; Historiography & Archaeological Methods - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Historiography & Archaeological Methods Complete Video Lectures; channel: DBCM History Faculty; item count: 28; URL: https://www.youtube.com
- Historiography & Archaeological Methods Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Political Science (POL)

### POL101 — Political Theory: Core Concepts & Debates

- ID: `pol101-politicaltheory`
- Short name: Political Theory
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: State sovereignty, liberty, equality, justice, rights, democracy, and citizenship theories.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Political Theory: Core Concepts & Debates. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-pol101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-pol101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-pol101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-pol101-1; Political Theory: Core Concepts & Debates - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-pol101-2; Political Theory: Core Concepts & Debates - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Political Theory: Core Concepts & Debates Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Political Theory: Core Concepts & Debates Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POL102 — Western Political Thought: Plato to Karl Marx

- ID: `pol102-westernthought`
- Short name: Western Thought
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Plato Republic, Aristotle Politics, Machiavelli, Hobbes, Locke, Rousseau, and Marxian dialectics.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Western Political Thought: Plato to Karl Marx. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-pol102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-pol102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-pol102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-pol102-1; Western Political Thought: Plato to Karl Marx - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-pol102-2; Western Political Thought: Plato to Karl Marx - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Western Political Thought: Plato to Karl Marx Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Western Political Thought: Plato to Karl Marx Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POLM101 — Citizen Rights & Constitutional Literacy in India

- ID: `polm101-constitutionalrights`
- Short name: Constitutional Rights
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Understanding your rights, police procedures, FIR, Right to Information (RTI), and consumer protection.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Citizen Rights & Constitutional Literacy in India. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-polm101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-polm101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-polm101-1; Citizen Rights & Constitutional Literacy in India - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-polm101-2; Citizen Rights & Constitutional Literacy in India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Citizen Rights & Constitutional Literacy in India Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Citizen Rights & Constitutional Literacy in India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POL201 — Indian Political Thought: Ancient to Modern

- ID: `pol201-indianthought`
- Short name: Indian Thought
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Kautilya Arthashastra, Buddhist polity, Raja Ram Mohan Roy, Tilak, Gandhi, and Dr. B.R. Ambedkar.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Indian Political Thought: Ancient to Modern. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-pol201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-pol201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-pol201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-pol201-1; Indian Political Thought: Ancient to Modern - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-pol201-2; Indian Political Thought: Ancient to Modern - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Indian Political Thought: Ancient to Modern Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Indian Political Thought: Ancient to Modern Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POLM201 — Human Rights, Gender Justice & Social Equity

- ID: `polm201-humanrights`
- Short name: Human Rights
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: UDHR declaration, National Human Rights Commission (NHRC), women rights, and minority protections.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Human Rights, Gender Justice & Social Equity. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-polm201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-polm201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-polm201-1; Human Rights, Gender Justice & Social Equity - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-polm201-2; Human Rights, Gender Justice & Social Equity - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Human Rights, Gender Justice & Social Equity Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Human Rights, Gender Justice & Social Equity Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POL301 — Indian Constitution: Institutional Framework & Rights

- ID: `pol301-indianconstitution`
- Short name: Indian Constitution
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Preamble, Fundamental Rights, Directive Principles, Parliamentary system, and federal dynamics.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Indian Constitution: Institutional Framework & Rights. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-pol301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-pol301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-pol301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-pol301-1; Indian Constitution: Institutional Framework & Rights - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-pol301-2; Indian Constitution: Institutional Framework & Rights - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Indian Constitution: Institutional Framework & Rights Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Indian Constitution: Institutional Framework & Rights Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POLM301 — Elections, Political Parties & Voting Behaviour

- ID: `polm301-electoralpolitics`
- Short name: Electoral Politics
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Election Commission of India, coalition politics, EVM security, opinion polls, and voter trends.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Elections, Political Parties & Voting Behaviour. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-polm301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-polm301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-polm301-1; Elections, Political Parties & Voting Behaviour - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-polm301-2; Elections, Political Parties & Voting Behaviour - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Elections, Political Parties & Voting Behaviour Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Elections, Political Parties & Voting Behaviour Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POL401 — Public Administration: Theory & Bureaucracy

- ID: `pol401-publicadmin`
- Short name: Public Admin
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Principles of administration, Taylor Scientific Management, Weber Bureaucratic Model, and Good Governance.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Public Administration: Theory & Bureaucracy. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-pol401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-pol401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-pol401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-pol401-1; Public Administration: Theory & Bureaucracy - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-pol401-2; Public Administration: Theory & Bureaucracy - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Public Administration: Theory & Bureaucracy Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Public Administration: Theory & Bureaucracy Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POLM401 — Local Self-Government & Panchayati Raj in Action

- ID: `polm401-panchayatiraj`
- Short name: Panchayati Raj
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: 73rd and 74th constitutional amendments, Gram Sabha, Zilla Parishad, municipal governance, and civic funds.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Local Self-Government & Panchayati Raj in Action. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-polm401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-polm401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-polm401-1; Local Self-Government & Panchayati Raj in Action - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-polm401-2; Local Self-Government & Panchayati Raj in Action - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Local Self-Government & Panchayati Raj in Action Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- Local Self-Government & Panchayati Raj in Action Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POL501 — International Relations & Global Geopolitics

- ID: `pol501-internationalrelations`
- Short name: International Relations
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Realism, Liberalism, Constructivism, United Nations, nuclear non-proliferation, and multipolar world.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of International Relations & Global Geopolitics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-pol501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-pol501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-pol501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-pol501-1; International Relations & Global Geopolitics - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-pol501-2; International Relations & Global Geopolitics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- International Relations & Global Geopolitics Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- International Relations & Global Geopolitics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### POL601 — India Foreign Policy & Strategic Relations

- ID: `pol601-foreignpolicy`
- Short name: Foreign Policy
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Non-Alignment, Act East policy, relations with USA, China, Russia, neighboring South Asian dynamics.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of India Foreign Policy & Strategic Relations. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-pol601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-pol601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-pol601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-pol601-1; India Foreign Policy & Strategic Relations - Complete DBCM Department Notes; 58 pages; author: DBCM Political Science Faculty; reads: 14200; text/file: —
- ID n-pol601-2; India Foreign Policy & Strategic Relations - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- India Foreign Policy & Strategic Relations Complete Video Lectures; channel: DBCM Political Science Faculty; item count: 28; URL: https://www.youtube.com
- India Foreign Policy & Strategic Relations Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Sociology (SOC)

### SOC101 — Introduction to Sociology: Social Structure & Institutions

- ID: `soc101-introtosociology`
- Short name: Intro to Sociology
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Sociological imagination, primary and secondary groups, social institutions, norms, values, and socialization.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Introduction to Sociology: Social Structure & Institutions. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-soc101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-soc101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-soc101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-soc101-1; Introduction to Sociology: Social Structure & Institutions - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-soc101-2; Introduction to Sociology: Social Structure & Institutions - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Introduction to Sociology: Social Structure & Institutions Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Introduction to Sociology: Social Structure & Institutions Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOC102 — Classical Sociological Thinkers

- ID: `soc102-classicalthinkers`
- Short name: Classical Thinkers
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Auguste Comte, Karl Marx (historical materialism), Emile Durkheim (suicide, division of labor), Max Weber.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Classical Sociological Thinkers. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-soc102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-soc102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-soc102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-soc102-1; Classical Sociological Thinkers - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-soc102-2; Classical Sociological Thinkers - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Classical Sociological Thinkers Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Classical Sociological Thinkers Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOCM101 — Youth, Media & Popular Culture in India

- ID: `socm101-youthmedia`
- Short name: Youth & Media
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Impact of OTT platforms, social media identity, youth subcultures, fashion, and screen time dynamics.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Youth, Media & Popular Culture in India. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-socm101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-socm101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-socm101-1; Youth, Media & Popular Culture in India - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-socm101-2; Youth, Media & Popular Culture in India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Youth, Media & Popular Culture in India Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Youth, Media & Popular Culture in India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOC201 — Sociology of Indian Society: Structure & Changes

- ID: `soc201-indiansociety`
- Short name: Indian Society
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Caste hierarchy, sanskritization, Westernization, tribal communities, joint family evolution, and religious pluralism.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Sociology of Indian Society: Structure & Changes. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-soc201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-soc201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-soc201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-soc201-1; Sociology of Indian Society: Structure & Changes - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-soc201-2; Sociology of Indian Society: Structure & Changes - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Sociology of Indian Society: Structure & Changes Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Sociology of Indian Society: Structure & Changes Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOCM201 — Sociology of Health, Medicine & Community Wellness

- ID: `socm201-sociologyofhealth`
- Short name: Sociology of Health
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Social determinants of health, healthcare inequality, mental health taboos, and public health campaigns.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Sociology of Health, Medicine & Community Wellness. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-socm201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-socm201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-socm201-1; Sociology of Health, Medicine & Community Wellness - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-socm201-2; Sociology of Health, Medicine & Community Wellness - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Sociology of Health, Medicine & Community Wellness Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Sociology of Health, Medicine & Community Wellness Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOC301 — Social Stratification, Mobility & Inequality

- ID: `soc301-stratification`
- Short name: Stratification
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Class, caste, gender, race stratification, social mobility patterns, and affirmative action policies.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Social Stratification, Mobility & Inequality. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-soc301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-soc301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-soc301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-soc301-1; Social Stratification, Mobility & Inequality - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-soc301-2; Social Stratification, Mobility & Inequality - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Social Stratification, Mobility & Inequality Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Social Stratification, Mobility & Inequality Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOCM301 — Gender Sensitization & Prevention of Harassment

- ID: `socm301-gendersensitization`
- Short name: Gender Sensitization
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: POSH Act 2013, toxic stereotypes, workplace equality, consent education, and respectful co-existence.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Gender Sensitization & Prevention of Harassment. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-socm301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-socm301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-socm301-1; Gender Sensitization & Prevention of Harassment - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-socm301-2; Gender Sensitization & Prevention of Harassment - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Gender Sensitization & Prevention of Harassment Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Gender Sensitization & Prevention of Harassment Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOC401 — Sociological Research Methods & Social Surveys

- ID: `soc401-researchmethods`
- Short name: Research Methods
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Qualitative vs quantitative methods, questionnaires, interviews, participant observation, and ethics.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Sociological Research Methods & Social Surveys. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-soc401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-soc401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-soc401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-soc401-1; Sociological Research Methods & Social Surveys - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-soc401-2; Sociological Research Methods & Social Surveys - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Sociological Research Methods & Social Surveys Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Sociological Research Methods & Social Surveys Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOCM401 — Urban Life, Smart Cities & Slum Communities

- ID: `socm401-urbanstudies`
- Short name: Urban Studies
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Urbanization, rural-to-urban migration, informal economy, gentrification, and housing justice.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Urban Life, Smart Cities & Slum Communities. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-socm401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-socm401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-socm401-1; Urban Life, Smart Cities & Slum Communities - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-socm401-2; Urban Life, Smart Cities & Slum Communities - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Urban Life, Smart Cities & Slum Communities Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Urban Life, Smart Cities & Slum Communities Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOC501 — Sociology of Gender, Family & Kinship

- ID: `soc501-genderkinship`
- Short name: Gender & Kinship
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Gender vs sex, patriarchy, queer studies, domestic labor, reproductive health, and changing marital norms.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Sociology of Gender, Family & Kinship. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-soc501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-soc501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-soc501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-soc501-1; Sociology of Gender, Family & Kinship - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-soc501-2; Sociology of Gender, Family & Kinship - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Sociology of Gender, Family & Kinship Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Sociology of Gender, Family & Kinship Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### SOC601 — Social Movements & Collective Action in Modern India

- ID: `soc601-socialmovements`
- Short name: Social Movements
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Peasant movements, Dalit movements, feminist movements, environmental movements (Chipko, Narmada).

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Social Movements & Collective Action in Modern India. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-soc601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-soc601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-soc601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-soc601-1; Social Movements & Collective Action in Modern India - Complete DBCM Department Notes; 58 pages; author: DBCM Sociology Faculty; reads: 14200; text/file: —
- ID n-soc601-2; Social Movements & Collective Action in Modern India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Social Movements & Collective Action in Modern India Complete Video Lectures; channel: DBCM Sociology Faculty; item count: 28; URL: https://www.youtube.com
- Social Movements & Collective Action in Modern India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

## Social Work (BSW) (BSW)

### BSW101 — Introduction to Social Work: Philosophy & Professional Ethics

- ID: `bsw101-socialworkintro`
- Short name: Social Work Intro
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: History of social work, human dignity, social justice, NASW code of ethics, and role of professional social workers.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Introduction to Social Work: Philosophy & Professional Ethics. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bsw101-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bsw101-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bsw101-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bsw101-1; Introduction to Social Work: Philosophy & Professional Ethics - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bsw101-2; Introduction to Social Work: Philosophy & Professional Ethics - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Introduction to Social Work: Philosophy & Professional Ethics Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Introduction to Social Work: Philosophy & Professional Ethics Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSW102 — Social Work Practice with Individuals (Case Work)

- ID: `bsw102-socialcasework`
- Short name: Social Case Work
- Semester: 1 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Case work relationship, intake interviews, psychosocial assessment, treatment planning, and termination.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Social Work Practice with Individuals (Case Work). |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bsw102-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bsw102-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bsw102-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bsw102-1; Social Work Practice with Individuals (Case Work) - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bsw102-2; Social Work Practice with Individuals (Case Work) - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Social Work Practice with Individuals (Case Work) Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Social Work Practice with Individuals (Case Work) Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSWM101 — Fundamentals of Volunteering & Community Service

- ID: `bswm101-volunteeringminor`
- Short name: Volunteering Minor
- Semester: 1 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Volunteer ethics, community outreach, blood donation camps, disaster assistance, and civic engagement.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Fundamentals of Volunteering & Community Service. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bswm101-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bswm101-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bswm101-1; Fundamentals of Volunteering & Community Service - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bswm101-2; Fundamentals of Volunteering & Community Service - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Fundamentals of Volunteering & Community Service Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Fundamentals of Volunteering & Community Service Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSW201 — Social Work Practice with Groups (Group Work)

- ID: `bsw201-socialgroupwork`
- Short name: Social Group Work
- Semester: 2 (FY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Group dynamics, stages of group development, therapeutic groups, leadership facilitation, and evaluation.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Social Work Practice with Groups (Group Work). |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bsw201-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bsw201-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bsw201-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bsw201-1; Social Work Practice with Groups (Group Work) - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bsw201-2; Social Work Practice with Groups (Group Work) - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Social Work Practice with Groups (Group Work) Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Social Work Practice with Groups (Group Work) Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSWM201 — Counselling Skills & First Contact Psychological Support

- ID: `bswm201-counsellingskills`
- Short name: Counselling Skills
- Semester: 2 (FY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Active listening, empathy vs sympathy, open-ended questioning, crisis de-escalation, and referral networks.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Counselling Skills & First Contact Psychological Support. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bswm201-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bswm201-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bswm201-1; Counselling Skills & First Contact Psychological Support - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bswm201-2; Counselling Skills & First Contact Psychological Support - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Counselling Skills & First Contact Psychological Support Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Counselling Skills & First Contact Psychological Support Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSW301 — Community Organization & Social Action

- ID: `bsw301-communityorg`
- Short name: Community Org
- Semester: 3 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Participatory rural appraisal (PRA), power dynamics, mass mobilization, advocacy, and social reform movements.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Community Organization & Social Action. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bsw301-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bsw301-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bsw301-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bsw301-1; Community Organization & Social Action - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bsw301-2; Community Organization & Social Action - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Community Organization & Social Action Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Community Organization & Social Action Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSWM301 — Geriatric Care & Senior Citizen Well-being

- ID: `bswm301-elderlycare`
- Short name: Elderly Care
- Semester: 3 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Ageing physiology, psychological loneliness, Senior Citizens Maintenance Act, and daycare initiatives.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Geriatric Care & Senior Citizen Well-being. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bswm301-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bswm301-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bswm301-1; Geriatric Care & Senior Citizen Well-being - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bswm301-2; Geriatric Care & Senior Citizen Well-being - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Geriatric Care & Senior Citizen Well-being Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Geriatric Care & Senior Citizen Well-being Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSW401 — Child Rights, Child Protection & Juvenile Justice

- ID: `bsw401-childprotection`
- Short name: Child Protection
- Semester: 4 (SY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: POCSO Act, Juvenile Justice Act, Child Welfare Committees, adoption laws, and foster care programs.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Child Rights, Child Protection & Juvenile Justice. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bsw401-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bsw401-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bsw401-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bsw401-1; Child Rights, Child Protection & Juvenile Justice - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bsw401-2; Child Rights, Child Protection & Juvenile Justice - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Child Rights, Child Protection & Juvenile Justice Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Child Rights, Child Protection & Juvenile Justice Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSWM401 — Substance Abuse Prevention & De-addiction Support

- ID: `bswm401-deaddictionsupport`
- Short name: De-addiction Support
- Semester: 4 (SY)
- Track: minor
- Credits: 3
- Scheme: DBCM Autonomous NEP 2024 (MINOR)
- Difficulty label: Interdisciplinary Elective
- Passing probability label: 92%+
- Description: Stages of chemical addiction, alcohol and drug awareness, family intervention, and relapse prevention.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Introductory Principles for Interdisciplinary Learners | 15 Marks | Basic overview and practical orientation to Substance Abuse Prevention & De-addiction Support. |
| 2 | Core Applications & Practical Tools | 18 Marks | Essential techniques and day-to-day tools in this minor subject. |
| 3 | Applied Case Analysis & Solutions | 18 Marks | Practical scenarios and hands-on case studies. |
| 4 | Contemporary Trends & Community Impact | 16 Marks | Relevance to everyday life, ethical guidelines, and civic responsibility. |

**IMP records (2)**

- ID q-bswm401-1; module 1; 8 marks; frequency: DBCM Minor Regular Exam; question text: —; answer hint: Provide clear, practical examples and outline key operational steps.
- ID q-bswm401-2; module 2; 8 marks; frequency: High Yield Paper; question text: —; answer hint: Highlight safety, methodology, and common real-world use cases.

**Notes (2)**

- ID n-bswm401-1; Substance Abuse Prevention & De-addiction Support - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bswm401-2; Substance Abuse Prevention & De-addiction Support - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MINOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Substance Abuse Prevention & De-addiction Support Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Substance Abuse Prevention & De-addiction Support Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSW501 — Rural & Tribal Community Development in India

- ID: `bsw501-ruraldevelopment`
- Short name: Rural Development
- Semester: 5 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Gram Panchayat development plans (GPDP), MGNREGA, Forest Rights Act, and sustainable livelihoods.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Rural & Tribal Community Development in India. |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bsw501-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bsw501-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bsw501-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bsw501-1; Rural & Tribal Community Development in India - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bsw501-2; Rural & Tribal Community Development in India - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Rural & Tribal Community Development in India Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Rural & Tribal Community Development in India Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### BSW601 — Management of Non-Profit Organizations (NGOs)

- ID: `bsw601-ngomanagement`
- Short name: NGO Management
- Semester: 6 (TY)
- Track: major
- Credits: 4
- Scheme: DBCM Autonomous NEP 2024 (MAJOR)
- Difficulty label: Core Comprehensive
- Passing probability label: 92%+
- Description: Trust and society registration, fundraising, CSR partnership proposals, FCRA compliance, and project audits.

**Syllabus modules**

| # | Module | Weightage | Summary |
|---:|---|---|---|
| 1 | Foundational Concepts & Principles | 14 Marks | Core theoretical basis and fundamental principles of Management of Non-Profit Organizations (NGOs). |
| 2 | Governing Models & Frameworks | 16 Marks | Standard definitions, structural classifications, and methodological paradigms. |
| 3 | Detailed Analytical Implementations | 18 Marks | Step-by-step mechanisms, critical proofs, and practical case evaluations. |
| 4 | Applied Problem Solving & Analysis | 16 Marks | Empirical evaluations, numerical calculations, and contextual applications. |
| 5 | Institutional Standards & Contemporary Debates | 14 Marks | Contemporary academic literature, practical constraints, and industry relevance. |
| 6 | Advanced Innovations & Case Studies | 12 Marks | Recent developments, comparative monographs, and field implementations. |

**IMP records (3)**

- ID q-bsw601-1; module 1; 10 marks; frequency: DBCM End-Sem Regular Paper; question text: —; answer hint: State standard definitions, structural characteristics, and draw relevant illustrative diagrams.
- ID q-bsw601-2; module 2; 10 marks; frequency: High Yield Exam Question; question text: —; answer hint: Detail step-by-step methodologies with appropriate real-world applications.
- ID q-bsw601-3; module 3; 8 marks; frequency: DBCM Mid-Sem Exam; question text: —; answer hint: Present a structured balanced argument with standard academic citations.

**Notes (2)**

- ID n-bsw601-1; Management of Non-Profit Organizations (NGOs) - Complete DBCM Department Notes; 58 pages; author: DBCM Social Work (BSW) Faculty; reads: 14200; text/file: —
- ID n-bsw601-2; Management of Non-Profit Organizations (NGOs) - Unit Summaries & Quick Revision Guide; 22 pages; author: DBCM Subject Cell; reads: 9800; text/file: —

**Past papers (3)**

- May / June 2024 (Summer 2024); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- Nov / Dec 2023 (Winter 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —
- May / June 2023 (Summer 2023); DBCM End-Semester Exam (MAJOR); 80 marks; 4 pages; document: —

**Videos (2)**

- Management of Non-Profit Organizations (NGOs) Complete Video Lectures; channel: DBCM Social Work (BSW) Faculty; item count: 28; URL: https://www.youtube.com
- Management of Non-Profit Organizations (NGOs) Comprehensive Review; channel: Academic Masterclass; item count: 18; URL: https://www.youtube.com

### Psychology (PYC)

Psychology follows the existing department course-numbering pattern: major subjects use `PYC` plus the course number, while minor subjects use the department code plus `M` and the course number. Syllabus modules and learning resources have not yet been added for these subjects.

| Code | Subject | Semester | Track |
|---|---|---:|---|
| PYC101 | Foundations of Psychology | 1 | Major |
| PYC102 | Biological Bases of Behaviour | 1 | Major |
| PYC201 | Developmental Psychology | 2 | Major |
| PYC301 | Social Psychology | 3 | Major |
| PYC401 | Cognitive Psychology | 4 | Major |
| PYC501 | Abnormal Psychology | 5 | Major |
| PYC601 | Psychological Testing and Assessment | 6 | Major |
| PYCM101 | General Psychology | 1 | Minor |
| PYCM201 | Psychology of Wellbeing | 2 | Minor |
| PYCM301 | Child Psychology | 3 | Minor |
| PYCM401 | Introduction to Counselling Psychology | 4 | Minor |

## Other site content and behavior

- The institution/about copy names Don Bosco College, Maram; affiliation to Manipur University; establishment year 2000; Salesians of Don Bosco; Senapati District, Manipur; the motto “Virtus et Scientia” / “Virtue and Knowledge”; NEP Major and Minor programs; and Maram Khunou campus location.
- Static site copy advertises study materials, notes, IMP questions, past papers, video lectures, 15 departments, and a study tip to review one module and three high-yield questions daily.
- Student profile fields: display name, email account (Supabase integration), department, major/minor track, and semester.
- Local user features: saved subject bookmarks, recently viewed subjects (up to five), and theme preference. Signed-in bookmarks are also synced to Supabase.
- Site filters: department, major/minor/all track, semester, PYQ year/session, and text search.
- Admin inputs: create a subject; add a note, IMP, or PYQ; edit the announcement. The admin APIs are server-side and use environment-configured credentials.
- Announcement copy differs between the HTML fallback and the Express server default. HTML fallback: “DBCM Academic Portal: 15 Departments active. Select Department, choose Major or Minor, and explore verified study resources.” Server default: “🔥 DBCM Semester Exam Prep Portal Active — Select your Department, choose Major or Minor, and access Notes, IMP Questions & PYQs.”

## Content gaps in the current source

- The 399 IMP records do not define a 'question' field in the source; they have IDs, module numbers, marks, frequency labels, and answer hints. The question bank UI/search expects question text.
- The 310 note records contain catalog metadata (title, pages, author, reads) but no note body or file path.
- The 465 PYQ records contain exam metadata but no paper document or question text.
- The 310 video records contain channel/title/count/URL metadata. Verify links before treating them as actual playlists.
- Institution rating, student count, passing-probability labels, read counts, and several resource descriptions are content values in the dataset; verify them before presenting them as official or measured facts.
