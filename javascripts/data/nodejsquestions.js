const list = [
    {
        "question": "What is the command to initialize a new Node.js project?",
        "code": "",
        "answers": [
            { "text": "npm init", "correct": true },
            { "text": "node init" },
            { "text": "npm new" },
            { "text": "node new" }
        ]
    },
    {
        "question": "Which module in Node.js is used for working with file system?",
        "code": "",
        "answers": [
            { "text": "http" },
            { "text": "fs", "correct": true },
            { "text": "path" },
            { "text": "url" }
        ]
    },
    {
        "question": "What is the purpose of the 'require' function in Node.js?",
        "code": "",
        "answers": [
            { "text": "To load a module or a file", "correct": true },
            { "text": "To create a new function" },
            { "text": "To start a new Node.js process" },
            { "text": "To send an HTTP request" }
        ]
    },
    {
        "question": "Which of the following is an example of a core module in Node.js?",
        "code": "",
        "answers": [
            { "text": "express" },
            { "text": "socket.io" },
            { "text": "fs", "correct": true },
            { "text": "request" }
        ]
    },
    {
        "question": "What is the purpose of the 'exports' object in Node.js modules?",
        "code": "",
        "answers": [
            { "text": "To make functions or objects available outside the module", "correct": true },
            { "text": "To load other modules" },
            { "text": "To define global variables" },
            { "text": "To set up a server" }
        ]
    },
    {
        "question": "What is the purpose of the package.json file in a Node.js project?",
        "answers": [
            { "text": "To define project dependencies and scripts", "correct": true },
            { "text": "To define project metadata" },
            { "text": "To define project configuration" },
            { "text": "To define project documentation" }
        ]
    },
    {
        "question": "What command can be used to install a Node.js package locally to a project?",
        "answers": [
            { "text": "npm install package-name", "correct": true },
            { "text": "npm package-name" },
            { "text": "npm add package-name" },
            { "text": "npm get package-name" }
        ]
    },
    {
        "question": "What command can be used to install a Node.js package globally on a machine?",
        "answers": [
            { "text": "npm install -g package-name", "correct": true },
            { "text": "npm install package-name" },
            { "text": "npm add -g package-name" },
            { "text": "npm get -g package-name" }
        ]
    },
    {
        "question": "How do you start a Node.js application?",
        "answers": [
            { "text": "npm start", "correct": true },
            { "text": "node app.js", "correct": true },
            { "text": "node start" },
            { "text": "npm app.js" }
        ]
    },
    {
        "question": "What is the purpose of the node_modules directory in a Node.js project?",
        "answers": [
            { "text": "To store project dependencies", "correct": true },
            { "text": "To store project configuration files" },
            { "text": "To store project documentation" },
            { "text": "To store project metadata" }
        ]
    },
    {
        "question": "What is the command to install a package and add it to the dependencies listed in package.json?",
        "answers": [
            { "text": "npm install <package-name> --save", "correct": true },
            { "text": "npm install <package-name> --save-dev" },
            { "text": "npm add <package-name>" },
            { "text": "npm update <package-name>" }
        ]
    },
    {
        "question": "What is the difference between npm install and npm ci?",
        "answers": [
            { "text": "npm install installs packages and updates package-lock.json, while npm ci installs packages using the exact versions specified in package-lock.json", "correct": true },
            { "text": "npm install installs packages using the exact versions specified in package-lock.json, while npm ci installs packages and updates package-lock.json" },
            { "text": "npm install installs packages and saves them to package-lock.json, while npm ci installs packages without saving them to package-lock.json" },
            { "text": "npm install and npm ci are equivalent commands" }
        ]
    },
    {
        "question": "What is the purpose of the NODE_ENV environment variable?",
        "answers": [
            { "text": "It specifies the environment in which the Node.js process is running, such as development, production, or test", "correct": true },
            { "text": "It specifies the version of Node.js that should be used to run the application" },
            { "text": "It specifies the port number that the application should listen on" },
            { "text": "It specifies the root directory of the application" }
        ]
    },
    {
        "question": "What is the purpose of a .env file in a Node.js project?",
        "answers": [
            { "text": "It stores configuration variables such as API keys and database credentials", "correct": true },
            { "text": "It contains the source code for the Node.js application" },
            { "text": "It specifies the dependencies for the Node.js project" },
            { "text": "It defines the routing rules for HTTP requests in the project" }
        ]
    },
    {
        "question": "What is V8 engine in Node.js?",
        "answers": [
            { "text": "It is an open-source JavaScript engine developed by Google.", "correct": true },
            { "text": "It is a package manager for Node.js." },
            { "text": "It is a module in Node.js that allows for the creation of web servers." },
            { "text": "It is a command-line interface for Node.js." }
        ]
    },
    {
        "question": "What is the purpose of the Cluster module in Node.js?",
        "answers": [
            { "text": "It allows for the creation of child processes to improve the performance of Node.js applications.", "correct": true },
            { "text": "It is a module in Node.js that allows for the creation of web servers." },
            { "text": "It is a feature in Node.js that allows for the execution of JavaScript code outside of the browser." },
            { "text": "It is a package manager for Node.js." }
        ]
    },
    {
        "question": "What is the difference between setTimeout() and setImmediate() in Node.js?",
        "answers": [
            { "text": "setTimeout() schedules a callback function to be executed after a given delay, while setImmediate() schedules a callback function to be executed immediately after the current event loop iteration.", "correct": true },
            { "text": "setTimeout() and setImmediate() are synonyms and can be used interchangeably." },
            { "text": "setTimeout() schedules a callback function to be executed immediately, while setImmediate() schedules a callback function to be executed after a given delay." },
            { "text": "setTimeout() and setImmediate() both schedule a callback function to be executed after a given delay." }
        ]
    },
    {
        "question": "What is the purpose of the os module in Node.js?",
        "answers": [
            { "text": "It provides a way of interacting with the operating system on which Node.js is running.", "correct": true },
            { "text": "It is a module in Node.js that allows for the creation of web servers." },
            { "text": "It is a feature in Node.js that allows for the execution of JavaScript code outside of the browser." },
            { "text": "It is a package manager for Node.js." }
        ]
    },
    {
        "question": "What is a microservices architecture and how can it help with scaling in Node.js?",
        "answers": [
            { "text": "A microservices architecture refers to breaking down a large application into smaller, independent services that communicate with each other through APIs, which allows for easier maintenance, deployment and scaling of the application", "correct": true },
            { "text": "A microservices architecture refers to compressing the Node.js code to reduce its size and improve performance" },
            { "text": "A microservices architecture refers to optimizing the code to run faster on multi-core CPUs" },
            { "text": "A microservices architecture refers to reducing the memory usage of the application" }]
    },
    {
        "question": "How can you use a CDN to improve the performance and scalability of a Node.js application?",
        "answers": [
            { "text": "By caching static assets such as images, CSS and JavaScript files on distributed servers closer to the end-users, which reduces the load on the origin server and improves page load time", "correct": true },
            { "text": "By compressing the Node.js code to reduce its size and improve performance" },
            { "text": "By optimizing the code to run faster on multi-core CPUs" },
            { "text": "By reducing the memory usage of the application" }
        ]
    },
    {
        "question": "What is load balancing and how can it help with scaling in Node.js?",
        "answers": [
            { "text": "Load balancing refers to distributing incoming requests between multiple servers or processes to improve performance and handle more traffic", "correct": true },
            { "text": "Load balancing refers to compressing the Node.js code to reduce its size and improve performance" },
            { "text": "Load balancing refers to optimizing the code to run faster on multi-core CPUs" },
            { "text": "Load balancing refers to reducing the memory usage of the application" }
        ]
    },
    {
        "question": "What is clustering in Node.js and how can it help with scaling?",
        "answers": [
            { "text": "Clustering refers to creating multiple Node.js processes that share the same port and distribute incoming requests between them, which helps to handle more traffic and improve performance", "correct": true },
            { "text": "Clustering refers to compressing the Node.js code to reduce its size and improve performance" },
            { "text": "Clustering refers to optimizing the code to run faster on multi-core CPUs" },
            { "text": "Clustering refers to reducing the memory usage of the application" }
        ]
    },
    {
        "question": "How can you scale a Node.js application horizontally?",
        "answers": [
            { "text": "By adding more servers to handle increased traffic", "correct": true },
            { "text": "By adding more CPU cores to the existing server" },
            { "text": "By optimizing the code to run faster on the existing server" },
            { "text": "By reducing the memory usage of the application" }
        ]
    },
    {
        "question": "What is a common vulnerability in Node.js applications?",
        "answers": [
            { "text": "Cross-site scripting (XSS)" },
            { "text": "SQL injection" },
            { "text": "Server-side request forgery (SSRF)", "correct": true },
            { "text": "Cross-site request forgery (CSRF)" }
        ]
    },
    {
        "question": "What is the purpose of the helmet middleware in Node.js applications?",
        "answers": [
            { "text": "To protect against SQL injection attacks" },
            { "text": "To protect against cross-site scripting (XSS) attacks" },
            { "text": "To set security-related HTTP headers", "correct": true },
            { "text": "To encrypt data sent between client and server" }
        ]
    },
    {
        "question": "What is the difference between input validation and output validation?",
        "answers": [
            { "text": "Input validation is ensuring that user input is of the correct type, while output validation is ensuring that output is properly formatted." },
            { "text": "Input validation is ensuring that user input is not malicious, while output validation is ensuring that output is not sensitive." },
            { "text": "Input validation is ensuring that user input is valid and safe, while output validation is ensuring that output is also valid and safe.", "correct": true },
            { "text": "There is no difference between input validation and output validation." }
        ]
    },
    {
        "question": "What is a common technique used to prevent brute-force attacks on user authentication in Node.js applications?",
        "answers": [
            { "text": "Limiting the number of login attempts allowed per user account", "correct": true },
            { "text": "Using secure hashing algorithms for storing passwords" },
            { "text": "Using two-factor authentication" },
            { "text": "None of the above" }
        ]
    },
    {
        "question": "What is the purpose of the 'crypto' module in Node.js?",
        "answers": [
            { "text": "To provide access to the file system" },
            { "text": "To handle HTTP requests and responses" },
            { "text": "To perform cryptographic functions such as encryption and decryption", "correct": true },
            { "text": "To handle database connections" }
        ]
    },
    {
        "question": "What is the difference between synchronous and asynchronous programming in Node.js?",
        "answers": [
            { "text": "Synchronous programming blocks the execution until a task is complete, while asynchronous programming allows the execution to continue while a task is being processed in the background.", "correct": true },
            { "text": "Synchronous programming allows the execution to continue while a task is being processed in the background, while asynchronous programming blocks the execution until a task is complete." },
            { "text": "There is no difference between synchronous and asynchronous programming in Node.js." },
            { "text": "Synchronous programming is used for CPU-intensive tasks, while asynchronous programming is used for I/O operations." }
        ]
    },
    {
        "question": "What is the main advantage of asynchronous programming in Node.js?",
        "answers": [
            { "text": "It allows for non-blocking I/O operations, which can greatly improve performance and scalability.", "correct": true },
            { "text": "It allows for blocking I/O operations, which can greatly improve performance and scalability." },
            { "text": "It allows for synchronous execution of tasks, which can greatly improve performance and scalability." },
            { "text": "It allows for parallel execution of tasks, which can greatly improve performance and scalability." }
        ]
    },
    {
        "question": "What is a callback function in Node.js?",
        "answers": [
            { "text": "A function that is passed as an argument to another function and is executed after that function completes its task.", "correct": true },
            { "text": "A function that is executed synchronously." },
            { "text": "A function that is executed asynchronously." },
            { "text": "A function that is used for CPU-intensive tasks." }
        ]
    },
    {
        "question": "What is a Promise in Node.js?",
        "answers": [
            { "text": "An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.", "correct": true },
            { "text": "A function that is used for synchronous execution of tasks." },
            { "text": "A function that is used for asynchronous execution of tasks." },
            { "text": "A function that is used for CPU-intensive tasks." }
        ]
    },
    {
        "question": "What is an event loop in Node.js?",
        "answers": [
            { "text": "The event loop is a mechanism that allows Node.js to handle asynchronous operations by constantly checking for completed operations and executing their callbacks.", "correct": true },
            { "text": "The event loop is a feature that allows Node.js to execute code on a specific schedule." },
            { "text": "The event loop is a tool that is used to monitor the performance of Node.js applications." },
            { "text": "The event loop is a library that is used to manage database connections in Node.js." }
        ]
    },
    {
        "question": "What is the purpose of the setImmediate function in Node.js?",
        "answers": [
            { "text": "The setImmediate function is used to schedule the execution of a callback function immediately after the current event loop iteration has completed.", "correct": true },
            { "text": "The setImmediate function is used to delay the execution of a callback function until the next event loop iteration." },
            { "text": "The setImmediate function is used to execute a callback function synchronously in Node.js." },
            { "text": "The setImmediate function is used to cancel the execution of a previously scheduled callback function." }
        ]
    },
    {
        "question": "What is the purpose of the process.nextTick function in Node.js?",
        "answers": [
            { "text": "The process.nextTick function is used to schedule the execution of a callback function at the beginning of the next event loop iteration, before any other I/O events are processed.", "correct": true },
            { "text": "The process.nextTick function is used to delay the execution of a callback function until the next event loop iteration." },
            { "text": "The process.nextTick function is used to execute a callback function synchronously in Node.js." },
            { "text": "The process.nextTick function is used to cancel the execution of a previously scheduled callback function." }
        ]
    },
    {
        "question": "What is Node.js?",
        "answers": [
            { "text": "A server-side JavaScript runtime environment", "correct": true },
            { "text": "A client-side JavaScript library" },
            { "text": "A markup language" },
            { "text": "A programming language" }
        ]
    },
    {
        "question": "What is the difference between Node.js and JavaScript?",
        "answers": [
            { "text": "Node.js is a runtime environment for executing JavaScript code outside of a web browser", "correct": true },
            { "text": "JavaScript is a server-side programming language" },
            { "text": "Node.js is a front-end framework" },
            { "text": "JavaScript is a back-end framework" }
        ]
    },
    {
        "question": "What is the package manager used in Node.js?",
        "answers": [
            { "text": "npm (Node Package Manager)", "correct": true },
            { "text": "yarn" },
            { "text": "bower" },
            { "text": "pip" }
        ]
    },
    {
        "question": "What is REPL in Node.js?",
        "answers": [
            { "text": "Read Evaluate Print Loop", "correct": true },
            { "text": "Random Exception Programming Language" },
            { "text": "React Evaluated Programming Language" },
            { "text": "Real-time Editing Programming Language" }
        ]
    },
    {
        "question": "What is the syntax for importing a module in Node.js?",
        "answers": [
            { "text": "require('./path/to/module')", "correct": true },
            { "text": "import module from './path/to/module'" },
            { "text": "loadModule('./path/to/module')" },
            { "text": "useModule('./path/to/module')" }
        ]
    },
    {
        "question": "What is authentication in Node.js?",
        "answers": [
            { "text": "The process of verifying the identity of a user.", "correct": true },
            { "text": "The process of granting access to a user." },
            { "text": "The process of encrypting data." },
            { "text": "The process of decoding data." }
        ]
    },
    {
        "question": "What is authorization in Node.js?",
        "answers": [
            { "text": "The process of granting access to a user.", "correct": true },
            { "text": "The process of verifying the identity of a user." },
            { "text": "The process of encrypting data." },
            { "text": "The process of decoding data." }
        ]
    },
    {
        "question": "What is the purpose of JSON Web Tokens (JWT) in Node.js authentication?",
        "answers": [
            { "text": "To securely transmit information between parties as a JSON object.", "correct": true },
            { "text": "To encrypt data." },
            { "text": "To authenticate a user." },
            { "text": "To authorize a user." }
        ]
    },
    {
        "question": "What is the difference between authentication and authorization in Node.js?",
        "answers": [
            { "text": "Authentication is the process of verifying the identity of a user, while authorization is the process of granting access to a user.", "correct": true },
            { "text": "Authentication and authorization are the same thing." },
            { "text": "Authentication is the process of granting access to a user, while authorization is the process of verifying the identity of a user." },
            { "text": "Authentication and authorization are not necessary in Node.js." }
        ]
    },
    {
        "question": "What is session-based authentication in Node.js?",
        "answers": [
            { "text": "A type of authentication that uses cookies to store session information.", "correct": true },
            { "text": "A type of authentication that uses JSON Web Tokens (JWT)." },
            { "text": "A type of authentication that does not require a user to log in." },
            { "text": "A type of authentication that is not secure." }
        ]
    },
    {
        "question": "What are Node.js streams?",
        "answers": [
            { "text": "A way to read and write data in small chunks", "correct": true },
            { "text": "A way to read and write data in large chunks" },
            { "text": "A way to read and write data asynchronously" },
            { "text": "A way to read and write data synchronously" }
        ]
    },
    {
        "question": "What are the benefits of using streams in Node.js?",
        "answers": [
            { "text": "Reduced memory usage and improved performance", "correct": true },
            { "text": "Increased memory usage and improved performance" },
            { "text": "Reduced memory usage and decreased performance" },
            { "text": "Increased memory usage and decreased performance" }
        ]
    },
    {
        "question": "What is the difference between a readable stream and a writable stream in Node.js?",
        "answers": [
            { "text": "A readable stream allows data to be read, while a writable stream allows data to be written", "correct": true },
            { "text": "A readable stream allows data to be written, while a writable stream allows data to be read" },
            { "text": "A readable stream allows data to be both read and written" },
            { "text": "A writable stream allows data to be both read and written" }
        ]
    },
    {
        "question": "How can you pipe streams in Node.js?",
        "answers": [
            { "text": "Using the pipe() method", "correct": true },
            { "text": "Using the read() method" },
            { "text": "Using the write() method" },
            { "text": "Using the on() method" }
        ]
    },
    {
        "question": "What is the purpose of a transform stream in Node.js?",
        "answers": [
            { "text": "To modify the data as it passes through the stream", "correct": true },
            { "text": "To read data from a file" },
            { "text": "To write data to a file" },
            { "text": "To perform encryption on the data" }
        ]
    },
    {
        "question": "What will be the output of the following code?",
        "code": "console.log(5 + '5');",
        "answers": [
            { "text": "10" },
            { "text": "55", "correct": true },
            { "text": "NaN" },
            { "text": "undefined" }
        ]
    },
    {
        "question": "What will be the output of the following code?",
        "code": "console.log('5' - 2);",
        "answers": [
            { "text": "3" },
            { "text": "7" },
            { "text": "NaN" },
            { "text": "3", "correct": true }
        ]
    },
    {
        "question": "What will be the output of the following code?",
        "code": "console.log('5' * 2);",
        "answers": [
            { "text": "52" },
            { "text": "10", "correct": true },
            { "text": "NaN" },
            { "text": "undefined" }
        ]
    },
    {
        "question": "What will be the output of the following code?",
        "code": "console.log('5' == 5);",
        "answers": [
            { "text": "true", "correct": true },
            { "text": "false" },
            { "text": "NaN" },
            { "text": "undefined" }
        ]
    },
    {
        "question": "What will be the output of the following code?",
        "code": "console.log([] + []);",
        "answers": [
            { "text": "[]" },
            { "text": "''", "correct": true },
            { "text": "undefined" },
            { "text": "null" }
        ]
    },
    {
        "question": "What is the output of the following Node.js code?",
        "code": "const a = 1;\nif(a === true) {\n  console.log('Hello World!');\n} else {\n  console.log('Goodbye World!');\n}",
        "answers": [
            { "text": "Hello World!" },
            { "text": "Goodbye World!", "correct": true },
            { "text": "No output" },
            { "text": "Syntax Error" }
        ]
    },
    {
        "question": "What is the output of the following Node.js code?",
        "code": "const a = 10;\nsetTimeout(() => {\n  console.log('a:', a);\n}, 0);\na = 20;",
        "answers": [
            { "text": "a: 10" },
            { "text": "a: 20", "correct": true },
            { "text": "a: undefined" },
            { "text": "Syntax Error" }
        ]
    },
    {
        "question": "What is the output of the following Node.js code?",
        "code": "console.log(0.1 + 0.2 === 0.3);",
        "answers": [
            { "text": "true" },
            { "text": "false", "correct": true },
            { "text": "TypeError" },
            { "text": "Syntax Error" }
        ]
    },
    {
        "question": "What is the output of the following Node.js code?",
        "code": "const arr = [1, 2, 3];\nconsole.log(arr[10]);",
        "answers": [
            { "text": "undefined", "correct": true },
            { "text": "null" },
            { "text": "ReferenceError" },
            { "text": "Syntax Error" }
        ]
    },
    {
        "question": "What is the output of the following Node.js code?",
        "code": "const str1 = 'Hello';\nconst str2 = 'World';\nconsole.log(str1 - str2);",
        "answers": [
            { "text": "NaN", "correct": true },
            { "text": "Syntax Error" },
            { "text": "TypeError" },
            { "text": "ReferenceError" }
        ]
    }

];
