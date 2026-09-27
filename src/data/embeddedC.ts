import type { Question } from '../types';

export const embeddedCQuestions: Question[] = [
  {
    id: "emb-c-1",
    topicId: "programming",
    title: "What does the `volatile` keyword do in C, and when should it be used in embedded systems?",
    answer: {
      shortAnswer: "The `volatile` keyword tells the compiler not to optimize the variable because its value may change at any time without the compiler's knowledge.",
      detailedExplanation: "In C, compilers aggressively optimize code. If they see a variable being read but not written to in a loop, they might cache it in a register. The `volatile` keyword prevents this by forcing the compiler to read the variable from memory every time it is accessed. It is essential in three main scenarios: 1) Hardware registers in memory-mapped I/O, 2) Global variables modified by an Interrupt Service Routine (ISR), and 3) Variables shared between multiple threads in a multithreaded application.",
      interviewExplanation: "I would explain that `volatile` prevents compiler optimizations on a variable. The compiler is forced to fetch the value from memory on every read. It's critical in embedded systems for reading hardware registers whose values change externally, for flags updated in ISRs, and for shared variables in RTOS tasks.",
      keyPoints: ["Prevents compiler optimization", "Forces memory read/write", "Used for hardware registers", "Used for ISR shared variables"],
      example: "volatile int *timer_reg = (volatile int *)0x40001000;\nwhile (*timer_reg == 0) { /* Wait for hardware to set it */ }",
      followUpQuestions: ["Can a variable be both `const` and `volatile`?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "Always mention the three main use cases: hardware registers, ISRs, and multithreading."
  },
  {
    id: "emb-c-2",
    topicId: "programming",
    title: "How do you set, clear, toggle, and check a specific bit in a register?",
    answer: {
      shortAnswer: "You use bitwise OR (`|`) to set, bitwise AND with NOT (`& ~`) to clear, bitwise XOR (`^`) to toggle, and bitwise AND (`&`) to check.",
      detailedExplanation: "Bitwise operations are fundamental in embedded C for register manipulation. \n- To SET bit `n`: `REG |= (1 << n)`\n- To CLEAR bit `n`: `REG &= ~(1 << n)`\n- To TOGGLE bit `n`: `REG ^= (1 << n)`\n- To CHECK bit `n`: `if (REG & (1 << n))`\nThese operations ensure that only the targeted bit is modified while the rest of the register remains unchanged.",
      interviewExplanation: "To manipulate a single bit without affecting others, I use bitwise operators. Setting a bit is done with an OR mask. Clearing uses an AND with a negated mask. Toggling uses XOR. Checking involves masking with AND.",
      keyPoints: ["Set: OR (`|`)", "Clear: AND NOT (`& ~`)", "Toggle: XOR (`^`)", "Check: AND (`&`)"],
      example: "#define BIT3 (1 << 3)\nunsigned char reg = 0;\nreg |= BIT3;  // Set bit 3\nreg &= ~BIT3; // Clear bit 3\nreg ^= BIT3;  // Toggle bit 3\nif (reg & BIT3) // Check bit 3",
      followUpQuestions: ["How would you set bits 3 and 4 simultaneously?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Coding", "Practical"],
    interviewTip: "Be prepared to write these macros on a whiteboard quickly and flawlessly."
  },
  {
    id: "emb-c-3",
    topicId: "programming",
    title: "Explain the `static` keyword in C. What are its different use cases?",
    answer: {
      shortAnswer: "`static` controls the visibility and lifetime of variables and functions. It limits scope to the file or block, but extends lifetime to the program's duration.",
      detailedExplanation: "The `static` keyword has three distinct uses in C:\n1. Inside a function: A static local variable retains its value between function calls. It's initialized only once and stored in the data or BSS segment.\n2. Global variable: A static global variable is only visible within the file it's declared in (internal linkage). It prevents naming conflicts across multiple files.\n3. Function: A static function is only callable from within the file it's defined in, providing encapsulation.",
      interviewExplanation: "The `static` keyword does two things: it restricts scope and extends lifetime. A static local variable persists across function calls. A static global variable or function is restricted to internal linkage, meaning it's private to that specific C file.",
      keyPoints: ["Retains value across function calls (local)", "Restricts visibility to the file (global/function)", "Provides encapsulation/information hiding"],
      example: "void counter() {\n  static int count = 0; // Initialized once\n  count++;\n}",
      followUpQuestions: ["Where is a static local variable stored in memory?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Emphasize its use for encapsulation (making things 'private') in C."
  },
  {
    id: "emb-c-4",
    topicId: "programming",
    title: "What is a pointer, and how does pointer arithmetic work?",
    answer: {
      shortAnswer: "A pointer is a variable that stores a memory address. Pointer arithmetic scales by the size of the data type the pointer points to.",
      detailedExplanation: "Pointers allow direct memory access, passing by reference, and dynamic memory allocation. When you perform arithmetic on a pointer (e.g., `ptr + 1`), the compiler doesn't just add 1 byte. It adds 1 times the size of the data type. For an `int *` on a 32-bit system, `ptr + 1` increases the actual memory address by 4 bytes. This makes iterating through arrays safe and intuitive.",
      interviewExplanation: "A pointer holds the address of another variable. The key to pointer arithmetic is that it's typed. If I have a pointer to a 32-bit integer, incrementing the pointer moves the address forward by 4 bytes to point to the next integer.",
      keyPoints: ["Stores memory address", "Arithmetic scales by `sizeof(type)`", "Used for arrays, dynamic memory, and hardware access"],
      example: "int arr[3] = {10, 20, 30};\nint *ptr = arr;\nptr++; // Now points to arr[1] (20)",
      followUpQuestions: ["What happens if you increment a `void *`?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Coding"],
    interviewTip: "Always relate pointer arithmetic to array indexing, as `arr[i]` is equivalent to `*(arr + i)`."
  },
  {
    id: "emb-c-5",
    topicId: "programming",
    title: "What is structure padding and packing?",
    answer: {
      shortAnswer: "Padding is the insertion of empty bytes by the compiler into a struct to align data in memory for faster CPU access. Packing forces the compiler to remove padding.",
      detailedExplanation: "CPUs read memory in word-sized chunks (e.g., 4 bytes on a 32-bit CPU). If a data type crosses a word boundary, the CPU requires multiple read cycles, slowing down execution or causing a hardware fault. Compilers insert 'padding' bytes to ensure variables are naturally aligned. However, in embedded systems (like network packets or hardware registers), we often need exact data layouts. We use compiler directives (like `__attribute__((packed))` or `#pragma pack`) to remove padding, trading speed for strict memory layout.",
      interviewExplanation: "Structure padding is when the compiler adds hidden bytes to align variables for optimized CPU access. Packing removes this padding to match strict data formats, like protocols. However, packed structs can lead to unaligned memory access penalties.",
      keyPoints: ["Padding aligns data for CPU speed", "Increases struct size", "Packing removes padding for strict layouts", "Unaligned access can cause performance hits or faults"],
      example: "struct Padded { char a; /* 3 bytes padding */ int b; }; // Size 8\nstruct Packed __attribute__((packed)) { char a; int b; }; // Size 5",
      followUpQuestions: ["How can you reorder struct members to minimize padding?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Demonstrate how to reorder struct members from largest to smallest to minimize memory waste natively."
  },
  {
    id: "emb-c-6",
    topicId: "programming",
    title: "Explain the memory layout of a C program.",
    answer: {
      shortAnswer: "A C program's memory is divided into Text (code), Data (initialized globals), BSS (uninitialized globals), Heap (dynamic memory), and Stack (local variables and function calls).",
      detailedExplanation: "The layout consists of:\n1. Text Segment: Read-only executable instructions.\n2. Data Segment: Initialized global and static variables. (Stored in ROM, copied to RAM on boot).\n3. BSS Segment: Uninitialized global and static variables. (Zeroed out in RAM on boot).\n4. Heap: Used for dynamic memory allocation (`malloc`, `free`). Grows upwards.\n5. Stack: LIFO structure for local variables, function parameters, and return addresses. Grows downwards.",
      interviewExplanation: "Memory is divided into several segments. The Text segment holds the code. The Data segment has initialized globals, while BSS has uninitialized globals that are zeroed at startup. The Heap is for dynamic allocation, and the Stack handles function calls and local variables.",
      keyPoints: ["Text: Code (ROM)", "Data: Initialized globals", "BSS: Uninitialized globals (zeroed)", "Heap: Dynamic memory", "Stack: Local variables & context"],
      example: "int a = 10; // Data\nint b;      // BSS\nvoid foo() {\n  int c; // Stack\n  int* d = malloc(4); // Heap\n}",
      followUpQuestions: ["What causes a Stack Overflow?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "Draw the memory map on a board if possible, showing the heap and stack growing towards each other."
  },
  {
    id: "emb-c-7",
    topicId: "programming",
    title: "What are the rules and best practices for writing an Interrupt Service Routine (ISR)?",
    answer: {
      shortAnswer: "ISRs should be short and fast, take no arguments, return nothing, and avoid blocking calls or non-reentrant functions like `printf`.",
      detailedExplanation: "An ISR is a hardware-triggered function. Best practices include:\n1. Keep it short: Do minimal processing (e.g., set a flag) and defer heavy lifting to the main loop or an RTOS task.\n2. No parameters/returns: Hardware triggers the ISR; it cannot pass arguments or read returns.\n3. Avoid blocking: Never use `delay()`, loops waiting for hardware, or locks.\n4. Avoid non-reentrant code: Do not use `printf` or `malloc`, as they are usually not thread-safe.\n5. Use `volatile`: Any global variable shared between the ISR and main code must be declared `volatile`.",
      interviewExplanation: "ISRs must be as short and fast as possible to not hold up the system. They take `void` and return `void`. I never use blocking functions or `printf` inside an ISR. I also make sure any shared flags are declared `volatile`.",
      keyPoints: ["Short and fast execution", "Return void, take void", "No blocking or delays", "No non-reentrant functions (`printf`)", "Use `volatile` for shared variables"],
      example: "volatile int data_ready = 0;\nvoid __attribute__((interrupt)) UART_ISR(void) {\n  data_ready = 1; // Set flag and exit quickly\n}",
      followUpQuestions: ["What is interrupt latency?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Important", "Practical"],
    interviewTip: "If asked to write an ISR, always just set a volatile flag and do the real work in the main loop."
  },
  {
    id: "emb-c-8",
    topicId: "programming",
    title: "What is a function pointer, and why is it useful in embedded systems?",
    answer: {
      shortAnswer: "A function pointer stores the address of a function, allowing dynamic function calls, implementing callbacks, and creating state machines.",
      detailedExplanation: "Function pointers point to executable code rather than data. In embedded systems, they are heavily used for:\n1. Callbacks: Passing a function as an argument (e.g., a timer interrupt calling a user-defined function).\n2. State Machines: An array of function pointers can replace massive `switch-case` statements for cleaner state transitions.\n3. Hardware Abstraction Layers (HAL): Structs containing function pointers allow the application to call hardware-specific drivers dynamically without knowing the exact implementation.",
      interviewExplanation: "A function pointer holds the memory address of a function. I use them extensively in embedded C to implement callback mechanisms, build clean lookup-table-based state machines, and create object-oriented-like hardware abstraction layers.",
      keyPoints: ["Stores executable code address", "Used for callbacks", "Replaces switch-case in state machines", "Used in HALs for OOP-like polymorphism"],
      example: "void myFunc(int a) { }\nvoid (*funcPtr)(int) = &myFunc;\nfuncPtr(5); // Calls myFunc",
      followUpQuestions: ["How do you declare an array of function pointers?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Coding"],
    interviewTip: "Learn the syntax for function pointers perfectly. It's confusing to write under pressure: `return_type (*pointer_name)(arg_types);`"
  },
  {
    id: "emb-c-9",
    topicId: "programming",
    title: "What is the difference between `#define` and `const`?",
    answer: {
      shortAnswer: "`#define` is a preprocessor directive that performs text substitution before compilation, while `const` creates a read-only typed variable handled by the compiler.",
      detailedExplanation: "`#define` (macros) are handled by the preprocessor. They have no data type, take up no memory themselves (though their substituted values do in the text segment), and ignore scope. \n`const` variables are handled by the compiler. They have a strict data type, obey scope rules (e.g., local vs global), and can be type-checked. They are typically stored in the read-only memory (ROM/Flash) on embedded systems.",
      interviewExplanation: "`#define` is a literal text replacement done before compilation, so there's no type checking or scoping. `const` declares a read-only variable that the compiler type-checks and limits by scope. I prefer `const` for constants due to type safety and easier debugging.",
      keyPoints: ["`#define`: Preprocessor, text replacement, untyped, no scope", "`const`: Compiler, typed, scoped, type-safe", "Prefer `const` for safety"],
      example: "#define MAX_VAL 100 // Preprocessor\nconst int max_val = 100; // Compiler, typed",
      followUpQuestions: ["Can you change the value of a `const` variable using a pointer?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Mention that debuggers can see `const` variables easily, but often cannot see `#define` macros."
  },
  {
    id: "emb-c-10",
    topicId: "programming",
    title: "Can a variable be both `const` and `volatile`?",
    answer: {
      shortAnswer: "Yes. It means the variable cannot be modified by the program code (`const`), but can be modified by hardware or an external event (`volatile`).",
      detailedExplanation: "A classic example is a read-only hardware register, such as a hardware status register or a timer counter. You want the compiler to enforce that the programmer doesn't accidentally write to it (`const`), but you also want to prevent the compiler from optimizing reads, because the hardware updates the value constantly (`volatile`).",
      interviewExplanation: "Absolutely. A `const volatile` variable is one that the program itself is forbidden from modifying, hence `const`. However, its value might change unexpectedly due to hardware, so `volatile` forces the compiler to read it from memory every time. Status registers are the primary example.",
      keyPoints: ["Yes, perfectly legal", "`const`: Program cannot write to it", "`volatile`: Hardware can change it at any time", "Used for read-only hardware status registers"],
      example: "const volatile uint32_t *timer_reg = (uint32_t *)0x40001004;",
      followUpQuestions: ["Can a pointer be `volatile` but point to non-volatile data?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "This is a very common 'trick' question to test your deep understanding of both keywords."
  },
  {
    id: "emb-c-11",
    topicId: "programming",
    title: "What is a dangling pointer and how do you avoid it?",
    answer: {
      shortAnswer: "A dangling pointer points to a memory location that has already been freed or has gone out of scope.",
      detailedExplanation: "Dangling pointers arise in two main ways: 1) Freeing dynamic memory (using `free()`) but keeping the pointer. 2) Returning a pointer to a local variable from a function. When the function exits, the local variable's stack memory is popped, and the pointer now points to invalid memory. Accessing a dangling pointer causes undefined behavior, often crashing the system.",
      interviewExplanation: "A dangling pointer is a pointer holding an address of freed or out-of-scope memory. To avoid them, I always set pointers to `NULL` immediately after calling `free()`. I also ensure I never return pointers to local stack variables from functions.",
      keyPoints: ["Points to freed or invalid memory", "Causes undefined behavior", "Avoid by setting to `NULL` after `free`", "Never return pointers to local stack variables"],
      example: "int* ptr = malloc(sizeof(int));\nfree(ptr);\nptr = NULL; // Prevents dangling pointer",
      followUpQuestions: ["What is a memory leak?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Always mention setting the pointer to NULL after freeing as a defensive programming best practice."
  },
  {
    id: "emb-c-12",
    topicId: "programming",
    title: "Difference between `inline` function and `#define` macro?",
    answer: {
      shortAnswer: "`inline` is a request to the compiler to insert function code directly at the call site, offering type safety. Macros are dumb text replacement by the preprocessor.",
      detailedExplanation: "Macros (`#define`) perform blind text substitution before compilation. They lack type checking and can cause side effects if arguments are evaluated multiple times (e.g., `MAX(i++, j++)`). \n`inline` functions are evaluated by the compiler. They provide strict type checking, scope rules, and safely evaluate arguments once. `inline` avoids the overhead of a function call (like pushing to the stack), making it as fast as a macro but much safer.",
      interviewExplanation: "While both remove function call overhead, I prefer `inline` functions. Macros are just text replacement and can cause dangerous side effects with operators like `++`. `inline` functions are parsed by the compiler, ensuring type safety and correct argument evaluation.",
      keyPoints: ["Macro: Preprocessor, no type safety, side-effect risks", "Inline: Compiler, type-safe, evaluates arguments safely", "Inline is a request, not a command to the compiler"],
      example: "#define SQR(x) ((x)*(x)) // Risky if called with SQR(i++)\ninline int sqr(int x) { return x * x; } // Safe",
      followUpQuestions: ["Does the compiler always inline an `inline` function?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Demonstrate the macro side-effect issue: `SQR(i++)` expands to `((i++)*(i++))`, incrementing `i` twice."
  },
  {
    id: "emb-c-13",
    topicId: "programming",
    title: "What is a `void` pointer?",
    answer: {
      shortAnswer: "A `void` pointer (`void *`) is a generic pointer that can point to any data type. It has no associated data type.",
      detailedExplanation: "Because it lacks a type, a `void *` cannot be dereferenced directly, and you cannot perform pointer arithmetic on it. To use the data it points to, you must explicitly cast it to another pointer type. They are highly useful in embedded systems for passing generic data buffers (e.g., to hardware drivers or RTOS queues) or in generic functions like `memcpy` and `malloc`.",
      interviewExplanation: "A `void` pointer is a generic, untyped pointer. It can store the address of any variable. However, because the compiler doesn't know the size of the data it points to, you can't dereference it or do math on it without casting it to a specific type first.",
      keyPoints: ["Generic pointer type", "Cannot be dereferenced directly", "Cannot perform pointer arithmetic natively", "Requires casting before use"],
      example: "int x = 10;\nvoid *ptr = &x;\nint val = *(int*)ptr; // Must cast to int* before dereferencing",
      followUpQuestions: ["Why does `malloc` return a `void *`?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Mention its use in standard library functions like `memcpy(void *dest, const void *src, size_t n)`."
  },
  {
    id: "emb-c-14",
    topicId: "programming",
    title: "Explain the `extern` keyword.",
    answer: {
      shortAnswer: "`extern` tells the compiler that a variable or function exists and is defined in another file, extending its visibility.",
      detailedExplanation: "When building a multi-file project, global variables defined in one C file are not automatically visible to others. By declaring a variable as `extern` in a header file (or at the top of another C file), you are telling the compiler 'this variable exists somewhere else, don't allocate memory for it here, the linker will resolve the address later.'",
      interviewExplanation: "The `extern` keyword is used for external linkage. If I define a global variable in `fileA.c`, I use `extern` in `fileB.c` to access that same variable. It tells the compiler the variable is defined elsewhere, preventing multiple allocation errors.",
      keyPoints: ["Extends visibility across multiple files", "Does not allocate memory (it's a declaration, not a definition)", "Resolved by the linker"],
      example: "// file1.c\nint global_flag = 1;\n\n// file2.c\nextern int global_flag;\nif(global_flag) { ... }",
      followUpQuestions: ["What happens if you define a variable as `extern` but never define it anywhere?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Distinguish clearly between a declaration (telling the compiler a type exists) and a definition (allocating memory)."
  },
  {
    id: "emb-c-15",
    topicId: "programming",
    title: "What is Little Endian vs Big Endian?",
    answer: {
      shortAnswer: "Endianness refers to the byte order in memory. Little Endian stores the Least Significant Byte (LSB) at the lowest memory address. Big Endian stores the Most Significant Byte (MSB) at the lowest address.",
      detailedExplanation: "Consider a 32-bit integer `0x12345678` stored at address `0x1000`.\n- Little Endian: `0x1000: 78`, `0x1001: 56`, `0x1002: 34`, `0x1003: 12`.\n- Big Endian: `0x1000: 12`, `0x1001: 34`, `0x1002: 56`, `0x1003: 78`.\nx86 and ARM processors usually use Little Endian, while network protocols (TCP/IP) strictly use Big Endian (Network Byte Order).",
      interviewExplanation: "Endianness is how multi-byte data is stored. Little Endian puts the smallest byte at the lowest address. Big Endian puts the largest byte at the lowest address. This is critical in embedded systems when transmitting data over networks or serial buses, as you may need to swap bytes.",
      keyPoints: ["Little Endian: LSB first", "Big Endian: MSB first", "Important for networking (Network Byte Order is Big Endian)", "Important for cross-platform communication"],
      example: "uint16_t val = 0xABCD;\nuint8_t *ptr = (uint8_t*)&val;\n// If *ptr == 0xCD, it's Little Endian",
      followUpQuestions: ["Write a C program to determine the endianness of your machine."]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "Memorize the C code snippet to check endianness using a char pointer pointing to an integer."
  },
  {
    id: "emb-c-16",
    topicId: "programming",
    title: "Write a C function to check the endianness of the architecture.",
    answer: {
      shortAnswer: "Assign an integer with a known multi-byte value, point to it with a char pointer, and check the first byte.",
      detailedExplanation: "By storing `0x0001` in a 16-bit or 32-bit integer, the Least Significant Byte is `0x01` and the Most Significant Byte is `0x00`. If we cast the address of this integer to a `char*` (which reads a single byte), dereferencing it will yield the byte at the lowest address. If it's `1`, the architecture is Little Endian. If it's `0`, it's Big Endian.",
      interviewExplanation: "To check endianness, I take a 16-bit integer, like `1`, and cast its address to a `char` pointer. A `char` pointer looks at just the first byte in memory. If that first byte is `1`, the LSB is stored first, meaning it's Little Endian. If it's `0`, it's Big Endian.",
      keyPoints: ["Use a multi-byte integer", "Use a single-byte pointer (`char*` or `uint8_t*`)", "Check the lowest memory address"],
      example: "bool isLittleEndian() {\n  uint16_t x = 1;\n  uint8_t *ptr = (uint8_t *)&x;\n  return (*ptr == 1);\n}",
      followUpQuestions: ["How would you convert an integer from Little Endian to Big Endian?"]
    },
    difficulty: "Intermediate",
    badges: ["Coding", "Frequently Asked"],
    interviewTip: "This is a standard whiteboard question. Be able to write it in 3 lines."
  },
  {
    id: "emb-c-17",
    topicId: "programming",
    title: "What is reentrancy? Is a reentrant function thread-safe?",
    answer: {
      shortAnswer: "A reentrant function can be interrupted and safely called again (re-entered) before the previous execution completes. They are typically thread-safe.",
      detailedExplanation: "A function is reentrant if it relies only on data provided by the caller (local stack variables or arguments) and does not use static or global non-constant variables. \nIf an interrupt pauses a function, and the ISR calls that same function, it must execute correctly without corrupting the state of the paused instance. \nReentrant functions are inherently thread-safe because they don't share state, but not all thread-safe functions are reentrant (e.g., a function using a mutex is thread-safe, but if an ISR calls it, it will deadlock, making it non-reentrant).",
      interviewExplanation: "Reentrancy means a function can safely be interrupted and called again by another task or ISR. To achieve this, it cannot use global or static variables. It must only use local stack variables. Reentrant functions are generally thread-safe.",
      keyPoints: ["Can be interrupted and called again safely", "Uses only local stack variables", "No global or static variables", "No hardware dependencies"],
      example: "int reentrant_add(int a, int b) {\n  return a + b; // Safe, uses only arguments/stack\n}",
      followUpQuestions: ["Why is `printf` usually not reentrant?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Clearly distinguish that reentrancy is about *interruption* (ISRs), while thread-safety is about *concurrent access* (Mutexes)."
  },
  {
    id: "emb-c-18",
    topicId: "programming",
    title: "Difference between `struct` and `union`?",
    answer: {
      shortAnswer: "In a `struct`, every member has its own memory space. In a `union`, all members share the same memory space.",
      detailedExplanation: "The size of a `struct` is the sum of the sizes of its members (plus padding). You can access all members simultaneously.\nThe size of a `union` is equal to the size of its largest member. It can only hold one member's value at a time. Modifying one member overwrites the others. Unions are highly useful in embedded systems for memory optimization and type punning (e.g., viewing a 32-bit register as an integer, or as an array of 4 bytes).",
      interviewExplanation: "Structs allocate memory for all elements, so you can use them all at once. Unions allocate memory only for the largest element, so all elements share the same address. I use unions in embedded systems to parse bytes received over UART into larger integers without casting.",
      keyPoints: ["Struct: Separate memory for each member", "Union: Shared memory for all members", "Union size = size of largest member", "Unions used for type punning and memory saving"],
      example: "union Register {\n  uint32_t full_word;\n  uint8_t bytes[4];\n}; // Modifying full_word modifies the bytes array",
      followUpQuestions: ["What is type punning?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual", "Practical"],
    interviewTip: "Give the exact use case of reading 4 bytes from I2C and automatically assembling them into a 32-bit integer using a union."
  },
  {
    id: "emb-c-19",
    topicId: "programming",
    title: "Why is dynamic memory allocation (`malloc`/`free`) generally avoided in embedded systems?",
    answer: {
      shortAnswer: "Dynamic allocation is avoided due to memory fragmentation, unpredictable execution time, and the risk of memory leaks leading to system crashes.",
      detailedExplanation: "In bare-metal embedded systems with limited RAM: \n1. Memory Fragmentation: Repeated allocations and deallocations leave tiny unusable holes in the heap. Over time, a request for a contiguous block might fail, crashing the system.\n2. Non-deterministic timing: Finding a free block on the heap takes an unpredictable amount of time, violating real-time constraints.\n3. Safety: If `malloc` fails, handling the error gracefully in a pacemaker or car brake system is incredibly difficult.",
      interviewExplanation: "I avoid `malloc` in embedded systems because of memory fragmentation. Over time, the heap gets chopped up, and an allocation might fail, crashing the device. It's also non-deterministic in timing. Instead, I statically allocate all memory pools and buffers at compile time.",
      keyPoints: ["Memory fragmentation", "Non-deterministic execution time", "Risk of memory leaks", "Hard to handle out-of-memory errors gracefully"],
      example: "// Instead of: char* buf = malloc(100);\n// Use: static char buf[100];",
      followUpQuestions: ["If you MUST use dynamic memory, how do RTOSes handle it safely?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Mention that if dynamic allocation is required, RTOSes use fixed-size memory block pools rather than standard `malloc`."
  },
  {
    id: "emb-c-20",
    topicId: "programming",
    title: "What are bit fields in C?",
    answer: {
      shortAnswer: "Bit fields allow you to specify the exact number of bits a struct member should occupy, saving memory.",
      detailedExplanation: "In a struct, you can define members followed by a colon and a number representing the bit width. This is highly useful for mapping C structs directly to hardware registers or network protocol headers, where data might be 3 bits or 5 bits wide. However, the exact memory layout of bit fields (endianness and padding) is compiler-dependent, making code less portable.",
      interviewExplanation: "Bit fields let me pack variables tightly into a struct by defining exactly how many bits each uses. It's great for mirroring hardware registers. The downside is that bit-field packing is compiler-dependent, so porting the code to a different architecture can cause bugs.",
      keyPoints: ["Specify exact bit width of variables", "Saves memory", "Maps to hardware registers", "Highly compiler-dependent (portability issues)"],
      example: "struct STATUS_REG {\n  unsigned int flagA : 1;\n  unsigned int flagB : 3;\n  unsigned int mode  : 4;\n}; // Total 8 bits",
      followUpQuestions: ["Why might bitwise operations be preferred over bit fields?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Always highlight the portability issue. Many senior engineers prefer bitwise macros over bit fields precisely because macros are 100% portable."
  },
  {
    id: "emb-c-21",
    topicId: "programming",
    title: "How do you write an infinite loop in C?",
    answer: {
      shortAnswer: "The two most common ways are `while(1)` and `for(;;)`. They compile to the exact same assembly in modern compilers.",
      detailedExplanation: "In embedded systems, the `main()` function should never exit. An infinite loop forms the 'super loop' of the system architecture.\n- `while(1) { }` is explicit and readable.\n- `for(;;) { }` is historically preferred by some because older compilers might generate a warning for `while(1)` (condition is always true). \nToday, any optimizing compiler treats both as an unconditional jump instruction.",
      interviewExplanation: "I use `while(1)` or `for(;;)`. Both are completely valid. In embedded systems, this is the core architecture for a bare-metal program, known as the super loop, where tasks are polled endlessly.",
      keyPoints: ["`while(1)`", "`for(;;)`", "Used for the main application super loop", "Compile to identical assembly"],
      example: "int main() {\n  // Initialization\n  while(1) {\n    // Super loop tasks\n  }\n}",
      followUpQuestions: ["What is the difference in assembly generated by `while(1)` vs `for(;;)`? (Answer: None)"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked"],
    interviewTip: "Just mention both and state they are identical under modern compilers."
  },
  {
    id: "emb-c-22",
    topicId: "programming",
    title: "What is the `register` keyword?",
    answer: {
      shortAnswer: "It suggests to the compiler that a variable should be stored in a CPU register instead of RAM for faster access.",
      detailedExplanation: "Historically, the `register` keyword was used to speed up code by keeping heavily used variables (like loop counters) in CPU registers. Because registers are inside the CPU, they are much faster than RAM. However, you cannot take the address (using `&`) of a register variable. Modern optimizing compilers generally ignore this keyword, as they are much better at allocating registers automatically than programmers.",
      interviewExplanation: "The `register` keyword is a hint to the compiler to store a variable in a CPU register for speed. You can't use the `&` operator on it because registers don't have memory addresses. Practically, modern compilers ignore it and optimize register allocation on their own.",
      keyPoints: ["Hint for fast register storage", "Cannot take memory address (`&`)", "Largely obsolete due to modern compiler optimization"],
      example: "register int counter = 0;\nfor(counter = 0; counter < 100; counter++) { ... }",
      followUpQuestions: ["Why can't you take the address of a register variable?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Acknowledge its historical purpose but emphasize that you shouldn't use it in modern code because compilers are smarter."
  },
  {
    id: "emb-c-23",
    topicId: "programming",
    title: "Explain `const int *ptr`, `int const *ptr`, and `int * const ptr`.",
    answer: {
      shortAnswer: "The first two point to a constant integer. The third is a constant pointer pointing to a modifiable integer.",
      detailedExplanation: "Read declarations from right to left.\n1. `const int *ptr`: ptr is a pointer to an int that is const. (Data is read-only, pointer can change).\n2. `int const *ptr`: Exactly the same as above.\n3. `int * const ptr`: ptr is a const pointer to an int. (Pointer address is locked, data can be changed).\n4. `const int * const ptr`: Both the pointer address and the data are read-only.",
      interviewExplanation: "I read these right-to-left. `const int *ptr` means pointer to an int that is const; the data can't change. `int * const ptr` means a constant pointer to an int; the address it holds can't change. This is useful for passing read-only buffers or pointing to fixed hardware addresses.",
      keyPoints: ["Read right-to-left", "`const int *`: Data is locked", "`int * const`: Address is locked"],
      example: "int val = 5;\nconst int *p1 = &val; // Cannot do *p1 = 10\nint * const p2 = &val; // Cannot do p2 = &other_val",
      followUpQuestions: ["When would you use a `const pointer to a volatile data`?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "Teach the interviewer the 'Read Right-to-Left' trick. It shows you understand the syntax deeply."
  },
  {
    id: "emb-c-24",
    topicId: "programming",
    title: "What is integer promotion in C?",
    answer: {
      shortAnswer: "Integer promotion is the automatic conversion of smaller integer types (like `char` or `short`) to `int` or `unsigned int` before arithmetic operations are performed.",
      detailedExplanation: "In C, arithmetic operations are not performed on types smaller than `int`. If you add two `uint8_t` (chars) together, the compiler first promotes them to `int` (usually 32-bit), performs the addition, and then truncates the result back down if you store it in a `uint8_t`. This can cause unexpected sign extension bugs if signed and unsigned types are mixed during bitwise operations.",
      interviewExplanation: "Integer promotion means that anytime I do math or bitwise operations on a `char` or `short`, the C compiler automatically converts them up to an `int` first. This is a common source of bugs in embedded systems, especially when bit-shifting a `char`, because it can accidentally sign-extend negative numbers into 32 bits.",
      keyPoints: ["Chars and shorts promoted to int", "Happens automatically before arithmetic/bitwise ops", "Can cause sign extension bugs"],
      example: "char a = 0xAA;\n// ~a is NOT 0x55. 'a' is promoted to 32-bit int: 0xFFFFFFAA\n// ~a becomes 0x00000055",
      followUpQuestions: ["How do you prevent integer promotion bugs in bitwise operations?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Highlight that this rule is exactly why we must be careful with bitwise NOT (`~`) on 8-bit variables."
  },
  {
    id: "emb-c-25",
    topicId: "programming",
    title: "Explain `#pragma pack(1)`.",
    answer: {
      shortAnswer: "`#pragma pack(1)` instructs the compiler to pack structure members with 1-byte alignment, removing all padding bytes.",
      detailedExplanation: "By default, compilers align struct members for optimal CPU access, adding empty padding bytes. `#pragma pack(1)` forces the compiler to pack the data tightly. This is critical in embedded systems when mapping a C struct directly to a serial protocol payload or a specific hardware memory map where every byte must align exactly with the specification. The trade-off is that accessing unaligned data is slower and can cause hardware faults on some ARM architectures.",
      interviewExplanation: "`#pragma pack(1)` removes struct padding. I use it when defining structs that map to network packets or I2C payloads. However, I have to be careful, as unaligned memory accesses can cause hard faults on Cortex-M processors if unaligned access isn't supported.",
      keyPoints: ["Removes compiler padding", "Aligns to 1 byte", "Used for protocols and hardware mapping", "Risk of unaligned access faults"],
      example: "#pragma pack(push, 1)\nstruct Packet { char type; int payload; };\n#pragma pack(pop)",
      followUpQuestions: ["What does `#pragma pack(push)` and `pop` do?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Mention the 'push and pop' technique to ensure you only pack specific structs and don't accidentally pack the whole project."
  },
  {
    id: "emb-c-26",
    topicId: "programming",
    title: "What are the `#ifdef`, `#ifndef`, `#else`, and `#endif` directives used for?",
    answer: {
      shortAnswer: "They are preprocessor directives used for conditional compilation, allowing you to compile different blocks of code based on defined macros.",
      detailedExplanation: "These directives control which parts of the C file are actually passed to the compiler. \n- Include Guards: `#ifndef HEADER_H` prevents a header file from being included multiple times, avoiding duplicate definition errors.\n- Portability: `#ifdef ARM` vs `#ifdef x86` allows writing cross-platform code.\n- Debugging: Wrapping print statements in `#ifdef DEBUG` allows you to strip out debug code for production builds simply by removing the macro.",
      interviewExplanation: "Conditional compilation tells the preprocessor to include or ignore code before compiling. I use it primarily for include guards in headers to prevent double-inclusion. I also use it heavily for creating Debug vs Release builds, or compiling different HAL drivers based on the target MCU.",
      keyPoints: ["Conditional compilation", "Header include guards", "Cross-platform development", "Debug vs Release builds"],
      example: "#ifndef MY_HEADER_H\n#define MY_HEADER_H\n// header contents\n#endif",
      followUpQuestions: ["What is `#pragma once`?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "You must know how to write an include guard blindly. It's fundamental C structure."
  },
  {
    id: "emb-c-27",
    topicId: "programming",
    title: "Difference between passing by value and passing by reference in C.",
    answer: {
      shortAnswer: "Pass by value copies the data. Pass by reference (using pointers in C) passes the memory address of the data.",
      detailedExplanation: "Strictly speaking, C only supports pass by value. However, passing a pointer achieves 'pass by reference' semantics. \n- Value: The function gets a local copy. Modifications do not affect the original variable. It's safe but inefficient for large structs.\n- Reference (Pointers): The function gets a copy of the address. Modifying the dereferenced pointer modifies the original variable. It is fast and uses minimal stack memory, making it ideal for passing large structs.",
      interviewExplanation: "Passing by value copies the variable, so changes inside the function don't affect the original. Passing a pointer simulates pass-by-reference. It allows the function to modify the original variable and saves stack memory because you're only pushing a 4-byte address, not a massive struct.",
      keyPoints: ["Value: Copies data, safe, uses more stack", "Reference (Pointer): Copies address, modifies original, efficient", "C technically only has pass-by-value"],
      example: "void passByVal(int a) { a = 5; }\nvoid passByRef(int *a) { *a = 5; }",
      followUpQuestions: ["Why would you pass a pointer to a struct, but make it a `const` pointer?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Always clarify that C doesn't have true C++ style references (`&`), it uses pointers to achieve the same result."
  },
  {
    id: "emb-c-28",
    topicId: "programming",
    title: "What is typecasting, and what are implicit and explicit casts?",
    answer: {
      shortAnswer: "Typecasting converts a variable from one data type to another. Implicit casting is done automatically by the compiler, while explicit casting is forced by the programmer.",
      detailedExplanation: "Implicit Cast: Occurs automatically during operations with mixed types (e.g., adding an `int` to a `float`). The compiler promotes the smaller type to prevent data loss. \nExplicit Cast: The programmer uses `(type)` to force a conversion. This is heavily used in embedded C to treat a chunk of memory (like a UART buffer) as a specific struct, or when doing math where you intentionally want to truncate data (like casting `float` to `int`).",
      interviewExplanation: "Typecasting changes data types. Implicit casting happens automatically, like integer promotion. Explicit casting is when I manually tell the compiler to treat a variable differently. In embedded systems, I explicitly cast pointer types all the time, for example, casting a raw memory address to a hardware register struct pointer.",
      keyPoints: ["Implicit: Automatic, usually safe promotion", "Explicit: Manual using `(type)`", "Essential for pointer manipulation in hardware access"],
      example: "float f = 3.14;\nint i = f; // Implicit cast to 3\nint* ptr = (int*)0x4000; // Explicit pointer cast",
      followUpQuestions: ["What data is lost when casting a float to an int?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Tie explicit casting directly back to memory-mapped I/O, as it's the core way we access registers in C."
  },
  {
    id: "emb-c-29",
    topicId: "programming",
    title: "What is the `offsetof` macro?",
    answer: {
      shortAnswer: "The `offsetof` macro returns the byte offset of a specific member within a struct from the beginning of the struct.",
      detailedExplanation: "Defined in `<stddef.h>`, `offsetof(type, member)` calculates how many bytes into the struct a member is located. It is incredibly useful when parsing protocols or creating custom memory allocators. It works by casting the address `0` to a pointer of the struct type, and then taking the address of the specific member.",
      interviewExplanation: "`offsetof` tells me exactly where a struct member is located in memory relative to the start of the struct. It accounts for padding automatically. This is essential when I only have a pointer to a specific field but I need to calculate the pointer to the parent structure.",
      keyPoints: ["Returns byte offset of struct member", "Accounts for compiler padding", "Defined in stddef.h"],
      example: "#define offsetof(TYPE, MEMBER) ((size_t) &((TYPE *)0)->MEMBER)",
      followUpQuestions: ["What is the `container_of` macro in Linux kernel programming?"]
    },
    difficulty: "Advanced",
    badges: ["Coding", "Conceptual"],
    interviewTip: "If you can write the internal macro implementation `((size_t) &((TYPE *)0)->MEMBER)` on a whiteboard, you will impress the interviewer."
  },
  {
    id: "emb-c-30",
    topicId: "programming",
    title: "Explain `setjmp` and `longjmp`.",
    answer: {
      shortAnswer: "`setjmp` and `longjmp` provide a way to perform non-local `goto` jumps across different functions, often used for basic exception handling in C.",
      detailedExplanation: "`setjmp` saves the current CPU context (registers, stack pointer) into a `jmp_buf` structure and returns 0. Later, deep in another function call, calling `longjmp` restores that saved context. Execution instantly teleports back to the `setjmp` call, which now returns a non-zero value. It bypasses the normal function return mechanism. While powerful, it can cause severe issues like skipping `free()` calls, leading to memory leaks.",
      interviewExplanation: "They are C's version of try/catch exception handling. `setjmp` saves the CPU state. If an error happens deep in the call stack, `longjmp` restores that state, teleporting execution back to the `setjmp` point. I avoid it unless absolutely necessary because it destroys the normal execution flow and makes debugging very hard.",
      keyPoints: ["Non-local goto across functions", "Saves and restores CPU context", "Used for exception handling", "Dangerous: can cause memory leaks"],
      example: "jmp_buf buf;\nif(setjmp(buf) == 0) {\n  // Normal execution\n  longjmp(buf, 1); // Jump back\n} else {\n  // Error handling\n}",
      followUpQuestions: ["Why might local variables be corrupted after a `longjmp`?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Most interviewers just want to know you understand what they are and why they are generally bad practice in modern embedded code."
  },
  {
    id: "emb-c-31",
    topicId: "programming",
    title: "What is a Watchdog Timer (WDT) and how do you handle it in C?",
    answer: {
      shortAnswer: "A Watchdog Timer is a hardware timer that automatically resets the microcontroller if it is not periodically 'kicked' (cleared) by the software.",
      detailedExplanation: "The WDT acts as a fail-safe. The hardware timer constantly counts down. The software must periodically write a specific sequence to the WDT register to reset the counter (kicking the dog). If the software hangs in an infinite loop or crashes, it fails to kick the dog, the timer hits zero, and the hardware forcefully resets the system. In C, you usually handle this in the main super loop or in a low-priority RTOS task.",
      interviewExplanation: "A watchdog timer detects software hangs. The hardware timer counts down to a reset. In my main loop, I regularly call a function to clear the timer. If my code gets stuck in a while loop, it stops clearing the timer, and the hardware resets the chip, recovering the system.",
      keyPoints: ["Hardware timer that resets MCU", "Recovers from software hangs", "Must be 'kicked' periodically", "Handled in main loop or idle task"],
      example: "void main() {\n  WDT_Init();\n  while(1) {\n    WDT_Kick(); // Clear timer\n    DoWork();\n  }\n}",
      followUpQuestions: ["Why shouldn't you kick the watchdog inside an ISR?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important", "Practical"],
    interviewTip: "Always emphasize that the watchdog should NOT be kicked inside a timer ISR, because if the main loop hangs, the ISR might still fire and kick the dog, defeating the purpose."
  },
  {
    id: "emb-c-32",
    topicId: "programming",
    title: "Explain sequence points in C.",
    answer: {
      shortAnswer: "A sequence point is a point in execution where all side effects from previous evaluations are guaranteed to be complete.",
      detailedExplanation: "Between sequence points, the order of evaluation is undefined. The most common sequence point is the semicolon `;`. Others include logical operators (`&&`, `||`), the ternary operator (`? :`), and the comma operator `,`. Expressions like `i = i++` or `a[i] = i++` invoke undefined behavior because they modify the same variable twice without an intervening sequence point.",
      interviewExplanation: "Sequence points define when side effects take place. At a sequence point, all previous operations are fully complete. Writing code like `x = i++ * i++` is undefined behavior because we are modifying `i` multiple times between sequence points, and the compiler can evaluate them in any order.",
      keyPoints: ["Guarantees side effects are complete", "Semicolon is the main sequence point", "Modifying a variable twice between points is Undefined Behavior"],
      example: "int i = 5;\ni = i++; // Undefined behavior (no sequence point)",
      followUpQuestions: ["Is the comma in a function argument list `foo(a, b)` a sequence point?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Use `i = i++` as the classic example of violating sequence point rules."
  },
  {
    id: "emb-c-33",
    topicId: "programming",
    title: "How do you allocate a 2D array dynamically in C?",
    answer: {
      shortAnswer: "You allocate an array of row pointers, and then allocate an array of elements for each row pointer.",
      detailedExplanation: "To create an array of size M x N, you first use `malloc` to create an array of `M` pointers (size `M * sizeof(int*)`). Then, you loop `M` times, using `malloc` for each pointer to allocate `N` elements (size `N * sizeof(int)`). To free it, you must loop through and free each row first, then free the array of pointers.",
      interviewExplanation: "I first allocate an array of pointers to hold the rows. Then, I iterate through that array, allocating the actual data columns for each row pointer. It's a two-step process. Freeing it requires the reverse order to avoid memory leaks.",
      keyPoints: ["Array of pointers (rows)", "Array of data (columns)", "Requires loop to allocate and free"],
      example: "int **arr = malloc(rows * sizeof(int *));\nfor (int i=0; i<rows; i++)\n  arr[i] = malloc(cols * sizeof(int));",
      followUpQuestions: ["How can you dynamically allocate a 2D array using a single contiguous block of memory?"]
    },
    difficulty: "Intermediate",
    badges: ["Coding"],
    interviewTip: "Be prepared to write both the allocation and the `free()` loop on the board."
  },
  {
    id: "emb-c-34",
    topicId: "programming",
    title: "What does the `weak` attribute (`__attribute__((weak))`) do?",
    answer: {
      shortAnswer: "It defines a function or variable as a 'weak' symbol. If the linker finds a 'strong' symbol with the same name, it overrides the weak one without throwing a duplicate definition error.",
      detailedExplanation: "This is heavily used in embedded hardware abstraction layers (HALs). The manufacturer provides default Interrupt Service Routines (ISRs) declared as weak. If you, the application developer, write an ISR with the exact same name, your function automatically overrides the default one. It's a clean way to provide default dummy handlers.",
      interviewExplanation: "The weak attribute tells the linker to allow this function to be overridden. If I don't write my own version of the function, the linker uses the weak default. If I write my own strong version, the linker drops the weak one. It's how default ISRs are implemented in libraries like STM32 HAL.",
      keyPoints: ["Linker directive", "Allows function overriding", "Used for default ISR handlers", "Prevents duplicate symbol errors"],
      example: "__attribute__((weak)) void UART_ISR(void) { /* Dummy */ }",
      followUpQuestions: ["What happens if two strong symbols have the same name?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Connect this specifically to default microcontroller interrupt vector tables."
  },
  {
    id: "emb-c-35",
    topicId: "programming",
    title: "Difference between array of pointers and pointer to an array.",
    answer: {
      shortAnswer: "An array of pointers stores multiple memory addresses. A pointer to an array stores a single address pointing to an entire array block.",
      detailedExplanation: "1. `int *arr[5];` - Array of 5 pointers. Each element can point to a different integer or array. Useful for string arrays (`char *strings[]`).\n2. `int (*ptr)[5];` - A single pointer pointing to an array of 5 integers. Incrementing this pointer (`ptr++`) moves the address by `5 * sizeof(int)` bytes. Useful for passing 2D arrays to functions.",
      interviewExplanation: "An array of pointers is literally an array where every element is a pointer. A pointer to an array is just one pointer, but it 'knows' the size of the array it points to. So pointer arithmetic moves it across entire arrays at a time.",
      keyPoints: ["`*arr[5]`: Array containing 5 pointers", "`(*ptr)[5]`: Single pointer to a 5-element array", "Parentheses matter due to operator precedence"],
      example: "int *arr[5]; // Array of pointers\nint (*ptr)[5]; // Pointer to an array",
      followUpQuestions: ["How does operator precedence affect `*arr[5]` vs `(*ptr)[5]`?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Explain that `[]` has higher precedence than `*`, which is why parentheses are required for the pointer to an array."
  },
  {
    id: "emb-c-36",
    topicId: "programming",
    title: "What is Memory Mapped I/O?",
    answer: {
      shortAnswer: "Memory Mapped I/O maps hardware peripheral registers into the same address space as RAM, allowing them to be accessed using standard C pointers.",
      detailedExplanation: "In many microcontrollers (like ARM), the CPU communicates with peripherals (GPIO, UART, Timers) by reading and writing to specific memory addresses. The CPU doesn't know it's talking to hardware; it just writes to an address. In C, we define pointers to these specific absolute addresses and use the `volatile` keyword to interact with the hardware.",
      interviewExplanation: "Memory mapped I/O means hardware registers share the same address bus as memory. To toggle an LED, I don't use special CPU instructions. I just cast a specific hex address to a volatile pointer and write a 1 or 0 to it, exactly as if I were writing to a normal variable in RAM.",
      keyPoints: ["Hardware registers mapped to memory addresses", "Accessed via standard pointers", "Requires `volatile` keyword", "No special I/O instructions needed"],
      example: "#define GPIOA_ODR (*((volatile uint32_t*)0x40020014))\nGPIOA_ODR |= (1 << 5); // Turn on LED",
      followUpQuestions: ["What is Port Mapped I/O (like in x86 architectures)?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "Write the standard `#define` macro for memory mapped registers to show you know how to do it practically."
  },
  {
    id: "emb-c-37",
    topicId: "programming",
    title: "How do you count the number of set bits in an integer?",
    answer: {
      shortAnswer: "The fastest method is Brian Kernighan’s algorithm, which uses the operation `n & (n - 1)` to clear the lowest set bit in a loop.",
      detailedExplanation: "While you could shift and check every bit 32 times, Kernighan's algorithm is much faster. The expression `n & (n - 1)` always flips the least significant set bit to 0. You put this in a loop and count how many times it executes before the number becomes 0. It only loops exactly as many times as there are set bits.",
      interviewExplanation: "I would use Kernighan's algorithm. By repeatedly performing `n = n & (n - 1)`, I turn off the rightmost set bit one at a time. I keep a counter and stop when `n` reaches 0. This is highly efficient because it skips all the zero bits.",
      keyPoints: ["Kernighan's algorithm: `n & (n - 1)`", "Clears lowest set bit", "Time complexity depends only on number of set bits"],
      example: "int count = 0;\nwhile (n) {\n  n = n & (n - 1);\n  count++;\n}\nreturn count;",
      followUpQuestions: ["How would you check if a number is a power of 2 using a single line of code?"]
    },
    difficulty: "Intermediate",
    badges: ["Coding", "Frequently Asked"],
    interviewTip: "Memorize `n & (n - 1)`. It solves multiple interview questions, including checking for powers of 2."
  },
  {
    id: "emb-c-38",
    topicId: "programming",
    title: "What is a Null pointer vs an Uninitialized pointer?",
    answer: {
      shortAnswer: "A Null pointer points specifically to memory address 0, signifying it points to nothing. An uninitialized pointer points to a random garbage memory address.",
      detailedExplanation: "An uninitialized pointer is a local variable that hasn't been assigned a value; it holds whatever garbage data was previously on the stack. Dereferencing it will likely cause a hard fault. \nA Null pointer (`ptr = NULL`) is explicitly set to address 0. It is a standard practice because you can safely check `if (ptr != NULL)` before dereferencing it.",
      interviewExplanation: "An uninitialized pointer is dangerous because it points to random memory. A Null pointer safely points to address zero. I always initialize my pointers to NULL so I can safely use `if(ptr)` checks to ensure they are valid before I try to read from them.",
      keyPoints: ["Null: Points to 0 (defined)", "Uninitialized: Points to garbage (undefined)", "Initialize pointers to NULL for safety", "Can check NULL in if-statements"],
      example: "int *bad_ptr; // Uninitialized garbage\nint *good_ptr = NULL; // Safe Null pointer",
      followUpQuestions: ["What happens if you dereference a NULL pointer in a bare-metal embedded system?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mention that in Linux, dereferencing NULL causes a Segmentation Fault. In bare-metal, it might actually read vector table data at address 0x00000000."
  },
  {
    id: "emb-c-39",
    topicId: "programming",
    title: "How do you swap two variables without using a third temporary variable?",
    answer: {
      shortAnswer: "You can use bitwise XOR (`^`) or arithmetic addition/subtraction.",
      detailedExplanation: "XOR Swap: `A ^= B; B ^= A; A ^= B;` This works because XORing a number with itself results in 0, and XORing with 0 returns the number. \nArithmetic Swap: `A = A + B; B = A - B; A = A - B;` This works mathematically, but carries a risk of integer overflow if A and B are very large.",
      interviewExplanation: "I can swap them using bitwise XOR. `a ^= b; b ^= a; a ^= b;`. This is fast and avoids integer overflow. I could also use addition and subtraction, but that risks overflow. Honestly, in production code, using a temporary variable is preferred because the compiler optimizes it into registers anyway, making it more readable.",
      keyPoints: ["XOR method: `A^=B; B^=A; A^=B;`", "Addition method: `A=A+B; B=A-B; A=A-B;`", "XOR prevents integer overflow", "Temp variable is still best for readability"],
      example: "a ^= b;\nb ^= a;\na ^= b;",
      followUpQuestions: ["Why might swapping without a temp variable be slower on modern CPUs?"]
    },
    difficulty: "Beginner",
    badges: ["Coding"],
    interviewTip: "Show you know the trick, but explicitly state that a `temp` variable is better for readability and modern compilers optimize it perfectly."
  },
  {
    id: "emb-c-40",
    topicId: "programming",
    title: "What is a memory leak, and how does it happen in C?",
    answer: {
      shortAnswer: "A memory leak occurs when dynamically allocated memory is no longer needed but is not released back to the system using `free()`.",
      detailedExplanation: "When you call `malloc()`, memory is reserved on the heap. If you lose the pointer to that memory (e.g., the pointer goes out of scope, or you reassign the pointer to a new address) before calling `free()`, that memory remains marked as 'in use'. Over time, repeated leaks will consume all available heap memory, causing subsequent `malloc()` calls to fail and crashing the application.",
      interviewExplanation: "A memory leak happens when you allocate memory on the heap with `malloc` but forget to `free` it. The memory stays locked forever. In long-running embedded systems, even a tiny leak in a loop will eventually eat the whole heap and crash the system.",
      keyPoints: ["Allocated memory is never freed", "Heap space is slowly exhausted", "System eventually crashes on `malloc` failure", "Avoided by strict memory management or static allocation"],
      example: "void leak() {\n  char *ptr = malloc(100);\n  // Function ends, ptr goes out of scope, memory is leaked\n}",
      followUpQuestions: ["How can you detect memory leaks? (Answer: Valgrind, static analysis, overriding malloc/free)"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Reiterate that the best way to handle memory leaks in embedded systems is to statically allocate everything and avoid dynamic memory entirely."
  }
];
