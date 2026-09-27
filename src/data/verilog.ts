import type { Question } from '../types';

export const verilogQuestions: Question[] = [
  {
    id: "verilog-1",
    topicId: "verilog",
    title: "What is the difference between blocking (=) and non-blocking (<=) assignments?",
    answer: {
      shortAnswer: "Blocking assignments execute sequentially, whereas non-blocking assignments execute concurrently at the end of the time step.",
      detailedExplanation: "In Verilog, blocking assignments (=) block the execution of the next statement until the current assignment is evaluated and updated. They are typically used for modeling combinational logic. Non-blocking assignments (<=) evaluate the right-hand side expressions for all statements in the block concurrently, but assignment to the left-hand side is deferred until the end of the time step. They are used for modeling sequential logic to prevent race conditions.",
      interviewExplanation: "I would explain that the primary difference lies in scheduling. Blocking assignments happen immediately in the sequence they are written, which is why we use them for combinational logic. Non-blocking assignments schedule the update for the end of the current simulation cycle, meaning all right-hand side values are read before any left-hand side values are updated. This correctly models the parallel behavior of flip-flops in sequential circuits.",
      keyPoints: [
        "Blocking (=) for combinational logic.",
        "Non-blocking (<=) for sequential logic.",
        "Blocking evaluates and assigns immediately.",
        "Non-blocking evaluates immediately but assigns at the end of the time step."
      ],
      example: "always @(posedge clk) begin\n  q1 <= d; // Non-blocking: q1 and q2 update simultaneously\n  q2 <= q1;\nend",
      followUpQuestions: ["What happens if you mix blocking and non-blocking assignments in the same always block?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "Always emphasize the hardware implications: blocking infers cascaded logic (combinational), while non-blocking infers parallel registers (sequential)."
  },
  {
    id: "verilog-2",
    topicId: "verilog",
    title: "What is the difference between 'wire' and 'reg' data types?",
    answer: {
      shortAnswer: "'wire' is used to connect elements and models a physical wire, while 'reg' is a variable used to store values in procedural blocks.",
      detailedExplanation: "The 'wire' (net) data type represents a physical connection between hardware components. It cannot store a value and must be continuously driven by an 'assign' statement or a module output. The 'reg' (register) data type is a variable that holds its value until a new value is assigned. Despite its name, 'reg' does not necessarily infer a hardware flip-flop; it can synthesize into combinational logic if used inside an always block that lacks a clock edge.",
      interviewExplanation: "A 'wire' is simply a node that passes a signal from one point to another and is driven by continuous assignments. A 'reg' is a procedural data type used inside 'initial' or 'always' blocks. It retains its value between assignments. A common misconception is that 'reg' always becomes a flip-flop in hardware; it only becomes a flip-flop if inferred within a clocked always block.",
      keyPoints: [
        "Wire is driven by continuous assignments (assign).",
        "Reg is driven by procedural assignments (always, initial).",
        "Reg does not always imply a hardware register/flip-flop."
      ],
      followUpQuestions: ["Can you connect a wire to the output of a procedural block?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Clarify that 'reg' is a Verilog simulation semantic, not strictly a hardware flip-flop."
  },
  {
    id: "verilog-3",
    topicId: "verilog",
    title: "How do you avoid inferring unwanted latches in combinational logic?",
    answer: {
      shortAnswer: "Unwanted latches are avoided by ensuring all possible conditions in if-else and case statements have explicit assignments.",
      detailedExplanation: "In Verilog, a latch is inferred when a variable is not assigned a value in all possible execution paths of a combinational 'always' block. If an 'if' statement lacks an 'else' branch, or a 'case' statement lacks a 'default' branch (and not all cases are covered), the synthesizer assumes the variable must retain its previous value, thus inferring a level-sensitive latch. To prevent this, every variable driven in a combinational block must be assigned a value in all conditions.",
      interviewExplanation: "To prevent inferred latches in combinational logic, I make sure to cover all possible branches in my control structures. For 'if' statements, this means always including an 'else' block. For 'case' statements, I always include a 'default' case. Another good practice is to initialize all variables at the top of the combinational always block before any conditional logic.",
      keyPoints: [
        "Latches are inferred when an output is not assigned in all conditions.",
        "Always include 'else' in 'if-else' structures.",
        "Always include 'default' in 'case' statements.",
        "Default assignments at the beginning of the block can prevent latches."
      ],
      example: "always @(*) begin\n  y = 1'b0; // Default assignment prevents latch\n  if (enable) y = a;\nend",
      followUpQuestions: ["Why are unwanted latches problematic in FPGA designs?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Coding", "Practical"],
    interviewTip: "Mention that initial default assignments at the start of an always @(*) block are a foolproof way to prevent latches."
  },
  {
    id: "verilog-4",
    topicId: "verilog",
    title: "What is the difference between logical equality (==) and case equality (===)?",
    answer: {
      shortAnswer: "Logical equality (==) returns 'x' if any operand contains 'x' or 'z', while case equality (===) performs a bit-by-bit comparison including 'x' and 'z'.",
      detailedExplanation: "The logical equality operator (==) compares two values, but if any bit in either operand is Unknown (x) or High-Impedance (z), the result of the comparison is 'x' (unknown). The case equality operator (===) compares all states strictly (0, 1, x, z). It returns 1 (true) only if the operands match exactly bit-for-bit, including any 'x' or 'z' states, and returns 0 (false) otherwise.",
      interviewExplanation: "I would explain that '==' is used for standard hardware logic comparisons where we only care about 1s and 0s. If it encounters an 'x' or 'z', it can't definitively evaluate the logic, so it returns 'x'. On the other hand, '===' is typically used in testbenches to verify exact states, including high-impedance or unknown states, because it checks for an exact literal match.",
      keyPoints: [
        "== is synthesizable; === is generally non-synthesizable.",
        "== returns 'x' if operands have 'x' or 'z'.",
        "=== strictly matches 0, 1, x, and z, returning only 1 or 0."
      ],
      followUpQuestions: ["Is the === operator synthesizable?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Highlight that === is almost exclusively used in verification/simulation environments."
  },
  {
    id: "verilog-5",
    topicId: "verilog",
    title: "Differentiate between Moore and Mealy FSMs.",
    answer: {
      shortAnswer: "In a Moore FSM, outputs depend only on the current state. In a Mealy FSM, outputs depend on both the current state and current inputs.",
      detailedExplanation: "A Moore state machine's outputs are strictly a function of the current state of the machine. This generally results in more states but safer, synchronous outputs. A Mealy state machine's outputs are a function of both the current state and the immediate asynchronous inputs. This can result in fewer states and faster responses (outputs change in the same cycle as inputs), but can also create asynchronous glitching on the outputs if inputs glitch.",
      interviewExplanation: "A Moore machine derives its outputs purely from its state registers. This makes the outputs stable and synchronized to the clock. A Mealy machine calculates its outputs combinationally from both the state and the current inputs. While Mealy machines can be faster and require fewer states, their outputs can glitch if the inputs bounce, which might require registering the outputs and adding a cycle of latency.",
      keyPoints: [
        "Moore: Output = f(State).",
        "Mealy: Output = f(State, Inputs).",
        "Mealy machines often have fewer states.",
        "Moore machines have safer, glitch-free outputs."
      ],
      followUpQuestions: ["When would you choose a Mealy machine over a Moore machine in a design?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Be prepared to draw block diagrams of both FSM types during a white-boarding session."
  },
  {
    id: "verilog-6",
    topicId: "verilog",
    title: "Explain the difference between $display, $monitor, and $strobe.",
    answer: {
      shortAnswer: "$display prints immediately, $strobe prints at the end of the current time step, and $monitor prints whenever any of its arguments change.",
      detailedExplanation: "$display executes and prints its arguments at the exact moment it is encountered in the procedural flow. $strobe also executes where it is placed, but it defers the actual printing until the very end of the current simulation time step (after all non-blocking assignments have settled). $monitor sets up a background process that prints its arguments at the end of any time step in which at least one of its arguments has changed value.",
      interviewExplanation: "In a testbench, I use $display for immediate debug printing, similar to 'printf' in C. I use $strobe when I want to print values after all non-blocking assignments (like flip-flop updates) have evaluated in the current clock cycle, ensuring I don't print a pre-updated value. I use $monitor to continuously track variables over time; it automatically prints whenever a tracked signal changes without me needing to call it repeatedly.",
      keyPoints: [
        "$display: Immediate execution.",
        "$strobe: End of time step execution.",
        "$monitor: Continuous monitoring, prints on change."
      ],
      followUpQuestions: ["Can you have multiple $monitor statements active at the same time?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Relate $strobe to non-blocking assignments to show deep understanding of simulation event queues."
  },
  {
    id: "verilog-7",
    topicId: "verilog",
    title: "What are tasks and functions in Verilog? How do they differ?",
    answer: {
      shortAnswer: "Functions execute in zero simulation time and return a single value. Tasks can consume simulation time and can have multiple outputs.",
      detailedExplanation: "Functions are meant to model purely combinational logic; they cannot contain time-controlling statements (like # delays, @ event controls, or wait statements), they must have at least one input, and they return exactly one value. Tasks are more flexible; they can contain time delays, can have zero or more arguments of any type (input, output, inout), and do not return a value by their name, but rather through output arguments.",
      interviewExplanation: "I use functions for reusable combinational logic or calculations that must execute in a single simulation step. Because they can't consume time, they are safe for synthesis if written properly. I use tasks primarily in testbenches for grouping sequence operations, like a 'read_register' task, because tasks can consume time, wait for clock edges, and drive multiple output signals.",
      keyPoints: [
        "Functions execute in zero time; Tasks can consume time.",
        "Functions return a single value; Tasks do not return a value (use outputs).",
        "Functions cannot call tasks; Tasks can call functions and other tasks.",
        "Functions must have at least one input."
      ],
      followUpQuestions: ["Can a task be synthesized into hardware?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Coding"],
    interviewTip: "Highlight that functions are often synthesizable whereas tasks containing delays are strictly for simulation."
  },
  {
    id: "verilog-8",
    topicId: "verilog",
    title: "How do you model a synchronous vs. asynchronous reset D Flip-Flop?",
    answer: {
      shortAnswer: "A synchronous reset is evaluated only on the clock edge, while an asynchronous reset is included in the always block's sensitivity list.",
      detailedExplanation: "In Verilog, the sensitivity list determines when the always block triggers. For an asynchronous reset, the reset signal is included in the sensitivity list (e.g., `always @(posedge clk or posedge rst)`). If the reset goes high, the block executes immediately, independent of the clock. For a synchronous reset, the reset signal is omitted from the sensitivity list (`always @(posedge clk)`). The reset condition is only checked when the clock edge occurs.",
      interviewExplanation: "To model an asynchronous reset, I write `always @(posedge clk or negedge rst_n)`. Inside the block, the first `if` statement checks the reset. Because the reset is in the sensitivity list, the flip-flop clears the moment `rst_n` drops. For a synchronous reset, I write `always @(posedge clk)`. The reset is still checked in the first `if` statement, but it only takes effect on the next rising edge of the clock.",
      keyPoints: [
        "Asynchronous: Reset in sensitivity list.",
        "Synchronous: Reset NOT in sensitivity list.",
        "Async resets take effect immediately.",
        "Sync resets wait for the active clock edge."
      ],
      example: "// Asynchronous\nalways @(posedge clk or posedge rst) if (rst) q<=0; else q<=d;\n\n// Synchronous\nalways @(posedge clk) if (rst) q<=0; else q<=d;",
      followUpQuestions: ["What are the pros and cons of using synchronous vs asynchronous resets in ASIC design?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Important"],
    interviewTip: "Write out the code for both snippets if given a whiteboard. It clearly demonstrates practical coding ability."
  },
  {
    id: "verilog-9",
    topicId: "verilog",
    title: "What is the concept of 'delta delay' in Verilog simulation?",
    answer: {
      shortAnswer: "A delta delay is an infinitesimally small unit of time used by simulators to order events that occur in the same simulation time step.",
      detailedExplanation: "In hardware, concurrent events have causal relationships. In a Verilog simulator, multiple events can be scheduled for the exact same simulation time (e.g., 10ns). To evaluate causality without advancing simulation time, the simulator uses 'delta cycles' or 'delta delays'. Each evaluation of an active event and subsequent scheduling of a new event at the same time step advances the simulator by one delta cycle. Simulation time only advances when the current delta queue is completely empty.",
      interviewExplanation: "A delta delay is a simulator concept used to maintain the correct sequence of operations that happen concurrently at a given timestamp. For example, if a clock rises at 10ns, and a combinational logic block relies on a flip-flop output that updates on that clock, the simulator uses delta cycles to first update the flip-flop, then evaluate the combinational logic, all while keeping the simulation time at exactly 10ns.",
      keyPoints: [
        "Delta delay does not advance real simulation time.",
        "Used to resolve ordering of zero-delay concurrent events.",
        "Ensures correct causal relationships in event-driven simulation."
      ],
      followUpQuestions: ["How do delta cycles relate to the difference between blocking and non-blocking assignments?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Explain delta delays as a mechanism of the 'event queue' in event-driven simulators."
  },
  {
    id: "verilog-10",
    topicId: "verilog",
    title: "Explain the difference between continuous assignment and procedural assignment.",
    answer: {
      shortAnswer: "Continuous assignments use 'assign' to drive 'wire' types constantly. Procedural assignments occur inside 'always' or 'initial' blocks to drive 'reg' types.",
      detailedExplanation: "Continuous assignments are used to model combinational logic and are placed outside procedural blocks. They use the `assign` keyword and continuously drive a value onto a net (wire). Whenever a variable on the right-hand side changes, the assignment is re-evaluated. Procedural assignments are enclosed within `initial` or `always` blocks. They execute sequentially based on specific triggers (events or time) and are used to assign values to variables (`reg`, `integer`, etc.), holding that value until the next procedural assignment.",
      interviewExplanation: "Continuous assignments are like physical wires tying combinational logic gates together; they continuously evaluate and drive their left-hand side whenever inputs change. I use them for simple logic. Procedural assignments happen inside `always` blocks and only execute when the block's sensitivity list is triggered. They are necessary for creating sequential elements like flip-flops or complex combinational logic using if/case statements.",
      keyPoints: [
        "Continuous: uses 'assign', drives 'wire', evaluates on RHS change.",
        "Procedural: inside 'always'/'initial', drives 'reg', evaluates on block trigger."
      ],
      followUpQuestions: ["Can you have a continuous assignment inside an always block?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Keep it simple: continuous = wires (assign outside blocks), procedural = registers (inside always/initial)."
  },
  {
    id: "verilog-11",
    topicId: "verilog",
    title: "What is the purpose of the `timescale directive?",
    answer: {
      shortAnswer: "The `timescale directive specifies the unit of time and the precision (resolution) for delays in a Verilog simulation.",
      detailedExplanation: "The syntax is ``timescale <time_unit> / <time_precision>`. The time unit defines the base measurement for delay values (e.g., `#5` means 5 time units). The time precision specifies how accurately the simulator should track time and round delays. For example, ``timescale 1ns / 1ps` means delays are in nanoseconds, but the simulator resolves events down to the picosecond level.",
      interviewExplanation: "I use ``timescale` to tell the simulator how to interpret delay values. If I write ``timescale 1ns / 10ps`, and later in my code write `#2.555`, the delay is 2.555 ns. However, because the precision is 10ps (0.01 ns), the simulator will round the delay to 2.56 ns. It's crucial to align timescales across testbench modules to prevent timing mismatches.",
      keyPoints: [
        "Syntax: ``timescale time_unit / time_precision`.",
        "Precision must be equal to or smaller than the time unit.",
        "Dictates how '# delays' are interpreted by the simulator."
      ],
      example: "`timescale 1ns / 1ps\n// #1 means 1ns. #1.001 is resolvable because of 1ps precision.",
      followUpQuestions: ["What happens if the time precision is larger than the time unit?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Emphasize that finer precision slows down simulation speed, so it shouldn't be excessively small."
  },
  {
    id: "verilog-12",
    topicId: "verilog",
    title: "What are generate blocks and when would you use them?",
    answer: {
      shortAnswer: "Generate blocks allow dynamic creation of module instances, variables, and procedural blocks during elaboration based on parameters.",
      detailedExplanation: "The `generate` and `endgenerate` keywords, along with `genvar`, allow designers to use loop (`for`) or conditional (`if`, `case`) statements to instantiate multiple hardware modules or create conditional logic at compile (elaboration) time. This is highly useful for creating parameterized designs like variable-width adders, memory arrays, or conditionally including debug logic.",
      interviewExplanation: "I use generate blocks when I need to create scalable, parameterized IP. For example, instead of manually typing out 32 instances of a full adder to make a 32-bit ripple carry adder, I use a `generate for` loop. The synthesis tool unrolls this loop and creates the exact hardware needed based on the parameter provided. It makes the code much cleaner and highly reusable.",
      keyPoints: [
        "Evaluated during elaboration, not at runtime.",
        "Uses 'genvar' for loop variables.",
        "Allows instantiation of multiple modules easily.",
        "Enables conditional synthesis of code blocks."
      ],
      example: "genvar i;\ngenerate\n  for (i=0; i<WIDTH; i=i+1) begin : my_loop\n    my_module inst (.in(a[i]), .out(b[i]));\n  end\nendgenerate",
      followUpQuestions: ["Can a genvar be modified at runtime during a simulation?"]
    },
    difficulty: "Intermediate",
    badges: ["Coding", "Practical", "Important"],
    interviewTip: "Compare generate loops in Verilog to macros or template meta-programming in C++—they execute at compile-time."
  },
  {
    id: "verilog-13",
    topicId: "verilog",
    title: "Explain the difference between case, casex, and casez.",
    answer: {
      shortAnswer: "case strictly compares 0,1,x,z; casez treats 'z' as don't-care; casex treats both 'x' and 'z' as don't-cares.",
      detailedExplanation: "`case` performs an exact match, including 'x' and 'z' states. `casez` treats high-impedance ('z' or '?') values in the case item or the expression as don't-cares, meaning they match any value. `casex` extends this by treating both unknown ('x') and high-impedance ('z') values as don't-cares. While `casez` is useful for priority encoders, `casex` is generally avoided in synthesis because it can hide unknown ('x') states in simulation, leading to simulation-synthesis mismatches.",
      interviewExplanation: "Standard `case` expects exact matches. If I'm writing a priority encoder, I'll use `casez` because it allows me to use '?' for bits I don't care about, which synthesizes cleanly into priority logic. I generally avoid `casex` completely. Treating 'x' as a don't-care is dangerous because if an unexpected 'x' propagates into the logic during simulation, `casex` will mask the bug, whereas real hardware might fail.",
      keyPoints: [
        "case: exact match (0, 1, x, z).",
        "casez: 'z' and '?' are don't-cares.",
        "casex: 'x', 'z', and '?' are don't-cares.",
        "casex is dangerous for synthesis due to masking 'x' states."
      ],
      followUpQuestions: ["Why is it a best practice to use '?' instead of 'z' in casez statements?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Strongly advise against using casex. Mentioning the danger of masking 'x' bugs shows maturity as an ASIC designer."
  },
  {
    id: "verilog-14",
    topicId: "verilog",
    title: "What is the difference between synchronous and asynchronous FIFOs?",
    answer: {
      shortAnswer: "Synchronous FIFOs use a single clock for both reading and writing. Asynchronous FIFOs use different, uncoupled clocks for reading and writing.",
      detailedExplanation: "A Synchronous FIFO operates within a single clock domain, making pointer comparison for full/empty generation straightforward. An Asynchronous FIFO passes data between two different clock domains. Because the read and write pointers are updated in different clock domains, they must be converted to Gray code and synchronized through multi-flop synchronizers before being compared to determine the full/empty status, preventing metastability.",
      interviewExplanation: "If data is produced and consumed in the same clock domain, I use a synchronous FIFO. It's simpler because we can directly compare binary read and write pointers. However, if data crosses clock domains, an asynchronous FIFO is required. The key challenge there is metastability when comparing pointers. We solve this by converting pointers to Gray code—so only one bit changes at a time—and passing them through 2-stage synchronizers before comparing them for full/empty flags.",
      keyPoints: [
        "Sync FIFO: Single clock.",
        "Async FIFO: Two different clocks (CDC).",
        "Async FIFOs require Gray code pointers and synchronizers.",
        "Used for safely crossing clock domains."
      ],
      followUpQuestions: ["Why must pointers be converted to Gray code in an asynchronous FIFO?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "This is a classic interview question. Always mention Gray codes and synchronizers when discussing Async FIFOs."
  },
  {
    id: "verilog-15",
    topicId: "verilog",
    title: "What is Clock Domain Crossing (CDC) and how do you handle it for a single bit?",
    answer: {
      shortAnswer: "CDC occurs when a signal travels between two asynchronous clock domains. For a single bit, it is handled using a multi-flop synchronizer.",
      detailedExplanation: "When a signal generated in one clock domain is sampled in an asynchronous clock domain, it violates setup and hold times, leading to metastability—where the flip-flop output hovers at an undefined voltage level. To resolve this for single-bit control signals, a 2-stage (or 3-stage) flip-flop synchronizer is used. The signal is clocked through two back-to-back flip-flops in the receiving domain, giving the metastable signal time to settle to a valid logic level before being used.",
      interviewExplanation: "CDC is a major source of bugs in chip design. If a signal crosses domains without synchronization, it can cause metastability, breaking the logic. For a slow-changing, single-bit signal, the standard solution is a 2-flop synchronizer. I'd place two D flip-flops in series, clocked by the destination clock. The first flop might go metastable, but it has a full clock cycle to resolve to a 0 or 1 before the second flop catches it.",
      keyPoints: [
        "CDC causes metastability due to setup/hold violations.",
        "Single-bit signals are synchronized using a 2-flop (or 3-flop) synchronizer.",
        "Signal must be stable for longer than the destination clock period."
      ],
      followUpQuestions: ["How do you handle CDC for a multi-bit bus?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Important", "Practical"],
    interviewTip: "Never say a 2-flop synchronizer 'prevents' metastability; it only 'resolves' it to a stable state (MTBF) before the logic uses it."
  },
  {
    id: "verilog-16",
    topicId: "verilog",
    title: "Explain Setup time and Hold time.",
    answer: {
      shortAnswer: "Setup time is the minimum time data must be stable BEFORE the clock edge. Hold time is the minimum time data must remain stable AFTER the clock edge.",
      detailedExplanation: "For a sequential element like a flip-flop to reliably capture data, the input data signal must be held steady for a specific window around the active clock edge. Setup time (Tsu) is the time interval before the clock edge where data must be stable. Hold time (Th) is the time interval after the clock edge where data must remain stable. If either is violated, the flip-flop may capture the wrong value or enter a metastable state.",
      interviewExplanation: "I like to think of a flip-flop like a camera taking a picture of a moving object. Setup time is making sure the object is still before the shutter opens, and hold time is making sure the object stays still while the shutter is closing. If data changes within the setup-hold window, we get a setup or hold violation. Setup violations are usually fixed by slowing down the clock or optimizing logic, while hold violations are fixed by adding delay buffers to the data path.",
      keyPoints: [
        "Setup Time: Stability required before clock edge.",
        "Hold Time: Stability required after clock edge.",
        "Violations lead to metastability.",
        "Setup is dependent on clock frequency; hold is generally not."
      ],
      followUpQuestions: ["How does clock skew affect setup and hold timing margins?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "Be ready to write down the setup and hold equations: Tclk >= Tcq + Tcomb + Tsu and Tcq + Tcomb >= Thold."
  },
  {
    id: "verilog-17",
    topicId: "verilog",
    title: "What is a parameter and how is it different from localparam?",
    answer: {
      shortAnswer: "A parameter can be overridden during module instantiation, while a localparam is internal to the module and cannot be overridden.",
      detailedExplanation: "Parameters are constants defined within a module that allow for design reuse and scalability. Their values can be overridden from a higher-level module using parameter overriding (`#()` syntax or `defparam`). Localparams (local parameters) are strictly internal constants. They are used for state machine encoding or local constant definitions and cannot be modified by parent modules, providing protection against accidental overrides.",
      interviewExplanation: "I use `parameter` when I want the user of my module to configure it, like setting the width of an ALU. I use `localparam` for constants that belong strictly to the internal workings of the module, such as FSM state encodings or internal fixed offsets. This ensures that a top-level module doesn't accidentally overwrite a critical internal state definition.",
      keyPoints: [
        "parameter: Configurable, can be overridden.",
        "localparam: Fixed, internal, cannot be overridden.",
        "Use localparam for FSM states."
      ],
      followUpQuestions: ["What are the two ways to override a parameter during module instantiation?"]
    },
    difficulty: "Beginner",
    badges: ["Coding"],
    interviewTip: "Always recommend localparam for FSM states to show adherence to safe coding standards."
  },
  {
    id: "verilog-18",
    topicId: "verilog",
    title: "How do you swap the contents of two registers without a temporary variable?",
    answer: {
      shortAnswer: "By using concurrent non-blocking assignments inside a clocked always block.",
      detailedExplanation: "In software (C/C++), swapping two variables usually requires a temporary variable. In Verilog, non-blocking assignments (`<=`) evaluate the right-hand side simultaneously for all statements before updating the left-hand side. Because of this parallel evaluation, two registers can be swapped directly in a single clock cycle without data loss.",
      interviewExplanation: "This is a great example of hardware parallelism. In a sequential `always` block, if I write `a <= b;` and `b <= a;`, the simulator evaluates the current values of `a` and `b` at the clock edge. It holds these values, and then simultaneously assigns them to the opposite registers. No temporary variable is needed because the non-blocking assignments defer the updates until the evaluation phase is over.",
      keyPoints: [
        "Requires non-blocking assignments (<=).",
        "Takes advantage of concurrent evaluation.",
        "No temporary variable needed."
      ],
      example: "always @(posedge clk) begin\n  a <= b;\n  b <= a;\nend",
      followUpQuestions: ["What would happen if you used blocking (=) assignments for this swap?"]
    },
    difficulty: "Intermediate",
    badges: ["Coding", "Practical"],
    interviewTip: "This question highlights the difference between software sequential execution and hardware parallel execution."
  },
  {
    id: "verilog-19",
    topicId: "verilog",
    title: "What is the difference between full case and parallel case?",
    answer: {
      shortAnswer: "Full case specifies that all possible cases are covered. Parallel case specifies that case items are mutually exclusive.",
      detailedExplanation: "These are synthesis directives (pragmas). A 'full case' directive tells the synthesizer that all necessary conditions are covered in the case statement, meaning it doesn't need to infer latches for unspecified conditions, treating them as don't-cares. A 'parallel case' directive tells the synthesizer that only one case item will be true at any time, allowing it to synthesize faster, non-priority multiplexer logic instead of a priority encoder chain.",
      interviewExplanation: "By default, Verilog synthesizes case statements as priority encoders if conditions overlap. If I know my conditions are mutually exclusive (like a one-hot FSM), I can use a `// synthesis parallel_case` comment to force the tool to build a faster, parallel mux. Similarly, `// synthesis full_case` tells the tool not to worry about unlisted states, preventing latches. However, I use them cautiously, as they can create mismatches between simulation (which ignores comments) and synthesis if my assumptions are wrong.",
      keyPoints: [
        "Full case: Prevents inferred latches.",
        "Parallel case: Prevents inferred priority encoders.",
        "Can cause simulation-synthesis mismatches."
      ],
      followUpQuestions: ["Why are synthesis directives sometimes considered dangerous?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Mention that modern tools often infer these automatically, and using the `unique` and `priority` keywords in SystemVerilog is a safer alternative."
  },
  {
    id: "verilog-20",
    topicId: "verilog",
    title: "What is a race condition in Verilog?",
    answer: {
      shortAnswer: "A race condition occurs when the simulation output depends on the unpredictable order in which concurrent blocks are evaluated.",
      detailedExplanation: "Race conditions happen when two or more concurrent processes (like multiple `always` blocks) read and write to the same shared variable simultaneously at the same simulation time step. Because the Verilog standard does not define the execution order of concurrent blocks, the final value of the variable depends entirely on how the specific simulator schedules the events, leading to unpredictable results.",
      interviewExplanation: "A classic Verilog race condition occurs if you use blocking assignments to write to a variable in one always block, and read that same variable in another always block triggered by the same clock edge. Because we don't know which block evaluates first, the reader might get the old value or the new value. To prevent this, we strictly use non-blocking (`<=`) assignments for sequential logic. This ensures all reads happen before any updates.",
      keyPoints: [
        "Caused by multiple blocks accessing a variable at the same time.",
        "Execution order of concurrent blocks is non-deterministic.",
        "Prevented by using non-blocking assignments for sequential logic."
      ],
      followUpQuestions: ["Can you have a race condition if you use non-blocking assignments exclusively?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Important"],
    interviewTip: "Always tie race conditions back to the blocking vs. non-blocking assignment rule. It shows you understand the 'why' behind the rule."
  },
  {
    id: "verilog-21",
    topicId: "verilog",
    title: "What is the difference between initial and always blocks?",
    answer: {
      shortAnswer: "An 'initial' block runs only once at time zero. An 'always' block loops continuously based on its sensitivity list.",
      detailedExplanation: "An `initial` block begins execution at time 0 and executes its statements exactly once. It is primarily used in testbenches for initialization and stimulus generation. It is not synthesizable in ASIC design (though some FPGA tools use it for power-on values). An `always` block runs continuously. As soon as it reaches its end, it starts again, typically waiting on an event in its sensitivity list. It is the primary construct for modeling actual hardware.",
      interviewExplanation: "In my designs, I use `always` blocks to describe the hardware—either combinational logic with `@(*)` or sequential logic with `@(posedge clk)`. I only use `initial` blocks in my testbenches to set up the starting conditions, like applying a reset pulse or driving a sequence of inputs. Trying to synthesize an `initial` block for an ASIC is generally a mistake because hardware doesn't have a 'time zero' concept outside of a reset sequence.",
      keyPoints: [
        "Initial: Executes once at T=0.",
        "Always: Loops forever.",
        "Initial is mostly for testbenches/simulation.",
        "Always is for hardware synthesis."
      ],
      followUpQuestions: ["Can you synthesize an initial block for an FPGA design?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Be clear on the distinction between simulation constructs (initial) and synthesis constructs (always)."
  },
  {
    id: "verilog-22",
    topicId: "verilog",
    title: "Explain inertial delay and transport delay.",
    answer: {
      shortAnswer: "Inertial delay models physical gates that filter out short glitches. Transport delay models wires passing all signals, regardless of duration.",
      detailedExplanation: "Inertial delay is the default delay model in Verilog. It represents the time it takes for a gate to change its output. If an input pulse is shorter than the gate's inertial delay, the output does not change (the glitch is absorbed). Transport delay models the time it takes a signal to travel down a long wire. It passes all pulses, no matter how short, from input to output with a specified delay.",
      interviewExplanation: "If I'm modeling an actual AND gate with a 5ns delay, I use inertial delay. If a glitch on the input lasts only 2ns, the gate won't have enough energy to flip, and Verilog accurately swallows that glitch. However, if I am modeling a long PCB trace, I use transport delay. The trace will propagate that 2ns glitch all the way to the other end, just delayed by the transmission time. In Verilog, transport delay is explicitly requested using the `reject` or by modeling passing signals.",
      keyPoints: [
        "Inertial delay filters pulses shorter than the delay time.",
        "Transport delay passes all pulses intact.",
        "Inertial = Gates; Transport = Wires."
      ],
      followUpQuestions: ["How do you specify a transport delay in Verilog?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "This is a deep-simulation question. Focus on the physical intuition: gates require sustained energy to switch (inertial), wires just carry voltage waves (transport)."
  },
  {
    id: "verilog-23",
    topicId: "verilog",
    title: "How do you implement a shift register in Verilog?",
    answer: {
      shortAnswer: "By cascading flip-flops using a single always block with non-blocking assignments.",
      detailedExplanation: "A shift register passes data from one stage to the next on every clock cycle. It is implemented in a synchronous `always` block. Data at the input is assigned to the first register, the first register is assigned to the second, and so on. Crucially, non-blocking assignments (`<=`) must be used. If blocking assignments (`=`) are used, the input value would immediately propagate through all registers in a single cycle, turning it into a wire instead of a shift register.",
      interviewExplanation: "To build a 4-bit shift register, I write a synchronous always block. Inside, I assign `shift_reg[3] <= shift_reg[2]`, `shift_reg[2] <= shift_reg[1]`, `shift_reg[1] <= shift_reg[0]`, and `shift_reg[0] <= data_in`. The non-blocking assignments guarantee that all registers sample their inputs simultaneously at the clock edge, effectively shifting the data over by one position.",
      keyPoints: [
        "Must use synchronous always block.",
        "Must use non-blocking (<=) assignments.",
        "Used for serial-to-parallel or parallel-to-serial conversion."
      ],
      example: "always @(posedge clk) begin\n  sr <= {sr[2:0], data_in};\nend",
      followUpQuestions: ["What is a Linear Feedback Shift Register (LFSR) used for?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Practical"],
    interviewTip: "Show the concatenation syntax (e.g., `sr <= {sr[2:0], in}`) as a clean, professional way to write shift registers."
  },
  {
    id: "verilog-24",
    topicId: "verilog",
    title: "What are multidimensional arrays and how are they used in Verilog?",
    answer: {
      shortAnswer: "Multidimensional arrays define memory blocks like RAM or ROM, utilizing packed and unpacked dimensions.",
      detailedExplanation: "In Verilog, arrays can be created from `reg` or `wire` elements. A memory array usually has a vector width (packed dimension) and an array depth (unpacked dimension). For example, `reg [7:0] mem [0:255];` creates a memory array of 256 elements, where each element is 8 bits wide. They are heavily used to model FIFOs, RAMs, and lookup tables.",
      interviewExplanation: "When I need to model a memory block, I use multidimensional arrays. I define the word width first (before the name), and the depth second (after the name). For instance, `reg [31:0] cache_ram [0:1023]` gives me a 1K-word RAM, 32 bits wide. In standard Verilog-2001, you cannot access an entire row of a multi-dimensional array at once without a loop, though SystemVerilog improves this significantly.",
      keyPoints: [
        "Packed dimension: width of the word (before the variable name).",
        "Unpacked dimension: depth of the array (after the variable name).",
        "Used for modeling RAM, ROM, and FIFOs."
      ],
      followUpQuestions: ["How do you initialize a memory array from a text file in a testbench?"]
    },
    difficulty: "Intermediate",
    badges: ["Coding"],
    interviewTip: "Clearly distinguish between packed (vector width) and unpacked (array depth) dimensions."
  },
  {
    id: "verilog-25",
    topicId: "verilog",
    title: "How do you read a file in a Verilog testbench?",
    answer: {
      shortAnswer: "Using system tasks $readmemb for binary files or $readmemh for hexadecimal files.",
      detailedExplanation: "Verilog provides system tasks specifically for loading data from text files directly into memory arrays during simulation. `$readmemb(\"file.txt\", mem_array);` reads binary strings (0s and 1s). `$readmemh` does the same for hexadecimal strings. These are typically called inside an `initial` block to preload ROMs or provide large sets of test vectors for a testbench.",
      interviewExplanation: "To initialize a memory model or load test vectors, I define a memory array, say `reg [31:0] test_vectors [0:99]`. In my `initial` block, I call `$readmemh(\"vectors.hex\", test_vectors)`. The simulator reads the text file and populates the array. From there, my testbench can iterate through the array on every clock cycle to stimulate the design.",
      keyPoints: [
        "$readmemb: Reads binary data.",
        "$readmemh: Reads hexadecimal data.",
        "Used inside initial blocks.",
        "Loads data into a pre-defined reg array."
      ],
      followUpQuestions: ["How can you write data from a simulation out to a file?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Coding"],
    interviewTip: "Mention `$fopen`, `$fwrite`, and `$fclose` as follow-ups for writing output data to a file."
  },
  {
    id: "verilog-26",
    topicId: "verilog",
    title: "What is intra-assignment delay vs inter-assignment delay?",
    answer: {
      shortAnswer: "Inter-assignment delay pauses execution before evaluating the RHS. Intra-assignment delay evaluates the RHS immediately but pauses before updating the LHS.",
      detailedExplanation: "Inter-assignment delay (e.g., `#5 a = b;`) waits for 5 time units, then evaluates `b` and assigns it to `a`. Intra-assignment delay (e.g., `a = #5 b;`) evaluates `b` immediately at the current time, schedules the assignment to happen 5 time units in the future, and allows the next procedural statement to execute. Intra-assignment delays with non-blocking assignments (`a <= #5 b;`) are commonly used to model transport delays in testbenches.",
      interviewExplanation: "If I write `#5 a = b`, the simulator stops on that line for 5ns, then reads `b` and writes `a`. This is inter-assignment. If I write `a <= #5 b`, the simulator immediately reads the value of `b`, puts that value in a queue scheduled for 5ns in the future, and immediately moves to the next line of code. This intra-assignment delay accurately models the propagation delay of a flip-flop without holding up the rest of the simulation.",
      keyPoints: [
        "Inter-assignment: Delay before evaluation (`#5 a = b`).",
        "Intra-assignment: Delay after evaluation, before assignment (`a <= #5 b`).",
        "Intra-assignment models hardware transport delay well."
      ],
      followUpQuestions: ["Why shouldn't you use delays in synthesizable RTL code?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Draw a small timing diagram to illustrate when the RHS is evaluated vs when the LHS is updated."
  },
  {
    id: "verilog-27",
    topicId: "verilog",
    title: "What is a sensitivity list and why is it important?",
    answer: {
      shortAnswer: "A sensitivity list defines the signals that trigger the execution of an always block.",
      detailedExplanation: "The sensitivity list is denoted by the `@(...)` syntax after the `always` keyword. For combinational logic, it must contain all input variables read inside the block (`always @(a or b or c)` or `always @(*)`). For sequential logic, it contains clock and asynchronous control edges (`always @(posedge clk)`). If a signal is missed in a combinational sensitivity list, the simulation will not trigger when that signal changes, causing a mismatch between simulation and synthesis (since synthesis tools generally ignore the list and build full combinational logic anyway).",
      interviewExplanation: "The sensitivity list wakes up the `always` block. In Verilog-95, we had to list every single input variable manually. If I forgot one, my simulation would fail to update when that signal changed, but the synthesis tool would still build the gate, causing a fatal simulation/synthesis mismatch. To prevent this, Verilog-2001 introduced `always @(*)`, which automatically infers all read variables, making combinational logic much safer to write.",
      keyPoints: [
        "Triggers the execution of procedural blocks.",
        "Missing signals cause simulation-synthesis mismatches.",
        "Always use @(*) for combinational blocks."
      ],
      followUpQuestions: ["What happens if you put a clock signal in an @(*) block?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Always emphasize the use of `always @(*)` or SystemVerilog's `always_comb` to prevent missing signals."
  },
  {
    id: "verilog-28",
    topicId: "verilog",
    title: "Explain the difference between bitwise and logical operators.",
    answer: {
      shortAnswer: "Bitwise operators perform operations on each bit pair individually. Logical operators evaluate entire vectors as a single true/false boolean.",
      detailedExplanation: "Bitwise operators (`&`, `|`, `^`, `~`) operate on a bit-by-bit basis. If you bitwise AND two 4-bit numbers, the result is a 4-bit number. Logical operators (`&&`, `||`, `!`) treat non-zero operands as Boolean TRUE (1) and zero as FALSE (0). If you logically AND two 4-bit numbers, the result is a single 1-bit value (1 if both numbers are non-zero, 0 otherwise).",
      interviewExplanation: "If `A = 4'b1010` and `B = 4'b0000`. A bitwise AND (`A & B`) results in `4'b0000`. A logical AND (`A && B`) evaluates `A` as true (non-zero) and `B` as false (zero), returning a single bit `1'b0`. Mixing these up is a common bug, especially in `if` conditions where logical operators are usually intended.",
      keyPoints: [
        "Bitwise (&, |, ^): bit-by-bit operation, returns a vector.",
        "Logical (&&, ||, !): boolean evaluation, returns a 1-bit true/false.",
        "Use logical operators for 'if' conditions."
      ],
      followUpQuestions: ["What are reduction operators in Verilog?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Coding"],
    interviewTip: "Give a quick numeric example like A=2, B=1. A&B = 0, but A&&B = 1."
  },
  {
    id: "verilog-29",
    topicId: "verilog",
    title: "What are the logic values in Verilog?",
    answer: {
      shortAnswer: "Verilog uses four logic values: 0, 1, X (unknown), and Z (high impedance).",
      detailedExplanation: "Verilog models digital hardware using a 4-value logic system. `0` is logic low. `1` is logic high. `X` represents an unknown or uninitialized state, often caused by multiple drivers conflicting or an uninitialized memory element. `Z` represents high impedance, where a signal is floating, disconnected, or driven by a tri-state buffer that is turned off.",
      interviewExplanation: "In addition to standard 0 and 1, Verilog tracks `X` and `Z`. Finding an `X` in simulation is critical—it usually means I have an uninitialized register or two gates driving the same wire simultaneously (contention). I use `Z` when modeling bidirectional buses like I2C, where a master and slave take turns driving the wire, and leaving it in `Z` lets the other party drive it.",
      keyPoints: [
        "0: Logic low.",
        "1: Logic high.",
        "X: Unknown state / conflict.",
        "Z: High impedance / floating."
      ],
      followUpQuestions: ["How does an 'X' propagate through logic gates?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Explain how X and Z states help catch design flaws during simulation before actual hardware is built."
  },
  {
    id: "verilog-30",
    topicId: "verilog",
    title: "How do you implement a multiplexer (MUX) in Verilog?",
    answer: {
      shortAnswer: "A MUX can be implemented using a continuous assignment with a ternary operator, an if-else statement, or a case statement.",
      detailedExplanation: "For simple 2-to-1 MUXes, the ternary operator `assign out = sel ? in1 : in0;` is the most concise. For larger MUXes, procedural blocks are used. Inside an `always @(*)` block, an `if-else` structure creates a priority MUX (where the first condition evaluated has priority). A `case` statement evaluates the selection signal and routes the appropriate input. A fully populated case statement synthesizes into an optimized parallel multiplexer without priority logic.",
      interviewExplanation: "For a quick 2:1 mux, I always use the ternary operator because it's clean and readable. If I'm building a 4:1 or 8:1 mux, like for an ALU operand selector, I use a `case` statement inside a combinational `always` block. I always remember to include a `default` case to prevent inferred latches. I avoid using long `if-else if` chains for standard muxes because synthesis tools might infer unnecessary priority routing, slowing down the logic.",
      keyPoints: [
        "Ternary (`? :`): Best for 2:1.",
        "Case statement: Best for 4:1, 8:1, etc.",
        "If-else: Can infer priority routing.",
        "Always include a default case."
      ],
      example: "always @(*) begin\n  case(sel)\n    2'b00: out = a;\n    2'b01: out = b;\n    2'b10: out = c;\n    default: out = d;\n  endcase\nend",
      followUpQuestions: ["What happens if your case statement doesn't cover all possible values of 'sel' and lacks a default?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Practical"],
    interviewTip: "Show versatility by describing multiple ways to write the same logic, highlighting the pros and cons of each."
  },
  {
    id: "verilog-31",
    topicId: "verilog",
    title: "What are compiler directives in Verilog? Give examples.",
    answer: {
      shortAnswer: "Compiler directives instruct the simulation or synthesis tool on how to process the code, starting with a backtick (`).",
      detailedExplanation: "Compiler directives execute before compilation. `\`define` creates macros for text substitution, useful for constants or parameters used globally. `\`include` inserts the contents of another file directly into the code. `\`ifdef`, `\`ifndef`, `\`else`, and `\`endif` allow conditional compilation, meaning parts of the code are only compiled if certain macros are defined. This is heavily used to switch between simulation models and synthesis RTL.",
      interviewExplanation: "I use `\`define` heavily in a global definitions file to store things like opcode values, keeping magic numbers out of my code. Then I use `\`include` at the top of my files to pull those macros in. `\`ifdef` is crucial for creating portable code; I can write an `\`ifdef SIMULATION` block that includes a complex behavioral memory model for testing, and an `\`else` block that instantiates a technology-specific SRAM macro for synthesis.",
      keyPoints: [
        "Always start with a backtick (`).",
        "Processed before actual compilation.",
        "Used for macros (`define), file inclusion (`include), and conditional compilation (`ifdef)."
      ],
      followUpQuestions: ["What is the scope of a `define macro?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Compare `define and `ifdef in Verilog to #define and #ifdef in C/C++."
  },
  {
    id: "verilog-32",
    topicId: "verilog",
    title: "What is a latch and why is it generally avoided in FPGA/ASIC design?",
    answer: {
      shortAnswer: "A latch is a level-sensitive memory element. It is avoided because it complicates timing analysis and can cause unpredictable glitches.",
      detailedExplanation: "Unlike a flip-flop, which captures data only on a clock edge, a latch allows data to flow through transparently whenever its enable signal is active. In synchronous design, Static Timing Analysis (STA) relies on discrete clock edges to calculate setup and hold margins. Because a latch is transparent for half the clock cycle, combinatorial glitches can pass through it, creating race conditions. Unintentional latches usually occur due to poor Verilog coding (missing else/default conditions).",
      interviewExplanation: "We strictly adhere to synchronous design practices using edge-triggered flip-flops. Latches make timing analysis a nightmare because signals borrow time across the transparent phase. Furthermore, most FPGAs do not have dedicated latch hardware; they simulate them using combinational logic loops, which are highly susceptible to routing delays and glitches. Therefore, unless explicitly needed (like in clock gating circuits), finding a latch in synthesis reports is treated as a bug.",
      keyPoints: [
        "Latches are level-sensitive; Flip-flops are edge-sensitive.",
        "Latches break synchronous timing analysis (STA).",
        "Often created by mistake in if/case statements.",
        "Used safely only in specific cases like clock gating."
      ],
      followUpQuestions: ["In what specific scenario is a latch intentionally used by ASIC designers?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Always clarify the difference between an intentional latch (used carefully by experts) and an inferred latch (a coding bug)."
  },
  {
    id: "verilog-33",
    topicId: "verilog",
    title: "Explain the difference between a Task and a Function in Verilog.",
    answer: {
      shortAnswer: "Functions execute in zero time and return one value. Tasks can consume time (delays, waits) and return multiple values via output ports.",
      detailedExplanation: "Functions are designed for pure combinational logic modeling or zero-time calculations. They cannot contain delays (`#`), event controls (`@`), or `wait` statements. They must return exactly one value. Tasks can model both combinational and sequential behavior. They can consume simulation time, wait for clock edges, and have `input`, `output`, and `inout` arguments, acting more like subroutines in software.",
      interviewExplanation: "If I need to calculate a parity bit or reverse the bits of a bus, I write a function. It evaluates instantly and is easily synthesizable. If I'm writing a testbench and want a reusable routine to write data to a bus—which involves applying an address, waiting for a clock edge, driving data, and waiting again—I must use a task, because functions cannot consume simulation time.",
      keyPoints: [
        "Function: Zero time, returns a single value, no delays.",
        "Task: Can consume time, multiple outputs, allows delays.",
        "Functions can only call other functions. Tasks can call tasks and functions."
      ],
      followUpQuestions: ["Can you synthesize a task?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Using tasks in testbenches to create Bus Functional Models (BFMs) is a great practical example."
  },
  {
    id: "verilog-34",
    topicId: "verilog",
    title: "What is a testbench and what are its key components?",
    answer: {
      shortAnswer: "A testbench is a simulation environment written in Verilog used to verify the functionality of a Design Under Test (DUT).",
      detailedExplanation: "A testbench is a top-level module with no ports. It instantiates the RTL module (the DUT). Its primary components include: a clock generator, a reset generator, a stimulus generator (to apply inputs to the DUT), and a monitor/checker (to observe outputs and compare them against expected results). Advanced testbenches use self-checking mechanisms to automatically report pass/fail status.",
      interviewExplanation: "My standard testbench has three main phases. First, an `initial` block to set up the clock and assert the reset. Second, the DUT instantiation. Third, a sequence of stimulus vectors applied to the DUT inputs using delays or waiting on clock edges. I always aim to make my testbenches self-checking, using `$display` and `$error` to automatically verify the DUT outputs against expected values, rather than manually looking at waveforms.",
      keyPoints: [
        "No input/output ports in the top-level module.",
        "Instantiates the DUT.",
        "Generates clock and reset.",
        "Applies stimulus and checks responses."
      ],
      followUpQuestions: ["What is the difference between directed testing and constrained random testing?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Coding"],
    interviewTip: "Highlight the importance of self-checking testbenches; looking at waveforms manually is not scalable."
  },
  {
    id: "verilog-35",
    topicId: "verilog",
    title: "How do you define and use parameters for module instantiation?",
    answer: {
      shortAnswer: "Parameters are constants defined within a module. They are overridden during instantiation using the `#()` syntax.",
      detailedExplanation: "Defining parameters allows modules to be flexible (e.g., variable data widths). In the module definition, `parameter WIDTH = 8;` sets a default. When a parent module instantiates this child module, it can pass a new value, overriding the default. The preferred Verilog-2001 method is named parameter assignment: `my_mod #(.WIDTH(16)) inst_name (.in(a), .out(b));`.",
      interviewExplanation: "I design my RTL to be highly parameterized so it can be reused across different projects. For example, a FIFO module will have parameters for DATA_WIDTH and DEPTH. When I instantiate that FIFO, I use the hash-parentheses syntax to set those parameters. Using named parameter overrides, rather than ordered overrides, prevents bugs if the module's parameter list is ever reordered in the future.",
      keyPoints: [
        "Parameterize widths and depths for reusability.",
        "Override using `#(.PARAM_NAME(value))`.",
        "Better than `defparam` due to readability and scope rules."
      ],
      example: "fifo #(.DEPTH(32), .WIDTH(16)) my_fifo (.clk(clk), ...);",
      followUpQuestions: ["Why is the defparam statement generally discouraged in modern design?"]
    },
    difficulty: "Beginner",
    badges: ["Coding"],
    interviewTip: "Always recommend named parameter instantiation over ordered instantiation."
  },
  {
    id: "verilog-36",
    topicId: "verilog",
    title: "What is clock gating and why is it used?",
    answer: {
      shortAnswer: "Clock gating dynamically turns off the clock to portions of a circuit to save dynamic power.",
      detailedExplanation: "In CMOS circuits, a significant amount of dynamic power is consumed simply by toggling the clock tree and flip-flops, even if the data isn't changing. Clock gating uses an enable signal to stop the clock from reaching a block of logic when it is idle. To avoid glitches on the clock line, a latch-based Integrated Clock Gating (ICG) cell is typically used rather than a simple AND gate.",
      interviewExplanation: "Power consumption is critical. If a large functional block is idle, there's no reason to keep clocking its flip-flops. We use clock gating to AND the clock with an enable signal. However, if we just use a raw AND gate, glitches on the enable signal can cause false clock edges. Synthesis tools automatically insert ICG (Integrated Clock Gating) cells, which use a negative-level latch to ensure the enable signal only changes when the clock is low, guaranteeing a glitch-free gated clock.",
      keyPoints: [
        "Reduces dynamic power consumption.",
        "Stops clock toggling for idle blocks.",
        "Requires specialized ICG cells to prevent clock glitches."
      ],
      followUpQuestions: ["What is the difference between dynamic power and static (leakage) power?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Mentioning the ICG (Integrated Clock Gating) cell shows you understand the physical implementation challenges of gating a clock."
  },
  {
    id: "verilog-37",
    topicId: "verilog",
    title: "Explain the concept of metastability.",
    answer: {
      shortAnswer: "Metastability is an unstable state in a flip-flop caused by setup or hold time violations, where the output hovers between logic 0 and 1.",
      detailedExplanation: "When the input to a flip-flop changes at the exact moment the clock triggers (violating setup or hold margins), the internal transistors cannot decide whether to lock to a 0 or a 1. The output voltage gets stuck midway, or oscillates, for an unpredictable amount of time before eventually resolving to a valid state. If this metastable signal is read by downstream logic, different gates might interpret it differently, causing systemic failure.",
      interviewExplanation: "Metastability is a statistical certainty when dealing with asynchronous inputs or multiple clock domains. If a flip-flop goes metastable, its output is unpredictable. We can't prevent metastability entirely, but we mitigate it using synchronizers. By placing two flip-flops in series, we give the first flip-flop an entire clock cycle to resolve its metastability. The Mean Time Between Failures (MTBF) increases exponentially with this approach.",
      keyPoints: [
        "Caused by setup/hold violations.",
        "Output is neither 0 nor 1.",
        "Causes downstream logic failures.",
        "Resolved using multi-flop synchronizers."
      ],
      followUpQuestions: ["How is MTBF (Mean Time Between Failures) related to metastability?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important", "Conceptual"],
    interviewTip: "Use the analogy of a ball settling at the peak of a hill before rolling down one side to explain the physical nature of metastability."
  },
  {
    id: "verilog-38",
    topicId: "verilog",
    title: "What is a reduction operator in Verilog?",
    answer: {
      shortAnswer: "Reduction operators perform a bitwise operation across all bits of a single vector, returning a single-bit result.",
      detailedExplanation: "Instead of comparing two vectors, reduction operators (`&`, `|`, `^`) collapse a single vector. For example, applying a reduction AND (`&`) to a vector returns 1 only if every bit in the vector is 1. Applying a reduction XOR (`^`) calculates the parity of the vector; it returns 1 if there is an odd number of 1s in the vector.",
      interviewExplanation: "Reduction operators are great for concise coding. If I need to check if a 32-bit bus is exactly zero, instead of writing `if (bus == 32'b0)`, I can use the reduction NOR operator: `if (~|bus)`. Or, if I need to calculate the even parity of a payload for error detection, I just write `assign parity = ^payload;`. It applies the XOR gate across all bits systematically.",
      keyPoints: [
        "Operates on a single vector.",
        "Returns a 1-bit result.",
        "& (AND), | (OR), ^ (XOR parity)."
      ],
      example: "wire [3:0] a = 4'b1010;\nwire result = &a; // evaluates to 0\nwire parity = ^a; // evaluates to 0 (even number of 1s)",
      followUpQuestions: ["How does a reduction XOR operator act as a parity generator?"]
    },
    difficulty: "Beginner",
    badges: ["Coding"],
    interviewTip: "Mentioning the use of XOR for parity generation is a highly practical and expected answer."
  },
  {
    id: "verilog-39",
    topicId: "verilog",
    title: "How do you model an asynchronous active-low reset?",
    answer: {
      shortAnswer: "By including the negative edge of the reset signal in the sensitivity list and checking if it is zero.",
      detailedExplanation: "Active-low resets are standard in the industry because they are less susceptible to noise (a noisy ground is less likely to accidentally pull a high signal low). To model it in Verilog, use `negedge rst_n` in the `always` block sensitivity list. Inside the block, the first condition must be `if (!rst_n)` to clear the register.",
      interviewExplanation: "Most of the chips I design use active-low asynchronous resets, typically named `rst_n`. I write `always @(posedge clk or negedge rst_n)`. This tells the simulator to trigger instantly if the reset drops to 0. Inside, I immediately write `if (!rst_n) q <= 0;`. This combination perfectly infers a hardware flip-flop with a dedicated active-low asynchronous clear pin.",
      keyPoints: [
        "Include `negedge rst_n` in the sensitivity list.",
        "Check `if (!rst_n)` inside the block.",
        "Active-low is preferred in hardware for noise immunity."
      ],
      example: "always @(posedge clk or negedge rst_n) begin\n  if (!rst_n)\n    q <= 1'b0;\n  else\n    q <= d;\nend",
      followUpQuestions: ["Why are active-low resets more common in physical hardware than active-high?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Practical"],
    interviewTip: "Always use `_n` or `_b` suffix for active-low signals to demonstrate good naming conventions."
  },
  {
    id: "verilog-40",
    topicId: "verilog",
    title: "What is the difference between $finish and $stop?",
    answer: {
      shortAnswer: "$finish exits the simulator and returns to the OS. $stop halts the simulation but keeps the simulator running in interactive mode.",
      detailedExplanation: "These are system tasks used in testbenches to control the simulation flow. `$finish` completely terminates the simulation process, closing the simulation tool. `$stop` acts like a breakpoint; it pauses simulation time, allowing the designer to use the simulator's GUI or command line to inspect signals, memory values, and debug the state of the design.",
      interviewExplanation: "In my testbenches, I usually put an `$error` check. If an assertion fails, I call `$stop`. This halts the simulation right at the time of failure, leaving my waveform viewer open so I can debug what went wrong. Once all my test vectors have passed successfully, I print a \"TEST PASSED\" message and call `$finish` to automatically close the simulator and free up the license and terminal.",
      keyPoints: [
        "$finish: completely exits the simulation.",
        "$stop: pauses simulation, enters debug mode.",
        "Use $stop for failures, $finish for test completion."
      ],
      followUpQuestions: ["How do you gracefully end a simulation if the DUT enters an infinite loop?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Relate `$stop` to a debugger breakpoint in software engineering."
  }
];
