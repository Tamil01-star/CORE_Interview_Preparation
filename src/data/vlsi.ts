import type { Question } from '../types';

export const vlsiQuestions: Question[] = [
  {
    id: "vlsi-1",
    topicId: "vlsi",
    title: "What are the advantages of CMOS logic over NMOS or PMOS logic?",
    answer: {
      shortAnswer: "CMOS logic dissipates almost zero static power and provides full rail-to-rail output voltage swings.",
      detailedExplanation: "CMOS (Complementary Metal-Oxide-Semiconductor) uses both NMOS and PMOS transistors arranged so that one is ON while the other is OFF. This prevents a direct path from VDD to ground in steady states, practically eliminating static power dissipation. Additionally, CMOS provides strong high (VDD) and low (GND) logic levels without degradation.",
      interviewExplanation: "CMOS is the dominant technology because it offers near-zero static power dissipation and a full rail-to-rail voltage swing, which gives it a superior noise margin compared to purely NMOS or PMOS logic families.",
      keyPoints: ["Zero static power dissipation", "Full rail-to-rail output swing", "High noise margin", "High input impedance"],
      example: "A CMOS inverter draws current from the supply only during the transition between logic states.",
      followUpQuestions: ["What are the primary sources of power dissipation in CMOS?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always highlight the lack of static power dissipation as the main reason for CMOS dominance."
  },
  {
    id: "vlsi-2",
    topicId: "vlsi",
    title: "Define Threshold Voltage (Vt) of a MOSFET.",
    answer: {
      shortAnswer: "Threshold voltage is the minimum gate-to-source voltage required to create a conducting channel between the source and drain.",
      detailedExplanation: "In an enhancement-mode MOSFET, the threshold voltage (Vt) is the gate voltage at which strong inversion occurs, allowing a significant current to flow from drain to source. For NMOS, a positive Vgs > Vt is needed, while for PMOS, a negative Vgs < Vt is required.",
      interviewExplanation: "Threshold voltage is the gate-to-source voltage needed to invert the surface of the substrate beneath the gate oxide, establishing a conducting channel. It depends on factors like oxide thickness, doping concentration, and temperature.",
      keyPoints: ["Minimum Vgs for conduction", "Depends on oxide thickness and doping", "Decreases with increasing temperature"],
      example: "If an NMOS has a Vt of 0.5V, applying 0.3V to the gate will not turn it on.",
      followUpQuestions: ["How does threshold voltage vary with temperature?", "What is the body effect?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Important"],
    interviewTip: "Mention the physical phenomena: strong inversion at the semiconductor surface."
  },
  {
    id: "vlsi-3",
    topicId: "vlsi",
    title: "What is the Body Effect in MOSFETs?",
    answer: {
      shortAnswer: "Body effect is the increase in threshold voltage (Vt) when a reverse bias is applied between the body (substrate) and the source.",
      detailedExplanation: "The body effect, also known as the substrate bias effect, occurs when the bulk/body terminal is not tied to the source. A reverse bias voltage (Vsb > 0 for NMOS) widens the depletion region, meaning a higher gate voltage is required to invert the channel, thereby increasing the threshold voltage.",
      interviewExplanation: "When the source and body are not at the same potential, the threshold voltage of the transistor changes. For an NMOS, if the body is at a lower potential than the source, Vt increases. This is crucial in circuits like pass transistors and stacked logic gates.",
      keyPoints: ["Changes Vt based on Vsb", "Widens depletion region", "Occurs in stacked transistors (like NAND gates)"],
      example: "In a 2-input NAND gate, the top NMOS transistor suffers from the body effect because its source is not directly tied to ground.",
      followUpQuestions: ["How does body effect impact the delay of a NAND gate?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Be ready to draw a schematic showing when Vsb > 0 occurs in standard logic gates."
  },
  {
    id: "vlsi-4",
    topicId: "vlsi",
    title: "Explain Channel Length Modulation (CLM).",
    answer: {
      shortAnswer: "CLM is the shortening of the effective channel length in a MOSFET as the drain-to-source voltage (Vds) increases beyond saturation.",
      detailedExplanation: "When a MOSFET operates in the saturation region (Vds > Vgs - Vt), the pinch-off point of the channel moves towards the source as Vds increases. This reduces the effective length of the channel. Since drain current is inversely proportional to channel length, the current slightly increases rather than staying perfectly constant.",
      interviewExplanation: "Ideally, in saturation, the drain current should be independent of Vds. However, due to Channel Length Modulation, the effective channel becomes shorter as Vds increases, causing the drain current to rise linearly. This is modeled by the parameter lambda (λ).",
      keyPoints: ["Occurs in saturation region", "Effective length decreases as Vds increases", "Causes non-ideal output resistance (finite ro)"],
      followUpQuestions: ["How does CLM affect the output resistance of a MOSFET?", "How does it scale with smaller technology nodes?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mention that CLM is the reason why the output resistance of a transistor is finite rather than infinite."
  },
  {
    id: "vlsi-5",
    topicId: "vlsi",
    title: "What is Noise Margin?",
    answer: {
      shortAnswer: "Noise margin is the maximum voltage amplitude of extraneous signal (noise) that can be added to a signal without altering the logical state.",
      detailedExplanation: "Noise margins determine a circuit's robustness against noise. High Noise Margin (NMH) is VOH - VIH, and Low Noise Margin (NML) is VIL - VOL. A CMOS inverter has excellent noise margins (typically around VDD/2) because of its sharp voltage transfer characteristics.",
      interviewExplanation: "Noise margin is the safety cushion a logic gate has against electrical noise. It's defined by the difference between the guaranteed output levels and the required input levels. CMOS is highly favored because its symmetrical transfer curve yields very high noise margins.",
      keyPoints: ["NMH = VOH - VIH", "NML = VIL - VOL", "Higher is better for circuit robustness"],
      followUpQuestions: ["Can you draw the Voltage Transfer Characteristic (VTC) of a CMOS inverter?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Know the definitions of VIL, VIH, VOL, and VOH by heart and be able to mark them on a VTC curve."
  },
  {
    id: "vlsi-6",
    topicId: "vlsi",
    title: "Define Setup Time.",
    answer: {
      shortAnswer: "Setup time is the minimum amount of time the data input must remain stable before the active edge of the clock.",
      detailedExplanation: "For a flip-flop to reliably latch data, the data signal must arrive and settle a certain amount of time before the clock edge. This duration is the setup time. If the data changes during this window, the flip-flop might enter a metastable state or capture the wrong data.",
      interviewExplanation: "Setup time is the time required for the data to propagate through the master stage of a flip-flop before the clock edge arrives. Violating it leads to metastability. To fix setup violations, we must reduce the delay of the combinational logic or increase the clock period.",
      keyPoints: ["Stable data before clock edge", "Prevents metastability", "Violation means data arrived too late"],
      example: "If a D flip-flop has a setup time of 50ps, the D input must not change during the 50ps window right before the rising clock edge.",
      followUpQuestions: ["How do you fix a setup time violation?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Always relate setup time to the maximum clock frequency (Tclk >= Tcq + Tcomb + Tsetup)."
  },
  {
    id: "vlsi-7",
    topicId: "vlsi",
    title: "Define Hold Time.",
    answer: {
      shortAnswer: "Hold time is the minimum amount of time the data input must remain stable after the active edge of the clock.",
      detailedExplanation: "After the active clock edge, the data must be held constant for a brief period to ensure the flip-flop correctly captures the value. If the data changes too quickly after the clock edge, it can overwrite the intended data, causing a hold time violation.",
      interviewExplanation: "Hold time is the time the data must remain stable after the clock edge. Violations occur when the combinational logic between flip-flops is too fast, causing the new data to arrive and corrupt the current data. Unlike setup violations, hold violations cannot be fixed by slowing down the clock.",
      keyPoints: ["Stable data after clock edge", "Independent of clock frequency", "Violation means data changed too early"],
      followUpQuestions: ["How do you fix a hold time violation?", "Why is a hold violation independent of clock frequency?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Emphasize that hold time violations are fatal because slowing down the clock does not fix them."
  },
  {
    id: "vlsi-8",
    topicId: "vlsi",
    title: "How do you fix a Setup Time Violation?",
    answer: {
      shortAnswer: "Increase the clock period, reduce the combinational logic delay, or reduce clock skew to the destination flip-flop.",
      detailedExplanation: "A setup time violation means the data is arriving too late. The equation is: Tclk >= Tcq + Tcomb + Tsetup - Tskew. To fix this, you can: 1) Slow down the clock (increase Tclk). 2) Optimize the data path to be faster (reduce Tcomb by sizing up gates, reducing logic depth, or using faster VT cells). 3) Adjust clock routing to delay the clock to the capture flop (useful skew).",
      interviewExplanation: "If data arrives too late, I can either give it more time by lowering the clock frequency, or make the data path faster. During physical design, I can swap high-Vt cells for low-Vt cells, resize gates for better drive strength, or optimize the logic.",
      keyPoints: ["Increase clock period (lower frequency)", "Reduce Tcomb (faster logic, lower Vt)", "Optimize logic depth"],
      followUpQuestions: ["What are the trade-offs of using low-Vt cells to fix setup violations?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Start with architectural fixes (pipeline), then logic fixes (sizing, Vt swap), then clocking (frequency)."
  },
  {
    id: "vlsi-9",
    topicId: "vlsi",
    title: "How do you fix a Hold Time Violation?",
    answer: {
      shortAnswer: "Add delay (like buffers) to the combinational logic path to slow down the data.",
      detailedExplanation: "A hold time violation means the data is arriving too fast and overwriting the previous data. The condition is: Tcq + Tcomb >= Thold + Tskew. To fix this, we must increase Tcomb. This is typically done by inserting delay elements (buffers or inverters) into the data path.",
      interviewExplanation: "To fix a hold violation, we need to slow down the data so it doesn't arrive before the hold time window closes. We do this by inserting buffers into the fast data paths. We can also use higher-Vt cells or downsize the driving cells to increase the delay. We cannot fix it by changing the clock frequency.",
      keyPoints: ["Insert buffers in the data path", "Use High-Vt cells", "Downsize logic gates", "Cannot be fixed by lowering clock frequency"],
      followUpQuestions: ["Why is fixing a hold violation near the end of the design cycle risky?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Clearly state that hold time is independent of the clock period."
  },
  {
    id: "vlsi-10",
    topicId: "vlsi",
    title: "What is Metastability?",
    answer: {
      shortAnswer: "Metastability is an unstable state where a flip-flop's output hovers between logic 0 and logic 1, caused by setup or hold time violations.",
      detailedExplanation: "If the input to a flip-flop changes within the setup or hold time window, the internal cross-coupled inverters may latch an intermediate voltage level. The flip-flop will eventually resolve to a stable 0 or 1, but the resolution time is unpredictable and can take longer than the clock period, corrupting downstream logic.",
      interviewExplanation: "Metastability occurs when a flip-flop samples a changing signal. The output becomes unpredictable and settles to a valid logic level after a random delay. This happens most often when interfacing multiple asynchronous clock domains or sampling asynchronous external inputs.",
      keyPoints: ["Caused by setup/hold violations", "Output is temporarily intermediate/undefined", "Resolution time is unpredictable"],
      example: "Sampling a push-button signal with a synchronous clock without a synchronizer often causes metastability.",
      followUpQuestions: ["How do you mitigate the effects of metastability in a design?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Mention MTBF (Mean Time Between Failures) when discussing metastability."
  },
  {
    id: "vlsi-11",
    topicId: "vlsi",
    title: "How do you resolve Metastability?",
    answer: {
      shortAnswer: "Use a multi-stage synchronizer (typically two back-to-back flip-flops) when crossing clock domains.",
      detailedExplanation: "We cannot completely eliminate metastability, but we can exponentially reduce its probability to an acceptable MTBF (Mean Time Between Failures). By passing an asynchronous signal through two or more flip-flops clocked by the receiving domain, we give the first flip-flop an entire clock cycle to resolve its metastable state before the second flip-flop samples it.",
      interviewExplanation: "To prevent metastable signals from propagating through the system, we use a 2-flop synchronizer. If the first flop goes metastable, it has nearly a full clock cycle to settle to a valid logic level before the second flop samples it, ensuring the downstream logic sees a clean 0 or 1.",
      keyPoints: ["Use 2-flop or 3-flop synchronizers", "Increases MTBF to acceptable levels", "Used for Clock Domain Crossing (CDC)"],
      followUpQuestions: ["Does a 2-flop synchronizer guarantee metastability will never happen?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Be precise: synchronizers do not 'prevent' metastability, they give it time to resolve, increasing MTBF."
  },
  {
    id: "vlsi-12",
    topicId: "vlsi",
    title: "Explain Dynamic Power Dissipation in CMOS.",
    answer: {
      shortAnswer: "Dynamic power is the power consumed when transistors switch states, primarily due to charging and discharging of load capacitances.",
      detailedExplanation: "The formula for dynamic power is P = α * C * VDD^2 * f, where α is the activity factor, C is the load capacitance, VDD is the supply voltage, and f is the clock frequency. It occurs because the pull-up network draws current from VDD to charge the output node to logic 1.",
      interviewExplanation: "Dynamic power dissipation occurs during logic transitions. Whenever a node switches from 0 to 1, energy is drawn from the supply to charge the load capacitance. This power is highly dependent on the switching frequency and the square of the supply voltage.",
      keyPoints: ["P = α * C * VDD^2 * f", "Caused by charging/discharging capacitors", "Scales quadratically with VDD"],
      followUpQuestions: ["What are some techniques to reduce dynamic power?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Always write down the formula P = αCV²f; interviewers look for this specific equation."
  },
  {
    id: "vlsi-13",
    topicId: "vlsi",
    title: "Explain Static (Leakage) Power Dissipation.",
    answer: {
      shortAnswer: "Static power is the power consumed when the circuit is in a steady state and not switching, primarily caused by leakage currents.",
      detailedExplanation: "Even when transistors are OFF, subthreshold leakage (current between drain and source) and gate leakage (tunneling through the gate oxide) occur. Static power is given by P = I_leakage * VDD. As technology nodes shrink, threshold voltages and oxide thicknesses decrease, making leakage power a dominant factor in modern VLSI design.",
      interviewExplanation: "Static power happens even when the clock is stopped. It's mainly due to subthreshold leakage current flowing through nominally OFF transistors. In deep sub-micron nodes, static power can equal or exceed dynamic power, requiring techniques like power gating or multi-Vt libraries to manage it.",
      keyPoints: ["Occurs when there is no switching", "Dominated by subthreshold and gate leakage", "Increases exponentially with temperature"],
      followUpQuestions: ["How does threshold voltage affect static power?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Mention that leakage power increases exponentially with temperature."
  },
  {
    id: "vlsi-14",
    topicId: "vlsi",
    title: "What is Short Circuit Power Dissipation?",
    answer: {
      shortAnswer: "It is the power dissipated during the brief moment when both the NMOS and PMOS networks are partially ON during a signal transition.",
      detailedExplanation: "When the input to a CMOS gate transitions, there is a finite rise and fall time. For a short duration, the input voltage is between Vt,n and VDD - |Vt,p|. During this time, both the pull-up and pull-down networks are conducting, creating a direct path (short circuit) from VDD to ground.",
      interviewExplanation: "Short circuit power is a subset of dynamic power. It happens during the transition phase of the input signal. If the input transition is very slow, both the PMOS and NMOS stay ON longer, leading to higher short circuit current. It's usually kept under 10% of total power by matching input and output transition times.",
      keyPoints: ["Direct path from VDD to GND", "Occurs only during transitions", "Worsened by slow input slew rates"],
      followUpQuestions: ["How do we minimize short circuit power?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Explain that balancing the input slew rate with the output load helps minimize this power."
  },
  {
    id: "vlsi-15",
    topicId: "vlsi",
    title: "How can we reduce Dynamic Power?",
    answer: {
      shortAnswer: "Dynamic power can be reduced by lowering the supply voltage, reducing the clock frequency, utilizing clock gating, or decreasing the load capacitance.",
      detailedExplanation: "Looking at P = αCV²f, we can: 1) Reduce VDD (most effective as it's quadratic, but slows down logic). 2) Clock Gating (reduces activity factor α by disabling clocks to unused blocks). 3) Reduce Capacitance (shorter wires, smaller transistors). 4) Logic optimization to reduce unnecessary toggling.",
      interviewExplanation: "The most impactful way to reduce dynamic power is scaling down the supply voltage, since it has a quadratic effect. However, practically in RTL design, clock gating is the most common technique used to reduce the activity factor. We can also minimize capacitance through better placement and routing.",
      keyPoints: ["Clock gating (reduces α)", "Voltage scaling (reduces V)", "Logic optimization", "Sizing down cells (reduces C)"],
      followUpQuestions: ["What is the impact of lowering VDD on circuit delay?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "Group the solutions by the variables in the power equation (α, C, V, f) to give a structured answer."
  },
  {
    id: "vlsi-16",
    topicId: "vlsi",
    title: "How can we reduce Static (Leakage) Power?",
    answer: {
      shortAnswer: "Static power can be reduced using techniques like Power Gating, Multi-Vt cells, and maintaining a lower operating temperature.",
      detailedExplanation: "To reduce leakage, we can: 1) Use Power Gating (shutting off VDD to idle blocks using sleep transistors). 2) Multi-Vt Optimization (using High-Vt cells on non-critical paths, as High-Vt has exponentially lower subthreshold leakage). 3) Reverse Body Biasing (increases Vt dynamically during standby).",
      interviewExplanation: "The standard industry practice to reduce static power is using a Multi-Vt library. We use High-Vt cells in logic paths that have plenty of timing slack, as they leak much less. For blocks that are completely idle, we use power gating to cut off their power supply entirely.",
      keyPoints: ["Power Gating (Sleep transistors)", "Multi-Vt optimization (High-Vt for non-critical paths)", "Reverse body biasing"],
      followUpQuestions: ["What is the trade-off of using High-Vt cells?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "Differentiate clearly between clock gating (for dynamic power) and power gating (for static power)."
  },
  {
    id: "vlsi-17",
    topicId: "vlsi",
    title: "Why are NAND gates preferred over NOR gates in CMOS design?",
    answer: {
      shortAnswer: "NAND gates use series NMOS and parallel PMOS, which is faster and more area-efficient because NMOS transistors have higher mobility than PMOS.",
      detailedExplanation: "In silicon, electrons (majority carriers in NMOS) have 2-3 times higher mobility than holes (PMOS). To achieve equal rise and fall times, PMOS transistors must be sized larger than NMOS. A NAND gate puts the 'weaker' PMOS in parallel and the 'stronger' NMOS in series. A NOR gate puts PMOS in series, requiring them to be sized even larger to maintain speed, resulting in greater area and input capacitance.",
      interviewExplanation: "NAND gates are faster and smaller. Because NMOS mobility is higher, putting them in series (as in NAND) is less detrimental to performance than putting PMOS in series (as in NOR). NOR gates require massive PMOS transistors to compensate for both lower mobility and series resistance, leading to high capacitance and slow delays.",
      keyPoints: ["Electron mobility > Hole mobility", "NAND has parallel PMOS (better)", "NOR has series PMOS (slower, larger area)"],
      followUpQuestions: ["Can you draw the schematic of a 2-input NAND gate?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "This is a classic question. Always tie it back to electron vs. hole mobility."
  },
  {
    id: "vlsi-18",
    topicId: "vlsi",
    title: "What is Clock Skew?",
    answer: {
      shortAnswer: "Clock skew is the spatial difference in the arrival time of a clock edge at two different flip-flops.",
      detailedExplanation: "Due to differences in wire length, buffers, and loading, the clock signal does not reach all sequential elements simultaneously. Positive skew occurs when the capture clock arrives after the launch clock (helps setup, hurts hold). Negative skew occurs when the capture clock arrives before the launch clock (hurts setup, helps hold).",
      interviewExplanation: "Clock skew is the time difference between the clock arriving at the source flip-flop and the destination flip-flop. While we usually try to minimize it using balanced clock trees (like H-trees), we can also intentionally introduce useful skew to fix specific setup time violations.",
      keyPoints: ["Difference in clock arrival times", "Can be positive or negative", "Can cause setup/hold violations", "Managed via Clock Tree Synthesis (CTS)"],
      followUpQuestions: ["What is 'useful skew'?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked"],
    interviewTip: "Be prepared to explain how positive skew affects the setup and hold equations."
  },
  {
    id: "vlsi-19",
    topicId: "vlsi",
    title: "What is Clock Jitter?",
    answer: {
      shortAnswer: "Clock jitter is the temporal variation of the clock period from its ideal value, from one cycle to the next.",
      detailedExplanation: "Unlike skew (which is spatial), jitter is a temporal variation caused by noise, power supply variations, or PLL imperfections. It means a 1ns clock might actually be 0.98ns one cycle and 1.02ns the next. Jitter effectively reduces the available time for logic evaluation, tightening setup time requirements.",
      interviewExplanation: "Jitter is the cycle-to-cycle variation in the clock period. It acts as an uncertainty margin that eats into our timing budget. When doing timing analysis, we must subtract the jitter from the clock period to ensure our setup time is met even in the worst-case shortened clock cycle.",
      keyPoints: ["Temporal (cycle-to-cycle) variation", "Caused by power noise or PLL instability", "Reduces available setup time margin"],
      followUpQuestions: ["What is the difference between clock skew and clock jitter?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Summarize: Skew is spatial (difference between two points), Jitter is temporal (difference over time at the same point)."
  },
  {
    id: "vlsi-20",
    topicId: "vlsi",
    title: "What are the differences between a Latch and a Flip-Flop?",
    answer: {
      shortAnswer: "A latch is level-sensitive and transparent, while a flip-flop is edge-triggered.",
      detailedExplanation: "A latch allows data to pass through as long as the enable signal is active (e.g., high). This makes it level-sensitive. A flip-flop, typically constructed from two back-to-back latches (master-slave), only captures data on the rising or falling edge of the clock. Flip-flops are used for synchronous design to prevent race conditions.",
      interviewExplanation: "Latches are level-triggered, meaning they are transparent when enabled. Flip-flops are edge-triggered. We prefer flip-flops in standard digital design because edge-triggering simplifies timing analysis and avoids race conditions, whereas latches are smaller and faster, often used in custom high-speed data paths or clock gating cells.",
      keyPoints: ["Latch: Level-sensitive, transparent", "Flip-Flop: Edge-triggered", "Flip-flop = Master Latch + Slave Latch"],
      followUpQuestions: ["Why are latches used in clock gating circuits?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "If asked where latches are actually used, mention clock gating (Integrated Clock Gating cells)."
  },
  {
    id: "vlsi-21",
    topicId: "vlsi",
    title: "Explain Latch-up in CMOS and how to prevent it.",
    answer: {
      shortAnswer: "Latch-up is the creation of a low-impedance path between VDD and GND due to parasitic bipolar transistors turning on, which can destroy the chip.",
      detailedExplanation: "In a CMOS layout, parasitic NPN and PNP bipolar transistors are naturally formed (e.g., between the p-substrate, n-well, and p/n diffusions). If a voltage spike or transient current forward-biases the junctions, these parasitic BJTs form a positive feedback loop (a thyristor/SCR structure) that draws massive current from VDD to ground.",
      interviewExplanation: "Latch-up happens when parasitic BJTs in the CMOS structure get accidentally turned on, creating a short circuit between power and ground. We prevent it by using guard rings around the n-wells and p-wells, and placing substrate/well tap contacts close to every transistor to tie the bulk potential firmly to VDD or GND.",
      keyPoints: ["Parasitic SCR (thyristor) structure", "Causes a short circuit from VDD to GND", "Prevented by guard rings and frequent well taps"],
      followUpQuestions: ["How do guard rings prevent latch-up?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "Mentioning the parasitic PNP and NPN thyristor structure shows deep physical understanding."
  },
  {
    id: "vlsi-22",
    topicId: "vlsi",
    title: "What is the Antenna Effect in VLSI?",
    answer: {
      shortAnswer: "The antenna effect is the accumulation of static charge on long metal interconnects during manufacturing, which can destroy the thin gate oxide of transistors.",
      detailedExplanation: "During plasma etching in fabrication, exposed metal wires act like antennas and collect charge. If a long metal wire is connected only to the gate of a MOSFET, the accumulated voltage can exceed the breakdown voltage of the thin gate oxide, permanently damaging the transistor.",
      interviewExplanation: "During chip manufacturing, plasma etching can cause charge to build up on long metal traces. If this trace is connected to a transistor gate, it can blow the gate oxide. We fix it by breaking the long metal trace and routing it up to a higher metal layer (jumping), or by adding a reverse-biased antenna diode near the gate to safely bleed off the charge.",
      keyPoints: ["Charge accumulation during plasma etching", "Can break down gate oxide", "Fixed by layer jumping or antenna diodes"],
      followUpQuestions: ["How does jumping to a higher metal layer fix the antenna effect?"]
    },
    difficulty: "Advanced",
    badges: ["Practical"],
    interviewTip: "Explain the two common fixes clearly: antenna diodes and metal jumpers/bridges."
  },
  {
    id: "vlsi-23",
    topicId: "vlsi",
    title: "Explain Crosstalk in VLSI.",
    answer: {
      shortAnswer: "Crosstalk is the unwanted electrical interference between adjacent parallel wires due to coupling capacitance.",
      detailedExplanation: "As wires get closer in sub-micron technologies, the coupling capacitance (Cc) between them increases. If an 'aggressor' wire switches, it can inject a voltage spike (glitch) onto a nearby 'victim' wire. It can also affect timing: if aggressor and victim switch in opposite directions, the effective capacitance doubles, increasing delay.",
      interviewExplanation: "Crosstalk is noise induced by neighboring wires. It causes two main problems: glitches, which might cause logic errors if they exceed noise margins, and timing variations (crosstalk delay). We mitigate it by spacing wires further apart, shielding critical signals with ground lines, or using buffer insertion.",
      keyPoints: ["Caused by coupling capacitance", "Causes glitches (noise) and delay variations", "Mitigated by spacing, shielding, and upsizing drivers"],
      followUpQuestions: ["What is the Miller effect in the context of crosstalk?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Distinguish between crosstalk noise (glitches) and crosstalk delay (timing impact)."
  },
  {
    id: "vlsi-24",
    topicId: "vlsi",
    title: "What is Electromigration?",
    answer: {
      shortAnswer: "Electromigration is the gradual displacement of metal atoms in a conductor due to the momentum transfer from flowing electrons.",
      detailedExplanation: "When a high current density flows through a metal wire, electrons collide with the metal ions, pushing them in the direction of the current. Over time, this causes voids (open circuits) in some areas and hillocks (short circuits) in others, eventually leading to chip failure.",
      interviewExplanation: "Electromigration is a physical wear-out mechanism. High current densities literally push metal atoms out of place, causing wires to break or short with neighboring wires. To prevent this, we must ensure metal wires are wide enough to handle the expected current density, especially on power and clock nets.",
      keyPoints: ["Physical movement of metal atoms", "Caused by high current density", "Causes opens (voids) or shorts (hillocks)", "Fix: widen wires, use multiple vias"],
      followUpQuestions: ["Why are power grids and clock trees most susceptible to electromigration?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Mention that power lines (VDD/GND) carry unidirectional DC current, making them highly susceptible to EM."
  },
  {
    id: "vlsi-25",
    topicId: "vlsi",
    title: "Draw and explain a 6T SRAM Cell.",
    answer: {
      shortAnswer: "A 6T SRAM cell consists of two cross-coupled inverters (4 transistors) to store data, and two access transistors to read/write data.",
      detailedExplanation: "The core is two CMOS inverters connected back-to-back, forming a bi-stable latch. Two NMOS access transistors connect the internal nodes to the Bitline (BL) and Bitline-Bar (BLB). The Wordline (WL) controls the access transistors. During a read, the cell pulls one of the precharged bitlines down. During a write, strong bitlines overpower the internal inverters.",
      interviewExplanation: "An SRAM cell uses 6 transistors. The cross-coupled inverters hold the state indefinitely as long as power is applied. The access transistors connect the cell to the bitlines when the wordline is high. Sizing is critical: for reading, the pull-down NMOS must be stronger than the access NMOS (read stability). For writing, the access NMOS must be stronger than the pull-up PMOS (writeability).",
      keyPoints: ["2 cross-coupled inverters, 2 access transistors", "Fast, but large area", "Read stability vs Writeability sizing tradeoff"],
      followUpQuestions: ["Why is SRAM faster than DRAM?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Be prepared to draw the schematic and explain the sizing requirements for read and write stability."
  },
  {
    id: "vlsi-26",
    topicId: "vlsi",
    title: "What is the difference between SRAM and DRAM?",
    answer: {
      shortAnswer: "SRAM uses flip-flops/latches to store data and is fast but large. DRAM uses a capacitor and requires periodic refreshing, making it slower but much denser.",
      detailedExplanation: "SRAM (Static RAM) typically uses 6 transistors per cell, retaining data as long as power is on. It's used for CPU caches. DRAM (Dynamic RAM) uses 1 transistor and 1 capacitor. The capacitor leaks charge, so it must be continuously refreshed. DRAM is smaller, cheaper, and used for main memory.",
      interviewExplanation: "SRAM is faster and doesn't need refreshing because it uses cross-coupled inverters. However, a 6T SRAM cell takes up much more physical area than a 1T1C DRAM cell. Therefore, we use SRAM for high-speed cache on the CPU, and DRAM for large capacity main memory.",
      keyPoints: ["SRAM: 6T, fast, large, no refresh", "DRAM: 1T+1C, slower, dense, needs refresh"],
      followUpQuestions: ["What causes the capacitor in DRAM to leak?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked"],
    interviewTip: "Relate their architectural uses: SRAM for L1/L2 Cache, DRAM for Main Memory (RAM)."
  },
  {
    id: "vlsi-27",
    topicId: "vlsi",
    title: "What is Logical Effort?",
    answer: {
      shortAnswer: "Logical effort is a method to estimate the delay of a logic gate based on its topology compared to a standard inverter.",
      detailedExplanation: "The method of logical effort simplifies transistor sizing and delay calculation. Delay = p + g*h, where 'p' is parasitic delay, 'g' is logical effort (gate complexity relative to an inverter), and 'h' is electrical effort (load cap / input cap). It helps in finding the optimal number of stages and sizes for minimum delay.",
      interviewExplanation: "Logical effort is a quick hand-calculation technique. It tells us how much worse a logic gate is at driving a load compared to an inverter. For example, a 2-input NAND has a logical effort of 4/3, meaning it's 33% slower than an inverter with the same input capacitance. It's incredibly useful for optimizing buffer trees.",
      keyPoints: ["Compares gate drive capability to an inverter", "Delay = parasitic delay + (logical * electrical effort)", "NAND2 g = 4/3, NOR2 g = 5/3"],
      followUpQuestions: ["How do you find the optimal number of buffer stages to drive a large capacitance?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical", "Conceptual"],
    interviewTip: "Memorize the logical effort values for a 2-input NAND (4/3) and 2-input NOR (5/3)."
  },
  {
    id: "vlsi-28",
    topicId: "vlsi",
    title: "Explain the Elmore Delay Model.",
    answer: {
      shortAnswer: "Elmore delay is a simple analytical model used to estimate the delay of an RC tree network.",
      detailedExplanation: "Instead of solving complex differential equations, Elmore delay approximates the delay of an RC network by summing the RC time constants. The delay to any node is the sum over all nodes of the capacitance at that node multiplied by the shared resistance path between the source and that node.",
      interviewExplanation: "Elmore delay allows us to estimate interconnect delay very quickly. If you have a wire modeled as multiple RC segments, the delay at the end is approximately R1*C1 + (R1+R2)*C2 + ... It shows that wire delay grows quadratically with length, which is why we must insert repeaters in long wires.",
      keyPoints: ["Approximates delay in RC trees", "Shows that wire delay is proportional to Length^2", "Used heavily in EDA routing tools"],
      followUpQuestions: ["Why does wire delay grow quadratically with length?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical"],
    interviewTip: "Highlight the conclusion: because R and C both increase with wire length, RC delay scales quadratically."
  },
  {
    id: "vlsi-29",
    topicId: "vlsi",
    title: "What is Pass Transistor Logic? What are its drawbacks?",
    answer: {
      shortAnswer: "Pass transistor logic uses transistors as switches to pass logic levels directly, reducing the transistor count but suffering from degraded signal levels.",
      detailedExplanation: "Instead of using PMOS for pull-up and NMOS for pull-down, inputs are applied directly to the source/drain terminals. An NMOS passes a strong 0 but a weak 1 (VDD - Vth). A PMOS passes a strong 1 but a weak 0 (|Vth|).",
      interviewExplanation: "Pass transistor logic can implement functions like XOR with fewer transistors than standard CMOS. However, its main drawback is voltage degradation. An NMOS cannot pass a full VDD; it drops a threshold voltage. This reduced voltage reduces the noise margin and can cause static power leakage in the next logic stage.",
      keyPoints: ["Fewer transistors for certain functions", "NMOS passes weak 1, PMOS passes weak 0", "Requires level restorers to prevent leakage"],
      followUpQuestions: ["How does a Transmission Gate solve the weak 1/0 problem?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Always mention the voltage drop (VDD - Vtn) and how it affects the subsequent CMOS gate (causes static leakage)."
  },
  {
    id: "vlsi-30",
    topicId: "vlsi",
    title: "Explain the Transmission Gate.",
    answer: {
      shortAnswer: "A transmission gate connects an NMOS and a PMOS transistor in parallel to act as an ideal bidirectional switch.",
      detailedExplanation: "Since NMOS passes a strong 0 and PMOS passes a strong 1, placing them in parallel ensures that both logic 1 and logic 0 are passed perfectly without a threshold voltage drop. It requires complementary control signals to the gates.",
      interviewExplanation: "To overcome the threshold voltage drop in pass transistors, we use a Transmission Gate. By putting an NMOS and PMOS in parallel, the PMOS pulls the output all the way up to VDD, and the NMOS pulls it all the way down to GND. It's heavily used in multiplexers and D-latches.",
      keyPoints: ["Parallel NMOS and PMOS", "Passes strong 1 and strong 0", "Bidirectional switch"],
      followUpQuestions: ["Can you draw a 2-to-1 MUX using transmission gates?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Be ready to draw the schematic and explain which transistor is conducting for different voltage levels."
  },
  {
    id: "vlsi-31",
    topicId: "vlsi",
    title: "What is Domino Logic? What are its advantages and disadvantages?",
    answer: {
      shortAnswer: "Domino logic is a form of dynamic logic followed by a static inverter, offering very high speed but suffering from charge sharing and high dynamic power.",
      detailedExplanation: "A domino gate consists of a precharge phase (clock low) where the output node is charged to VDD, and an evaluate phase (clock high) where the pull-down network conditionally discharges it. A static inverter is placed at the output to ensure cascading gates operate correctly.",
      interviewExplanation: "Domino logic is used for ultra-high-speed arithmetic circuits. It's fast because it relies on a very low input capacitance (only NMOS network). However, it requires a clock, dissipates high dynamic power due to constant precharging, and is susceptible to noise and charge sharing issues.",
      keyPoints: ["Precharge and evaluate phases", "Extremely fast, low area", "High power dissipation", "Non-inverting only"],
      followUpQuestions: ["What is charge sharing in dynamic logic?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Explain why the static inverter is mandatory (to prevent the next stage from falsely discharging during evaluation)."
  },
  {
    id: "vlsi-32",
    topicId: "vlsi",
    title: "What is Charge Sharing in dynamic logic?",
    answer: {
      shortAnswer: "Charge sharing is the unwanted redistribution of charge between the dynamic output node and internal parasitic capacitances, causing voltage drops.",
      detailedExplanation: "In the evaluate phase of a dynamic gate, if the top transistor of a pull-down network turns ON but the bottom transistor remains OFF, the precharged charge on the output node is shared with the parasitic capacitance between the two transistors. This causes the output voltage to drop.",
      interviewExplanation: "Charge sharing can cause a false logic 0. If the charge at the precharged node bleeds into the internal nodes of the pull-down network, the voltage dips. If it dips below the switching threshold of the output inverter, the gate produces an incorrect output. We fix this by adding a weak PMOS 'keeper' transistor to maintain the precharge voltage.",
      keyPoints: ["Redistribution of charge to internal caps", "Causes output voltage droop", "Fixed using a weak PMOS keeper"],
      followUpQuestions: ["How does a keeper transistor solve charge sharing?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Mention the 'keeper' transistor as the standard industry solution to charge sharing and leakage in dynamic logic."
  },
  {
    id: "vlsi-33",
    topicId: "vlsi",
    title: "What are Decoupling Capacitors (Decaps)?",
    answer: {
      shortAnswer: "Decaps are local capacitors placed near logic gates to act as temporary charge reservoirs, mitigating voltage droop during switching.",
      detailedExplanation: "When millions of transistors switch simultaneously (e.g., at a clock edge), they draw a massive transient current from the power supply. Due to the inductance and resistance of the power grid (L*di/dt drop), the local VDD sags. Decaps provide an immediate local source of charge to stabilize the voltage.",
      interviewExplanation: "Decaps are basically local batteries. During simultaneous switching events, the power grid cannot supply current fast enough due to parasitic inductance, causing IR drop and L*di/dt droop. We sprinkle decoupling capacitors (often made from MOS transistors) across the empty spaces of the chip to provide instant current and stabilize VDD.",
      keyPoints: ["Provide local charge during switching", "Mitigate IR drop and L*di/dt noise", "Usually implemented using MOS gate capacitance"],
      followUpQuestions: ["What are the drawbacks of adding too many decoupling capacitors?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Connect decaps to the equation V = L*(di/dt). Decaps supply the 'di' locally so it doesn't travel through the 'L'."
  },
  {
    id: "vlsi-34",
    topicId: "vlsi",
    title: "Difference between Mealy and Moore State Machines.",
    answer: {
      shortAnswer: "In a Moore machine, the output depends only on the current state. In a Mealy machine, the output depends on both the current state and the current inputs.",
      detailedExplanation: "Moore outputs are synchronous with the state transitions, making them safer but potentially requiring more states. Mealy outputs can change asynchronously if the input changes mid-cycle, meaning they respond one clock cycle faster but can propagate glitches from inputs to outputs.",
      interviewExplanation: "A Moore machine's outputs are perfectly stable because they only decode the state register. A Mealy machine decodes both the state and the input, meaning it reacts faster to input changes. However, in VLSI design, Mealy machines are risky because a glitch on the input can cause a glitch on the output, violating synchronous design principles.",
      keyPoints: ["Moore: Output = f(State)", "Mealy: Output = f(State, Input)", "Mealy is faster, Moore is safer (glitch-free)"],
      followUpQuestions: ["Why are Moore machines generally preferred in strict synchronous designs?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Highlight that Mealy outputs can glitch if the inputs glitch, which is a major concern in digital design."
  },
  {
    id: "vlsi-35",
    topicId: "vlsi",
    title: "What is DIBL (Drain Induced Barrier Lowering)?",
    answer: {
      shortAnswer: "DIBL is a short-channel effect where a high drain voltage lowers the potential barrier between the source and channel, decreasing the threshold voltage.",
      detailedExplanation: "In long-channel devices, the drain voltage has little effect on the channel near the source. In short-channel devices, the depletion region of the drain extends close to the source. A high Vds lowers the potential barrier that electrons must overcome, effectively lowering Vt and causing increased subthreshold leakage.",
      interviewExplanation: "As transistors get smaller, the drain gets too close to the source. When Vds is high, the electric field from the drain reaches the source and lowers the threshold voltage. This is DIBL. It's bad because it increases leakage current significantly even when the gate is turned off.",
      keyPoints: ["Short-channel effect", "High Vds lowers Vt", "Increases subthreshold leakage current"],
      followUpQuestions: ["How do FinFETs help mitigate DIBL?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Connect DIBL directly to increased leakage power in deep sub-micron nodes."
  },
  {
    id: "vlsi-36",
    topicId: "vlsi",
    title: "What is Velocity Saturation?",
    answer: {
      shortAnswer: "Velocity saturation occurs when the electric field in the channel becomes so high that carrier velocity stops increasing linearly and caps at a maximum limit.",
      detailedExplanation: "Normally, carrier drift velocity is proportional to the electric field (v = μE). In short-channel devices, the electric field (Vds/L) is extremely high. Carriers collide with the lattice (optical phonon scattering) so often that their velocity maxes out. Therefore, drain current becomes linearly proportional to Vgs - Vt, rather than quadratically.",
      interviewExplanation: "In older technologies, current scaled quadratically with gate voltage. In modern short-channel nodes, the electric field is so intense that electrons reach a speed limit, called velocity saturation. As a result, the current only scales linearly with gate voltage, reducing the expected performance gains of shrinking the transistor.",
      keyPoints: ["Carrier speed hits a physical limit", "Current becomes linear with Vgs instead of quadratic", "Limits performance of short-channel devices"],
      followUpQuestions: ["How does velocity saturation change the I-V equations of a MOSFET?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Emphasize that the saturation current becomes linear with respect to overdrive voltage (Vgs - Vt) instead of squared."
  },
  {
    id: "vlsi-37",
    topicId: "vlsi",
    title: "What is Subthreshold Leakage?",
    answer: {
      shortAnswer: "Subthreshold leakage is the tiny current that flows from drain to source even when the gate voltage is below the threshold voltage.",
      detailedExplanation: "A MOSFET doesn't turn off abruptly at Vgs = Vt. In the subthreshold region (weak inversion), the current decays exponentially as Vgs decreases. As power supply voltages scale down, Vt must also scale down to maintain performance, which exponentially increases this leakage current.",
      interviewExplanation: "Even when a transistor is 'OFF', it leaks. This subthreshold leakage is the primary source of static power dissipation in modern chips. Because the current drops off exponentially below Vt, lowering Vt for faster switching speed results in a massive penalty in leakage power.",
      keyPoints: ["Occurs when Vgs < Vt", "Exponential relationship with Vgs", "Primary component of static power"],
      followUpQuestions: ["What is Subthreshold Swing (SS)?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Important"],
    interviewTip: "Mention the subthreshold swing limit of ~60mV/decade at room temperature."
  },
  {
    id: "vlsi-38",
    topicId: "vlsi",
    title: "What is Hot Carrier Injection (HCI)?",
    answer: {
      shortAnswer: "HCI is a degradation mechanism where highly energized electrons gain enough momentum to shoot into the gate oxide and become trapped.",
      detailedExplanation: "In short-channel devices, the high electric field near the drain accelerates electrons to high energies ('hot' carriers). Some of these carriers gain enough energy to overcome the silicon-oxide barrier and get permanently trapped in the gate dielectric. This shifts the threshold voltage over time.",
      interviewExplanation: "HCI is an aging effect. Over years of operation, highly energetic electrons get trapped in the gate oxide. This physically damages the transistor, gradually increasing its threshold voltage and slowing down the circuit. To mitigate it, fabs use LDD (Lightly Doped Drain) regions to smooth out the electric field.",
      keyPoints: ["Electrons trapped in gate oxide", "Causes Vt shift and performance degradation over time", "Mitigated by Lightly Doped Drain (LDD) structures"],
      followUpQuestions: ["How does a Lightly Doped Drain (LDD) prevent HCI?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Categorize HCI as a reliability/aging issue, similar to Electromigration and NBTI."
  },
  {
    id: "vlsi-39",
    topicId: "vlsi",
    title: "What is NBTI (Negative Bias Temperature Instability)?",
    answer: {
      shortAnswer: "NBTI is an aging effect in PMOS transistors that causes an increase in threshold voltage over time, particularly under negative gate bias and high temperatures.",
      detailedExplanation: "When a PMOS transistor is heavily biased (gate at GND, source at VDD) at elevated temperatures, interface traps are generated at the Si-SiO2 interface. This positive charge buildup increases the absolute value of the PMOS threshold voltage, degrading its drive current and slowing down the circuit over its lifetime.",
      interviewExplanation: "NBTI is a severe reliability issue for PMOS transistors. If a PMOS sits in an ON state for a long time at a high temperature, its threshold voltage degrades. Designers must add timing margins (guard-bands) during synthesis to ensure the chip will still meet timing requirements 10 years later after NBTI degradation occurs.",
      keyPoints: ["Affects PMOS under negative bias", "Increases |Vt| and slows down circuit", "Worsened by high temperature"],
      followUpQuestions: ["How is NBTI different from HCI?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "NBTI affects PMOS, HCI affects mostly NMOS. Both cause the chip to slow down over years of use."
  },
  {
    id: "vlsi-40",
    topicId: "vlsi",
    title: "What is a Ring Oscillator?",
    answer: {
      shortAnswer: "A ring oscillator is a circuit consisting of an odd number of inverters connected in a loop, used to generate a clock signal or measure gate delay.",
      detailedExplanation: "Because there is an odd number of inverters, the circuit is unstable and continuously toggles. The frequency of oscillation is f = 1 / (2 * N * Td), where N is the number of inverters and Td is the delay of a single inverter. It's often used as an on-chip test structure to measure the silicon's actual speed.",
      interviewExplanation: "A ring oscillator is an odd number of inverters in a ring. It has no stable state, so it oscillates. Fabs place them on silicon wafers to measure the actual gate delay of the manufactured silicon. By measuring the frequency, we can calculate the exact delay of a single inverter (Td) and determine if the chip is a 'fast' or 'slow' process corner.",
      keyPoints: ["Odd number of inverters", "f = 1 / (2 * N * Td)", "Used to measure gate delay and process variations"],
      followUpQuestions: ["Why must a ring oscillator have an odd number of inverters?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Be ready to calculate the delay of one inverter if given the frequency and number of stages."
  }
];
