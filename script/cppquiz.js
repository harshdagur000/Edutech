let questions = [
    {
        numb: 1,
        question: "What is C++?",
        answer: "A) A programming language (Correct Answer)",
        options: [
            "A) A programming language (Correct Answer)",
            "B) An operating system",
            "C) A compiler",
            "D) A scripting language"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is not a fundamental data type in C++?",
        answer: "D) bool (Correct Answer)",
        options: [
            "A) int",
            "B) float",
            "C) string",
            "D) bool (Correct Answer)"
        ]
    },
    {
        numb: 3,
        question: "What does OOP stand for in C++?",
        answer: "A) Object-Oriented Programming (Correct Answer)",
        options: [
            "A) Object-Oriented Programming (Correct Answer)",
            "B) Output Oriented Programming",
            "C) Overridden Object Programming",
            "D) Overlapping Object Protocol"
        ]
    },
    {
        numb: 4,
        question: "What is the default access specifier for members of a C++ class?",
        answer: "B) private (Correct Answer)",
        options: [
            "A) public",
            "B) private (Correct Answer)",
            "C) protected",
            "D) friend"
        ]
    },
    {
        numb: 5,
        question: "What keyword is used to allocate memory dynamically in C++?",
        answer: "A) new (Correct Answer)",
        options: [
            "A) new (Correct Answer)",
            "B) malloc",
            "C) allocate",
            "D) create"
        ]
    },
    {
        numb: 6,
        question: "What does the 'cin' object do in C++?",
        answer: "B) Reads input from the console (Correct Answer)",
        options: [
            "A) Prints output to the console",
            "B) Reads input from the console (Correct Answer)",
            "C) Manages files",
            "D) Performs arithmetic operations"
        ]
    },
    {
        numb: 7,
        question: "What is the purpose of the 'const' keyword in C++?",
        answer: "A) It declares a constant value (Correct Answer)",
        options: [
            "A) It declares a constant value (Correct Answer)",
            "B) It defines a variable",
            "C) It specifies a function's return type",
            "D) It creates a reference variable"
        ]
    },
    {
        numb: 8,
        question: "Which operator is used to access the member functions and variables of a class?",
        answer: "D) ::> (Correct Answer)",
        options: [
            "A) ::",
            "B) ->",
            "C) .",
            "D) ::> (Correct Answer)"
        ]
    },
    {
        numb: 9,
        question: "What is the purpose of the 'virtual' keyword in C++?",
        answer: "C) It enables dynamic binding and polymorphism (Correct Answer)",
        options: [
            "A) It declares a variable as virtual",
            "B) It specifies a function as pure virtual",
            "C) It enables dynamic binding and polymorphism (Correct Answer)",
            "D) It defines a virtual memory space"
        ]
    },
    {
        numb: 10,
        question: "What is the output of the following code snippet?\n int x = 5;\n int& ref = x;\n ref = 10;\n cout << x;",
        answer: "B) 10 (Correct Answer)",
        options: [
            "A) 5",
            "B) 10 (Correct Answer)",
            "C) Compiler Error",
            "D) Undefined Behavior"
        ]
    },
    {
        numb: 11,
        question: "What is the correct syntax for defining a function outside a class in C++?",
        answer: "B) return_type function_name(parameters) { } (Correct Answer)",
        options: [
            "A) function_name() { }",
            "B) return_type function_name(parameters) { } (Correct Answer)",
            "C) void function_name { }",
            "D) function_name(void) { }"
        ]
    },
    {
        numb: 12,
        question: "What is the purpose of the 'this' pointer in C++?",
        answer: "A) It points to the current instance of the class (Correct Answer)",
        options: [
            "A) It points to the current instance of the class (Correct Answer)",
            "B) It points to the previous instance of the class",
            "C) It points to the next instance of the class",
            "D) It points to the base class instance"
        ]
    },
    {
        numb: 13,
        question: "What is the output of the following code snippet?\n int arr[] = {1, 2, 3, 4, 5};\n cout << arr[3];",
        answer: "C) 4 (Correct Answer)",
        options: [
            "A) 1",
            "B) 2",
            "C) 4 (Correct Answer)",
            "D) 5"
        ]
    },
    {
        numb: 14,
        question: "What does the 'static' keyword do when applied to a variable in C++?",
        answer: "C) It allocates memory for the variable once (Correct Answer)",
        options: [
            "A) It makes the variable constant",
            "B) It makes the variable accessible only within the class",
            "C) It allocates memory for the variable once (Correct Answer)",
            "D) It initializes the variable with a default value"
        ]
    },
    {
        numb: 15,
        question: "Which of the following is NOT a valid C++ identifier?",
        answer: "C) 2myVariable (Correct Answer)",
        options: [
            "A) my_variable",
            "B) _myVariable",
            "C) 2myVariable (Correct Answer)",
            "D) MyVariable2"
        ]
    },
    {
        numb: 16,
        question: "What is the correct way to declare a pointer in C++?",
        answer: "C) int* ptr; (Correct Answer)",
        options: [
            "A) int ptr;",
            "B) pointer int ptr;",
            "C) int* ptr; (Correct Answer)",
            "D) ptr int;"
        ]
    },
    {
        numb: 17,
        question: "What is the purpose of the 'break' statement in C++?",
        answer: "A) To exit a loop or switch statement (Correct Answer)",
        options: [
            "A) To exit a loop or switch statement (Correct Answer)",
            "B) To skip the current iteration of a loop",
            "C) To return a value from a function",
            "D) To terminate the program"
        ]
    },
    {
        numb: 18,
        question: "What does the 'sizeof' operator return in C++?",
        answer: "A) The size of a data type in bytes (Correct Answer)",
        options: [
            "A) The size of a data type in bytes (Correct Answer)",
            "B) The address of a variable",
            "C) The value of a variable",
            "D) The number of elements in an array"
        ]
    },
    {
        numb: 19,
        question: "What is the output of the following code snippet?\n cout << (5 > 3 ? \"true\" : \"false\");",
        answer: "A) true (Correct Answer)",
        options: [
            "A) true (Correct Answer)",
            "B) false",
            "C) 1",
            "D) Compiler Error"
        ]
    },
    {
        numb: 20,
        question: "Which of the following is NOT a C++ standard library header file?",
        answer: "D) <iostream.h> (Correct Answer)",
        options: [
            "A) <iostream>",
            "B) <string>",
            "C) <math.h>",
            "D) <iostream.h> (Correct Answer)"
        ]
    }
];
