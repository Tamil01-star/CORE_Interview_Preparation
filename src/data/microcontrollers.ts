import type { Question } from '../types';

export const microcontrollersQuestions: Question[] = [
  {
    id: "micro-1",
    topicId: "microcontrollers",
    title: "What is the primary difference between a Microprocessor and a Microcontroller?",
    answer: {
      shortAnswer: "A microprocessor is a CPU on a single chip that requires external components like RAM, ROM, and I/O ports. A microcontroller integrates a CPU, memory, and I/O peripherals onto a single integrated circuit.",
      detailedExplanation: "A microprocessor (MPU) forms the core of a computer system (like a PC) where processing power is the main focus. It relies on external buses to interface with memory and I/O devices, making the overall system bulkier but highly flexible and scalable. A microcontroller (MCU) is designed for embedded applications. It packs the CPU, RAM, ROM/Flash, timers, and I/O ports onto a single chip. This makes it compact, power-efficient, and suitable for specific control tasks, though less flexible than an MPU setup.",
      interviewExplanation: "In an interview, I would state that a microprocessor is just the processing engine and needs external memory and peripherals to function, typically used in general-purpose computing. A microcontroller, however, is a 'computer on a chip' built for specific embedded tasks, containing memory and peripherals internally.",
      keyPoints: ["Microprocessor: CPU only, external peripherals, general-purpose.", "Microcontroller: CPU + Memory + Peripherals on one chip, specific tasks.", "Cost and Power: MCUs are generally cheaper and consume less power."],
      example: "Intel Core i7 is a microprocessor; ATmega328 (used in Arduino Uno) is a microcontroller.",
      followUpQuestions: ["Can a microcontroller be used in a general-purpose computer?", "Which one consumes more power and why?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always contrast them based on internal vs external components and their target applications (general purpose vs embedded)."
  },
  {
    id: "micro-2",
    topicId: "microcontrollers",
    title: "Explain the difference between Harvard and Von Neumann architectures.",
    answer: {
      shortAnswer: "Von Neumann architecture uses a single unified memory space and bus for both data and instructions. Harvard architecture uses physically separate memories and buses for data and instructions.",
      detailedExplanation: "In the Von Neumann architecture, the CPU uses the same bus to fetch instructions and read/write data. This leads to the 'Von Neumann bottleneck,' as instruction fetch and data operations cannot occur simultaneously. The Harvard architecture solves this by providing separate memory spaces and buses for instructions and data. This allows the CPU to fetch an instruction and access data simultaneously, improving execution speed at the cost of increased hardware complexity (more pins and buses).",
      interviewExplanation: "I would explain that Von Neumann has a shared memory and bus for data and code, which creates a bottleneck because they can't be accessed at the same time. Harvard architecture separates the memory and buses, allowing simultaneous access and faster execution, which is why it's commonly used in microcontrollers and DSPs.",
      keyPoints: ["Von Neumann: Shared memory and bus.", "Harvard: Separate memory and buses.", "Harvard is faster but more complex hardware.", "Von Neumann bottleneck: CPU idle while waiting for memory."],
      example: "Most modern general-purpose CPUs use a modified Harvard architecture (separate L1 caches), while simple microcontrollers like PIC or 8051 use Harvard.",
      followUpQuestions: ["What is a modified Harvard architecture?", "Which architecture does the 8085 microprocessor use?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Draw a quick block diagram mentally (or on a whiteboard if available) showing CPU and memory blocks to illustrate the bus structures."
  },
  {
    id: "micro-3",
    topicId: "microcontrollers",
    title: "What are RISC and CISC architectures? Compare them.",
    answer: {
      shortAnswer: "RISC (Reduced Instruction Set Computer) uses simple, highly optimized instructions that execute in one clock cycle. CISC (Complex Instruction Set Computer) has a large set of complex instructions that may take multiple cycles to execute.",
      detailedExplanation: "RISC processors aim to reduce the execution time by simplifying instructions. Each instruction does a basic operation, leading to a larger code size but faster execution due to heavy pipelining. Registers are heavily used. CISC processors aim to minimize the number of instructions per program, sacrificing the number of cycles per instruction. CISC instructions can perform complex tasks directly (like memory-to-memory operations), reducing code size. Modern processors often use a combination, where CISC instructions are decoded into micro-ops (RISC-like) internally.",
      interviewExplanation: "I'd highlight that RISC focuses on software complexity with simple, fast hardware, executing mostly in a single cycle (e.g., ARM). CISC focuses on hardware complexity, with a rich instruction set where one instruction can do multiple operations (e.g., x86).",
      keyPoints: ["RISC: Simple instructions, 1 cycle execution, many registers.", "CISC: Complex instructions, multi-cycle execution, fewer registers.", "RISC emphasizes software; CISC emphasizes hardware."],
      example: "ARM Cortex is RISC; Intel x86 processors are traditionally CISC.",
      followUpQuestions: ["Why is RISC preferred in mobile devices?", "What does 'Load/Store architecture' mean in RISC?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Mention that the line between RISC and CISC has blurred in modern desktop CPUs, which use CISC interfaces but RISC internals."
  },
  {
    id: "micro-4",
    topicId: "microcontrollers",
    title: "What is the difference between Polling and Interrupts?",
    answer: {
      shortAnswer: "Polling is a synchronous process where the CPU continuously checks the status of a device. Interrupt is an asynchronous hardware mechanism where the device notifies the CPU when it needs attention.",
      detailedExplanation: "In polling, the microcontroller executes a loop to repeatedly check if an event has occurred or a device is ready. This wastes CPU time and power, as the CPU cannot do other work. In an interrupt-driven system, the CPU executes its main program normally. When an external event occurs, the hardware sends a signal (interrupt) to the CPU. The CPU stops its current task, saves its state, executes an Interrupt Service Routine (ISR) to handle the event, and then resumes the original task. This is much more efficient.",
      interviewExplanation: "I would contrast them by efficiency. Polling is like constantly asking 'are we there yet?', wasting CPU cycles. Interrupts are like a notification or an alarm going off, allowing the CPU to sleep or do other tasks until it's actually needed.",
      keyPoints: ["Polling: CPU wastes cycles checking status.", "Interrupts: Hardware notifies CPU, efficient.", "Interrupts require context switching and an ISR."],
      example: "Polling a button state vs connecting the button to an external interrupt pin to wake a sleeping microcontroller.",
      followUpQuestions: ["What is an Interrupt Service Routine (ISR)?", "What happens if two interrupts occur simultaneously?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Be ready to explain the concept of interrupt priority and nesting."
  },
  {
    id: "micro-5",
    topicId: "microcontrollers",
    title: "Explain DMA (Direct Memory Access).",
    answer: {
      shortAnswer: "DMA is a feature that allows hardware subsystems to access main system memory independently of the central processing unit (CPU).",
      detailedExplanation: "Without DMA, when the CPU uses programmed I/O, it is typically fully occupied for the entire duration of the read or write operation, and is thus unavailable to perform other work. With DMA, the CPU first initiates the transfer, then does other operations while the transfer is in progress, and receives an interrupt from the DMA controller when the operation is done. This significantly increases system throughput, especially in data-heavy tasks like audio playback or networking.",
      interviewExplanation: "I'd define DMA as a dedicated hardware controller that takes over the memory buses to transfer data between peripherals and memory without CPU intervention. The CPU just sets it up (source, destination, size) and gets an interrupt when finished.",
      keyPoints: ["Offloads data transfer tasks from the CPU.", "Increases system throughput and efficiency.", "Uses a dedicated DMA controller (DMAC).", "CPU bus is temporarily yielded to the DMAC."],
      example: "Transferring an audio buffer from RAM to the DAC for playback without the CPU having to copy each byte.",
      followUpQuestions: ["What is 'Cycle Stealing' in DMA?", "What are the modes of DMA transfer?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Mention cycle stealing and burst modes, as these are common follow-up questions to DMA."
  },
  {
    id: "micro-6",
    topicId: "microcontrollers",
    title: "What is the architecture of the 8085 Microprocessor?",
    answer: {
      shortAnswer: "The 8085 is an 8-bit microprocessor. It has an 8-bit data bus, a 16-bit address bus, and runs on a single +5V supply. It includes an ALU, registers (A, B, C, D, E, H, L), instruction decoder, and timing/control unit.",
      detailedExplanation: "The Intel 8085 architecture consists of an 8-bit ALU, an Accumulator (Register A), six general-purpose 8-bit registers (B, C, D, E, H, L) which can be paired as 16-bit registers (BC, DE, HL). It features a 16-bit Program Counter (PC) and a 16-bit Stack Pointer (SP). It has an interrupt control unit supporting 5 hardware interrupts (TRAP, RST 7.5, 6.5, 5.5, INTR) and a serial I/O control unit (SID, SOD). The address bus is 16 bits, allowing access to 64KB of memory. The lower 8 bits of the address bus are multiplexed with the 8-bit data bus (AD0-AD7).",
      interviewExplanation: "I would list the key components: 8-bit data bus, 16-bit address bus, the accumulator, the general-purpose register pairs, the PC and SP. I'd also mention the multiplexed address/data bus and the 5 hardware interrupts.",
      keyPoints: ["8-bit processor, 64KB memory addressability.", "General purpose registers: B, C, D, E, H, L.", "Multiplexed address and data bus (AD0-AD7).", "5 Hardware interrupts."],
      example: "HL register pair is often used as a memory pointer in 8085.",
      followUpQuestions: ["Why are the lower address and data buses multiplexed?", "What is the function of the Accumulator?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Memorizing the block diagram of 8085 helps in structurally explaining the architecture."
  },
  {
    id: "micro-7",
    topicId: "microcontrollers",
    title: "Explain the Flags register in the 8085 Microprocessor.",
    answer: {
      shortAnswer: "The 8085 has a 5-bit flag register that reflects the status of ALU operations: Sign (S), Zero (Z), Auxiliary Carry (AC), Parity (P), and Carry (CY).",
      detailedExplanation: "The flag register is an 8-bit register, but only 5 bits are used. They are updated after ALU operations. 1) Sign Flag (S): Set if the result is negative (MSB is 1). 2) Zero Flag (Z): Set if the result is zero. 3) Auxiliary Carry (AC): Set if a carry is generated from the lower nibble (bit 3) to the higher nibble (bit 4), used in BCD operations. 4) Parity Flag (P): Set if the result has an even number of 1s (even parity). 5) Carry Flag (CY): Set if an arithmetic operation results in a carry-out or borrow from the MSB.",
      interviewExplanation: "I would list all 5 flags and briefly describe their conditions. I would emphasize that they are updated automatically by the ALU and are crucial for conditional branch instructions like JZ (Jump on Zero) or JC (Jump on Carry).",
      keyPoints: ["5 flags: S, Z, AC, P, CY.", "Used for conditional branching.", "AC is mainly used internally for BCD arithmetic."],
      example: "If A=0xFF and we add 0x01, the result is 0x00. The Zero flag (Z) will be set to 1, and the Carry flag (CY) will be set to 1.",
      followUpQuestions: ["Which instructions affect the flags?", "Can the Auxiliary Carry flag be checked by a conditional jump instruction?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Remember the position of the flags in the 8-bit register: S, Z, x, AC, x, P, x, CY."
  },
  {
    id: "micro-8",
    topicId: "microcontrollers",
    title: "What are the different addressing modes in 8085?",
    answer: {
      shortAnswer: "The 8085 has 5 addressing modes: Immediate, Register, Direct, Indirect, and Implied addressing.",
      detailedExplanation: "Addressing modes define how the operand is specified in an instruction. 1) Immediate: The operand is provided directly in the instruction (e.g., MVI A, 05H). 2) Register: The operand is in a general-purpose register (e.g., MOV A, B). 3) Direct: The 16-bit memory address of the operand is given in the instruction (e.g., LDA 2000H). 4) Register Indirect: The memory address is held in a register pair, usually HL (e.g., MOV A, M). 5) Implied/Implicit: The operand is hidden or implied by the instruction itself (e.g., CMA complements the accumulator).",
      interviewExplanation: "I'd explain that addressing modes are just different ways a microprocessor can find the data it needs to process. I would list the five modes and provide a simple assembly instruction example for each.",
      keyPoints: ["Immediate: Data in instruction.", "Register: Data in register.", "Direct: Address in instruction.", "Indirect: Address in register pair.", "Implied: Data implied (usually Accumulator)."],
      example: "MVI A, 32H (Immediate) vs LDA 4000H (Direct).",
      followUpQuestions: ["Which addressing mode is the fastest?", "What is the difference between direct and indirect addressing?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Coding"],
    interviewTip: "Always give an example instruction for each mode; it shows practical understanding."
  },
  {
    id: "micro-9",
    topicId: "microcontrollers",
    title: "Explain the interrupts in the 8085 microprocessor.",
    answer: {
      shortAnswer: "The 8085 has five hardware interrupts: TRAP, RST 7.5, RST 6.5, RST 5.5, and INTR. TRAP has the highest priority and is non-maskable.",
      detailedExplanation: "Hardware interrupts in 8085 are external pins. TRAP is the highest priority, non-maskable interrupt (cannot be disabled by software), and is both edge and level-triggered. RST 7.5, 6.5, and 5.5 are maskable vectored interrupts (their ISR addresses are fixed). RST 7.5 is positive-edge triggered, while 6.5 and 5.5 are level-triggered. INTR is the lowest priority, maskable, and non-vectored interrupt (the interrupting device must provide the vector address via an INTA cycle).",
      interviewExplanation: "I would list them in priority order: TRAP, RST 7.5, RST 6.5, RST 5.5, INTR. I'd make sure to specify which are maskable vs non-maskable, and vectored vs non-vectored, as well as their triggering types.",
      keyPoints: ["TRAP: Highest priority, non-maskable.", "RST x.5: Maskable, vectored.", "INTR: Lowest priority, maskable, non-vectored.", "Maskable means they can be enabled/disabled using EI/DI instructions."],
      example: "TRAP is often used for catastrophic events like power failure detection.",
      followUpQuestions: ["What does 'vectored interrupt' mean?", "How do you mask RST 7.5?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Memorize the priority order and the vector addresses for the RST interrupts (e.g., RST 7.5 vector is 7.5 * 8 = 003CH)."
  },
  {
    id: "micro-10",
    topicId: "microcontrollers",
    title: "What is the function of the ALE pin in the 8085?",
    answer: {
      shortAnswer: "ALE (Address Latch Enable) is a positive going pulse used to demultiplex the lower 8-bit address/data bus (AD0-AD7).",
      detailedExplanation: "To reduce the number of pins on the IC, the 8085 multiplexes the lower 8 bits of the address bus (A0-A7) with the 8-bit data bus (D0-D7) onto pins AD0-AD7. During the first clock cycle (T1) of any machine cycle, the 8085 places the lower address on AD0-AD7 and makes the ALE signal high. An external latch (like 74LS373) is used. The falling edge of ALE latches this address into the external chip. For the rest of the machine cycle, AD0-AD7 are freed up to act as the data bus.",
      interviewExplanation: "I would explain that ALE solves the problem of pin limitation. By asserting ALE high during the first T-state, the CPU tells external components 'the data currently on AD0-AD7 is an address, grab it and hold it'. Once latched externally, the bus can be used for data transfer.",
      keyPoints: ["ALE = Address Latch Enable.", "Demultiplexes AD0-AD7.", "Active high during T1 state.", "Requires external latch IC."],
      example: "Using a 74LS373 latch connected to AD0-AD7 and clocked by the ALE signal.",
      followUpQuestions: ["Why is multiplexing done in the first place?", "What happens if ALE is not used?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Be prepared to draw a simple schematic showing the 8085, the ALE pin, and the external latch."
  },
  {
    id: "micro-11",
    topicId: "microcontrollers",
    title: "Why is the address and data bus multiplexed in 8085?",
    answer: {
      shortAnswer: "Multiplexing reduces the number of physical pins required on the microprocessor package, making the chip smaller and cheaper.",
      detailedExplanation: "The 8085 requires 16 pins for the address bus and 8 pins for the data bus. If they were separate, it would need 24 pins just for buses. By time-multiplexing the lower 8 bits of the address bus with the 8 data lines, 8 pins are saved. The chip can be housed in a standard 40-pin Dual In-line Package (DIP). The tradeoff is a slight increase in external hardware complexity, as an external latch is required to separate the buses using the ALE signal.",
      interviewExplanation: "I would state it's a design compromise to fit the CPU into a 40-pin package. Saving 8 pins allows those pins to be used for other essential control signals like interrupts or serial I/O, at the cost of needing an external latch.",
      keyPoints: ["Reduces pin count.", "Fits in 40-pin DIP.", "Requires external latch to demultiplex."],
      example: "AD0-AD7 acts as Address during T1 and Data during T2/T3.",
      followUpQuestions: ["How is demultiplexing achieved?", "Does 8086 also multiplex buses?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always tie this answer back to the ALE (Address Latch Enable) signal."
  },
  {
    id: "micro-12",
    topicId: "microcontrollers",
    title: "What is the Stack and Stack Pointer in 8085?",
    answer: {
      shortAnswer: "The stack is a reserved area of RAM used for temporary storage, operating on a Last-In-First-Out (LIFO) basis. The Stack Pointer (SP) is a 16-bit register that holds the address of the top of the stack.",
      detailedExplanation: "The stack is primarily used to store the return address when a subroutine is called (CALL instruction) or an interrupt occurs. It can also be used to temporarily save register values using PUSH and restore them using POP instructions. The stack in 8085 grows downwards in memory (from higher address to lower address). When data is PUSHed, the SP is decremented. When data is POPped, the SP is incremented.",
      interviewExplanation: "I'd explain the stack as a LIFO memory structure crucial for subroutines and interrupts. The Stack Pointer is just a specialized 16-bit register tracking the 'top' of this structure. It must be initialized by the programmer at the start of the code.",
      keyPoints: ["LIFO (Last-In-First-Out).", "SP is a 16-bit register.", "Used for subroutine calls, interrupts, and saving registers.", "Grows downwards in memory."],
      example: "LXI SP, 0FFFFH initializes the stack at the top of available memory.",
      followUpQuestions: ["What happens to SP during a PUSH operation?", "Why must the SP be initialized in the main program?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Mention that the stack grows downwards; this is a common specific detail interviewers look for."
  },
  {
    id: "micro-13",
    topicId: "microcontrollers",
    title: "What is the difference between a Machine Cycle and an Instruction Cycle?",
    answer: {
      shortAnswer: "An Instruction Cycle is the total time taken to fetch, decode, and execute a single instruction. A Machine Cycle is the time taken to complete one basic operation like reading from memory, writing to memory, or I/O.",
      detailedExplanation: "An Instruction Cycle consists of one or more Machine Cycles. Every instruction starts with an Opcode Fetch machine cycle. If the instruction requires memory or I/O access, subsequent machine cycles (Memory Read, Memory Write, I/O Read, I/O Write) will follow. A Machine Cycle itself is made up of multiple clock cycles, called T-states (usually 3 to 6 T-states per machine cycle in 8085).",
      interviewExplanation: "I'd use a hierarchy to explain: An Instruction Cycle is the biggest unit. It's made of several Machine Cycles. A Machine Cycle is made of individual clock pulses called T-states. For example, a simple register move might take one machine cycle (just fetch), while a memory write takes multiple.",
      keyPoints: ["Instruction Cycle = Time to complete one full instruction.", "Machine Cycle = Time for one memory or I/O access.", "Instruction Cycle > Machine Cycle > T-State."],
      example: "STA 2000H takes 4 Machine Cycles: Opcode Fetch, Memory Read (lower address), Memory Read (higher address), Memory Write.",
      followUpQuestions: ["What is a T-state?", "Which machine cycle is present in every instruction?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "State clearly that every instruction has at least one machine cycle, which is the Opcode Fetch."
  },
  {
    id: "micro-14",
    topicId: "microcontrollers",
    title: "Explain the architecture of the 8086 Microprocessor (BIU and EU).",
    answer: {
      shortAnswer: "The 8086 architecture is divided into two independent units: the Bus Interface Unit (BIU) and the Execution Unit (EU). This enables pipelining.",
      detailedExplanation: "The BIU handles all data and address transfers on the buses for the execution unit. It fetches instructions from memory, reads data, writes data, and calculates physical addresses using segment registers. It includes an instruction queue (6 bytes) for prefetching. The EU contains the ALU, general-purpose registers, and flag register. It decodes and executes the instructions fetched by the BIU. Because they are separate, the BIU can prefetch the next instruction while the EU is executing the current one.",
      interviewExplanation: "I would emphasize the separation of concerns. The BIU is the 'fetcher' interacting with the outside world, while the EU is the 'cruncher' doing the math. This separation introduces pipelining, drastically improving the 8086's speed over the 8085.",
      keyPoints: ["BIU: Handles buses, memory access, address generation, prefetch queue.", "EU: Handles ALU operations, decoding, execution.", "Separation allows for instruction pipelining."],
      example: "While EU is adding two numbers, BIU is simultaneously fetching the next instruction into its 6-byte queue.",
      followUpQuestions: ["How long is the instruction queue in 8086?", "What happens to the queue during a branch/jump instruction?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Highlight that this BIU/EU division is the foundation of pipelining in the x86 architecture."
  },
  {
    id: "micro-15",
    topicId: "microcontrollers",
    title: "What is Pipelining in the 8086 Microprocessor?",
    answer: {
      shortAnswer: "Pipelining is a technique where the microprocessor overlaps the fetch and execute operations to increase execution speed.",
      detailedExplanation: "In the 8086, pipelining is achieved by splitting the internal architecture into the Bus Interface Unit (BIU) and Execution Unit (EU). The BIU fetches up to 6 bytes of instruction code ahead of time from memory and stores them in a FIFO register called the instruction queue. When the EU finishes executing an instruction, it doesn't have to wait for the next instruction to be fetched from memory; it simply reads it from the queue. This overlapping of fetch and execute cycles is pipelining.",
      interviewExplanation: "I'd explain pipelining using an analogy, like an assembly line in a factory. Instead of waiting for one car to be completely built before starting the next, different stages work simultaneously. In 8086, the BIU fetches while the EU executes.",
      keyPoints: ["Overlapping fetch and execute.", "Implemented via BIU and EU.", "Uses a 6-byte instruction queue.", "Improves overall processor throughput."],
      example: "If fetching takes 3 cycles and executing takes 3, non-pipelined takes 6. Pipelined takes roughly 3 cycles per instruction on average.",
      followUpQuestions: ["What causes a pipeline flush?", "What is the difference between 8086 and 8088 queues?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always mention the pipeline 'flush'. If a jump instruction is executed, the prefetched instructions in the queue are useless and discarded."
  },
  {
    id: "micro-16",
    topicId: "microcontrollers",
    title: "What is memory segmentation in the 8086 microprocessor?",
    answer: {
      shortAnswer: "Segmentation is a scheme dividing the 1MB memory space of the 8086 into logical blocks called segments, each up to 64KB in size.",
      detailedExplanation: "The 8086 has a 20-bit address bus, allowing it to access 1MB of memory. However, its internal registers are only 16 bits wide. To address the 20-bit memory space using 16-bit registers, segmentation is used. Memory is divided into four main segments: Code Segment (CS), Data Segment (DS), Stack Segment (SS), and Extra Segment (ES). A physical 20-bit address is generated by combining a 16-bit segment base address (shifted left by 4 bits) with a 16-bit offset address.",
      interviewExplanation: "I would explain that segmentation is a clever trick to access 1MB of memory using only 16-bit registers. It separates code, data, and stack into different memory areas, which also provides a basic level of organization and protection.",
      keyPoints: ["Allows 16-bit registers to access 20-bit (1MB) memory.", "Four segments: CS, DS, SS, ES.", "Segment size is 64KB max.", "Physical Address = (Segment Register * 16) + Offset."],
      example: "Storing code in CS, variables in DS, and return addresses in SS.",
      followUpQuestions: ["How is the 20-bit physical address calculated?", "What are the default segment and offset pairs?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Memorize the default pairings: CS:IP, SS:SP/BP, DS:SI, ES:DI."
  },
  {
    id: "micro-17",
    topicId: "microcontrollers",
    title: "How is the physical address calculated in 8086?",
    answer: {
      shortAnswer: "The 20-bit physical address is calculated by shifting the 16-bit segment register value left by 4 bits (multiplying by 10H) and adding the 16-bit offset value.",
      detailedExplanation: "Since the 8086 has a 20-bit address bus but 16-bit registers, it uses two registers to form an address. The Segment Register holds the base address, and the Offset Register (like IP, SP, SI, or DI) holds the distance from the base. The Bus Interface Unit (BIU) calculates the physical address using the formula: Physical Address = (Segment Register << 4) + Offset. For example, if CS = 1000H and IP = 0002H, the physical address is 10000H + 0002H = 10002H.",
      interviewExplanation: "I would write down the formula: Physical Address = (Segment Register * 16) + Offset. I'd explain that multiplying by 16 in hex is just appending a zero to the right, converting the 16-bit segment base into a 20-bit base, and then adding the 16-bit offset.",
      keyPoints: ["Physical Address is 20 bits.", "Formula: PA = (Segment << 4) + Offset.", "Calculated by the BIU."],
      example: "If DS = 2000H and SI = 1234H, Physical Address = 20000H + 1234H = 21234H.",
      followUpQuestions: ["What is overlapping of segments?", "Can two logical addresses point to the same physical address?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical", "Important"],
    interviewTip: "Practice doing a quick hexadecimal addition mentally for the interview."
  },
  {
    id: "micro-18",
    topicId: "microcontrollers",
    title: "Explain the Flags in the 8086 Microprocessor.",
    answer: {
      shortAnswer: "The 8086 has a 16-bit flag register containing 9 active flags: 6 status flags (Carry, Parity, Auxiliary Carry, Zero, Sign, Overflow) and 3 control flags (Trap, Interrupt, Direction).",
      detailedExplanation: "Unlike the 8085, the 8086 adds new flags. Status flags reflect ALU results: CF (Carry), PF (Parity), AF (Auxiliary Carry), ZF (Zero), SF (Sign), and OF (Overflow - set if signed arithmetic results in a value too large for the destination). Control flags dictate processor behavior: TF (Trap flag - for single-step debugging), IF (Interrupt Enable flag - to mask/unmask INTR), and DF (Direction flag - determines if string operations auto-increment or auto-decrement).",
      interviewExplanation: "I would categorize them into Status Flags and Control Flags. Status flags are like those in 8085 but with the addition of the Overflow flag for signed math. Control flags are new in 8086 and directly alter CPU operation, like setting the string processing direction or enabling single-stepping.",
      keyPoints: ["16-bit register, 9 active flags.", "6 Status Flags: CF, PF, AF, ZF, SF, OF.", "3 Control Flags: TF, IF, DF."],
      example: "Setting DF to 1 causes string instructions (like MOVSB) to decrement source and destination indexes.",
      followUpQuestions: ["What is the difference between Carry Flag and Overflow Flag?", "How does the Trap flag work?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Make sure to clearly distinguish between the Status flags (set by hardware) and Control flags (set by software/programmer)."
  },
  {
    id: "micro-19",
    topicId: "microcontrollers",
    title: "What are the Maximum and Minimum modes in 8086?",
    answer: {
      shortAnswer: "Minimum mode is used for a single-processor system where the 8086 generates all control signals itself. Maximum mode is used for multiprocessor systems where an external bus controller generates the control signals.",
      detailedExplanation: "The MN/MX' pin decides the mode. If strapped to +5V, it's Minimum mode. The 8086 acts as the sole processor and outputs control signals (ALE, RD, WR, INTA, etc.) directly. If strapped to ground, it's Maximum mode, designed for multi-processor setups (e.g., using an 8087 math coprocessor). In this mode, the 8086 outputs status signals (S0, S1, S2) instead of control signals. An external bus controller (like the 8288) decodes these status signals to generate the system control buses.",
      interviewExplanation: "I would explain that this feature makes the 8086 versatile. Minimum mode is for simple, cheap, single-CPU boards. Maximum mode is for complex systems where the 8086 needs to share buses with a coprocessor or DMA, offloading bus control to an external chip.",
      keyPoints: ["Selected by the MN/MX' pin.", "Minimum Mode: Single processor, generates own control signals.", "Maximum Mode: Multi-processor, requires 8288 Bus Controller."],
      example: "Using an 8087 Math Coprocessor requires the 8086 to be in Maximum mode.",
      followUpQuestions: ["Which chip is used as a bus controller in Maximum mode?", "How does bus arbitration work in maximum mode?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Remember that pins 24-31 on the 8086 have dual functions depending on which mode is selected."
  },
  {
    id: "micro-20",
    topicId: "microcontrollers",
    title: "Explain the Interrupt Vector Table (IVT) in 8086.",
    answer: {
      shortAnswer: "The IVT in 8086 is a 1KB block of memory at the very beginning of the RAM (00000H to 003FFH) that holds the addresses (vectors) of up to 256 Interrupt Service Routines (ISRs).",
      detailedExplanation: "When an interrupt occurs, the 8086 needs to know where the corresponding ISR is located. Each of the 256 possible interrupts is assigned a type number (0 to 255). Each vector in the IVT takes 4 bytes: 2 bytes for the Code Segment (CS) and 2 bytes for the Instruction Pointer (IP) of the ISR. The physical address of the vector is found by multiplying the interrupt type number by 4. For example, Type 0 (Divide by zero) is at address 0000H.",
      interviewExplanation: "I would describe the IVT as a directory or lookup table. When an interrupt hits, the CPU multiplies the interrupt number by 4, goes to that memory address in the IVT, reads the CS and IP stored there, and jumps to that ISR.",
      keyPoints: ["Located from 00000H to 003FFH (1KB).", "Supports 256 interrupts.", "Each vector is 4 bytes (CS and IP).", "Address = Interrupt Type * 4."],
      example: "Interrupt Type 2 (NMI) vector is located at address 00008H.",
      followUpQuestions: ["What are dedicated interrupts in 8086 (Types 0-4)?", "What happens to the stack when an interrupt occurs?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Be able to calculate the IVT address. If asked for Type 10H, the address is 10H * 4 = 40H."
  },
  {
    id: "micro-21",
    topicId: "microcontrollers",
    title: "What are the Addressing Modes of 8086?",
    answer: {
      shortAnswer: "The 8086 has multiple addressing modes categorized into Data addressing (Immediate, Register, Direct, Register Indirect, Base, Indexed, Base Indexed) and Branch addressing (Intrasegment, Intersegment).",
      detailedExplanation: "Data addressing modes determine how operands are accessed. Register and Immediate are internal. Memory addressing is rich: 1) Direct: Address given. 2) Register Indirect: Address in BX, SI, or DI. 3) Based: Address in BX or BP plus a displacement. 4) Indexed: Address in SI or DI plus a displacement. 5) Based Indexed: Base (BX/BP) + Index (SI/DI) + displacement. Branch addressing modes are Intrasegment (Short/Near jump, changing only IP) and Intersegment (Far jump, changing CS and IP).",
      interviewExplanation: "I'd explain that 8086 has a much more complex set of modes than 8085 to support high-level languages like C. For example, Based-Indexed addressing perfectly models accessing an element in a 2D array, or accessing struct members using a pointer.",
      keyPoints: ["Data Modes: Register, Immediate, Direct, Indirect, Based, Indexed, Based-Indexed.", "Branch Modes: Near (same segment), Far (different segment).", "BX, BP, SI, DI are used for memory addressing."],
      example: "MOV AX, [BX+SI+10H] is Based Indexed with displacement.",
      followUpQuestions: ["Why can't we use AX for memory indirect addressing?", "What is the difference between a Near Jump and a Far Jump?"]
    },
    difficulty: "Advanced",
    badges: ["Coding"],
    interviewTip: "Link addressing modes to high-level concepts: Base register acts as an array base pointer, Index register acts as an array index."
  },
  {
    id: "micro-22",
    topicId: "microcontrollers",
    title: "Describe the architecture of the 8051 Microcontroller.",
    answer: {
      shortAnswer: "The 8051 is an 8-bit Harvard architecture microcontroller. It features an 8-bit ALU, 4KB on-chip ROM, 128 bytes on-chip RAM, 4 I/O ports, 2 timers, a serial port, and an interrupt controller.",
      detailedExplanation: "Developed by Intel, the standard 8051 has an 8-bit CPU. It separates program memory (ROM) and data memory (RAM). Internally, it has 128 bytes of RAM, which includes 4 register banks, a bit-addressable area, and scratchpad memory. It has 4KB of internal ROM for code. It provides four 8-bit bidirectional I/O ports (P0-P3). It includes two 16-bit hardware timers/counters (Timer 0 and Timer 1), a full-duplex UART for serial communication, and supports 5 hardware interrupts.",
      interviewExplanation: "I would list the built-in features that make it a 'microcontroller' rather than a microprocessor. I'd mention the CPU, RAM, ROM, Timers, Serial Port, and I/O ports all existing on a single die, highlighting the Harvard architecture.",
      keyPoints: ["8-bit CPU, Harvard architecture.", "4KB internal ROM, 128 bytes internal RAM.", "4x 8-bit I/O ports.", "2x 16-bit Timers, 1 UART, 5 interrupts."],
      example: "The 8051 is often used in simple embedded systems like microwave oven controllers or basic automation.",
      followUpQuestions: ["How much external memory can the 8051 interface with?", "Which port doesn't have internal pull-up resistors?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Memorize the specs: 8-bit CPU, 4KB ROM, 128B RAM, 2 Timers, 1 Serial, 4 Ports."
  },
  {
    id: "micro-23",
    topicId: "microcontrollers",
    title: "Explain the Memory Organization in the 8051 Microcontroller.",
    answer: {
      shortAnswer: "The 8051 uses Harvard architecture, separating Program Memory (ROM, max 64KB) and Data Memory (RAM, max 64KB external + 128B internal).",
      detailedExplanation: "Program Memory (ROM): It has 4KB internal. If the EA' (External Access) pin is tied high, it executes from internal ROM first. It can access up to 64KB external ROM using the PSEN' signal. Data Memory (RAM): It has 128 bytes internal RAM, divided into three areas: 32 bytes for four register banks (Bank 0-3), 16 bytes for bit-addressable memory (128 bits), and 80 bytes for general scratchpad memory. Above this (addresses 80H-FFH) are the Special Function Registers (SFRs). It can also access up to 64KB of external RAM using RD/WR signals.",
      interviewExplanation: "I would focus on the internal RAM breakdown, as it's a very common question. I'd explain that the lower 128 bytes are split into register banks, a bit-addressable section for Boolean flags, and general RAM. The upper 128 bytes (addressed directly only) are for SFRs.",
      keyPoints: ["Separate Code (ROM) and Data (RAM) spaces.", "Internal RAM (128B): Register banks, Bit-addressable, Scratchpad.", "SFRs are located from 80H to FFH.", "Can interface up to 64KB external ROM and 64KB external RAM."],
      example: "Using a bit in the bit-addressable memory (20H-2FH) to store a simple boolean state like 'motor_on'.",
      followUpQuestions: ["What is the purpose of the EA' pin?", "How do you switch register banks?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Be very clear about the distinction between the internal 128B RAM and the SFR memory space."
  },
  {
    id: "micro-24",
    topicId: "microcontrollers",
    title: "What are SFRs (Special Function Registers) in 8051?",
    answer: {
      shortAnswer: "SFRs are specific memory locations in the 8051 (from address 80H to FFH) used to control and monitor the microcontroller's hardware peripherals like timers, serial ports, and I/O ports.",
      detailedExplanation: "The 8051 reserves the upper 128 bytes of the direct-addressable memory space for SFRs. Instead of using specific assembly instructions to control hardware, the 8051 maps the control registers to memory addresses. Key SFRs include the Accumulator (A), B register (for multiplication/division), PSW (Program Status Word), SP (Stack Pointer), DPTR (Data Pointer), P0-P3 (Port latches), TMOD/TCON (Timer control), SCON/SBUF (Serial control/buffer), and IE/IP (Interrupt control). Some SFRs are bit-addressable.",
      interviewExplanation: "I would explain SFRs as the 'control panel' of the 8051. By writing to these specific memory addresses, we configure the hardware. For example, to send data serially, we write the byte directly into the SBUF SFR.",
      keyPoints: ["Located in memory addresses 80H to FFH.", "Used to configure/control internal peripherals.", "Includes Accumulator, PSW, Timers, Ports.", "Some are bit-addressable (e.g., Ports, PSW)."],
      example: "Setting the TR0 bit in the TCON SFR turns on Timer 0.",
      followUpQuestions: ["Which SFRs are bit-addressable?", "What happens if you write to an unimplemented SFR address?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Name a few common SFRs (A, B, PSW, TMOD, SBUF) to demonstrate practical knowledge."
  },
  {
    id: "micro-25",
    topicId: "microcontrollers",
    title: "Describe the I/O Ports of the 8051 Microcontroller.",
    answer: {
      shortAnswer: "The 8051 has four 8-bit bidirectional I/O ports: P0, P1, P2, and P3, providing 32 I/O pins. They can be used as general-purpose I/O or for alternate functions.",
      detailedExplanation: "All 4 ports are bi-directional. To use a pin as an input, a '1' must be written to its port latch. Port 0 lacks internal pull-up resistors (open drain) and requires external pull-ups if used as I/O; it also multiplexes the lower address and data bus for external memory. Port 1 is purely for general I/O. Port 2 acts as I/O or outputs the higher byte of the address bus for external memory. Port 3 pins have alternate functions like serial RX/TX, external interrupts (INT0, INT1), timer inputs, and external RAM read/write strobes.",
      interviewExplanation: "I'd highlight the dual nature of these ports. While they are I/O pins, Ports 0 and 2 are usually lost if you add external memory. Port 3 is heavily used for alternate features like UART and interrupts, leaving Port 1 as the only dedicated general-purpose port.",
      keyPoints: ["4 ports, 8 bits each (32 pins total).", "P0 needs external pull-up resistors.", "P0 & P2 used for external memory interfacing.", "P3 pins have alternate functions (UART, Interrupts, Timers)."],
      example: "P3.0 is RXD and P3.1 is TXD for the serial port.",
      followUpQuestions: ["Why must we write a '1' to a port to make it an input?", "What are the alternate functions of Port 3?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "The most commonly asked detail is that Port 0 requires external pull-up resistors. Always mention this."
  },
  {
    id: "micro-26",
    topicId: "microcontrollers",
    title: "Explain the Timers/Counters in the 8051.",
    answer: {
      shortAnswer: "The 8051 has two 16-bit timers/counters, Timer 0 and Timer 1. They can generate precise time delays or count external events.",
      detailedExplanation: "Each timer consists of two 8-bit registers (TH0/TL0 and TH1/TL1). They are configured using the TMOD (Timer Mode) SFR and controlled by the TCON (Timer Control) SFR. They can operate in 4 modes: Mode 0 (13-bit timer), Mode 1 (16-bit timer), Mode 2 (8-bit auto-reload timer, heavily used for baud rate generation), and Mode 3 (Split timer). As a timer, they count the internal machine cycles (oscillator frequency / 12). As a counter, they count external pulses on the T0 or T1 pins.",
      interviewExplanation: "I would explain that they are just hardware up-counters. If fed by the system clock, they measure time (Timer). If fed by an external pin, they count events (Counter). I'd specifically highlight Mode 2 (Auto-reload) as it's the standard way to set UART baud rates.",
      keyPoints: ["Two 16-bit timers: T0 and T1.", "Controlled via TMOD and TCON SFRs.", "Timer = internal clock / 12; Counter = external pin.", "Mode 2 is 8-bit auto-reload."],
      example: "Using Timer 1 in Mode 2 to generate a 9600 baud rate for serial communication.",
      followUpQuestions: ["How do you calculate the timer delay in Mode 1?", "What is the function of the GATE bit in the TMOD register?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical", "Important"],
    interviewTip: "Know the difference between TMOD (configuration/mode) and TCON (start/stop/interrupt flags)."
  },
  {
    id: "micro-27",
    topicId: "microcontrollers",
    title: "How does Serial Communication work in 8051?",
    answer: {
      shortAnswer: "The 8051 has an on-chip UART for full-duplex serial communication via pins RXD and TXD. It is configured using the SCON register and uses Timer 1 to set the baud rate.",
      detailedExplanation: "The serial port is controlled by the SCON (Serial Control) SFR. Data is transmitted and received through the SBUF (Serial Buffer) SFR. Writing to SBUF initiates transmission; reading from SBUF gets received data. It operates in 4 modes: Mode 0 (Shift register mode, fixed baud rate), Mode 1 (8-bit UART, variable baud rate via Timer 1), Mode 2 (9-bit UART, fixed baud rate), and Mode 3 (9-bit UART, variable baud rate). Mode 1 is the most commonly used for standard PC communication.",
      interviewExplanation: "I'd emphasize that it's a hardware UART. To send data, you just drop a byte into the SBUF register. To receive, you read from SBUF when the Receive Interrupt (RI) flag is set. The baud rate is usually generated by Timer 1 acting as an auto-reloading clock source.",
      keyPoints: ["Full-duplex UART.", "Controlled by SCON, data in SBUF.", "Mode 1 is standard 8-bit UART.", "Timer 1 (Mode 2) is used to generate the baud rate."],
      example: "Setting SCON to 0x50 configures Mode 1 and enables the receiver.",
      followUpQuestions: ["What is the difference between TI and RI flags?", "How do you calculate the baud rate using Timer 1?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Mention that TI and RI flags must be cleared by software in the interrupt service routine, they are not cleared automatically."
  },
  {
    id: "micro-28",
    topicId: "microcontrollers",
    title: "Explain the interrupts in 8051.",
    answer: {
      shortAnswer: "The 8051 supports 5 hardware interrupts: two external (INT0, INT1), two timer interrupts (TF0, TF1), and one serial port interrupt (RI/TI).",
      detailedExplanation: "Interrupts are enabled and masked using the IE (Interrupt Enable) SFR. Priority can be set using the IP (Interrupt Priority) SFR. The standard polling sequence (default priority) if multiple interrupts occur is: INT0, TF0, INT1, TF1, Serial. External interrupts can be edge-triggered or level-triggered (configured in TCON). The Serial interrupt is triggered by either a completed transmission (TI) or a received byte (RI), and software must check which caused it.",
      interviewExplanation: "I'd list the five sources: external pins 0 and 1, timers 0 and 1 overflowing, and the UART. I'd mention that each has a specific vector address in ROM where the execution jumps when the interrupt occurs, starting at 0003H for INT0.",
      keyPoints: ["5 interrupt sources: INT0, TF0, INT1, TF1, Serial.", "Controlled by IE and IP registers.", "Serial interrupt handles both RX and TX.", "Each has a fixed vector address."],
      example: "External interrupt 0 jumps to address 0003H in ROM when the INT0 pin goes low.",
      followUpQuestions: ["How do you enable all interrupts globally?", "What happens if a high-priority interrupt occurs while a low-priority ISR is executing?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Setting the EA (Enable All) bit in the IE register to 1 is required for any interrupt to work."
  },
  {
    id: "micro-29",
    topicId: "microcontrollers",
    title: "What is the Program Status Word (PSW) in 8051?",
    answer: {
      shortAnswer: "The PSW is an 8-bit, bit-addressable SFR that acts as the flag register in the 8051, storing the status of ALU operations and register bank selection.",
      detailedExplanation: "The PSW contains math flags: Carry (CY) for addition/subtraction, Auxiliary Carry (AC) for BCD math, Overflow (OV) for signed arithmetic, and Parity (P) which indicates if the number of 1s in the Accumulator is odd or even. Uniquely, it also contains two Register Bank Select bits (RS0, RS1). By changing these two bits, the programmer can switch the active working registers (R0-R7) to point to one of four different physical RAM banks.",
      interviewExplanation: "I would explain that PSW is the 8051's equivalent of a flag register. Besides the standard math flags like Carry and Zero, it has a special function: bank switching. By flipping RS0 and RS1 bits, we can instantly swap out all 8 working registers, which is incredibly useful for fast context switching during interrupts.",
      keyPoints: ["Bit-addressable SFR.", "Contains ALU flags: CY, AC, OV, P.", "Contains RS0 and RS1 for selecting Register Banks (0-3).", "Parity flag reflects the accumulator only."],
      example: "Setting RS0=1 and RS1=0 switches the CPU to use Register Bank 1.",
      followUpQuestions: ["Why is the Parity flag useful?", "What is the advantage of having multiple register banks?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Highlighting the RS0/RS1 bits for fast context switching during interrupts shows deep understanding of the architecture."
  },
  {
    id: "micro-30",
    topicId: "microcontrollers",
    title: "What is the Data Pointer (DPTR) in 8051?",
    answer: {
      shortAnswer: "The DPTR is a 16-bit register used to hold memory addresses for accessing external RAM or ROM.",
      detailedExplanation: "Because the 8051 is an 8-bit microcontroller, most registers are 8-bit. However, it can address 64KB of external memory, which requires a 16-bit address. The DPTR is the only user-accessible 16-bit register, composed of two 8-bit SFRs: DPH (High byte) and DPL (Low byte). It is heavily used with the MOVX instruction for external data memory access and MOVC instruction for reading lookup tables from code memory.",
      interviewExplanation: "I would describe DPTR as the 8051's dedicated 'pointer' register. Whenever we need to read from or write to external memory or pull constant data out of ROM, we load the 16-bit address into DPTR and use indirect addressing.",
      keyPoints: ["Only 16-bit register in 8051.", "Made of DPH and DPL.", "Used to access external RAM (MOVX).", "Used to access ROM lookup tables (MOVC)."],
      example: "MOV DPTR, #2000H loads the 16-bit address 2000H into the DPTR.",
      followUpQuestions: ["Can DPH and DPL be accessed individually?", "What is the instruction to read data from external RAM using DPTR?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Mention the specific instructions associated with DPTR: MOVX (for external RAM) and MOVC (for Code ROM)."
  },
  {
    id: "micro-31",
    topicId: "microcontrollers",
    title: "What are the main features of the ARM architecture?",
    answer: {
      shortAnswer: "ARM is a 32-bit (and 64-bit) RISC architecture. Key features include a load/store architecture, a large orthogonal register file, uniform fixed-length instructions, and conditional execution of instructions.",
      detailedExplanation: "Advanced RISC Machine (ARM) processors dominate the embedded and mobile market due to high performance per watt. It uses a Load/Store model, meaning data processing operations only happen in registers, not directly in memory. It features a large bank of registers (usually 16 visible at a time). Standard ARM instructions are 32-bits long and execute in a single cycle. A unique feature of traditional ARM is that almost every instruction can be conditionally executed based on CPU flags, reducing the need for branch instructions and avoiding pipeline flushes.",
      interviewExplanation: "I'd focus on the RISC principles: simple instructions, single-cycle execution, and lots of registers. Then I'd mention ARM-specific innovations, particularly conditional execution and the barrel shifter, which allow complex operations to be compressed into single, fast instructions.",
      keyPoints: ["RISC Load/Store architecture.", "High power efficiency (Performance per Watt).", "Conditional execution of all instructions (in 32-bit ARM mode).", "Built-in barrel shifter."],
      example: "Most smartphones use ARM Cortex-A series processors due to their power efficiency.",
      followUpQuestions: ["What does Load/Store architecture mean?", "What are the different ARM processor families (Cortex-A, R, M)?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Understanding the difference between Cortex-A (Application), Cortex-R (Real-time), and Cortex-M (Microcontroller) is a huge plus."
  },
  {
    id: "micro-32",
    topicId: "microcontrollers",
    title: "What is the difference between ARM and Thumb state?",
    answer: {
      shortAnswer: "ARM state executes 32-bit instructions, offering maximum performance and flexibility. Thumb state executes compressed 16-bit instructions, offering higher code density (smaller memory footprint).",
      detailedExplanation: "To reduce the amount of memory needed for code (which is expensive in embedded systems), ARM introduced the Thumb instruction set. Thumb instructions are 16 bits wide, mapped to standard 32-bit ARM instructions. While a single Thumb instruction does less than an ARM instruction, it drastically reduces code size (by up to 30%). Processors can switch between ARM and Thumb states dynamically using the BX (Branch and Exchange) instruction. Modern Cortex-M microcontrollers use Thumb-2, a mixed 16/32-bit instruction set.",
      interviewExplanation: "I would explain Thumb as a 'compression mode' for code. If an embedded system has limited Flash memory, using Thumb state fits more code into the chip. It sacrifices a tiny bit of performance (as it might take two 16-bit instructions to do what one 32-bit instruction does) for a significant gain in storage efficiency.",
      keyPoints: ["ARM state: 32-bit instructions, high performance.", "Thumb state: 16-bit instructions, high code density.", "Dynamic switching via BX instruction.", "Thumb-2 mixes 16 and 32-bit instructions."],
      example: "Cortex-M microcontrollers (like STM32) execute exclusively in Thumb-2 state.",
      followUpQuestions: ["How does the CPU know whether to interpret code as ARM or Thumb?", "What is Thumb-2?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Mentioning Thumb-2 (the standard for modern Cortex-M) shows you are up-to-date with current ARM architectures."
  },
  {
    id: "micro-33",
    topicId: "microcontrollers",
    title: "Explain the Register organization in ARM processors.",
    answer: {
      shortAnswer: "The ARM architecture has 37 registers in total, but only 16 are visible at any given time (R0-R15), plus one status register (CPSR).",
      detailedExplanation: "The 16 visible registers are 32-bits wide. R0 to R12 are general-purpose registers used for data and addresses. R13 is traditionally the Stack Pointer (SP). R14 is the Link Register (LR), which holds the return address when a subroutine is called. R15 is the Program Counter (PC). Depending on the processor mode (User, FIQ, IRQ, Supervisor, etc.), some of these registers are 'banked'. For example, when an interrupt occurs, the CPU switches to IRQ mode, which has its own private R13 and R14, preventing the interrupt from corrupting the main program's stack or link register.",
      interviewExplanation: "I would describe R0-R12 as scratchpads. I'd specifically highlight the special roles of R13 (SP), R14 (LR for fast subroutine returns without memory access), and R15 (PC). The concept of 'banked registers' is crucial—it makes context switching during interrupts extremely fast because the CPU doesn't have to push everything to the stack.",
      keyPoints: ["16 visible registers (R0-R15).", "R13 = SP (Stack Pointer).", "R14 = LR (Link Register - stores return address).", "R15 = PC (Program Counter).", "Banked registers speed up context switching."],
      example: "A BL (Branch with Link) instruction automatically copies the next instruction's address into R14 (LR).",
      followUpQuestions: ["Why is the Link Register (R14) useful?", "What happens to banked registers during an interrupt?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Always explicitly name the functions of R13, R14, and R15. This is the most common ARM register question."
  },
  {
    id: "micro-34",
    topicId: "microcontrollers",
    title: "What are the CPSR and SPSR in ARM?",
    answer: {
      shortAnswer: "CPSR (Current Program Status Register) holds the current status flags and control bits. SPSR (Saved Program Status Register) is used to save the CPSR state when an exception occurs.",
      detailedExplanation: "The CPSR contains ALU condition flags (Negative, Zero, Carry, Overflow), interrupt disable bits (I for IRQ, F for FIQ), the processor state bit (T bit for ARM/Thumb state), and the mode bits that indicate the current operating mode (User, FIQ, Supervisor, etc.). When an exception/interrupt occurs, the processor switches modes. The current CPSR is automatically copied into the SPSR of the new mode. When returning from the exception, the SPSR is copied back to the CPSR, instantly restoring the CPU to its prior state.",
      interviewExplanation: "I'd compare CPSR to the flag register in 8085/8086, but note it's much more powerful as it also controls CPU modes and interrupt masking. SPSR is essentially a hardware backup for CPSR. It prevents the need to push the status register to the stack during interrupts, saving precious clock cycles.",
      keyPoints: ["CPSR: Current Program Status Register.", "Contains ALU flags, interrupt masks, CPU mode, Thumb state bit.", "SPSR: Saved Program Status Register (exists in exception modes).", "Hardware backup for fast context switching."],
      example: "Checking the 'Z' flag in CPSR to see if two compared numbers were equal.",
      followUpQuestions: ["Does User mode have an SPSR?", "How do you enable/disable IRQ interrupts globally in ARM?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Clarify that 'User' and 'System' modes do not have an SPSR because they are not exception modes."
  },
  {
    id: "micro-35",
    topicId: "microcontrollers",
    title: "Explain the modes of operation in ARM processors.",
    answer: {
      shortAnswer: "ARM processors have multiple operating modes (typically 7 in classic ARM) to handle different tasks and exceptions with different privilege levels.",
      detailedExplanation: "The main modes are: 1) User mode: Unprivileged mode where most application code runs. 2) FIQ (Fast Interrupt): Handles high-priority interrupts; has the most banked registers for speed. 3) IRQ (Normal Interrupt): Handles standard interrupts. 4) Supervisor (SVC): Entered on reset or software interrupts (SWI/SVC), typically where the OS kernel runs. 5) Abort mode: Handles memory access violations. 6) Undefined mode: Handles unknown instructions. 7) System mode: Privileged version of User mode using the same registers. Privilege determines if the code can change the CPSR or access protected memory.",
      interviewExplanation: "I would categorize them into 'User mode' (unprivileged) and 'Privileged/Exception modes'. Operating systems utilize this deeply. User apps run in User mode. If they need hardware access, they trigger a software interrupt, switching the CPU to Supervisor mode (OS kernel), which has the privileges to access hardware.",
      keyPoints: ["User mode is unprivileged.", "Exception modes (FIQ, IRQ, SVC, Abort, Undef) are privileged.", "Privileged modes can change CPU state and access restricted memory.", "Modes have their own banked registers (SP, LR, SPSR)."],
      example: "Linux user applications run in User mode, while the Linux kernel runs in Supervisor (SVC) mode.",
      followUpQuestions: ["Why does FIQ have more banked registers than IRQ?", "How does a User mode program call an OS function?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Highlight that FIQ is faster than IRQ largely because it banks registers R8-R14, meaning the ISR doesn't need to push them to the stack."
  },
  {
    id: "micro-36",
    topicId: "microcontrollers",
    title: "Explain Pipelining in ARM processors (3-stage and 5-stage).",
    answer: {
      shortAnswer: "Pipelining divides instruction execution into stages so multiple instructions can be processed simultaneously. ARM uses 3-stage (Fetch, Decode, Execute) or more complex pipelines (like 5-stage) in newer cores.",
      detailedExplanation: "In a 3-stage pipeline (e.g., ARM7), the stages are Fetch (read instruction from memory), Decode (figure out what the instruction does), and Execute (perform the math/logic and write back). While instruction 1 is executing, instruction 2 is being decoded, and instruction 3 is being fetched. This yields an average throughput of one instruction per clock cycle. A 5-stage pipeline (e.g., ARM9) splits this further: Fetch, Decode, Execute, Memory (for load/store), and Write-back. Deeper pipelines allow for higher clock frequencies but incur a higher penalty when a branch instruction causes a pipeline flush.",
      interviewExplanation: "I'd explain it like a car wash. Fetch is spraying soap, Decode is scrubbing, Execute is drying. You don't wait for one car to finish completely before starting the next. I would also note the downside: if a branch occurs (the car changes its mind), the pipeline must be cleared (flushed), wasting cycles.",
      keyPoints: ["3-stage: Fetch, Decode, Execute.", "Increases throughput (instructions per cycle).", "Deeper pipelines allow higher clock speeds.", "Branch instructions cause pipeline flushes (penalties)."],
      example: "Due to a 3-stage pipeline, the PC (R15) always points to the instruction being fetched, which is Address + 8 bytes ahead of the executing instruction.",
      followUpQuestions: ["Why does the PC read 'Current Address + 8' in ARM?", "What is branch prediction?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "The 'PC = current + 8' quirk is a very common trick question. It happens because by the time an instruction executes, the Fetch stage is already 2 instructions (2 * 4 bytes) ahead."
  },
  {
    id: "micro-37",
    topicId: "microcontrollers",
    title: "What is the function of the Barrel Shifter in ARM?",
    answer: {
      shortAnswer: "The barrel shifter is a hardware circuit in the ARM ALU that can shift or rotate the second operand of an instruction by any number of bits in a single clock cycle before the main ALU operation.",
      detailedExplanation: "In many architectures, shifting data requires separate shift instructions, which take extra cycles. ARM integrates a barrel shifter directly into the data path of the ALU. When an instruction like ADD is executed, the second operand can be logically shifted left/right, arithmetically shifted, or rotated before the addition happens—all in the same single cycle. For example, ADD R0, R1, R2, LSL #2 means 'Shift R2 left by 2 bits, add it to R1, and store in R0'.",
      interviewExplanation: "I would describe it as a 'free' operation. You get a shift or multiply-by-power-of-2 operation bundled into normal ALU instructions without costing any extra clock cycles. This makes ARM incredibly efficient at math involving arrays, graphics, or signal processing.",
      keyPoints: ["Shifts operand before ALU operation.", "Executes in a single clock cycle.", "Supports LSL, LSR, ASR, ROR.", "Improves code density and execution speed."],
      example: "Multiplying a register by 5 can be done in one instruction: ADD R0, R1, R1, LSL #2 (R1 + R1*4).",
      followUpQuestions: ["What is the difference between Logical Shift Right (LSR) and Arithmetic Shift Right (ASR)?", "Can the barrel shifter shift by a variable amount held in a register?"]
    },
    difficulty: "Advanced",
    badges: ["Coding", "Important"],
    interviewTip: "Using the multiply-by-5 example (ADD R0, R1, R1, LSL #2) is the perfect way to demonstrate the power of the barrel shifter in an interview."
  },
  {
    id: "micro-38",
    topicId: "microcontrollers",
    title: "How does Conditional Execution work in ARM?",
    answer: {
      shortAnswer: "In classic 32-bit ARM mode, almost every instruction can be conditionally executed based on the state of the CPSR flags, eliminating the need for many branch instructions.",
      detailedExplanation: "The top 4 bits of a 32-bit ARM instruction encode a condition code (like EQ for equal, NE for not equal, GT for greater than). The CPU checks the CPSR flags (Z, C, N, V) against this condition before executing. If the condition is false, the instruction passes through the pipeline as a NOP (No Operation), taking one cycle but avoiding a pipeline flush. This allows for very compact if-else blocks without using branch instructions, which are costly due to pipeline flushing.",
      interviewExplanation: "I would highlight this as one of ARM's most unique features. Instead of writing 'Compare, Jump-if-Zero to Label, Do Math, Label:', in ARM you just write 'Compare, Do Math-if-Zero'. It removes branches, keeps the pipeline full, and makes the code smaller and faster.",
      keyPoints: ["Top 4 bits of instruction hold condition code.", "Avoids branch instructions and pipeline flushes.", "Conditions depend on CPSR flags (Z, C, N, V).", "If condition fails, instruction acts as a NOP."],
      example: "ADDEQ R0, R1, R2 means 'Add R1 and R2 only if the Zero flag is set (Equal)'",
      followUpQuestions: ["Is conditional execution available in Thumb state?", "Why is avoiding branch instructions beneficial?"]
    },
    difficulty: "Advanced",
    badges: ["Coding", "Important"],
    interviewTip: "Note that while classic ARM has this, the newer Cortex-M (Thumb-2) relies more on the IT (If-Then) block instruction to achieve conditional execution."
  },
  {
    id: "micro-39",
    topicId: "microcontrollers",
    title: "What are exceptions in ARM architecture?",
    answer: {
      shortAnswer: "Exceptions are events that cause the ARM processor to stop normal execution and jump to a specific handler routine. Interrupts are a subset of exceptions.",
      detailedExplanation: "ARM defines several exception types: Reset (power up), Undefined Instruction (CPU hits an invalid opcode), Software Interrupt (SWI/SVC, used to call OS functions), Prefetch Abort (memory access violation during fetch), Data Abort (memory access violation during data read/write), IRQ (normal external interrupt), and FIQ (fast external interrupt). When an exception occurs, the CPU automatically saves the CPSR to the SPSR of the exception mode, saves the PC to the banked LR, changes to the exception mode, disables further interrupts, and jumps to a fixed address in the Vector Table.",
      interviewExplanation: "I would define an exception as any disruption to the normal program flow. I'd walk through the hardware's automated response: it saves state (CPSR to SPSR, PC to LR), elevates privileges by changing modes, and jumps to the exception vector table. The programmer is responsible for writing the handler at that vector address.",
      keyPoints: ["Exceptions include Reset, Aborts, SWI, IRQ, FIQ.", "CPU automatically saves CPSR and PC.", "CPU changes to privileged modes.", "Jumps to fixed Vector Table addresses."],
      example: "A program trying to write to read-only memory will trigger a Data Abort exception.",
      followUpQuestions: ["What is the difference between Prefetch Abort and Data Abort?", "Where is the Exception Vector Table usually located?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Make sure to distinguish between hardware interrupts (IRQ/FIQ) and software/internal exceptions (SWI/Aborts)."
  },
  {
    id: "micro-40",
    topicId: "microcontrollers",
    title: "Explain the AMBA Bus architecture used in ARM.",
    answer: {
      shortAnswer: "AMBA (Advanced Microcontroller Bus Architecture) is an open standard, on-chip interconnect specification for the connection and management of functional blocks in a System-on-Chip (SoC).",
      detailedExplanation: "ARM designed AMBA to allow different components (CPU cores, memory controllers, peripherals) to communicate efficiently on a single chip. It primarily consists of AHB (Advanced High-performance Bus) and APB (Advanced Peripheral Bus). AHB is a high-speed, high-bandwidth bus for connecting the CPU, RAM, and DMA. APB is a lower-speed, lower-power bus connected to AHB via a bridge, used for slow peripherals like UART, Timers, and GPIO. AXI (Advanced eXtensible Interface) is a newer, higher-performance protocol used in modern high-end ARM cores.",
      interviewExplanation: "I'd explain AMBA as the 'highway system' inside the chip. AHB is the high-speed freeway connecting the CPU and memory. APB are the local roads for slow peripherals like buttons and serial ports. A bridge connects them so the fast CPU doesn't get slowed down talking to slow hardware directly.",
      keyPoints: ["AMBA is a bus standard for SoCs.", "AHB: High-speed bus for CPU and memory.", "APB: Low-speed bus for peripherals.", "Bridge connects AHB to APB to optimize performance."],
      example: "The CPU reads data from RAM over the AHB, but writes to a GPIO port over the APB.",
      followUpQuestions: ["Why use two different buses (AHB and APB)?", "What is an AHB-APB Bridge?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Understanding the separation of high-speed memory access (AHB) and low-speed peripheral access (APB) is key to explaining modern SoC design."
  }
];
