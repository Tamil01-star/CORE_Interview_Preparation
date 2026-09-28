import type { Question } from '../src/types';

export const microwaveSatQuestions: Question[] = [
  // Waveguides
  {
    id: "mw-sat-1",
    topicId: "core-ece",
    title: "What is a waveguide and how does it differ from a transmission line?",
    answer: {
      shortAnswer: "A waveguide is a hollow metallic tube used to guide high-frequency electromagnetic waves, whereas transmission lines use two conductors.",
      detailedExplanation: "At microwave frequencies, conventional transmission lines suffer from high radiation and dielectric losses. A waveguide, typically rectangular or circular, solves this by confining the EM waves entirely within its hollow interior. Unlike transmission lines that support TEM (Transverse Electro-Magnetic) waves, waveguides support only TE (Transverse Electric) or TM (Transverse Magnetic) modes because a single conductor cannot support a TEM wave.",
      interviewExplanation: "I would explain that waveguides are essentially high-pass filters for electromagnetic waves. While transmission lines like coax cables use two conductors and support TEM waves from DC upwards, waveguides use a single hollow conductor, meaning they only support TE or TM modes and only operate above a specific cutoff frequency. This makes them highly efficient for microwave frequencies.",
      keyPoints: [
        "Hollow metallic tube",
        "Supports TE and TM modes, not TEM",
        "Acts as a high-pass filter with a cutoff frequency",
        "Lower losses at microwave frequencies compared to coax"
      ],
      followUpQuestions: ["Why can't waveguides support TEM modes?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Emphasize the difference in supported modes (TEM vs TE/TM) as it's a fundamental concept."
  },
  {
    id: "mw-sat-2",
    topicId: "core-ece",
    title: "Explain the concept of cutoff frequency in a waveguide.",
    answer: {
      shortAnswer: "The cutoff frequency is the minimum frequency below which a waveguide will not propagate electromagnetic waves.",
      detailedExplanation: "In a waveguide, propagation relies on the constructive interference of plane waves bouncing off the walls. Below the cutoff frequency, the wavelength is too large to 'fit' the boundary conditions of the waveguide, resulting in evanescent waves that decay exponentially rather than propagate. The waveguide effectively acts as a high-pass filter.",
      interviewExplanation: "Cutoff frequency is the frequency limit below which wave propagation stops. I usually relate it to the physical dimensions of the waveguide. For a rectangular waveguide in its dominant TE10 mode, the cutoff wavelength is exactly twice the broad dimension of the waveguide. Any signal with a lower frequency (longer wavelength) won't propagate.",
      keyPoints: [
        "Minimum frequency for propagation",
        "Determined by waveguide dimensions and mode",
        "Evanescent waves below cutoff",
        "TE10 dominant mode cutoff wavelength is 2a"
      ],
      followUpQuestions: ["How do you calculate the cutoff frequency for the TE10 mode?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Relate cutoff frequency directly to the physical dimensions 'a' and 'b' of a rectangular waveguide."
  },
  {
    id: "mw-sat-3",
    topicId: "core-ece",
    title: "What is the dominant mode in a rectangular waveguide and why is it used?",
    answer: {
      shortAnswer: "The dominant mode is TE10, which has the lowest cutoff frequency of all possible modes.",
      detailedExplanation: "The dominant mode (TE10 in rectangular waveguides) is the mode with the lowest cutoff frequency. It is defined by a half-wave electric field variation across the broad dimension 'a' and zero variation across the narrow dimension 'b'. It is preferred because it allows for single-mode operation over the widest frequency bandwidth, preventing modal dispersion.",
      interviewExplanation: "The dominant mode is TE10. It's crucial because we usually design waveguide systems to operate in a frequency band where ONLY this mode can propagate. If we operate at a higher frequency where multiple modes can exist, the signal energy splits among them, traveling at different velocities, causing signal distortion known as modal dispersion.",
      keyPoints: [
        "TE10 is dominant in rectangular waveguides",
        "Lowest cutoff frequency",
        "Enables single-mode operation",
        "Prevents modal dispersion"
      ],
      followUpQuestions: ["What happens if a waveguide operates in a multi-mode region?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Mention modal dispersion when explaining why single-mode operation is desired."
  },
  {
    id: "mw-sat-4",
    topicId: "core-ece",
    title: "What are the advantages and disadvantages of circular waveguides compared to rectangular ones?",
    answer: {
      shortAnswer: "Circular waveguides are easier to manufacture and some modes have lower attenuation, but they suffer from polarization instability.",
      detailedExplanation: "Circular waveguides support modes like TE11 (dominant) and TE01. The TE01 mode is unique because its attenuation decreases as frequency increases, making it excellent for long-distance communication. However, a major disadvantage is polarization rotation; a slight imperfection can cause the polarization of the dominant TE11 mode to rotate, which degrades signal reception.",
      interviewExplanation: "Circular waveguides offer specific advantages, particularly the TE01 mode which exhibits decreasing attenuation with increasing frequency, ideal for long runs. They are also mechanically easier to fabricate. However, their primary drawback is polarization instability. Any slight deformation in the circular cross-section can cause the polarization plane to twist, making them less reliable for polarization-sensitive applications compared to rectangular waveguides.",
      keyPoints: [
        "TE11 is dominant mode",
        "TE01 mode has decreasing attenuation with frequency",
        "Prone to polarization rotation",
        "Easier to manufacture"
      ],
      followUpQuestions: ["Which mode in circular waveguides is known for decreasing attenuation at high frequencies?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Highlight the TE01 mode property, as it's a classic trivia question."
  },
  {
    id: "mw-sat-5",
    topicId: "core-ece",
    title: "Define group velocity and phase velocity in the context of waveguides.",
    answer: {
      shortAnswer: "Phase velocity is the speed at which a constant phase point travels, while group velocity is the speed at which energy or information travels.",
      detailedExplanation: "In a waveguide, phase velocity (Vp) can exceed the speed of light (c) because it simply represents the apparent speed of the intersection of wavefronts with the waveguide walls. Group velocity (Vg) represents the actual speed of energy propagation down the guide, and is always less than c. Their product relates to the speed of light squared: Vp * Vg = c^2 (in air/vacuum filled guide).",
      interviewExplanation: "I differentiate them by saying group velocity is the physical speed of the signal's energy, which can never exceed the speed of light. Phase velocity is a geometrical effect—the speed of a phase front along the guide wall, which can exceed the speed of light, similar to how the intersection point of a closing pair of scissors can move faster than the blades themselves. The two are inversely related.",
      keyPoints: [
        "Group velocity (Vg) = speed of energy/information (Vg < c)",
        "Phase velocity (Vp) = speed of constant phase (Vp > c)",
        "Vp * Vg = c^2",
        "Phase velocity is not a physical object's speed"
      ],
      followUpQuestions: ["Why doesn't phase velocity exceeding the speed of light violate the theory of relativity?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Use the 'closing scissors' analogy or a 'wave on a beach' analogy to explain phase velocity > c."
  },
  // Klystron, Magnetron, TWT, Gunn diode
  {
    id: "mw-sat-6",
    topicId: "core-ece",
    title: "Explain the working principle of a Two-Cavity Klystron.",
    answer: {
      shortAnswer: "It works on the principle of velocity modulation, where an electron beam is velocity-modulated to create electron bunches that yield microwave energy.",
      detailedExplanation: "A two-cavity klystron uses an electron gun to produce a steady beam. This beam passes through a 'buncher' cavity where an input microwave signal alternately accelerates and retards the electrons (velocity modulation). As they travel down a drift space, the faster electrons catch up with the slower ones, forming bunches (density modulation). These bunches pass through a 'catcher' cavity at the right phase, transferring their kinetic energy to the cavity and amplifying the microwave signal.",
      interviewExplanation: "A klystron amplifier turns a continuous electron beam into pulses to amplify a signal. The first cavity velocity-modulates the beam—speeding up some electrons and slowing others. In the drift tube, this turns into density modulation as electrons bunch together. When these bunches hit the second cavity, they induce a much stronger microwave signal, transferring DC kinetic energy into RF energy.",
      keyPoints: [
        "Velocity modulation converts to density modulation",
        "Buncher cavity and catcher cavity",
        "Drift space allows electron bunching",
        "Converts DC beam energy to RF energy"
      ],
      followUpQuestions: ["What is the difference between a two-cavity klystron and a reflex klystron?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Clearly distinguish between velocity modulation (buncher) and density modulation (drift space)."
  },
  {
    id: "mw-sat-7",
    topicId: "core-ece",
    title: "What is a Reflex Klystron and where is it used?",
    answer: {
      shortAnswer: "A reflex klystron is a single-cavity microwave oscillator that uses a repeller electrode to bounce the electron beam back through the cavity to create oscillations.",
      detailedExplanation: "Instead of a second cavity, a reflex klystron uses a negative repeller electrode. The electron beam passes through the single cavity, gets velocity-modulated, travels towards the repeller, and is pushed back. The repeller voltage is tuned so that the electrons bunch and return to the cavity in phase to deliver energy, sustaining oscillations.",
      interviewExplanation: "The reflex klystron is basically a klystron folded in half. It uses one cavity for both bunching and catching. The electron beam goes through, gets velocity-modulated, and then a negative repeller plate pushes the beam back. The bunching happens during this round trip. It's primarily used as a low-power microwave oscillator, historically used as local oscillators in radar receivers.",
      keyPoints: [
        "Single-cavity oscillator",
        "Uses a repeller electrode",
        "Velocity modulation during forward trip, bunching during return",
        "Low-power microwave oscillator"
      ],
      followUpQuestions: ["How does changing the repeller voltage affect the output?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mention that it is an oscillator, not an amplifier, which differentiates it from the multi-cavity klystron."
  },
  {
    id: "mw-sat-8",
    topicId: "core-ece",
    title: "How does a Magnetron generate microwave power?",
    answer: {
      shortAnswer: "A magnetron generates microwaves using crossed electric and magnetic fields to create a swirling spoke-wheel of electrons that interact with resonant cavities.",
      detailedExplanation: "The magnetron is a high-power oscillator. A central cathode is surrounded by an anode block with multiple resonant cavities. A DC electric field pulls electrons outward, while a strong axial magnetic field deflects them into a circular path (crossed fields). The electrons form rotating spokes (space charge wheel). As these spokes sweep past the cavity openings, they induce high-frequency oscillations.",
      interviewExplanation: "A magnetron uses crossed electric and magnetic fields. The electric field pulls electrons from the cathode to the anode, but the magnetic field curves their path. This interaction creates a rotating wheel of bunched electrons. As these electron bunches pass by the slots of the resonant cavities in the anode, they excite the cavities to oscillate at microwave frequencies, producing very high power output.",
      keyPoints: [
        "Crossed electric and magnetic fields",
        "High-power oscillator (used in microwaves and radar)",
        "Space-charge wheel (electron spokes)",
        "Resonant cavities in the anode block"
      ],
      followUpQuestions: ["What is the purpose of strapping in a magnetron?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Use the term 'crossed fields' as it's the fundamental operating principle."
  },
  {
    id: "mw-sat-9",
    topicId: "core-ece",
    title: "What is the primary advantage of a Traveling Wave Tube (TWT) over a Klystron?",
    answer: {
      shortAnswer: "The primary advantage of a TWT is its extremely wide bandwidth compared to the narrow bandwidth of a klystron.",
      detailedExplanation: "While klystrons use discrete resonant cavities that limit bandwidth, a TWT uses a slow-wave structure, usually a helix. The microwave signal travels along the helix, and an electron beam fires down the center. Because the helix slows the RF wave's axial velocity to match the electron beam speed, continuous interaction occurs over the entire length, providing amplification over a very broad frequency range.",
      interviewExplanation: "If you need wide bandwidth, you use a TWT. Klystrons rely on resonant cavities, which inherently have high Q and narrow bandwidth. A TWT replaces cavities with a continuous slow-wave structure like a helix wire. The signal travels along the wire, and its forward velocity matches the electron beam down the center. This continuous, non-resonant interaction allows TWTs to amplify signals over multiple octaves of bandwidth.",
      keyPoints: [
        "Broadband amplification",
        "Uses a slow-wave structure (helix)",
        "Continuous interaction (non-resonant)",
        "Used in satellite transponders"
      ],
      followUpQuestions: ["Why is a slow-wave structure necessary in a TWT?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always contrast the 'continuous interaction' of a TWT with the 'discrete resonant' interaction of a klystron."
  },
  {
    id: "mw-sat-10",
    topicId: "core-ece",
    title: "Explain the transferred electron effect in a Gunn Diode.",
    answer: {
      shortAnswer: "The Gunn effect involves electrons moving from a high-mobility, low-energy valley to a low-mobility, high-energy valley in the conduction band, causing negative differential resistance.",
      detailedExplanation: "A Gunn diode is a solid-state bulk semiconductor (typically GaAs or InP), not a p-n junction. When the applied voltage exceeds a critical threshold, electrons transfer from the central valley of the conduction band (where they have high mobility and low mass) to a satellite valley (where they have low mobility and high effective mass). This decrease in mobility causes current to drop as voltage increases, creating negative differential resistance, which leads to microwave oscillations.",
      interviewExplanation: "A Gunn diode isn't actually a traditional diode; it has no p-n junction. It relies on the properties of N-type Gallium Arsenide. As you increase the voltage across it, electrons get excited and jump into a different energy band 'valley' where they become effectively heavier and slower. So, increasing voltage actually decreases the current. This negative resistance property is what allows the device to act as an oscillator at microwave frequencies.",
      keyPoints: [
        "Bulk semiconductor device, no p-n junction",
        "Two-valley conduction band model",
        "Negative differential resistance (NDR)",
        "Used as low-power solid-state microwave oscillators"
      ],
      followUpQuestions: ["Why can't Silicon or Germanium be used to make a Gunn diode?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Emphasize that it lacks a p-n junction and operates on bulk properties."
  },
  // Smith Chart
  {
    id: "mw-sat-11",
    topicId: "core-ece",
    title: "What is a Smith Chart and what is its primary use?",
    answer: {
      shortAnswer: "A Smith Chart is a circular graphical calculator used for solving high-frequency transmission line problems, primarily impedance matching.",
      detailedExplanation: "The Smith Chart maps the complex reflection coefficient onto the complex normalized impedance (or admittance) plane. It consists of circles of constant resistance and arcs of constant reactance. It allows engineers to visually determine parameters like VSWR, reflection coefficient, input impedance, and design matching networks without complex mathematical calculations.",
      interviewExplanation: "The Smith Chart is essentially a visual tool for RF engineers. Instead of doing heavy complex algebra to calculate transmission line parameters, you plot normalized impedances on this chart. It maps the complex reflection coefficient in a unit circle. Its most common use is designing impedance matching networks—figuring out the exact length of a transmission line or the value of series/shunt components needed to match a load to a source.",
      keyPoints: [
        "Graphical calculator for RF",
        "Plots normalized impedance/admittance",
        "Maps complex reflection coefficient",
        "Simplifies impedance matching and VSWR calculations"
      ],
      followUpQuestions: ["What does the center of the Smith Chart represent?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Mention 'normalized impedance', as this is a key step in using the chart."
  },
  {
    id: "mw-sat-12",
    topicId: "core-ece",
    title: "What do the constant resistance circles and constant reactance arcs represent on a Smith Chart?",
    answer: {
      shortAnswer: "Constant resistance circles represent points with the same real part of impedance, while reactance arcs represent points with the same imaginary part.",
      detailedExplanation: "On a Smith Chart, the horizontal axis is pure resistance. The circles tangent to the right-hand side of the chart are loci of constant normalized resistance (r). The arcs radiating from the right-hand side are loci of constant normalized reactance (x), with the upper half being inductive (+jx) and the lower half being capacitive (-jx).",
      interviewExplanation: "If you break down the Smith Chart, it's made of two families of curves. The full circles all touch the extreme right edge; these are the constant resistance circles. As you move left, resistance decreases. The curved arcs that fan out from the right edge are constant reactance lines. The top half is inductive, the bottom half is capacitive. Any impedance Z = R + jX is just the intersection of the R circle and the X arc.",
      keyPoints: [
        "Horizontal axis: pure resistance",
        "Upper half: Inductive (+jx)",
        "Lower half: Capacitive (-jx)",
        "Rightmost point: infinite impedance (open circuit)"
      ],
      followUpQuestions: ["Where is the short circuit point located on the Smith Chart?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Be able to quickly identify the locations of short circuit (left), open circuit (right), and matched load (center)."
  },
  {
    id: "mw-sat-13",
    topicId: "core-ece",
    title: "How do you find the Voltage Standing Wave Ratio (VSWR) using a Smith Chart?",
    answer: {
      shortAnswer: "Plot the normalized load impedance, draw a circle through this point centered on the chart, and read the VSWR where the circle intersects the positive real axis.",
      detailedExplanation: "A circle drawn with its center at the origin (center of the chart) and passing through the normalized load impedance point represents a constant VSWR circle. Because a lossless transmission line only rotates the phase of the reflection coefficient, moving along the line corresponds to moving around this circle. The VSWR value is read directly at the intersection of this circle with the right horizontal axis (where resistance > 1).",
      interviewExplanation: "Finding VSWR is very visual. First, plot your normalized load impedance. Then, take a compass, place the point at the exact center of the chart, and draw a circle passing through your load point. This is the constant VSWR circle. Look at where this circle crosses the right side of the horizontal center line. The resistance value at that intersection point is exactly equal to the VSWR.",
      keyPoints: [
        "Plot normalized impedance",
        "Draw a circle centered at origin",
        "Read intersection on the right horizontal axis",
        "Constant VSWR circle represents moving along a lossless line"
      ],
      followUpQuestions: ["What is the relationship between reflection coefficient magnitude and the radius of the VSWR circle?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Explain the geometric action—drawing a circle and finding the intersection."
  },
  {
    id: "mw-sat-14",
    topicId: "core-ece",
    title: "Explain how single stub matching is performed using a Smith Chart.",
    answer: {
      shortAnswer: "Single stub matching uses an open or shorted length of transmission line (stub) attached in parallel to cancel out the load's reactive component.",
      detailedExplanation: "To match a load to Z0, you move along the transmission line (towards generator on the Smith Chart) until the real part of the admittance equals 1 (Y = 1 + jB). You then attach a parallel stub that provides an equal and opposite susceptance (-jB). The stub, placed at that specific distance, cancels the imaginary part, resulting in a perfectly matched admittance of Y = 1 + j0.",
      interviewExplanation: "For single stub matching, we usually work in admittance instead of impedance because we are adding components in parallel. On the chart, we move from the load toward the generator until we intersect the '1 + jB' circle. At this point, the real part is perfectly matched. We then design a shorted or open stub that provides an admittance of '-jB'. Placing this stub at that location cancels the reactance, putting us right at the center of the Smith chart.",
      keyPoints: [
        "Work in admittance for parallel stubs",
        "Move towards generator to intersect the g=1 circle",
        "Stub provides conjugate susceptance (-jB)",
        "Short-circuited stubs are preferred to avoid radiation"
      ],
      followUpQuestions: ["Why are short-circuited stubs generally preferred over open-circuited stubs?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "Explicitly state the switch from impedance to admittance when dealing with parallel (shunt) stubs."
  },
  // S-Parameters
  {
    id: "mw-sat-15",
    topicId: "core-ece",
    title: "What are S-parameters and why are they used at microwave frequencies instead of Z, Y, or H parameters?",
    answer: {
      shortAnswer: "Scattering (S) parameters describe electrical behavior in terms of incident and reflected power waves, which are measurable at microwave frequencies unlike total voltage and current.",
      detailedExplanation: "Traditional Z, Y, and H parameters require creating ideal open and short circuits, which is practically impossible at microwave frequencies due to parasitic capacitance and inductance, and can cause active devices to oscillate. S-parameters, however, are measured under matched-load conditions (usually 50 ohms). They relate the voltage waves incident on the ports to those reflected or transmitted, avoiding the need for pure opens or shorts.",
      interviewExplanation: "At low frequencies, we use Z or Y parameters, which require strict open or short circuits. At microwave frequencies, a true 'open' acts like a capacitor and a 'short' acts like an inductor. Plus, shorting a high-frequency amplifier might destroy it or cause oscillations. S-parameters solve this by using matched terminations—usually 50 ohms. Instead of voltages and currents, we measure how much RF wave energy is reflected back or transmitted through.",
      keyPoints: [
        "S-parameters = Scattering parameters",
        "Based on incident and reflected wave amplitudes",
        "Measured with matched terminations (no opens/shorts)",
        "Prevents oscillation in active devices during testing"
      ],
      followUpQuestions: ["Can you convert S-parameters back to Z-parameters?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Focus on the physical impossibility of perfect opens/shorts at high frequencies as the main justification."
  },
  {
    id: "mw-sat-16",
    topicId: "core-ece",
    title: "Explain the meaning of S11, S21, S12, and S22 in a two-port network.",
    answer: {
      shortAnswer: "S11 is input return loss, S21 is forward gain, S12 is reverse isolation, and S22 is output return loss.",
      detailedExplanation: "S11 is the input reflection coefficient (reflected at port 1 / incident at port 1) when port 2 is terminated in matched load. S21 is the forward transmission coefficient (transmitted to port 2 / incident at port 1). S12 is the reverse transmission coefficient, and S22 is the output reflection coefficient. S11 and S22 measure impedance match, while S21 and S12 measure gain/loss and isolation.",
      interviewExplanation: "In a 2-port network like an amplifier, S11 tells you how much signal bounces back from the input—it's your input reflection or return loss. S21 is your forward gain—how much signal makes it from input to output. S22 is the reflection at the output port. S12 is reverse isolation, showing how much signal leaks backward from the output to the input. We measure all these assuming the opposite port is perfectly matched to 50 ohms.",
      keyPoints: [
        "S11 = Input reflection coefficient",
        "S21 = Forward transmission coefficient (Gain)",
        "S12 = Reverse transmission coefficient (Isolation)",
        "S22 = Output reflection coefficient"
      ],
      followUpQuestions: ["What does an S11 of 0 (linear) or -∞ dB mean physically?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Always specify the condition 'when all other ports are terminated in a matched load'."
  },
  {
    id: "mw-sat-17",
    topicId: "core-ece",
    title: "How do you identify a reciprocal and a lossless network from its S-parameter matrix?",
    answer: {
      shortAnswer: "A network is reciprocal if its S-matrix is symmetric (Sij = Sji). It is lossless if its S-matrix is unitary.",
      detailedExplanation: "For a reciprocal network (containing only passive, isotropic materials), transmission from port i to j is equal to transmission from j to i, so the matrix equals its transpose (S = S^T, meaning S12 = S21). For a lossless network, no real power is dissipated; this is mathematically represented by a unitary matrix (S^H * S = I), meaning the sum of the magnitude squared of any column or row equals 1 (e.g., |S11|^2 + |S21|^2 = 1).",
      interviewExplanation: "We can read network properties right off the S-matrix. If it's a passive component like a standard filter or cable, it's reciprocal, meaning it behaves the same in both directions. In math terms, the matrix is symmetric, S21 equals S12. If the component is completely lossless, meaning no energy is dissipated as heat, the S-matrix is unitary. Practically, this means all the power going in is fully accounted for by what reflects back (|S11|^2) plus what passes through (|S21|^2), adding up to 1.",
      keyPoints: [
        "Reciprocal: Symmetric matrix (Sij = Sji)",
        "Lossless: Unitary matrix (S^H * S = I)",
        "Passive components are usually reciprocal",
        "|S11|^2 + |S21|^2 = 1 for a lossless 2-port"
      ],
      followUpQuestions: ["Give an example of a non-reciprocal microwave component."]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Memorize the unitary condition for lossless networks (|S11|^2 + |S21|^2 = 1), it often comes up in numerical problems."
  },
  {
    id: "mw-sat-18",
    topicId: "core-ece",
    title: "What instrument is used to measure S-parameters and what is its basic architecture?",
    answer: {
      shortAnswer: "A Vector Network Analyzer (VNA) is used to measure S-parameters, containing an RF source, directional couplers, and receivers to measure magnitude and phase.",
      detailedExplanation: "A VNA measures both magnitude and phase (vector) of scattering parameters. It consists of a swept RF source, directional couplers (or bridges) to separate incident, reflected, and transmitted waves, and multiple tuned receivers to measure these waves simultaneously. It requires meticulous calibration (e.g., Short-Open-Load-Thru) to remove systematic errors from cables and connectors.",
      interviewExplanation: "S-parameters are measured using a Vector Network Analyzer, or VNA. The VNA generates a known RF signal, sends it down a cable, and uses internal directional couplers to split off a sample of the incident wave and the wave reflecting back. By comparing the magnitude and phase of the reflected or transmitted waves to the incident wave, it calculates the S-parameters. The key word is 'Vector'—it measures phase, not just power.",
      keyPoints: [
        "Vector Network Analyzer (VNA)",
        "Measures magnitude AND phase",
        "Uses directional couplers to separate incident/reflected waves",
        "Requires SOLT calibration"
      ],
      followUpQuestions: ["Why is calibration so important when using a VNA?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "Highlight the difference between a VNA (measures phase/vector) and a Spectrum Analyzer (measures only magnitude/scalar)."
  },
  // Satellite Orbits
  {
    id: "mw-sat-19",
    topicId: "core-ece",
    title: "What is a Geostationary Earth Orbit (GEO) and what are its advantages?",
    answer: {
      shortAnswer: "GEO is a circular orbit ~35,786 km above the equator where a satellite matches Earth's rotation, appearing stationary in the sky.",
      detailedExplanation: "A geostationary orbit occurs exactly over the equator at an altitude of approximately 35,786 km. At this altitude, the satellite's orbital period matches the Earth's rotational period (23 hrs 56 mins). The primary advantage is that earth station antennas do not need to track the satellite; they can be fixed in one position. Three GEO satellites can provide near-global coverage (excluding the poles).",
      interviewExplanation: "GEO is the classic satellite orbit for TV broadcasting and weather. Because it orbits at the same angular velocity as the Earth rotates, it appears completely fixed in the sky to an observer on the ground. This means you can bolt a dish to your roof, point it once, and forget it. You don't need expensive tracking antennas. However, the high altitude causes a noticeable delay in communication.",
      keyPoints: [
        "Altitude: ~35,786 km",
        "0 degree inclination (equatorial)",
        "Appears stationary from Earth",
        "Fixed earth station antennas"
      ],
      followUpQuestions: ["What is the difference between Geostationary and Geosynchronous orbits?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Frequently Asked"],
    interviewTip: "Distinguish between geostationary (equatorial, zero inclination) and geosynchronous (any inclination, forms figure-8 ground track)."
  },
  {
    id: "mw-sat-20",
    topicId: "core-ece",
    title: "Compare Low Earth Orbit (LEO) and Medium Earth Orbit (MEO) for satellite communications.",
    answer: {
      shortAnswer: "LEO has low latency but requires many satellites for coverage, while MEO provides a balance of fewer satellites and moderate latency.",
      detailedExplanation: "LEO satellites orbit between 500-2000 km, resulting in very low propagation delay (latency) and lower required transmission power, ideal for real-time applications like satellite internet (e.g., Starlink). However, their footprint is small, requiring a massive constellation for continuous coverage. MEO satellites orbit between 5,000-20,000 km (e.g., GPS). They offer a compromise: larger footprint requiring fewer satellites than LEO, but higher latency and power requirements.",
      interviewExplanation: "LEO is all about speed and low latency, which is why modern broadband systems like Starlink use it. Because they are close to Earth, you need hundreds or thousands of them to ensure one is always overhead. They move fast across the sky, requiring complex tracking and handoffs. MEO is higher up, mostly used for navigation systems like GPS. It provides a good balance: you need a couple of dozen satellites to cover the earth, and the latency is acceptable.",
      keyPoints: [
        "LEO: 500-2000 km, low latency, requires large constellations",
        "MEO: 5000-20000 km, medium latency, used for GPS",
        "LEO requires complex handoffs between satellites",
        "Path loss is much lower in LEO than MEO/GEO"
      ],
      followUpQuestions: ["Why are LEO constellations challenging to manage for continuous communication?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Use real-world examples: Starlink for LEO, GPS for MEO, DirecTV for GEO."
  },
  {
    id: "mw-sat-21",
    topicId: "core-ece",
    title: "What is orbital perturbation and what causes it?",
    answer: {
      shortAnswer: "Orbital perturbation refers to changes in a satellite's designed orbit caused by external forces other than the idealized central gravitational pull of Earth.",
      detailedExplanation: "In an ideal two-body problem, orbits are perfect ellipses. However, real orbits degrade over time. The primary causes are the Earth's oblate shape (equatorial bulge), gravitational pulls from the Moon and Sun, and atmospheric drag (especially for LEO). Solar radiation pressure also plays a minor role. Satellites use station-keeping thrusters to correct these perturbations and maintain their assigned orbital slot.",
      interviewExplanation: "Satellites don't stay in their exact orbits naturally. They suffer from perturbations. The Earth isn't a perfect sphere; it bulges at the equator, which pulls satellites slightly off course. The gravity of the Moon and Sun also tug at them. For LEO satellites, the biggest issue is atmospheric drag, which slowly decays their orbit until they re-enter the atmosphere. Because of this, satellites must carry fuel for 'station-keeping' maneuvers to correct their course.",
      keyPoints: [
        "Deviation from ideal orbit",
        "Causes: Earth's oblateness, Moon/Sun gravity",
        "Atmospheric drag affects LEO",
        "Requires fuel for station-keeping"
      ],
      followUpQuestions: ["How does the required station-keeping fuel impact the lifespan of a satellite?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Mention 'station-keeping' as the engineering solution to orbital perturbation."
  },
  {
    id: "mw-sat-22",
    topicId: "core-ece",
    title: "Explain the concept of satellite footprint and coverage angle.",
    answer: {
      shortAnswer: "A footprint is the geographical area on Earth illuminated by the satellite's antenna, determined by the coverage angle and orbit altitude.",
      detailedExplanation: "The coverage angle is a measure of the portion of the Earth visible from the satellite. The footprint is the specific area on the Earth's surface where the satellite signal can be received with adequate power. Antenna beams can be shaped (global, regional, or spot beams). Spot beams concentrate power over a small area, allowing for frequency reuse in different geographical areas.",
      interviewExplanation: "A satellite's footprint is simply its coverage area on the ground—like the beam of a flashlight hitting the floor. The size of this footprint depends on how high the satellite is and the design of its antenna (the coverage angle). Modern satellites often use 'spot beams' which act like laser pointers, focusing high power on specific cities rather than spreading weak power over an entire continent. This allows them to reuse the same frequencies in different cities.",
      keyPoints: [
        "Footprint = area of coverage on Earth",
        "Depends on altitude and antenna beamwidth",
        "Global, regional, and spot beams",
        "Spot beams allow frequency reuse"
      ],
      followUpQuestions: ["What is the advantage of using multiple spot beams over one global beam?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Connect the concept of spot beams to frequency reuse, as it shows advanced understanding of satellite capacity."
  },
  // Link Budget
  {
    id: "mw-sat-23",
    topicId: "core-ece",
    title: "What is an RF Link Budget and what are its main components?",
    answer: {
      shortAnswer: "A link budget is an accounting of all power gains and losses in a communication system to ensure the received signal is strong enough for demodulation.",
      detailedExplanation: "A link budget equation calculates the received power (Pr) based on transmitted power (Pt). The basic formula in dB is: Pr = Pt + Gt + Gr - Ls - Lo, where Gt and Gr are transmit and receive antenna gains, Ls is free-space path loss, and Lo represents other losses (cables, atmospheric, rain fade). The goal is to ensure the Carrier-to-Noise ratio (C/N) exceeds the receiver's required threshold with a safe margin.",
      interviewExplanation: "Think of a link budget like a financial balance sheet. You start with the power generated by your transmitter. You add the 'income' which is the gain from your transmitting and receiving antennas. Then you subtract all the 'expenses'—the biggest being free-space path loss as the wave spreads out, plus cable losses, and atmospheric absorption. The final 'profit' is your received power, which must be higher than your receiver's minimum sensitivity threshold.",
      keyPoints: [
        "Calculates received power",
        "Pr = Pt + Gt + Gr - PathLoss - SystemLosses",
        "Ensures adequate Carrier-to-Noise (C/N) ratio",
        "Includes link margin for reliability"
      ],
      followUpQuestions: ["What is Free Space Path Loss (FSPL) and what two variables does it depend on?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Practical"],
    interviewTip: "Always mention 'Link Margin' - the buffer built into the budget to account for unpredictable fading."
  },
  {
    id: "mw-sat-24",
    topicId: "core-ece",
    title: "What is EIRP in satellite communications?",
    answer: {
      shortAnswer: "EIRP stands for Effective Isotropic Radiated Power. It is the apparent power transmitted towards the receiver, combining transmitter power and antenna gain.",
      detailedExplanation: "EIRP is the product of the transmitter power (Pt) and the antenna gain (Gt) relative to an isotropic radiator. In decibels, EIRP (dBW) = Pt (dBW) + Gt (dBi) - Line Losses (dB). It represents the power that a theoretical isotropic (omnidirectional) antenna would need to radiate to achieve the same signal strength at the receiver as the actual directional antenna.",
      interviewExplanation: "EIRP is a very practical metric. If a satellite has a 10-Watt transmitter and a dish antenna with a gain of 1000 (30 dB), the EIRP is 10,000 Watts. To the receiver on Earth, it looks as if a 10,000-Watt omnidirectional lightbulb is broadcasting. It's the most straightforward way to express the actual 'punch' or strength of the signal leaving the satellite towards the target.",
      keyPoints: [
        "Effective Isotropic Radiated Power",
        "EIRP = Transmitter Power * Antenna Gain",
        "EIRP(dB) = Pt(dB) + Gt(dB) - Losses",
        "Describes actual transmitted signal strength in the main beam"
      ],
      followUpQuestions: ["If you double the transmitter power, by how many dB does the EIRP increase?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Be ready to do a quick mental calculation of EIRP if given Pt in Watts and Gt in dBi."
  },
  {
    id: "mw-sat-25",
    topicId: "core-ece",
    title: "Explain the Figure of Merit (G/T) of a satellite receiver.",
    answer: {
      shortAnswer: "G/T is the ratio of the receiving antenna gain to the system noise temperature, measuring the receiver's sensitivity.",
      detailedExplanation: "The Figure of Merit (G/T), measured in dB/K, quantifies a receiver's performance. 'G' is the receive antenna gain, and 'T' is the equivalent system noise temperature (which includes antenna noise and receiver electronics noise). A higher G/T means a better receiver, achieved either by increasing antenna size (higher G) or using Low Noise Amplifiers (lower T).",
      interviewExplanation: "Just as EIRP defines the transmitter's quality, G/T defines the receiver's quality. It's Gain over System Noise Temperature. You want high gain to capture as much signal as possible, and low noise temperature to minimize the static that drowns out your signal. So, to improve a ground station, you can either build a bigger dish to increase G, or submerge your front-end amplifier in liquid nitrogen to decrease T. Both improve your G/T.",
      keyPoints: [
        "Receiver Figure of Merit",
        "G = Antenna Gain, T = System Noise Temperature",
        "Units: dB/K (dB per Kelvin)",
        "Higher G/T means better sensitivity"
      ],
      followUpQuestions: ["What contributes to the system noise temperature 'T'?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Link EIRP (Tx quality) and G/T (Rx quality) together as the two most critical parameters in a link budget."
  },
  {
    id: "mw-sat-26",
    topicId: "core-ece",
    title: "How does rain attenuation affect a satellite link budget, and how is it mitigated?",
    answer: {
      shortAnswer: "Rain absorbs and scatters microwave signals, causing severe signal degradation, especially at frequencies above 10 GHz. It is mitigated by adding a rain margin to the link budget.",
      detailedExplanation: "Rain fade is primarily caused by absorption (water droplets absorbing RF energy) and scattering. It becomes highly significant in Ku-band (12-18 GHz) and extremely severe in Ka-band (26-40 GHz), where droplet sizes approach the signal wavelength. To mitigate this, engineers build in a 'Link Margin'—extra transmitter power or antenna gain—so the signal stays above the threshold even during heavy rain. Adaptive power control or adaptive coding and modulation (ACM) can also be used dynamically.",
      interviewExplanation: "When transmitting at Ku or Ka band, rain is your worst enemy. The size of raindrops is similar to the wavelength of the RF signal, causing them to absorb and scatter the energy. We handle this in the link budget by calculating statistical weather models for the region and adding a 'fade margin'. If the link needs 10 dB to work, we might design it for 15 dB so it can survive a rainstorm. Modern systems also use Adaptive Modulation—dropping to a slower, more robust data rate when it starts raining.",
      keyPoints: [
        "Severe above 10 GHz (Ku, Ka bands)",
        "Causes: Absorption and scattering by raindrops",
        "Mitigation 1: Link margin (extra power)",
        "Mitigation 2: Adaptive Coding and Modulation (ACM)"
      ],
      followUpQuestions: ["Why are C-band satellite systems less affected by rain fade?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Mention Adaptive Coding and Modulation (ACM) as a modern dynamic solution to rain fade."
  },
  // Transponders, VSAT
  {
    id: "mw-sat-27",
    topicId: "core-ece",
    title: "What is a Satellite Transponder?",
    answer: {
      shortAnswer: "A transponder is a transceiver device on a satellite that receives a signal, amplifies it, translates its frequency, and transmits it back to Earth.",
      detailedExplanation: "The transponder is the payload of a communication satellite. Its primary functions are amplification and frequency translation. It receives a weak uplink signal, filters it, down-converts it to a lower downlink frequency (to prevent interference between transmission and reception), heavily amplifies it (often using a TWT or Solid State Power Amplifier), and routes it to the transmitting antenna. A typical communications satellite has dozens of transponders, each handling a specific frequency channel.",
      interviewExplanation: "A transponder is essentially a bent-pipe repeater in space. When it receives a signal from Earth, that signal is incredibly weak. The transponder first filters out noise. Then—crucially—it translates the frequency. For example, in C-band, it receives at 6 GHz and translates it down to 4 GHz. If it transmitted at the same frequency, its powerful output would deafen its own receiver. Finally, it amplifies the signal using a high-power amplifier and sends it back down.",
      keyPoints: [
        "Acts as a repeater (bent-pipe)",
        "Performs frequency translation (Uplink to Downlink)",
        "Provides amplification (LNA at input, HPA at output)",
        "Satellites carry multiple transponders for different channels"
      ],
      followUpQuestions: ["Why is the downlink frequency typically lower than the uplink frequency?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Explain why frequency translation is necessary (isolation between the high-power transmitter and sensitive receiver)."
  },
  {
    id: "mw-sat-28",
    topicId: "core-ece",
    title: "Explain the difference between Bent-pipe (Transparent) and Regenerative Transponders.",
    answer: {
      shortAnswer: "A bent-pipe transponder simply amplifies and translates the frequency of the analog signal, while a regenerative transponder demodulates the digital signal, corrects errors, and remodulates it.",
      detailedExplanation: "A transparent or 'bent-pipe' transponder handles signals at the analog RF level. It amplifies whatever it receives, including uplink noise. A regenerative transponder (On-Board Processing) actually demodulates the signal to baseband bits. It can apply Forward Error Correction (FEC) to remove noise, and route data packets between different beams, before remodulating and transmitting a clean signal.",
      interviewExplanation: "Traditional satellites use bent-pipe transponders. They act like a mirror—whatever analog signal bounces off them, noise and all, is amplified and sent down. The noise from the uplink gets added to the downlink. Regenerative transponders are smarter. They act like a router. They demodulate the signal back to 1s and 0s, strip away the uplink noise, correct errors, and generate a brand-new, clean signal for the downlink. This completely isolates the uplink noise from the downlink.",
      keyPoints: [
        "Bent-pipe: Analog amplify and forward",
        "Bent-pipe: Uplink noise is amplified",
        "Regenerative: Demodulate, process, remodulate",
        "Regenerative: Removes uplink noise, allows routing"
      ],
      followUpQuestions: ["Which type of transponder introduces more latency and why?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Use the terms 'analog repeater' vs 'digital router' to draw a clear analogy."
  },
  {
    id: "mw-sat-29",
    topicId: "core-ece",
    title: "What is VSAT and what are its typical applications?",
    answer: {
      shortAnswer: "VSAT stands for Very Small Aperture Terminal, which is a two-way satellite ground station with a small dish antenna used for private networks.",
      detailedExplanation: "A VSAT system uses small antennas (typically 0.75 to 3.8 meters). It generally operates in a star topology, where many remote VSATs communicate with a central, large hub station. Because the remote dishes are small, their EIRP and G/T are low, so the large hub does the heavy lifting in the link budget. VSATs are heavily used for enterprise networks (like retail point-of-sale data), maritime communications, and rural internet.",
      interviewExplanation: "VSAT stands for Very Small Aperture Terminal. It refers to those small satellite dishes you see on the roofs of gas stations or retail stores. They provide a dedicated, private two-way data link. Because the dishes are small and low-power, they usually communicate in a 'Star' network back to a massive, highly sensitive central Hub dish. They are perfect for providing reliable communication to remote locations where terrestrial internet or cell service doesn't exist.",
      keyPoints: [
        "Very Small Aperture Terminal (< 3.8m)",
        "Typically uses a Star network topology with a central Hub",
        "Two-way data communication",
        "Used for enterprise, rural broadband, and maritime"
      ],
      followUpQuestions: ["Why do VSAT systems typically use a star topology rather than a mesh topology?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Mention the 'Star topology' with a central hub, as this is the defining characteristic that makes small antennas viable."
  },
  {
    id: "mw-sat-30",
    topicId: "core-ece",
    title: "What Multiple Access techniques are used in satellite communications?",
    answer: {
      shortAnswer: "The primary techniques are FDMA (frequency division), TDMA (time division), and CDMA (code division).",
      detailedExplanation: "Multiple Access allows many earth stations to share the same transponder. FDMA assigns a specific frequency band to each user. TDMA assigns discrete time slots on the same frequency, allowing stations to take turns transmitting bursts of data. CDMA allows all users to transmit simultaneously on the same frequency by assigning unique pseudo-random spread-spectrum codes to each transmission.",
      interviewExplanation: "To share a satellite transponder, we use multiple access schemes. Think of a room full of people. FDMA is like breaking them into small groups talking at different pitches. TDMA is everyone using the same pitch but taking strict turns speaking one by one. CDMA is everyone talking at the exact same time, but each pair speaks a completely different language, so they can filter out the others as background noise.",
      keyPoints: [
        "FDMA: Separated by frequency channels",
        "TDMA: Separated by time slots (bursts)",
        "CDMA: Separated by orthogonal codes (spread spectrum)",
        "Allows transponder sharing among multiple users"
      ],
      followUpQuestions: ["What is a major disadvantage of FDMA regarding transponder power efficiency?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Frequently Asked"],
    interviewTip: "The 'room full of people talking' analogy is highly effective for explaining FDMA/TDMA/CDMA."
  },
  // Superheterodyne Receiver
  {
    id: "mw-sat-31",
    topicId: "core-ece",
    title: "Explain the block diagram of a Superheterodyne Receiver.",
    answer: {
      shortAnswer: "It converts an incoming RF signal to a fixed Intermediate Frequency (IF) using a mixer and local oscillator, allowing for efficient amplification and filtering before demodulation.",
      detailedExplanation: "The blocks are: RF Amplifier, Mixer, Local Oscillator (LO), IF Amplifier, Demodulator, and Audio/Baseband Amplifier. The incoming RF signal is mixed with the LO frequency to produce a fixed IF (e.g., 455 kHz for AM, 10.7 MHz for FM). Because the IF is fixed, the IF amplifier can be highly tuned for maximum gain and sharp selectivity. The demodulator then extracts the baseband signal.",
      interviewExplanation: "The brilliance of the superheterodyne receiver is the IF stage. Instead of trying to build a tunable amplifier that works perfectly across a whole band of RF frequencies, we shift every incoming channel to one fixed frequency, the Intermediate Frequency. We do this by mixing the RF signal with a Local Oscillator. From that point on, our main amplification and filtering happen at that single fixed IF, which is much easier to design for high gain and sharp selectivity.",
      keyPoints: [
        "Converts variable RF to fixed IF",
        "Uses a Mixer and Local Oscillator",
        "IF stage provides bulk of gain and selectivity",
        "Blocks: RF Amp -> Mixer -> IF Amp -> Demodulator"
      ],
      followUpQuestions: ["What is the relationship between the RF, LO, and IF frequencies?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Frequently Asked"],
    interviewTip: "Emphasize that translating to a FIXED IF is the core reason the superhet architecture is successful."
  },
  {
    id: "mw-sat-32",
    topicId: "core-ece",
    title: "What is an Image Frequency in a superheterodyne receiver and how is it calculated?",
    answer: {
      shortAnswer: "The image frequency is an unwanted incoming signal that mixes with the local oscillator to produce the same Intermediate Frequency as the desired signal.",
      detailedExplanation: "A mixer produces the difference between the LO and RF signals. If IF = |f_LO - f_RF|, there are two RF frequencies that can produce this IF: the desired signal and the image signal. The image frequency (f_image) is located exactly 2*IF away from the desired signal. Depending on high or low side injection, f_image = f_RF + 2*IF or f_RF - 2*IF.",
      interviewExplanation: "Because a mixer only outputs the mathematical difference between two frequencies, it's ambiguous. If my IF is 1 MHz, and my LO is 10 MHz, I can tune to a 9 MHz signal (10-9=1). But an 11 MHz signal will also produce a 1 MHz difference (11-10=1). That 11 MHz signal is the 'image'. If we don't filter it out before the mixer, both the 9 MHz and 11 MHz signals will end up on top of each other in the IF stage, ruining the reception.",
      keyPoints: [
        "Unwanted signal that produces the same IF",
        "f_image = f_RF ± 2*IF",
        "Mixer cannot distinguish between desired and image",
        "Must be filtered before the mixer (in the RF stage)"
      ],
      followUpQuestions: ["How do we prevent image frequency interference?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Memorize the formula f_image = f_signal + 2*f_IF (for high-side injection) as it frequently appears in quick numerical questions."
  },
  {
    id: "mw-sat-33",
    topicId: "core-ece",
    title: "What is the trade-off in choosing the Intermediate Frequency (IF)?",
    answer: {
      shortAnswer: "A high IF provides better image rejection, while a low IF provides better selectivity and higher gain.",
      detailedExplanation: "If the IF is chosen to be high, the image frequency (which is 2*IF away) is pushed far away from the desired signal, making it easy for the RF front-end filter to reject it. However, high-frequency tuned circuits have wider bandwidths, leading to poor adjacent channel selectivity and lower gain. Conversely, a low IF makes it easy to build narrow, high-gain filters for excellent selectivity, but puts the image frequency very close to the desired signal, resulting in poor image rejection.",
      interviewExplanation: "Choosing the IF is a classic engineering trade-off. We want good image rejection, which requires a High IF so the image frequency is pushed far out of our RF filter's passband. But we also want sharp selectivity to separate adjacent channels, which is much easier to achieve at a Low IF using narrow filters. To solve this, advanced receivers use a 'Double Conversion' superheterodyne architecture, using a high IF first for image rejection, then converting to a low IF for selectivity.",
      keyPoints: [
        "High IF -> Good Image Rejection, Poor Selectivity",
        "Low IF -> Good Selectivity, Poor Image Rejection",
        "Trade-off resolved by Double Conversion superhets"
      ],
      followUpQuestions: ["Explain how a Double Conversion receiver solves this trade-off."]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Always mention 'Double Conversion' (dual IF stages) as the standard industry solution to this trade-off."
  },
  {
    id: "mw-sat-34",
    topicId: "core-ece",
    title: "Why is tracking necessary between the Local Oscillator (LO) and RF tuning circuits?",
    answer: {
      shortAnswer: "Tracking ensures that as the receiver tunes across a band, the frequency difference between the LO and the tuned RF filter always equals the fixed IF.",
      detailedExplanation: "In a superhet, the RF stage filter must be tuned to the desired signal (f_RF), and the LO must be tuned to f_LO such that f_LO - f_RF = IF. As the user changes stations, both the RF filter capacitor and the LO capacitor must change simultaneously to maintain this exact constant difference (the IF). This simultaneous tuning is called tracking.",
      interviewExplanation: "When you turn the tuning knob on an old analog radio, you aren't just turning one capacitor; you are turning a ganged capacitor that adjusts two circuits at once: the RF input filter and the Local Oscillator. They have to move perfectly in tandem—they must 'track' each other—so that the difference between them is exactly the 455 kHz intermediate frequency across the entire dial. If tracking fails, sensitivity drops.",
      keyPoints: [
        "Maintains f_LO - f_RF = fixed IF",
        "Requires ganged tuning capacitors in analog radios",
        "Tracking error reduces receiver sensitivity"
      ],
      followUpQuestions: ["What causes tracking error in practical analog receivers?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Use the term 'ganged capacitor' when discussing analog implementation of tracking."
  },
  {
    id: "mw-sat-35",
    topicId: "core-ece",
    title: "What is a Phase-Locked Loop (PLL) and how is it used in modern receivers?",
    answer: {
      shortAnswer: "A PLL is a closed-loop control system that aligns the phase and frequency of an oscillator to a reference signal. It replaces analog tuning with highly stable digital frequency synthesis.",
      detailedExplanation: "A PLL consists of a Phase Detector, Loop Filter, and a Voltage Controlled Oscillator (VCO). It compares a reference frequency (from a crystal) with a divided-down version of the VCO output. The error voltage corrects the VCO. By changing the programmable divider ratio in the feedback loop, the PLL acts as a frequency synthesizer, serving as the extremely stable Local Oscillator in modern digital tuning receivers.",
      interviewExplanation: "In modern receivers, we don't use ganged analog capacitors for the Local Oscillator. We use a Phase-Locked Loop frequency synthesizer. The PLL locks a tunable VCO to a highly stable quartz crystal reference. By simply changing a digital division ratio inside the PLL chip, we can force the VCO to step precisely through channels. This gives us digital push-button tuning, perfect stability, and zero frequency drift.",
      keyPoints: [
        "Components: Phase Detector, Loop Filter, VCO, Divider",
        "Acts as a Frequency Synthesizer",
        "Provides exact, drift-free Local Oscillator frequencies",
        "Enables digital tuning"
      ],
      followUpQuestions: ["How does changing the divide ratio (N) change the output frequency?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Clearly outline the three main blocks of a PLL: Phase Detector, Loop Filter, and VCO."
  },
  // Selectivity, Sensitivity, Image Rejection
  {
    id: "mw-sat-36",
    topicId: "core-ece",
    title: "Define receiver Sensitivity.",
    answer: {
      shortAnswer: "Sensitivity is the ability of a receiver to pick up weak signals and produce a usable output with an acceptable Signal-to-Noise Ratio (SNR).",
      detailedExplanation: "Sensitivity is primarily determined by the noise figure of the first amplifier stage (LNA) and the receiver's bandwidth. It is defined as the minimum RF signal power at the antenna input required to achieve a specified SNR or Bit Error Rate (BER) at the demodulated output. It is usually expressed in microvolts (µV) or dBm.",
      interviewExplanation: "Sensitivity is simply how well the receiver hears faint signals. If a receiver has high sensitivity, it can pick up a very weak broadcast from far away and still give you clear audio. The limiting factor is always thermal noise. The very first component the signal hits—the RF amplifier—must add as little noise as possible, because any noise added there gets amplified by all the subsequent stages.",
      keyPoints: [
        "Ability to detect weak signals",
        "Limited by thermal noise and receiver noise figure",
        "First RF stage dictates overall sensitivity (Friis formula)",
        "Measured in dBm or microvolts"
      ],
      followUpQuestions: ["How does the bandwidth of a receiver affect its sensitivity?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Mention Friis's formula for noise to show you understand that the first stage dictates sensitivity."
  },
  {
    id: "mw-sat-37",
    topicId: "core-ece",
    title: "Define receiver Selectivity.",
    answer: {
      shortAnswer: "Selectivity is the ability of a receiver to isolate a desired signal while rejecting unwanted signals in adjacent frequency channels.",
      detailedExplanation: "Selectivity is dictated by the frequency response (Q-factor and shape factor) of the filters in the receiver, primarily the IF filters. A highly selective receiver has a steep filter skirt, allowing it to tune into one station without hearing interference from a strong station operating on the very next channel.",
      interviewExplanation: "Selectivity is the receiver's ability to focus. If you tune to 100.1 MHz, you want to hear only that station, not the powerful station at 100.3 MHz bleeding over. In a superheterodyne receiver, the selectivity is almost entirely handled by the Intermediate Frequency (IF) stage. Because the IF is a fixed frequency, we can design complex, highly tuned bandpass filters (like ceramic or crystal filters) with very steep cutoffs to perfectly isolate the channel.",
      keyPoints: [
        "Ability to reject adjacent channel interference",
        "Determined by the IF stage bandpass filters",
        "Measured by the filter's Shape Factor",
        "High Q-factor implies high selectivity"
      ],
      followUpQuestions: ["What is 'Shape Factor' in the context of RF filters?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Differentiate clearly: Sensitivity is about WEAK signals (noise limited), Selectivity is about ADJACENT signals (filter limited)."
  },
  {
    id: "mw-sat-38",
    topicId: "core-ece",
    title: "What is Image Frequency Rejection Ratio (IFRR)?",
    answer: {
      shortAnswer: "IFRR is a measure of a receiver's ability to suppress the unwanted image frequency compared to the desired signal.",
      detailedExplanation: "IFRR is the ratio of the receiver gain at the desired frequency to the receiver gain at the image frequency. It is typically expressed in decibels (dB). Since the mixer treats the signal and image identically, all image rejection must occur in the RF filters BEFORE the signal reaches the mixer.",
      interviewExplanation: "The Image Rejection Ratio tells you how good your RF front-end is at blocking that unwanted mirror-image frequency before it hits the mixer. If you have an IFRR of 60 dB, it means the image frequency is attenuated by a factor of 1 million compared to your desired signal. Since the mixer itself can't tell the difference between the two, this rejection purely depends on the quality of the pre-selector filter and the choice of the IF.",
      keyPoints: [
        "Ratio of gain at signal freq to gain at image freq",
        "Expressed in dB",
        "Relies entirely on RF front-end filters",
        "Higher IF makes achieving high IFRR easier"
      ],
      followUpQuestions: ["If a receiver has poor IFRR, what architectural change would you recommend?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Reiterate that the mixer provides NO image rejection; it's all about the RF pre-selector filter."
  },
  {
    id: "mw-sat-39",
    topicId: "core-ece",
    title: "How does the Shape Factor of a filter affect selectivity?",
    answer: {
      shortAnswer: "Shape Factor indicates the steepness of a filter's roll-off; a smaller shape factor (closer to 1) means steeper skirts and better adjacent-channel selectivity.",
      detailedExplanation: "Shape Factor is defined as the ratio of a filter's bandwidth at high attenuation (usually 60 dB) to its bandwidth at low attenuation (usually 3 dB). An ideal 'brick-wall' filter has a shape factor of 1. Practical filters have higher values. A filter with a shape factor of 2 is much more selective than one with a shape factor of 5, meaning it rejects nearby frequencies much faster.",
      interviewExplanation: "When we look at a bandpass filter for a receiver, we don't just care about its 3dB bandwidth; we care about how fast it transitions from 'passing' to 'blocking'. This steepness is the Shape Factor, usually the ratio of the 60dB bandwidth to the 3dB bandwidth. The closer this ratio is to 1, the more it looks like a perfect rectangle. High selectivity requires a filter with a very sharp, low Shape Factor.",
      keyPoints: [
        "Shape Factor = BW(-60dB) / BW(-3dB)",
        "Ideal filter Shape Factor = 1",
        "Measures the steepness of filter skirts",
        "Lower shape factor = Better selectivity"
      ],
      followUpQuestions: ["What types of filters provide very low shape factors suitable for IF stages?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Define Shape Factor mathematically (60dB BW / 3dB BW) as it shows rigorous understanding."
  },
  // AGC
  {
    id: "mw-sat-40",
    topicId: "core-ece",
    title: "What is the purpose of Automatic Gain Control (AGC) in a receiver?",
    answer: {
      shortAnswer: "AGC maintains a constant audio/baseband output level despite wide variations in the received RF signal strength.",
      detailedExplanation: "As a mobile receiver moves, or due to atmospheric fading, the received RF signal strength can fluctuate wildly (by 100 dB or more). AGC prevents the receiver output from fluctuating by monitoring the demodulated signal level and feeding back a DC control voltage to the IF and RF amplifiers. If the signal gets stronger, AGC reduces the amplifier gain; if it weakens, AGC increases the gain.",
      interviewExplanation: "Without AGC, driving a car while listening to the radio would be terrible. When you get close to the tower, the audio would blast your ears, and when you drive behind a hill, it would fade to a whisper. AGC solves this. It takes a sample of the output volume, converts it to a DC voltage, and loops it back to control the gain of the early amplifier stages. It automatically turns down the gain for strong signals and turns it up for weak ones.",
      keyPoints: [
        "Maintains constant output level",
        "Compensates for fading and distance variations",
        "Feeds back a DC voltage to control RF/IF gain",
        "Increases dynamic range of the receiver"
      ],
      followUpQuestions: ["What is the difference between simple AGC and delayed AGC?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Practical"],
    interviewTip: "The 'driving a car' analogy makes the purpose of AGC immediately relatable."
  },
  {
    id: "mw-sat-41",
    topicId: "core-ece",
    title: "Explain Delayed AGC and why it is used.",
    answer: {
      shortAnswer: "Delayed AGC only applies gain reduction after the incoming signal exceeds a certain threshold, preserving the receiver's maximum sensitivity for weak signals.",
      detailedExplanation: "In simple AGC, the gain is reduced even for very weak signals, which can inadvertently lower the Signal-to-Noise Ratio (SNR). Delayed AGC introduces a delay voltage threshold. For weak signals below this threshold, the AGC is inactive, allowing the RF amplifiers to run at maximum gain. Gain reduction only kicks in when the signal is strong enough that SNR is no longer a concern.",
      interviewExplanation: "The problem with simple AGC is that it starts turning down the amplifier gain right away, even on weak signals. If a signal is already weak, lowering the gain hurts your sensitivity and Signal-to-Noise ratio. Delayed AGC fixes this. It sets a threshold. If the signal is below the threshold, the AGC stays completely off—letting the amplifiers run at 100% gain to pull the signal out of the noise. The AGC action is 'delayed' until the signal is comfortably strong.",
      keyPoints: [
        "Threshold voltage prevents gain reduction for weak signals",
        "Preserves maximum sensitivity and SNR",
        "AGC only acts on medium-to-strong signals",
        "'Delayed' refers to voltage threshold, not time"
      ],
      followUpQuestions: ["How is the 'delay' implemented in analog circuitry?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Clarify that 'Delayed' in this context means a voltage/amplitude threshold, NOT a time delay."
  },
  {
    id: "mw-sat-42",
    topicId: "core-ece",
    title: "What happens to the noise figure of an amplifier when AGC reduces its gain?",
    answer: {
      shortAnswer: "When AGC reduces an amplifier's gain, its noise figure typically degrades (increases).",
      detailedExplanation: "In active RF components, reducing the gain (e.g., by changing bias current or voltage) usually moves the device away from its optimal low-noise operating point. According to Friis's formula for cascaded stages, reducing the gain of the first stage means the noise of the subsequent stages contributes more heavily to the overall system noise figure, degrading sensitivity.",
      interviewExplanation: "This is a subtle but important point. When AGC turns down the gain of an RF front-end amplifier because a strong signal is present, the amplifier's noise figure gets worse. However, because the incoming signal is already very strong, this degradation in noise figure doesn't matter; the Signal-to-Noise ratio is already high. This is precisely why Delayed AGC is used—to keep the gain maximum (and noise figure minimum) when the signal is weak.",
      keyPoints: [
        "Gain reduction increases Noise Figure",
        "Changes amplifier bias away from optimal low-noise point",
        "Reduces first-stage masking of subsequent stage noise",
        "Acceptable because it only happens when signal is strong"
      ],
      followUpQuestions: ["Explain Friis's formula for cascaded noise figure."]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Tie this back to Delayed AGC to show a holistic understanding of receiver system design."
  },
  // Passive Components
  {
    id: "mw-sat-43",
    topicId: "core-ece",
    title: "How does a real resistor behave at high microwave frequencies compared to DC?",
    answer: {
      shortAnswer: "At high frequencies, a real resistor develops parasitic series inductance from its leads and parallel capacitance, causing it to act like a complex impedance rather than pure resistance.",
      detailedExplanation: "At DC, a resistor is ideal. At RF/microwave frequencies, parasitic elements dominate. The wire leads introduce series equivalent inductance (ESL). The physical structure (especially in wirewound types) and the pads introduce parallel parasitic capacitance. At a certain high frequency, these parasitics will resonate. Beyond this self-resonant frequency, the resistor may behave more like an inductor or capacitor.",
      interviewExplanation: "In the microwave world, there is no such thing as a pure component. A physical resistor has metal leads, which act like tiny inductors (ESL). The gap across the resistor acts like a tiny capacitor. So, the equivalent circuit is a resistor in series with an inductor, all in parallel with a capacitor. At high frequencies, this LC combination causes resonance. For RF work, we avoid wirewound resistors entirely and use Surface Mount (SMD) thick/thin film resistors to minimize these parasitics.",
      keyPoints: [
        "Real components have parasitics",
        "Leads create series inductance (ESL)",
        "Structure creates parallel capacitance",
        "Has a self-resonant frequency (SRF)"
      ],
      followUpQuestions: ["Which resistor type (wirewound, carbon, surface mount) is best for high frequencies and why?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Practical"],
    interviewTip: "Drawing the equivalent circuit of a real resistor (R in series with L, parallel with C) mentally or verbally is a strong answer."
  },
  {
    id: "mw-sat-44",
    topicId: "core-ece",
    title: "What is the Self-Resonant Frequency (SRF) of a capacitor and why is it important?",
    answer: {
      shortAnswer: "SRF is the frequency where a capacitor's parasitic series inductance resonates with its capacitance. Above this frequency, the capacitor acts like an inductor.",
      detailedExplanation: "A real capacitor has Equivalent Series Inductance (ESL) from its leads and internal structure. The SRF occurs when capacitive reactance equals inductive reactance (Xc = Xl). At this point, the impedance is at its minimum (purely resistive, ESR). Above the SRF, the inductive reactance dominates, and the component blocks high frequencies instead of passing them.",
      interviewExplanation: "If you try to use a capacitor to bypass high-frequency noise to ground, you must know its SRF. Because of internal inductance, every capacitor forms a series LC circuit. At the SRF, it provides an excellent short to ground. But if your noise frequency is higher than the SRF, the capacitor actually turns into an inductor! It will block the noise from reaching ground. To filter very high frequencies, you need small value capacitors because they typically have higher SRFs.",
      keyPoints: [
        "SRF = point where Xc = Xl",
        "Caused by Equivalent Series Inductance (ESL)",
        "Impedance is minimum at SRF",
        "Above SRF, capacitor behaves inductively"
      ],
      followUpQuestions: ["Why do engineers sometimes put a large and a small capacitor in parallel for decoupling?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Explain the parallel decoupling trick (large cap for low frequencies, small cap for high SRF) to demonstrate practical design experience."
  },
  {
    id: "mw-sat-45",
    topicId: "core-ece",
    title: "Explain the skin effect in conductors and its impact on high-frequency inductors.",
    answer: {
      shortAnswer: "Skin effect is the tendency of high-frequency AC current to flow only near the surface of a conductor, increasing its effective AC resistance and lowering the Q-factor of inductors.",
      detailedExplanation: "As frequency increases, magnetic eddy currents force the electron flow to the outer 'skin' of the wire. The skin depth decreases with higher frequency. Because the current is using less of the wire's cross-sectional area, the AC resistance increases significantly compared to the DC resistance. For an inductor, this higher resistance increases losses, which lowers its Quality Factor (Q = Xl / R).",
      interviewExplanation: "At DC, current flows evenly through the whole wire. But at microwave frequencies, the current gets pushed to the very edge of the wire—the skin. Since the center of the wire is doing nothing, the effective resistance of the wire shoots up. In an inductor, this increased resistance is bad because it wastes energy as heat. It lowers the 'Q' or Quality factor of the coil. This is why high-frequency coils are often made of silver-plated wire or hollow copper tubing.",
      keyPoints: [
        "Current crowds to conductor surface at high frequencies",
        "Increases effective AC resistance",
        "Skin depth is inversely proportional to square root of frequency",
        "Lowers inductor Q-factor"
      ],
      followUpQuestions: ["How does silver plating a copper wire help mitigate high-frequency losses?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Mentioning hollow tubing or silver plating shows practical knowledge of how to combat skin effect."
  },
  {
    id: "mw-sat-46",
    topicId: "core-ece",
    title: "What are Equivalent Series Resistance (ESR) and Equivalent Series Inductance (ESL) in capacitors?",
    answer: {
      shortAnswer: "ESR is the internal resistance representing power loss, and ESL is the parasitic inductance causing high-frequency impedance issues.",
      detailedExplanation: "ESR includes the resistance of the dielectric and the metallic plates/leads. It determines the power dissipated (heat) when ripple current flows, which is critical in power supplies. ESL is the internal inductance caused by the physical layout and leads. High ESL lowers the Self-Resonant Frequency (SRF), making the capacitor ineffective at filtering high frequencies.",
      interviewExplanation: "Real capacitors aren't perfect. ESR (Equivalent Series Resistance) is the tiny amount of resistance inside the cap. In a power supply switching high currents, this ESR causes the cap to heat up and reduces its life. ESL (Equivalent Series Inductance) comes from the physical metal leads. High ESL is terrible for RF and digital decoupling, because it stops the capacitor from delivering energy quickly to high-speed chips. For RF, we need low ESR and low ESL.",
      keyPoints: [
        "ESR causes heat dissipation and voltage ripple",
        "ESL dictates the high-frequency limit (SRF)",
        "Critical parameters in power supply and RF design",
        "Ceramic caps have very low ESR/ESL"
      ],
      followUpQuestions: ["Why are Tantalum or Ceramic capacitors preferred over Electrolytics for high-frequency decoupling?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Connect ESR to power/heat issues, and ESL to high-frequency/RF filtering issues."
  },
  {
    id: "mw-sat-47",
    topicId: "core-ece",
    title: "What do the tolerance codes (J, K, M) mean on passive components?",
    answer: {
      shortAnswer: "They represent the manufacturing tolerance: J is ±5%, K is ±10%, and M is ±20%.",
      detailedExplanation: "These alphabetic codes standardly denote the guaranteed precision of a component's value compared to its nominal rating. For example, a 100 ohm resistor with a 'J' code will measure between 95 and 105 ohms. Common codes include: F (±1%), G (±2%), J (±5%), K (±10%), M (±20%), and Z (+80% / -20%, common for bulk decoupling caps).",
      interviewExplanation: "When you read a component label, like 104K, the '104' is the value (100,000 pF) and the 'K' is the tolerance. J is 5%, K is 10%, and M is 20%. It's important for circuit design. If you are building an active filter where the cutoff frequency is critical, you need 1% (F) or 5% (J) parts. If you are just using a capacitor to decouple a power rail, a sloppy 20% (M) or even a 'Z' tolerance is perfectly fine and much cheaper.",
      keyPoints: [
        "F = ±1%",
        "J = ±5%",
        "K = ±10%",
        "M = ±20%"
      ],
      followUpQuestions: ["If you have a 104K ceramic capacitor, what is its capacitance range?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Knowing how to read standard component markings (like 104K) is a very common practical test."
  },
  // PCB Materials, Magnetic Materials
  {
    id: "mw-sat-48",
    topicId: "core-ece",
    title: "Why is standard FR4 PCB material generally unsuitable for high microwave frequencies?",
    answer: {
      shortAnswer: "FR4 has a high dielectric loss tangent (dissipation factor) and its dielectric constant varies inconsistently with frequency, leading to high signal loss and impedance mismatch.",
      detailedExplanation: "FR4 is a woven glass-reinforced epoxy. At frequencies above roughly 1-2 GHz, the epoxy absorbs RF energy, converting it to heat (high loss tangent, tan δ ≈ 0.02). Furthermore, its dielectric constant (Dk) is not strictly controlled and changes over the board's area and across frequencies, making it impossible to design transmission lines (like microstrip) with precise 50-ohm characteristic impedance.",
      interviewExplanation: "FR4 is great for digital and low-frequency stuff because it's cheap. But at microwave frequencies, it's like a sponge for RF energy. Its high loss tangent means your signal dissipates as heat. Worse, its dielectric constant isn't uniform. Since the width of a 50-ohm microstrip trace depends directly on that dielectric constant, a changing Dk means your trace impedance wobbles all over the place, causing reflections. For microwaves, you must use specialized materials like Rogers.",
      keyPoints: [
        "High Loss Tangent (tan δ)",
        "Variable Dielectric Constant (Dk)",
        "Causes high attenuation at RF",
        "Makes strict impedance control difficult"
      ],
      followUpQuestions: ["What alternative PCB materials are used for RF/Microwave circuits?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "Always bring up 'Rogers materials' or PTFE/Teflon as the industry-standard alternative to FR4."
  },
  {
    id: "mw-sat-49",
    topicId: "core-ece",
    title: "What are Dielectric Constant (Dk) and Loss Tangent (Df) in the context of PCB substrates?",
    answer: {
      shortAnswer: "Dk determines the speed of the signal and the required trace width for a given impedance. Df measures how much of the signal's electromagnetic energy is lost as heat in the substrate.",
      detailedExplanation: "The Dielectric Constant (relative permittivity, Er or Dk) affects capacitance and the velocity of propagation (V = c / sqrt(Dk)). Higher Dk shrinks trace dimensions. The Loss Tangent (Dissipation Factor, Df or tan δ) quantifies the dielectric absorption losses. A lower Df means less signal attenuation. RF materials require a tight tolerance on Dk and a very low Df.",
      interviewExplanation: "When picking an RF substrate, Dk and Df are your main specs. Dk (Dielectric Constant) tells you how much the material slows down the wave. It dictates your trace geometry; if Dk is stable, your 50-ohm trace stays 50 ohms. Df (Loss Tangent) tells you how 'leaky' the insulator is to RF energy. A high Df means the material absorbs your microwave signal and turns it into heat. For good RF boards, you need a tightly controlled Dk and the lowest Df possible.",
      keyPoints: [
        "Dk (Dielectric Constant) dictates signal speed and trace width",
        "Df (Loss Tangent) dictates signal attenuation/loss",
        "RF design requires stable Dk and low Df",
        "Loss tangent increases with frequency"
      ],
      followUpQuestions: ["How does Dk affect the physical size of a microstrip patch antenna?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Relate Dk to physical geometry (trace width) and Df to signal power loss."
  },
  {
    id: "mw-sat-50",
    topicId: "core-ece",
    title: "Explain the difference between Soft and Hard magnetic materials and their applications.",
    answer: {
      shortAnswer: "Soft magnetic materials are easy to magnetize and demagnetize (low coercivity) for use in transformers. Hard magnetic materials retain their magnetism (high coercivity) for permanent magnets.",
      detailedExplanation: "The difference lies in their hysteresis loops. Soft magnetic materials (like iron or silicon-steel) have a narrow hysteresis loop, meaning they require very little external field (low coercive force) to reverse their magnetization. This minimizes hysteresis losses, making them ideal for AC applications like transformer cores and inductors. Hard magnetic materials (like Neodymium or Alnico) have a wide, fat loop (high coercivity and retentivity), making them excellent permanent magnets used in motors and speakers.",
      interviewExplanation: "It comes down to the B-H curve, the hysteresis loop. 'Soft' magnets, like the silicon steel in a transformer core, have a very thin loop. They happily switch magnetic direction back and forth 60 times a second without wasting much energy as heat. 'Hard' magnets, like a neodymium magnet, have a very fat loop. Once you magnetize them, they stubbornly hold onto that field. You use hard materials to make permanent magnets, and soft materials to make AC cores.",
      keyPoints: [
        "Soft: Narrow hysteresis loop, low coercivity",
        "Soft use: Transformer cores, inductors (AC applications)",
        "Hard: Wide hysteresis loop, high retentivity/coercivity",
        "Hard use: Permanent magnets, motors"
      ],
      followUpQuestions: ["What causes hysteresis loss in a magnetic material?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Use the shape of the B-H hysteresis loop ('thin' vs 'fat') to explain the difference visually."
  },
  {
    id: "mw-sat-51",
    topicId: "core-ece",
    title: "What are Ferrites and why are they used in high-frequency magnetic components?",
    answer: {
      shortAnswer: "Ferrites are ceramic magnetic materials that combine high magnetic permeability with high electrical resistance, minimizing eddy current losses at high frequencies.",
      detailedExplanation: "Standard magnetic metals (like iron) conduct electricity. At high frequencies, changing magnetic fields induce massive eddy currents within the metal core, causing severe resistive heating. Ferrites (oxides of iron mixed with other metals) are ferrimagnetic ceramics. They have the magnetic properties needed to concentrate flux (high permeability), but they are electrical insulators. This near-zero conductivity prevents eddy currents, making them ideal for RF transformers, chokes, and microwave isolators.",
      interviewExplanation: "If you put a solid iron core in a high-frequency RF coil, the changing magnetic field induces eddy currents inside the iron itself. The iron acts like a short-circuited turn, getting incredibly hot and killing the Q of the coil. Ferrites solve this. They are ceramics. They act like magnets, so they boost the inductance, but they are electrical insulators. Because they don't conduct electricity, eddy currents can't form. That's why every high-frequency choke or balun uses a ferrite core.",
      keyPoints: [
        "Ceramic ferrimagnetic materials",
        "High magnetic permeability",
        "High electrical resistivity (insulators)",
        "Eliminates eddy current losses at RF"
      ],
      followUpQuestions: ["What is a ferrite bead and how is it used in EMI suppression?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "The critical phrase here is 'electrical insulator' or 'prevents eddy currents'."
  },
  {
    id: "mw-sat-52",
    topicId: "core-ece",
    title: "What is the Faraday rotation effect in microwave ferrites?",
    answer: {
      shortAnswer: "Faraday rotation is the rotation of the plane of polarization of an electromagnetic wave as it passes through a magnetized ferrite material.",
      detailedExplanation: "When a linearly polarized microwave travels through a ferrite material subjected to a static DC magnetic field in the direction of propagation, its plane of polarization rotates. Crucially, this effect is non-reciprocal. If the wave travels forward and rotates by 45 degrees clockwise, and is then reflected back, it rotates another 45 degrees clockwise, totaling 90 degrees of rotation rather than returning to 0. This property is used to build non-reciprocal devices like isolators and circulators.",
      interviewExplanation: "Faraday rotation is a magical property of ferrites under a DC magnetic field. It twists the polarization of a microwave passing through it. The amazing part is that it's a one-way street (non-reciprocal). If you send a wave through, it twists right. If you send it back the opposite way, it keeps twisting right, not left. We use this to build an isolator—a device that lets power flow from an amplifier to an antenna, but stops any reflected power from coming back and blowing up the amp.",
      keyPoints: [
        "Rotates polarization of EM waves",
        "Requires a DC biasing magnetic field",
        "Non-reciprocal property",
        "Basis for microwave isolators and circulators"
      ],
      followUpQuestions: ["Explain how an isolator uses Faraday rotation to protect a transmitter."]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Emphasize 'Non-reciprocal' - this is the only way to build devices that allow waves to travel forward but block them from traveling backward."
  },
  // Optical Fiber Communication
  {
    id: "mw-sat-53",
    topicId: "core-ece",
    title: "Explain the principle of Total Internal Reflection (TIR) in optical fibers.",
    answer: {
      shortAnswer: "TIR occurs when light traveling in a denser medium hits a boundary with a less dense medium at an angle greater than the critical angle, causing all light to reflect inward.",
      detailedExplanation: "An optical fiber consists of a core (higher refractive index, n1) surrounded by a cladding (lower refractive index, n2). According to Snell's Law, when light hits the core-cladding boundary at a shallow enough angle (greater than the critical angle), it bends so much that it cannot escape into the cladding. Instead, 100% of the optical energy reflects back into the core, guiding the light down the fiber with minimal loss.",
      interviewExplanation: "Optical fibers act as light pipes due to Total Internal Reflection. The center core is made of glass that is slightly denser (optically) than the outer cladding. If a light ray hits the boundary between them at a sharp enough angle, instead of passing through, it acts like a perfect mirror. The light zig-zags down the fiber, trapped entirely inside the core without leaking out.",
      keyPoints: [
        "Core refractive index (n1) > Cladding (n2)",
        "Angle of incidence > Critical angle",
        "Zero light escapes the core",
        "Guided by continuous reflection"
      ],
      followUpQuestions: ["How is the critical angle calculated?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Clearly state the two conditions for TIR: n1 > n2, and angle > critical angle."
  },
  {
    id: "mw-sat-54",
    topicId: "core-ece",
    title: "What is Numerical Aperture (NA) in an optical fiber?",
    answer: {
      shortAnswer: "Numerical Aperture is a measure of a fiber's ability to gather light; it defines the maximum angle at which light can enter the fiber and undergo total internal reflection.",
      detailedExplanation: "NA is a dimensionless number related to the acceptance cone of the fiber. It is calculated based on the refractive indices of the core (n1) and cladding (n2): NA = sqrt(n1^2 - n2^2). A higher NA means the fiber has a wider acceptance angle, making it easier to couple light from an LED or laser into it. However, a high NA usually increases modal dispersion.",
      interviewExplanation: "Numerical Aperture tells you how 'wide' the fiber's field of view is. If you have a light source, you want to get as much of its light into the fiber as possible. Light entering straight in works fine, but light coming in at a steep angle might escape the core. The NA defines the 'cone of acceptance'. Only light rays entering within this cone will meet the conditions for Total Internal Reflection. Mathematically, it depends entirely on the difference in refractive index between the core and cladding.",
      keyPoints: [
        "Measures light-gathering ability",
        "Defines the cone of acceptance angle",
        "NA = sqrt(n1^2 - n2^2)",
        "Trade-off: High NA = easier coupling, but higher dispersion"
      ],
      followUpQuestions: ["Why is a high NA bad for long-distance high-speed communication?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Relate NA to the physical 'cone of acceptance' to make the concept visual."
  },
  {
    id: "mw-sat-55",
    topicId: "core-ece",
    title: "Compare Single-mode and Multi-mode optical fibers.",
    answer: {
      shortAnswer: "Single-mode has a tiny core allowing only one light path, eliminating modal dispersion for long distances. Multi-mode has a larger core allowing multiple paths, used for short, cheaper links.",
      detailedExplanation: "Multi-mode fiber has a large core (e.g., 50 or 62.5 µm), allowing many modes (rays) of light to propagate at different angles. Because these rays travel different distances, they arrive at different times, causing pulses to spread (modal dispersion), limiting distance and bandwidth. Single-mode fiber has a microscopic core (e.g., 9 µm) allowing only one fundamental mode to pass straight through. This eliminates modal dispersion, enabling massive bandwidth over huge distances (transoceanic).",
      interviewExplanation: "Multi-mode fiber has a fat core. Think of a hallway where you can bounce a ball off the walls. Light can take many different zig-zag paths. A ray bouncing wildly takes longer to reach the end than a ray going straight. This causes a single pulse of light to smear out over time, limiting data speed and distance. Single-mode fiber has a core so thin that light can only travel straight down the exact center. Because there is only one path, there is no smearing. Single-mode is for long-haul telecom; multi-mode is for short LANs inside data centers.",
      keyPoints: [
        "Single-mode: Very small core (~9 µm), one propagation path",
        "Single-mode: No modal dispersion, long distance/high speed",
        "Multi-mode: Larger core (~50 µm), many paths",
        "Multi-mode: Modal dispersion limits distance, cheaper light sources"
      ],
      followUpQuestions: ["Why is connecting (splicing) single-mode fiber more difficult than multi-mode?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Frequently Asked"],
    interviewTip: "Always bring up 'modal dispersion' as the primary reason single-mode is vastly superior for long distances."
  },
  {
    id: "mw-sat-56",
    topicId: "core-ece",
    title: "What is Modal Dispersion and how is it overcome?",
    answer: {
      shortAnswer: "Modal dispersion is the spreading of an optical pulse because different light rays (modes) travel different path lengths in a multi-mode fiber. It is overcome by using Single-mode fiber or Graded-index fiber.",
      detailedExplanation: "In step-index multi-mode fiber, higher-order modes (steep angles) travel a physically longer distance than the fundamental mode (straight line). Thus, the 'fast' parts of a digital pulse arrive before the 'slow' parts, causing Inter-Symbol Interference (ISI) at high bit rates. This is eliminated entirely by using Single-mode fiber. Alternatively, Graded-index multi-mode fiber overcomes this by varying the core's refractive index (denser in the middle, less dense at edges), which speeds up the outer rays to arrive simultaneously with the central rays.",
      interviewExplanation: "When you send a quick flash of light down a thick fiber, the rays taking a zig-zag path arrive later than the rays going straight down the middle. This turns a sharp digital pulse into a wide, blurry pulse. If pulses spread too much, they overlap, and the receiver reads garbage. To fix this, you can shrink the core to allow only one straight path (Single-mode). Or, you can use a Graded-index fiber, where the glass on the outside 'speeds up' the zig-zagging light, so all rays arrive at the exact same time.",
      keyPoints: [
        "Pulse spreading due to different path lengths",
        "Causes Inter-Symbol Interference (ISI)",
        "Overcome by Single-mode fiber (one path)",
        "Overcome by Graded-index fiber (equalizes transit times)"
      ],
      followUpQuestions: ["How does the refractive index profile of a graded-index fiber look?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Explain how Graded-index fiber works (outer glass has lower density so light travels faster) as it shows deeper understanding."
  },
  {
    id: "mw-sat-57",
    topicId: "core-ece",
    title: "What is Chromatic Dispersion in optical fibers?",
    answer: {
      shortAnswer: "Chromatic dispersion is the spreading of a pulse because different wavelengths (colors) of light travel at slightly different speeds through glass.",
      detailedExplanation: "No light source is perfectly monochromatic (a single exact wavelength); they emit a narrow band of wavelengths. The refractive index of silica glass is slightly different for different wavelengths. Therefore, 'blue' light travels at a different velocity than 'red' light within the same fiber. Over long distances, this causes the pulse to broaden. It is the dominant limiting factor in Single-mode fibers, where modal dispersion is zero.",
      interviewExplanation: "Even a high-quality laser emits a tiny spread of wavelengths. Think of a prism breaking white light into a rainbow—this happens because glass slows down different colors by different amounts. In a fiber, this means the slightly different wavelengths inside a single data pulse travel at different speeds. Over a long distance, the pulse spreads out. In single-mode fiber, since modal dispersion doesn't exist, chromatic dispersion is the main enemy we have to fight using dispersion-compensating fibers.",
      keyPoints: [
        "Different wavelengths travel at different speeds",
        "Glass refractive index is wavelength-dependent",
        "Causes pulse spreading in Single-mode fiber",
        "Overcome by Dispersion Shifted/Compensating fibers"
      ],
      followUpQuestions: ["How does a Dispersion Compensating Fiber (DCF) work?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Differentiate clearly: Modal dispersion = different PATHS. Chromatic dispersion = different SPEEDS for different colors."
  },
  {
    id: "mw-sat-58",
    topicId: "core-ece",
    title: "Explain the three main optical communication windows (wavelength bands) and why they are chosen.",
    answer: {
      shortAnswer: "The 850 nm, 1310 nm, and 1550 nm windows are used because they correspond to minimums in attenuation and dispersion in silica glass fibers.",
      detailedExplanation: "The 1st window (850 nm) was used early due to cheap LED sources but has high loss. The 2nd window (1310 nm) is critical because it is the point of zero chromatic dispersion in standard single-mode fiber, making it great for high speeds. The 3rd window (1550 nm) is the most important today; it is the absolute minimum attenuation point (approx 0.2 dB/km) of silica glass, making it the standard for long-haul and undersea cables, and it aligns with Erbium-Doped Fiber Amplifiers (EDFA).",
      interviewExplanation: "We don't just shoot any color of light down a fiber; we pick specific infrared 'windows'. Around 850nm is cheap but lossy. 1310nm is a magical spot where chromatic dispersion naturally cancels out to zero, so pulses stay perfectly sharp. 1550nm is the most important window because it's where silica glass is the most transparent—loss is only 0.2 dB per kilometer. Modern long-haul telecom almost exclusively uses 1550nm because you can go the furthest distance before needing an amplifier.",
      keyPoints: [
        "1310 nm: Point of zero chromatic dispersion",
        "1550 nm: Point of absolute minimum attenuation (0.2 dB/km)",
        "Both are in the infrared spectrum",
        "1550 nm is standard for long-haul networks"
      ],
      followUpQuestions: ["What causes the peaks in attenuation between these communication windows?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Frequently Asked"],
    interviewTip: "Memorize 1310nm (zero dispersion) and 1550nm (minimum loss). This is fundamental fiber optic knowledge."
  },
  {
    id: "mw-sat-59",
    topicId: "core-ece",
    title: "What is an EDFA and why revolutionized fiber optics?",
    answer: {
      shortAnswer: "An Erbium-Doped Fiber Amplifier (EDFA) amplifies optical signals directly in the fiber without converting them to electricity, enabling long-distance dense wavelength-division multiplexing (DWDM).",
      detailedExplanation: "Before EDFAs, long-distance lines required electronic repeaters: photodetectors turned light to electricity, amplified it, and a laser turned it back to light. An EDFA is simply a piece of fiber doped with Erbium ions. When 'pumped' with a secondary laser, these ions become excited. When a weak 1550 nm signal passes through, it stimulates the ions to release their energy as identical 1550 nm photons, optically amplifying the signal. Crucially, an EDFA can amplify dozens of different wavelengths simultaneously.",
      interviewExplanation: "The EDFA changed the world. Before it, if you wanted to boost a signal halfway across the ocean, you had to catch the light, turn it into an electrical signal, amplify it, and fire a new laser. This is slow and complex. An EDFA is an all-optical amplifier. You splice in a special piece of Erbium-laced fiber and shine a 'pump' laser into it. The weak data signal passes through, stimulates the Erbium, and gets instantly amplified. The best part? It amplifies all colors (channels) of light at the exact same time, which made DWDM possible.",
      keyPoints: [
        "Erbium-Doped Fiber Amplifier",
        "Amplifies light optically (no electrical conversion)",
        "Operates in the 1550 nm window",
        "Can amplify multiple wavelengths simultaneously (enables DWDM)"
      ],
      followUpQuestions: ["Explain the concept of DWDM (Dense Wavelength Division Multiplexing)."]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Highlight that EDFAs eliminate the O-E-O (Optical-Electrical-Optical) conversion bottleneck."
  },
  {
    id: "mw-sat-60",
    topicId: "core-ece",
    title: "How do photodiodes (PIN vs APD) work in an optical receiver?",
    answer: {
      shortAnswer: "A PIN photodiode converts light into current linearly, while an Avalanche Photodiode (APD) uses high voltage to multiply the current internally, providing higher sensitivity.",
      detailedExplanation: "A PIN photodiode has an intrinsic layer between P and N regions. An incoming photon generates an electron-hole pair, creating a small current. It is fast, cheap, and stable. An Avalanche Photodiode (APD) operates under high reverse bias. When a photon creates an electron, the high electric field accelerates it so much that it smashes into the crystal lattice, freeing more electrons (avalanche effect). This internal gain makes APDs highly sensitive for long-haul receivers, though they require complex high-voltage power supplies.",
      interviewExplanation: "At the receiving end, we need to turn light back into electricity. We usually use a PIN diode or an APD. A PIN diode is simple: one photon hits it, one electron flows. It's cheap and reliable. But for long-distance cables where the signal is incredibly weak, we use an APD. APDs act like a photomultiplier. We put a huge reverse voltage across it. When one photon hits, the freed electron accelerates so fast it knocks other electrons loose, creating an 'avalanche'. So one photon might create 100 electrons, giving you built-in amplification.",
      keyPoints: [
        "PIN: 1 photon = 1 electron, simple, linear",
        "APD: Uses avalanche effect for internal gain",
        "APD: Higher sensitivity for long distances",
        "APD: Requires high reverse bias voltage"
      ],
      followUpQuestions: ["What is Dark Current in a photodetector?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Conceptual"],
    interviewTip: "Contrast the simplicity of PIN with the internal gain (and higher complexity/noise) of the APD."
  }
];
