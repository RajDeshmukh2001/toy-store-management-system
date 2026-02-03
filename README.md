# MVC (Model–View–Controller) Architecture

MVC (Model–View–Controller) is an architectural design pattern used to structure applications by separating concerns into three interconnected components:

- **Model** → Business logic & data  
- **View** → UI / Presentation  
- **Controller** → Request handling & coordination  

---

## Objectives

- Separation of concerns  
- Cleaner codebase  
- Scalability  
- Maintainability  
- Testability  

---

## Model

### What is the Model?
The **Model** represents:
- Application data  
- Business rules  
- Domain logic  
- State of the application  

The Model is **independent of UI and user input**.

### Responsibilities of Model
- Stores data  
- Applies business rules  
- Performs validations  
- Interacts with databases / APIs  

### What a Model Contains
- Entities / Domain objects  
- Data access logic (DAO / Repository)  
- Business validations  
- Calculations  
- Rules & constraints  

### What Model Should **NOT** Do
- Handle HTTP requests  
- Render UI  
- Read user input directly  
- Know about Controllers or Views  

---

## View

### What is the View?
The **View** is responsible for:
- Displaying data to the user  
- Rendering UI  
- Formatting output  

It **does not contain business logic**.

### Responsibilities of View
- Display data  
- UI formatting  
- Simple conditional rendering  
- User interaction display  

### Examples of Views
- HTML / JSP / Thymeleaf  
- React / Angular / Vue UI  
- Mobile UI screens  
- CLI output  

### What View Should **NOT** Do
- Modify data  
- Apply business rules  
- Call databases  
- Decide application flow  

---

## Controller

### What is the Controller?
The **Controller**:
- Acts as a middleman  
- Handles user input  
- Coordinates between Model and View  

### Responsibilities of Controller
- Receives requests  
- Validates input (light validation)  
- Calls Model methods  
- Chooses which View to render  
- Sends responses  

### What Controller Should **NOT** Do
- Business logic  
- Database queries  
- Heavy calculations  

---

## Best Practices

- Keep controllers **thin**
- Put business logic in **Services / Models**
- Use **DTOs / ViewModels**
- Validate at multiple layers
- Follow **SOLID principles**
- Unit test **Model & Controller**
- Keep **View logic minimal**

---

## Summary

| Layer       | Responsibility                  |
|------------|----------------------------------|
| Model       | Data & Business Logic            |
| View        | UI & Presentation                |
| Controller  | Request Handling & Coordination  |

MVC helps build applications that are **clean, scalable, and easy to maintain**.
