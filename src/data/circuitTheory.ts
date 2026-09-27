import type { Question } from '../types';

export const circuitTheoryQuestions: Question[] = [
  {
    id: "circuit-1",
    topicId: "circuit-theory",
    title: "What are Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL)? On what conservation principles are they based?",
    answer: {
      shortAnswer: "KCL states the sum of currents entering a node is zero (Conservation of Charge). KVL states the sum of voltages around a closed loop is zero (Conservation of Energy).",
      detailedExplanation: "KCL is based on the law of conservation of charge, implying that charge cannot accumulate at a node. The algebraic sum of currents meeting at a node is zero. KVL is based on the law of conservation of energy, meaning the total energy supplied in a loop equals the total energy consumed.",
      interviewExplanation: "In an interview, clearly state definitions first. 'KCL states that the algebraic sum of all currents entering and leaving a node is zero, which stems from the conservation of charge. KVL states the directed sum of potential differences around any closed loop is zero, based on the conservation of energy.'",
      keyPoints: ["KCL: Node, Conservation of Charge", "KVL: Loop, Conservation of Energy"],
      example: "In a node with 2A and 3A entering, 5A must leave.",
      followUpQuestions: ["When does KVL fail? (Answer: high-frequency AC where varying magnetic fields are present)"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Always mention the underlying conservation laws (charge for KCL, energy for KVL) as interviewers look for this fundamental understanding."
  },
  {
    id: "circuit-2",
    topicId: "circuit-theory",
    title: "Explain the Superposition Theorem.",
    answer: {
      shortAnswer: "In a linear, bilateral network with multiple sources, the response in any branch is the sum of responses caused by each source acting individually, with other sources turned off.",
      detailedExplanation: "The Superposition Theorem is used to solve complex circuits with multiple independent sources. To apply it, you calculate the circuit's response to one independent source at a time, replacing all other independent voltage sources with short circuits and independent current sources with open circuits. Dependent sources remain active.",
      interviewExplanation: "Start by defining the theorem and emphasizing the conditions: 'linear and bilateral'. Then explain the methodology: turning off other independent sources (shorting voltage sources, opening current sources) while keeping dependent sources intact.",
      keyPoints: ["Applicable only to linear, bilateral networks", "Voltage sources shorted; Current sources opened", "Does not apply to power calculation"],
      example: "Finding the current through a resistor in a circuit with a 10V battery and a 2A current source by solving for each separately and adding the currents.",
      followUpQuestions: ["Why can't Superposition be used to calculate power?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mention that it is only valid for linear responses (voltage and current), not for non-linear quantities like power (P = I^2*R)."
  },
  {
    id: "circuit-3",
    topicId: "circuit-theory",
    title: "State Thevenin's Theorem and its significance.",
    answer: {
      shortAnswer: "Thevenin's theorem states that any linear, two-terminal circuit can be replaced by an equivalent circuit consisting of a single voltage source (Vth) in series with a single resistor (Rth).",
      detailedExplanation: "It simplifies complex networks into a simple equivalent circuit. Vth is the open-circuit voltage at the terminals, and Rth is the equivalent resistance looking into the terminals with all independent sources turned off.",
      interviewExplanation: "Explain the definition, then highlight its practical use: 'It is highly useful for load analysis. If the load resistor changes, we don't need to re-analyze the entire circuit, just the simple equivalent circuit.'",
      keyPoints: ["Vth = Open-circuit voltage", "Rth = Equivalent resistance", "Simplifies load analysis"],
      example: "Simplifying a large power grid to analyze its effect on a single newly connected consumer load.",
      followUpQuestions: ["How is Norton's theorem related to Thevenin's theorem?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Practical"],
    interviewTip: "Interviewers often ask how to find Rth when dependent sources are present. Know the test-source method (apply 1V or 1A test source)."
  },
  {
    id: "circuit-4",
    topicId: "circuit-theory",
    title: "What is Maximum Power Transfer Theorem?",
    answer: {
      shortAnswer: "Maximum power is transferred from a source to a load when the load resistance equals the internal resistance (or Thevenin equivalent resistance) of the source.",
      detailedExplanation: "For DC circuits, R_load = R_thevenin. For AC circuits, the load impedance must be the complex conjugate of the source impedance (Z_load = Z_source*). This theorem maximizes power transfer, not efficiency (which is 50% at maximum power transfer).",
      interviewExplanation: "State the rule for DC (R_L = R_th) and AC (Z_L = Z_th*). Be sure to mention the efficiency trade-off: at maximum power transfer, efficiency is only 50%, which is why it's used in communication circuits but not power circuits.",
      keyPoints: ["DC: R_L = R_th", "AC: Z_L = Z_th*", "Efficiency is 50% at max power"],
      example: "Audio amplifiers use impedance matching to transfer maximum power to speakers.",
      followUpQuestions: ["Why isn't this theorem used in electrical power transmission?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Always distinguish between its application in electronics/communications (where signal power is small and maximizing it is crucial) versus power systems (where efficiency matters more than max power)."
  },
  {
    id: "circuit-5",
    topicId: "circuit-theory",
    title: "Explain the difference between Active and Passive elements.",
    answer: {
      shortAnswer: "Active elements can deliver electrical energy continuously (e.g., batteries, generators, transistors). Passive elements can only consume, store, or dissipate energy (e.g., resistors, capacitors, inductors).",
      detailedExplanation: "An active element has the ability to amplify a signal or supply power indefinitely. A passive element lacks this capability. While capacitors and inductors can store energy and release it, they cannot supply it continuously over infinite time, making them passive.",
      interviewExplanation: "Give clear definitions and multiple examples. Highlight that active elements inject energy into the circuit, while passive ones dissipate or temporarily store it. You can also mention the V-I characteristic: passive elements have V/I > 0 in the first and third quadrants.",
      keyPoints: ["Active: Deliver power continuously", "Passive: Consume/store power", "Examples: Transistor vs Resistor"],
      example: "An Op-Amp (active) can amplify a signal, while a Resistor (passive) only attenuates it.",
      followUpQuestions: ["Is a diode active or passive? (Answer: Passive, it cannot amplify or supply power)"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Be prepared to explain why energy-storing elements like capacitors are considered passive and not active."
  },
  {
    id: "circuit-6",
    topicId: "circuit-theory",
    title: "What is the difference between an Ideal and Practical Voltage Source?",
    answer: {
      shortAnswer: "An ideal voltage source maintains a constant output voltage regardless of the load current. A practical voltage source has internal resistance, so its output voltage drops as load current increases.",
      detailedExplanation: "Ideally, Rs (series internal resistance) is zero. Practically, Rs > 0. The terminal voltage of a practical source is V = V_ideal - I*Rs. As I increases, the terminal voltage decreases.",
      interviewExplanation: "Compare them using their V-I characteristics. 'An ideal voltage source has a horizontal V-I curve. A practical voltage source has a downward-sloping curve due to the voltage drop across its internal resistance.'",
      keyPoints: ["Ideal: Rs = 0", "Practical: Rs > 0", "V_terminal = V_source - I*Rs"],
      example: "A car battery's voltage dips slightly when starting the engine due to high current draw across its internal resistance.",
      followUpQuestions: ["What is an ideal current source?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Draw the V-I graph in your mind or on paper if given a chance. It shows clarity of thought."
  },
  {
    id: "circuit-7",
    topicId: "circuit-theory",
    title: "How do Inductors and Capacitors behave at steady-state DC?",
    answer: {
      shortAnswer: "In steady-state DC, an inductor acts as a short circuit (zero resistance), and a capacitor acts as an open circuit (infinite resistance).",
      detailedExplanation: "For DC, the frequency (f) is zero. Inductive reactance X_L = 2*pi*f*L = 0 (short circuit). Capacitive reactance X_C = 1 / (2*pi*f*C) = infinity (open circuit). Thus, after transients die out, inductors pass DC perfectly, while capacitors block DC completely.",
      interviewExplanation: "State the final behavior (short/open) and immediately justify it mathematically using the reactance formulas (X_L and X_C) setting f=0. This proves you know *why* they behave that way.",
      keyPoints: ["Inductor: Short Circuit in DC", "Capacitor: Open Circuit in DC", "f = 0 in DC"],
      example: "A capacitor used as a coupling capacitor to block DC bias but let AC signals pass.",
      followUpQuestions: ["How do they behave initially (t=0+) when a DC voltage is suddenly applied?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "This is a fundamental concept for solving steady-state and transient problems. Master the t=0 and t=infinity behaviors."
  },
  {
    id: "circuit-8",
    topicId: "circuit-theory",
    title: "Explain the Time Constant of RC and RL circuits.",
    answer: {
      shortAnswer: "The time constant (Tau) is the time required for the circuit's response to reach 63.2% of its final value during charging, or drop to 36.8% during discharging. Tau = RC for RC circuits, and Tau = L/R for RL circuits.",
      detailedExplanation: "It dictates how fast a transient response decays. A smaller time constant means the circuit responds faster. It is derived from the exponential terms e^(-t/RC) or e^(-Rt/L) in transient equations. Practically, steady state is assumed to be reached after 5 time constants.",
      interviewExplanation: "Define what it represents physically (speed of response) and mathematically (time to reach ~63% of final change). Mention that it takes about 5 time constants (5 Tau) to reach over 99% of the steady state.",
      keyPoints: ["Tau = RC", "Tau = L/R", "63.2% of final value", "Steady state ~ 5 Tau"],
      example: "In a camera flash, a large capacitor and small resistor are used to discharge energy quickly (small RC time constant) into the flashbulb.",
      followUpQuestions: ["What is the significance of reaching 5 time constants?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Knowing the exact percentages (63.2% and 36.8%) and the 5-tau rule sets you apart as a detail-oriented engineer."
  },
  {
    id: "circuit-9",
    topicId: "circuit-theory",
    title: "What is Resonance in an RLC Series Circuit?",
    answer: {
      shortAnswer: "Resonance occurs when the inductive reactance equals the capacitive reactance (X_L = X_C). The circuit acts purely resistively, and current is maximized.",
      detailedExplanation: "At resonance, the imaginary parts of the impedance cancel out (Z = R + j(X_L - X_C) becomes Z = R). The voltage and current are exactly in phase (power factor = unity). The resonant frequency is f_r = 1 / (2 * pi * sqrt(LC)).",
      interviewExplanation: "Describe the condition X_L = X_C. Explain the implications: impedance is minimum (equal to R), current is maximum, and the power factor is 1. Mention the formula for resonant frequency.",
      keyPoints: ["X_L = X_C", "Impedance is minimum (Z=R)", "Current is maximum", "Power Factor = 1"],
      example: "Tuning a radio to a specific frequency uses series resonance to maximize the current for that specific signal.",
      followUpQuestions: ["What is Quality Factor (Q-factor)?", "How does parallel resonance differ?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Be ready to contrast this with parallel resonance (where impedance is maximized and current is minimized)."
  },
  {
    id: "circuit-10",
    topicId: "circuit-theory",
    title: "Define Quality Factor (Q-factor) and Bandwidth.",
    answer: {
      shortAnswer: "Q-factor measures the sharpness of resonance (energy stored vs energy dissipated). Bandwidth is the range of frequencies over which the power is at least half its maximum value.",
      detailedExplanation: "Q = Resonant Frequency / Bandwidth. A high Q-factor indicates a narrow, sharp resonant peak, meaning high selectivity. In a series circuit, Q = (1/R) * sqrt(L/C). Bandwidth (BW) = f_upper - f_lower.",
      interviewExplanation: "Explain the physical meaning: Q-factor is the ratio of maximum energy stored to energy dissipated per cycle. Relate Q directly to Bandwidth—they are inversely proportional. 'A highly selective receiver needs a high Q and narrow bandwidth.'",
      keyPoints: ["Q = Energy Stored / Energy Dissipated", "Q = f_r / BW", "High Q = Narrow Bandwidth = High Selectivity"],
      example: "A high Q-factor filter allows only a very specific frequency band to pass while heavily attenuating others.",
      followUpQuestions: ["How does increasing the resistance R affect the Q-factor in a series RLC circuit?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Remember the formulas relating Q to R, L, and C. In series resonance, higher R means lower Q."
  },
  {
    id: "circuit-11",
    topicId: "circuit-theory",
    title: "What is Power Factor, and why is a low power factor undesirable?",
    answer: {
      shortAnswer: "Power Factor (PF) is the cosine of the phase angle between voltage and current (True Power / Apparent Power). A low PF means more current is needed to deliver the same real power, increasing losses.",
      detailedExplanation: "PF = P / S = cos(theta). Real power (P) does actual work, while reactive power (Q) shuttles back and forth. A low PF implies high reactive power, leading to larger total current. This increases I^2*R losses in transmission lines and requires larger transformers and conductors.",
      interviewExplanation: "Start with the mathematical definition, then pivot to the practical engineering aspect. 'A low power factor draws excess reactive current from the grid, causing higher I^2*R heating losses and reducing the capacity of distribution networks.'",
      keyPoints: ["PF = Active Power / Apparent Power", "Low PF = High current for same power", "Causes increased copper losses"],
      example: "Industrial motors (highly inductive) cause low lagging power factors, so capacitor banks are installed to correct it.",
      followUpQuestions: ["How can power factor be improved?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Industrial applications frequently deal with power factor correction. Mentioning 'capacitor banks for inductive loads' shows practical knowledge."
  },
  {
    id: "circuit-12",
    topicId: "circuit-theory",
    title: "Explain Real, Reactive, and Apparent Power.",
    answer: {
      shortAnswer: "Real Power (P, Watts) performs actual work. Reactive Power (Q, VARs) sustains electric and magnetic fields. Apparent Power (S, VA) is the vector sum of both (S = P + jQ).",
      detailedExplanation: "Real power is dissipated in resistors. Reactive power is exchanged between the source and reactive components (inductors/capacitors) with an average of zero. Apparent power is the total power supplied by the source, calculated as V_rms * I_rms.",
      interviewExplanation: "Use the beer analogy if appropriate, but stick to technical terms. 'Real power is the actual power consumed. Reactive power doesn't do useful work but is necessary for magnetic fields in transformers and motors. Apparent power is what the infrastructure must be rated to handle.'",
      keyPoints: ["P = V*I*cos(theta)", "Q = V*I*sin(theta)", "S = V*I", "S^2 = P^2 + Q^2"],
      example: "A transformer is rated in kVA (Apparent Power) because it must handle the total voltage and current, regardless of the load's power factor.",
      followUpQuestions: ["Why are transformers rated in kVA and not kW?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Be ready to explain the power triangle and how P, Q, and S relate via the Pythagorean theorem."
  },
  {
    id: "circuit-13",
    topicId: "circuit-theory",
    title: "Why is AC used predominantly over DC for power transmission?",
    answer: {
      shortAnswer: "AC is used because its voltage can be easily stepped up or down using transformers, allowing for high-voltage, low-current transmission which minimizes I^2*R power losses over long distances.",
      detailedExplanation: "To transmit a given amount of power, increasing the voltage decreases the current (P = V*I). Lower current reduces line heating losses (P_loss = I^2*R). Transformers efficiently change AC voltage levels, a task that was historically difficult and expensive for DC.",
      interviewExplanation: "Highlight the role of the transformer. 'The fundamental reason is the transformer. It allows us to step up AC to very high voltages for transmission to minimize I^2R losses, and step it down safely for consumer use.' Note that modern HVDC is used for very long distances, but AC remains standard.",
      keyPoints: ["Transformers require alternating magnetic fields", "High V -> Low I -> Low I^2*R losses", "HVDC is an exception for ultra-long distance"],
      example: "Power generated at 11kV is stepped up to 400kV for cross-country transmission, then down to 230V for homes.",
      followUpQuestions: ["When is DC transmission (HVDC) preferred over AC?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Acknowledging HVDC (High Voltage DC) for underwater cables or extremely long transmission lines shows advanced understanding."
  },
  {
    id: "circuit-14",
    topicId: "circuit-theory",
    title: "What is the Skin Effect?",
    answer: {
      shortAnswer: "Skin effect is the tendency of alternating current (AC) to concentrate near the surface (skin) of a conductor, increasing the conductor's effective resistance.",
      detailedExplanation: "At DC, current is distributed uniformly across a conductor's cross-section. In AC, rapidly changing magnetic fields create opposing eddy currents inside the conductor, pushing the main current toward the outside. The higher the frequency, the more pronounced the effect.",
      interviewExplanation: "Explain the cause (internal eddy currents) and the consequence (reduced effective cross-sectional area, leading to higher AC resistance compared to DC resistance). Mention that skin depth is inversely proportional to frequency.",
      keyPoints: ["Current flows near the surface", "Increases effective resistance", "Worsens at high frequencies"],
      example: "Overhead transmission lines often use ACSR (Aluminum Conductor Steel Reinforced) where the inner steel core provides strength and the outer aluminum carries the current due to the skin effect.",
      followUpQuestions: ["How can we reduce the skin effect? (Answer: using stranded wire like Litz wire)"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Relating Skin Effect to practical conductor design (like stranded cables or ACSR) scores major bonus points."
  },
  {
    id: "circuit-15",
    topicId: "circuit-theory",
    title: "Explain Norton's Theorem.",
    answer: {
      shortAnswer: "Norton's Theorem states that any linear, two-terminal circuit can be replaced by an equivalent circuit consisting of a single current source (In) in parallel with a single resistor (Rn).",
      detailedExplanation: "It is the dual of Thevenin's theorem. The Norton current (In) is the short-circuit current across the load terminals. The Norton resistance (Rn) is the same as the Thevenin resistance (Rth), found by turning off independent sources.",
      interviewExplanation: "Describe the theorem and its components. Point out that a Norton equivalent can be derived directly from a Thevenin equivalent using Source Transformation: In = Vth / Rth, and Rn = Rth.",
      keyPoints: ["In = Short-circuit current", "Rn = Rth", "Dual of Thevenin's theorem"],
      example: "Simplifying a complex sensor circuit to determine the current it can drive into an ADC.",
      followUpQuestions: ["How do you apply source transformation?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Emphasize the duality with Thevenin's theorem; if you know one, you easily know the other."
  },
  {
    id: "circuit-16",
    topicId: "circuit-theory",
    title: "What is Source Transformation?",
    answer: {
      shortAnswer: "Source transformation is the process of converting a real voltage source (V in series with R) to an equivalent real current source (I in parallel with R), or vice versa.",
      detailedExplanation: "For the transformation to be equivalent at the terminals, the relationship V = I * R must hold. The resistance R remains the same in both configurations. It is a powerful tool to simplify circuits before applying nodal or mesh analysis.",
      interviewExplanation: "Explain the conversion rule. 'A voltage source V in series with resistor R can be replaced by a current source I = V/R in parallel with the same resistor R. This is extremely useful in reducing the number of nodes or meshes in circuit analysis.'",
      keyPoints: ["V = I * R", "R remains the same", "Series R becomes Parallel R"],
      example: "Converting a 10V source in series with a 5-ohm resistor into a 2A current source in parallel with a 5-ohm resistor.",
      followUpQuestions: ["Can you apply source transformation to dependent sources? (Answer: Generally yes, but requires caution if the control variable is lost)"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Numerical"],
    interviewTip: "Remind the interviewer that ideal sources (without resistance) cannot be transformed."
  },
  {
    id: "circuit-17",
    topicId: "circuit-theory",
    title: "What is Millman's Theorem?",
    answer: {
      shortAnswer: "Millman's Theorem simplifies a circuit with multiple parallel voltage (or current) branches into a single equivalent voltage (or current) source and series resistance.",
      detailedExplanation: "For N parallel branches, each with a voltage source V_i and series resistance R_i, the equivalent Millman voltage V_m = (Sum of V_i/R_i) / (Sum of 1/R_i). The equivalent resistance R_m = 1 / (Sum of 1/R_i).",
      interviewExplanation: "Millman's theorem is effectively a shortcut for finding the common node voltage when multiple parallel sources are connected to it. It combines source transformation and parallel resistance calculations into one formula.",
      keyPoints: ["Calculates common node voltage", "V_m = Sum(I_i) / Sum(G_i)", "Simplifies parallel branches"],
      example: "Finding the voltage at a bus bar supplied by multiple parallel generators with different internal resistances.",
      followUpQuestions: ["How does this relate to Nodal Analysis?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical"],
    interviewTip: "Describe it as a special case of nodal analysis applied to a single pair of nodes."
  },
  {
    id: "circuit-18",
    topicId: "circuit-theory",
    title: "Explain Tellegen's Theorem.",
    answer: {
      shortAnswer: "Tellegen's Theorem states that the algebraic sum of the power delivered and absorbed by all branches in any lumped network at any instant is zero.",
      detailedExplanation: "Sum(V_k * I_k) = 0 for all k branches. It is purely based on the topology of the circuit (KCL and KVL) and is independent of the types of elements (linear, non-linear, active, passive, time-varying).",
      interviewExplanation: "Highlight its universality. 'Tellegen's theorem is a statement of the conservation of energy. It applies to *any* network regardless of the components, as long as it satisfies KCL and KVL. The sum of power generated equals the sum of power consumed.'",
      keyPoints: ["Conservation of power", "Sum(V*I) = 0", "Independent of element types"],
      example: "Checking calculations in a complex circuit simulation: total generated power must equal total dissipated power.",
      followUpQuestions: ["Does Tellegen's theorem apply to non-linear circuits? (Answer: Yes)"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Emphasize that it relies *only* on network topology, making it one of the most general theorems in circuit theory."
  },
  {
    id: "circuit-19",
    topicId: "circuit-theory",
    title: "What is the Reciprocity Theorem?",
    answer: {
      shortAnswer: "In a linear, bilateral network with one single source, the ratio of excitation (source) to response (current/voltage) remains unchanged if the positions of the source and response are interchanged.",
      detailedExplanation: "If a voltage source V in branch A produces a current I in branch B, then placing the same voltage source V in branch B will produce the same current I in branch A. The network must be linear and bilateral and contain only one independent source.",
      interviewExplanation: "Explain the 'swapping' concept. 'If I swap the input source and the output measurement point, the transfer impedance (V_in / I_out) remains identical. It proves the symmetry of linear bilateral circuits.'",
      keyPoints: ["Applies to linear, bilateral networks", "Single source only", "Transfer impedance is symmetric"],
      example: "Antenna reciprocity: The transmission and reception patterns of an antenna are identical.",
      followUpQuestions: ["Does reciprocity apply if the circuit contains dependent sources? (Answer: Generally no, dependent sources break the bilateral symmetry)"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Interviewers often test if you know the limitations: it strictly applies to single-source networks without dependent sources."
  },
  {
    id: "circuit-20",
    topicId: "circuit-theory",
    title: "Difference between Nodal Analysis and Mesh Analysis.",
    answer: {
      shortAnswer: "Nodal analysis uses KCL to find unknown node voltages. Mesh analysis uses KVL to find unknown mesh currents.",
      detailedExplanation: "Nodal analysis yields (N-1) equations for N nodes and is generally preferred when a circuit has many parallel elements or current sources. Mesh analysis yields M equations for M meshes and is preferred when a circuit has many series elements or voltage sources. Mesh is only applicable to planar circuits.",
      interviewExplanation: "Compare their foundations. 'Nodal is based on KCL, solving for voltages. Mesh is based on KVL, solving for currents. I choose the method that yields fewer equations. If there are many nodes but few meshes, I use Mesh, and vice versa.'",
      keyPoints: ["Nodal: KCL, Node Voltages", "Mesh: KVL, Mesh Currents", "Mesh requires planar circuits"],
      example: "Analyzing a standard home wiring diagram (parallel loads) is easier with Nodal analysis.",
      followUpQuestions: ["What is a Supernode and Supermesh?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Numerical"],
    interviewTip: "Mentioning the planar circuit limitation for Mesh analysis shows a deep theoretical understanding."
  },
  {
    id: "circuit-21",
    topicId: "circuit-theory",
    title: "What is a Supernode and a Supermesh?",
    answer: {
      shortAnswer: "A supernode is formed when an ideal voltage source connects two non-reference nodes. A supermesh is formed when an ideal current source is shared between two meshes.",
      detailedExplanation: "In nodal analysis, an ideal voltage source between nodes makes applying KCL difficult because the current through the source is unknown. We encapsulate the source and nodes into a 'supernode' and apply KCL to the whole boundary. Similarly, a shared current source in mesh analysis creates a 'supermesh' where we apply KVL to the outer loop.",
      interviewExplanation: "Explain them as problem-solving techniques. 'They are workarounds for when you can't express a current in terms of node voltages (supernode) or a voltage in terms of mesh currents (supermesh). You combine the equations of the two nodes/meshes and use the source value as a constraint equation.'",
      keyPoints: ["Supernode: Voltage source between nodes", "Supermesh: Current source between meshes", "Combines two equations into one plus a constraint"],
      example: "Solving an op-amp circuit where a floating battery connects two input nodes.",
      followUpQuestions: ["How many equations do you get from a supernode? (Answer: KCL for the supernode + constraint equation for the voltage source)"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical", "Conceptual"],
    interviewTip: "Clearly stating that these are mathematical techniques to eliminate unknown currents/voltages shows mastery of circuit analysis."
  },
  {
    id: "circuit-22",
    topicId: "circuit-theory",
    title: "Explain Star-Delta (Y-Δ) and Delta-Star (Δ-Y) Transformations.",
    answer: {
      shortAnswer: "These are mathematical techniques to simplify complex resistor networks that are neither in series nor parallel, by converting a Y-shaped network into a Δ-shaped equivalent, or vice versa.",
      detailedExplanation: "For Δ to Y: R_y = (Product of adjacent Δ resistors) / (Sum of all Δ resistors). For Y to Δ: R_Δ = (Sum of pairwise products of Y resistors) / (Opposite Y resistor). These transformations ensure the equivalent resistance between any three terminals remains identical.",
      interviewExplanation: "Describe when they are used. 'When simplifying a bridge circuit where resistors aren't clearly in series or parallel, applying a Star-Delta transform converts the topology, breaking the bridge and allowing standard series/parallel reduction.'",
      keyPoints: ["Simplifies complex topologies (e.g., bridges)", "Delta to Star: Product / Sum", "Star to Delta: Sum of Products / Opposite"],
      example: "Simplifying an unbalanced Wheatstone bridge to find total equivalent resistance.",
      followUpQuestions: ["If all three resistors in a Delta network are equal to R, what is the value of resistors in the equivalent Star network? (Answer: R/3)"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical"],
    interviewTip: "Memorize the shortcut for equal resistors: R_delta = 3 * R_star."
  },
  {
    id: "circuit-23",
    topicId: "circuit-theory",
    title: "What are the Initial Conditions of an Inductor and a Capacitor?",
    answer: {
      shortAnswer: "An inductor opposes a sudden change in current (i(0-) = i(0+)). A capacitor opposes a sudden change in voltage (v(0-) = v(0+)).",
      detailedExplanation: "Because energy stored in an inductor is 0.5*L*I^2, changing current instantaneously requires infinite voltage (V = L*di/dt). Similarly, energy in a capacitor is 0.5*C*V^2, and changing voltage instantaneously requires infinite current (I = C*dv/dt).",
      interviewExplanation: "State the rules clearly: 'Current through an inductor and voltage across a capacitor cannot change instantaneously.' This is the cornerstone of all transient analysis. Explain the physical impossibility of infinite power.",
      keyPoints: ["Inductor: i(0-) = i(0+)", "Capacitor: v(0-) = v(0+)", "Prevents infinite power requirements"],
      example: "Flicking a switch in an inductive circuit causes a spark because the inductor forces current to keep flowing across the air gap.",
      followUpQuestions: ["If an uncharged capacitor is suddenly connected to a DC source, how does it act at t=0+? (Answer: As a short circuit)"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "This is perhaps the most critical concept for transient problems. Practice applying t=0- to find initial conditions, then transitioning to t=0+."
  },
  {
    id: "circuit-24",
    topicId: "circuit-theory",
    title: "What happens if you connect a capacitor directly across a DC voltage source?",
    answer: {
      shortAnswer: "Initially, it acts as a short circuit and draws a massive inrush current. Once fully charged to the source voltage, it acts as an open circuit, and current drops to zero.",
      detailedExplanation: "At t=0, an uncharged capacitor has 0V across it. Connecting it to a battery with no series resistance theoretically causes infinite current (I = C dv/dt). In reality, the small internal resistance of the battery and wires limits the current, but a large, potentially damaging spark/inrush current still occurs.",
      interviewExplanation: "Walk through the timeline. 'At the exact instant of connection, it acts as a short circuit, drawing maximum inrush current. Exponentially, as it charges up to the supply voltage, the current decays to zero, acting as an open circuit in steady state.'",
      keyPoints: ["t=0+ : Acts as short circuit", "t=infinity : Acts as open circuit", "High inrush current without series resistance"],
      example: "Power supplies often have thermistors or soft-start circuits to prevent capacitor inrush current from blowing fuses.",
      followUpQuestions: ["How can you limit this inrush current?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Conceptual"],
    interviewTip: "Mentioning the practical aspect—that real wires have small resistance limiting the current—shows good engineering intuition."
  },
  {
    id: "circuit-25",
    topicId: "circuit-theory",
    title: "Explain Self and Mutual Inductance.",
    answer: {
      shortAnswer: "Self-inductance is the induction of voltage in a current-carrying wire due to the changing magnetic field of its own current. Mutual inductance is the induction of voltage in a coil due to the changing magnetic field of a neighboring coil.",
      detailedExplanation: "Faraday's Law dictates that a changing magnetic flux induces an EMF. In self-inductance (L), v = L(di/dt). In mutual inductance (M), changing current in Coil 1 induces voltage in Coil 2: v2 = M(di1/dt). The coupling coefficient (k) determines M = k * sqrt(L1*L2).",
      interviewExplanation: "Define both clearly, and introduce the coupling coefficient 'k'. Explain that transformers rely entirely on mutual inductance, maximizing 'k' by using an iron core.",
      keyPoints: ["Self: Emf induced by own current", "Mutual: Emf induced by neighboring current", "M = k * sqrt(L1 * L2)"],
      example: "A transformer transfers power from the primary to the secondary winding purely via mutual inductance.",
      followUpQuestions: ["What is the dot convention?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Interviewers may ask about the bounds of 'k' (0 to 1). Knowing that k=1 is ideal coupling (transformers) and k=0 is no coupling is essential."
  },
  {
    id: "circuit-26",
    topicId: "circuit-theory",
    title: "What is the Dot Convention in coupled circuits?",
    answer: {
      shortAnswer: "The dot convention is a standard used to determine the relative polarity of voltages induced by mutual inductance in coupled coils.",
      detailedExplanation: "If current enters the dotted terminal of one coil, the induced voltage at the dotted terminal of the second coil is positive relative to its undotted terminal. If currents enter the dots of both coils, their mutual fluxes aid each other (add up).",
      interviewExplanation: "Explain how it simplifies mesh analysis for transformers. 'It establishes the phase relationship between mutually coupled coils. If current enters the dot in the primary, it acts as if it's leaving the dot in the secondary, which dictates whether to add or subtract the mutual voltage term (M*di/dt).'",
      keyPoints: ["Determines mutual voltage polarity", "Current in dot -> Positive at other dot", "Aiding or opposing fluxes"],
      example: "Wiring a transformer primary and secondary in phase for a specific amplifier circuit.",
      followUpQuestions: ["How does the equivalent inductance of two series-connected coils change depending on the dots? (Answer: L_eq = L1 + L2 +/- 2M)"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Draw two coils in the air with your hands or on paper to explain aiding vs opposing fluxes; it makes a complex topic very clear."
  },
  {
    id: "circuit-27",
    topicId: "circuit-theory",
    title: "What is a Phasor?",
    answer: {
      shortAnswer: "A phasor is a complex number that represents the amplitude and phase of a sinusoidal AC waveform, simplifying time-domain calculus into frequency-domain algebra.",
      detailedExplanation: "Instead of solving differential equations for sinusoidal currents and voltages (e.g., V(t) = Vm cos(wt + theta)), phasors represent them as V = Vm \u2220 theta. Inductors and capacitors become complex impedances (jX_L and -jX_C).",
      interviewExplanation: "Describe it as a mathematical tool. 'A phasor transforms AC steady-state problems from differential equations into algebraic equations using complex numbers. The frequency (w) is assumed constant across the circuit and is dropped from the equations until the final time-domain conversion.'",
      keyPoints: ["Vector representing magnitude and phase", "Simplifies calculus to algebra", "Assumes constant frequency"],
      example: "Adding two AC voltages of the same frequency but different phases is complex in the time domain, but simple vector addition using phasors.",
      followUpQuestions: ["Can you use phasors for circuits with multiple different frequencies? (Answer: No, you must use Superposition and solve for each frequency separately)"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always mention that phasors are only valid for steady-state sinusoidal analysis, not transients."
  },
  {
    id: "circuit-28",
    topicId: "circuit-theory",
    title: "Explain the concept of Damping in RLC circuits.",
    answer: {
      shortAnswer: "Damping refers to the energy dissipation in an RLC circuit, determining how transients decay over time. It is categorized as underdamped, critically damped, or overdamped.",
      detailedExplanation: "Determined by the damping factor (alpha) compared to the resonant frequency (omega_0). If alpha < omega_0, it's underdamped (oscillates before settling). If alpha = omega_0, critically damped (settles fastest without oscillation). If alpha > omega_0, overdamped (settles slowly without oscillation).",
      interviewExplanation: "List the three types and their physical meaning. 'Underdamped causes ringing. Critically damped returns to steady state the fastest, making it ideal for systems like analog meters. Overdamped is sluggish.'",
      keyPoints: ["Underdamped: Oscillatory decay", "Critically damped: Fastest settling, no oscillation", "Overdamped: Slow decay, no oscillation"],
      example: "A car suspension system is ideally critically damped so that a bump causes the car to return to level smoothly and quickly without bouncing.",
      followUpQuestions: ["What component causes damping? (Answer: The resistor, as it dissipates energy)"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Relating electrical damping to mechanical systems (like a door closer or car shock absorber) demonstrates excellent multidisciplinary intuition."
  },
  {
    id: "circuit-29",
    topicId: "circuit-theory",
    title: "What is an Ideal Transformer?",
    answer: {
      shortAnswer: "An ideal transformer is a theoretical transformer with no power losses, infinite core permeability, no leakage flux, and no winding resistance.",
      detailedExplanation: "It perfectly transfers electrical energy from primary to secondary. Power in equals power out (V1*I1 = V2*I2). The voltage ratio is strictly equal to the turns ratio (V1/V2 = N1/N2), and the current ratio is inversely proportional (I1/I2 = N2/N1).",
      interviewExplanation: "Start with the assumptions (no losses, k=1). Then mention the mathematical relationships for voltage, current, and impedance transformation (Z_in = Z_load * (N1/N2)^2).",
      keyPoints: ["100% efficient (P_in = P_out)", "V1/V2 = N1/N2", "No leakage flux, infinite permeability"],
      example: "Used conceptually to perform impedance matching calculations in amplifier circuits.",
      followUpQuestions: ["What are the real-world losses in a practical transformer? (Answer: Copper losses, hysteresis, and eddy currents)"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Impedance reflection (Z1 = a^2 * Z2) is a frequent follow-up calculation question. Memorize that formula."
  },
  {
    id: "circuit-30",
    topicId: "circuit-theory",
    title: "What is meant by the Dual of a Network?",
    answer: {
      shortAnswer: "Two electrical networks are duals if the mesh equations of one are mathematically identical to the nodal equations of the other.",
      detailedExplanation: "In dual networks, voltage maps to current, resistance to conductance, capacitance to inductance, series to parallel, and open circuits to short circuits. KVL in one network corresponds directly to KCL in its dual.",
      interviewExplanation: "Explain the symmetry of circuit equations. 'Duality means replacing every element with its dual (e.g., R with G, L with C) and swapping the topology (series to parallel). If you know the solution to a series RLC circuit, you instantly know the mathematical solution to its dual parallel RLC circuit.'",
      keyPoints: ["Voltage <-> Current", "L <-> C", "Series <-> Parallel", "KVL <-> KCL"],
      example: "Thevenin's Theorem and Norton's Theorem are duals of each other.",
      followUpQuestions: ["Is it possible to draw a dual for every network? (Answer: No, only planar networks have duals)"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Mentioning that non-planar circuits do not have duals shows a strong grasp of advanced graph theory in circuits."
  }
];
