import type { Question } from '../types';

export const analogElectronicsQuestions: Question[] = [
  {
    id: "analog-1",
    topicId: "analog-electronics",
    title: "What is a PN junction and how does it form a depletion region?",
    answer: {
      shortAnswer: "A PN junction is formed by joining p-type and n-type semiconductors, creating a depletion region where mobile charge carriers recombine, leaving fixed ions.",
      detailedExplanation: "When a p-type and n-type material are brought together, the concentration gradient causes holes to diffuse from the p-side to the n-side and electrons to diffuse from the n-side to the p-side. This recombination near the junction leaves behind uncompensated immobile ions (positive on the n-side, negative on the p-side), forming a depletion region devoid of free carriers. The built-in electric field opposes further diffusion, establishing thermal equilibrium.",
      interviewExplanation: "I would explain that a PN junction acts as the fundamental building block of most semiconductor devices. I'd describe the diffusion of carriers due to concentration gradients and how the resulting immobile ions create an electric field (barrier potential) that stops further carrier movement, forming the depletion region.",
      keyPoints: ["Diffusion of majority carriers", "Recombination leaves fixed ions", "Built-in potential barrier", "Thermal equilibrium state"],
      example: "In a silicon diode, this built-in potential is approximately 0.7V at room temperature.",
      followUpQuestions: ["How does temperature affect the built-in potential?", "What happens under forward bias?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Draw a simple diagram showing the p and n regions, the depletion layer, and the direction of the built-in electric field."
  },
  {
    id: "analog-2",
    topicId: "analog-electronics",
    title: "Explain the difference between Zener breakdown and Avalanche breakdown.",
    answer: {
      shortAnswer: "Zener breakdown occurs in heavily doped diodes at low reverse voltages due to quantum tunneling, while Avalanche breakdown occurs in lightly doped diodes at higher voltages due to impact ionization.",
      detailedExplanation: "Zener breakdown happens in heavily doped PN junctions where the depletion region is very narrow. A strong electric field across this narrow region causes electrons to tunnel directly from the valence band to the conduction band (typically < 6V). Avalanche breakdown occurs in lightly doped junctions with wider depletion regions. Under high reverse bias, minority carriers gain enough kinetic energy to knock bound electrons free (impact ionization), creating a chain reaction (typically > 6V).",
      interviewExplanation: "I would differentiate them based on doping levels, mechanism, and temperature coefficient. Zener is due to high electric fields and tunneling (negative temp coefficient), whereas Avalanche is due to high carrier velocity and impact ionization (positive temp coefficient).",
      keyPoints: ["Zener: Heavy doping, tunneling, < 6V", "Avalanche: Light doping, impact ionization, > 6V", "Temperature coefficients differ"],
      example: "A 5.1V Zener diode operates primarily via Zener breakdown, while a 12V 'Zener' actually operates via Avalanche breakdown.",
      followUpQuestions: ["Why does Zener breakdown have a negative temperature coefficient?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Always mention the temperature coefficients, as it shows a deep practical understanding of the phenomena."
  },
  {
    id: "analog-3",
    topicId: "analog-electronics",
    title: "How does a Zener diode function as a voltage regulator?",
    answer: {
      shortAnswer: "A Zener diode maintains a constant voltage across its terminals when operated in its reverse breakdown region, diverting excess current to keep the load voltage stable.",
      detailedExplanation: "In a basic Zener voltage regulator, the diode is connected in reverse bias parallel to the load, with a series resistor limiting the total current. When the input voltage exceeds the Zener breakdown voltage (Vz), the diode enters the breakdown region. In this region, large changes in current result in very small changes in voltage. Thus, the Zener diode absorbs fluctuations in load current or input voltage, keeping the voltage across the load virtually constant at Vz.",
      interviewExplanation: "I would explain the circuit setup: an unregulated source, a series dropping resistor, and a reverse-biased Zener in parallel with the load. I'd emphasize that the Zener must operate within its minimum holding current and maximum power dissipation limits.",
      keyPoints: ["Operates in reverse breakdown", "Parallel with load", "Series resistor required", "Maintains constant voltage despite current changes"],
      example: "Using a 1N4733A (5.1V Zener) to step down a fluctuating 9V supply to a stable 5.1V for a logic IC.",
      followUpQuestions: ["How do you calculate the required series resistor value?", "What happens if the load is disconnected?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Be ready to calculate the series resistor value given an input voltage range and load current range."
  },
  {
    id: "analog-4",
    topicId: "analog-electronics",
    title: "What is the Peak Inverse Voltage (PIV) of a diode?",
    answer: {
      shortAnswer: "PIV is the maximum reverse-biased voltage a diode can withstand without experiencing breakdown.",
      detailedExplanation: "Peak Inverse Voltage (PIV), or Peak Reverse Voltage (PRV), is a critical rating for diodes, particularly in rectifier circuits. It represents the highest voltage that appears across the diode when it is reverse-biased (non-conducting). If the circuit applies a voltage greater than the PIV rating, the diode may enter breakdown, conduct heavily in the reverse direction, and potentially be destroyed due to excessive power dissipation.",
      interviewExplanation: "I would define PIV as the maximum reverse voltage limit before breakdown. Then, I would give practical examples, such as how in a half-wave rectifier, the PIV is equal to the peak input voltage (Vm), but in a center-tapped full-wave rectifier, it is 2Vm.",
      keyPoints: ["Maximum reverse voltage limit", "Critical for rectifier design", "Half-wave PIV = Vm", "Center-tap full-wave PIV = 2Vm"],
      example: "In a half-wave rectifier with a 10V peak AC source, the diode must have a PIV rating > 10V (typically chosen with a 20-50% safety margin).",
      followUpQuestions: ["What is the PIV for a bridge rectifier?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Numerical"],
    interviewTip: "Always mention safety margins when discussing PIV in practical designs."
  },
  {
    id: "analog-5",
    topicId: "analog-electronics",
    title: "Differentiate between Clipper and Clamper circuits.",
    answer: {
      shortAnswer: "A clipper circuit removes a portion of an AC signal to prevent it from exceeding a certain voltage, while a clamper circuit shifts the entire DC level of the signal without altering its shape.",
      detailedExplanation: "Clippers (or limiters) use diodes and resistors to 'clip off' parts of the input waveform (either positive, negative, or both) that exceed a specific reference voltage. They shape the waveform. Clampers (or DC restorers) use a diode, resistor, and capacitor to shift the waveform vertically on the voltage axis, effectively adding a DC offset while preserving the peak-to-peak amplitude and original shape of the AC signal.",
      interviewExplanation: "I'd summarize clippers as 'wave-shaping' circuits that cut off peaks, and clampers as 'level-shifting' circuits that add a DC component. I would highlight that clampers require an energy storage element (capacitor), whereas basic clippers do not.",
      keyPoints: ["Clippers: cut/limit waveforms", "Clampers: shift DC level", "Clampers require a capacitor", "Shape is preserved in clampers, altered in clippers"],
      example: "A clipper is used to protect sensitive inputs from voltage spikes. A clamper is used in TV receivers to restore the DC reference level of a video signal.",
      followUpQuestions: ["Can you draw a positive clamper circuit?", "What determines the discharge rate in a clamper?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Memorize the basic schematics; interviewers often ask you to draw these."
  },
  {
    id: "analog-6",
    topicId: "analog-electronics",
    title: "What are Schottky diodes and where are they used?",
    answer: {
      shortAnswer: "A Schottky diode uses a metal-semiconductor junction, resulting in a very low forward voltage drop and extremely fast switching speeds.",
      detailedExplanation: "Unlike a standard PN junction diode, a Schottky diode is formed by a junction between a metal (like aluminum or platinum) and an n-type semiconductor. This creates a unipolar device where current is carried only by majority carriers (electrons). As a result, there is no minority carrier storage time, allowing for near-instantaneous switching. Furthermore, the forward voltage drop is typically 0.15V to 0.45V, compared to 0.7V for standard silicon diodes.",
      interviewExplanation: "I would highlight the two main advantages: low forward voltage drop and fast switching. I would then explain that because it's a majority carrier device, it lacks reverse recovery time, making it ideal for high-frequency applications like switch-mode power supplies (SMPS) and RF mixers.",
      keyPoints: ["Metal-semiconductor junction", "Majority carrier device", "Low forward voltage (0.15V - 0.45V)", "No reverse recovery time (fast switching)"],
      example: "Used in the output rectification stage of switch-mode power supplies to improve efficiency by reducing conduction losses.",
      followUpQuestions: ["What is a major disadvantage of Schottky diodes compared to standard silicon diodes? (Answer: Higher reverse leakage current)"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Mentioning the high reverse leakage current of Schottky diodes shows practical engineering awareness."
  },
  {
    id: "analog-7",
    topicId: "analog-electronics",
    title: "Explain the Early Effect (Base Width Modulation) in a BJT.",
    answer: {
      shortAnswer: "The Early Effect is the variation in the effective base width of a BJT caused by changes in the reverse-biased collector-base voltage.",
      detailedExplanation: "In a BJT operating in the active region, the base-emitter junction is forward-biased, and the collector-base junction is reverse-biased. As the reverse-bias voltage (Vcb) increases, the depletion region at the collector-base junction widens. Because the base is lightly doped compared to the collector, this depletion region extends mostly into the base. This reduces the effective neutral base width, a phenomenon known as base width modulation or the Early Effect.",
      interviewExplanation: "I would explain that an increasing Vcb widens the depletion layer into the base, narrowing the effective base width. This results in less recombination in the base, causing an increase in collector current (Ic) and a slope in the output characteristics (Ic vs Vce curve) rather than a perfectly flat line. Extrapolating these curves backwards meet at the Early voltage (-Va).",
      keyPoints: ["Modulation of effective base width", "Caused by changes in Vcb (or Vce)", "Increases collector current", "Causes finite output resistance (Ro)"],
      example: "The Early effect is why a BJT current source is not ideal and has a finite output impedance.",
      followUpQuestions: ["How does the Early effect impact the output resistance of a BJT amplifier?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Draw the Ic vs Vce curve and show how extrapolating the active region lines back leads to the Early Voltage (-Va) on the x-axis."
  },
  {
    id: "analog-8",
    topicId: "analog-electronics",
    title: "Why is the Common Emitter (CE) configuration most widely used in BJT amplifiers?",
    answer: {
      shortAnswer: "The CE configuration provides both high voltage gain and high current gain, resulting in the highest overall power gain among BJT configurations.",
      detailedExplanation: "In a Common Emitter setup, the input is applied to the base and the output is taken from the collector. It offers moderate input impedance and moderate output impedance, making it relatively easy to cascade multiple stages without severe loading effects. Most importantly, it is the only configuration that provides greater than unity gain for both current (Beta) and voltage, leading to a very high power gain. It also introduces a 180-degree phase shift between input and output.",
      interviewExplanation: "I would compare the three configurations: Common Base gives voltage gain but no current gain; Common Collector gives current gain but no voltage gain; Common Emitter provides both. Therefore, CE delivers the maximum power gain, which is essential for most amplification purposes.",
      keyPoints: ["Provides both voltage and current gain", "Highest power gain", "Moderate input and output impedances", "180-degree phase inversion"],
      example: "Audio amplifiers heavily utilize CE stages to boost weak microphone signals into higher power signals.",
      followUpQuestions: ["What is the primary use of a Common Collector (Emitter Follower) circuit?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Create a mental table comparing input impedance, output impedance, voltage gain, and current gain for CB, CE, and CC."
  },
  {
    id: "analog-9",
    topicId: "analog-electronics",
    title: "What is Thermal Runaway in a BJT and how can it be prevented?",
    answer: {
      shortAnswer: "Thermal runaway is a destructive cycle where an increase in temperature increases the collector current, which further raises the temperature, eventually destroying the transistor.",
      detailedExplanation: "In a BJT, the reverse leakage current (Ico), current gain (Beta), and base-emitter voltage (Vbe) are highly temperature-sensitive. As temperature rises, Ico increases rapidly, which increases the total collector current (Ic). A higher Ic causes higher power dissipation (Pd = Vce * Ic) at the collector junction, increasing the temperature further. This positive feedback loop is thermal runaway.",
      interviewExplanation: "I would explain the positive feedback loop: Temp ↑ -> Ico ↑ -> Ic ↑ -> Power Dissipation ↑ -> Temp ↑. To prevent it, we use stabilization techniques like adding an emitter resistor (Re) which provides negative DC feedback. As Ic rises, the voltage drop across Re increases, reducing Vbe and bringing Ic back down.",
      keyPoints: ["Positive feedback loop destroying the BJT", "Driven by temperature sensitivity of Ico, Vbe, Beta", "Prevented by biasing circuits (e.g., Voltage Divider Bias with Emitter Resistor)", "Heat sinks also help dissipate heat"],
      example: "Using a voltage divider biasing circuit with an unbypassed DC emitter resistor is standard practice to stabilize the Q-point against thermal runaway.",
      followUpQuestions: ["What is the condition for thermal stability? (Answer: dPd/dTj < dPc/dTj)"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Always mention 'negative feedback via an emitter resistor' as the primary electrical solution."
  },
  {
    id: "analog-10",
    topicId: "analog-electronics",
    title: "Explain the high-frequency pi-model (hybrid-pi model) of a BJT.",
    answer: {
      shortAnswer: "The hybrid-pi model is a small-signal equivalent circuit used to analyze the high-frequency behavior of a BJT, incorporating parasitic junction capacitances.",
      detailedExplanation: "At low frequencies, coupling and bypass capacitors affect the response. At mid-band, they are shorted, and the BJT acts normally. At high frequencies, the internal parasitic capacitances of the BJT become significant. The hybrid-pi model introduces C_pi (base-emitter diffusion and depletion capacitance) and C_mu (base-collector depletion capacitance). These capacitances cause the transistor's gain to roll off at high frequencies due to the Miller effect and low-pass filtering at the input and output nodes.",
      interviewExplanation: "I would describe the basic components: r_pi (base resistance), gm*v_pi (voltage-controlled current source), and r_o (output resistance). Then, I'd explain that for high-frequency analysis, we add C_pi and C_mu. I would specifically mention how C_mu is amplified by the Miller effect, severely limiting the high-frequency response of common-emitter amplifiers.",
      keyPoints: ["Includes parasitic capacitances C_pi and C_mu", "Models high-frequency gain roll-off", "Miller effect drastically increases effective input capacitance due to C_mu", "Valid for small-signal operations"],
      example: "When designing an RF amplifier, the hybrid-pi model is essential to predict the unity-gain frequency (f_T) of the transistor.",
      followUpQuestions: ["What is the Miller Effect and how does it apply here?", "What is the transition frequency (f_T)?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Be prepared to draw the hybrid-pi model from memory, as it is a very common white-boarding question."
  },
  {
    id: "analog-11",
    topicId: "analog-electronics",
    title: "How does a MOSFET differ from a BJT?",
    answer: {
      shortAnswer: "A MOSFET is a voltage-controlled, unipolar device, whereas a BJT is a current-controlled, bipolar device.",
      detailedExplanation: "In a BJT, a small base current controls a larger collector current, and operation involves both electrons and holes (bipolar). It has a relatively low input impedance. A MOSFET uses a gate voltage to create an electric field that controls the conductivity of a channel. It operates using only majority carriers (unipolar) and features an extremely high input impedance (nearly infinite at DC) because the gate is insulated by an oxide layer.",
      interviewExplanation: "I would structure my answer by comparing key parameters: Control mechanism (Voltage vs Current), Carriers (Unipolar vs Bipolar), Input Impedance (High vs Low), Size/Density (MOSFET is smaller and better for ICs), and Temperature Stability (MOSFET is more stable and less prone to thermal runaway due to a positive temperature coefficient of resistance).",
      keyPoints: ["MOSFET: Voltage-controlled, Unipolar", "BJT: Current-controlled, Bipolar", "MOSFET has higher input impedance", "MOSFET is preferred for digital ICs due to smaller footprint and low power"],
      example: "In a microprocessor with billions of transistors, MOSFETs (specifically CMOS) are used instead of BJTs because they consume zero static power and take up much less space.",
      followUpQuestions: ["Why do MOSFETs have better thermal stability than BJTs?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Use a comparative table format in your mind. Hitting points on control, carrier type, impedance, and scaling is a guaranteed strong answer."
  },
  {
    id: "analog-12",
    topicId: "analog-electronics",
    title: "What is the Threshold Voltage (Vth) in an Enhancement MOSFET?",
    answer: {
      shortAnswer: "Threshold voltage is the minimum gate-to-source voltage required to create a conducting channel between the drain and source.",
      detailedExplanation: "In an n-channel enhancement-mode MOSFET, the substrate is p-type. When a positive voltage is applied to the gate, it first repels holes, creating a depletion region. As the gate voltage increases, it attracts electrons to the oxide-semiconductor interface. The voltage at which a sufficient number of electrons accumulate to invert the surface from p-type to n-type, forming a continuous conducting channel between the drain and source, is the threshold voltage (Vth).",
      interviewExplanation: "I would explain Vth as the 'turn-on' voltage of the MOSFET. Below Vth, the transistor is in cutoff. Above Vth, the strong inversion layer forms, allowing current to flow from drain to source. I'd also mention that Vth can be affected by manufacturing processes (oxide thickness, doping) and dynamic factors like the body effect.",
      keyPoints: ["Minimum Vgs to form a channel", "Marks the onset of strong inversion", "Below Vth: Cutoff region", "Dependent on oxide thickness, doping, and body effect"],
      example: "A logic-level MOSFET might have a Vth of 1.5V, allowing it to be easily switched fully on by a standard 3.3V or 5V microcontroller signal.",
      followUpQuestions: ["What is the Body Effect and how does it change Vth?", "What is subthreshold conduction?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Clarify that while Vth is technically the onset of strong inversion, in reality, a tiny 'subthreshold' current still flows below Vth."
  },
  {
    id: "analog-13",
    topicId: "analog-electronics",
    title: "Explain Channel Length Modulation in MOSFETs.",
    answer: {
      shortAnswer: "Channel Length Modulation is the shortening of the effective channel length in a MOSFET as the drain-to-source voltage increases beyond saturation.",
      detailedExplanation: "Once a MOSFET enters the saturation region (Vds > Vgs - Vth), the channel gets 'pinched off' near the drain. If Vds is increased further, the pinch-off point moves closer to the source, decreasing the effective length of the conducting channel. Since drain current (Id) is inversely proportional to channel length, this reduction causes the drain current to increase slightly with Vds, rather than remaining perfectly constant.",
      interviewExplanation: "I would compare it to the Early Effect in BJTs. I'd explain that because the channel is effectively shorter, the resistance decreases, causing a slight upward slope in the Id vs Vds curve in the saturation region. This gives the MOSFET a finite output resistance (Ro), modeled by the parameter lambda (λ).",
      keyPoints: ["Occurs in saturation region", "Effective channel length decreases as Vds increases", "Causes finite output resistance", "Analogous to the Early Effect in BJTs"],
      example: "In short-channel MOSFETs, channel length modulation is highly pronounced and significantly lowers the intrinsic gain of MOSFET amplifiers.",
      followUpQuestions: ["How does the parameter lambda (λ) relate to the output resistance?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Important"],
    interviewTip: "Mention the lambda (λ) parameter in the saturation current equation: Id = 1/2 * un * Cox * W/L * (Vgs - Vth)^2 * (1 + λVds)."
  },
  {
    id: "analog-14",
    topicId: "analog-electronics",
    title: "What is the Body Effect in a MOSFET?",
    answer: {
      shortAnswer: "The Body Effect is the increase in a MOSFET's threshold voltage when a reverse-bias voltage is applied between the source and the body (substrate).",
      detailedExplanation: "In many integrated circuits, all NMOS transistors share a common p-type substrate connected to the lowest circuit potential. If the source of a specific NMOS is at a higher voltage than the substrate, the source-body PN junction becomes reverse-biased. This widens the depletion region under the channel, exposing more fixed negative ions. To overcome this increased negative charge and invert the channel, a higher positive gate voltage is required, thus increasing the threshold voltage (Vth).",
      interviewExplanation: "I would define it as the dependency of Vth on the source-to-bulk voltage (Vsb). I would explain that it typically occurs in ICs where the substrate cannot be individually connected to the source of every transistor, such as in the top transistor of a CMOS NAND gate or a cascode amplifier.",
      keyPoints: ["Vth increases with Vsb (source-to-bulk voltage)", "Caused by widening of the depletion region", "Common in ICs with a shared substrate", "Acts almost like a second gate (back-gate effect)"],
      example: "In a source-follower (common drain) amplifier, as the output (source) voltage follows the input, Vsb increases, increasing Vth and limiting the maximum output voltage.",
      followUpQuestions: ["How do you mitigate the body effect in discrete MOSFETs? (Answer: Internally shorting the source and body)"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Refer to the body terminal as the 'back gate' to demonstrate a deeper understanding of its modulating effect on drain current."
  },
  {
    id: "analog-15",
    topicId: "analog-electronics",
    title: "Why are CMOS circuits preferred over BJT or purely NMOS logic?",
    answer: {
      shortAnswer: "CMOS circuits consume practically zero static power, have high noise margins, and allow for high-density integration.",
      detailedExplanation: "CMOS (Complementary Metal-Oxide-Semiconductor) pairs a PMOS and an NMOS transistor. In a steady logic state (either high or low), one transistor is completely OFF while the other is ON. Since they are in series, there is no continuous DC path from Vdd to ground. Power is only dissipated dynamically during switching when both transistors briefly conduct and parasitic capacitances are charged/discharged. Furthermore, CMOS provides full rail-to-rail output voltage swings.",
      interviewExplanation: "I would focus on power consumption. Pure NMOS logic requires a pull-up resistor (or a depleted NMOS acting as one), meaning it draws continuous current when the output is low. BJTs also draw continuous base current. CMOS eliminates this static power draw, which is the only reason we can pack billions of transistors onto modern CPUs without them melting.",
      keyPoints: ["Zero static power dissipation", "Full rail-to-rail voltage swing", "High input impedance", "High noise margins"],
      example: "The battery life of modern smartphones is entirely dependent on the low static power dissipation of CMOS technology.",
      followUpQuestions: ["What causes dynamic power dissipation in CMOS?", "What is latch-up in CMOS?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Frequently Asked"],
    interviewTip: "Be ready to draw a basic CMOS inverter and trace the path of current when the input is high vs low."
  },
  {
    id: "analog-16",
    topicId: "analog-electronics",
    title: "What are the characteristics of an Ideal Operational Amplifier (Op-Amp)?",
    answer: {
      shortAnswer: "An ideal op-amp has infinite input impedance, infinite open-loop gain, zero output impedance, infinite bandwidth, and infinite CMRR.",
      detailedExplanation: "Ideal op-amp characteristics are theoretical assumptions used to simplify circuit analysis. Infinite input impedance (Z_in = ∞) means no current flows into the input terminals. Infinite open-loop gain (A_vol = ∞) forces the differential input voltage to zero in negative feedback circuits. Zero output impedance (Z_out = 0) means it can drive any load without voltage drop. Infinite bandwidth means gain is constant at all frequencies. Infinite Common-Mode Rejection Ratio (CMRR) means it perfectly rejects signals common to both inputs.",
      interviewExplanation: "I would list the 'Five Infinites and One Zero': Infinite Gain, Infinite Input Impedance, Infinite Bandwidth, Infinite CMRR, Infinite Slew Rate, and Zero Output Impedance. Then, I would briefly mention how practical op-amps (like the 741) differ, having finite values (e.g., Zin in Mega-ohms, finite slew rate).",
      keyPoints: ["Infinite input impedance (I_in = 0)", "Infinite open-loop gain", "Zero output impedance", "Infinite bandwidth and slew rate", "Infinite CMRR"],
      example: "When analyzing an ideal inverting amplifier, we assume the input current is zero (ideal Zin) and the inverting node is at virtual ground (ideal Gain).",
      followUpQuestions: ["How does a practical op-amp differ from an ideal one?", "What is the typical open-loop gain of a practical op-amp like the LM741?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "State the ideal characteristics confidently, but immediately show practical knowledge by contrasting them with real-world values."
  },
  {
    id: "analog-17",
    topicId: "analog-electronics",
    title: "Explain the concept of 'Virtual Ground' in Op-Amps.",
    answer: {
      shortAnswer: "Virtual ground occurs in an op-amp with negative feedback when one input terminal is grounded; the high open-loop gain forces the other terminal to the same zero potential without being physically connected to ground.",
      detailedExplanation: "For an op-amp operating in its linear region with negative feedback, the output voltage is finite. Since Output = Gain * (V+ - V-), and the open-loop gain is virtually infinite (ideal assumption), the differential input voltage (V+ - V-) must be nearly zero. Therefore, V+ ≈ V-. If the non-inverting terminal (V+) is tied to physical ground (0V), the inverting terminal (V-) is forced to 0V. It acts as a ground for voltage calculations, but it cannot sink current like a real ground.",
      interviewExplanation: "I would describe virtual ground as a direct consequence of infinite open-loop gain and negative feedback. I would emphasize the word 'virtual': the node is at zero volts, but you cannot draw current from it to ground; the current must flow through the feedback loop.",
      keyPoints: ["Consequence of negative feedback and high gain", "V+ ≈ V-", "Terminal is at 0V but is not physically grounded", "Simplifies nodal analysis"],
      example: "In an inverting amplifier, the virtual ground allows us to state that the input current is simply Vin / Rin, as the other side of Rin is at 0V.",
      followUpQuestions: ["Does virtual ground exist in an op-amp without negative feedback?", "What is a virtual short?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always clarify that a virtual ground can sink zero current, differentiating it from a physical ground."
  },
  {
    id: "analog-18",
    topicId: "analog-electronics",
    title: "What is Common Mode Rejection Ratio (CMRR) in an Op-Amp?",
    answer: {
      shortAnswer: "CMRR is the ratio of an op-amp's differential gain to its common-mode gain, representing its ability to reject noise present on both input terminals simultaneously.",
      detailedExplanation: "An op-amp is designed to amplify the difference between its two inputs (differential gain, Ad) and ignore any voltage common to both inputs (common-mode gain, Ac). However, real op-amps have a non-zero Ac. CMRR is defined as |Ad| / |Ac|, usually expressed in decibels (20 * log10(Ad/Ac)). A higher CMRR means the op-amp is better at suppressing common-mode signals, such as 50/60Hz power line hum or electromagnetic interference.",
      interviewExplanation: "I'd explain that ideally, if you apply 1V to both inputs of an op-amp, the output should be 0V. In reality, you get a tiny output. CMRR measures how close the op-amp is to that ideal. I would emphasize its importance in instrumentation and audio electronics where long cables pick up common-mode noise.",
      keyPoints: ["CMRR = |Ad| / |Ac|", "Expressed in Decibels (dB)", "Measures rejection of common noise", "Ideal CMRR is infinite"],
      example: "In ECG machines, CMRR is critical because the tiny electrical signal from the heart is buried in common-mode 60Hz noise from the surrounding room.",
      followUpQuestions: ["How can you measure CMRR practically?", "Why do instrumentation amplifiers have exceptionally high CMRR?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Memorize the formula in dB: 20 * log10(|Ad/Ac|). It's a very common quick numerical question."
  },
  {
    id: "analog-19",
    topicId: "analog-electronics",
    title: "Define Slew Rate and its significance.",
    answer: {
      shortAnswer: "Slew rate is the maximum rate of change of the output voltage of an op-amp, typically measured in Volts per microsecond (V/μs).",
      detailedExplanation: "The slew rate determines how fast the op-amp can respond to sudden changes in the input signal. It is caused by the finite current available to charge and discharge internal compensation capacitors within the op-amp (Slew Rate = I_max / C_c). If the input signal requires the output to change faster than the slew rate allows, the output waveform will distort, turning sine waves into triangular waves. This limits the maximum frequency for large-amplitude signals, known as the full-power bandwidth.",
      interviewExplanation: "I would describe slew rate as the 'speed limit' of the op-amp's output. I'd explain the physical mechanism: internal current sources can only charge internal capacitors so fast (dV/dt = I/C). Then I would distinguish it from small-signal bandwidth, noting that slew rate distortion happens with high-frequency, large-amplitude signals.",
      keyPoints: ["Maximum rate of change of Vout", "Measured in V/μs", "Caused by internal capacitor charging limits", "Causes slew-rate distortion (sine to triangle)"],
      example: "If an op-amp has a slew rate of 1 V/μs, it cannot reproduce a 10V peak square wave at 1MHz, as it would require 10V to change in a fraction of a microsecond.",
      followUpQuestions: ["What is the relationship between Slew Rate and Full-Power Bandwidth? (Answer: f_max = SR / (2 * pi * V_peak))"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Always mention the formula related to full-power bandwidth: SR = 2 * π * f * Vp. It shows you know how to apply slew rate practically."
  },
  {
    id: "analog-20",
    topicId: "analog-electronics",
    title: "What is an Instrumentation Amplifier and what are its advantages?",
    answer: {
      shortAnswer: "An instrumentation amplifier is a specialized differential amplifier that provides very high input impedance, high CMRR, and a gain that can be set precisely by a single resistor.",
      detailedExplanation: "It typically consists of three op-amps: two non-inverting buffers at the input stage and a differential amplifier at the output stage. The input buffers ensure extremely high input impedance, preventing loading of the source. The architecture inherently cancels common-mode signals at the first stage, leading to exceptional CMRR. Furthermore, the overall differential gain is adjusted using a single external resistor, avoiding the need for matched resistor networks when tuning gain.",
      interviewExplanation: "I would sketch (mentally or on a whiteboard) the classic 3-op-amp topology. I'd contrast it with a basic 1-op-amp differential amplifier, which suffers from low input impedance and requires perfectly matched resistors to maintain CMRR. The instrumentation amplifier solves both problems and allows easy gain adjustment.",
      keyPoints: ["High input impedance", "High CMRR", "Gain set by a single resistor", "Uses 3 op-amps"],
      example: "Used extensively to amplify tiny signals from sensors like strain gauges (Wheatstone bridges) or medical electrodes.",
      followUpQuestions: ["Can you draw the circuit diagram for a 3-op-amp instrumentation amplifier?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Emphasize that the primary reason we use it over a basic diff-amp is the high input impedance and the single-resistor gain control."
  },
  {
    id: "analog-21",
    topicId: "analog-electronics",
    title: "Draw and explain an Op-Amp Integrator circuit.",
    answer: {
      shortAnswer: "An op-amp integrator uses a capacitor in the feedback loop and a resistor at the input, producing an output proportional to the time integral of the input signal.",
      detailedExplanation: "In the inverting configuration, the input resistor (R) is connected to the inverting terminal (virtual ground), and the capacitor (C) bridges the output and the inverting terminal. The input current is Vin / R. Because the op-amp draws no current, this entire current flows into the capacitor. The voltage across the capacitor is the integral of the current, so Vout = (-1/RC) * ∫ Vin dt. Practically, a large resistor is placed in parallel with C to prevent the op-amp from drifting into saturation due to DC offset currents.",
      interviewExplanation: "I would explain the nodal analysis using virtual ground, showing that Vout is the negative integral of Vin. Then, I would highlight a crucial practical issue: a pure integrator will saturate over time due to tiny DC offset voltages. A parallel feedback resistor (lossy integrator) is required in real life to provide a DC path.",
      keyPoints: ["Vout is proportional to the integral of Vin", "R at input, C in feedback", "Converts square waves to triangle waves", "Requires a parallel feedback resistor practically"],
      example: "Applying a constant positive DC voltage to an integrator produces a negative-going linear ramp at the output.",
      followUpQuestions: ["What happens if a DC signal is applied to an ideal integrator indefinitely?", "What is a practical (lossy) integrator?"]
    },
    difficulty: "Intermediate",
    badges: ["Coding", "Practical"],
    interviewTip: "If asked to draw it, always ask if they want the ideal version or the practical version (with the parallel resistor). It shows experience."
  },
  {
    id: "analog-22",
    topicId: "analog-electronics",
    title: "What is a Schmitt Trigger and why is it used?",
    answer: {
      shortAnswer: "A Schmitt Trigger is a comparator circuit with positive feedback that introduces hysteresis, ensuring clean, noise-free transitions in the output.",
      detailedExplanation: "By applying positive feedback to a comparator, the circuit creates two distinct threshold voltages: an Upper Threshold Point (UTP) and a Lower Threshold Point (LTP). The output only switches HIGH when the input exceeds the UTP, and only switches LOW when the input drops below the LTP. The gap between UTP and LTP is the hysteresis voltage. This prevents the output from rapidly toggling back and forth (chattering) if the input signal has noise superimposed on it near the threshold.",
      interviewExplanation: "I would describe it as a comparator with memory. I would draw the transfer curve showing the hysteresis loop. I'd explain that without hysteresis, a slow-moving, noisy signal crossing a single threshold would cause the output to bounce wildly. The Schmitt trigger provides noise immunity.",
      keyPoints: ["Uses positive feedback", "Creates hysteresis (UTP and LTP)", "Provides noise immunity", "Prevents false triggering/chattering"],
      example: "Used to convert a noisy, distorted analog sine wave from a magnetic pickup into a clean, sharp digital square wave for a microcontroller.",
      followUpQuestions: ["How do you change the hysteresis width?", "What is the difference between a Schmitt trigger and a standard comparator?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Always associate 'Schmitt Trigger' with 'Hysteresis' and 'Positive Feedback'. These are the key buzzwords."
  },
  {
    id: "analog-23",
    topicId: "analog-electronics",
    title: "Explain the Barkhausen Criterion for oscillation.",
    answer: {
      shortAnswer: "The Barkhausen Criterion states that for sustained oscillations, the loop gain must be equal to or greater than unity (|Aβ| ≥ 1), and the loop phase shift must be 0 or 360 degrees.",
      detailedExplanation: "An oscillator consists of an amplifier with gain 'A' and a positive feedback network with fraction 'β'. For the circuit to oscillate continuously without an external input, the signal fed back must perfectly reinforce the input. This requires two conditions: 1) Magnitude: |A * β| = 1 (in practice, it's set slightly > 1 to start oscillations, then amplitude limiting brings it to 1). 2) Phase: The total phase shift around the loop must be 0°, 360°, or multiples of 360°, ensuring the feedback is regenerative (positive).",
      interviewExplanation: "I would list the two conditions clearly: Loop gain magnitude ≥ 1, and Loop phase shift = 0 or 360 degrees. I would explain that 'greater than 1' is needed practically to allow noise to build up into oscillations, but some non-linear component will eventually reduce the gain to exactly 1 in steady state.",
      keyPoints: ["Loop gain magnitude |Aβ| ≥ 1", "Total loop phase shift = 360° (or 0°)", "Condition for sustained oscillation", "Relies on positive feedback"],
      example: "In an RC Phase Shift oscillator, the amplifier provides 180° phase shift, and the three RC networks provide another 180°, totaling 360° to satisfy Barkhausen.",
      followUpQuestions: ["Why must |Aβ| be slightly greater than 1 initially?", "What happens if |Aβ| < 1?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Memorize the phrase 'A times Beta equals one, phase shift zero or 360'. It's the most concise way to start the answer."
  },
  {
    id: "analog-24",
    topicId: "analog-electronics",
    title: "How does an RC Phase Shift Oscillator work?",
    answer: {
      shortAnswer: "It uses an inverting amplifier (180° phase shift) and three RC filter networks (each contributing 60° phase shift) to satisfy the Barkhausen criterion for oscillation.",
      detailedExplanation: "To create an oscillator, we need positive feedback (360° total phase shift). In an RC phase shift oscillator, we typically use an inverting amplifier (like a CE BJT or an inverting op-amp) which inherently provides 180° of phase shift. We feed the output back to the input through a cascade of three high-pass RC networks. At one specific frequency (fr = 1 / (2πRC√6)), the three networks will provide exactly 180° of phase shift (approx 60° each). The total loop phase shift becomes 360°, sustaining oscillations.",
      interviewExplanation: "I would explain the need to satisfy the Barkhausen criterion. I'd point out the amplifier gives 180°, so the feedback network must supply the remaining 180°. Since a single RC network can provide a maximum of 90° (but practically less), we need at least three networks to reach 180°. The gain of the amplifier must compensate for the attenuation of the RC network (which is 1/29).",
      keyPoints: ["Inverting amplifier gives 180°", "Three RC networks give 180° (60° each)", "Total loop phase shift = 360°", "Amplifier gain must be ≥ 29"],
      example: "RC phase shift oscillators are typically used for low-frequency audio sine wave generation.",
      followUpQuestions: ["Why do we need at least three RC networks?", "What is the required minimum gain of the amplifier? (Answer: 29)"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Remember the magic number 29. The attenuation of a 3-stage RC network is 1/29, so the amp needs a gain of -29."
  },
  {
    id: "analog-25",
    topicId: "analog-electronics",
    title: "Compare Colpitts and Hartley Oscillators.",
    answer: {
      shortAnswer: "Both are LC oscillators; the Colpitts uses a split capacitance in its tank circuit, while the Hartley uses a split inductance (tapped coil).",
      detailedExplanation: "Colpitts and Hartley are harmonic oscillators used for high frequencies (RF). They use an LC tuned 'tank' circuit for the feedback network. In a Colpitts oscillator, the tank circuit features two capacitors in series parallel to an inductor, and the feedback is tapped from between the capacitors. In a Hartley oscillator, the tank features two inductors in series (or a tapped coil) parallel to a capacitor, and the feedback is tapped from between the inductors. Colpitts generally offers better frequency stability and purer sine waves.",
      interviewExplanation: "I'd start by stating they are both LC tank oscillators used for RF. The key difference is the tap point for feedback. 'C' for Colpitts means Center-tapped Capacitors. 'H' for Hartley means (think Henry) tapped inductors. I would also mention that Colpitts is more common at very high frequencies because stray inductances affect tapped coils more than split capacitors.",
      keyPoints: ["Colpitts: Split capacitance (two C, one L)", "Hartley: Split inductance (two L, one C)", "Used for high frequency (RF) oscillation", "Colpitts has better high-frequency stability"],
      example: "A Colpitts oscillator is frequently used in RF transmitters and local oscillators in superheterodyne receivers.",
      followUpQuestions: ["How do you calculate the resonant frequency for a Colpitts oscillator?", "Why is Colpitts preferred over Hartley at very high frequencies?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Use the mnemonic 'C' in Colpitts for Capacitors, 'H' in Hartley for Henrys (Inductors)."
  },
  {
    id: "analog-26",
    topicId: "analog-electronics",
    title: "What is a 555 Timer IC and what are its primary modes of operation?",
    answer: {
      shortAnswer: "The 555 Timer is a versatile IC used to generate timing pulses and oscillations, operating in Astable, Monostable, or Bistable modes.",
      detailedExplanation: "Internally, a 555 contains a voltage divider (three 5k resistors), two comparators, an SR flip-flop, and a discharge transistor. \n1. Astable mode: Continuous square wave oscillator (free-running), no stable state.\n2. Monostable mode: One-shot pulse generator. It rests in a stable state until triggered, outputs a pulse of a specific width (determined by external RC), then returns to rest.\n3. Bistable mode: Acts like an SR flip-flop, toggling between high and low states based on trigger and reset inputs (no RC timing needed).",
      interviewExplanation: "I would list the three modes: Astable, Monostable, and Bistable. I'd briefly describe the internal architecture (the three 5k resistors giving it the '555' name, setting the 1/3 and 2/3 Vcc thresholds). Then I'd explain how external resistors and a capacitor charge and discharge between these thresholds to create timing intervals.",
      keyPoints: ["Astable: Free-running oscillator", "Monostable: One-shot timer", "Bistable: Flip-flop", "Thresholds at 1/3 Vcc and 2/3 Vcc"],
      example: "Astable mode can blink an LED. Monostable mode can debounce a mechanical push-button switch.",
      followUpQuestions: ["Can you explain the internal block diagram of a 555 timer?", "What is the formula for the time period in astable mode?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Know the internal block diagram (comparators, flip-flop, discharge transistor). It proves you don't just treat the IC as a black box."
  },
  {
    id: "analog-27",
    topicId: "analog-electronics",
    title: "Differentiate between Active and Passive Filters.",
    answer: {
      shortAnswer: "Passive filters use only resistors, capacitors, and inductors and cannot amplify signals, while active filters use op-amps or transistors to provide gain and avoid the need for bulky inductors.",
      detailedExplanation: "Passive filters rely on the frequency-dependent reactance of passive components (R, L, C). They always have a gain of less than 1 (insertion loss) and are affected by the load impedance. Active filters incorporate active components (Op-Amps) alongside R and C. They can provide voltage gain, have high input and low output impedance (preventing loading effects), and eliminate the need for inductors, which are bulky, expensive, and non-ideal at low frequencies.",
      interviewExplanation: "I would emphasize three main advantages of active filters: they can provide signal gain, they eliminate inductors (great for ICs and low-frequency applications), and their high input / low output impedance means you can cascade multiple stages without them interacting (loading each other). The downside is they require a power supply and are limited by the op-amp's bandwidth.",
      keyPoints: ["Passive: R, L, C; lossy; dependent on load", "Active: Op-amps, R, C; provides gain; no inductors", "Active filters allow easy cascading", "Active filters are limited by op-amp bandwidth"],
      example: "Audio crossover networks often use active filters to split frequencies before amplification, as large inductors for low frequencies would be physically massive.",
      followUpQuestions: ["Why are inductors avoided in modern low-frequency filter design?", "What is a limitation of active filters? (Answer: Frequency limits due to op-amp bandwidth)"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Highlighting 'lack of inductors' in active filters is a key practical insight that interviewers look for."
  },
  {
    id: "analog-28",
    topicId: "analog-electronics",
    title: "What is a Phase-Locked Loop (PLL)?",
    answer: {
      shortAnswer: "A PLL is a control system that generates an output signal whose phase is related to the phase of an input reference signal.",
      detailedExplanation: "A basic PLL consists of three main blocks: a Phase Detector (PD), a Loop Filter (Low Pass Filter), and a Voltage Controlled Oscillator (VCO). The PD compares the phase of the input reference signal with the phase of the VCO output, generating an error signal. The loop filter smooths this error signal into a DC control voltage. This voltage tunes the VCO frequency up or down until its phase (and therefore frequency) perfectly matches the input signal. Once matched, the PLL is 'locked'.",
      interviewExplanation: "I would break down the three blocks (PD, LPF, VCO) and describe the feedback loop. The goal of the feedback loop is to drive the phase difference between the input and the VCO to zero. I'd mention its applications in frequency synthesis (multiplying a base clock), FM demodulation, and clock recovery in digital communications.",
      keyPoints: ["Phase Detector, Low Pass Filter, VCO", "Locks output phase/frequency to an input reference", "Used for frequency synthesis and FM demodulation", "Feedback loop minimizes phase error"],
      example: "In a computer motherboard, a PLL takes a 25MHz crystal oscillator reference and multiplies it up to generate the 3GHz clock for the CPU.",
      followUpQuestions: ["What is the difference between 'capture range' and 'lock range' in a PLL?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Understand the difference between Lock Range (the frequency range where it can hold a lock) and Capture Range (the range where it can initially acquire a lock). Lock range is always greater."
  },
  {
    id: "analog-29",
    topicId: "analog-electronics",
    title: "What is the difference between a Class A, Class B, and Class AB power amplifier?",
    answer: {
      shortAnswer: "They differ by conduction angle: Class A conducts for 360°, Class B for 180°, and Class AB for slightly more than 180° to eliminate crossover distortion.",
      detailedExplanation: "In Class A, the transistor is biased squarely in the active region and conducts for the full 360° of the input cycle, offering high linearity but terrible maximum efficiency (25-50%). In Class B, two transistors are used in push-pull; each biased at cutoff, conducting for exactly 180°. This improves efficiency to 78.5% but introduces crossover distortion when the signal transitions between the transistors near 0V. Class AB biases the transistors slightly above cutoff, conducting for >180°, which smooths out the transition and eliminates crossover distortion while maintaining decent efficiency.",
      interviewExplanation: "I would focus on the trade-off between efficiency and linearity. Class A is linear but inefficient. Class B is efficient but suffers from crossover distortion. Class AB is the golden compromise, where we sacrifice a tiny bit of efficiency to bias the diodes slightly 'on', curing the crossover distortion.",
      keyPoints: ["Class A: 360° conduction, low efficiency, high linearity", "Class B: 180° conduction, 78.5% efficiency, crossover distortion", "Class AB: >180° conduction, eliminates crossover distortion"],
      example: "Most high-fidelity audio amplifiers are Class AB, balancing good sound quality (linearity) with reasonable heat dissipation.",
      followUpQuestions: ["What causes crossover distortion in a Class B amplifier?", "What is a Class D amplifier?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Be prepared to draw the output waveforms for all three classes to visually demonstrate crossover distortion."
  },
  {
    id: "analog-30",
    topicId: "analog-electronics",
    title: "What is crossover distortion and how is it eliminated?",
    answer: {
      shortAnswer: "Crossover distortion occurs in Class B amplifiers when the signal transitions from positive to negative, caused by the 0.7V threshold needed to turn on the BJTs. It is eliminated by using a Class AB configuration.",
      detailedExplanation: "In a Class B push-pull amplifier, an NPN transistor handles the positive half-cycle and a PNP handles the negative half. Because a BJT requires about 0.7V (Vbe) to start conducting, neither transistor conducts when the input signal is between -0.7V and +0.7V. This 'dead zone' causes a flat spot or 'notch' in the output waveform as it crosses zero. To eliminate this, we use a Class AB configuration, where diodes or a Vbe multiplier circuit provide a constant DC bias of ~0.7V to the base of both transistors, keeping them barely turned on at zero input.",
      interviewExplanation: "I would explain the dead zone caused by the Vbe turn-on voltage in Class B push-pull amplifiers. To fix it, we add a trickle of bias current (usually using two forward-biased diodes in the base circuit) so the transistors are already hovering at the brink of conduction. This prevents the signal from falling into the dead zone.",
      keyPoints: ["Occurs in Class B push-pull amplifiers", "Caused by the Vbe turn-on voltage (0.7V) dead zone", "Creates a notch at the zero-crossing", "Eliminated by Class AB biasing (diode biasing)"],
      example: "Playing a low-volume audio signal through a pure Class B amplifier sounds fuzzy and distorted because the signal spends a large percentage of its time in the dead zone.",
      followUpQuestions: ["Why are diodes preferred over resistors for biasing a Class AB amplifier? (Answer: Thermal tracking)"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mentioning 'thermal tracking' when discussing diode biasing in Class AB will impress an interviewer."
  },
  {
    id: "analog-31",
    topicId: "analog-electronics",
    title: "Explain the operation of a Current Mirror circuit.",
    answer: {
      shortAnswer: "A current mirror uses a reference current in one transistor to 'copy' or mirror the exact same current into a second transistor's collector.",
      detailedExplanation: "A basic BJT current mirror consists of two identical transistors with their bases and emitters connected together. The first transistor is diode-connected (base shorted to collector), and a reference current (I_ref) is forced through it using a resistor. Because both transistors share the exact same Base-Emitter voltage (Vbe) and are physically identical, the collector current of the second transistor (I_copy) will exactly match I_ref (ignoring small base current errors and Early effect).",
      interviewExplanation: "I would draw the schematic with two matched NPN transistors. I would explain that since they share Vbe, and Ic is exponentially dependent on Vbe, their collector currents must be equal. I'd mention they are heavily used in integrated circuits to bias amplifier stages without needing bulky, noise-prone resistors.",
      keyPoints: ["Copies I_ref to I_out", "Relies on identical matched transistors", "Share the same Vbe", "Used extensively in IC biasing"],
      example: "In op-amp ICs, current mirrors replace biasing resistors, saving silicon area and providing active loads for higher gain.",
      followUpQuestions: ["How does the Early effect impact a basic current mirror?", "What is a Wilson Current Mirror?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Important"],
    interviewTip: "Acknowledge that basic current mirrors are imperfect due to base current losses and the Early effect, which opens the door to discuss Wilson or Cascode mirrors."
  },
  {
    id: "analog-32",
    topicId: "analog-electronics",
    title: "What is an Active Load and why is it used in IC design?",
    answer: {
      shortAnswer: "An active load replaces a passive resistor with a transistor (often a current mirror) to achieve high voltage gain and save silicon area.",
      detailedExplanation: "The voltage gain of a basic amplifier (like a Common Emitter) is given by Gm * R_load. To get a high gain, you need a massive load resistor. In integrated circuits, fabricating large resistors takes up a huge amount of silicon area. Instead, a transistor configured as a constant current source (an active load) is used. It acts like a very small DC resistance (allowing reasonable DC biasing) but presents an extremely high AC resistance (its output resistance, Ro). This provides massive voltage gain in a tiny footprint.",
      interviewExplanation: "I would frame active loads as a solution to an IC manufacturing problem. Resistors are too big! By using a current mirror as the collector load, we get an equivalent AC resistance in the hundreds of kilo-ohms, providing massive gain, all while taking up less space than a tiny 1k resistor.",
      keyPoints: ["Replaces large load resistors", "Provides high AC impedance (high gain)", "Provides low DC voltage drop", "Saves massive amounts of silicon area in ICs"],
      example: "The differential amplifier stage in a 741 Op-Amp uses a current mirror as an active load to convert the differential signal to single-ended and provide high initial gain.",
      followUpQuestions: ["How does an active load affect the output voltage swing of an amplifier?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Conceptual"],
    interviewTip: "This is a great place to demonstrate IC vs discrete design philosophy: in discrete, transistors are expensive and resistors are cheap; in ICs, transistors are cheap/small and resistors are expensive/huge."
  },
  {
    id: "analog-33",
    topicId: "analog-electronics",
    title: "Describe the function of a Cascode Amplifier.",
    answer: {
      shortAnswer: "A cascode amplifier consists of a common-emitter stage followed by a common-base stage to increase bandwidth by mitigating the Miller effect, while maintaining high gain.",
      detailedExplanation: "In a standard common-emitter amplifier, the parasitic capacitance between the base and collector (C_mu) is multiplied by the voltage gain (the Miller effect), heavily restricting high-frequency bandwidth. In a cascode, the first stage is a common-emitter feeding into a common-base second stage. The common-base stage offers a very low input impedance, drastically lowering the voltage gain of the first stage. This practically eliminates the Miller effect. The second stage then provides the high voltage gain, resulting in a circuit with both high gain and high bandwidth.",
      interviewExplanation: "I would explain the cascode as a two-transistor stack that solves the Miller effect problem. The bottom transistor handles input (transconductance), but its voltage gain is kept near unity to stop the Miller capacitance from multiplying. The top transistor handles the voltage swing and provides the gain, but it doesn't suffer from the Miller effect because its base is grounded.",
      keyPoints: ["CE stage feeding a CB stage", "Drastically reduces the Miller effect", "Increases high-frequency bandwidth", "High output impedance and high gain"],
      example: "Cascode amplifiers are standard in RF front-ends where you need both amplification and high-frequency operation.",
      followUpQuestions: ["Does a cascode amplifier increase or decrease the overall output impedance? (Answer: Increases it significantly)"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Clearly separate the roles of the two transistors: bottom one for V-to-I conversion (transconductance), top one for I-to-V conversion (voltage gain)."
  },
  {
    id: "analog-34",
    topicId: "analog-electronics",
    title: "What is Negative Feedback and what are its advantages?",
    answer: {
      shortAnswer: "Negative feedback feeds a portion of the output signal back to the input in phase opposition, sacrificing some gain for vastly improved stability, linearity, and bandwidth.",
      detailedExplanation: "By returning a fraction of the output signal out-of-phase with the input, negative feedback reduces the overall (closed-loop) gain. However, this trade-off is highly beneficial. It stabilizes the gain against variations in temperature or component manufacturing (like Beta changes in BJTs). It reduces non-linear distortion, increases bandwidth (gain-bandwidth product remains constant), and allows the designer to alter input and output impedances based on the feedback topology (e.g., voltage-series feedback increases Zin and decreases Zout).",
      interviewExplanation: "I would define it with the classic block diagram and equation: A_closed = A / (1 + A*Beta). I would list the 'price' (lower gain) and then rattle off the benefits: desensitizes gain, increases bandwidth, reduces distortion, and controls impedances. I'd mention it's the fundamental principle making modern op-amp circuits reliable.",
      keyPoints: ["Gain decreases (A_closed = A / (1 + Aβ))", "Gain becomes stable and independent of device variations", "Bandwidth increases", "Distortion and noise are reduced"],
      example: "Using an op-amp with an open-loop gain of 100,000 in a negative feedback loop to create an amplifier with a perfectly precise, stable gain of 10.",
      followUpQuestions: ["What are the four topologies of negative feedback? (Voltage-series, voltage-shunt, current-series, current-shunt)"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Memorize the closed-loop gain formula and the four feedback topologies. It's a staple of analog interviews."
  },
  {
    id: "analog-35",
    topicId: "analog-electronics",
    title: "How does a Voltage Multiplier circuit work?",
    answer: {
      shortAnswer: "A voltage multiplier uses a network of diodes and capacitors to convert an AC input into a higher DC output voltage.",
      detailedExplanation: "Voltage multipliers (like doublers, triplers, or quadruplers) utilize clamping and peak rectifying principles. In a half-wave voltage doubler, during the negative half-cycle of the AC input, the first diode conducts and charges a series capacitor to the peak AC voltage (Vm). During the positive half-cycle, the input voltage adds to the stored capacitor voltage (Vm + Vm = 2Vm), and the second diode conducts, transferring this doubled voltage to an output capacitor. Cascading these stages multiplies the voltage further.",
      interviewExplanation: "I would describe a basic voltage doubler. I'd explain that the capacitors act like batteries in series with the AC source. By using diodes to direct the current, we can charge a capacitor on one half-cycle and then place it in series with the AC voltage on the next half-cycle to double the peak voltage.",
      keyPoints: ["Uses diodes and capacitors", "Converts AC to higher DC", "Operates on clamping and rectifying principles", "Only suitable for low-current applications"],
      example: "Used in CRT televisions, photocopiers, and bug zappers to generate thousands of volts from standard mains AC.",
      followUpQuestions: ["Why are voltage multipliers not used for high-power applications? (Answer: Output voltage drops significantly under load due to capacitor discharge)"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Clarify that voltage multipliers are strictly low-current (high impedance) power supplies. If you draw too much current, the capacitors discharge quickly, ruining the multiplication effect."
  },
  {
    id: "analog-36",
    topicId: "analog-electronics",
    title: "What is a Transconductance Amplifier?",
    answer: {
      shortAnswer: "A transconductance amplifier outputs a current proportional to its input voltage, acting as a Voltage Controlled Current Source (VCCS).",
      detailedExplanation: "While a standard voltage amplifier has a gain measured in V/V, a transconductance amplifier has a gain measured in Amperes/Volt (Siemens), denoted as Gm. Ideal transconductance amplifiers have infinite input impedance (so they draw no voltage source current) and infinite output impedance (so the output current is independent of the load). An Operational Transconductance Amplifier (OTA) is an IC implementation where the transconductance can often be controlled by an external bias current.",
      interviewExplanation: "I would distinguish it from a standard op-amp. A standard op-amp is a voltage source (low output impedance). An OTA is a current source (high output impedance). I_out = Gm * V_in. I would mention that OTAs are useful in synthesizer filters and variable gain amplifiers.",
      keyPoints: ["Voltage Controlled Current Source (VCCS)", "Gain is Gm (Iout/Vin)", "High input impedance, high output impedance", "OTA gain can often be tuned electronically"],
      example: "An Operational Transconductance Amplifier (OTA) like the LM13700 is widely used in analog audio synthesizers for voltage-controlled filters (VCFs).",
      followUpQuestions: ["How does the output impedance of an ideal OTA differ from an ideal Op-Amp?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Connecting OTAs to 'voltage-controlled filters in synthesizers' demonstrates excellent practical electronic knowledge."
  },
  {
    id: "analog-37",
    topicId: "analog-electronics",
    title: "Explain the concept of Gain-Bandwidth Product (GBWP).",
    answer: {
      shortAnswer: "GBWP is a constant value for a given op-amp, representing the product of its open-loop gain and its bandwidth; increasing closed-loop gain proportionally decreases bandwidth.",
      detailedExplanation: "Most internally compensated op-amps have a single dominant pole that causes their open-loop gain to roll off at -20dB per decade. Because of this linear (on a log scale) roll-off, the product of the gain and the frequency at any point on that curve is a constant. If an op-amp has a GBWP of 1 MHz, you can configure it for a gain of 1 with a 1 MHz bandwidth, a gain of 10 with a 100 kHz bandwidth, or a gain of 100 with a 10 kHz bandwidth.",
      interviewExplanation: "I would explain GBWP as the fundamental trade-off in feedback amplifier design. You can have high gain or high bandwidth, but not both simultaneously. The product is always constant. I'd give a quick numerical example to prove I understand how to use it practically.",
      keyPoints: ["Constant for a specific op-amp", "Trade-off between gain and bandwidth", "Result of dominant-pole internal compensation", "GBWP = Gain * Bandwidth"],
      example: "If you need an amplifier with a gain of 1000 to operate at 20kHz for audio, you need an op-amp with a GBWP of at least 20MHz (1000 * 20,000).",
      followUpQuestions: ["What does 'unity-gain bandwidth' mean?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Numerical"],
    interviewTip: "Always be ready to do mental math with GBWP. If GBWP is 1MHz and required bandwidth is 200kHz, max gain is 5."
  },
  {
    id: "analog-38",
    topicId: "analog-electronics",
    title: "What is an Isolation Amplifier and where is it used?",
    answer: {
      shortAnswer: "An isolation amplifier electrically separates its input and output circuits, preventing any direct conductive path while still transmitting the signal.",
      detailedExplanation: "Isolation amplifiers use non-ohmic methods like optical coupling (LED and photodiode), magnetic/transformer coupling, or capacitive coupling to pass an analog signal across a high-voltage barrier. They do not share a common ground between input and output. This achieves two things: it protects sensitive downstream equipment (or humans) from massive high-voltage transients on the input side, and it breaks ground loops that can cause severe noise interference.",
      interviewExplanation: "I would explain that in normal amplifiers, input and output share a ground. In an isolation amplifier, they don't. The signal is passed over a barrier (optically or magnetically). I'd highlight safety in medical devices and industrial measurement as the primary use cases.",
      keyPoints: ["No direct electrical connection (no shared ground)", "Uses optical, magnetic, or capacitive coupling", "Provides high voltage safety barrier", "Breaks ground loops"],
      example: "In an ECG machine, an isolation amplifier ensures that a fault in the machine cannot send a lethal shock back through the electrodes into the patient.",
      followUpQuestions: ["How does an optical isolator transmit an analog signal linearly?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Mentioning 'breaking ground loops' shows you have practical debugging experience in analog circuits, not just textbook knowledge."
  },
  {
    id: "analog-39",
    topicId: "analog-electronics",
    title: "Describe the function of a precision rectifier circuit.",
    answer: {
      shortAnswer: "A precision rectifier uses an op-amp to eliminate the 0.7V forward voltage drop of a standard diode, allowing accurate rectification of tiny millivolt AC signals.",
      detailedExplanation: "A standard diode cannot rectify AC signals smaller than ~0.7V because it won't turn on. In a precision half-wave rectifier, a diode is placed in the feedback loop of an op-amp. When the input voltage goes slightly positive, the op-amp's massive open-loop gain causes its output to swing up rapidly to overcome the diode's 0.7V drop. Thus, the effective turn-on voltage of the diode is divided by the open-loop gain of the op-amp (essentially zero).",
      interviewExplanation: "I would describe it as a 'super diode'. I'd explain the problem: normal diodes ruin small signals due to V_f. The solution is putting the diode inside an op-amp feedback loop. The op-amp automatically compensates for the diode's voltage drop, creating an almost perfect ideal diode characteristic.",
      keyPoints: ["Solves the 0.7V diode drop problem", "Diode placed in op-amp feedback loop", "Rectifies tiny millivolt signals", "Also known as a 'Super Diode'"],
      example: "Used in audio level meters and precision AM demodulation circuits where the signal amplitude is smaller than a standard diode's threshold.",
      followUpQuestions: ["What limits the frequency response of a precision rectifier? (Answer: The op-amp's slew rate when crossing zero)"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Coding"],
    interviewTip: "A great advanced point to make is that standard precision rectifiers struggle at high frequencies because the op-amp has to slew heavily when transitioning through the dead zone."
  },
  {
    id: "analog-40",
    topicId: "analog-electronics",
    title: "What is a Switched-Capacitor circuit?",
    answer: {
      shortAnswer: "A switched-capacitor circuit mimics a resistor by rapidly switching a capacitor between two nodes using MOSFET switches, enabling filter design on ICs without large physical resistors.",
      detailedExplanation: "In integrated circuit design, large precise resistors are hard to fabricate. Instead, a small capacitor (C) is toggled back and forth between two voltage nodes (V1 and V2) using a clock frequency (f_clk). The charge transferred per cycle is Q = C(V1 - V2), and the average current is I = Q * f_clk. By Ohm's law, the equivalent resistance is R_eq = 1 / (C * f_clk). By varying the clock frequency, the equivalent resistance (and thus the filter cutoff frequencies) can be tuned electronically.",
      interviewExplanation: "I would explain it as a discrete-time technique to replace bulky resistors on a microchip. A capacitor switching back and forth transfers charge at a rate that mathematically looks exactly like current flowing through a resistor. I'd emphasize its main advantage: the cutoff frequency of switched-capacitor filters is determined purely by the clock frequency and capacitor ratios (which are easy to match on silicon), not absolute component values.",
      keyPoints: ["Mimics a resistor using a switched capacitor", "R_eq = 1 / (C * f_clk)", "Allows precise tunable filters on ICs", "Relies on clock frequency and capacitor ratios"],
      example: "Switched-capacitor filters are standard inside mixed-signal ICs, like analog-to-digital converters (ADCs) for anti-aliasing.",
      followUpQuestions: ["Why are capacitor ratios easier to control on an IC than absolute resistor values?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Demonstrate knowledge of IC design constraints: point out that matching two components on a chip is much easier than getting a precise absolute value for one."
  }
];
