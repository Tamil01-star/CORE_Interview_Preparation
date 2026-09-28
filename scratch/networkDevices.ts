import type { Question } from '../src/types';

export const networkDevicesQuestions: Question[] = [
  {
    id: "net-dev-1",
    topicId: "core-ece",
    title: "State and explain Thevenin's Theorem.",
    answer: {
      shortAnswer: "Thevenin's theorem states that any linear bilateral network can be replaced by an equivalent circuit consisting of a single voltage source (Vth) in series with a single equivalent resistance (Rth).",
      detailedExplanation: "In DC circuit analysis, Thevenin's theorem simplifies complex circuits into a simpler equivalent. The Thevenin voltage (Vth) is the open-circuit voltage across the load terminals, and the Thevenin resistance (Rth) is the equivalent resistance looking back into the network with all independent sources turned off (voltage sources shorted, current sources opened).",
      interviewExplanation: "I would start by defining the theorem clearly, emphasizing that it applies to linear, bilateral networks. Then, I would briefly explain how to find Vth and Rth, which shows practical understanding of circuit simplification.",
      keyPoints: ["Replaces complex network with Vth in series with Rth.", "Applies to linear, bilateral networks.", "Independent sources must be deactivated to find Rth."],
      example: "Simplifying a bridge circuit to find current through the galvanometer arm.",
      followUpQuestions: ["How does Thevenin's theorem differ from Norton's theorem?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Always mention deactivating independent sources when calculating Rth."
  },
  {
    id: "net-dev-2",
    topicId: "core-ece",
    title: "Explain Norton's Theorem and how it relates to Thevenin's Theorem.",
    answer: {
      shortAnswer: "Norton's theorem replaces a linear network with an equivalent current source (In) in parallel with an equivalent resistance (Rn). It is the dual of Thevenin's theorem.",
      detailedExplanation: "Norton's current (In) is the short-circuit current through the load terminals, and the Norton resistance (Rn) is the same as the Thevenin resistance (Rth). The two theorems are related by source transformation, where Vth = In * Rn.",
      interviewExplanation: "I would define Norton's theorem as the current-source dual to Thevenin's theorem, and state that source transformation can convert a Thevenin equivalent to a Norton equivalent and vice versa.",
      keyPoints: ["Equivalent circuit is a current source in parallel with a resistor.", "In is short-circuit current.", "Rn equals Rth."],
      example: "Converting a Vth/Rth circuit to an In/Rn circuit using Ohm's law.",
      followUpQuestions: ["Can you apply Norton's theorem to circuits with dependent sources?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Be ready to perform a quick source transformation on paper."
  },
  {
    id: "net-dev-3",
    topicId: "core-ece",
    title: "What is the Superposition Theorem?",
    answer: {
      shortAnswer: "The Superposition theorem states that in a linear network with multiple independent sources, the response in any branch is the algebraic sum of the responses caused by each independent source acting alone.",
      detailedExplanation: "When calculating the contribution of one source, all other independent sources are deactivated (voltage sources replaced by short circuits, current sources by open circuits). Dependent sources are left active. This theorem relies heavily on the principle of linearity.",
      interviewExplanation: "I'd explain that superposition breaks down a complex problem into simpler sub-problems by considering one source at a time, then summing the results algebraically.",
      keyPoints: ["Applies only to linear circuits.", "Does not apply to power calculations because power is a non-linear function.", "Deactivate other independent sources one at a time."],
      example: "Finding the voltage across a resistor in a circuit powered by both a 5V source and a 2A source.",
      followUpQuestions: ["Why can't superposition be used to calculate total power directly?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Highlight that power is non-linear (P = I^2*R), so superposition applies only to voltage and current."
  },
  {
    id: "net-dev-4",
    topicId: "core-ece",
    title: "State the Maximum Power Transfer Theorem.",
    answer: {
      shortAnswer: "Maximum power is transferred from a source to a load when the load resistance equals the Thevenin equivalent resistance of the source network as seen from the load terminals.",
      detailedExplanation: "For DC circuits, R_load = Rth. For AC circuits, the load impedance must be the complex conjugate of the source impedance (Z_load = Z_source*). At maximum power transfer, the efficiency of the circuit is 50%, meaning half the power is dissipated in the source resistance.",
      interviewExplanation: "I would state the condition for maximum power transfer (RL = Rth) and then crucially mention that the efficiency at this point is only 50%, which is why it's used in communications but not in power transmission.",
      keyPoints: ["RL = Rth for DC.", "ZL = Zs* for AC.", "Efficiency is exactly 50% at max power transfer."],
      example: "Impedance matching in audio amplifiers to speakers.",
      followUpQuestions: ["Why is maximum power transfer not used in power grids?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Interviewers love asking about the 50% efficiency limitation. Mention it proactively."
  },
  {
    id: "net-dev-5",
    topicId: "core-ece",
    title: "Explain the Reciprocity Theorem.",
    answer: {
      shortAnswer: "In a linear, passive, bilateral network, the ratio of excitation to response is constant even if the positions of excitation and response are interchanged.",
      detailedExplanation: "If a voltage source V in branch A produces a current I in branch B, then moving the voltage source V to branch B will produce the same current I in branch A. The network must only contain linear bilateral passive elements (no dependent sources or active devices).",
      interviewExplanation: "I'd define the theorem and emphasize its primary limitation: it only works for circuits with a single independent source and no dependent sources or active elements like transistors.",
      keyPoints: ["Applies to linear, passive, bilateral networks.", "Positions of source and response can be swapped.", "Only one independent source can be active."],
      example: "Verifying an antenna's transmitting and receiving patterns are identical.",
      followUpQuestions: ["Does reciprocity hold for a circuit containing a diode?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Remember that the theorem fails if non-linear elements (like diodes) or active elements are present."
  },
  {
    id: "net-dev-6",
    topicId: "core-ece",
    title: "What are Z parameters in a two-port network?",
    answer: {
      shortAnswer: "Z parameters, or open-circuit impedance parameters, relate the input and output voltages to the input and output currents in a two-port network.",
      detailedExplanation: "The equations are V1 = Z11*I1 + Z12*I2 and V2 = Z21*I1 + Z22*I2. The parameters are found by open-circuiting either the input or output port (I1=0 or I2=0) and measuring the resulting voltage/current ratios.",
      interviewExplanation: "I would write down the matrix equation for Z parameters and explain that they are called 'open-circuit' parameters because we set currents to zero (open circuit) to calculate them.",
      keyPoints: ["V = Z * I.", "Calculated by open-circuiting ports.", "Z11 and Z22 are driving-point impedances; Z12 and Z21 are transfer impedances."],
      example: "Modeling low-frequency transistor equivalent circuits.",
      followUpQuestions: ["What is the condition for a network to be reciprocal in terms of Z parameters?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Memorize the matrix equations for all two-port parameters; they are foundational."
  },
  {
    id: "net-dev-7",
    topicId: "core-ece",
    title: "Explain ABCD (Transmission) parameters.",
    answer: {
      shortAnswer: "ABCD parameters relate the input voltage and current to the output voltage and current. They are primarily used in cascaded two-port networks.",
      detailedExplanation: "The equations are V1 = A*V2 - B*I2 and I1 = C*V2 - D*I2. The negative sign on I2 occurs because the standard convention assumes I2 flows into the output port, while transmission analysis assumes current flows out to the load. For cascaded networks, the overall ABCD matrix is the product of individual ABCD matrices.",
      interviewExplanation: "I would emphasize their usefulness in power systems and cascaded transmission lines. The matrix multiplication property makes ABCD parameters uniquely suited for cascading networks.",
      keyPoints: ["Relates input variables to output variables.", "A and D are dimensionless.", "Overall matrix of cascaded networks is the product of individual matrices."],
      example: "Analyzing a long power transmission line.",
      followUpQuestions: ["What are the units of B and C in the ABCD parameters?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Highlight the cascade matrix multiplication property as the main reason ABCD parameters exist."
  },
  {
    id: "net-dev-8",
    topicId: "core-ece",
    title: "What are h (hybrid) parameters and why are they used for transistors?",
    answer: {
      shortAnswer: "h-parameters mix (hybridize) impedance and admittance parameters. They are widely used for BJT modeling because they represent measurable characteristics.",
      detailedExplanation: "The equations are V1 = h11*I1 + h12*V2 and I2 = h21*I1 + h22*V2. For a BJT, h11 is input impedance (hie), h12 is reverse voltage gain (hre), h21 is forward current gain (hfe), and h22 is output admittance (hoe). These values are easy to measure practically.",
      interviewExplanation: "I'd explain that measuring pure Z or Y parameters for a BJT is difficult because open-circuiting or short-circuiting a transistor at specific ports can cause instability or destroy it. h-parameters use practical open/short conditions that are safe and easy to measure.",
      keyPoints: ["Mix of open and short circuit measurements.", "h11=impedance, h12=voltage ratio, h21=current ratio, h22=admittance.", "Ideal for BJT equivalent circuits."],
      example: "Calculating the voltage gain of a CE amplifier using the h-parameter model.",
      followUpQuestions: ["What does 'hfe' represent in a bipolar junction transistor?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Connect h-parameters directly to the BJT hybrid-pi or exact model."
  },
  {
    id: "net-dev-9",
    topicId: "core-ece",
    title: "What are the conditions for Reciprocity and Symmetry in two-port networks?",
    answer: {
      shortAnswer: "A network is reciprocal if Z12=Z21 (or Y12=Y21, h12=-h21, AD-BC=1). It is symmetrical if Z11=Z22 (or Y11=Y22, h11h22-h12h21=1, A=D).",
      detailedExplanation: "Reciprocity implies the network consists of linear passive bilateral elements, meaning signal transmission is identical in both directions. Symmetry implies the network looks the same from both the input and output ports (input and output ports can be swapped without changing characteristics).",
      interviewExplanation: "I would list the conditions for Z and ABCD parameters, as these are the most commonly tested. I'd explain that reciprocity is about bilateral transmission, while symmetry is about physical or electrical identicality looking into either port.",
      keyPoints: ["Reciprocal: Z12=Z21, Y12=Y21, AD-BC=1.", "Symmetrical: Z11=Z22, Y11=Y22, A=D."],
      example: "A simple T-network with equal series arm resistors is symmetrical and reciprocal.",
      followUpQuestions: ["Is an ideal transformer a reciprocal network?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Memorizing the table of reciprocity and symmetry conditions across Z, Y, h, and ABCD is crucial for numerical questions."
  },
  {
    id: "net-dev-10",
    topicId: "core-ece",
    title: "How do you handle interconnection of two-port networks?",
    answer: {
      shortAnswer: "When connecting two-port networks, we add specific parameters based on the connection type: Z for series-series, Y for parallel-parallel, and ABCD for cascade.",
      detailedExplanation: "If two networks are connected in series at both ports, their equivalent Z matrix is Z1 + Z2. If they are in parallel at both ports, the equivalent Y matrix is Y1 + Y2. If cascaded, the equivalent ABCD matrix is the product of the two ABCD matrices.",
      interviewExplanation: "I would match the connection topology to the parameter type: Series-Series = Z, Parallel-Parallel = Y, Cascade = ABCD. This simplifies complex network analysis immensely.",
      keyPoints: ["Series-Series -> Add Z matrices.", "Parallel-Parallel -> Add Y matrices.", "Cascade -> Multiply ABCD matrices."],
      example: "Finding the overall Z parameters of two identical T-networks connected in series.",
      followUpQuestions: ["What parameter is used when inputs are in series and outputs are in parallel?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "A quick rule of thumb: series connections share current (like Z), parallel share voltage (like Y)."
  },
  {
    id: "net-dev-11",
    topicId: "core-ece",
    title: "Explain a Passive Low-Pass Filter and how to calculate its cutoff frequency.",
    answer: {
      shortAnswer: "A passive low-pass filter allows low-frequency signals to pass while attenuating frequencies above a certain cutoff frequency (fc). For an RC circuit, fc = 1 / (2 * pi * R * C).",
      detailedExplanation: "It consists of a resistor in series and a capacitor in parallel with the load. At low frequencies, the capacitor acts as an open circuit, allowing the signal to pass. At high frequencies, it acts as a short circuit, shunting the signal to ground. The cutoff frequency is where the output voltage drops to 70.7% (-3dB) of the input voltage.",
      interviewExplanation: "I would describe the RC configuration and explain the physical intuition using capacitor impedance (Xc = 1/wC). As frequency increases, Xc decreases, shorting the output to ground.",
      keyPoints: ["Passes low frequencies, blocks high frequencies.", "RC circuit: Series R, shunt C.", "Cutoff frequency fc = 1/(2*pi*R*C)."],
      example: "Filtering out high-frequency noise from a DC power supply.",
      followUpQuestions: ["What is the phase shift of an RC low-pass filter at the cutoff frequency?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked"],
    interviewTip: "Always mention the -3dB point when defining the cutoff frequency."
  },
  {
    id: "net-dev-12",
    topicId: "core-ece",
    title: "How does a passive High-Pass Filter work?",
    answer: {
      shortAnswer: "A passive high-pass filter blocks low frequencies and DC, allowing signals above the cutoff frequency to pass. In an RC circuit, it uses a series capacitor and shunt resistor.",
      detailedExplanation: "The capacitor blocks DC and low frequencies because its impedance is high. At high frequencies, the capacitor's impedance drops, allowing the signal to flow to the output. The cutoff frequency is also calculated as fc = 1 / (2 * pi * R * C).",
      interviewExplanation: "I'd explain that the topology is simply the inverse of the low-pass filter. The series capacitor acts as a DC block, making it useful in audio amplifiers to prevent DC from reaching the speakers.",
      keyPoints: ["Blocks low frequencies and DC.", "RC circuit: Series C, shunt R.", "Cutoff fc = 1/(2*pi*R*C)."],
      example: "AC coupling between amplifier stages to block DC bias.",
      followUpQuestions: ["Why is a high-pass filter sometimes called a differentiator?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Mention 'AC coupling' or 'DC blocking', as these are the most common practical applications."
  },
  {
    id: "net-dev-13",
    topicId: "core-ece",
    title: "What is a Band-Pass Filter and how is bandwidth defined?",
    answer: {
      shortAnswer: "A band-pass filter passes frequencies within a specific range and attenuates frequencies outside this range. Bandwidth is the difference between the upper and lower cutoff frequencies (fH - fL).",
      detailedExplanation: "It can be constructed by cascading a high-pass filter and a low-pass filter, or using an RLC resonant circuit. The center frequency (resonant frequency) is where gain is maximum. The lower and upper cutoff frequencies are the -3dB points.",
      interviewExplanation: "I would draw a quick frequency response curve mentally or on a board, pointing out the center frequency and the two -3dB points that define the bandwidth.",
      keyPoints: ["Passes a specific band of frequencies.", "Bandwidth (BW) = fH - fL.", "Quality factor (Q) = Center Frequency / Bandwidth."],
      example: "Tuning into a specific radio station frequency.",
      followUpQuestions: ["What is the relationship between Bandwidth and Quality Factor (Q)?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Introduce the Quality factor (Q). High Q means a narrow, sharp bandwidth."
  },
  {
    id: "net-dev-14",
    topicId: "core-ece",
    title: "Describe a Band-Stop (Notch) Filter.",
    answer: {
      shortAnswer: "A band-stop filter rejects a specific range of frequencies while passing all others. A very narrow band-stop filter is called a notch filter.",
      detailedExplanation: "It is essentially the inverse of a band-pass filter. It is often created using a parallel RLC circuit in series with the signal path, or a series RLC circuit in shunt. At the resonant frequency, the filter heavily attenuates the signal.",
      interviewExplanation: "I'd explain that notch filters are critical in biomedical engineering and audio processing to remove specific interference, like the 50Hz/60Hz mains power hum, without affecting the rest of the signal.",
      keyPoints: ["Rejects a specific frequency band.", "Notch filter = narrow band-stop filter.", "Used to eliminate specific noise frequencies."],
      example: "Removing 60Hz power line hum from an ECG signal.",
      followUpQuestions: ["How does a twin-T network act as a notch filter?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Provide a real-world example like removing 60Hz hum, it shows practical engineering sense."
  },
  {
    id: "net-dev-15",
    topicId: "core-ece",
    title: "What are the advantages of Active Filters over Passive Filters?",
    answer: {
      shortAnswer: "Active filters use operational amplifiers alongside resistors and capacitors. They provide voltage gain, do not use bulky inductors, and prevent loading effects.",
      detailedExplanation: "Passive filters use R, L, and C, but inductors are bulky, expensive, and lossy at low frequencies. Active filters replace inductors with op-amps and RC networks. The op-amp provides high input impedance and low output impedance, preventing the filter from being loaded down by the next stage.",
      interviewExplanation: "I would list the three main advantages: no inductors (easier to integrate on chips), ability to provide gain (rather than just attenuation), and excellent isolation between stages due to op-amp impedance characteristics.",
      keyPoints: ["No inductors needed.", "Provides voltage gain.", "Avoids loading effects due to high Zin and low Zout."],
      example: "Using a Sallen-Key topology for a 2nd order active low-pass filter.",
      followUpQuestions: ["What is the main limitation of an active filter compared to a passive one?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Don't forget to mention that active filters are limited by the op-amp's bandwidth and require a power supply."
  },
  {
    id: "net-dev-16",
    topicId: "core-ece",
    title: "Explain Foster I form of network synthesis.",
    answer: {
      shortAnswer: "Foster I form realizes an LC, RC, or RL driving point impedance function using a partial fraction expansion of the impedance Z(s).",
      detailedExplanation: "In Foster I, the impedance function Z(s) is expanded into partial fractions. Each term in the expansion corresponds to a simple parallel LC tank circuit, a capacitor, or an inductor, all connected in series.",
      interviewExplanation: "I'd explain that Foster I relies on partial fraction expansion of Z(s). The result is a series connection of parallel resonant circuits. It's a canonical form for LC network synthesis.",
      keyPoints: ["Based on partial fraction expansion of Z(s).", "Results in series connection of parallel tanks.", "Used for one-port LC, RC, RL synthesis."],
      example: "Synthesizing an LC driving point impedance into series parallel-LC blocks.",
      followUpQuestions: ["How do the poles of Z(s) relate to the components in Foster I form?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Remember: Foster I expands Z(s) -> Series connection. Foster II expands Y(s) -> Parallel connection."
  },
  {
    id: "net-dev-17",
    topicId: "core-ece",
    title: "Explain Foster II form of network synthesis.",
    answer: {
      shortAnswer: "Foster II form synthesizes a network by taking the partial fraction expansion of the admittance function Y(s).",
      detailedExplanation: "Since admittance Y(s) = 1/Z(s), the partial fraction expansion of Y(s) yields terms that represent series LC circuits, a single capacitor, or a single inductor, all connected in parallel.",
      interviewExplanation: "I would contrast it with Foster I. While Foster I expands Z(s) for a series topology, Foster II expands Y(s) to create a parallel topology of series-resonant branches.",
      keyPoints: ["Based on partial fraction expansion of Y(s).", "Results in parallel connection of series tanks."],
      example: "Realizing a one-port LC network in parallel branches.",
      followUpQuestions: ["Can an RC network be synthesized using Foster II form?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Just remember that Admittance (Y) relates to Parallel additions."
  },
  {
    id: "net-dev-18",
    topicId: "core-ece",
    title: "What is Cauer I form in network synthesis?",
    answer: {
      shortAnswer: "Cauer I form synthesizes an impedance function Z(s) using continued fraction expansion around infinity (descending powers of s).",
      detailedExplanation: "By dividing the polynomials of Z(s) in descending powers of s, we get a ladder network. For an LC network, Cauer I results in series inductors and shunt capacitors (a low-pass ladder structure).",
      interviewExplanation: "I'd explain that Cauer forms generate ladder networks via continued fraction expansion. Cauer I specifically expands around infinity, extracting components that behave as open/shorts at high frequencies.",
      keyPoints: ["Based on continued fraction expansion.", "Descending powers of s.", "Results in a ladder network (e.g., series L, shunt C)."],
      example: "Synthesizing a low-pass LC ladder filter.",
      followUpQuestions: ["What happens if you expand in ascending powers of s instead?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical"],
    interviewTip: "Cauer I = Descending powers = Low-pass structure (Series L, Shunt C)."
  },
  {
    id: "net-dev-19",
    topicId: "core-ece",
    title: "What is Cauer II form in network synthesis?",
    answer: {
      shortAnswer: "Cauer II form synthesizes a network using continued fraction expansion around zero (ascending powers of s).",
      detailedExplanation: "By arranging polynomials in ascending powers of s before performing long division, we generate a ladder network. For an LC circuit, Cauer II results in series capacitors and shunt inductors (a high-pass ladder structure).",
      interviewExplanation: "I would contrast Cauer II with Cauer I. Cauer II expands around s=0 (ascending powers), extracting components that dictate low-frequency behavior, resulting in high-pass-like structures.",
      keyPoints: ["Based on continued fraction expansion.", "Ascending powers of s.", "Results in a ladder network (e.g., series C, shunt L)."],
      example: "Synthesizing a high-pass LC ladder filter.",
      followUpQuestions: ["How does the continued fraction expansion process terminate for a realizable network?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical"],
    interviewTip: "Cauer II = Ascending powers = High-pass structure (Series C, Shunt L)."
  },
  {
    id: "net-dev-20",
    topicId: "core-ece",
    title: "What is a Hurwitz Polynomial and a Positive Real (PR) function?",
    answer: {
      shortAnswer: "A Hurwitz polynomial has all its roots strictly in the left half of the s-plane. A function is Positive Real (PR) if it represents a physically realizable passive one-port network.",
      detailedExplanation: "For Z(s) to be practically realizable using passive components (R, L, C), it must be a PR function. A PR function requires its denominator to be a Hurwitz polynomial (ensuring stability), poles and zeros must be on the left half plane or simple on the jw axis, and the real part of Z(jw) must be >= 0.",
      interviewExplanation: "I'd emphasize that PR functions are the fundamental test for realizability. If a transfer function isn't PR, you cannot build it using only passive components.",
      keyPoints: ["Hurwitz polynomial: Roots on the left half plane.", "PR function: Realizable using passive components.", "Re[Z(jw)] >= 0 for all w."],
      example: "Testing if Z(s) = (s+1)/(s^2+s+1) can be synthesized.",
      followUpQuestions: ["How do you test if a polynomial is Hurwitz using the Routh array?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Mention the Routh-Hurwitz criterion as the tool used to test for Hurwitz polynomials."
  },
  {
    id: "net-dev-21",
    topicId: "core-ece",
    title: "What is an attenuator?",
    answer: {
      shortAnswer: "An attenuator is a passive resistive network designed to reduce the power or voltage level of a signal by a specific amount while matching the impedance of the source and load.",
      detailedExplanation: "Unlike an amplifier which provides gain, an attenuator provides a known loss (measured in dB). Because it uses only resistors, it is frequency-independent (ideally). It ensures impedance matching to prevent signal reflection in RF and audio applications.",
      interviewExplanation: "I would define it as a fixed-loss impedance-matching device. I'd highlight that its primary role isn't just to drop voltage, but to do so while maintaining perfect impedance matching for the system.",
      keyPoints: ["Reduces signal amplitude.", "Made of resistors (passive).", "Maintains impedance matching."],
      example: "A 10dB attenuator pad used in a 50-ohm RF system.",
      followUpQuestions: ["What is the difference between an attenuator and a simple voltage divider?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "The key differentiator from a voltage divider is 'impedance matching'. Always mention it."
  },
  {
    id: "net-dev-22",
    topicId: "core-ece",
    title: "Describe the T-type attenuator.",
    answer: {
      shortAnswer: "A T-type attenuator consists of two series resistors and one shunt resistor, arranged in the shape of the letter 'T'.",
      detailedExplanation: "It provides a specific attenuation while presenting the desired characteristic impedance (Z0) to both the input and output. For a symmetrical T-attenuator, the two series resistors are equal. It's widely used in unbalanced lines.",
      interviewExplanation: "I'd visually describe the T network: one resistor in series, followed by a shunt resistor to ground, followed by another series resistor. It's used when we need symmetrical impedance matching on both sides.",
      keyPoints: ["Shaped like a T.", "Two series resistors, one shunt.", "Used for unbalanced lines."],
      example: "Building a 6dB T-pad for a 50-ohm transmission line.",
      followUpQuestions: ["How does a Bridged-T attenuator improve upon the basic T-type?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical"],
    interviewTip: "Be familiar with the design equations for T-pads given Z0 and required dB loss."
  },
  {
    id: "net-dev-23",
    topicId: "core-ece",
    title: "Describe the Pi-type attenuator.",
    answer: {
      shortAnswer: "A Pi-type attenuator consists of one series resistor and two shunt resistors, forming the Greek letter Pi (π).",
      detailedExplanation: "Like the T-type, it provides attenuation and impedance matching. For a symmetrical Pi-attenuator, the two shunt resistors are equal. The choice between T and Pi often depends on which yields more practical resistor values for a given attenuation.",
      interviewExplanation: "I would describe it as having a shunt resistor at the input, a series resistor, and a shunt resistor at the output. It achieves the exact same electrical function as a T-attenuator but with a different topology.",
      keyPoints: ["Shaped like π.", "One series resistor, two shunt.", "Dual of the T-attenuator."],
      example: "Designing a Pi-pad for high-frequency RF applications.",
      followUpQuestions: ["Can you convert a T-attenuator to a Pi-attenuator?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mention the Star-Delta (Y-Delta) transformation as the mathematical link between T and Pi attenuators."
  },
  {
    id: "net-dev-24",
    topicId: "core-ece",
    title: "What is a Bridged-T attenuator?",
    answer: {
      shortAnswer: "A Bridged-T attenuator adds a fourth resistor bridging across the two series resistors of a standard T-attenuator.",
      detailedExplanation: "The advantage of the Bridged-T topology is that it requires only two variable resistors to adjust the attenuation while keeping the impedance perfectly matched, whereas a standard T-attenuator requires three variable resistors.",
      interviewExplanation: "I'd explain that for variable attenuators, adjusting three resistors simultaneously to maintain impedance is mechanically difficult. The Bridged-T solves this by allowing impedance matching with only two adjustments.",
      keyPoints: ["Standard T-pad with a bridging resistor.", "Requires adjusting fewer resistors for variable attenuation.", "Maintains constant impedance."],
      example: "Used in audio mixing consoles for volume faders.",
      followUpQuestions: ["What is an L-type attenuator and where is it used?"]
    },
    difficulty: "Advanced",
    badges: ["Practical"],
    interviewTip: "Focus on its application in *variable* attenuators."
  },
  {
    id: "net-dev-25",
    topicId: "core-ece",
    title: "What is an L-type attenuator?",
    answer: {
      shortAnswer: "An L-type attenuator is a simple two-resistor network (one series, one shunt) shaped like an inverted L.",
      detailedExplanation: "Unlike T or Pi types, an L-pad cannot provide both a specific attenuation AND match impedances in both directions simultaneously. It is primarily used for impedance matching between two unequal impedances with minimum loss, or matching in one direction only.",
      interviewExplanation: "I would clarify that the L-pad is the simplest attenuator, but it's asymmetrical. It's mostly an impedance matching tool rather than a precise loss tool.",
      keyPoints: ["Two resistors (one series, one shunt).", "Cannot match impedances in both directions simultaneously.", "Used for matching unequal impedances."],
      example: "Matching a 50-ohm amplifier output to a 75-ohm antenna system.",
      followUpQuestions: ["If you want to match impedances in both directions, why must you use at least three resistors (T or Pi)?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "L-pads are for impedance matching; T/Pi pads are for fixed attenuation with matching."
  },
  {
    id: "net-dev-26",
    topicId: "core-ece",
    title: "What is a Diode Clipper circuit?",
    answer: {
      shortAnswer: "A clipper is a circuit that limits or 'clips' a portion of an AC signal above or below a specific reference voltage without distorting the rest of the waveform.",
      detailedExplanation: "It uses diodes in series or parallel with the load. When the input voltage exceeds the reference (plus the diode forward drop), the diode conducts and clamps the output to that reference level. It is used in over-voltage protection and waveshaping.",
      interviewExplanation: "I would mention the two main types: series and parallel clippers. I'd explain that clippers are essentially 'limiters' used to protect circuits from voltage spikes.",
      keyPoints: ["Limits voltage levels.", "Uses diodes.", "Does not shift the DC level of the signal."],
      example: "Removing noise spikes from a digital signal.",
      followUpQuestions: ["How does a biased clipper work?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Draw a simple sine wave with the top chopped off to illustrate the concept visually."
  },
  {
    id: "net-dev-27",
    topicId: "core-ece",
    title: "What is a Diode Clamper circuit?",
    answer: {
      shortAnswer: "A clamper is a circuit that shifts the entire AC signal waveform up or down on the DC axis without changing its shape.",
      detailedExplanation: "Also known as a DC restorer, it consists of a capacitor, a diode, and a resistor. The capacitor charges to the peak voltage of the input signal during the diode's forward bias phase. During reverse bias, the capacitor acts as a battery in series with the input, shifting the DC level.",
      interviewExplanation: "I'd contrast clampers with clippers: clippers alter the shape, clampers only alter the DC offset. The capacitor is the key component that stores the shift voltage.",
      keyPoints: ["Shifts DC level (DC restorer).", "Requires a capacitor to store charge.", "Waveform shape remains unchanged."],
      example: "Restoring the DC level of a video signal after AC coupling.",
      followUpQuestions: ["Why is the RC time constant important in a clamper circuit?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Emphasize that the RC time constant must be much larger than the time period of the input signal to prevent capacitor discharge."
  },
  {
    id: "net-dev-28",
    topicId: "core-ece",
    title: "Compare Half-wave and Full-wave rectifiers.",
    answer: {
      shortAnswer: "A half-wave rectifier uses one diode and conducts during only one half-cycle of the AC input. A full-wave rectifier uses multiple diodes and conducts during both half-cycles.",
      detailedExplanation: "Half-wave rectifiers have low efficiency (40.6%) and high ripple factor (1.21). Full-wave rectifiers (center-tapped or bridge) have higher efficiency (81.2%), lower ripple factor (0.48), and double the output frequency, making filtering much easier.",
      interviewExplanation: "I would state that full-wave rectifiers are standard in power supplies because they utilize the entire transformer cycle, reducing waste and making the DC output smoother.",
      keyPoints: ["Half-wave: 1 diode, 40.6% efficiency.", "Full-wave: 2 or 4 diodes, 81.2% efficiency.", "Full-wave is easier to filter due to 2f ripple frequency."],
      example: "Using a full-wave rectifier in a basic linear DC power supply.",
      followUpQuestions: ["What is the Peak Inverse Voltage (PIV) for a half-wave vs a center-tapped full-wave rectifier?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Numerical"],
    interviewTip: "Memorize the efficiency, ripple factor, and PIV values for both topologies."
  },
  {
    id: "net-dev-29",
    topicId: "core-ece",
    title: "What are the advantages of a Bridge Rectifier over a Center-Tapped Full-Wave Rectifier?",
    answer: {
      shortAnswer: "A bridge rectifier eliminates the need for a bulky, expensive center-tapped transformer and has a lower Peak Inverse Voltage (PIV) rating for its diodes.",
      detailedExplanation: "In a center-tapped rectifier, the PIV across the reverse-biased diode is 2*Vm. In a bridge rectifier, the PIV is only Vm. Furthermore, center-tapped transformers are expensive and heavy. The only downside to a bridge rectifier is that two diodes are in series during conduction, dropping 1.4V instead of 0.7V.",
      interviewExplanation: "I'd explain that bridge rectifiers are the industry standard for modern electronics because diodes are cheap but transformers are expensive. Lowering PIV also allows using cheaper diodes.",
      keyPoints: ["No center-tapped transformer needed.", "PIV is Vm (instead of 2Vm).", "Higher voltage drop (2*Vf)."],
      example: "A standard 5V USB wall charger uses a diode bridge.",
      followUpQuestions: ["When would a center-tapped rectifier be preferable to a bridge rectifier?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Mention that for very low voltage high current supplies, the 1.4V drop of a bridge is problematic, making center-tap better."
  },
  {
    id: "net-dev-30",
    topicId: "core-ece",
    title: "How does a Voltage Multiplier circuit work?",
    answer: {
      shortAnswer: "A voltage multiplier uses networks of diodes and capacitors to convert lower AC voltage to a higher DC voltage.",
      detailedExplanation: "During alternating half-cycles, capacitors are sequentially charged up and their voltages sum in series. A voltage doubler, for instance, charges two capacitors to Vm, yielding an output of 2Vm. They are used when high voltage and low current are needed.",
      interviewExplanation: "I would describe it conceptually as a charge pump. Diodes steer the charge into capacitors on alternate AC cycles, and the capacitors are stacked in series to multiply the voltage.",
      keyPoints: ["Converts AC to high DC voltage.", "Uses diodes and capacitors.", "Suitable only for low-current applications."],
      example: "Generating the high voltage for a CRT tube or a taser.",
      followUpQuestions: ["Why are voltage multipliers not used for high-power (high-current) applications?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Stress that they have poor voltage regulation and are only for low-current applications."
  },
  {
    id: "net-dev-31",
    topicId: "core-ece",
    title: "Why is BJT Biasing required?",
    answer: {
      shortAnswer: "Biasing sets a stable DC operating point (Q-point) for a transistor so it operates in the desired region (e.g., active region for amplification) and prevents distortion.",
      detailedExplanation: "Without proper DC biasing, an AC input signal could drive the BJT into cutoff or saturation, causing severe clipping/distortion of the output waveform. Biasing also stabilizes the Q-point against temperature variations and variations in the transistor's beta (hfe).",
      interviewExplanation: "I'd explain that a transistor needs a steady foundation (DC bias) before it can correctly process an AC signal. Without it, the signal would be distorted by the transistor's non-linear limits.",
      keyPoints: ["Sets the Q-point in the active region.", "Prevents signal clipping/distortion.", "Stabilizes against temperature and Beta changes."],
      example: "Biasing an audio pre-amplifier to prevent the sound from clipping.",
      followUpQuestions: ["What is Thermal Runaway in a BJT?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Use the term 'Q-point' (Quiescent point) explicitly."
  },
  {
    id: "net-dev-32",
    topicId: "core-ece",
    title: "Explain Fixed Bias circuit and its disadvantages.",
    answer: {
      shortAnswer: "A fixed bias circuit uses a single resistor (Rb) connected from Vcc to the base to supply a constant base current.",
      detailedExplanation: "Ib = (Vcc - Vbe) / Rb. Since Ic = Beta * Ib, the collector current is highly dependent on Beta. The major disadvantage is that Beta varies significantly between transistors and with temperature. This makes fixed bias highly unstable; the Q-point easily shifts into saturation.",
      interviewExplanation: "I would describe it as the simplest but worst biasing method. Because it dictates base current rigidly, any change in temperature or Beta directly causes huge changes in collector current.",
      keyPoints: ["Simplest biasing method.", "Highly unstable Q-point.", "Beta and temperature variations cause massive shifts in Ic."],
      example: "Used only in simple switching circuits, never in linear amplifiers.",
      followUpQuestions: ["How does Collector Feedback Bias improve upon Fixed Bias?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Always follow up an explanation of fixed bias with why it's not used practically."
  },
  {
    id: "net-dev-33",
    topicId: "core-ece",
    title: "Why is Voltage Divider Bias the most widely used BJT biasing method?",
    answer: {
      shortAnswer: "Voltage divider bias uses a resistor network to set a stable base voltage. It makes the Q-point largely independent of the transistor's Beta.",
      detailedExplanation: "By using a voltage divider (R1 and R2) at the base and an emitter resistor (Re), the base voltage is held stiff. If temperature increases and Ic tries to rise, the voltage drop across Re increases. This reduces Vbe, which lowers Ib, opposing the increase in Ic. This negative feedback stabilizes the Q-point.",
      interviewExplanation: "I would emphasize the mechanism of negative feedback via the emitter resistor. It creates a self-correcting system that makes the circuit immune to Beta variations and temperature changes.",
      keyPoints: ["Highly stable Q-point.", "Independent of Beta (hfe).", "Uses negative feedback via the emitter resistor (Re)."],
      example: "Standard biasing configuration for nearly all discrete CE amplifiers.",
      followUpQuestions: ["What is the purpose of the Emitter Bypass Capacitor in a voltage divider bias circuit?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Be prepared to draw this circuit and explain the negative feedback loop step-by-step."
  },
  {
    id: "net-dev-34",
    topicId: "core-ece",
    title: "Explain Collector Feedback Bias.",
    answer: {
      shortAnswer: "Collector feedback bias connects the base resistor to the collector instead of Vcc, providing negative feedback to stabilize the Q-point.",
      detailedExplanation: "If temperature rises, Ic increases, causing a larger voltage drop across the collector resistor Rc. This lowers the collector voltage (Vc). Since the base resistor is connected to Vc, the base current Ib drops. The drop in Ib forces Ic to decrease, stabilizing the circuit.",
      interviewExplanation: "I'd explain this as a simpler alternative to voltage divider bias. It provides negative DC feedback. However, it also provides negative AC feedback, which reduces the amplifier's voltage gain.",
      keyPoints: ["Rb connected to collector, not Vcc.", "Provides negative feedback.", "More stable than fixed bias, less stable than voltage divider."],
      example: "Used in simple RF amplifiers where fewer components are desired.",
      followUpQuestions: ["How does collector feedback affect the input impedance of the amplifier?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mention the trade-off: it improves stability but lowers voltage gain due to AC feedback."
  },
  {
    id: "net-dev-35",
    topicId: "core-ece",
    title: "What is Thermal Runaway and how is it prevented?",
    answer: {
      shortAnswer: "Thermal runaway is a destructive cycle where an increase in temperature causes leakage current to increase, which increases power dissipation and heat, leading to further current increase until the BJT is destroyed.",
      detailedExplanation: "In a BJT, the minority carrier leakage current (Ico) doubles for every 10°C rise in temperature. If not properly biased, this increases the total collector current, causing more heating at the collector-base junction. This positive feedback loop destroys the device.",
      interviewExplanation: "I would describe thermal runaway as a catastrophic failure mode. To prevent it, we use stability techniques like the emitter resistor (Re) in voltage divider bias, or heat sinks to dissipate the thermal energy.",
      keyPoints: ["Self-destructive cycle of heat and leakage current.", "Ico is highly temperature-dependent.", "Prevented by stable biasing (Re) and heat sinks."],
      example: "A power amplifier burning out due to lack of a heat sink.",
      followUpQuestions: ["What is the Stability Factor (S) in the context of BJT biasing?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Link thermal runaway directly to the reverse saturation current (Ico)."
  },
  {
    id: "net-dev-36",
    topicId: "core-ece",
    title: "What are the characteristics of a Common Emitter (CE) amplifier?",
    answer: {
      shortAnswer: "A CE amplifier provides both high voltage gain and high current gain, resulting in the highest power gain of all configurations. It inverts the input signal by 180 degrees.",
      detailedExplanation: "The input is applied to the base and output taken from the collector. It has medium input impedance and medium output impedance. Because it offers good gain for both voltage and current, it is the most widely used configuration for general-purpose amplification.",
      interviewExplanation: "I'd highlight that CE is the 'jack of all trades'—it's the only configuration that gives both voltage and current gain, which is why it's the default choice in audio and radio circuits. I'd also mention the 180-degree phase shift.",
      keyPoints: ["High voltage and current gain.", "Highest power gain.", "180-degree phase shift."],
      example: "Audio voltage amplification stages.",
      followUpQuestions: ["Why does the CE amplifier invert the signal?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Always mention the 180-degree phase inversion; it's a very common trivia question."
  },
  {
    id: "net-dev-37",
    topicId: "core-ece",
    title: "What are the characteristics of a Common Base (CB) amplifier?",
    answer: {
      shortAnswer: "A CB amplifier provides high voltage gain but a current gain of slightly less than unity (alpha). It has very low input impedance and high output impedance.",
      detailedExplanation: "The input is at the emitter and output at the collector. Because of its low input impedance, it is mostly used as a current buffer or in high-frequency RF applications (since it doesn't suffer heavily from the Miller effect). There is no phase inversion.",
      interviewExplanation: "I would contrast it with the CE amplifier. Since current gain is ~1, it doesn't provide power gain like CE. Its main selling point is high-frequency performance and its ability to act as an impedance matcher from low to high.",
      keyPoints: ["Current gain < 1 (Alpha).", "High voltage gain.", "Low Zin, High Zout.", "Excellent high-frequency response."],
      example: "RF amplifiers and microphone preamps.",
      followUpQuestions: ["Why does the CB amplifier have better high-frequency response than the CE amplifier?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Associate Common Base with 'High Frequency' and 'Low Input Impedance'."
  },
  {
    id: "net-dev-38",
    topicId: "core-ece",
    title: "Explain the Common Collector (CC) amplifier (Emitter Follower).",
    answer: {
      shortAnswer: "A CC amplifier provides high current gain but a voltage gain of slightly less than 1. It has very high input impedance and low output impedance.",
      detailedExplanation: "The input is at the base and output at the emitter. Because the output voltage closely 'follows' the input voltage, it's called an emitter follower. Its high Zin and low Zout make it an ideal voltage buffer for impedance matching.",
      interviewExplanation: "I'd focus entirely on its role as a buffer. It prevents a low-impedance load from loading down a high-impedance source. I'd mention there is no phase inversion.",
      keyPoints: ["Voltage gain ~ 1.", "High current gain.", "High Zin, Low Zout (Voltage Buffer)."],
      example: "The final output stage of an audio amplifier driving low-impedance speakers.",
      followUpQuestions: ["How does an Emitter Follower prevent loading effects?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Always use the term 'Emitter Follower' and 'Voltage Buffer'."
  },
  {
    id: "net-dev-39",
    topicId: "core-ece",
    title: "What is Miller's Theorem and how does it affect the CE amplifier?",
    answer: {
      shortAnswer: "Miller's theorem states that an impedance connected between the input and output nodes of an amplifier appears as two equivalent impedances to ground at the input and output, scaled by the amplifier's gain.",
      detailedExplanation: "In a CE amplifier, the parasitic base-collector capacitance (Cbc) sits between input and output. Because the amplifier has a large negative voltage gain (-Av), Miller's theorem multiplies this capacitance at the input by (1 + Av). This creates a massive effective input capacitance, drastically reducing the amplifier's high-frequency bandwidth.",
      interviewExplanation: "I would explain that Miller effect is the primary reason Common Emitter amplifiers struggle at high frequencies. The voltage gain effectively multiplies the feedback capacitance, acting as a severe low-pass filter.",
      keyPoints: ["Multiplies feedback capacitance by (1 + |Av|).", "Severely limits high-frequency bandwidth.", "Mainly affects Common Emitter configurations."],
      example: "Calculating the high-frequency cutoff of a CE amplifier.",
      followUpQuestions: ["How does a Cascode amplifier solve the Miller effect problem?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "The Cascode amplifier (CE driving a CB) is the standard industrial solution to the Miller effect. Be ready to explain it."
  },
  {
    id: "net-dev-40",
    topicId: "core-ece",
    title: "What is a Darlington Pair?",
    answer: {
      shortAnswer: "A Darlington pair is a compound structure consisting of two BJTs connected such that the emitter of the first is tied to the base of the second. It provides extremely high current gain.",
      detailedExplanation: "The total current gain is roughly the product of the individual gains (Beta_total = Beta1 * Beta2). It is used when a very small input current needs to switch a large load. The trade-off is a higher base-emitter voltage drop (approx 1.4V) and slower switching speed.",
      interviewExplanation: "I'd sketch the connection mentally: T1's emitter feeds T2's base. It acts like a single 'super BJT' with massive Beta. I would also note the drawback of higher saturation voltage.",
      keyPoints: ["Beta_total ≈ Beta1 * Beta2.", "Very high input impedance.", "High Vbe drop (1.4V)."],
      example: "Motor driver circuits requiring high current from a microcontroller pin.",
      followUpQuestions: ["What is a Sziklai pair and how is it different from a Darlington pair?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Mention the 1.4V Vbe drop. It shows you understand the practical limitations, not just the math."
  },
  {
    id: "net-dev-41",
    topicId: "core-ece",
    title: "What are the effects of Negative Feedback in amplifiers?",
    answer: {
      shortAnswer: "Negative feedback reduces overall voltage gain but vastly improves amplifier performance by increasing bandwidth, reducing distortion, and stabilizing gain.",
      detailedExplanation: "By feeding a portion of the out-of-phase output back to the input, the amplifier becomes less sensitive to internal parameter variations (like temperature or component aging). It also alters input and output impedances depending on the feedback topology.",
      interviewExplanation: "I would frame negative feedback as an engineering trade-off: we intentionally sacrifice raw voltage gain in exchange for predictability, linearity, and wider frequency response.",
      keyPoints: ["Reduces gain.", "Increases bandwidth (Gain-Bandwidth product is constant).", "Reduces non-linear distortion and noise.", "Stabilizes gain."],
      example: "Operational amplifiers use massive open-loop gain tamed by negative feedback to perform precise math.",
      followUpQuestions: ["If negative feedback is so good, why would we ever use positive feedback?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "List at least 4 advantages. 'Sacrifice gain for stability' is the key mantra."
  },
  {
    id: "net-dev-42",
    topicId: "core-ece",
    title: "Explain Voltage-Series feedback.",
    answer: {
      shortAnswer: "In voltage-series feedback, a portion of the output voltage is sampled in parallel and fed back in series with the input signal.",
      detailedExplanation: "Sampling voltage in parallel decreases the output impedance, making the amplifier a better ideal voltage source. Mixing in series at the input increases the input impedance, meaning it draws less current from the signal source. This topology is perfect for a True Voltage Amplifier.",
      interviewExplanation: "I would use the words 'shunt sampling' and 'series mixing'. Shunt at the output lowers Zout. Series at the input raises Zin. This makes it an ideal voltage amplifier.",
      keyPoints: ["Increases Input Impedance (Zin).", "Decreases Output Impedance (Zout).", "Ideal for Voltage Amplifiers."],
      example: "A non-inverting operational amplifier configuration.",
      followUpQuestions: ["Which feedback topology is used to design a Transconductance amplifier?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Rule of thumb: Series connection Increases impedance. Shunt (parallel) connection Decreases impedance."
  },
  {
    id: "net-dev-43",
    topicId: "core-ece",
    title: "Explain Voltage-Shunt feedback.",
    answer: {
      shortAnswer: "In voltage-shunt feedback, a portion of the output voltage is sampled in parallel and fed back in parallel (shunt) with the input signal.",
      detailedExplanation: "Sampling voltage in parallel decreases output impedance. Mixing in parallel (shunt) at the input decreases input impedance. This makes the circuit act like a Transresistance Amplifier (current to voltage converter).",
      interviewExplanation: "Applying the rule: Shunt at output lowers Zout, shunt at input lowers Zin. A low Zin, low Zout amplifier takes in a current and outputs a voltage.",
      keyPoints: ["Decreases Input Impedance (Zin).", "Decreases Output Impedance (Zout).", "Ideal for Transresistance Amplifiers."],
      example: "An inverting operational amplifier configuration.",
      followUpQuestions: ["How does this topology affect the bandwidth of the amplifier?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Keep the impedance rules clear. Shunt always means decreased impedance."
  },
  {
    id: "net-dev-44",
    topicId: "core-ece",
    title: "Explain Current-Series feedback.",
    answer: {
      shortAnswer: "In current-series feedback, a portion of the output current is sampled in series and fed back in series with the input.",
      detailedExplanation: "Sampling current in series increases the output impedance, acting like a better ideal current source. Mixing in series at the input increases the input impedance. This topology makes an excellent Transconductance Amplifier (voltage to current converter).",
      interviewExplanation: "Series at output raises Zout. Series at input raises Zin. High Zin, High Zout means it takes a voltage and outputs a current.",
      keyPoints: ["Increases Input Impedance (Zin).", "Increases Output Impedance (Zout).", "Ideal for Transconductance Amplifiers."],
      example: "A BJT amplifier with an unbypassed emitter resistor.",
      followUpQuestions: ["Why does an unbypassed emitter resistor constitute current-series feedback?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "The BJT with an unbypassed emitter resistor is the most common practical example of this. Memorize it."
  },
  {
    id: "net-dev-45",
    topicId: "core-ece",
    title: "Explain Current-Shunt feedback.",
    answer: {
      shortAnswer: "In current-shunt feedback, a portion of the output current is sampled in series and fed back in parallel (shunt) with the input.",
      detailedExplanation: "Sampling current in series increases output impedance. Mixing in parallel (shunt) decreases input impedance. This makes it an ideal Current Amplifier.",
      interviewExplanation: "Series at output raises Zout. Shunt at input lowers Zin. Low Zin, High Zout means it takes a current and outputs a current, making it an ideal current amplifier.",
      keyPoints: ["Decreases Input Impedance (Zin).", "Increases Output Impedance (Zout).", "Ideal for Current Amplifiers."],
      example: "Certain two-stage cascaded BJT amplifiers with feedback loops.",
      followUpQuestions: ["Can you summarize which topologies are used for the 4 ideal amplifier types?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Make a mental table mapping the 4 feedback topologies to the 4 ideal amplifier types (Voltage, Current, Transconductance, Transresistance)."
  },
  {
    id: "net-dev-46",
    topicId: "core-ece",
    title: "What is the Barkhausen Criterion for oscillators?",
    answer: {
      shortAnswer: "The Barkhausen criterion states the mathematical conditions necessary for a linear circuit to oscillate: the loop gain magnitude must be equal to 1, and the total phase shift around the loop must be 0 or 360 degrees.",
      detailedExplanation: "Oscillators use positive feedback. The amplifier provides some gain (A) and a phase shift. The feedback network provides attenuation (Beta) and another phase shift. To sustain oscillations, A * Beta = 1, and the phase shifts must sum to 0°, meaning the fed-back signal perfectly reinforces the input.",
      interviewExplanation: "I would explicitly state both conditions: magnitude |A*Beta| = 1, and phase angle = 0°. I would also add that practically, we design |A*Beta| slightly greater than 1 to start oscillations, and non-linearities bring it down to exactly 1.",
      keyPoints: ["Loop gain |A*Beta| = 1.", "Loop phase shift = 0° or 360°.", "Requires positive feedback."],
      example: "Designing an RC Phase shift oscillator.",
      followUpQuestions: ["What happens if the loop gain magnitude is less than 1? Or much greater than 1?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Mention the practical startup condition: |A*Beta| > 1 initially to build up from noise."
  },
  {
    id: "net-dev-47",
    topicId: "core-ece",
    title: "How does an RC Phase Shift Oscillator work?",
    answer: {
      shortAnswer: "An RC phase shift oscillator uses an inverting amplifier (180° shift) and three RC filter stages, each providing a 60° shift, to achieve a total 360° phase shift for positive feedback.",
      detailedExplanation: "At a specific resonant frequency, the three RC stages provide exactly 180° of phase shift. Combined with the 180° shift from a CE amplifier or inverting op-amp, the Barkhausen phase criterion is met. The amplifier gain must be high enough to compensate for the attenuation of the RC network (minimum gain of 29 for op-amp).",
      interviewExplanation: "I would break down the phase shift: 180 from the amp, and 3x 60 from the RC network. I'd mention it's used for audio frequency (low frequency) generation because inductors would be too bulky at these frequencies.",
      keyPoints: ["Uses three RC stages.", "Each RC stage gives 60° shift at resonance.", "Used for low-frequency (audio) generation."],
      example: "Generating a pure 1kHz sine wave for audio testing.",
      followUpQuestions: ["Why do we need at least three RC stages? Why not two?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Know the magic number: The amplifier needs a gain of exactly -29 to sustain oscillations in a standard RC phase shift circuit."
  },
  {
    id: "net-dev-48",
    topicId: "core-ece",
    title: "Compare Colpitts and Hartley Oscillators.",
    answer: {
      shortAnswer: "Both are LC oscillators used for high frequencies (RF). Colpitts uses a tapped capacitor (two capacitors, one inductor) in its tank circuit, while Hartley uses a tapped inductor (two inductors, one capacitor).",
      detailedExplanation: "Colpitts is generally preferred over Hartley at very high frequencies because capacitors are easier to manufacture with high precision than tapped inductors, and Colpitts offers better frequency stability and a purer sine wave.",
      interviewExplanation: "I would mentally picture their tank circuits: Colpitts = Capacitive divider. Hartley = inductive divider. They are the standard for RF generation.",
      keyPoints: ["LC tank oscillators for RF.", "Colpitts: 2 Capacitors, 1 Inductor.", "Hartley: 2 Inductors, 1 Capacitor."],
      example: "Local oscillator in an AM/FM radio receiver.",
      followUpQuestions: ["How is the resonant frequency determined in a Colpitts oscillator?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Mnemonic: Colpitts starts with C, so it uses two Capacitors."
  },
  {
    id: "net-dev-49",
    topicId: "core-ece",
    title: "Explain the Wien Bridge Oscillator.",
    answer: {
      shortAnswer: "A Wien bridge oscillator uses a lead-lag RC network (series RC and parallel RC) in a bridge configuration to generate highly stable, low-distortion audio frequencies.",
      detailedExplanation: "At the resonant frequency, the lead-lag network produces a 0° phase shift and an attenuation of 1/3. Therefore, a non-inverting amplifier with a gain of exactly 3 is used to satisfy Barkhausen criteria. It provides an exceptionally pure sine wave.",
      interviewExplanation: "I'd explain that this is the gold standard for audio frequency generation. I would highlight that the amplifier needs a gain of 3, usually set by a resistor divider, and modern designs use a non-linear element (like a lightbulb or diode) to stabilize amplitude.",
      keyPoints: ["Uses lead-lag RC network.", "0° phase shift at resonance.", "Requires amplifier gain of exactly 3.", "Very pure sine wave output."],
      example: "Hewlett-Packard's first product, the HP200A audio oscillator, used a Wien bridge with a lightbulb for stabilization.",
      followUpQuestions: ["Why is a light bulb or thermistor used in the feedback loop of practical Wien bridge oscillators?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Mentioning the HP200A lightbulb trick shows deep historical and practical engineering knowledge."
  },
  {
    id: "net-dev-50",
    topicId: "core-ece",
    title: "How does a Crystal Oscillator work?",
    answer: {
      shortAnswer: "A crystal oscillator uses the piezoelectric effect of a quartz crystal to create an electrical resonance with extremely high Q-factor, resulting in highly precise and stable frequencies.",
      detailedExplanation: "When mechanical pressure is applied to a piezoelectric crystal, it generates a voltage, and vice versa. Electrically, the crystal behaves like an RLC resonant circuit with a Quality factor (Q) in the tens of thousands. This immense Q value ensures the oscillator's frequency barely drifts with temperature or time.",
      interviewExplanation: "I would emphasize the word 'Piezoelectric effect'. I'd explain that while LC oscillators drift over time, quartz crystals act as mechanical tuning forks locked to a specific frequency, making them essential for microcontrollers and watches.",
      keyPoints: ["Uses Piezoelectric effect.", "Extremely high Q-factor (>10,000).", "Unmatched frequency stability."],
      example: "The 16MHz clock source for an Arduino microcontroller.",
      followUpQuestions: ["What is the difference between the series and parallel resonant frequencies of a crystal?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Always use the term 'Piezoelectric effect' and mention the extremely high Q-factor."
  },
  {
    id: "net-dev-51",
    topicId: "core-ece",
    title: "Describe a Class A Power Amplifier.",
    answer: {
      shortAnswer: "In a Class A amplifier, the transistor conducts for the entire 360° of the input cycle. It offers the best linearity but the lowest efficiency.",
      detailedExplanation: "The Q-point is biased exactly in the middle of the load line. Because current flows continuously even when there is no input signal, it wastes a massive amount of power as heat. Maximum theoretical efficiency is 25% (direct-coupled) or 50% (transformer-coupled).",
      interviewExplanation: "I would present it as the benchmark for audio quality due to zero crossover distortion. However, I'd quickly point out that its terrible efficiency makes it impractical for high-power battery-operated devices.",
      keyPoints: ["Conducts 360°.", "Highest linearity, lowest distortion.", "Max efficiency: 25% to 50%."],
      example: "High-end audiophile tube amplifiers.",
      followUpQuestions: ["Why does transformer coupling improve the efficiency of a Class A amplifier?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Numerical"],
    interviewTip: "Memorize the theoretical maximum efficiencies for all classes."
  },
  {
    id: "net-dev-52",
    topicId: "core-ece",
    title: "What is a Class B Amplifier and what is Crossover Distortion?",
    answer: {
      shortAnswer: "A Class B amplifier uses two transistors that each conduct for 180° (half a cycle). This improves efficiency but introduces crossover distortion.",
      detailedExplanation: "It operates in a push-pull configuration. Efficiency is greatly improved (up to 78.5%) because there is no standing bias current. However, because BJTs require about 0.7V to turn on, there is a dead zone where neither transistor conducts when the AC signal crosses zero, distorting the output waveform.",
      interviewExplanation: "I'd explain push-pull operation conceptually: one transistor handles the positive wave, the other the negative. Then I'd describe the 0.7V 'dead zone' that causes the jagged crossover distortion.",
      keyPoints: ["Conducts 180° per transistor.", "Push-pull configuration.", "Max efficiency: 78.5%.", "Suffers from crossover distortion."],
      example: "Basic PA system amplifiers.",
      followUpQuestions: ["How can crossover distortion be eliminated?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Crossover distortion is a guaranteed follow-up question. Lead them directly into Class AB."
  },
  {
    id: "net-dev-53",
    topicId: "core-ece",
    title: "How does a Class AB Amplifier solve the problems of Class A and Class B?",
    answer: {
      shortAnswer: "Class AB biases the transistors slightly above cutoff (conducting slightly more than 180°) to eliminate the 0.7V dead zone of Class B, preventing crossover distortion.",
      detailedExplanation: "By applying a small trickle of quiescent current using diodes or a Vbe multiplier, the transistors are always ready to conduct the moment the signal crosses zero. It compromises between the efficiency of Class B and the linearity of Class A.",
      interviewExplanation: "I would explain it as the practical 'best of both worlds'. It's highly efficient (nearly 70%) but sounds as clean as Class A because the dead-zone is pre-biased out using diodes.",
      keyPoints: ["Conducts between 180° and 360°.", "Eliminates crossover distortion.", "Compromise of efficiency and linearity."],
      example: "Almost all standard consumer audio amplifiers (home theaters, car audio).",
      followUpQuestions: ["How does a diode biasing network compensate for temperature changes in a Class AB amp?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Mention 'diode biasing' as the mechanism used to set the small quiescent current."
  },
  {
    id: "net-dev-54",
    topicId: "core-ece",
    title: "Describe a Class C Amplifier.",
    answer: {
      shortAnswer: "A Class C amplifier conducts for less than 180° of the input cycle. It is highly efficient but highly non-linear, so it is used exclusively with tuned LC circuits for RF applications.",
      detailedExplanation: "The transistor is biased heavily into cutoff. It acts like a switch, delivering brief, high-current pulses to an LC tank circuit. The tank circuit's 'flywheel effect' restores the missing parts of the sine wave. Efficiency can exceed 90%.",
      interviewExplanation: "I'd strongly emphasize that Class C cannot be used for audio. It produces severe distortion. It only works in RF because the LC tank filter removes the harmonics and restores the pure sine wave.",
      keyPoints: ["Conducts < 180°.", "Highest efficiency of analog classes (>90%).", "Used only in RF transmitters with tuned circuits."],
      example: "RF power output stage of a radio transmitter.",
      followUpQuestions: ["What is the 'flywheel effect' in an LC tank circuit?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Always pair Class C with 'Tuned LC tank' and 'RF only'."
  },
  {
    id: "net-dev-55",
    topicId: "core-ece",
    title: "What is a Class D Amplifier?",
    answer: {
      shortAnswer: "A Class D amplifier operates the transistors purely as switches (on/off) using Pulse Width Modulation (PWM), achieving efficiencies near 100%.",
      detailedExplanation: "Instead of amplifying an analog waveform linearly, the input is converted to a high-frequency PWM signal. The transistors switch fully on or fully off, dissipating virtually zero power. A low-pass LC filter at the output turns the PWM pulses back into an amplified analog audio signal.",
      interviewExplanation: "I'd explain that this is a digital approach to analog amplification. Because transistors are either fully saturated (zero voltage) or fully cut off (zero current), P = V*I is practically zero, meaning no heat sinks are needed.",
      keyPoints: ["Uses Pulse Width Modulation (PWM).", "Transistors act as pure switches.", "Efficiency approaches 100%.", "Requires an output low-pass filter."],
      example: "Smartphones and modern lightweight bass guitar amplifiers.",
      followUpQuestions: ["Why is a low-pass filter required at the output of a Class D amplifier?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "Highlight that it allows high power in very small, cool-running packages (like cell phones)."
  },
  {
    id: "net-dev-56",
    topicId: "core-ece",
    title: "How does a Zener Diode act as a voltage regulator?",
    answer: {
      shortAnswer: "A Zener diode operates in reverse breakdown mode to maintain a constant voltage across its terminals, despite changes in input voltage or load current.",
      detailedExplanation: "Connected in parallel (shunt) with the load, a series resistor limits the current. As input voltage increases, the Zener diode sinks more current to keep the voltage across it constant. If load current increases, the Zener draws less current, maintaining equilibrium.",
      interviewExplanation: "I would emphasize that the Zener must be reverse-biased and must be driven past its breakdown voltage. The series resistor is critical to prevent the Zener from drawing too much current and burning out.",
      keyPoints: ["Operates in reverse breakdown.", "Shunt regulator.", "Requires a series current-limiting resistor."],
      example: "Providing a stable 5V reference for an ADC circuit.",
      followUpQuestions: ["What happens if the load resistor in a Zener regulator is completely removed (open circuit)?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Be able to calculate the maximum and minimum Zener current for given input voltage fluctuations."
  },
  {
    id: "net-dev-57",
    topicId: "core-ece",
    title: "Explain the operation of a Series Voltage Regulator.",
    answer: {
      shortAnswer: "A series regulator places a pass transistor in series with the load. A control circuit compares the output voltage to a reference and adjusts the transistor's conduction to maintain constant output.",
      detailedExplanation: "It acts like a variable resistor. If output voltage drops, the control circuit increases base current to the pass transistor, lowering its resistance and raising the output voltage back up. It is efficient for low current but dissipates significant power as heat at high voltage drops.",
      interviewExplanation: "I'd describe it as a feedback loop. The transistor absorbs the 'extra' voltage. I would mention the LM7805 is a classic integrated series regulator.",
      keyPoints: ["Pass transistor is in series with the load.", "Uses negative feedback.", "Dissipates excess power as heat (P = Vdrop * I)."],
      example: "The ubiquitous LM7805 5V regulator IC.",
      followUpQuestions: ["Why do linear series regulators require heat sinks when driving heavy loads?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Mention the 'pass transistor' terminology. It shows familiarity with power supply design."
  },
  {
    id: "net-dev-58",
    topicId: "core-ece",
    title: "What is a Shunt Voltage Regulator?",
    answer: {
      shortAnswer: "A shunt regulator places a control element (like a transistor or Zener) in parallel with the load to divert excess current to ground.",
      detailedExplanation: "A series resistor drops the voltage. If the load draws less current, the shunt element draws more current to keep the total current through the series resistor constant, thereby holding the output voltage steady.",
      interviewExplanation: "I would contrast it with the series regulator. Shunt regulators are inherently inefficient because they draw maximum current from the source even when the load draws nothing.",
      keyPoints: ["Control element in parallel with load.", "Diverts excess current to ground.", "Low efficiency, used only for low-power applications."],
      example: "A simple Zener diode regulator.",
      followUpQuestions: ["In what specific scenario would a shunt regulator be safer than a series regulator?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Highlight that shunt regulators are inherently short-circuit safe, unlike series regulators."
  },
  {
    id: "net-dev-59",
    topicId: "core-ece",
    title: "What is an LDO (Low Drop-Out) Regulator?",
    answer: {
      shortAnswer: "An LDO is a linear series regulator designed to operate even when the input voltage is very close to the output voltage.",
      detailedExplanation: "Standard linear regulators (like LM7805) require the input to be at least 2V higher than the output. LDOs use a different pass element (usually a P-channel MOSFET or PNP BJT) that allows the 'dropout voltage' to be as low as 100mV, extending battery life.",
      interviewExplanation: "I'd explain that in battery-powered devices, as the battery drains, its voltage drops. An LDO can keep regulating 3.3V even when the battery drops to 3.4V, maximizing usable battery capacity.",
      keyPoints: ["Requires very low voltage difference between input and output.", "Uses PNP or PMOS pass element.", "Crucial for battery-powered electronics."],
      example: "Regulating a 3.3V microcontroller supply from a single 3.7V Li-ion cell.",
      followUpQuestions: ["Why are LDOs prone to instability and oscillation?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Connect LDOs directly to battery-powered IoT/mobile devices."
  },
  {
    id: "net-dev-60",
    topicId: "core-ece",
    title: "Compare Linear Regulators and Switching Regulators (SMPS).",
    answer: {
      shortAnswer: "Linear regulators are simple, low-noise, but inefficient as they dissipate excess voltage as heat. Switching regulators use high-frequency switching to achieve high efficiency, but are complex and noisy.",
      detailedExplanation: "A linear regulator acts as a variable resistor, throwing away power. A Switching Mode Power Supply (SMPS) stores energy in an inductor or capacitor and switches it to the load via PWM. SMPS can step-down (buck), step-up (boost), or invert voltage with efficiencies over 90%.",
      interviewExplanation: "I would frame this as the ultimate power supply trade-off. Choose Linear for clean, noise-free analog circuits (like audio or RF). Choose Switching for high power, battery efficiency, and when you need to step-up voltage.",
      keyPoints: ["Linear: Low noise, inefficient, step-down only.", "Switching (SMPS): High efficiency, noisy, can step-up/down/invert."],
      example: "PC power supplies are SMPS; precision audio DACs use linear regulators.",
      followUpQuestions: ["How does a Buck converter step down voltage?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Be clear that Linear regulators can NEVER step-up (boost) voltage. Only SMPS can do that."
  }
];
