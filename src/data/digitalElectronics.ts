import type { Question } from '../types';

export const digitalElectronicsQuestions: Question[] = [
  {
    id: "digital-1",
    topicId: "digital-electronics",
    title: "What are Universal Gates and why are they called so?",
    answer: {
      shortAnswer: "NAND and NOR gates are universal gates because any boolean function can be implemented using only these gates.",
      detailedExplanation: "A universal logic gate is a logic gate that can be used to construct all other logic gates (AND, OR, NOT). The NAND and NOR gates have this property. Using a combination of NANDs (or NORs), we can construct basic gates, multiplexers, and even complex sequential circuits, which simplifies manufacturing to a single type of gate.",
      interviewExplanation: "You should explain that in IC fabrication, it is more economical and easier to produce a single type of gate. By using only NAND or NOR gates, we can build any digital circuit, saving cost and reducing complexity.",
      keyPoints: ["NAND and NOR are universal.", "Can implement AND, OR, NOT.", "Simplifies VLSI manufacturing."],
      example: "A NOT gate is made by tying both inputs of a NAND gate together.",
      followUpQuestions: ["How do you implement an AND gate using only NAND gates?", "How do you implement an XOR gate using NAND gates?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Be ready to draw the schematics for AND, OR, NOT using only NAND gates on a whiteboard."
  },
  {
    id: "digital-2",
    topicId: "digital-electronics",
    title: "What is the difference between Combinational and Sequential circuits?",
    answer: {
      shortAnswer: "Combinational circuits' output depends only on present inputs, whereas sequential circuits' output depends on both present inputs and past states (memory).",
      detailedExplanation: "Combinational logic is a type of digital logic where the output is a pure function of the present input only (e.g., adders, multiplexers). Sequential logic includes memory elements (like flip-flops or latches), meaning its output depends on the sequence of past inputs as well as present inputs (e.g., counters, registers).",
      interviewExplanation: "Highlight the presence of memory or a feedback loop. Combinational circuits have no memory, meaning they are faster but simpler. Sequential circuits require a clock and memory elements to maintain state.",
      keyPoints: ["Combinational: No memory, depends on current input.", "Sequential: Has memory, depends on current input and past state.", "Feedback path present in sequential circuits."],
      example: "Combinational: ALU, MUX. Sequential: RAM, Counters.",
      followUpQuestions: ["Can a combinational circuit have feedback?", "What are synchronous vs asynchronous sequential circuits?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Provide quick, clear examples for both."
  },
  {
    id: "digital-3",
    topicId: "digital-electronics",
    title: "Define Setup Time and Hold Time.",
    answer: {
      shortAnswer: "Setup time is the minimum time the data must be stable before the clock edge. Hold time is the minimum time it must remain stable after the clock edge.",
      detailedExplanation: "For a flip-flop to reliably capture data, the input data signal must be held steady for a period before the active clock edge (Setup Time, Tsu) and continue to be held steady for a period after the clock edge (Hold Time, Th). Violating these times leads to metastability, where the output is unpredictable.",
      interviewExplanation: "When defining these, explain that they are physical properties of the transistors inside the flip-flop. Use an analogy of taking a photograph: the subject must stand still before the camera clicks (setup) and hold the pose until the shutter closes (hold).",
      keyPoints: ["Setup Time (Tsu): Before clock edge.", "Hold Time (Th): After clock edge.", "Violations cause metastability."],
      example: "If a flip-flop has a Tsu of 2ns and Th of 1ns, data must be stable from 2ns before the clock edge to 1ns after.",
      followUpQuestions: ["What happens if setup or hold time is violated?", "How do you fix a setup time violation?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Frequently Asked"],
    interviewTip: "Always mention 'Metastability' when discussing setup and hold time violations."
  },
  {
    id: "digital-4",
    topicId: "digital-electronics",
    title: "What is Metastability?",
    answer: {
      shortAnswer: "Metastability is an unstable state a flip-flop enters when setup or hold times are violated, causing its output to hover between '0' and '1'.",
      detailedExplanation: "When the input data to a flip-flop transitions exactly at the clock edge (violating setup/hold times), the flip-flop may enter a state where its output is neither a valid logic high nor low. It may remain in this state indefinitely or resolve randomly, which can propagate logic errors through the circuit.",
      interviewExplanation: "Explain that metastability cannot be entirely eliminated but its probability can be reduced. Mention that synchronizers (like 2-flip-flop synchronizers) are used when crossing clock domains to allow metastable signals time to settle.",
      keyPoints: ["Occurs due to setup/hold violations.", "Output voltage is caught between logic 0 and 1.", "Resolves probabilistically."],
      example: "An asynchronous button press entering a synchronous circuit can cause metastability.",
      followUpQuestions: ["How do we mitigate metastability?", "What is MTBF in the context of metastability?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Draw a voltage vs. time graph showing a signal stuck at VDD/2 before resolving."
  },
  {
    id: "digital-5",
    topicId: "digital-electronics",
    title: "What is the difference between a Latch and a Flip-Flop?",
    answer: {
      shortAnswer: "A latch is level-sensitive and transparent while enabled, whereas a flip-flop is edge-triggered and only changes state at the clock edge.",
      detailedExplanation: "Latches are basic memory elements that pass inputs to outputs as long as the enable signal is asserted (level-sensitive). Flip-flops are built from latches (typically in a master-slave configuration) and only capture the input on the rising or falling edge of the clock signal.",
      interviewExplanation: "Focus on 'transparent vs edge-triggered'. Latches are faster and use less area, but flip-flops provide predictable timing necessary for synchronous digital design.",
      keyPoints: ["Latch: Level-sensitive.", "Flip-flop: Edge-triggered.", "Flip-flop is often made of two latches."],
      example: "A D-latch passes D to Q when Enable=1. A D-flip-flop updates Q only when Clock goes from 0 to 1.",
      followUpQuestions: ["Why are flip-flops preferred in modern synchronous designs?", "Can you design a D flip-flop using D latches?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Use the terms 'Level-sensitive' and 'Edge-triggered' explicitly."
  },
  {
    id: "digital-6",
    topicId: "digital-electronics",
    title: "What is a Multiplexer (MUX)?",
    answer: {
      shortAnswer: "A multiplexer is a combinational circuit that selects one of many input signals and forwards it to a single output line based on select lines.",
      detailedExplanation: "A MUX, or data selector, uses 'n' select lines to choose between 2^n input lines. It is widely used in digital systems for routing data, and can also be used as a universal logic element to implement any boolean function.",
      interviewExplanation: "Describe it as a digital switch. Mention that an n-to-1 MUX can implement any boolean function of n variables, making it highly versatile in logic design.",
      keyPoints: ["Selects 1 out of 2^n inputs.", "Requires n select lines.", "Acts as a digital switch."],
      example: "A 2-to-1 MUX has inputs A and B. If select line S=0, output is A. If S=1, output is B.",
      followUpQuestions: ["How do you implement an AND gate using a 2:1 MUX?", "How do you build a 4:1 MUX using 2:1 MUXes?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Practical"],
    interviewTip: "Practice implementing basic logic gates using a 2:1 MUX."
  },
  {
    id: "digital-7",
    topicId: "digital-electronics",
    title: "What is 'Race Around Condition' in JK Flip-Flop?",
    answer: {
      shortAnswer: "It occurs in a level-triggered JK flip-flop when J=1 and K=1, causing the output to toggle continuously while the clock is active.",
      detailedExplanation: "In a level-sensitive JK flip-flop, if J=1 and K=1, the output toggles. If the clock pulse width is longer than the propagation delay of the flip-flop, it will toggle multiple times within a single clock pulse, leading to an unpredictable output when the clock goes low.",
      interviewExplanation: "Explain that this happens because the feedback arrives before the clock goes low. To solve this, we use a Master-Slave JK flip-flop or ensure the clock pulse width is shorter than the delay (which is impractical).",
      keyPoints: ["Occurs when J=1, K=1 in level-triggered latch.", "Output toggles multiple times per clock pulse.", "Solved using Master-Slave configuration or edge-triggering."],
      example: "If clock pulse = 20ns and propagation delay = 5ns, the output will toggle 4 times during one clock pulse.",
      followUpQuestions: ["How does a Master-Slave flip-flop prevent the race around condition?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Race around condition is specific to level-triggered logic; make sure to distinguish it from a 'race condition' in timing paths."
  },
  {
    id: "digital-8",
    topicId: "digital-electronics",
    title: "What is Clock Skew?",
    answer: {
      shortAnswer: "Clock skew is the spatial variation in arrival time of a clock signal at different components in a system.",
      detailedExplanation: "Due to wire routing, capacitance, and buffering, a clock signal does not arrive at all flip-flops exactly at the same time. This time difference is clock skew. Positive skew can help fix setup violations but worsen hold violations, whereas negative skew does the opposite.",
      interviewExplanation: "Explain clock skew by drawing two flip-flops with a clock path that takes longer to reach the second flip-flop. Discuss how it impacts setup and hold time equations.",
      keyPoints: ["Difference in clock arrival times.", "Caused by wire delays and buffering.", "Impacts setup and hold time analysis."],
      example: "If clock reaches FF1 at 0ns and FF2 at 0.5ns, the clock skew is 0.5ns.",
      followUpQuestions: ["What is positive vs negative clock skew?", "How is clock skew minimized in ASIC design? (Answer: Clock Tree Synthesis)"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Know the setup and hold time equations incorporating clock skew (Tclk + Tskew >= Tcq + Tcomb + Tsu)."
  },
  {
    id: "digital-9",
    topicId: "digital-electronics",
    title: "Difference between Mealy and Moore FSMs?",
    answer: {
      shortAnswer: "In a Moore machine, the output depends only on the current state. In a Mealy machine, the output depends on both the current state and the current inputs.",
      detailedExplanation: "Moore FSM outputs are associated purely with the state, making them safer and fully synchronous with the clock, but often requiring more states. Mealy FSM outputs can change asynchronously if inputs change, meaning they react faster (within the same clock cycle) but can cause glitches.",
      interviewExplanation: "Compare them in terms of speed, state count, and safety. Mealy uses fewer states and reacts faster, but Moore is glitch-free because outputs change only on clock edges.",
      keyPoints: ["Moore: Output = f(State).", "Mealy: Output = f(State, Input).", "Mealy requires fewer states but can glitch."],
      example: "A traffic light controller is typically a Moore machine. A sequence detector is often implemented as a Mealy machine to react immediately.",
      followUpQuestions: ["Which FSM typically requires fewer states?", "Why might Mealy outputs be glitchy?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Be prepared to draw state diagrams for both given a simple sequence detection problem."
  },
  {
    id: "digital-10",
    topicId: "digital-electronics",
    title: "What are hazards or glitches in combinational circuits?",
    answer: {
      shortAnswer: "A hazard is a temporary unwanted fluctuation (glitch) in the output of a combinational circuit due to unequal propagation delays in different signal paths.",
      detailedExplanation: "When inputs change, different paths in a logic circuit have different delays. This can cause the output to momentarily go to an incorrect value before settling. There are static hazards (e.g., output should stay 1 but briefly dips to 0) and dynamic hazards (output bounces before changing state).",
      interviewExplanation: "Explain that hazards are a property of physical logic gates taking time to switch. You can solve static hazards by adding redundant logic gates (covering adjacent 1s in a K-map that aren't already grouped together).",
      keyPoints: ["Caused by unequal path delays.", "Static hazard: momentary dip/spike when output should remain constant.", "Fixed using redundant logic (consensus terms)."],
      example: "In the function Y = AB + A'C, a transition of A from 1 to 0 might cause Y to momentarily dip to 0 if B=1 and C=1.",
      followUpQuestions: ["How do you eliminate a static-1 hazard using a K-map?", "What is a dynamic hazard?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Learn how to find and fix static hazards on a K-map by overlapping loops."
  },
  {
    id: "digital-11",
    topicId: "digital-electronics",
    title: "Explain One-Hot State Encoding.",
    answer: {
      shortAnswer: "One-hot encoding uses one flip-flop per state, where only one flip-flop is 'High' (1) at any given time.",
      detailedExplanation: "Instead of binary encoding where n flip-flops encode 2^n states, one-hot uses n flip-flops for n states. It simplifies the next-state logic because no decoding is needed, making the FSM run faster. However, it uses more flip-flops.",
      interviewExplanation: "Discuss the trade-offs. One-hot is faster and uses simpler combinational logic, making it ideal for FSMs running on FPGAs (which are rich in flip-flops). In ASICs, binary or Gray encoding might be preferred to save area.",
      keyPoints: ["1 flip-flop per state.", "Fast and simple combinational logic.", "Consumes more area/registers."],
      example: "State 0: 001, State 1: 010, State 2: 100.",
      followUpQuestions: ["When would you choose binary encoding over one-hot?", "What happens if a glitch sets two bits to 1 in a one-hot FSM?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Mention that FPGAs prefer one-hot encoding because they have abundant flip-flops but limited lookup table (LUT) inputs."
  },
  {
    id: "digital-12",
    topicId: "digital-electronics",
    title: "What is a Cross Clock Domain (CDC) crossing?",
    answer: {
      shortAnswer: "CDC is the transfer of a signal from one clock domain to another asynchronous clock domain.",
      detailedExplanation: "When a signal travels between domains governed by clocks with different frequencies or unknown phase relationships, it runs the risk of violating setup or hold times at the receiving flip-flop, leading to metastability.",
      interviewExplanation: "CDC is a major topic in ASIC/FPGA design. Explain that we can't just connect the signal directly. For single-bit signals, we use a 2-flip-flop synchronizer. For multi-bit buses, we use asynchronous FIFOs or handshaking.",
      keyPoints: ["Transferring data between asynchronous clocks.", "High risk of metastability.", "Requires synchronization logic."],
      example: "Sending a 'start' pulse from a 50MHz clock domain to a 100MHz clock domain.",
      followUpQuestions: ["How do you synchronize a single-bit control signal?", "How do you synchronize a multi-bit data bus?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Always mention Asynchronous FIFOs and 2-Flop synchronizers when CDC is brought up."
  },
  {
    id: "digital-13",
    topicId: "digital-electronics",
    title: "How does a 2-Flip-Flop Synchronizer work?",
    answer: {
      shortAnswer: "It uses two consecutive flip-flops clocked by the receiving domain's clock to reduce the probability of metastability propagating into the system.",
      detailedExplanation: "The first flip-flop captures the asynchronous input and may go metastable. The entire clock period is then given to this flip-flop to resolve to a stable state before the second flip-flop captures it on the next clock edge. The output of the second flip-flop is safely synchronized.",
      interviewExplanation: "Walk through the process step-by-step. Make sure to note that the synchronizer does not prevent metastability; it simply contains it and gives it time to resolve, drastically increasing MTBF (Mean Time Between Failures).",
      keyPoints: ["Does not prevent metastability, gives it time to resolve.", "Adds a latency of 2 clock cycles.", "Used for single-bit signals."],
      example: "An external button press is fed into two back-to-back D flip-flops clocked by the internal system clock.",
      followUpQuestions: ["Why can't we use a 2-flop synchronizer for a multi-bit bus?", "What if the clock frequency is extremely high?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "State clearly that it guarantees a safe logic level, but adds a multi-cycle latency."
  },
  {
    id: "digital-14",
    topicId: "digital-electronics",
    title: "What is a Ripple Carry Adder (RCA)?",
    answer: {
      shortAnswer: "An RCA consists of cascaded full adders where the carry-out of each adder is fed as the carry-in to the next.",
      detailedExplanation: "In an n-bit RCA, the most significant bit cannot be computed until the carry has 'rippled' through all previous bits. This makes the circuit slow, with propagation delay proportional to the number of bits (O(n)).",
      interviewExplanation: "Describe it as the simplest but slowest adder. You use multiple 1-bit full adders in series. It's conceptually easy but inefficient for large bit-widths.",
      keyPoints: ["Simple design using cascaded full adders.", "Slow, delay depends on bit-width (O(n)).", "Carry must propagate sequentially."],
      example: "Adding two 4-bit numbers (A and B) using 4 full adders.",
      followUpQuestions: ["How do you improve the speed of an adder?", "What is the worst-case delay path in an RCA?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Be ready to contrast RCA with Carry Lookahead Adders."
  },
  {
    id: "digital-15",
    topicId: "digital-electronics",
    title: "What is a Carry Lookahead Adder (CLA)?",
    answer: {
      shortAnswer: "A CLA improves addition speed by calculating the carry signals in advance, based on the input signals, rather than waiting for them to ripple through.",
      detailedExplanation: "It uses Generate (G = A AND B) and Propagate (P = A XOR B) signals to compute all carry bits simultaneously using combinational logic. This reduces the propagation delay to O(log n), making it much faster than a Ripple Carry Adder.",
      interviewExplanation: "Explain the concepts of Propagate and Generate. If A and B are both 1, a carry is generated. If one is 1, a carry is propagated. Using these, we calculate carry bits in parallel.",
      keyPoints: ["Fast addition.", "Uses Generate (G) and Propagate (P) terms.", "More complex and requires more area than RCA."],
      example: "C1 = G0 + P0*C0, C2 = G1 + P1*G0 + P1*P0*C0.",
      followUpQuestions: ["What are the equations for Propagate and Generate?", "Why don't we build 64-bit CLAs directly in one block?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Memorize the Generate (G = AB) and Propagate (P = A XOR B) equations."
  },
  {
    id: "digital-16",
    topicId: "digital-electronics",
    title: "Explain Gray Code and its primary application.",
    answer: {
      shortAnswer: "Gray code is an ordering of binary numbers where two successive values differ in only one bit.",
      detailedExplanation: "Unlike standard binary, counting up or down in Gray code only requires changing one bit at a time. This prevents transitional glitches. Its primary application is in asynchronous FIFOs for passing read/write pointers across clock domains, preventing metastability in multi-bit buses.",
      interviewExplanation: "When multi-bit pointers cross clock domains, binary counters change multiple bits at once (e.g., 011 to 100). If sampled midway, the value could be anything. Gray code ensures only one bit changes, so the sampled value is at worst off by one, not completely corrupt.",
      keyPoints: ["Adjacent values differ by 1 bit.", "Prevents multi-bit glitches.", "Crucial for Asynchronous FIFO pointers."],
      example: "Binary 0, 1, 2, 3 is 00, 01, 10, 11. Gray code is 00, 01, 11, 10.",
      followUpQuestions: ["How do you convert Binary to Gray code?", "Can you use Gray code for standard arithmetic operations?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Know the conversion formulas: G[i] = B[i] XOR B[i+1]."
  },
  {
    id: "digital-17",
    topicId: "digital-electronics",
    title: "What is a Decoder?",
    answer: {
      shortAnswer: "A decoder is a combinational circuit that converts an n-bit input into up to 2^n unique output lines.",
      detailedExplanation: "For every input combination, exactly one output line is activated. Decoders are frequently used in memory addressing to activate a specific memory word based on the provided address.",
      interviewExplanation: "Contrast it with a Demultiplexer. A decoder just asserts one output based on the input code. It can also be used to implement arbitrary boolean functions by ORing the minterm outputs.",
      keyPoints: ["n inputs, 2^n outputs.", "One-hot output.", "Used for memory address decoding."],
      example: "A 2-to-4 decoder with input '10' will activate output line Y2 (if lines are Y0 to Y3).",
      followUpQuestions: ["What is the difference between a Decoder and a Demultiplexer?", "How can you implement a boolean function using a Decoder?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mention that a Demultiplexer is basically a Decoder with an Enable line acting as the data input."
  },
  {
    id: "digital-18",
    topicId: "digital-electronics",
    title: "What is a Priority Encoder?",
    answer: {
      shortAnswer: "A priority encoder works like a standard encoder but assigns priorities to inputs. If multiple inputs are active, it encodes the one with the highest priority.",
      detailedExplanation: "Standard encoders fail if more than one input is high simultaneously. A priority encoder resolves this by pre-defining input ranks (e.g., Input 3 has higher priority than Input 1).",
      interviewExplanation: "Used in interrupt controllers. When multiple peripherals request the CPU at the same time, the priority encoder ensures the most critical interrupt gets serviced first.",
      keyPoints: ["Handles multiple active inputs.", "Encodes highest priority input.", "Used in interrupt handling systems."],
      example: "A 4-to-2 priority encoder has inputs I0, I1, I2, I3. If I3 and I1 are high, output is 11 (encoding I3).",
      followUpQuestions: ["What is the logic equation for a 4-to-2 priority encoder?", "What is the 'valid' bit output in an encoder?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Explain the 'Valid' (V) bit which indicates if at least one input is active."
  },
  {
    id: "digital-19",
    topicId: "digital-electronics",
    title: "Synchronous vs Asynchronous Reset",
    answer: {
      shortAnswer: "Synchronous resets clear the flip-flop only on the active clock edge, while asynchronous resets take effect immediately, independent of the clock.",
      detailedExplanation: "Synchronous resets are predictable, easily analyzed by static timing analysis, and prevent glitches. However, they require a running clock. Asynchronous resets reset the system instantly (good for power-up), but releasing them too close to a clock edge causes 'recovery/removal' timing violations.",
      interviewExplanation: "Highlight the tradeoff. Most modern designs use an Asynchronous Assertion, Synchronous Deassertion (Reset Synchronizer) strategy to get the best of both worlds.",
      keyPoints: ["Sync reset: Depends on clock edge.", "Async reset: Immediate action.", "Async release can cause metastability."],
      example: "Verilog for Async: `always @(posedge clk or posedge rst)` vs Sync: `always @(posedge clk)`",
      followUpQuestions: ["What is a Reset Synchronizer?", "What are Recovery and Removal times?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Always mention 'Recovery and Removal' times when discussing asynchronous reset release."
  },
  {
    id: "digital-20",
    topicId: "digital-electronics",
    title: "What are Recovery and Removal times?",
    answer: {
      shortAnswer: "They are the setup and hold times for an asynchronous reset signal relative to the clock.",
      detailedExplanation: "Recovery time is the minimum time the reset signal must be deasserted before the next active clock edge. Removal time is the minimum time it must remain asserted after the clock edge. Violating these causes the flip-flop to go metastable upon exiting reset.",
      interviewExplanation: "Explain that just like a data signal has setup/hold times to ensure stable capture, an asynchronous reset has recovery/removal times to ensure stable release. If the reset is released exactly at the clock edge, the flip-flop might not know whether to exit reset or capture data.",
      keyPoints: ["Recovery = Setup for reset release.", "Removal = Hold for reset release.", "Violations cause metastability on boot-up."],
      example: "If recovery time is 1ns, reset must go low at least 1ns before the rising clock edge.",
      followUpQuestions: ["How do we avoid recovery/removal violations? (Ans: Reset Synchronizer)"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Use the analogy that Recovery/Removal are just Setup/Hold applied to the reset pin."
  },
  {
    id: "digital-21",
    topicId: "digital-electronics",
    title: "What is an Asynchronous FIFO?",
    answer: {
      shortAnswer: "An Asynchronous FIFO is a memory queue used to safely pass data between two independent, asynchronous clock domains.",
      detailedExplanation: "It uses a Dual-Port RAM. Data is written using the write clock and read using the read clock. The challenge is generating Full and Empty flags. Read and write pointers are converted to Gray code and synchronized across domains to safely calculate these flags.",
      interviewExplanation: "This is a classic interview topic. Break it down: Dual-port RAM for data, Gray code pointers to prevent multi-bit CDC glitches, and synchronizers to bring pointers into the other clock domain for flag calculation.",
      keyPoints: ["Crosses clock domains safely.", "Uses Dual-Port RAM.", "Pointers are Gray-coded and synchronized."],
      example: "Passing video stream data from a 150MHz processing domain to a 60MHz display domain.",
      followUpQuestions: ["Why must FIFO pointers be Gray coded?", "How are the FULL and EMPTY flags generated?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Be prepared to draw the high-level block diagram of an Async FIFO."
  },
  {
    id: "digital-22",
    topicId: "digital-electronics",
    title: "How do you calculate max clock frequency for a circuit?",
    answer: {
      shortAnswer: "The minimum clock period T >= Tcq (clock-to-Q) + Tcomb (combinational delay) + Tsu (setup time). Max frequency = 1 / T.",
      detailedExplanation: "To ensure no setup time violations, the data must travel from the first flip-flop through any combinational logic, and arrive at the second flip-flop before its setup window begins. Therefore, the clock period must be larger than the sum of all propagation delays in the longest path (critical path) plus setup time.",
      interviewExplanation: "Write out the equation clearly. Mention that if there is positive clock skew, it can be subtracted from the delay, allowing a higher frequency (T >= Tcq + Tcomb + Tsu - Tskew).",
      keyPoints: ["T >= Tcq + Tcomb + Tsu.", "Tcomb is the critical path delay.", "Fmax = 1 / T."],
      example: "If Tcq=1ns, Tcomb=3ns, Tsu=1ns, Min Period = 5ns -> Fmax = 200MHz.",
      followUpQuestions: ["How does clock skew affect the maximum frequency?", "How does hold time factor into max frequency? (Ans: It doesn't)."]
    },
    difficulty: "Intermediate",
    badges: ["Numerical", "Important"],
    interviewTip: "Hold time violations do NOT depend on clock frequency. They depend on the minimum combinational delay."
  },
  {
    id: "digital-23",
    topicId: "digital-electronics",
    title: "Explain the Hold Time equation.",
    answer: {
      shortAnswer: "To prevent hold time violations, the minimum delay between flip-flops must satisfy: Tcq + Tcomb(min) >= Thold + Tskew.",
      detailedExplanation: "Hold time requires data to remain stable for a short time after the clock edge. This means the data from the *new* clock edge must not arrive at the second flip-flop too quickly. The fastest path (shortest combinational delay) must be slower than the hold time requirement.",
      interviewExplanation: "Emphasize that hold time checks are independent of clock frequency. If you have a hold time violation, slowing down the clock won't fix it. You must insert delay (buffers) into the data path.",
      keyPoints: ["Shortest path delay must be > Hold time.", "Independent of clock period.", "Fixed by inserting buffers in the fast path."],
      example: "If Thold=2ns, and Tcq=0.5ns, the combinational logic must add at least 1.5ns delay.",
      followUpQuestions: ["How do you fix a hold time violation?", "Why are hold time violations fatal after tape-out?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical", "Important"],
    interviewTip: "In ASICs, a setup violation can be fixed by slowing the clock. A hold violation means the chip is dead."
  },
  {
    id: "digital-24",
    topicId: "digital-electronics",
    title: "What is an FPGA?",
    answer: {
      shortAnswer: "A Field-Programmable Gate Array is an IC designed to be configured by a customer or a designer after manufacturing.",
      detailedExplanation: "FPGAs contain an array of programmable logic blocks (LUTs), flip-flops, and a hierarchy of reconfigurable interconnects. Unlike ASICs, which are hardwired during fabrication, an FPGA's hardware can be reprogrammed to implement different digital logic circuits at will.",
      interviewExplanation: "Compare FPGAs to ASICs. FPGAs offer fast prototyping and reprogrammability at the cost of higher per-unit price, higher power consumption, and lower maximum frequency compared to ASICs.",
      keyPoints: ["Reprogrammable hardware.", "Uses Look-Up Tables (LUTs) for logic.", "Faster time-to-market than ASICs."],
      example: "Using an FPGA to prototype a new RISC-V CPU architecture before committing to ASIC fabrication.",
      followUpQuestions: ["What are Look-Up Tables (LUTs)?", "FPGA vs ASIC tradeoffs?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mention that FPGAs load their configuration into SRAM upon boot."
  },
  {
    id: "digital-25",
    topicId: "digital-electronics",
    title: "What is a Look-Up Table (LUT)?",
    answer: {
      shortAnswer: "A LUT is the basic building block of an FPGA, acting essentially as a small RAM that stores the truth table of a boolean function.",
      detailedExplanation: "Instead of using logic gates (AND/OR), FPGAs implement combinational logic using LUTs. A 4-input LUT can implement ANY boolean function of 4 variables by acting as a 16x1 memory where the 4 inputs act as the address lines.",
      interviewExplanation: "Explain how it provides immense flexibility. If you want to change an AND gate to an XOR gate in an FPGA, you simply change the bits stored in the LUT's memory.",
      keyPoints: ["Implements logic via truth tables.", "Fundamentally a small SRAM.", "Core component of FPGA combinational logic."],
      example: "To implement A AND B in a 2-input LUT, address '11' stores 1, while '00', '01', '10' store 0.",
      followUpQuestions: ["How does a 4-input LUT implement a 5-input logic function?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Understand that an n-input LUT has 2^n configuration memory bits."
  },
  {
    id: "digital-26",
    topicId: "digital-electronics",
    title: "Difference between a Ring Counter and a Johnson Counter?",
    answer: {
      shortAnswer: "A ring counter circulates a single '1' bit, requiring N flip-flops for N states. A Johnson counter circulates inverted feedback, requiring N flip-flops for 2N states.",
      detailedExplanation: "A Ring Counter connects the Q output of the last flip-flop to the D input of the first (Sequence: 1000, 0100, 0010, 0001). A Johnson Counter connects the inverted Q' output of the last flip-flop to the D input of the first (Sequence: 000, 100, 110, 111, 011, 001).",
      interviewExplanation: "Compare their efficiency. Johnson counters double the number of states for the same number of flip-flops compared to ring counters, making them more efficient, though still less efficient than binary counters.",
      keyPoints: ["Ring: Mod-N counter, feedback Q -> D.", "Johnson: Mod-2N counter, feedback Q' -> D.", "Both are types of shift registers."],
      example: "A 4-bit Ring counter has 4 states. A 4-bit Johnson counter has 8 states.",
      followUpQuestions: ["What is a self-starting counter?", "What happens if a Ring counter powers up in state 1111?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mention that both are susceptible to 'lock-out' if they power up in an invalid state without self-starting logic."
  },
  {
    id: "digital-27",
    topicId: "digital-electronics",
    title: "What is a Tri-state Buffer?",
    answer: {
      shortAnswer: "A logic buffer that has three states: High (1), Low (0), and High-Impedance (Z).",
      detailedExplanation: "The High-Z state effectively disconnects the output from the circuit, preventing it from driving the bus. Tri-state buffers are essential when multiple devices share a common data bus, so only one device drives the bus at a time.",
      interviewExplanation: "Explain the importance of the Enable pin. When disabled, the output is floating (Z). If two devices drive a bus simultaneously (one High, one Low), it causes a short circuit (bus contention). Tri-state logic prevents this.",
      keyPoints: ["Outputs: 1, 0, High-Z.", "High-Z means floating/disconnected.", "Prevents bus contention."],
      example: "Used in RAM data lines where the bus is shared for both reading and writing.",
      followUpQuestions: ["What happens if no device drives a tri-state bus?", "What is bus contention?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Practical"],
    interviewTip: "If asked what happens if a bus is left floating, mention 'pull-up' or 'pull-down' resistors."
  },
  {
    id: "digital-28",
    topicId: "digital-electronics",
    title: "Explain Pull-up and Pull-down resistors.",
    answer: {
      shortAnswer: "They are resistors used to ensure a known state for a signal line under all conditions (preventing floating inputs).",
      detailedExplanation: "A pull-up resistor connects a wire to VCC, ensuring it reads as logic High when no device is driving it. A pull-down connects it to Ground. This is crucial for inputs like physical switches or tri-state buses, which might otherwise float and cause undefined logic levels and excessive current in CMOS gates.",
      interviewExplanation: "Mention CMOS logic. If a CMOS gate input floats, both NMOS and PMOS transistors can partially turn on, creating a direct path from VDD to GND and burning up the chip.",
      keyPoints: ["Prevents floating/High-Z signals.", "Pull-up ties to VDD; Pull-down to GND.", "Protects CMOS from short circuits."],
      example: "An I2C bus requires pull-up resistors because the devices use open-drain outputs.",
      followUpQuestions: ["What is an Open-Drain or Open-Collector output?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Connecting a pin directly to VDD/GND without a resistor would cause a short circuit when an active device pulls it the other way."
  },
  {
    id: "digital-29",
    topicId: "digital-electronics",
    title: "What is an Open-Drain (or Open-Collector) output?",
    answer: {
      shortAnswer: "An output configuration that can only pull a line Low (to ground) but cannot drive it High. A pull-up resistor is required to pull the line High.",
      detailedExplanation: "In CMOS, an open-drain output lacks the PMOS pull-up transistor. It only has the NMOS transistor. If the NMOS is on, the output is 0. If it's off, the output floats (Z). An external pull-up resistor is used to provide the logic '1'.",
      interviewExplanation: "This is used for 'Wired-AND' logic and shared buses (like I2C). Multiple open-drain outputs can be connected to a single wire without causing a short circuit. If any device pulls Low, the bus goes Low.",
      keyPoints: ["Can pull LOW, cannot drive HIGH.", "Requires external pull-up resistor.", "Enables multiple devices to share a bus safely."],
      example: "I2C data (SDA) and clock (SCL) lines use open-drain outputs.",
      followUpQuestions: ["How does open-drain prevent bus contention?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Use I2C as your go-to practical example of open-drain architecture."
  },
  {
    id: "digital-30",
    topicId: "digital-electronics",
    title: "What are Setup and Hold time equations with Clock Jitter?",
    answer: {
      shortAnswer: "Jitter effectively reduces the clock period for setup checks and impacts hold checks if jitter varies cycle-to-cycle.",
      detailedExplanation: "Clock jitter is the random variation in clock edge timing. For setup time, the worst-case scenario is the launching clock edge arrives late and the capturing edge arrives early, effectively shrinking the clock period (T - Tjitter >= Tcq + Tcomb + Tsu). For hold time, jitter on the same clock edge (if derived from different buffers) or cycle-to-cycle jitter must be accounted for.",
      interviewExplanation: "Distinguish between Skew (constant spatial difference) and Jitter (random temporal variation). Jitter always eats into your timing margins.",
      keyPoints: ["Jitter is random time variation of the clock.", "Reduces the effective clock period for setup.", "Decreases timing margins."],
      example: "If clock period is 10ns and worst-case jitter is 0.5ns, the available time for logic is only 9.5ns.",
      followUpQuestions: ["Difference between Clock Skew and Clock Jitter?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical", "Important"],
    interviewTip: "Skew is deterministic and can be compensated; Jitter is random and must be budgeted as a margin."
  },
  {
    id: "digital-31",
    topicId: "digital-electronics",
    title: "How does a CMOS inverter work?",
    answer: {
      shortAnswer: "A CMOS inverter uses a PMOS transistor connected to VDD and an NMOS transistor connected to Ground, sharing a common input gate.",
      detailedExplanation: "When the input is 0, the PMOS turns ON and NMOS turns OFF, pulling the output to VDD (Logic 1). When the input is 1, the NMOS turns ON and PMOS turns OFF, pulling the output to Ground (Logic 0).",
      interviewExplanation: "Emphasize that in steady state, there is no direct path from VDD to Ground, which is why CMOS has near-zero static power dissipation. Power is mostly consumed dynamically during switching.",
      keyPoints: ["PMOS pulls UP (conducts 1s well).", "NMOS pulls DOWN (conducts 0s well).", "Zero static power dissipation."],
      example: "If Vin = 0V, PMOS conducts, Vout = 5V. If Vin = 5V, NMOS conducts, Vout = 0V.",
      followUpQuestions: ["Why don't we use NMOS for pull-up?", "What is dynamic power dissipation?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Remember: PMOS passes strong 1s and weak 0s. NMOS passes strong 0s and weak 1s."
  },
  {
    id: "digital-32",
    topicId: "digital-electronics",
    title: "What is dynamic power dissipation in CMOS?",
    answer: {
      shortAnswer: "Power consumed during the switching of transistors, primarily due to the charging and discharging of load capacitance.",
      detailedExplanation: "The formula is P = alpha * C * V^2 * f, where alpha is the activity factor, C is capacitance, V is voltage, and f is clock frequency. During transitions, there is also a brief moment when both PMOS and NMOS are partially ON, causing short-circuit power dissipation.",
      interviewExplanation: "Discuss the components of the formula. Lowering voltage is the most effective way to reduce power because it's squared. Lowering frequency or reducing toggle rate (activity factor) using clock gating also helps.",
      keyPoints: ["P = a * C * V^2 * f", "Dominated by charging/discharging capacitance.", "Voltage scaling provides quadratic power savings."],
      example: "Reducing voltage from 1.2V to 1.0V reduces dynamic power by roughly 30%.",
      followUpQuestions: ["What is static power dissipation?", "How does Clock Gating save power?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical", "Important"],
    interviewTip: "Always be ready to write out the dynamic power equation P = aCV^2f."
  },
  {
    id: "digital-33",
    topicId: "digital-electronics",
    title: "Explain Clock Gating.",
    answer: {
      shortAnswer: "Clock gating is a power-saving technique where the clock signal is disabled (turned off) for portions of a circuit that are not currently in use.",
      detailedExplanation: "Since dynamic power in CMOS is proportional to clock frequency and switching activity, disabling the clock prevents flip-flops and combinational logic from switching. A clock gating cell usually consists of a latch and an AND/OR gate to ensure the clock is stopped without generating glitches.",
      interviewExplanation: "Explain that just putting an AND gate on a clock line causes glitches if the enable signal changes while the clock is high. A latch-based Integrated Clock Gating (ICG) cell is used to synchronize the enable signal safely.",
      keyPoints: ["Reduces dynamic power.", "Disables clock to idle blocks.", "Must use glitch-free clock gating cells (ICGs)."],
      example: "Turning off the clock to the FPU (Floating Point Unit) when executing integer instructions.",
      followUpQuestions: ["Why can't we just use an AND gate to gate a clock?", "What is operand isolation?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Draw a simple Latch + AND gate configuration to show glitch-free clock gating."
  },
  {
    id: "digital-34",
    topicId: "digital-electronics",
    title: "What are False Paths in static timing analysis?",
    answer: {
      shortAnswer: "A false path is a logic path that exists in the circuit topology but can never be sensitized or functionally exercised during normal operation.",
      detailedExplanation: "For example, a path might logically exist through multiple multiplexers, but the select lines of those MUXes are tied together such that the specific path can never propagate a signal. In Static Timing Analysis (STA), identifying and declaring false paths allows the tool to ignore them, preventing it from wasting effort optimizing a delay that doesn't matter.",
      interviewExplanation: "Mention that STA tools are pessimistic and assume all paths are valid. As a designer, you provide 'set_false_path' constraints to tell the tool to ignore CDC paths, test logic, or physically impossible paths.",
      keyPoints: ["Logically exists, functionally impossible.", "Ignored during timing analysis.", "Includes CDC crossings and test logic."],
      example: "A path between an asynchronous reset synchronizer and normal data logic.",
      followUpQuestions: ["What is a Multi-Cycle Path?", "How do false paths affect synthesis?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Mentioning CDC as a classic example of a false path will show practical ASIC/FPGA experience."
  },
  {
    id: "digital-35",
    topicId: "digital-electronics",
    title: "What is a Multi-Cycle Path (MCP)?",
    answer: {
      shortAnswer: "A path where the data is allowed more than one clock cycle to propagate from the launch flip-flop to the capture flip-flop.",
      detailedExplanation: "Sometimes complex combinational logic (like a large multiplier) cannot complete within one clock cycle. If the architecture allows it (e.g., the capture flip-flop only reads the data every 2nd or 3rd cycle), we declare it an MCP. This relaxes the setup time requirement for the synthesis tool.",
      interviewExplanation: "Explain that by default, STA assumes all data must be captured on the very next clock edge. You must explicitly constrain it as an MCP so the tool doesn't falsely report a setup violation.",
      keyPoints: ["Data takes >1 cycle to process.", "Relaxes setup timing constraints.", "Requires architectural support (e.g., enable signals)."],
      example: "A 32-bit multiplication that takes 3 clock cycles to stabilize before the result is read.",
      followUpQuestions: ["How does defining an MCP affect the hold time check?"]
    },
    difficulty: "Advanced",
    badges: ["Practical"],
    interviewTip: "In STA, shifting the setup edge by N cycles also shifts the hold edge. Be prepared to explain how to adjust the hold constraint back."
  },
  {
    id: "digital-36",
    topicId: "digital-electronics",
    title: "What is Parity Generation and Checking?",
    answer: {
      shortAnswer: "A technique used for basic error detection by adding an extra bit (parity bit) to a data word so that the total number of 1s is either even (Even Parity) or odd (Odd Parity).",
      detailedExplanation: "At the transmitter, a parity generator uses XOR gates to calculate the parity bit. At the receiver, a parity checker XORs all data bits plus the parity bit. If the result doesn't match the expected parity, a single-bit error is detected.",
      interviewExplanation: "Highlight its limitations. Parity can only detect an odd number of bit flips. If two bits flip simultaneously, the parity remains correct, and the error goes undetected. It also cannot correct the error.",
      keyPoints: ["Uses XOR logic.", "Even/Odd parity schemes.", "Detects single-bit errors, cannot correct them."],
      example: "Data 1011 has three 1s. For Even Parity, parity bit = 1 (total 1s = 4).",
      followUpQuestions: ["How would you design an Even Parity generator for 4 bits?", "What is Hamming Code?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "If asked to implement this, simply draw an XOR tree. Y = A XOR B XOR C XOR D."
  },
  {
    id: "digital-37",
    topicId: "digital-electronics",
    title: "What is the difference between Block RAM (BRAM) and Distributed RAM in an FPGA?",
    answer: {
      shortAnswer: "BRAM are dedicated, hard-IP memory blocks on the FPGA fabric, while Distributed RAM is constructed by stitching together the LUTs of the logic fabric.",
      detailedExplanation: "BRAMs are dense, fast, and good for large memory structures (like FIFOs or ROMs). Distributed RAM utilizes the small SRAMs inside LUTs, making it ideal for small, shallow memories placed close to the logic, reducing routing delay.",
      interviewExplanation: "Discuss the trade-offs in resource utilization. Using LUTs for memory eats into the resources available for logic. BRAMs are fixed in number and location, so routing to them can sometimes cause delays if the logic is far away.",
      keyPoints: ["BRAM: Dedicated, large, fast.", "Distributed RAM: Uses LUTs, good for small/shallow memory.", "Resource trade-offs."],
      example: "Implementing a 4KB video buffer uses BRAM. Implementing a 16-deep 8-bit shift register uses Distributed RAM.",
      followUpQuestions: ["When would you choose Distributed RAM over BRAM?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Show you understand FPGA architecture by mentioning that BRAMs usually support Dual-Port functionality inherently."
  },
  {
    id: "digital-38",
    topicId: "digital-electronics",
    title: "What is pipelining in digital design?",
    answer: {
      shortAnswer: "Pipelining is a technique of inserting registers (flip-flops) into a long combinational logic path to break it into smaller stages, increasing the clock frequency.",
      detailedExplanation: "By splitting a large logic block (like a multiplier) into multiple stages separated by registers, the maximum combinational delay (Tcomb) of each stage is reduced. This allows the system to run at a much higher clock frequency. The tradeoff is increased latency (number of clock cycles to get the first result) and increased area (more registers).",
      interviewExplanation: "Compare it to an assembly line in a factory. Throughput increases dramatically because multiple data items are processed simultaneously in different stages, even though a single item takes longer to finish completely.",
      keyPoints: ["Increases clock frequency and throughput.", "Increases latency (clock cycles).", "Requires more area for registers."],
      example: "A 5-stage CPU pipeline: Fetch, Decode, Execute, Memory, Writeback.",
      followUpQuestions: ["What are pipeline hazards?", "Does pipelining reduce the overall time to process a single instruction?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Use the terms 'Throughput' and 'Latency'. Pipelining maximizes throughput but technically slightly worsens latency due to setup/hold overhead of the added flip-flops."
  },
  {
    id: "digital-39",
    topicId: "digital-electronics",
    title: "How do you swap two variables without using a temporary variable?",
    answer: {
      shortAnswer: "Using the XOR logic operator: A = A XOR B; B = A XOR B; A = A XOR B.",
      detailedExplanation: "The XOR swap algorithm leverages the properties of XOR: X XOR X = 0, and X XOR 0 = X. This allows the states of two binary variables to be exchanged purely through in-place logical operations. While famous in software, in hardware this is just wire crossing, but it's a common logic brain-teaser.",
      interviewExplanation: "Write out the 3 lines of pseudo-code and trace it with A=10, B=01. It proves your understanding of boolean algebra properties.",
      keyPoints: ["Uses XOR properties.", "X ^ X = 0", "X ^ 0 = X"],
      example: "A = A^B. B = A^B (evaluates to B^(A^B) = A). A = A^B (evaluates to (A^B)^A = B).",
      followUpQuestions: ["Is there any situation where XOR swap fails? (Ans: if both pointers point to the same memory location)"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Frequently Asked"],
    interviewTip: "While this is often asked as a software question, hardware engineers should know it to demonstrate strong boolean logic fundamentals."
  },
  {
    id: "digital-40",
    topicId: "digital-electronics",
    title: "Explain the difference between a Latch and a Flip-Flop in Verilog/VHDL implementation.",
    answer: {
      shortAnswer: "A latch is inferred when a variable is not assigned a value in all branches of a combinational always/process block. A flip-flop is explicitly inferred using edge-sensitive sensitivity lists (e.g., posedge clk).",
      detailedExplanation: "In RTL design, unintentionally inferring latches is a common bug caused by incomplete IF/ELSE or CASE statements. The synthesizer preserves the old value by creating a latch. Flip-flops are created intentionally using `always @(posedge clk)` in Verilog.",
      interviewExplanation: "This connects digital theory to coding. Explain that latches are bad for static timing analysis because they are transparent, allowing glitches to propagate. To prevent them, assign default values at the top of a combinational block or ensure all branches are covered.",
      keyPoints: ["Latch: Incomplete IF/CASE in combinational logic.", "Flip-flop: 'posedge clk' sensitivity list.", "Unintended latches cause timing issues."],
      example: "`always @(*) begin if(en) q = d; end` infers a latch because there is no `else`.",
      followUpQuestions: ["How do you prevent unintended latch inference?", "Are latches ever used intentionally in ASIC design? (Ans: Yes, in clock gating cells)."]
    },
    difficulty: "Intermediate",
    badges: ["Coding", "Practical"],
    interviewTip: "If asked to code combinational logic, always provide an `else` block or a default assignment to explicitly prevent latches."
  }
];
