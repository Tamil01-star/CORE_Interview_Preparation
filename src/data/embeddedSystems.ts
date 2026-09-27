import type { Question } from '../types';

export const embeddedSystemsQuestions: Question[] = [
  {
    id: "embedded-1",
    topicId: "embedded-systems",
    title: "What is an embedded system?",
    answer: {
      shortAnswer: "An embedded system is a microprocessor- or microcontroller-based system of hardware and software designed to perform dedicated functions within a larger mechanical or electrical system.",
      detailedExplanation: "Unlike general-purpose computers, embedded systems are engineered to manage specific tasks, often with real-time computing constraints. They are embedded as part of a complete device often including hardware and mechanical parts. Examples include digital watches, MP3 players, traffic lights, factory controllers, and systems controlling nuclear power plants.",
      interviewExplanation: "I would define an embedded system as a specialized computing system that performs a dedicated function within a larger mechanical or electrical system. It typically consists of a microcontroller or microprocessor, memory, and input/output peripherals, all optimized for reliability, size, and power consumption for a specific task.",
      keyPoints: ["Dedicated function", "Combination of hardware and software", "Real-time constraints", "Optimized for size, power, and cost"],
      example: "The anti-lock braking system (ABS) in a car is an embedded system dedicated specifically to preventing wheel lockup.",
      followUpQuestions: ["Can you give an example of an embedded system with hard real-time constraints?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always contrast embedded systems with general-purpose computers (like PCs) to highlight their dedicated nature."
  },
  {
    id: "embedded-2",
    topicId: "embedded-systems",
    title: "What is the difference between a Microprocessor and a Microcontroller?",
    answer: {
      shortAnswer: "A microprocessor is a central processing unit on a single integrated circuit, requiring external memory and peripherals. A microcontroller integrates a CPU, memory, and peripherals on a single chip.",
      detailedExplanation: "Microprocessors (like Intel Core i7) are versatile and powerful, designed for general-purpose computing where intensive processing is required. They rely on external RAM, ROM, and I/O ports. Microcontrollers (like ATmega328) are designed for specific control applications, containing the CPU along with fixed amounts of RAM, ROM/Flash, and peripherals (timers, serial ports, ADCs) embedded on the same silicon chip.",
      interviewExplanation: "A microprocessor contains just the CPU and relies on external memory and peripherals, making it suitable for complex, general-purpose tasks. In contrast, a microcontroller is a 'computer on a chip' that includes the CPU, memory, and I/O peripherals internally, making it ideal for compact, dedicated embedded applications.",
      keyPoints: ["Microprocessor: CPU only, external peripherals", "Microcontroller: CPU + Memory + Peripherals on one chip", "Microcontrollers are cheaper and consume less power", "Microprocessors have higher processing power"],
      example: "A Raspberry Pi uses a microprocessor, while an Arduino Uno uses a microcontroller.",
      followUpQuestions: ["When would you choose a microprocessor over a microcontroller for an embedded project?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Draw a simple block diagram mentally to explain the components inside a microcontroller vs a microprocessor system."
  },
  {
    id: "embedded-3",
    topicId: "embedded-systems",
    title: "Explain the difference between Harvard and Von Neumann architectures.",
    answer: {
      shortAnswer: "Von Neumann architecture uses a single memory space and bus for both data and instructions. Harvard architecture has physically separate memory spaces and buses for instructions and data.",
      detailedExplanation: "In a Von Neumann architecture, fetching an instruction and a data operation cannot occur simultaneously because they share a common bus, leading to the 'Von Neumann bottleneck'. Harvard architecture solves this by providing separate memory modules and buses, allowing simultaneous instruction fetch and data access, which speeds up execution but requires more hardware complexity.",
      interviewExplanation: "The primary distinction lies in memory organization. Von Neumann architecture shares a single memory and bus for both instructions and data, meaning they must be fetched sequentially. Harvard architecture features separate memories and buses for instructions and data, enabling parallel fetching and faster execution execution, commonly used in DSPs and modern microcontrollers.",
      keyPoints: ["Von Neumann: Shared memory and bus", "Harvard: Separate memory and buses", "Harvard allows simultaneous data and instruction fetch", "Harvard is faster but requires more hardware"],
      followUpQuestions: ["What is Modified Harvard architecture?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mention that most modern high-performance microcontrollers (like ARM Cortex-M) use a Modified Harvard architecture."
  },
  {
    id: "embedded-4",
    topicId: "embedded-systems",
    title: "What is the difference between RISC and CISC?",
    answer: {
      shortAnswer: "RISC (Reduced Instruction Set Computer) uses simple, single-cycle instructions, while CISC (Complex Instruction Set Computer) uses complex, multi-clock instructions that can perform multiple operations.",
      detailedExplanation: "RISC emphasizes software efficiency by executing simpler, highly optimized instructions, mostly in a single clock cycle. It relies on a large number of registers and a load/store architecture. CISC emphasizes hardware efficiency by providing a large set of complex instructions, where a single instruction can perform multiple low-level operations (like memory access and arithmetic) over multiple cycles, reducing code size.",
      interviewExplanation: "RISC architecture utilizes a small, highly optimized set of instructions that execute in a single clock cycle, focusing on hardware simplicity and relying on the compiler to handle complex operations. CISC uses a broader set of complex instructions that may take multiple cycles to execute, focusing on minimizing code size and making the hardware do more work per instruction.",
      keyPoints: ["RISC: Simple instructions, single cycle, Load/Store architecture", "CISC: Complex instructions, multi-cycle, direct memory operations", "RISC generally requires more RAM", "ARM is RISC, x86 is CISC"],
      followUpQuestions: ["Why do embedded systems heavily favor RISC architectures like ARM?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Highlight that ARM processors, the most common in embedded systems, are based on RISC architecture."
  },
  {
    id: "embedded-5",
    topicId: "embedded-systems",
    title: "What is an Interrupt in a microcontroller?",
    answer: {
      shortAnswer: "An interrupt is a signal sent to the CPU that halts its current execution to immediately handle a higher-priority event using an Interrupt Service Routine (ISR).",
      detailedExplanation: "Interrupts allow a microcontroller to respond to asynchronous events without constantly checking for them (polling). When an interrupt occurs, the CPU saves its current state (context), jumps to the vector address of the ISR, executes the routine, and then restores the context to resume the interrupted program. They can be triggered by external hardware or internal peripherals like timers.",
      interviewExplanation: "An interrupt is a mechanism that allows the hardware or software to signal the CPU that an event needs immediate attention. Upon receiving the interrupt, the CPU pauses its main execution thread, saves its state, and executes a specific function called the Interrupt Service Routine. Once the ISR completes, the CPU resumes its previous task.",
      keyPoints: ["Halts main execution thread", "Executes Interrupt Service Routine (ISR)", "Saves and restores CPU context", "Can be internal or external"],
      example: "A push button connected to an external interrupt pin triggering an LED toggle.",
      followUpQuestions: ["What happens if two interrupts occur at the exact same time?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Emphasize that ISRs should be kept as short and fast as possible."
  },
  {
    id: "embedded-6",
    topicId: "embedded-systems",
    title: "Compare Polling and Interrupts.",
    answer: {
      shortAnswer: "Polling actively checks the status of a device in a loop, wasting CPU cycles. Interrupts allow the CPU to do other work and only handle the device when signaled.",
      detailedExplanation: "In polling, the CPU repeatedly checks a peripheral's status register to see if an event has occurred. This is simple to implement but highly inefficient as it consumes 100% of the CPU's attention. Interrupt-driven systems configure the peripheral to send a hardware signal to the CPU when the event occurs, allowing the CPU to sleep or perform other tasks in the meantime.",
      interviewExplanation: "Polling involves the CPU continuously checking a flag or register to detect an event, which wastes CPU time and power. Interrupts, on the other hand, notify the CPU asynchronously when an event happens, freeing the CPU to execute other code or enter a low-power state. I prefer interrupts for asynchronous or infrequent events to optimize system efficiency.",
      keyPoints: ["Polling is synchronous and blocking", "Interrupts are asynchronous", "Interrupts save CPU cycles and power", "Polling is simpler but inefficient"],
      followUpQuestions: ["When might polling be preferred over interrupts?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mention that polling can sometimes be preferable if the event occurs very frequently and interrupt overhead would be too high."
  },
  {
    id: "embedded-7",
    topicId: "embedded-systems",
    title: "What is Interrupt Latency and how can it be reduced?",
    answer: {
      shortAnswer: "Interrupt latency is the time delay between the generation of an interrupt request and the execution of the first instruction of the ISR.",
      detailedExplanation: "Latency is caused by hardware factors (like finishing the current instruction, pushing context to the stack, fetching the vector address) and software factors (like disabled interrupts, other higher priority ISRs currently executing, or long context saving). It can be reduced by keeping ISRs short, enabling nested interrupts, and using efficient context-switching hardware.",
      interviewExplanation: "Interrupt latency is the time elapsed from when an interrupt is triggered to when the CPU actually starts executing the corresponding Interrupt Service Routine. To reduce it, I ensure ISRs are very short, avoid disabling global interrupts for long periods in the main code, prioritize critical interrupts, and leverage features like shadow registers if the architecture supports them.",
      keyPoints: ["Time from trigger to ISR execution", "Caused by context saving and completing current instruction", "Reduce by keeping ISRs short", "Reduce by managing interrupt priorities carefully"],
      followUpQuestions: ["What are shadow registers and how do they reduce latency?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Numerical"],
    interviewTip: "Discuss hardware architecture specifics, like ARM Cortex-M's NVIC, which handles context saving in hardware to minimize latency."
  },
  {
    id: "embedded-8",
    topicId: "embedded-systems",
    title: "What is a Watchdog Timer (WDT)?",
    answer: {
      shortAnswer: "A watchdog timer is a hardware timer that automatically resets the microcontroller if the software fails to clear it within a specific timeframe.",
      detailedExplanation: "The WDT is used to recover a system from software anomalies like infinite loops, deadlocks, or crashes. The software must periodically 'kick' or 'feed' the watchdog to reset its counter before it overflows. If the software hangs, the WDT will overflow and issue a hardware reset to restart the system, ensuring reliability in unattended environments.",
      interviewExplanation: "A Watchdog Timer is a crucial safety mechanism in embedded systems. It's an independent hardware timer that counts down continuously. My software is responsible for 'feeding' the watchdog by resetting it periodically. If the software crashes or gets stuck in a loop, it won't feed the watchdog, which will eventually time out and trigger a system reset to recover the device.",
      keyPoints: ["Hardware timer", "Recovers system from crashes or infinite loops", "Software must periodically 'kick' or 'feed' it", "Essential for safety-critical and unattended systems"],
      followUpQuestions: ["What is a Windowed Watchdog Timer?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important", "Practical"],
    interviewTip: "Never 'feed' the watchdog inside an ISR, as the main loop could be stuck while interrupts are still firing."
  },
  {
    id: "embedded-9",
    topicId: "embedded-systems",
    title: "Explain DMA (Direct Memory Access).",
    answer: {
      shortAnswer: "DMA is a hardware feature that allows peripherals to transfer data directly to or from memory without CPU intervention.",
      detailedExplanation: "The DMA controller takes over the memory bus and handles data transfers between peripherals (like an ADC, UART, or SPI) and RAM. This offloads the heavy lifting from the CPU, allowing it to perform other tasks or enter sleep mode while high-speed or large-volume data transfers occur.",
      interviewExplanation: "Direct Memory Access is a mechanism that permits hardware subsystems to access main system memory independently of the central processing unit. When I need to transfer large buffers of data, say from an ADC to memory, I configure the DMA controller to handle it. This frees up the CPU to process other data or sleep, vastly improving system throughput and power efficiency.",
      keyPoints: ["Transfers data without CPU involvement", "Frees up CPU cycles", "Used for high-speed data transfer (ADC, SPI, UART)", "Improves overall system throughput"],
      example: "Transferring an audio buffer from an I2S peripheral to RAM without raising an interrupt for every single sample.",
      followUpQuestions: ["What is cycle stealing in DMA?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Mention the importance of cache coherency when using DMA in systems with CPU caches."
  },
  {
    id: "embedded-10",
    topicId: "embedded-systems",
    title: "What is PWM (Pulse Width Modulation)?",
    answer: {
      shortAnswer: "PWM is a technique for getting analog results with digital means by varying the width of the digital signal's high pulse within a fixed period.",
      detailedExplanation: "In PWM, a digital square wave is generated where the ratio of the 'ON' time to the total period is varied. This ratio is called the duty cycle. The average voltage delivered to the load is proportional to the duty cycle. It is widely used for motor speed control, LED dimming, and generating analog voltages when passed through a low-pass filter.",
      interviewExplanation: "Pulse Width Modulation is a digital technique used to simulate a continuous analog signal. It works by toggling a digital pin high and low at a fixed frequency and varying the duty cycle—the percentage of time the signal is high. For example, a 50% duty cycle on a 5V signal will appear as an average of 2.5V to an LED or motor.",
      keyPoints: ["Digital control simulating analog output", "Duty cycle = (On time / Total Period) * 100", "Used for motor control, LED dimming, audio generation", "Highly efficient compared to linear voltage regulation"],
      example: "Dimming an LED by setting a PWM duty cycle from 0% (off) to 100% (full brightness).",
      followUpQuestions: ["How does the PWM frequency affect the load?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Practical"],
    interviewTip: "Be ready to explain how to calculate the average voltage of a PWM signal given the peak voltage and duty cycle."
  },
  {
    id: "embedded-11",
    topicId: "embedded-systems",
    title: "What is UART, and how is it different from USART?",
    answer: {
      shortAnswer: "UART is an asynchronous serial communication protocol. USART supports both asynchronous (like UART) and synchronous serial communication using an added clock line.",
      detailedExplanation: "Universal Asynchronous Receiver-Transmitter (UART) uses two wires (TX, RX) and requires devices to agree on a baud rate beforehand, as there is no shared clock. It relies on start and stop bits to frame data. Universal Synchronous/Asynchronous Receiver-Transmitter (USART) adds a clock line for synchronous communication, allowing higher data rates and eliminating the need for strict baud rate matching.",
      interviewExplanation: "UART is a purely asynchronous serial protocol requiring only TX and RX lines. Since there's no clock, both ends must strictly agree on the baud rate and frame structure. USART extends UART by adding a synchronous mode with a dedicated clock line. This clock synchronizes the sender and receiver, which allows for faster, more reliable data transfer without the overhead of start and stop bits.",
      keyPoints: ["UART: Asynchronous, TX/RX only, needs pre-agreed baud rate", "USART: Can be synchronous, includes a clock line", "Synchronous mode allows higher data rates", "UART uses start, stop, and parity bits"],
      followUpQuestions: ["What are start bits, stop bits, and parity in UART?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Understand that RS-232, RS-485, and USB-to-TTL are physical layer standards that often carry UART data."
  },
  {
    id: "embedded-12",
    topicId: "embedded-systems",
    title: "Explain the SPI (Serial Peripheral Interface) protocol.",
    answer: {
      shortAnswer: "SPI is a synchronous, full-duplex serial communication protocol that uses a master-slave architecture with typically four wires: SCK, MOSI, MISO, and SS/CS.",
      detailedExplanation: "SPI uses a dedicated clock line (SCK) generated by the master to synchronize data transfer. MOSI (Master Out Slave In) and MISO (Master In Slave Out) allow simultaneous bidirectional communication (full-duplex). The master selects which slave to communicate with using individual Slave Select (SS) lines. It supports very high data rates but requires more pins as the number of slaves increases.",
      interviewExplanation: "SPI is a synchronous serial protocol utilizing a master-slave configuration. It operates full-duplex, meaning data is sent and received simultaneously over the MOSI and MISO lines, synchronized by the master's clock on the SCK line. To address multiple slaves, the master uses individual Chip Select lines. It's incredibly fast, making it ideal for SD cards or LCD displays, but it's typically suited for short distances on the same PCB.",
      keyPoints: ["Synchronous, full-duplex", "Four wires: SCK, MOSI, MISO, CS/SS", "Master-slave architecture", "High speed, no specific addressing mechanism (uses hardware CS pins)"],
      followUpQuestions: ["What are SPI clock polarity (CPOL) and clock phase (CPHA)?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Make sure you can clearly explain CPOL (Clock Polarity) and CPHA (Clock Phase), also known as SPI Modes 0-3."
  },
  {
    id: "embedded-13",
    topicId: "embedded-systems",
    title: "Explain the I2C (Inter-Integrated Circuit) protocol.",
    answer: {
      shortAnswer: "I2C is a synchronous, half-duplex, two-wire serial bus consisting of a data line (SDA) and a clock line (SCL), using a master-slave architecture with software addressing.",
      detailedExplanation: "I2C requires only two pins and pull-up resistors, making it hardware efficient for multiple devices. The master generates the clock and initiates communication by sending the 7-bit or 10-bit address of the target slave over the SDA line. It is half-duplex, meaning data travels in one direction at a time. It also features acknowledgment bits (ACK/NACK) to verify data reception.",
      interviewExplanation: "I2C is a multi-master, multi-slave, two-wire synchronous protocol. It uses SDA for data and SCL for the clock. Because it uses addressing to select slaves, you can connect dozens of devices on the same two wires without needing extra chip-select pins. While it requires pull-up resistors and is slower and half-duplex compared to SPI, it is extremely pin-efficient and widely used for sensors and EEPROMs.",
      keyPoints: ["Synchronous, half-duplex", "Two wires: SDA, SCL", "Multi-master, multi-slave capability", "Uses addressing (7-bit or 10-bit)", "Requires pull-up resistors"],
      followUpQuestions: ["What is clock stretching in I2C?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Understand the open-drain nature of I2C pins and why pull-up resistors are absolutely necessary."
  },
  {
    id: "embedded-14",
    topicId: "embedded-systems",
    title: "Compare SPI and I2C protocols.",
    answer: {
      shortAnswer: "SPI is faster, full-duplex, and uses 4+ wires with hardware chip selects. I2C is slower, half-duplex, and uses exactly 2 wires with software addressing.",
      detailedExplanation: "SPI offers high-speed, simultaneous bidirectional data transfer but requires more GPIO pins (1 extra CS pin per slave). It has no built-in acknowledgment. I2C minimizes pin usage by sharing a 2-wire bus, using device addresses for selection and ACKs for reliability, but it is half-duplex and significantly slower than SPI. Furthermore, I2C supports multi-master topologies natively, whereas SPI does not.",
      interviewExplanation: "The choice between SPI and I2C depends on speed and pin constraints. I use SPI for high-speed components like displays, ADCs, or SD cards because it's full-duplex and supports very high clock rates. However, if I am pin-constrained and need to connect multiple slow sensors (like temperature sensors or RTCs), I use I2C because it only requires two lines regardless of the number of slaves, utilizing addresses instead of hardware select pins.",
      keyPoints: ["Speed: SPI is much faster than I2C", "Wires: SPI requires 3 + N wires, I2C strictly 2", "Duplex: SPI is full-duplex, I2C is half-duplex", "Reliability: I2C has built-in ACK/NACK, SPI does not"],
      followUpQuestions: ["Which protocol consumes more power and why?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Be ready to recommend which protocol to use for a given peripheral (e.g., use SPI for an LCD display, I2C for an EEPROM)."
  },
  {
    id: "embedded-15",
    topicId: "embedded-systems",
    title: "What is the CAN (Controller Area Network) bus?",
    answer: {
      shortAnswer: "CAN is a robust, multi-master vehicle bus standard designed to allow microcontrollers and devices to communicate with each other's applications without a host computer.",
      detailedExplanation: "CAN is heavily used in automotive and industrial environments due to its high immunity to electrical interference. It uses differential signaling over a twisted pair of wires (CAN_H, CAN_L). It operates on a broadcast architecture where messages have an ID that denotes priority. If two nodes transmit simultaneously, a non-destructive bitwise arbitration process ensures the message with the higher priority (lower ID) gets through.",
      interviewExplanation: "CAN is a rugged, differential two-wire protocol designed primarily for automotive applications. It's a multi-master network where any node can transmit. Its strongest feature is its bitwise arbitration: if two devices try to talk at once, the message with the dominant bits (lower ID value) automatically wins without corrupting the message. It also features robust built-in hardware error detection and handling.",
      keyPoints: ["Differential signaling for high noise immunity", "Multi-master broadcast architecture", "Non-destructive bitwise arbitration for priority", "Standard in automotive and heavy industry"],
      followUpQuestions: ["How does CAN arbitration work specifically (dominant vs. recessive bits)?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Understand the concepts of Dominant (Logic 0) and Recessive (Logic 1) bits in CAN arbitration."
  },
  {
    id: "embedded-16",
    topicId: "embedded-systems",
    title: "What is a Bootloader?",
    answer: {
      shortAnswer: "A bootloader is a small piece of code that runs immediately upon microcontroller startup, responsible for updating the main application firmware and launching it.",
      detailedExplanation: "Before the main application runs, the bootloader initializes basic hardware (like clocks and communication ports). It then checks if a new firmware update is available (via UART, USB, Ethernet, or OTA). If an update exists, it erases the old application in flash memory, writes the new one, and then jumps to the application's start address. The Arduino bootloader over UART is a classic example.",
      interviewExplanation: "A bootloader is the first code that executes when a device powers on. Its primary role is to provide a mechanism for updating the device's firmware without needing a dedicated hardware programmer like JTAG. It initializes communication interfaces, checks for an update payload, writes it to flash memory if present, and finally vectors the program counter to the start of the main user application.",
      keyPoints: ["Runs before the main application", "Allows in-field firmware updates (OTA, USB, UART)", "Resides in a protected sector of Flash memory", "Jumps to application code upon completion"],
      followUpQuestions: ["What happens if power is lost during a bootloader firmware update?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Conceptual"],
    interviewTip: "Mention the concept of A/B banking or dual-bank flash for safe, failsafe Over-The-Air (OTA) updates."
  },
  {
    id: "embedded-17",
    topicId: "embedded-systems",
    title: "What is an RTOS (Real-Time Operating System)?",
    answer: {
      shortAnswer: "An RTOS is an operating system optimized for embedded systems that guarantees a certain capability within a specified time constraint (determinism).",
      detailedExplanation: "Unlike General Purpose OSs (like Windows or Linux) which prioritize overall system throughput and fairness, an RTOS prioritizes predictability and strict timing constraints. It uses a preemptive priority-based scheduler to ensure that the highest priority ready task always runs immediately, making it suitable for time-critical applications like pacemakers or flight controllers.",
      interviewExplanation: "An RTOS is an operating system designed specifically to handle real-time applications. The key feature of an RTOS isn't necessarily speed, but determinism—the ability to guarantee that critical tasks will execute within strict, predictable deadlines. It provides services like task scheduling, inter-task communication (queues), and synchronization (mutexes, semaphores) to manage complex embedded software architectures.",
      keyPoints: ["Determinism and predictability", "Preemptive priority-based scheduling", "Provides multi-tasking and IPC mechanisms", "Examples: FreeRTOS, VxWorks, Zephyr"],
      followUpQuestions: ["When would you choose to use bare-metal vs an RTOS?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Emphasize that 'Real-Time' means 'deterministic and predictable', not just 'fast'."
  },
  {
    id: "embedded-18",
    topicId: "embedded-systems",
    title: "Differentiate between Hard Real-Time and Soft Real-Time systems.",
    answer: {
      shortAnswer: "In a hard real-time system, missing a deadline results in a total system failure. In a soft real-time system, missing a deadline degrades performance but is not fatal.",
      detailedExplanation: "Hard real-time systems have absolute constraints. For example, an airbag deployment system must fire within milliseconds of a crash; a delay is catastrophic. Soft real-time systems aim to meet deadlines, but occasional misses are tolerable. For example, a video streaming device dropping a frame causes a slight visual glitch but the system continues to function.",
      interviewExplanation: "The difference lies in the consequences of missing a time deadline. A hard real-time system considers a missed deadline as a total system failure, which could result in loss of life or property, like in automotive braking systems. A soft real-time system tolerates occasional missed deadlines, which only results in degraded user experience, such as a slight lag in a smart TV's UI.",
      keyPoints: ["Hard Real-time: Missed deadline = System failure (e.g., Pacemaker)", "Soft Real-time: Missed deadline = Degraded performance (e.g., Audio playback)", "Firm Real-time: Missed deadline = Data is useless, but not catastrophic"],
      followUpQuestions: ["Can you name a firm real-time system?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Always use clear examples (airbag vs video streaming) to illustrate this concept."
  },
  {
    id: "embedded-19",
    topicId: "embedded-systems",
    title: "What is a Task (or Thread) in an RTOS?",
    answer: {
      shortAnswer: "A task is an independent thread of execution competing for CPU time, conceptually acting as a mini-program within the RTOS.",
      detailedExplanation: "Each task has its own context, including a Program Counter, CPU registers, and its own private stack space. The RTOS scheduler rapidly switches the CPU context between different tasks, creating the illusion that multiple tasks are running concurrently (multitasking). Tasks are typically implemented as infinite loops.",
      interviewExplanation: "In an RTOS, a task is a fundamental unit of execution. It is an independent C function, usually structured as an infinite loop. The RTOS scheduler allocates CPU time to these tasks based on priority. Because each task has its own stack and context, the scheduler can preempt a low-priority task, save its state, and run a high-priority task, returning exactly where it left off later.",
      keyPoints: ["Independent unit of execution", "Has its own stack and context", "Usually implemented as an infinite loop", "Scheduled by the RTOS kernel based on priority"],
      followUpQuestions: ["What is Context Switching?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mention that every task requires dedicated RAM for its stack, which is a limiting factor in small microcontrollers."
  },
  {
    id: "embedded-20",
    topicId: "embedded-systems",
    title: "What is a Mutex in RTOS?",
    answer: {
      shortAnswer: "A Mutex (Mutual Exclusion) is an RTOS object used to protect shared resources from concurrent access by multiple tasks.",
      detailedExplanation: "When multiple tasks try to access a shared resource (like a UART port or a global variable), data corruption can occur. A mutex acts as a token. A task must 'take' the mutex before accessing the resource and 'give' it back when done. If another task tries to take a locked mutex, it is blocked (put to sleep) until the mutex is available.",
      interviewExplanation: "A mutex is a synchronization mechanism used to prevent data race conditions when multiple tasks need access to the same shared resource. Think of it as a key to a bathroom. To use the shared resource, a task must acquire the mutex key. While it has the key, other tasks wanting the resource are blocked by the OS. Once finished, the task releases the key, allowing another task to proceed.",
      keyPoints: ["Protects shared resources/critical sections", "Concept of 'ownership' (the task that takes it must release it)", "Blocks other tasks attempting access", "Prevents race conditions"],
      followUpQuestions: ["What happens if a task takes a mutex and then crashes before releasing it?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Distinguish a Mutex from a basic flag by explaining that a Mutex is an OS-level primitive that blocks tasks efficiently rather than wasting CPU cycles polling a flag."
  },
  {
    id: "embedded-21",
    topicId: "embedded-systems",
    title: "What is the difference between a Mutex and a Semaphore?",
    answer: {
      shortAnswer: "A mutex is used for resource protection (locking) and has ownership, whereas a semaphore is used for signaling between tasks/ISRs and has no ownership.",
      detailedExplanation: "A Mutex (binary) is used for mutual exclusion. The task that acquires the mutex must be the one to release it (ownership). A Semaphore (binary or counting) is a signaling mechanism. For example, an ISR can 'give' a semaphore to wake up a task waiting ('taking') on it. The task that 'takes' the semaphore is not the one that 'gave' it.",
      interviewExplanation: "While they often look similar in code, their purposes differ fundamentally. I use a Mutex for protecting shared resources; it acts as a lock and includes the concept of 'ownership'—the task that locks it must unlock it. I use a Semaphore for signaling or synchronization. For instance, an interrupt routine can 'give' a semaphore to unblock a task, signaling that new data has arrived. Semaphores do not track ownership.",
      keyPoints: ["Mutex: Resource protection, has ownership", "Semaphore: Task signaling/synchronization, no ownership", "Priority inheritance is usually available on Mutexes, not Semaphores", "ISRs can 'give' a semaphore, but should never use a Mutex"],
      followUpQuestions: ["Can an Interrupt Service Routine (ISR) take a Mutex?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "This is a classic question. The keyword to use is 'Ownership'. Mutex = locking/ownership. Semaphore = signaling."
  },
  {
    id: "embedded-22",
    topicId: "embedded-systems",
    title: "What is Priority Inversion?",
    answer: {
      shortAnswer: "Priority inversion is a scenario in scheduling where a high-priority task is indirectly preempted by a lower-priority task, effectively inverting their assigned priorities.",
      detailedExplanation: "This occurs when a Low priority task acquires a mutex on a shared resource. A High priority task then needs that resource and blocks waiting for the mutex. Meanwhile, a Medium priority task preempts the Low priority task (since Medium > Low). Now, the High priority task is waiting on the Low priority task, which is being starved by the Medium priority task. The Medium task is effectively delaying the High task.",
      interviewExplanation: "Priority inversion is a dangerous bug in real-time systems. It happens when a low-priority task locks a mutex, and a high-priority task gets blocked waiting for it. If a medium-priority task preempts the low-priority task, the high-priority task is now indefinitely delayed by a medium-priority task. This violates the deterministic nature of an RTOS.",
      keyPoints: ["High priority task blocked by a lower priority task", "Occurs due to shared resources (Mutexes)", "Violates real-time determinism", "Famous example: Mars Pathfinder reset bug"],
      followUpQuestions: ["How does an RTOS solve priority inversion?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Briefly mentioning the 1997 Mars Pathfinder incident is a great way to show you understand the real-world implications of priority inversion."
  },
  {
    id: "embedded-23",
    topicId: "embedded-systems",
    title: "What is Priority Inheritance?",
    answer: {
      shortAnswer: "Priority inheritance is an RTOS mechanism used to solve priority inversion by temporarily raising the priority of a task holding a mutex to that of the highest-priority task waiting for it.",
      detailedExplanation: "When a High priority task blocks on a mutex held by a Low priority task, the OS temporarily elevates the Low priority task to the High priority level. This ensures that Medium priority tasks cannot preempt the Low priority task while it holds the resource. Once the Low priority task releases the mutex, its priority reverts to its original level, allowing the High priority task to execute immediately.",
      interviewExplanation: "To resolve priority inversion, an RTOS implements Priority Inheritance on its mutexes. If a low-priority task holds a lock that a high-priority task needs, the OS temporarily boosts the low-priority task's priority to match the high-priority task. This prevents medium-priority tasks from preempting it. As soon as the lock is released, the task's priority drops back to normal, and the high-priority task acquires the lock and runs.",
      keyPoints: ["Solution to Priority Inversion", "Temporarily elevates priority of mutex holder", "Restores original priority when mutex is released", "Only applies to Mutexes, not Semaphores"],
      followUpQuestions: ["Does Priority Inheritance prevent deadlocks?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "This is the direct follow-up to the Priority Inversion question. Make sure you tie them together."
  },
  {
    id: "embedded-24",
    topicId: "embedded-systems",
    title: "What is a Deadlock and what are the Coffman conditions?",
    answer: {
      shortAnswer: "A deadlock is a situation where two or more tasks are blocked forever, waiting for each other to release resources.",
      detailedExplanation: "Deadlock occurs when Task A holds Mutex 1 and waits for Mutex 2, while Task B holds Mutex 2 and waits for Mutex 1. Both will wait indefinitely. For a deadlock to occur, four conditions (Coffman conditions) must be present simultaneously: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.",
      interviewExplanation: "A deadlock is a fatal system state where tasks are permanently blocked waiting for resources held by each other, causing the system to freeze. It typically happens with multiple mutexes. It requires four conditions to occur: resources must be exclusive, a task must hold one resource while waiting for another, resources cannot be forcibly taken away, and there must be a circular chain of tasks waiting on each other. Breaking any of these conditions prevents deadlocks.",
      keyPoints: ["Permanent blocking of tasks", "Requires Circular Wait, Hold and Wait, Mutual Exclusion, No Preemption", "Prevented by acquiring mutexes in a strict, predefined order", "A watchdog timer is the ultimate hardware fail-safe for this"],
      followUpQuestions: ["How can you write software to prevent deadlocks when multiple mutexes are needed?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Important"],
    interviewTip: "Explain that a common software practice to prevent deadlocks is always locking multiple mutexes in a strictly defined order across all tasks."
  },
  {
    id: "embedded-25",
    topicId: "embedded-systems",
    title: "Explain the 'volatile' keyword in C.",
    answer: {
      shortAnswer: "The 'volatile' keyword tells the compiler that a variable's value can change unexpectedly at any time, preventing the compiler from applying certain optimizations to it.",
      detailedExplanation: "Compilers often optimize code by caching variables in CPU registers rather than reading from RAM every time. If a variable is modified by an ISR or by hardware (like a peripheral status register), the compiler won't know. Marking it 'volatile' forces the compiler to read the variable from memory every single time it is evaluated, ensuring the software sees the actual hardware state.",
      interviewExplanation: "In embedded C, 'volatile' is critical. It informs the compiler that a variable might change outside the normal program flow, so it must not optimize memory accesses to it. I use it in three main scenarios: mapping to hardware peripheral registers, global variables shared between an ISR and main code, and variables shared between multiple threads in an RTOS. Without it, the compiler might cache a flag in a register, resulting in an infinite loop.",
      keyPoints: ["Prevents compiler optimization", "Forces reading/writing from/to memory every time", "Used for hardware registers", "Used for variables modified in ISRs"],
      example: "volatile int flag = 0; // Modified inside an interrupt",
      followUpQuestions: ["Can a variable be both 'const' and 'volatile'?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Coding", "Important"],
    interviewTip: "This is arguably the most common embedded software interview question. Memorize the 3 use cases: Hardware registers, ISR shared variables, Multithreaded shared variables."
  },
  {
    id: "embedded-26",
    topicId: "embedded-systems",
    title: "Explain the 'const' keyword and its memory placement in embedded systems.",
    answer: {
      shortAnswer: "The 'const' keyword declares a variable as read-only. In embedded systems, 'const' variables are typically placed in Flash (ROM) memory rather than RAM.",
      detailedExplanation: "Using 'const' prevents accidental modification of a variable, yielding compiler errors if attempted. Crucially for microcontrollers, the linker script usually places 'const' data (like lookup tables, string literals, and calibration constants) into non-volatile Flash memory. This saves precious RAM, which is often severely limited in microcontrollers.",
      interviewExplanation: "The 'const' keyword enforces read-only access to a variable at compile time. In the context of embedded systems, it serves a dual purpose. Not only does it make the code safer by preventing accidental writes, but the linker will place 'const' variables into Flash memory instead of RAM. Since microcontrollers typically have vastly more Flash than RAM, using 'const' for large arrays or strings is a vital optimization technique.",
      keyPoints: ["Makes variable read-only", "Catches programming errors at compile time", "Placed in Flash (ROM) memory, saving RAM", "Used for lookup tables and constant strings"],
      example: "const uint8_t sine_wave_table[256] = { ... };",
      followUpQuestions: ["What does 'const int * p' vs 'int * const p' mean?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Practical"],
    interviewTip: "Connecting the 'const' keyword to RAM conservation is exactly what embedded interviewers are looking for."
  },
  {
    id: "embedded-27",
    topicId: "embedded-systems",
    title: "Explain the 'static' keyword in C.",
    answer: {
      shortAnswer: "The 'static' keyword limits the scope of a variable or function to its defining file, or preserves the value of a local variable across function calls.",
      detailedExplanation: "When used on a global variable or function, 'static' makes it private to that specific .c file (internal linkage), preventing naming collisions across the project. When used on a local variable inside a function, it allocates the variable in the data/BSS segment instead of the stack, meaning it initializes only once and retains its value between function calls.",
      interviewExplanation: "In C, 'static' has two distinct uses depending on where it's declared. If I declare a variable or function as static at the file level, it hides it from other files, effectively acting as private encapsulation. If I declare a local variable as static inside a function, it retains its value between function calls because it's stored in global memory rather than being destroyed on the stack when the function returns.",
      keyPoints: ["File scope: Limits visibility to the current .c file (encapsulation)", "Local scope: Variable retains value across function calls", "Stored in Data/BSS segment, not the stack", "Good practice for internal helper functions"],
      followUpQuestions: ["Is a static local variable thread-safe in an RTOS?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Frequently Asked"],
    interviewTip: "Highlighting that 'static' is C's way of achieving 'private' encapsulation (Object-Oriented concept) shows mature programming skills."
  },
  {
    id: "embedded-28",
    topicId: "embedded-systems",
    title: "What are the differences between Inline functions and Macros (#define)?",
    answer: {
      shortAnswer: "Macros are handled by the preprocessor through simple text substitution, whereas inline functions are handled by the compiler and include type checking and scope rules.",
      detailedExplanation: "A macro blindly replaces text before compilation, which can lead to unexpected side effects (e.g., `#define SQUARE(x) x*x` failing on `SQUARE(x+1)`). An inline function requests the compiler to insert the function body directly at the call site to save function call overhead, but it still performs strict type checking and evaluates arguments safely once.",
      interviewExplanation: "Both are used to eliminate the overhead of a function call for small snippets of code. However, Macros are preprocessor directives that do direct text replacement. They lack type safety and are notorious for side effects with complex arguments. Inline functions are actual C functions parsed by the compiler. They provide strict type checking, scope handling, and safe argument evaluation, making them vastly superior and safer for modern embedded code.",
      keyPoints: ["Macros: Preprocessor text replacement, no type checking", "Inline: Compiler level, strict type checking", "Macros are prone to side effects with arguments", "Inline functions are generally preferred for safety"],
      example: "Inline: `static inline int square(int x) { return x * x; }`",
      followUpQuestions: ["Will the compiler always inline a function marked with the 'inline' keyword?"]
    },
    difficulty: "Intermediate",
    badges: ["Coding"],
    interviewTip: "Provide the `SQUARE(x++)` macro side-effect example to practically demonstrate why macros can be dangerous."
  },
  {
    id: "embedded-29",
    topicId: "embedded-systems",
    title: "How do you set, clear, and toggle a specific bit in a register?",
    answer: {
      shortAnswer: "Use bitwise OR (|) to set a bit, bitwise AND with a NOT mask (& ~) to clear a bit, and bitwise XOR (^) to toggle a bit.",
      detailedExplanation: "Embedded programming requires constant manipulation of hardware registers. To set bit N: `REG |= (1 << N)`. To clear bit N without affecting others: `REG &= ~(1 << N)`. To toggle bit N: `REG ^= (1 << N)`. To check if bit N is set: `if (REG & (1 << N))`.",
      interviewExplanation: "Bit manipulation is fundamental. To set the 3rd bit of a register, I use the OR operator: `REG |= (1 << 3)`. This forces the 3rd bit to 1 while leaving others unchanged. To clear the 3rd bit, I use the AND operator with an inverted mask: `REG &= ~(1 << 3)`. To toggle it, I use the XOR operator: `REG ^= (1 << 3)`. I always use these constructs because they are read-modify-write operations that safely alter specific bits.",
      keyPoints: ["Set: `|= (1 << N)`", "Clear: `&= ~(1 << N)`", "Toggle: `^= (1 << N)`", "Check: `& (1 << N)`"],
      followUpQuestions: ["What is a bit-field in a C struct, and why might it be problematic for hardware registers?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Frequently Asked"],
    interviewTip: "Write the syntax out flawlessly. This is often an actual white-board coding question."
  },
  {
    id: "embedded-30",
    topicId: "embedded-systems",
    title: "Explain Endianness (Little Endian vs Big Endian).",
    answer: {
      shortAnswer: "Endianness refers to the byte order in memory. Little Endian stores the least significant byte at the lowest address, while Big Endian stores the most significant byte at the lowest address.",
      detailedExplanation: "For a 32-bit integer `0x12345678`, Big Endian memory (from address 0) will store `12 34 56 78`. Little Endian memory will store `78 56 34 12`. ARM processors are typically Little Endian, while Network protocols (like TCP/IP) use Big Endian (Network Byte Order).",
      interviewExplanation: "Endianness is the sequence in which bytes are arranged in memory for multi-byte data types. In a Little Endian system, which most microcontrollers use, the least significant byte is stored at the lowest memory address. In a Big Endian system, the most significant byte is stored first. This becomes critical when transmitting data over a network or a serial bus between disparate systems, requiring byte-swapping to ensure data is interpreted correctly.",
      keyPoints: ["Little Endian: Least Significant Byte (LSB) at lowest address", "Big Endian: Most Significant Byte (MSB) at lowest address", "Critical for networking and inter-device communication", "Network byte order is universally Big Endian"],
      followUpQuestions: ["How can you write a C program to determine the endianness of the machine it is running on?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Be prepared to write a quick 3-line C function using pointers to determine the endianness of a system."
  },
  {
    id: "embedded-31",
    topicId: "embedded-systems",
    title: "What is a Memory Leak and how is it handled in embedded systems?",
    answer: {
      shortAnswer: "A memory leak occurs when dynamically allocated memory on the heap is not freed after use. In embedded systems, the best way to handle this is to avoid dynamic memory allocation altogether.",
      detailedExplanation: "Memory leaks eventually exhaust the available heap, causing the system to crash (hard fault). Because embedded systems often run continuously for years without rebooting, even a tiny leak is catastrophic. Consequently, safety-critical standards (like MISRA C) forbid the use of `malloc()` and `free()`, relying entirely on static allocation.",
      interviewExplanation: "A memory leak happens when memory allocated via `malloc` is never returned to the heap via `free`. Because embedded systems have tiny amounts of RAM and must run indefinitely, leaks will inevitably crash the device. To handle this, the industry standard practice for high-reliability embedded systems is to entirely ban dynamic memory allocation. Instead, I statically allocate all memory at compile time or use fixed-size memory pools.",
      keyPoints: ["Occurs when allocated memory is never freed", "Leads to heap exhaustion and system crashes", "Best practice: Do not use malloc/free in embedded systems", "Use static allocation or fixed block memory pools instead"],
      followUpQuestions: ["What is heap fragmentation?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "State clearly that dynamic allocation (`malloc`) is generally frowned upon in embedded systems due to leaks, fragmentation, and non-deterministic execution times."
  },
  {
    id: "embedded-32",
    topicId: "embedded-systems",
    title: "Explain the difference between the Stack and the Heap.",
    answer: {
      shortAnswer: "The stack is used for static memory allocation (local variables, function calls) and is managed automatically. The heap is used for dynamic memory allocation (`malloc`) and is managed manually by the programmer.",
      detailedExplanation: "The stack operates in a LIFO (Last In First Out) manner and is highly efficient and deterministic. It grows downwards in memory. The heap is an unorganized region of memory used for variables whose size is determined at runtime. It grows upwards. Heap management takes CPU time and can lead to fragmentation.",
      interviewExplanation: "The Stack and Heap are two distinct areas of RAM. The Stack is automatically managed by the CPU; it stores local variables, function parameters, and return addresses. It is extremely fast but limited in size. The Heap is used for dynamic memory allocated at runtime using `malloc`. It's larger but manually managed, slower, and prone to fragmentation. In embedded systems, we rely heavily on the Stack and avoid the Heap.",
      keyPoints: ["Stack: Automatic, LIFO, fast, stores local variables/context", "Heap: Manual allocation (malloc), prone to fragmentation", "Stack memory is freed automatically on function return", "Heap memory must be explicitly freed"],
      followUpQuestions: ["What happens if the Stack and the Heap collide in memory?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mention that in a standard memory layout, the stack grows down from the top of RAM, and the heap grows up from the bottom."
  },
  {
    id: "embedded-33",
    topicId: "embedded-systems",
    title: "What causes a Stack Overflow in an embedded system and how do you prevent it?",
    answer: {
      shortAnswer: "A stack overflow occurs when the stack memory exceeds its allocated bounds, usually overwriting other data. It's caused by deep function recursion or large local variables.",
      detailedExplanation: "Microcontrollers have limited RAM. If a program uses heavy recursion, deeply nested function calls, or allocates large arrays as local variables, the stack pointer will grow beyond its designated region, corrupting the heap or data segments, leading to a hard fault. Prevention includes avoiding recursion, keeping ISRs short, and using static profiling tools.",
      interviewExplanation: "A stack overflow happens when the stack grows beyond its allocated memory boundary. This corrupts adjacent memory, invariably causing a system crash. The primary culprits are deeply nested function calls, recursive algorithms, or defining huge buffers as local variables inside a function. To prevent it, I never use recursion in embedded code, I pass large structures by reference (pointers) rather than by value, and I utilize OS features like stack watermarking to monitor usage during development.",
      keyPoints: ["Stack exceeds boundaries, corrupting memory", "Causes: Recursion, deep call trees, huge local arrays", "Prevention: No recursion, pass by reference, use static analysis", "RTOS can provide stack overflow detection hooks"],
      followUpQuestions: ["How can you calculate the worst-case stack usage statically?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Mentioning RTOS stack watermarking (like `uxTaskGetStackHighWaterMark` in FreeRTOS) shows practical debugging experience."
  },
  {
    id: "embedded-34",
    topicId: "embedded-systems",
    title: "How do you optimize power consumption in battery-powered embedded systems?",
    answer: {
      shortAnswer: "Optimize power by maximizing the time spent in deep sleep modes, lowering clock frequencies, and turning off unused peripherals.",
      detailedExplanation: "The CPU consumes the most power when active. The strategy is 'race to sleep': process data at a high clock speed quickly, then immediately enter a low-power sleep state. Furthermore, power gating unused hardware blocks (like ADCs or UARTs), disabling unnecessary clocks, and using interrupts instead of polling significantly reduces the current draw to the microamp range.",
      interviewExplanation: "To optimize battery life, the software architecture must be fundamentally interrupt-driven, completely avoiding polling. My main strategy is 'race-to-sleep': I wake the CPU via an interrupt, process the necessary data as fast as possible, and immediately put the microcontroller back into its deepest sleep state. Additionally, I dynamically disable the clocks and power to any unused peripherals, and configure unused GPIO pins to an analog or defined state to prevent leakage currents.",
      keyPoints: ["Use Deep Sleep / Standby modes", "Interrupt-driven architecture (No polling)", "Disable clocks and power to unused peripherals", "Race-to-sleep strategy"],
      followUpQuestions: ["What should be done with unused GPIO pins to minimize power consumption?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "The phrase 'Race to sleep' is an industry-standard term that indicates a deep understanding of low-power design."
  },
  {
    id: "embedded-35",
    topicId: "embedded-systems",
    title: "Explain the principles of an ADC (Analog to Digital Converter).",
    answer: {
      shortAnswer: "An ADC converts a continuous analog voltage into a discrete digital number based on its resolution and reference voltage.",
      detailedExplanation: "An ADC samples an analog signal and quantizes it into a digital value. The two main parameters are Resolution (number of bits, e.g., 12-bit gives 4096 levels) and Sampling Rate. The digital value is calculated as: `(Vin * (2^n - 1)) / Vref`. Successive Approximation Register (SAR) is the most common ADC architecture in microcontrollers.",
      interviewExplanation: "An ADC bridges the physical analog world and the digital microcontroller. It works by sampling an input voltage and converting it to a binary number. The precision depends on the resolution; for instance, a 10-bit ADC has 1024 discrete steps. If my reference voltage is 5V, each step represents about 4.8mV. A vital consideration is the Nyquist theorem, which states my sampling rate must be at least twice the highest frequency of the analog signal to accurately digitize it.",
      keyPoints: ["Converts Analog voltage to Digital value", "Resolution determines precision (e.g., 10-bit, 12-bit)", "Vref dictates the voltage range", "Must obey Nyquist-Shannon sampling theorem"],
      example: "Reading an analog temperature sensor (like LM35) and calculating the temperature from the ADC value.",
      followUpQuestions: ["What is quantization error?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Be ready to do a quick mental calculation of ADC step size (e.g., Vref / (2^bits - 1))."
  },
  {
    id: "embedded-36",
    topicId: "embedded-systems",
    title: "What are Pull-up and Pull-down resistors?",
    answer: {
      shortAnswer: "They are resistors used to ensure a digital pin defaults to a known logic state (High or Low) when no active input signal is present.",
      detailedExplanation: "If a microcontroller pin is configured as an input and left disconnected (floating), environmental electrical noise can cause it to randomly read as High or Low. A pull-up resistor connects the pin to VCC, forcing it High when idle. A button press connects it to Ground, overcoming the resistor to pull it Low. Most microcontrollers have internal pull-up resistors configurable via software.",
      interviewExplanation: "Pull-up and pull-down resistors prevent floating input pins, which can oscillate unpredictably due to electromagnetic interference. A pull-up resistor weakly connects an input pin to the supply voltage, ensuring a default 'High' state. When a mechanical switch connected to ground is closed, it creates a lower resistance path, driving the pin 'Low'. This provides a stable, predictable logic level at all times.",
      keyPoints: ["Prevents floating input pins", "Pull-up defaults pin to Logic High (VCC)", "Pull-down defaults pin to Logic Low (GND)", "Microcontrollers usually feature internal software-configurable pull-ups"],
      followUpQuestions: ["What is an open-drain output, and why does it require a pull-up resistor?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Mention that for I2C communication, external pull-up resistors are mandatory because the devices use open-drain outputs."
  },
  {
    id: "embedded-37",
    topicId: "embedded-systems",
    title: "What is Switch Bouncing and how do you Debounce a switch?",
    answer: {
      shortAnswer: "Switch bouncing is the mechanical vibration of physical contacts causing multiple rapid on/off transitions. Debouncing (via hardware or software) filters this out to register a single press.",
      detailedExplanation: "When a physical button is pressed, the metal contacts bounce against each other for a few milliseconds, creating a series of rapid electrical pulses. A microcontroller is fast enough to read this as multiple button presses. Software debouncing involves sampling the pin, waiting (e.g., 10-50ms), and sampling again to ensure the signal is stable. Hardware debouncing uses an RC low-pass filter.",
      interviewExplanation: "Mechanical switches don't make a clean electrical connection instantly; the metal contacts physically bounce, creating a noisy signal that the MCU interprets as dozens of presses. To fix this, we use debouncing. In software, when I detect an edge, I start a timer for about 20 milliseconds, ignoring all further edges. Once the timer expires, I check the pin state again to confirm the stable press. Alternatively, a hardware RC filter with a Schmitt trigger can smooth the signal.",
      keyPoints: ["Mechanical contacts bounce, causing false multiple triggers", "Software debounce: Add a time delay (10-50ms) to ignore bounces", "Hardware debounce: Use an RC filter", "Critical for user interfaces and interrupt-driven buttons"],
      followUpQuestions: ["Why is it a bad idea to use a blocking `delay()` function for software debouncing?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Never suggest using a blocking `delay()` inside an ISR for debouncing. Always suggest using a hardware timer or RTOS software timer."
  },
  {
    id: "embedded-38",
    topicId: "embedded-systems",
    title: "Explain Push-Pull vs. Open-Drain GPIO configurations.",
    answer: {
      shortAnswer: "Push-Pull can actively drive a signal High and Low. Open-Drain can actively pull a signal Low, but relies on an external pull-up resistor to pull it High.",
      detailedExplanation: "A Push-Pull output uses a pair of transistors (one to VCC, one to GND). It can supply current (source) for a logic High, and absorb current (sink) for a logic Low. An Open-Drain output only has the transistor connected to GND. It can pull the line Low, but when turned off, it floats. It requires a pull-up resistor to achieve a logic High. This is useful for multi-master buses like I2C.",
      interviewExplanation: "A push-pull GPIO pin has two active states: it actively drives the voltage up to VCC for a logical 1, and pulls it down to GND for a logical 0. It's used for general outputs like driving LEDs. An open-drain configuration, however, can only actively pull the line to GND. To get a logical 1, the pin simply disconnects, requiring an external pull-up resistor to lift the voltage to VCC. Open-drain is essential for shared buses like I2C, allowing multiple devices to drive the same line without creating a short circuit.",
      keyPoints: ["Push-Pull: Actively drives High and Low", "Open-Drain: Actively drives Low, floats for High", "Open-Drain requires a Pull-up resistor", "Open-Drain enables wired-AND logic and level shifting"],
      followUpQuestions: ["How can open-drain outputs be used for voltage level shifting?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Connect Open-Drain to the I2C protocol. If two push-pull outputs on a bus drove High and Low simultaneously, a short circuit would occur. Open-drain prevents this."
  },
  {
    id: "embedded-39",
    topicId: "embedded-systems",
    title: "What are JTAG and SWD?",
    answer: {
      shortAnswer: "JTAG and SWD are hardware interfaces used for programming microcontrollers and performing on-chip debugging.",
      detailedExplanation: "JTAG (Joint Test Action Group) is an industry-standard 4-or-5-wire interface originally designed for testing printed circuit boards (Boundary Scan) but widely used for debugging. SWD (Serial Wire Debug) is an ARM-specific, 2-wire alternative (SWDIO, SWCLK) that provides the same debugging capabilities as JTAG but saves valuable microcontroller pins.",
      interviewExplanation: "JTAG and SWD are fundamental tools for an embedded engineer. They are hardware interfaces that connect a debugger tool to the microcontroller's internal core. This allows me to flash new firmware, halt the CPU, set hardware breakpoints, step through C code line-by-line, and inspect memory registers in real-time. While JTAG requires 4 pins, ARM developed SWD to achieve the same debugging performance using only 2 pins, which is highly advantageous for small form-factor devices.",
      keyPoints: ["Used for flashing firmware and real-time debugging", "Allows setting breakpoints and inspecting registers", "JTAG uses 4+ pins, SWD uses 2 pins", "SWD is specific to ARM Cortex processors"],
      followUpQuestions: ["What is a hardware breakpoint vs a software breakpoint?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Emphasize that debugging via JTAG/SWD is vastly superior to 'printf debugging', as it allows halting the system and inspecting true hardware state."
  },
  {
    id: "embedded-40",
    topicId: "embedded-systems",
    title: "What is an RTOS Tick?",
    answer: {
      shortAnswer: "The RTOS tick is a periodic hardware timer interrupt that serves as the heartbeat of the operating system, used to measure time and trigger the scheduler.",
      detailedExplanation: "The tick interrupt usually fires every 1ms (1000Hz). Inside the tick ISR, the OS increments its internal system time, updates the timeout counters of any delayed or blocked tasks, and checks if a context switch is required (e.g., if a sleeping higher-priority task just woke up). A faster tick rate increases timing resolution but wastes CPU cycles in overhead.",
      interviewExplanation: "The tick is the fundamental timekeeping mechanism of an RTOS. It's essentially a hardware timer configured to generate an interrupt at a fixed interval, typically 1 millisecond. When this interrupt fires, the RTOS kernel executes. It updates software timers, checks if tasks waiting on delays or timeouts should be unblocked, and potentially triggers a context switch to run a newly readied higher-priority task. The tick frequency is a trade-off between timing accuracy and CPU overhead.",
      keyPoints: ["Heartbeat of the RTOS", "Periodic hardware timer interrupt (usually 1ms)", "Used for task delays, timeouts, and triggering scheduling", "Tickless idle is an advanced feature to save power"],
      followUpQuestions: ["What is 'Tickless Idle' mode in an RTOS and how does it save power?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mentioning the trade-off (higher tick rate = better resolution but more CPU overhead) demonstrates a solid understanding of system design."
  }
];
