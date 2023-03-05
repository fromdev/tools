const list = [
    {
      "question": "What are some considerations for optimizing iOS app performance on older devices with limited resources?",
      "answers": [
        {
          "text": "Use efficient algorithms and data structures to minimize memory usage",
          "correct": true
        },
        {
          "text": "Optimize graphics and animations for the latest hardware, rather than using legacy APIs and features"
        },
        {
          "text": "Assume that all users have the latest hardware and do not bother optimizing for older devices"
        },
        {
          "text": "Avoid using device-specific APIs and features to ensure compatibility with all iOS devices"
        }
      ]
    },
    {
      "question": "What are some strategies for designing iOS apps that can be used effectively on both small and large device screens?",
      "answers": [
        {
          "text": "Use adaptive layouts and size classes to adjust interface elements based on available screen space",
          "correct": true
        },
        {
          "text": "Design for the smallest screen size and scale up for larger devices"
        },
        {
          "text": "Assume that all users have large screens and do not bother optimizing for smaller devices"
        },
        {
          "text": "Use fixed-size interface elements that are guaranteed to fit on all device screens"
        }
      ]
    },
    {
      "question": "What is the purpose of asset catalogs in iOS app development, and how do they help optimize app size?",
      "answers": [
        {
          "text": "Asset catalogs are a centralized location for storing and managing app assets, such as images and icons, which can be optimized for specific device resolutions and screen sizes",
          "correct": true
        },
        {
          "text": "Asset catalogs are used to generate code that can be optimized for specific device architectures"
        },
        {
          "text": "Asset catalogs are used to bundle app resources, such as configuration files and data models"
        },
        {
          "text": "Asset catalogs are used to generate app metadata, such as app icons and launch screens"
        }
      ]
    },
    {
      "question": "What are some techniques for minimizing app startup time and improving overall app performance on iOS devices?",
      "answers": [
        {
          "text": "Use lazy loading and background processing to defer resource-intensive tasks until they are actually needed",
          "correct": true
        },
        {
          "text": "Optimize app launch times by preloading all necessary resources and data during app installation"
        },
        {
          "text": "Assume that app startup time is not a critical performance metric and do not bother optimizing for it"
        },
        {
          "text": "Use hardware-specific APIs and features to improve app performance, even if they are not available on all iOS devices"
        }
      ]
    },
    {
      "question": "What is the purpose of app thinning in iOS app development, and how does it help optimize app size?",
      "answers": [
        {
          "text": "App thinning is a set of techniques for reducing the size of app bundles, including on-demand resources, app slicing, and bitcode compilation",
          "correct": true
        },
        {
          "text": "App thinning is a process for reducing the memory footprint of an app during runtime"
        },
        {
          "text": "App thinning is a set of techniques for obfuscating app code and data to deter reverse engineering and hacking"
        },
        {
          "text": "App thinning is a process for optimizing app graphics and animations for specific device resolutions and screen sizes"
        }
      ]
    },
    {
      "question": "What is encryption, and how does it help protect data in transit and at rest?",
      "answers": [
        {
          "text": "Encryption is the process of encoding data in such a way that only authorized parties can read it, helping to prevent theft and data breaches",
          "correct": true
        },
        {
          "text": "Encryption speeds up data transfer by compressing data into smaller packets"
        },
        {
          "text": "Encryption improves data integrity by ensuring data is not modified or corrupted during transfer or storage"
        },
        {
          "text": "Encryption ensures that data is backed up regularly and stored in multiple locations"
        }
      ]
    },
    {
      "question": "What is the purpose of using secure protocols like HTTPS in web communication?",
      "answers": [
        {
          "text": "Secure protocols like HTTPS encrypt all data exchanged between a web server and client, helping to prevent eavesdropping and tampering by attackers",
          "correct": true
        },
        {
          "text": "Secure protocols like HTTPS improve data integrity by ensuring data is not modified or corrupted during transfer or storage"
        },
        {
          "text": "Secure protocols like HTTPS provide additional metadata to improve the accessibility and usability of web pages"
        },
        {
          "text": "Secure protocols like HTTPS are a protocol for sending emails securely over the internet"
        }
      ]
    },
    {
      "question": "What are some common security threats that can be mitigated by using authentication and authorization?",
      "answers": [
        {
          "text": "Common security threats that can be mitigated by using authentication and authorization include unauthorized access, privilege escalation, and account hijacking",
          "correct": true
        },
        {
          "text": "Common security threats that can be mitigated by using authentication and authorization include network outages, hardware failures, and power outages"
        },
        {
          "text": "Common security threats that can be mitigated by using authentication and authorization include injection attacks, cross-site scripting, and cross-site request forgery"
        },
        {
          "text": "Common security threats that can be mitigated by using authentication and authorization include phishing attacks, malware infections, and ransomware"
        }
      ]
    },
    {
      "question": "What is the purpose of using salted hashes to store passwords, and how does it help protect against attacks?",
      "answers": [
        {
          "text": "Salting passwords makes it harder for attackers to crack passwords using pre-computed hash tables or rainbow tables",
          "correct": true
        },
        {
          "text": "Salting passwords makes it easier to recover passwords if they are lost or forgotten"
        },
        {
          "text": "Salting passwords makes it harder for attackers to intercept password data in transit"
        },
        {
          "text": "Salting passwords increases the strength of password complexity requirements"
        }
      ]
    },
    {
      "question": "What is the purpose of using input validation to protect against attacks?",
      "answers": [
        {
          "text": "Input validation ensures that user data is formatted correctly and within acceptable ranges, helping to prevent injection attacks and other security threats",
          "correct": true
        },
        {
          "text": "Input validation speeds up data transfer by compressing data into smaller packets"
        },
        {
          "text": "Input validation improves data integrity by ensuring data is not modified or corrupted during transfer or storage"
        },
        {
          "text": "Input validation ensures that data is backed up regularly and stored in multiple locations"
        }
      ]
    },
    {
      "question": "What is an optional in Swift, and how does it help with error handling?",
      "answers": [
        {
          "text": "An optional is a variable that can hold either a value or nil, and it allows for safe handling of errors that may occur during runtime",
          "correct": true
        },
        {
          "text": "An optional is a variable that can only hold a value, and it helps to ensure that errors are caught and handled at compile time"
        },
        {
          "text": "An optional is a variable that can hold multiple values, and it helps to ensure that errors are caught and handled at runtime"
        },
        {
          "text": "An optional is a variable that can hold either a value or an error message, and it helps to ensure that errors are caught and handled at runtime"
        }
      ]
    },
    {
      "question": "What is the purpose of the do-catch block in Swift error handling, and how is it used?",
      "answers": [
        {
          "text": "The do-catch block is used to handle errors that may occur during runtime, and it allows for safe handling of these errors in a predictable and readable manner",
          "correct": true
        },
        {
          "text": "The do-catch block is used to handle errors that may occur during compilation, and it allows for safe handling of these errors before runtime"
        },
        {
          "text": "The do-catch block is used to handle errors that may occur during runtime, and it allows for unsafe handling of these errors in a predictable and readable manner"
        },
        {
          "text": "The do-catch block is used to handle errors that may occur during runtime, but it is not a recommended method for error handling"
        }
      ]
    },
    {
      "question": "What is the purpose of the defer statement in Swift error handling, and how is it used?",
      "answers": [
        {
          "text": "The defer statement is used to execute code that needs to be run before a function returns, regardless of whether an error occurred or not, and it is often used for cleanup or finalization tasks",
          "correct": true
        },
        {
          "text": "The defer statement is used to delay the execution of a function until an error occurs, and it allows for more flexible error handling in Swift"
        },
        {
          "text": "The defer statement is used to handle errors that may occur during runtime, and it allows for safe handling of these errors in a predictable and readable manner"
        },
        {
          "text": "The defer statement is used to handle errors that may occur during compilation, and it allows for safe handling of these errors before runtime"
        }
      ]
    },
    {
      "question": "What is the purpose of the guard statement in Swift error handling, and how is it used?",
      "answers": [
        {
          "text": "The guard statement is used to check for a certain condition and exit early if it is not met, often used for input validation and error handling",
          "correct": true
        },
        {
          "text": "The guard statement is used to catch errors that may occur during runtime and handle them in a predictable and readable manner"
        },
        {
          "text": "The guard statement is used to handle errors that may occur during compilation, and it allows for safe handling of these errors before runtime"
        },
        {
          "text": "The guard statement is used to delay the execution of a function until an error occurs, and it allows for more flexible error handling in Swift"
        }
      ]
    },
    {
      "question": "What is the purpose of HTTPS in web communication, and how does it help protect against security threats?",
      "answers": [
        {
          "text": "HTTPS encrypts all data exchanged between a web server and client, helping to prevent eavesdropping and tampering by attackers",
          "correct": true
        },
        {
          "text": "HTTPS speeds up web communication by caching frequently accessed data on the client side"
        },
        {
          "text": "HTTPS provides additional metadata to improve the accessibility and usability of web pages"
        },
        {
          "text": "HTTPS is a protocol for sending emails securely over the internet"
        }
      ]
    },
    {
      "question": "What is the purpose of encryption in securing data in transit and at rest?",
      "answers": [
        {
          "text": "Encryption makes data unreadable to unauthorized users, helping to prevent theft and data breaches",
          "correct": true
        },
        {
          "text": "Encryption speeds up data transfer by compressing data into smaller packets"
        },
        {
          "text": "Encryption improves data integrity by ensuring data is not modified or corrupted during transfer or storage"
        },
        {
          "text": "Encryption ensures that data is backed up regularly and stored in multiple locations"
        }
      ]
    },
    {
      "question": "What is the purpose of using salted hashes to store passwords, and how does it help protect against attacks?",
      "answers": [
        {
          "text": "Salting passwords makes it harder for attackers to crack passwords using pre-computed hash tables or rainbow tables",
          "correct": true
        },
        {
          "text": "Salting passwords makes it easier to recover passwords if they are lost or forgotten"
        },
        {
          "text": "Salting passwords makes it harder for attackers to intercept password data in transit"
        },
        {
          "text": "Salting passwords increases the strength of password complexity requirements"
        }
      ]
    },
    {
      "question": "What is the purpose of input validation, and how does it help protect against attacks?",
      "answers": [
        {
          "text": "Input validation ensures that user data is formatted correctly and within acceptable ranges, helping to prevent injection attacks and other security threats",
          "correct": true
        },
        {
          "text": "Input validation speeds up data transfer by compressing data into smaller packets"
        },
        {
          "text": "Input validation improves data integrity by ensuring data is not modified or corrupted during transfer or storage"
        },
        {
          "text": "Input validation ensures that data is backed up regularly and stored in multiple locations"
        }
      ]
    },
    {
      "question": "What is the purpose of session management, and how does it help protect against attacks?",
      "answers": [
        {
          "text": "Session management tracks user activity and authentication status throughout a session, helping to prevent session hijacking and other security threats",
          "correct": true
        },
        {
          "text": "Session management speeds up data transfer by caching frequently accessed data on the client side"
        },
        {
          "text": "Session management provides additional metadata to improve the accessibility and usability of web pages"
        },
        {
          "text": "Session management is a protocol for sending emails securely over the internet"
        }
      ]
    },
    {
      "question": "What is the purpose of the Foundation framework in Swift?",
      "answers": [
        {
          "text": "To provide fundamental programming interfaces and classes for Swift",
          "correct": true
        },
        {
          "text": "To provide tools for building user interfaces in Swift"
        },
        {
          "text": "To provide networking functionality for Swift"
        },
        {
          "text": "To provide advanced graphics and animation features for Swift"
        }
      ]
    },
    {
      "question": "What is the purpose of the Dispatch framework in Swift?",
      "answers": [
        {
          "text": "To provide support for concurrent programming and multithreading in Swift",
          "correct": true
        },
        {
          "text": "To provide tools for building user interfaces in Swift"
        },
        {
          "text": "To provide networking functionality for Swift"
        },
        {
          "text": "To provide advanced graphics and animation features for Swift"
        }
      ]
    },
    {
      "question": "What is the purpose of the Core Data framework in Swift?",
      "answers": [
        {
          "text": "To provide an object graph and persistence framework for storing and retrieving data in Swift",
          "correct": true
        },
        {
          "text": "To provide tools for building user interfaces in Swift"
        },
        {
          "text": "To provide networking functionality for Swift"
        },
        {
          "text": "To provide advanced graphics and animation features for Swift"
        }
      ]
    },
    {
      "question": "What is the purpose of the Core Animation framework in Swift?",
      "answers": [
        {
          "text": "To provide advanced animation and graphics features for building rich user interfaces in Swift",
          "correct": true
        },
        {
          "text": "To provide tools for building networked applications in Swift"
        },
        {
          "text": "To provide support for concurrent programming and multithreading in Swift"
        },
        {
          "text": "To provide an object graph and persistence framework for storing and retrieving data in Swift"
        }
      ]
    },
    {
      "question": "What is the purpose of the XCTest framework in Swift?",
      "answers": [
        {
          "text": "To provide a testing framework for Swift code",
          "correct": true
        },
        {
          "text": "To provide tools for building user interfaces in Swift"
        },
        {
          "text": "To provide networking functionality for Swift"
        },
        {
          "text": "To provide advanced graphics and animation features for Swift"
        }
      ]
    },
    {
      "question": "What is the difference between a runtime error and a compile-time error in Swift?",
      "answers": [
        {
          "text": "A compile-time error occurs when the code does not conform to the language syntax, while a runtime error occurs when the program runs and encounters an unexpected problem",
          "correct": true
        },
        {
          "text": "A runtime error occurs when the code does not conform to the language syntax, while a compile-time error occurs when the program runs and encounters an unexpected problem"
        },
        {
          "text": "There is no difference between the two types of errors in Swift"
        },
        {
          "text": "Compile-time errors are handled automatically by Xcode, while runtime errors must be handled by the programmer"
        }
      ]
    },
    {
      "question": "What is the purpose of the do-try-catch block in Swift error handling?",
      "answers": [
        {
          "text": "The do-try-catch block is used to handle errors that occur during the execution of a program",
          "correct": true
        },
        {
          "text": "The do-try-catch block is used to handle errors that occur during compilation"
        },
        {
          "text": "The do-try-catch block is used to force the program to exit when an error occurs"
        },
        {
          "text": "The do-try-catch block is used to log errors to a file for later analysis"
        }
      ]
    },
    {
      "question": "What is the purpose of the defer statement in Swift error handling?",
      "answers": [
        {
          "text": "The defer statement is used to execute a block of code regardless of whether an error occurs or not",
          "correct": true
        },
        {
          "text": "The defer statement is used to handle errors that occur during the execution of a program"
        },
        {
          "text": "The defer statement is used to handle errors that occur during compilation"
        },
        {
          "text": "The defer statement is used to log errors to a file for later analysis"
        }
      ]
    },
    {
      "question": "What is the difference between a throwing and a non-throwing function in Swift?",
      "answers": [
        {
          "text": "A throwing function is one that can potentially throw an error during its execution, while a non-throwing function is one that cannot throw an error",
          "correct": true
        },
        {
          "text": "A throwing function is one that can be used to handle errors, while a non-throwing function cannot"
        },
        {
          "text": "A throwing function is one that requires the use of the do-try-catch block, while a non-throwing function does not"
        },
        {
          "text": "There is no difference between the two types of functions in Swift"
        }
      ]
    },
    {
      "question": "What is the purpose of the try? operator in Swift?",
      "answers": [
        {
          "text": "The try? operator is used to convert a throwing function call into an optional value",
          "correct": true
        },
        {
          "text": "The try? operator is used to force a throwing function call to throw an error"
        },
        {
          "text": "The try? operator is used to log errors to a file for later analysis"
        },
        {
          "text": "The try? operator is used to handle errors that occur during the execution of a program"
        }
      ]
    },
    {
      "question": "What is Swift, and what is its relationship to Objective-C?",
      "answers": [
        {
          "text": "Swift is a programming language developed by Apple for iOS, macOS, and other Apple platforms, and is designed to work alongside Objective-C and C code",
          "correct": true
        },
        {
          "text": "Swift is a programming language developed by Google for Android app development, and is intended to replace Java"
        },
        {
          "text": "Swift is a database management system used for storing and retrieving data in iOS apps"
        },
        {
          "text": "Swift is a web framework used for building dynamic web applications on Apple platforms"
        }
      ]
    },
    {
      "question": "What are optionals in Swift, and why are they important?",
      "answers": [
        {
          "text": "Optionals are a feature of Swift that allow variables to have a value or be nil, and help prevent runtime errors caused by nil values",
          "correct": true
        },
        {
          "text": "Optionals are a feature of Swift that allow variables to have multiple values at once, making it easier to perform complex calculations"
        },
        {
          "text": "Optionals are a feature of Swift that allow variables to be shared between different parts of an app, improving code reusability"
        },
        {
          "text": "Optionals are a feature of Swift that allow variables to be passed by reference rather than by value, improving performance"
        }
      ]
    },
    {
      "question": "What is a closure in Swift, and how is it used?",
      "answers": [
        {
          "text": "A closure is a self-contained block of code that can be passed around and used in other parts of the program, and is often used for callbacks and asynchronous programming",
          "correct": true
        },
        {
          "text": "A closure is a data structure used for storing and organizing data in Swift apps"
        },
        {
          "text": "A closure is a method for managing memory allocation and deallocation in Swift apps"
        },
        {
          "text": "A closure is a way to manage thread synchronization and concurrency in Swift apps"
        }
      ]
    },
    {
      "question": "What is a protocol in Swift, and how is it used?",
      "answers": [
        {
          "text": "A protocol is a set of requirements that a class, struct, or enum must conform to, and is often used for defining interfaces and shared behavior",
          "correct": true
        },
        {
          "text": "A protocol is a set of methods for accessing and manipulating data in Swift apps"
        },
        {
          "text": "A protocol is a set of functions for implementing complex calculations in Swift apps"
        },
        {
          "text": "A protocol is a set of rules for managing network communications in Swift apps"
        }
      ]
    },
    {
      "question": "What is memory management in Swift, and how is it handled?",
      "answers": [
        {
          "text": "Memory management in Swift is the process of allocating and deallocating memory for objects and variables, and is handled by the Swift runtime using automatic reference counting (ARC)",
          "correct": true
        },
        {
          "text": "Memory management in Swift is the process of managing disk space and file storage in iOS apps"
        },
        {
          "text": "Memory management in Swift is the process of optimizing app performance and responsiveness for low-memory devices"
        },
        {
          "text": "Memory management in Swift is the process of managing network bandwidth and connection reliability in iOS apps"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "let a = 5\nlet b = a++",
      "answers": [
        {
          "text": "Compiler error",
          "correct": true
        },
        {
          "text": "5"
        },
        {
          "text": "6"
        },
        {
          "text": "Undefined"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "var a = 5\nvar b = a\na = 6\nprint(b)",
      "answers": [
        {
          "text": "5",
          "correct": true
        },
        {
          "text": "6"
        },
        {
          "text": "0"
        },
        {
          "text": "Undefined"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "var a: Int? = 5\nvar b = a ?? 10\nprint(b)",
      "answers": [
        {
          "text": "5",
          "correct": true
        },
        {
          "text": "10"
        },
        {
          "text": "nil"
        },
        {
          "text": "Undefined"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "let a = 5\nlet b = a + a\nprint(b)",
      "answers": [
        {
          "text": "10",
          "correct": true
        },
        {
          "text": "5 + a"
        },
        {
          "text": "a + a"
        },
        {
          "text": "Undefined"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "var a = 5\nvar b = 10\nswap(&a, &b)\nprint(a, b)",
      "answers": [
        {
          "text": "10 5",
          "correct": true
        },
        {
          "text": "5 10"
        },
        {
          "text": "15 0"
        },
        {
          "text": "Undefined"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "let numbers = [1, 2, 3]\nlet numbersCopy = numbers\nnumbersCopy.append(4)\nprint(numbers)",
      "answers": [
        {
          "text": "[1, 2, 3]",
          "correct": true
        },
        {
          "text": "[1, 2, 3, 4]"
        },
        {
          "text": "Compiler error"
        },
        {
          "text": "Runtime error"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "var number = 1\nwhile number < 5 {\n number += 1\n}\nprint(number)",
      "answers": [
        {
          "text": "5",
          "correct": true
        },
        {
          "text": "6"
        },
        {
          "text": "4"
        },
        {
          "text": "Runtime error"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "let names = [\"Alice\", \"Bob\", \"Charlie\"]\nlet reversed = names.reversed()\nprint(reversed.joined())",
      "answers": [
        {
          "text": "eilrahCBoBAlice",
          "correct": true
        },
        {
          "text": "CharlieBobAlice"
        },
        {
          "text": "AliceBobCharlie"
        },
        {
          "text": "Compiler error"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "var a = 1\nvar b = 2\n(a, b) = (b, a)\nprint(a, b)",
      "answers": [
        {
          "text": "2 1",
          "correct": true
        },
        {
          "text": "1 2"
        },
        {
          "text": "3 3"
        },
        {
          "text": "Compiler error"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "let a = 10\nlet b = 2\nlet result = a % b == a / b\nprint(result)",
      "answers": [
        {
          "text": "false",
          "correct": true
        },
        {
          "text": "true"
        },
        {
          "text": "Compiler error"
        },
        {
          "text": "Runtime error"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "let value = Int(\"abc\")\nprint(value)",
      "answers": [
        {
          "text": "Optional(nil)",
          "correct": true
        },
        {
          "text": "0"
        },
        {
          "text": "Optional(0)"
        },
        {
          "text": "Compiler error"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "enum MyError: Error { case errorOne, errorTwo} do { throw MyError.errorOne} catch { print(\"Error: \\(error)\")}",
      "answers": [
        {
          "text": "Error: errorOne",
          "correct": true
        },
        {
          "text": "Error: errorTwo"
        },
        {
          "text": "Compiler error"
        },
        {
          "text": "No output"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "let a = 5\nlet b = 0\ndo { \nlet result = a / b\n} catch { \nprint(\"Error: \\(error)\")\n}",
      "answers": [
        {
          "text": "Error: division by zero",
          "correct": true
        },
        {
          "text": "Error: index out of range"
        },
        {
          "text": "Compiler error"
        },
        {
          "text": "No output"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "enum MyError: Error {\ncase errorOne, errorTwo\n}\n\ndo {let value: Int? = nil \nguard let _ = value else {\nthrow MyError.errorTwo \n}\n} catch { \nprint(\"Error: (error)\")\n}",
      "answers": [
        {
          "text": "Error: errorTwo",
          "correct": true
        },
        {
          "text": "Error: errorOne"
        },
        {
          "text": "Compiler error"
        },
        {
          "text": "No output"
        }
      ]
    },
    {
      "question": "What is the output of the following code?",
      "code": "let array = [1, 2, 3]\nlet element = array[3]\nprint(element)",
      "answers": [
        {
          "text": "Index out of range",
          "correct": true
        },
        {
          "text": "0"
        },
        {
          "text": "Optional(nil)"
        },
        {
          "text": "Compiler error"
        }
      ]
    },
    {
      "question": "What is the vulnerability in the following code, and how can it be fixed?",
      "code": "let password = \"password123\"\nlet hash = password.data(using: .utf8)?.base64EncodedString()\nprint(hash)",
      "answers": [
        {
          "text": "The vulnerability is that the password is being stored in plain text and can be easily decoded. It can be fixed by hashing the password with a secure algorithm and storing only the hash.",
          "correct": true
        },
        {
          "text": "The vulnerability is that the password is being stored in a variable, which can be accessed by other parts of the application. It can be fixed by using a secure keychain to store the password securely."
        },
        {
          "text": "The vulnerability is that the password is being sent over the network in plain text. It can be fixed by using SSL/TLS encryption to secure the communication."
        },
        {
          "text": "The code is not vulnerable to any security threats."
        }
      ]
    }
  ];