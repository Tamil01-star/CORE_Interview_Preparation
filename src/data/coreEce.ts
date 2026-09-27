import type { Question } from '../types';

export const coreEceQuestions: Question[] = [
  {
    id: "core-1",
    topicId: "core-ece",
    title: "What are Active and Passive components? Give examples.",
    answer: {
      shortAnswer: "Active components can deliver power or amplify signals, while passive components can only absorb, dissipate, or store energy.",
      detailedExplanation: "In electronic circuits, components are classified into active and passive based on their ability to deliver power. Active components (like Transistors, Op-Amps, Diodes) require an external power source to function and can inject power into a circuit or amplify a signal. Passive components (Resistors, Capacitors, Inductors) do not require external power and cannot provide power amplification; they can only attenuate or store energy.",
      interviewExplanation: "I would define active components as those capable of controlling the flow of current or amplifying a signal, such as a BJT or MOSFET. Passive components, on the other hand, cannot amplify a signal. Examples include resistors, which dissipate energy, and capacitors and inductors, which store energy.",
      keyPoints: ["Active components amplify signals", "Passive components store or dissipate energy", "Examples: Transistors (Active), Resistors (Passive)"],
      example: "A transistor amplifying a weak audio signal is an active component at work.",
      followUpQuestions: ["Is a diode an active or passive component?", "Can passive components have power gain?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always be ready to classify common components like diodes, which are sometimes debated but generally considered active because of their non-linear behavior."
  },
  {
    id: "core-2",
    topicId: "core-ece",
    title: "Explain Ohm's Law and its limitations.",
    answer: {
      shortAnswer: "Ohm's Law states that current through a conductor is proportional to voltage across it, provided temperature is constant (V = IR). It fails for non-linear devices.",
      detailedExplanation: "Ohm's Law is a fundamental principle stating that the voltage (V) across a conductor is directly proportional to the current (I) flowing through it, given a constant resistance (R). Mathematically, V = I * R. However, it only applies to ohmic or linear devices at a constant temperature. It does not apply to non-linear devices like diodes, transistors, or in situations where temperature changes significantly (like an incandescent bulb).",
      interviewExplanation: "Ohm's law relates voltage, current, and resistance in linear circuits as V=IR. However, in an interview, it's crucial to mention its limitations. It assumes a constant temperature and only applies to linear, bilateral elements. It doesn't hold true for semiconductors like diodes or for insulators.",
      keyPoints: ["V = IR", "Assumes constant temperature", "Applies to linear, bilateral networks", "Fails for non-linear elements like diodes"],
      followUpQuestions: ["Why does Ohm's Law fail for a diode?", "What is a bilateral network?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Don't just state the formula; explicitly mentioning the 'constant temperature' condition shows attention to detail."
  },
  {
    id: "core-3",
    topicId: "core-ece",
    title: "What are Kirchhoff's Circuit Laws (KCL and KVL)?",
    answer: {
      shortAnswer: "KCL states that total current entering a node equals total current leaving. KVL states the algebraic sum of voltages in a closed loop is zero.",
      detailedExplanation: "Kirchhoff's Current Law (KCL) is based on the conservation of charge. It dictates that at any junction or node in an electrical circuit, the sum of currents entering equals the sum of currents leaving. Kirchhoff's Voltage Law (KVL) is based on the conservation of energy. It states that in any closed loop network, the total voltage around the loop is equal to the sum of all the voltage drops within the same loop.",
      interviewExplanation: "Kirchhoff formulated two fundamental laws for circuit analysis. KCL applies to nodes and is based on charge conservation. KVL applies to closed loops and relies on energy conservation. Together, they allow us to analyze complex circuits by forming a system of linear equations.",
      keyPoints: ["KCL: Conservation of Charge (Sum of I = 0 at node)", "KVL: Conservation of Energy (Sum of V = 0 in loop)", "Fundamental for nodal and mesh analysis"],
      example: "Using KVL to find the unknown voltage drop across a resistor in a simple series battery circuit.",
      followUpQuestions: ["On which conservation principles are KCL and KVL based?", "Where does KVL fail?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Be prepared to quickly write down KCL or KVL equations for a simple circuit diagram if provided."
  },
  {
    id: "core-4",
    topicId: "core-ece",
    title: "Why is Silicon preferred over Germanium in semiconductor manufacturing?",
    answer: {
      shortAnswer: "Silicon is preferred because it has a lower leakage current, higher temperature stability, and easily forms an excellent natural insulator (Silicon Dioxide).",
      detailedExplanation: "While Germanium was used initially, Silicon dominates for several reasons. Silicon has a larger bandgap (~1.1 eV vs ~0.67 eV for Ge), which results in a much lower reverse saturation (leakage) current and allows Si devices to operate at much higher temperatures (up to 150°C vs 70°C for Ge). Most importantly, Silicon easily forms Silicon Dioxide (SiO2) when heated in oxygen. SiO2 is a high-quality electrical insulator crucial for MOSFET fabrication and IC manufacturing.",
      interviewExplanation: "Silicon is chosen over Germanium primarily for three reasons: first, its ability to form a native oxide layer (SiO2) which is essential for making MOSFETs and insulating layers in ICs. Second, it has a larger bandgap, which means less leakage current. Third, it operates reliably at higher temperatures than Germanium. It's also highly abundant in nature.",
      keyPoints: ["Native oxide (SiO2) is easy to grow", "Higher thermal stability (up to 150°C)", "Lower reverse leakage current due to wider bandgap", "Abundant and cheaper"],
      followUpQuestions: ["What is the bandgap energy of Silicon and Germanium?", "When would Germanium be preferred over Silicon?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always mention the native oxide layer (SiO2) as it is the most critical factor for the existence of modern CMOS technology."
  },
  {
    id: "core-5",
    topicId: "core-ece",
    title: "Explain the difference between Intrinsic and Extrinsic semiconductors.",
    answer: {
      shortAnswer: "Intrinsic semiconductors are pure, while extrinsic semiconductors are doped with impurities to increase conductivity.",
      detailedExplanation: "Intrinsic semiconductors (like pure Si or Ge) have equal numbers of electrons and holes. Their conductivity is very low at room temperature because very few covalent bonds are broken. To make them useful, impurities are deliberately added in a process called doping, creating extrinsic semiconductors. Depending on the impurity (trivalent or pentavalent), they become either P-type (hole majority) or N-type (electron majority) semiconductors.",
      interviewExplanation: "An intrinsic semiconductor is in its purest form, where the number of electrons equals the number of holes, resulting in poor room-temperature conductivity. Extrinsic semiconductors are those that have been doped with a small amount of impurity atoms. This greatly increases their conductivity and allows us to control the majority charge carriers, making them N-type or P-type.",
      keyPoints: ["Intrinsic = Pure", "Extrinsic = Doped", "Doping increases conductivity", "Pentavalent doping creates N-type, Trivalent creates P-type"],
      followUpQuestions: ["What is a pentavalent impurity?", "How does temperature affect intrinsic semiconductors?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Memorize examples of dopants: Boron/Gallium (Trivalent, P-type) and Phosphorus/Arsenic (Pentavalent, N-type)."
  },
  {
    id: "core-6",
    topicId: "core-ece",
    title: "How does a P-N Junction Diode work?",
    answer: {
      shortAnswer: "A P-N junction diode allows current to flow in one direction (forward bias) and blocks it in the opposite direction (reverse bias) due to a depletion region.",
      detailedExplanation: "When P-type and N-type materials are joined, electrons from the N-side diffuse to the P-side, and holes from the P-side diffuse to the N-side, leaving behind exposed ions. This creates a 'depletion region' with an electric field that opposes further diffusion. In forward bias, an external voltage overcomes this barrier, shrinking the depletion region and allowing current flow. In reverse bias, the external voltage widens the depletion region, preventing current flow (except for a tiny leakage current).",
      interviewExplanation: "A PN junction diode works as a one-way valve for electric current. The key mechanism is the depletion region at the junction. Under forward bias, the external potential opposes the built-in potential, narrowing the depletion width and allowing majority carriers to cross. Under reverse bias, the external potential adds to the built-in potential, widening the depletion width and blocking current flow.",
      keyPoints: ["Depletion region acts as a barrier", "Forward bias shrinks depletion region, allowing current", "Reverse bias widens depletion region, blocking current", "Acts as a rectifier"],
      followUpQuestions: ["What is the built-in potential of a Silicon diode?", "What happens if you increase the reverse bias voltage too much?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Use the terms 'majority carriers' and 'minority carriers' to sound more technical during your explanation."
  },
  {
    id: "core-7",
    topicId: "core-ece",
    title: "What is the difference between Zener Breakdown and Avalanche Breakdown?",
    answer: {
      shortAnswer: "Zener breakdown occurs in highly doped diodes at lower voltages due to a strong electric field, while Avalanche breakdown occurs in lightly doped diodes at higher voltages due to carrier collisions.",
      detailedExplanation: "Zener breakdown happens in heavily doped PN junctions where the depletion layer is very narrow. A strong electric field across this narrow region directly rips electrons from their covalent bonds. Avalanche breakdown happens in lightly doped junctions with wider depletion layers. Here, minority carriers accelerate under a high electric field and collide with atoms, knocking loose more electrons in a chain reaction (avalanche effect).",
      interviewExplanation: "Both are reverse breakdown mechanisms, but they operate differently. Zener breakdown occurs in heavily doped diodes below 5V-6V. The strong electric field across a narrow depletion region pulls electrons out of their bonds. Avalanche breakdown occurs in lightly doped diodes above 6V. It's a chain reaction where accelerated minority carriers collide with atoms to generate secondary electron-hole pairs.",
      keyPoints: ["Zener: Heavy doping, narrow depletion, high electric field, < 6V", "Avalanche: Light doping, wide depletion, collision/multiplication, > 6V", "Zener has a negative temperature coefficient; Avalanche has positive"],
      followUpQuestions: ["What is the temperature coefficient for both breakdowns?", "How is a Zener diode used as a voltage regulator?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Distinguishing them by their temperature coefficients (Zener is negative, Avalanche is positive) is a great way to impress the interviewer."
  },
  {
    id: "core-8",
    topicId: "core-ece",
    title: "Compare BJT and FET (Bipolar Junction Transistor vs Field Effect Transistor).",
    answer: {
      shortAnswer: "A BJT is a current-controlled, bipolar device with low input impedance. A FET is a voltage-controlled, unipolar device with high input impedance.",
      detailedExplanation: "A BJT uses both electrons and holes for conduction (bipolar). The base current controls the collector current, making it a current-controlled device. It has lower input impedance and is noisier but can have high gain. A FET uses only one type of charge carrier (unipolar). The voltage at the gate creates an electric field that controls the current channel, making it a voltage-controlled device. FETs have extremely high input impedance, lower noise, and are easier to scale down, which makes MOSFETs the choice for digital ICs.",
      interviewExplanation: "The primary difference is their control mechanism. BJT is a current-controlled device where the base current controls the collector current. FET is a voltage-controlled device where the gate voltage controls the drain current. Furthermore, FETs are unipolar and have a very high input impedance compared to BJTs. This high input impedance makes FETs, especially MOSFETs, ideal for low-power digital circuits and IC fabrication.",
      keyPoints: ["BJT: Current-controlled, Bipolar, Low input impedance", "FET: Voltage-controlled, Unipolar, High input impedance", "FETs are generally preferred for digital logic (CMOS)"],
      followUpQuestions: ["Why are MOSFETs preferred over BJTs in VLSI?", "What does 'bipolar' mean in BJT?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always highlight 'input impedance' and 'control mechanism' (voltage vs current) as the primary differentiators."
  },
  {
    id: "core-9",
    topicId: "core-ece",
    title: "What is the role of a Capacitor in a circuit?",
    answer: {
      shortAnswer: "A capacitor stores electrical energy in an electric field, blocks DC, and passes AC signals.",
      detailedExplanation: "A capacitor consists of two conductive plates separated by an insulator (dielectric). It stores energy in an electrostatic field. In DC circuits, once charged, it acts as an open circuit, blocking DC current. In AC circuits, the continuous charging and discharging allow AC signals to 'pass' through. Common roles include filtering noise, smoothing rectified power, coupling AC signals between stages, and tuning frequencies in RF circuits.",
      interviewExplanation: "A capacitor is a passive component that stores energy electrostatically. Its most common applications take advantage of its impedance characteristics: it offers infinite impedance to DC signals, effectively blocking them, while offering lower impedance to higher frequency AC signals. Therefore, it's widely used for filtering in power supplies, decoupling ICs, and coupling audio/RF signals.",
      keyPoints: ["Stores energy in an electric field", "Blocks DC (acts as an open circuit)", "Passes AC", "Used for filtering, coupling, and decoupling"],
      example: "In a power supply, a smoothing capacitor minimizes the ripple voltage from a rectifier to provide steady DC.",
      followUpQuestions: ["What is a decoupling capacitor?", "What happens if you connect a capacitor across a DC battery?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Conceptual"],
    interviewTip: "Mentioning specific applications like 'bypass', 'coupling', or 'smoothing' shows practical knowledge beyond just the textbook definition."
  },
  {
    id: "core-10",
    topicId: "core-ece",
    title: "Explain the working principle of an Inductor.",
    answer: {
      shortAnswer: "An inductor stores energy in a magnetic field and opposes any change in the current flowing through it.",
      detailedExplanation: "An inductor is usually a coil of wire. When current flows through it, a magnetic field is generated. According to Faraday's and Lenz's laws, if the current attempts to change, the magnetic field induces a voltage across the coil that opposes that change in current (V = L * di/dt). Therefore, inductors act as a short circuit to steady DC but oppose AC or transient changes.",
      interviewExplanation: "An inductor stores energy in the form of a magnetic field. Its fundamental property is that it opposes any change in current. For a DC signal, after reaching steady state, it acts like a simple wire (short circuit). For AC signals, it presents an impedance that increases with frequency. Because of this, inductors are heavily used in chokes, filters, and transformers.",
      keyPoints: ["Stores energy in a magnetic field", "Opposes changes in current (V = L di/dt)", "Shorts DC, blocks high-frequency AC"],
      followUpQuestions: ["Why does a spark sometimes occur when a switch connected to an inductive load is opened?", "What is an ideal inductor?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Relate inductors to the concept of electrical inertia—they keep current flowing steady just like mass keeps physical objects moving."
  },
  {
    id: "core-11",
    topicId: "core-ece",
    title: "What are the ideal characteristics of an Operational Amplifier (Op-Amp)?",
    answer: {
      shortAnswer: "An ideal Op-Amp has infinite open-loop gain, infinite input impedance, zero output impedance, infinite bandwidth, and infinite CMRR.",
      detailedExplanation: "An operational amplifier is a high-gain voltage amplifier with differential inputs. For theoretical analysis, an 'ideal' Op-Amp is assumed to have: 1) Infinite open-loop voltage gain. 2) Infinite input impedance (draws no current at input pins). 3) Zero output impedance (can drive any load). 4) Infinite bandwidth (amplifies all frequencies equally). 5) Infinite Common-Mode Rejection Ratio (CMRR, rejects noise common to both inputs). 6) Zero offset voltage.",
      interviewExplanation: "When discussing Op-Amps, we often assume ideal characteristics to simplify circuit analysis. An ideal Op-Amp has infinite input impedance, meaning no current flows into its terminals. It has zero output impedance, acting as a perfect voltage source. It also possesses infinite open-loop gain, infinite bandwidth, and infinite CMRR, meaning it perfectly rejects common-mode noise.",
      keyPoints: ["Infinite input impedance (R_in = ∞)", "Zero output impedance (R_out = 0)", "Infinite open-loop gain (A = ∞)", "Infinite Bandwidth", "Infinite CMRR"],
      followUpQuestions: ["What is the concept of Virtual Ground?", "How do practical Op-Amps differ from ideal ones?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Be prepared to explain how the 'Virtual Ground' concept directly derives from the infinite gain and infinite input impedance characteristics."
  },
  {
    id: "core-12",
    topicId: "core-ece",
    title: "What is CMRR (Common-Mode Rejection Ratio) in an Op-Amp?",
    answer: {
      shortAnswer: "CMRR is the ability of a differential amplifier to reject signals (like noise) that appear simultaneously and in-phase on both input terminals.",
      detailedExplanation: "A differential amplifier is supposed to amplify only the difference between its two inputs. However, practical Op-Amps also slightly amplify the common-mode signal (the average of the two inputs). CMRR is the ratio of the differential gain (Ad) to the common-mode gain (Acm), usually expressed in decibels (dB). A high CMRR is critical in environments with high electromagnetic interference, as it ensures external noise picked up equally by both inputs is canceled out.",
      interviewExplanation: "CMRR stands for Common-Mode Rejection Ratio. It defines an Op-Amp's ability to reject a signal that is common to both of its input terminals. Mathematically, it is the ratio of differential gain to common-mode gain. In practical applications like ECG machines or audio cables, both wires pick up the same 50/60Hz power line noise. A high CMRR ensures the amplifier amplifies only the desired differential signal and suppresses the common noise.",
      keyPoints: ["CMRR = Ad / Acm", "Usually expressed in dB: 20 * log10(Ad / Acm)", "Measures rejection of common noise", "Ideal CMRR is infinite"],
      example: "Rejecting 60Hz hum picked up by long microphone cables.",
      followUpQuestions: ["What causes poor CMRR in a practical circuit?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Mentioning the formula (Ad/Acm) and practical applications like rejecting 60Hz mains hum will demonstrate deep understanding."
  },
  {
    id: "core-13",
    topicId: "core-ece",
    title: "What is Slew Rate in an Operational Amplifier?",
    answer: {
      shortAnswer: "Slew rate is the maximum rate of change of the output voltage of an Op-Amp, typically measured in Volts per microsecond (V/μs).",
      detailedExplanation: "The slew rate dictates how fast an Op-Amp can change its output in response to a sudden change in input (like a step function). It is caused by the internal compensation capacitors of the Op-Amp that take a finite time to charge and discharge with limited internal currents. If an input signal's frequency and amplitude demand an output change faster than the slew rate, the output signal will distort, turning sine waves into triangular waves.",
      interviewExplanation: "Slew rate defines the maximum speed at which an Op-Amp's output can respond to an abrupt change at the input. It's measured in Volts per microsecond. It is primarily limited by the charging and discharging of the internal compensation capacitor by a fixed internal tail current. High-frequency, large-amplitude signals are most susceptible to slew rate induced distortion.",
      keyPoints: ["Maximum rate of change of output voltage", "Measured in V/μs", "Causes distortion in high-frequency, large-amplitude signals", "Slew Rate = 2 * pi * f_max * V_peak"],
      followUpQuestions: ["How does slew rate affect a square wave?", "What is the difference between bandwidth and slew rate?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Distinguish between bandwidth (small signal limitation) and slew rate (large signal limitation)."
  },
  {
    id: "core-14",
    topicId: "core-ece",
    title: "Differentiate between Analog and Digital signals.",
    answer: {
      shortAnswer: "Analog signals are continuous in both time and amplitude, whereas digital signals are discrete in both time and amplitude.",
      detailedExplanation: "An analog signal represents physical measurements (like temperature or sound) and can take on an infinite number of values within a range, varying continuously over time. It is highly susceptible to noise. A digital signal is a quantized representation where the signal only takes on discrete, finite values (usually binary 0 and 1) at discrete time intervals. Digital signals are much more immune to noise, easier to store, and easier to process using computers.",
      interviewExplanation: "Analog signals are continuous variations of voltage or current over time, representing real-world phenomena. They have infinite resolution but degrade easily with noise. Digital signals consist of discrete levels, typically binary highs and lows. Because they rely on thresholds rather than exact values, they are highly robust against noise. Digital representation allows for complex processing, error correction, and reliable data storage.",
      keyPoints: ["Analog: Continuous time and amplitude", "Digital: Discrete time and amplitude", "Digital is more resistant to noise", "Analog degrades during transmission/copying"],
      followUpQuestions: ["How is an analog signal converted to a digital signal? (ADC)", "What is quantization error?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Highlight that real-world physics is analog, and digital is just an abstraction we use to process information reliably."
  },
  {
    id: "core-15",
    topicId: "core-ece",
    title: "What is an electrical filter? Name its primary types.",
    answer: {
      shortAnswer: "A filter is a circuit that passes certain frequencies while attenuating others. Primary types are Low-Pass, High-Pass, Band-Pass, and Band-Stop.",
      detailedExplanation: "Filters are frequency-selective circuits. They modify the amplitude and phase characteristics of a signal with respect to frequency. \n1. Low-Pass Filter (LPF): Passes frequencies below a cutoff frequency.\n2. High-Pass Filter (HPF): Passes frequencies above a cutoff frequency.\n3. Band-Pass Filter (BPF): Passes a specific range of frequencies.\n4. Band-Stop/Notch Filter: Attenuates a specific range of frequencies. \nFilters can be passive (using R, L, C) or active (using Op-Amps).",
      interviewExplanation: "A filter is used to remove unwanted frequency components from a signal. The four basic types are low-pass, high-pass, band-pass, and band-stop filters. For example, a low-pass filter might be used after an audio DAC to smooth out the steps, while a band-stop or notch filter is commonly used to remove 60Hz electrical hum from a medical device.",
      keyPoints: ["Frequency-selective circuits", "LPF, HPF, BPF, Band-Stop", "Can be Active (with Op-Amps) or Passive"],
      example: "A subwoofer uses a low-pass filter to only output bass frequencies.",
      followUpQuestions: ["What is the difference between active and passive filters?", "What is a Bode plot?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Conceptual"],
    interviewTip: "Be ready to sketch a simple RC low-pass filter and draw its frequency response graph."
  },
  {
    id: "core-16",
    topicId: "core-ece",
    title: "What is Resonance in an RLC circuit?",
    answer: {
      shortAnswer: "Resonance occurs in an RLC circuit when the inductive reactance equals the capacitive reactance, resulting in a purely resistive overall impedance.",
      detailedExplanation: "In an AC circuit with a Resistor, Inductor, and Capacitor, inductive reactance (XL) increases with frequency, while capacitive reactance (XC) decreases. At a specific resonant frequency (fr), XL exactly equals XC, and their effects cancel each other out. In a series RLC circuit at resonance, the total impedance is at its minimum (equal to R), causing maximum current flow. This principle is used for tuning radio receivers.",
      interviewExplanation: "Resonance in an RLC circuit happens at a specific frequency where the imaginary parts of the impedance cancel out—meaning inductive reactance equals capacitive reactance. At this frequency, the circuit behaves purely resistively. In a series circuit, this means impedance is minimized and current is maximized. We use this phenomenon heavily in oscillators and RF tuners to select specific frequency bands.",
      keyPoints: ["Occurs when XL = XC", "Total impedance is purely resistive", "Series resonance = Minimum impedance, Maximum current", "Used in tuning and oscillator circuits"],
      followUpQuestions: ["What is the Quality factor (Q-factor) of a resonant circuit?", "How does parallel resonance differ from series resonance?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical", "Conceptual"],
    interviewTip: "Memorize the resonant frequency formula: f_r = 1 / (2 * pi * sqrt(LC))."
  },
  {
    id: "core-17",
    topicId: "core-ece",
    title: "Explain the working principle of a Transformer.",
    answer: {
      shortAnswer: "A transformer transfers electrical energy between circuits through electromagnetic induction without changing the frequency.",
      detailedExplanation: "A transformer consists of primary and secondary coils wound around a magnetic core. When alternating current flows through the primary coil, it creates a continuously changing magnetic flux in the core. According to Faraday's Law of Induction, this changing flux links with the secondary coil and induces an alternating voltage across it. The ratio of primary to secondary voltage is determined by the ratio of their turns (Vp/Vs = Np/Ns).",
      interviewExplanation: "Transformers operate on the principle of mutual electromagnetic induction. An AC voltage on the primary winding generates an alternating magnetic flux in the core. This flux cuts across the secondary winding, inducing a voltage. Importantly, it only works with AC, not DC. The power remains constant (ideally), so stepping up the voltage means stepping down the current, which is critical for efficient long-distance power transmission.",
      keyPoints: ["Works on Mutual Induction (Faraday's Law)", "Requires AC to function; blocks DC", "Vp/Vs = Np/Ns (Turns ratio)", "Power remains constant (P_in = P_out)"],
      followUpQuestions: ["Why can't a transformer operate on DC?", "What are the common losses in a transformer?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "If asked what happens if you apply DC to a transformer, confidently answer that it will likely burn out the primary winding due to the lack of inductive reactance."
  },
  {
    id: "core-18",
    topicId: "core-ece",
    title: "What is the difference between a Microprocessor and a Microcontroller?",
    answer: {
      shortAnswer: "A microprocessor is just a CPU requiring external memory and peripherals, while a microcontroller integrates a CPU, memory, and I/O peripherals onto a single chip.",
      detailedExplanation: "A Microprocessor (like an Intel Core i7) contains only the arithmetic logic unit (ALU), control unit, and registers. To build a system, you must add external RAM, ROM, and I/O ports. It is designed for general-purpose, high-performance computing. A Microcontroller (like an ATmega328 or PIC) is a 'computer on a chip'. It contains the CPU, alongside RAM, ROM (flash), timers, ADC, and I/O ports in a single IC, optimized for specific control tasks and low power consumption.",
      interviewExplanation: "The main difference is integration and application. A microprocessor is a standalone CPU designed for heavy, general-purpose tasks like personal computers, requiring external memory and peripherals. A microcontroller is an integrated System-on-a-Chip designed for embedded systems. It includes the CPU, RAM, ROM, and peripherals like timers and ADCs on one piece of silicon. This makes microcontrollers cheaper and more power-efficient for dedicated control tasks.",
      keyPoints: ["Microprocessor: CPU only, needs external components, general purpose", "Microcontroller: CPU + Memory + I/O on one chip, embedded control", "Microcontrollers are optimized for low power and specific tasks"],
      followUpQuestions: ["Give an example application for each.", "What is a System on a Chip (SoC)?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Mentioning cost and power consumption as deciding factors between the two is a very practical engineering point to make."
  },
  {
    id: "core-19",
    topicId: "core-ece",
    title: "What is an Embedded System?",
    answer: {
      shortAnswer: "An embedded system is a combination of hardware and software designed to perform a dedicated, specific function, often functioning within a larger mechanical or electrical system.",
      detailedExplanation: "Unlike a general-purpose computer that can run a multitude of different programs, an embedded system is highly specialized. It usually centers around a microcontroller or a custom SoC. The firmware is specifically written to interact with attached sensors and actuators to perform a single task reliably, often with real-time computing constraints. Examples include washing machine controllers, anti-lock braking systems (ABS), and pacemakers.",
      interviewExplanation: "An embedded system is a dedicated computing system designed to perform a specific task, as opposed to a general-purpose computer. It consists of a microcontroller or processor tightly coupled with custom hardware and dedicated firmware. Because they are task-specific, they are often optimized for size, cost, power consumption, and real-time reliability. A great example is the engine control unit (ECU) in a car.",
      keyPoints: ["Dedicated function (not general purpose)", "Combination of hardware and firmware", "Often subject to real-time constraints", "Optimized for size, cost, and power"],
      followUpQuestions: ["What is an RTOS (Real-Time Operating System)?", "How does firmware differ from software?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Always bring up the 'Real-Time' aspect and constraints (power, size, cost) when defining embedded systems."
  },
  {
    id: "core-20",
    topicId: "core-ece",
    title: "What is Modulation and why is it necessary in communication?",
    answer: {
      shortAnswer: "Modulation is the process of varying a high-frequency carrier wave based on a low-frequency message signal. It's necessary to reduce antenna size and avoid interference.",
      detailedExplanation: "Modulation superimposes information (voice, data) onto a high-frequency carrier wave by altering its amplitude, frequency, or phase. This is vital for several reasons: 1) Antenna size is inversely proportional to frequency; without modulation, transmitting audio would require antennas miles long. 2) Multiplexing: it allows multiple signals to be transmitted simultaneously over the same medium at different carrier frequencies without interfering with each other.",
      interviewExplanation: "Modulation is the technique of attaching a low-frequency baseband signal to a high-frequency carrier signal. We must do this primarily to reduce antenna size to practical dimensions, as antenna length is tied to wavelength. Additionally, modulation allows for frequency-division multiplexing, which means multiple radio stations or cell phones can share the airwaves simultaneously without overlapping, simply by using different carrier frequencies.",
      keyPoints: ["Varying a carrier signal with a message signal", "Reduces required antenna size (L = lambda/4)", "Allows frequency multiplexing (sharing the medium)", "Increases range of communication"],
      followUpQuestions: ["What are the main types of analog modulation?", "What is Demodulation?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Explaining the antenna size mathematical relationship (Antenna Length ~ Wavelength / 4) makes your answer highly concrete."
  },
  {
    id: "core-21",
    topicId: "core-ece",
    title: "Explain the difference between AM and FM.",
    answer: {
      shortAnswer: "In AM, the amplitude of the carrier wave varies with the message signal, while in FM, the frequency of the carrier wave varies.",
      detailedExplanation: "Amplitude Modulation (AM) varies the signal strength (amplitude) of the carrier in proportion to the message signal. It is simple to implement but highly susceptible to electrical noise, which mostly affects amplitude. Frequency Modulation (FM) keeps the amplitude constant and varies the instantaneous frequency in proportion to the message signal. FM requires a wider bandwidth but offers much better noise immunity and audio quality.",
      interviewExplanation: "AM and FM are two analog modulation techniques. In AM, the carrier's amplitude changes according to the information signal. It's prone to noise because atmospheric and electrical noise directly add to the signal's amplitude. In FM, the carrier's frequency changes instead, while the amplitude remains constant. Because noise mainly affects amplitude, FM receivers can simply clip the signal to remove noise, resulting in the higher audio quality we hear on FM radio.",
      keyPoints: ["AM: Varies amplitude, susceptible to noise, narrower bandwidth", "FM: Varies frequency, robust against noise, requires wider bandwidth", "Noise primarily affects amplitude, hence FM's superiority in quality"],
      followUpQuestions: ["Why does FM have better noise immunity than AM?", "What is Phase Modulation (PM)?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mentioning the concept of a 'limiter' circuit in FM receivers that clips amplitude noise is a great way to show deeper understanding."
  },
  {
    id: "core-22",
    topicId: "core-ece",
    title: "What is a Multiplexer (MUX)?",
    answer: {
      shortAnswer: "A multiplexer is a digital switch that selects one of many input data lines and routes it to a single output line based on select control signals.",
      detailedExplanation: "A MUX is a combinational logic circuit with 2^n input lines, n select lines, and 1 output line. The binary code applied to the select lines determines which input is connected to the output. It functions like a multi-position rotary switch. Multiplexers are widely used in digital systems for data routing, parallel-to-serial conversion, and implementing boolean functions without using individual logic gates.",
      interviewExplanation: "A multiplexer, often called a data selector, takes multiple input signals and forwards one of them to a single output line. The choice of which input to pass is controlled by a set of select lines. For example, an 8-to-1 MUX has 8 inputs, 3 select lines, and 1 output. They are essential components in communication systems for combining multiple data streams, and in computing for routing data on buses.",
      keyPoints: ["Many-to-one digital switch", "2^n inputs, n select lines, 1 output", "Used for data routing and resource sharing"],
      followUpQuestions: ["How can you implement a basic logic function using a MUX?", "What is a Demultiplexer (DEMUX)?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Be prepared to draw a simple 2-to-1 MUX using basic AND, OR, and NOT gates."
  },
  {
    id: "core-23",
    topicId: "core-ece",
    title: "What is the difference between a Latch and a Flip-Flop?",
    answer: {
      shortAnswer: "A latch is a level-sensitive memory element, while a flip-flop is edge-triggered.",
      detailedExplanation: "Both are basic memory elements that store 1 bit of data. A latch continuously checks its inputs and changes its output as long as the enable signal is active (level-sensitive). This can lead to race conditions in synchronous circuits. A flip-flop, however, only changes its output at the precise moment a clock signal transitions from high-to-low or low-to-high (edge-triggered). Flip-flops are created by linking latches (like in a master-slave configuration).",
      interviewExplanation: "The fundamental difference lies in how they respond to control signals. Latches are level-triggered, meaning the output transparency depends on the voltage level (high or low) of the enable signal. Flip-flops are edge-triggered, meaning they only capture input and change output during the rising or falling edge of a clock signal. Because edge-triggering prevents timing violations and race conditions, flip-flops are the standard building blocks for synchronous digital systems.",
      keyPoints: ["Latch: Level-sensitive, asynchronous", "Flip-Flop: Edge-triggered, synchronous", "Flip-flops prevent race conditions in sequential logic"],
      followUpQuestions: ["What is a race-around condition?", "How do you build a D flip-flop from latches?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "The phrase 'level-sensitive vs edge-triggered' is the exact keyword combination the interviewer is listening for."
  },
  {
    id: "core-24",
    topicId: "core-ece",
    title: "What is a Shift Register?",
    answer: {
      shortAnswer: "A shift register is a sequential logic circuit made of cascaded flip-flops used to store and transfer binary data.",
      detailedExplanation: "Shift registers consist of multiple flip-flops connected in a chain where the output of one connects to the input of the next. Upon a clock pulse, the stored data shifts one position to the left or right. They are used for data storage, data manipulation, and converting between serial and parallel data formats. Common types include SISO (Serial-In Serial-Out), SIPO, PISO, and PIPO.",
      interviewExplanation: "A shift register is a group of flip-flops set up to store and move data bit by bit. Every time a clock pulse occurs, the data shifts to the adjacent flip-flop. They are incredibly useful for communication interfaces like SPI or UART, where data needs to be converted from parallel bytes inside a processor to a serial bit-stream for transmission (using a PISO register).",
      keyPoints: ["Made of cascaded flip-flops", "Shifts data one bit per clock cycle", "Types: SISO, SIPO, PISO, PIPO", "Used for Serial/Parallel data conversion"],
      followUpQuestions: ["How does a shift register act as a delay element?", "What is a ring counter?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mentioning UART or SPI as a practical application of shift registers bridges theory with real-world engineering."
  },
  {
    id: "core-25",
    topicId: "core-ece",
    title: "Compare CMOS and TTL logic families.",
    answer: {
      shortAnswer: "CMOS uses MOSFETs, consumes very little power, and has a wide operating voltage. TTL uses BJTs, consumes more power, but was historically faster.",
      detailedExplanation: "TTL (Transistor-Transistor Logic) is built using BJTs. It typically operates strictly at 5V, consumes relatively high static power, but historically had very fast switching times. CMOS (Complementary Metal-Oxide-Semiconductor) uses paired PMOS and NMOS transistors. It consumes almost zero static power (power is only drawn during switching), operates over a wide voltage range (e.g., 3V to 15V), and has a much higher packing density, making it the standard for modern VLSI design.",
      interviewExplanation: "CMOS and TTL are fundamental logic families. The most significant difference is power consumption. CMOS uses field-effect transistors configured so that there is no direct path from power to ground except during switching, resulting in near-zero static power draw. TTL uses bipolar transistors and draws continuous current. While TTL was faster decades ago, modern CMOS has surpassed it in speed while maintaining vastly superior power efficiency and scaling capabilities.",
      keyPoints: ["CMOS: Low power, wide voltage range, high density, noise immune", "TTL: Higher power consumption, strict 5V operation, uses BJTs", "CMOS is the dominant technology for modern microprocessors"],
      followUpQuestions: ["Why does CMOS consume power only during switching?", "What is fan-out?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Explain that in CMOS, the N-MOS and P-MOS are never fully 'ON' at the same time in steady state, which is why static power is practically zero."
  },
  {
    id: "core-26",
    topicId: "core-ece",
    title: "What are DAC and ADC?",
    answer: {
      shortAnswer: "ADC converts continuous analog signals into discrete digital numbers. DAC does the reverse, converting digital numbers back into analog voltage or current.",
      detailedExplanation: "An Analog-to-Digital Converter (ADC) samples a continuous analog voltage and quantizes it into a binary digital number. Important parameters include resolution (number of bits) and sampling rate. A Digital-to-Analog Converter (DAC) takes a digital binary code and outputs a proportional continuous analog voltage. These are essential for interfacing digital computers with the real analog world (e.g., recording and playing back audio).",
      interviewExplanation: "Since microcontrollers only understand binary, we need ADCs to read real-world analog sensors like temperature or microphones. The ADC samples the signal and quantizes it to a digital value. Conversely, to interact with the analog world, like driving a speaker, we use a DAC to convert the processed digital data back into a smooth continuous voltage. Resolution and sampling speed dictate the quality of this conversion.",
      keyPoints: ["ADC: Analog to Digital (Sampling & Quantization)", "DAC: Digital to Analog", "Crucial for embedded systems interfacing with the real world", "Key specs: Resolution (bits) and Sampling Rate"],
      followUpQuestions: ["What is the Nyquist Sampling Theorem?", "Name an architecture for ADC (e.g., SAR, Flash)."]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Always mention the Nyquist theorem when discussing ADCs to show you understand the mathematical constraints of sampling."
  },
  {
    id: "core-27",
    topicId: "core-ece",
    title: "Explain the Nyquist-Shannon Sampling Theorem.",
    answer: {
      shortAnswer: "The theorem states that a continuous signal can be perfectly reconstructed from its samples if the sampling rate is greater than twice the maximum frequency of the signal.",
      detailedExplanation: "To convert an analog signal to digital without losing information, the sampling frequency (fs) must be at least twice the highest frequency component (fmax) present in the signal (fs >= 2*fmax). If the signal is sampled at a lower rate, a phenomenon called 'aliasing' occurs, where high-frequency components masquerade as low-frequency components, causing irreversible distortion during reconstruction.",
      interviewExplanation: "The Nyquist theorem is the foundational rule for digital signal processing. It dictates that you must sample a signal at a rate greater than twice its highest frequency component to accurately reconstruct it. For example, human hearing goes up to 20kHz. Therefore, CDs use a sampling rate of 44.1kHz, safely above the 40kHz Nyquist rate. If you sample too slowly, you get aliasing, which corrupts the signal.",
      keyPoints: ["fs >= 2 * fmax", "Prevents Aliasing", "Fundamental to digital audio, video, and communications"],
      example: "Audio CDs sample at 44.1 kHz to accurately capture human hearing up to 20 kHz.",
      followUpQuestions: ["What is an anti-aliasing filter?", "What happens if a signal is undersampled?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Bringing up the CD audio standard (44.1kHz vs 20kHz hearing) is the perfect practical example for this question."
  },
  {
    id: "core-28",
    topicId: "core-ece",
    title: "What is Shannon-Hartley theorem regarding channel capacity?",
    answer: {
      shortAnswer: "It establishes the maximum error-free data rate (channel capacity) that can be transmitted over a communication channel with a specific bandwidth and signal-to-noise ratio.",
      detailedExplanation: "The theorem is mathematically stated as C = B * log2(1 + S/N), where C is the channel capacity in bits per second, B is the bandwidth in Hertz, and S/N is the signal-to-noise ratio. It implies that you can increase the data rate by either increasing the bandwidth or increasing the transmission power (to improve SNR). It defines the theoretical upper bound for communication systems.",
      interviewExplanation: "The Shannon-Hartley theorem gives us the absolute speed limit for data transmission over a noisy channel. The equation C = B log2(1 + SNR) shows that data rate is directly tied to the available bandwidth and the signal-to-noise ratio. It proves that an infinitely fast data rate is impossible in the real world because bandwidth is finite and noise is always present. Modern coding schemes try to approach this theoretical limit.",
      keyPoints: ["C = B * log2(1 + S/N)", "Defines maximum error-free data rate", "Trade-off between Bandwidth and Signal-to-Noise Ratio"],
      followUpQuestions: ["What happens to capacity if bandwidth approaches infinity?", "How do modern systems approach the Shannon limit?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical", "Conceptual"],
    interviewTip: "Emphasize that this is a theoretical upper limit. Real-world systems never achieve perfect Shannon capacity due to hardware limitations."
  },
  {
    id: "core-29",
    topicId: "core-ece",
    title: "What are the common types of electrical noise in electronic circuits?",
    answer: {
      shortAnswer: "Common types include Thermal (Johnson) noise, Shot noise, and Flicker (1/f) noise.",
      detailedExplanation: "1. Thermal (Johnson-Nyquist) Noise: Caused by random thermal agitation of charge carriers in conductors. Present in all resistors regardless of voltage. 2. Shot Noise: Caused by the discrete nature of electric charge as electrons cross a potential barrier (like a PN junction). 3. Flicker (1/f) Noise: Dominant at low frequencies, caused by material defects and surface states in semiconductors. Understanding these is critical for designing low-noise amplifiers.",
      interviewExplanation: "Noise is any unwanted electrical signal. The inherent physical noises we deal with are Thermal noise, caused by the random motion of electrons due to heat; Shot noise, which arises because current is made of discrete individual electrons crossing barriers; and Flicker noise, which increases at low frequencies. To minimize noise, we typically focus on cooling the circuit, minimizing resistance in critical paths, and carefully selecting semiconductor components.",
      keyPoints: ["Thermal Noise (Heat-based, uniform frequency)", "Shot Noise (Discrete charge crossing junctions)", "Flicker Noise (1/f, low-frequency dominant)"],
      followUpQuestions: ["How can thermal noise be reduced?", "What is Signal-to-Noise Ratio (SNR)?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Distinguishing that Thermal noise happens in resistors while Shot noise happens in junctions (diodes/transistors) is a precise and impressive detail."
  },
  {
    id: "core-30",
    topicId: "core-ece",
    title: "What is an Oscillator and what are the Barkhausen criteria?",
    answer: {
      shortAnswer: "An oscillator generates continuous AC waveforms without any AC input. The Barkhausen criteria (loop gain >= 1, phase shift = 360°/0°) must be met for sustained oscillations.",
      detailedExplanation: "An oscillator is an amplifier with positive feedback. To sustain oscillations, it must satisfy two Barkhausen criteria: 1) The magnitude of the loop gain (A * β) must be equal to or slightly greater than 1. 2) The total phase shift around the loop must be exactly 0 degrees or a multiple of 360 degrees. If gain is <1, oscillations die out; if >1, they clip. Common types include RC phase-shift, Colpitts, and Crystal oscillators.",
      interviewExplanation: "An oscillator converts DC power into an AC signal. It relies on positive feedback. For an oscillator to produce a stable, sustained wave, it must adhere to the Barkhausen criteria. First, the total phase shift through the amplifier and the feedback network must be 360 degrees (or 0) so the feedback is truly positive. Second, the loop gain must be exactly unity. We usually design it slightly greater than 1 to start, and non-linearities bring it down to exactly 1.",
      keyPoints: ["Converts DC to AC via positive feedback", "Barkhausen Criterion 1: Loop gain |Aβ| >= 1", "Barkhausen Criterion 2: Loop phase shift = 0° or 360°"],
      followUpQuestions: ["Why are Quartz Crystal oscillators preferred for microcontrollers?", "What happens if loop gain is exactly 1 from the start?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Numerical"],
    interviewTip: "Explain the practical startup condition: The gain is initially set >1 to let the tiny thermal noise build up into an oscillation, then amplitude limitation settles the gain to 1."
  }
];
