import type { Question } from '../src/types';

export const controlPowerQuestions: Question[] = [
  // --- Control Systems (20 Questions) ---
  {
    id: "ctrl-pwr-1",
    topicId: "core-ece",
    title: "What is a Transfer Function in a control system?",
    answer: {
      shortAnswer: "A transfer function is the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming all initial conditions are zero.",
      detailedExplanation: "In linear time-invariant (LTI) systems, the transfer function provides a mathematical representation of the relationship between the input and output. It is derived in the s-domain using Laplace transforms. The poles and zeros of a transfer function completely define the dynamic behavior and stability of the system. Initial conditions must be zero for the transfer function to uniquely represent the system dynamics.",
      interviewExplanation: "Start by giving the standard definition involving Laplace transforms of output over input. Emphasize the crucial condition: 'assuming zero initial conditions'. Mention that it helps in analyzing system stability by finding poles and zeros.",
      keyPoints: ["Ratio of Laplace transforms", "Output / Input", "Zero initial conditions", "Applies to LTI systems"],
      followUpQuestions: ["Why do we assume zero initial conditions?", "How do poles and zeros affect system stability?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always mention 'zero initial conditions' as interviewers look for this specific phrase."
  },
  {
    id: "ctrl-pwr-2",
    topicId: "core-ece",
    title: "State Mason's Gain Formula and its purpose.",
    answer: {
      shortAnswer: "Mason's Gain Formula is used to determine the overall transfer function of a system directly from its signal flow graph.",
      detailedExplanation: "Mason's formula is T = (1/Δ) * Σ(Pk * Δk), where Pk is the gain of the k-th forward path, Δ is the graph determinant, and Δk is the cofactor of the k-th path. It simplifies the process of finding the transfer function compared to block diagram reduction, especially for complex systems with multiple feedback loops.",
      interviewExplanation: "Explain that it's a direct method to find the transfer function from a signal flow graph. Briefly state the formula components: forward path gain, graph determinant, and loop gains.",
      keyPoints: ["Used for Signal Flow Graphs", "Finds overall transfer function directly", "T = (1/Δ) * Σ(Pk * Δk)"],
      followUpQuestions: ["What are non-touching loops?", "When would you prefer block diagram reduction over Mason's formula?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Be ready to identify forward paths and loops if given a small signal flow graph."
  },
  {
    id: "ctrl-pwr-3",
    topicId: "core-ece",
    title: "What are the rules for moving a summing point in Block Diagram Reduction?",
    answer: {
      shortAnswer: "Moving a summing point ahead of a block requires dividing the signal by the block's gain, while moving it behind a block requires multiplying the signal by the block's gain.",
      detailedExplanation: "Block diagram reduction rules ensure the mathematical relationship between signals remains unchanged. When shifting a summing point ahead of a block with gain 'G', the signal added at the summing point must pass through '1/G' to compensate. Conversely, shifting it behind a block requires adding a block of gain 'G' to the incoming signal of the summing point.",
      interviewExplanation: "Focus on maintaining the mathematical equality of the node equations. Give a quick mental image: 'moving ahead means dividing, moving behind means multiplying.'",
      keyPoints: ["Moving ahead: Divide by G", "Moving behind: Multiply by G", "Maintains signal equivalence"],
      followUpQuestions: ["What is the rule for moving a take-off point?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Don't confuse the rules for summing points with take-off points; they are opposites."
  },
  {
    id: "ctrl-pwr-4",
    topicId: "core-ece",
    title: "Explain 'Type' and 'Order' of a control system.",
    answer: {
      shortAnswer: "Type refers to the number of poles at the origin of the open-loop transfer function, while Order is the highest power of 's' in the denominator polynomial.",
      detailedExplanation: "The 'Type' of a system (0, 1, 2, etc.) determines its steady-state accuracy and error to step, ramp, or parabolic inputs. It corresponds to the number of integrators in the open-loop path. The 'Order' dictates the transient response complexity and is defined by the total number of poles in the closed-loop or open-loop system.",
      interviewExplanation: "Clearly distinguish the two. 'Type' is specifically poles at s=0 (origin) which affects steady-state error. 'Order' is total poles, which affects transient behavior.",
      keyPoints: ["Type: Poles at s=0", "Type affects steady-state error", "Order: Total number of poles", "Order affects transient response"],
      example: "G(s) = K / (s(s+1)) is Type 1, Order 2.",
      followUpQuestions: ["What is the steady-state error of a Type 1 system for a step input?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Memorize the steady-state error table for Type 0, 1, 2 systems against step, ramp, and parabolic inputs."
  },
  {
    id: "ctrl-pwr-5",
    topicId: "core-ece",
    title: "What are Rise Time and Settling Time in time-domain analysis?",
    answer: {
      shortAnswer: "Rise time is the time taken for the response to rise from 10% to 90% (or 0% to 100%) of its final value. Settling time is the time required for the response to reach and stay within a specified tolerance band (usually 2% or 5%).",
      detailedExplanation: "These are key transient response specifications for a step input. For underdamped second-order systems, rise time (0-100%) indicates how fast the system responds. Settling time indicates when the transient oscillations have decayed enough, heavily dependent on the damping ratio and natural frequency (ts = 4/(ζωn) for a 2% band).",
      interviewExplanation: "Define both clearly. Mention that they evaluate the speed and stability of the system's transient response. State the 2% and 5% settling time formulas if possible.",
      keyPoints: ["Rise time: speed of response", "Settling time: time to stay within 2% or 5% error band", "ts = 4/(ζωn) for 2%"],
      followUpQuestions: ["How does increasing damping ratio affect rise time and settling time?"]
    },
    difficulty: "Beginner",
    badges: ["Important"],
    interviewTip: "Relate these parameters to real-world system performance, like how fast an elevator reaches a floor (rise time) vs when it stops shaking (settling time)."
  },
  {
    id: "ctrl-pwr-6",
    topicId: "core-ece",
    title: "Explain the Routh-Hurwitz Stability Criterion.",
    answer: {
      shortAnswer: "The Routh-Hurwitz criterion determines absolute stability by analyzing the roots of the characteristic equation without solving for them.",
      detailedExplanation: "It involves constructing a Routh array using the coefficients of the characteristic polynomial. For the system to be strictly stable, all elements in the first column of the Routh array must have the same sign. The number of sign changes in the first column equals the number of roots in the right half of the s-plane (unstable roots).",
      interviewExplanation: "Explain the setup of the Routh array. State the main rule: no sign changes in the first column means a stable system. Note that it only gives absolute stability, not relative stability.",
      keyPoints: ["Analyzes characteristic equation", "First column sign changes indicate RHS poles", "Provides absolute stability only"],
      followUpQuestions: ["What happens if a row in the Routh array consists entirely of zeros?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Mention the 'row of zeros' case, as it indicates roots on the imaginary axis or symmetrical roots."
  },
  {
    id: "ctrl-pwr-7",
    topicId: "core-ece",
    title: "What is Root Locus and what information does it provide?",
    answer: {
      shortAnswer: "Root locus is a graphical plot showing how the roots of the closed-loop characteristic equation move in the s-plane as a system parameter (usually gain 'K') varies from 0 to infinity.",
      detailedExplanation: "Developed by W.R. Evans, it helps analyze transient response and stability. The branches of the root locus start at open-loop poles (K=0) and terminate at open-loop zeros (K=∞). It allows engineers to design compensators or select appropriate gain to achieve desired damping ratio and natural frequency.",
      interviewExplanation: "Describe it as a trajectory plot of closed-loop poles. It's a powerful design tool for determining absolute and relative stability based on the gain parameter K.",
      keyPoints: ["Plot of closed-loop poles", "Parameter K varies from 0 to ∞", "Starts at OL poles, ends at OL zeros"],
      followUpQuestions: ["How do you find the breakaway points on a root locus?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Knowing the basic rules of drawing root locus (angle of asymptotes, centroid) is highly recommended."
  },
  {
    id: "ctrl-pwr-8",
    topicId: "core-ece",
    title: "How do you calculate breakaway and break-in points in a Root Locus?",
    answer: {
      shortAnswer: "Breakaway and break-in points are found by solving dK/ds = 0, where K is expressed in terms of 's' from the characteristic equation.",
      detailedExplanation: "The characteristic equation is 1 + K*G(s)H(s) = 0. Rearrange this to K = -1 / (G(s)H(s)). Differentiate K with respect to s and equate to zero. The valid roots of dK/ds = 0 that lie on the root locus branches are the breakaway (leaving real axis) or break-in (entering real axis) points.",
      interviewExplanation: "Give the mathematical condition: dK/ds = 0. Explain that these points occur where multiple roots exist on the real axis.",
      keyPoints: ["Characteristic equation: 1+G(s)H(s) = 0", "Condition: dK/ds = 0", "Must lie on the valid locus"],
      followUpQuestions: ["Does every root of dK/ds = 0 represent a valid breakaway point?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical"],
    interviewTip: "Always emphasize checking if the calculated point actually lies on a valid segment of the root locus."
  },
  {
    id: "ctrl-pwr-9",
    topicId: "core-ece",
    title: "Define Gain Margin and Phase Margin in Bode Plots.",
    answer: {
      shortAnswer: "Gain Margin is the amount of gain that can be added before the system becomes unstable. Phase Margin is the additional phase lag required to make the system unstable.",
      detailedExplanation: "Gain Margin (GM) is measured at the phase crossover frequency (where phase = -180°). It is the reciprocal of the magnitude at this frequency. Phase Margin (PM) is measured at the gain crossover frequency (where magnitude = 1 or 0 dB). PM = 180° + Phase angle at gain crossover. Both indicate relative stability.",
      interviewExplanation: "Define them in relation to crossover frequencies. GM happens at Phase Crossover Frequency, and PM happens at Gain Crossover Frequency. Positive GM (in dB) and PM mean a stable system.",
      keyPoints: ["GM at Phase Crossover Frequency (-180°)", "PM at Gain Crossover Frequency (0 dB)", "Measure of relative stability"],
      followUpQuestions: ["For a stable system, which frequency is higher: Gain Crossover or Phase Crossover?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Remember: For stability, Phase Crossover Frequency > Gain Crossover Frequency (for minimum phase systems)."
  },
  {
    id: "ctrl-pwr-10",
    topicId: "core-ece",
    title: "State the stability conditions using a Bode Plot.",
    answer: {
      shortAnswer: "For a minimum phase system to be stable, both Gain Margin (GM) and Phase Margin (PM) must be positive. Additionally, the Phase Crossover Frequency must be greater than the Gain Crossover Frequency.",
      detailedExplanation: "In the Bode plot, if the magnitude curve crosses the 0 dB line before the phase curve crosses the -180° line, the system is stable. This guarantees positive PM and GM. If they cross at the same frequency, the system is marginally stable (GM=0 dB, PM=0°).",
      interviewExplanation: "Relate the visual aspect of the plot: The magnitude must drop below 0 dB before the phase reaches -180 degrees. This provides a safety buffer (margins) against instability.",
      keyPoints: ["Stable: GM > 0, PM > 0", "Stable: w_pc > w_gc", "Marginal: w_pc = w_gc"],
      followUpQuestions: ["What is a minimum phase system?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Be careful to specify this is true for 'minimum phase systems' (no poles/zeros in the right half plane)."
  },
  {
    id: "ctrl-pwr-11",
    topicId: "core-ece",
    title: "What is the Nyquist Stability Criterion?",
    answer: {
      shortAnswer: "The Nyquist criterion relates the stability of a closed-loop system to the open-loop frequency response by stating Z = N + P.",
      detailedExplanation: "Here, Z is the number of closed-loop poles in the right-half s-plane (unstable poles), P is the number of open-loop poles in the right-half s-plane, and N is the number of clockwise encirclements of the critical point (-1+j0) by the Nyquist plot of G(jω)H(jω). For a stable system, Z must be 0, so N must equal -P (counter-clockwise encirclements).",
      interviewExplanation: "State the formula Z = N + P. Carefully define Z, N, and P. Emphasize that it uses the open-loop transfer function to determine closed-loop stability, utilizing complex mapping (Cauchy's principle of argument).",
      keyPoints: ["Z = N + P", "N: encirclements of (-1, j0)", "Evaluates closed-loop stability using open-loop TF"],
      followUpQuestions: ["What is Cauchy's Principle of Argument?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Drawing a quick sketch of the critical point (-1, j0) and an encirclement can show deep understanding."
  },
  {
    id: "ctrl-pwr-12",
    topicId: "core-ece",
    title: "Differentiate between a Polar Plot and a Nyquist Plot.",
    answer: {
      shortAnswer: "A Polar plot is a plot of the frequency response for positive frequencies only (0 to +∞). A Nyquist plot is a complete contour mapping covering frequencies from -∞ to +∞.",
      detailedExplanation: "A Polar plot maps the magnitude and phase of G(jω) in polar coordinates as ω varies from 0 to +∞. The Nyquist plot includes the polar plot, its mirror image (from -∞ to 0), and an infinite radius semicircle mapping the origin (if there are poles at s=0), forming a closed contour to apply the Nyquist stability criterion.",
      interviewExplanation: "Explain that the polar plot is just one piece of the Nyquist plot. The Nyquist plot requires a closed contour mapping the entire right-half s-plane boundary.",
      keyPoints: ["Polar: ω from 0 to ∞", "Nyquist: ω from -∞ to ∞ including origin mapping", "Nyquist is a closed contour"],
      followUpQuestions: ["How do you map a pole at the origin in a Nyquist plot?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "If asked to draw, remember the mirror image property of the Nyquist plot along the real axis."
  },
  {
    id: "ctrl-pwr-13",
    topicId: "core-ece",
    title: "Compare Lead and Lag Compensators.",
    answer: {
      shortAnswer: "A Lead compensator adds phase advance, improving transient response and stability margins. A Lag compensator adds phase lag, improving steady-state accuracy without degrading stability.",
      detailedExplanation: "A Lead compensator (pole further left than zero) acts like a high-pass filter, increasing the system bandwidth, yielding faster response (shorter rise time) but higher noise susceptibility. A Lag compensator (zero further left than pole) acts like a low-pass filter, reducing bandwidth, reducing steady-state error, but slowing down the transient response.",
      interviewExplanation: "Contrast them by their effects: Lead is for speed (transient), Lag is for accuracy (steady-state). Mention their electrical network equivalents (RC circuits).",
      keyPoints: ["Lead: improves transient, acts as high-pass", "Lag: improves steady-state, acts as low-pass", "Lead: zero closer to origin. Lag: pole closer to origin."],
      followUpQuestions: ["When would you use a Lead-Lag compensator?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "Relate Lead to PD control and Lag to PI control for a practical perspective."
  },
  {
    id: "ctrl-pwr-14",
    topicId: "core-ece",
    title: "What are the individual effects of Proportional, Integral, and Derivative (PID) terms?",
    answer: {
      shortAnswer: "Proportional (P) decreases rise time but leaves steady-state error. Integral (I) eliminates steady-state error but increases overshoot. Derivative (D) increases damping, reducing overshoot and settling time.",
      detailedExplanation: "In a PID controller, 'P' provides a control action proportional to the error, acting like a spring. 'I' accumulates error over time, guaranteeing zero steady-state error for step inputs, but can cause instability (windup). 'D' predicts future error based on the rate of change, adding damping to the system, but amplifies high-frequency noise.",
      interviewExplanation: "Break it down action by action. P acts on present error, I acts on past accumulated error, D acts on predicted future error. Mention the trade-offs of each.",
      keyPoints: ["P: Present, reduces rise time", "I: Past, eliminates SS error", "D: Future, adds damping/stability"],
      followUpQuestions: ["Why is Derivative control never used alone?", "What is integral windup?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Use the 'Present, Past, Future' analogy; interviewers love it."
  },
  {
    id: "ctrl-pwr-15",
    topicId: "core-ece",
    title: "What is State Space Analysis and why is it preferred over Transfer Functions?",
    answer: {
      shortAnswer: "State Space Analysis uses first-order differential equations to describe a system in terms of state variables. It is preferred because it can handle MIMO (Multi-Input Multi-Output), non-linear, and time-varying systems, and includes initial conditions.",
      detailedExplanation: "Transfer functions are limited to LTI, SISO (Single-Input Single-Output) systems with zero initial conditions. State space models the system state internally using vectors (x' = Ax + Bu, y = Cx + Du). This provides a complete internal description of the system, not just the input-output behavior.",
      interviewExplanation: "Highlight the limitations of transfer functions: LTI only, SISO only, zero initial conditions. State space overcomes all of these and provides internal state visibility.",
      keyPoints: ["Handles MIMO systems", "Handles non-linear & time-varying", "Includes initial conditions", "Internal system description"],
      followUpQuestions: ["What are state variables?", "What do matrices A, B, C, and D represent?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "Know the standard state equations: dx/dt = Ax + Bu, y = Cx + Du by heart."
  },
  {
    id: "ctrl-pwr-16",
    topicId: "core-ece",
    title: "What is a State Transition Matrix?",
    answer: {
      shortAnswer: "The State Transition Matrix, φ(t) = e^(At), describes how the state of a linear time-invariant system evolves over time from an initial state, with zero input.",
      detailedExplanation: "It is the inverse Laplace transform of (sI - A)^-1. It completely defines the unforced (natural) response of the system. Key properties include φ(0) = I (Identity matrix), φ(t1+t2) = φ(t1)φ(t2), and φ^-1(t) = φ(-t).",
      interviewExplanation: "Define it mathematically as the matrix exponential e^(At). Explain its physical meaning: transitioning the system from time 0 to time t without external forces. List a couple of its mathematical properties.",
      keyPoints: ["φ(t) = e^(At)", "Inverse Laplace of (sI - A)^-1", "Describes natural unforced response"],
      followUpQuestions: ["How do you compute e^(At) manually?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical"],
    interviewTip: "Memorizing the formula inverse Laplace of (sI - A)^-1 is crucial for solving numericals."
  },
  {
    id: "ctrl-pwr-17",
    topicId: "core-ece",
    title: "Define Controllability and Observability.",
    answer: {
      shortAnswer: "Controllability means a system's states can be driven to any desired value in finite time using an appropriate input. Observability means the internal states can be determined by observing the system's output over finite time.",
      detailedExplanation: "Kalman's tests are used to check these. For controllability, the matrix Qc = [B AB A^2B ... A^(n-1)B] must have full rank (rank = n). For observability, the matrix Qo = [C; CA; CA^2; ... CA^(n-1)] must have full rank.",
      interviewExplanation: "Provide the plain English definitions first. Then provide the mathematical tests (Kalman's matrices). Explain that they are dual concepts.",
      keyPoints: ["Controllability: Driving states via input", "Observability: Deducing states via output", "Kalman rank tests"],
      followUpQuestions: ["What is the Principle of Duality in state space?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Remember the order of matrices in the Kalman tests: Qc starts with B, Qo starts with C."
  },
  {
    id: "ctrl-pwr-18",
    topicId: "core-ece",
    title: "What is the significance of the Characteristic Equation in control systems?",
    answer: {
      shortAnswer: "The characteristic equation, given by 1 + G(s)H(s) = 0 for closed-loop systems, determines the poles of the system, which directly govern transient behavior and stability.",
      detailedExplanation: "By finding the roots of the characteristic equation, we find the closed-loop poles. If any pole lies in the right half of the s-plane, the system is unstable. The location of the dominant poles dictates parameters like damping ratio, natural frequency, rise time, and overshoot.",
      interviewExplanation: "Explain that it is the denominator of the closed-loop transfer function equated to zero. It is the fundamental equation for stability analysis techniques like Routh-Hurwitz and Root Locus.",
      keyPoints: ["Denominator of closed-loop TF = 0", "Roots are closed-loop poles", "Determines stability and transient response"],
      followUpQuestions: ["How is the characteristic equation derived from state space matrices? (Ans: det(sI - A) = 0)"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked"],
    interviewTip: "Always mention '1 + G(s)H(s) = 0' for negative feedback systems."
  },
  {
    id: "ctrl-pwr-19",
    topicId: "core-ece",
    title: "Explain the concept of Dominant Poles.",
    answer: {
      shortAnswer: "Dominant poles are the closed-loop poles located closest to the jω axis in the s-plane. They dominate the transient response because their associated exponential terms decay the slowest.",
      detailedExplanation: "If a system has multiple poles, poles far to the left in the s-plane represent highly damped, fast-decaying transients. The poles closer to the imaginary axis decay slowly and dictate the overall settling time and overshoot. If other poles are at least 5 times further left than the dominant poles, the system can be approximated as a lower-order system.",
      interviewExplanation: "Use the analogy of a race: the slowest runner dictates the total time for the team. The slowest decaying transient (closest to jω) dictates the system response. Mention the '5 times' rule of thumb for approximation.",
      keyPoints: ["Closest to jω axis", "Slowest decaying transients", "Allows system order reduction approximation"],
      followUpQuestions: ["How do zero locations affect the dominant pole approximation?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "This is a great concept to mention when asked about simplifying complex high-order systems."
  },
  {
    id: "ctrl-pwr-20",
    topicId: "core-ece",
    title: "What is the difference between Absolute Stability and Relative Stability?",
    answer: {
      shortAnswer: "Absolute stability answers 'yes or no' if a system is stable. Relative stability measures 'how stable' the system is, indicating how close it is to becoming unstable.",
      detailedExplanation: "Absolute stability is determined by Routh-Hurwitz or the location of poles (left or right half plane). Relative stability is quantified by Phase Margin, Gain Margin, damping ratio, and peak overshoot. It ensures the system remains stable despite parameter variations or uncertainties.",
      interviewExplanation: "Keep it simple: Absolute is a binary condition. Relative is a margin of safety. Provide examples of tools used for each (Routh for absolute, Bode for relative).",
      keyPoints: ["Absolute: Binary (Stable/Unstable)", "Relative: Degree of stability", "Margins (GM, PM) quantify relative stability"],
      followUpQuestions: ["Can a system have absolute stability but poor relative stability?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "A system with poor relative stability will exhibit severe ringing/oscillations before settling, even if it is technically 'stable'."
  },

  // --- Power Electronics (20 Questions) ---
  {
    id: "ctrl-pwr-21",
    topicId: "core-ece",
    title: "What is an SCR and what are its modes of operation?",
    answer: {
      shortAnswer: "An SCR (Silicon Controlled Rectifier) is a 4-layer, 3-junction (PNPN) semiconductor device. Its modes are Forward Blocking, Forward Conduction, and Reverse Blocking.",
      detailedExplanation: "It acts as a controlled switch. In Forward Blocking, voltage is applied but gate current is zero; it acts as an open switch. When gate current is applied or breakdown voltage is reached, it enters Forward Conduction (closed switch). In Reverse Blocking, it acts like a reverse-biased diode. Once turned on via the gate, the gate loses control.",
      interviewExplanation: "Describe its physical structure (PNPN) and terminals (Anode, Cathode, Gate). Emphasize that it is a semi-controlled device: you can turn it on with the gate, but you cannot turn it off with the gate.",
      keyPoints: ["4-layer PNPN device", "Semi-controlled switch", "Modes: Forward Blocking, Forward Conduction, Reverse Blocking"],
      followUpQuestions: ["How do you turn off an SCR if the gate loses control?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Always mention 'latching'—once it's on, the gate is irrelevant."
  },
  {
    id: "ctrl-pwr-22",
    topicId: "core-ece",
    title: "Distinguish between Latching Current and Holding Current in an SCR.",
    answer: {
      shortAnswer: "Latching current is the minimum anode current required to turn ON the SCR. Holding current is the minimum anode current required to maintain the SCR in the ON state.",
      detailedExplanation: "Latching current (Il) is associated with the turn-on process. Once the anode current exceeds Il, the gate signal can be removed. Holding current (Ih) is associated with the turn-off process. To commutate (turn off) the SCR, the anode current must be reduced below Ih. Typically, Il is greater than Ih.",
      interviewExplanation: "Clearly distinguish them by the process they belong to: Latching = Turn ON, Holding = Turn OFF. State that Latching current is slightly higher than Holding current.",
      keyPoints: ["Latching: Turn-on condition", "Holding: Turn-off condition", "Il > Ih"],
      followUpQuestions: ["What happens if you remove the gate pulse before anode current reaches the latching current?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Use the V-I characteristic curve mentally to explain these two points on the vertical axis."
  },
  {
    id: "ctrl-pwr-23",
    topicId: "core-ece",
    title: "What is Commutation in SCR? Name the types.",
    answer: {
      shortAnswer: "Commutation is the process of turning off a conducting SCR by reducing its anode current below the holding current and applying a reverse voltage.",
      detailedExplanation: "Because the gate loses control after turn-on, external circuits are needed to turn off the SCR in DC circuits. The two main types are Natural Commutation (line commutation, occurs in AC circuits when voltage crosses zero) and Forced Commutation (using LC circuits to force current to zero in DC circuits).",
      interviewExplanation: "Define it simply as 'the turn-off process'. Differentiate between AC systems (where it happens naturally) and DC systems (where forced circuitry is required).",
      keyPoints: ["Process of turning off SCR", "Anode current < Holding current", "Natural (AC) vs Forced (DC)"],
      followUpQuestions: ["Explain Class A or Class B forced commutation."]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Understanding commutation is crucial for DC-DC choppers and DC-AC inverters which use SCRs."
  },
  {
    id: "ctrl-pwr-24",
    topicId: "core-ece",
    title: "What is a TRIAC and where is it used?",
    answer: {
      shortAnswer: "A TRIAC is a bidirectional thyristor that can conduct current in both directions, functionally equivalent to two SCRs connected in inverse parallel with a common gate.",
      detailedExplanation: "It is a 5-layer device primarily used for AC power control. Unlike an SCR, it can be triggered into conduction by either a positive or negative gate pulse, regardless of the polarity of the main terminals. It is widely used in fan regulators, light dimmers, and AC motor speed control.",
      interviewExplanation: "Describe it as 'two inverse parallel SCRs'. Emphasize its bidirectional nature, making it ideal for AC phase control applications.",
      keyPoints: ["Bidirectional conduction", "Equivalent to two antiparallel SCRs", "Used in AC power control (dimmers, fans)"],
      followUpQuestions: ["What is a DIAC, and why is it often used with a TRIAC?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Mention that while TRIACs are versatile for AC, they have lower dv/dt and di/dt ratings compared to SCRs."
  },
  {
    id: "ctrl-pwr-25",
    topicId: "core-ece",
    title: "Compare Power MOSFET and Power BJT.",
    answer: {
      shortAnswer: "A Power MOSFET is a voltage-controlled, majority-carrier device capable of very high switching frequencies. A Power BJT is a current-controlled, minority-carrier device with lower switching speeds but higher power handling capability.",
      detailedExplanation: "MOSFETs have high input impedance (gate draws no continuous current) and a positive temperature coefficient (easy to parallel). BJTs require continuous base current to stay on, have secondary breakdown issues, and a negative temperature coefficient. MOSFETs are preferred for high-frequency, low-power applications (SMPS), while BJTs are largely replaced by IGBTs today.",
      interviewExplanation: "Focus on control type (Voltage vs Current) and charge carriers (Majority vs Minority). Relate these to switching speed and ease of drive circuit design.",
      keyPoints: ["MOSFET: Voltage controlled, high speed", "BJT: Current controlled, slower", "MOSFET has positive temperature coefficient"],
      followUpQuestions: ["What is secondary breakdown in a BJT?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Always mention 'positive temperature coefficient' for MOSFETs; it allows them to be connected in parallel safely."
  },
  {
    id: "ctrl-pwr-26",
    topicId: "core-ece",
    title: "What is an IGBT? Why is it preferred in modern power electronics?",
    answer: {
      shortAnswer: "IGBT (Insulated Gate Bipolar Transistor) combines the high input impedance and voltage-controlled nature of a MOSFET with the low on-state conduction loss of a BJT.",
      detailedExplanation: "It provides the best of both worlds. The gate is isolated (like a MOSFET), making it easy to drive, while the conduction path involves minority carrier injection (like a BJT), leading to low ON-state voltage drop even at high currents. It is widely used in medium to high power applications like motor drives and EV inverters.",
      interviewExplanation: "Explain it as a hybrid device. It solves the MOSFET's problem of high on-resistance at high voltages and the BJT's problem of complex current-drive requirements.",
      keyPoints: ["Hybrid of MOSFET and BJT", "Voltage controlled gate (easy drive)", "Low on-state voltage drop", "Used in EV drives and high power inverters"],
      followUpQuestions: ["Does an IGBT have a higher switching frequency than a MOSFET? (Ans: No, MOSFET is faster due to absence of minority carrier storage time)"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Understand the trade-off: IGBT is slower than MOSFET but handles high voltage/current with less loss."
  },
  {
    id: "ctrl-pwr-27",
    topicId: "core-ece",
    title: "Explain the purpose of a Freewheeling Diode.",
    answer: {
      shortAnswer: "A freewheeling diode is connected across an inductive load to provide a path for the inductor current to discharge when the main switching device turns off.",
      detailedExplanation: "Inductors resist changes in current. If a switch turns off suddenly, the inductor generates a massive voltage spike (V = L di/dt) that can destroy the switch. The freewheeling diode becomes forward-biased and provides a safe, low-resistance circulating path for this energy. It also improves the load current waveform by making it more continuous.",
      interviewExplanation: "Focus on two main benefits: protecting the switch from high-voltage spikes and improving load current continuity/efficiency in rectifiers and choppers.",
      keyPoints: ["Provides discharge path for inductive load", "Protects switches from voltage spikes", "Improves load current waveform"],
      followUpQuestions: ["How does a freewheeling diode affect the power factor in a controlled rectifier?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Mention Faraday's law of induction (L di/dt) to mathematically justify why the voltage spike occurs."
  },
  {
    id: "ctrl-pwr-28",
    topicId: "core-ece",
    title: "What is a Phase-Controlled Rectifier? Name its types.",
    answer: {
      shortAnswer: "A phase-controlled rectifier converts AC to variable DC by controlling the firing angle (delay angle) of thyristors (SCRs).",
      detailedExplanation: "By delaying the point in the AC cycle where the SCR turns on (firing angle, α), the average DC output voltage can be varied. Types include half-wave, full-wave center-tapped, and full-bridge rectifiers. They can also be classified as semi-converters (mix of diodes and SCRs) and full-converters (all SCRs, capable of 2-quadrant operation).",
      interviewExplanation: "Explain that unlike a diode rectifier giving fixed DC, replacing diodes with SCRs gives variable DC. Define firing angle 'α'.",
      keyPoints: ["Converts fixed AC to variable DC", "Controls firing angle (α)", "Uses SCRs instead of diodes"],
      followUpQuestions: ["What is the difference between a semi-converter and a full-converter?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Know the formula for average output voltage of a single-phase full converter: Vdc = (2Vm/π) * cos(α)."
  },
  {
    id: "ctrl-pwr-29",
    topicId: "core-ece",
    title: "What is an Inverter? Differentiate between VSI and CSI.",
    answer: {
      shortAnswer: "An inverter converts DC power to AC power. A Voltage Source Inverter (VSI) is fed by a stiff DC voltage source, while a Current Source Inverter (CSI) is fed by a stiff DC current source.",
      detailedExplanation: "In a VSI, the input is a constant voltage (supported by a large parallel capacitor), and the output voltage waveform is independent of the load, while output current depends on the load. In a CSI, the input is a constant current (supported by a large series inductor), and the output current waveform is independent of the load, while output voltage depends on the load.",
      interviewExplanation: "Start with the basic definition of an inverter. Then contrast the input sources: VSI uses a capacitor for stiff voltage, CSI uses an inductor for stiff current. Mention that VSIs are more common (e.g., in UPS, motor drives).",
      keyPoints: ["DC to AC conversion", "VSI: Stiff DC voltage (capacitor)", "CSI: Stiff DC current (inductor)"],
      followUpQuestions: ["Why do VSIs require feedback diodes while CSIs do not (if devices have reverse blocking capability)?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Be prepared to draw a simple half-bridge or full-bridge VSI circuit."
  },
  {
    id: "ctrl-pwr-30",
    topicId: "core-ece",
    title: "Explain Pulse Width Modulation (PWM) in inverters.",
    answer: {
      shortAnswer: "PWM is a technique used in inverters to control the output voltage magnitude and reduce lower-order harmonics by rapidly switching the devices on and off at varying widths.",
      detailedExplanation: "Instead of generating a simple square wave, PWM compares a high-frequency carrier wave (usually triangular) with a reference signal (sine wave) to generate switching pulses. Sinusoidal PWM (SPWM) ensures that the pulse widths are proportional to the sine wave amplitude. This shifts harmonics to higher frequencies, making them easy to filter out.",
      interviewExplanation: "Focus on the two main goals of PWM: Output voltage control and harmonic reduction. Describe SPWM as comparing a sine wave with a triangular carrier wave.",
      keyPoints: ["Controls output AC voltage", "Reduces lower-order harmonics", "SPWM: compares sine ref with triangle carrier"],
      followUpQuestions: ["What is the Modulation Index in PWM?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Mention that shifting harmonics to high frequencies drastically reduces the size and cost of the required output LC filters."
  },
  {
    id: "ctrl-pwr-31",
    topicId: "core-ece",
    title: "What is a Chopper in Power Electronics?",
    answer: {
      shortAnswer: "A chopper is a static power electronic device that converts a fixed DC input voltage to a variable DC output voltage directly.",
      detailedExplanation: "It acts as a high-speed DC switch, operating at a specific duty cycle (D = Ton / T). By varying Ton (Pulse Width Modulation) or T (Frequency Modulation), the average output voltage is controlled. They are primarily used in DC motor speed control, battery chargers, and SMPS.",
      interviewExplanation: "Define it as a 'DC equivalent of an AC transformer'. Give the formula Vout = D * Vin for a step-down chopper. Mention its high efficiency compared to linear regulators.",
      keyPoints: ["Fixed DC to Variable DC", "Operates on duty cycle control", "Highly efficient"],
      followUpQuestions: ["Explain the working of a Step-Up (Boost) Chopper."]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Be clear on the terms Ton, Toff, T (total period), and Duty Cycle (Ton/T)."
  },
  {
    id: "ctrl-pwr-32",
    topicId: "core-ece",
    title: "Explain the operation of a Buck-Boost Converter.",
    answer: {
      shortAnswer: "A Buck-Boost converter is a DC-DC converter that can output a voltage either higher or lower than the input voltage, but with an inverted polarity.",
      detailedExplanation: "It uses a single switch, an inductor, and a diode. When the switch is ON, the input charges the inductor, and the diode blocks output. When the switch is OFF, the inductor discharges energy to the load through the diode. The output voltage is given by Vout = -Vin * (D / (1-D)). If D < 0.5, it steps down (buck); if D > 0.5, it steps up (boost).",
      interviewExplanation: "Highlight the inverted polarity of the output. Walk through the two states: Switch ON (inductor charges from source), Switch OFF (inductor discharges to load). State the transfer function formula.",
      keyPoints: ["Steps voltage up or down", "Inverts output polarity", "Vout = -Vin * [D / (1-D)]"],
      followUpQuestions: ["What is continuous vs discontinuous conduction mode in an inductor?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Numerical"],
    interviewTip: "Memorize the voltage transfer ratios for Buck, Boost, and Buck-Boost converters. Interviewers frequently ask for them."
  },
  {
    id: "ctrl-pwr-33",
    topicId: "core-ece",
    title: "What are the advantages of SMPS over Linear Power Supplies?",
    answer: {
      shortAnswer: "SMPS (Switched Mode Power Supply) offers significantly higher efficiency, smaller size, and lighter weight compared to linear power supplies.",
      detailedExplanation: "Linear supplies use a transformer operating at line frequency (50/60Hz) which is bulky, and regulate voltage by dissipating excess power as heat in a pass transistor (low efficiency). SMPS directly rectifies the mains, chops it at high frequency (10s to 100s of kHz), uses a much smaller high-frequency transformer, and regulates via PWM with almost no switching loss (efficiency >80-90%).",
      interviewExplanation: "Contrast them heavily. SMPS operates in the switch state (fully ON or fully OFF), minimizing power dissipation. The high frequency allows for tiny magnetic components. The trade-off is higher complexity and EMI noise.",
      keyPoints: ["High efficiency", "Small size and light weight", "High frequency operation (kHz)", "Produces more EMI noise"],
      followUpQuestions: ["Why does high frequency allow for a smaller transformer?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Always mention the trade-off: SMPS is better in size/efficiency, but worse in EMI/noise and complexity."
  },
  {
    id: "ctrl-pwr-34",
    topicId: "core-ece",
    title: "What is a Cycloconverter?",
    answer: {
      shortAnswer: "A cycloconverter is a direct AC-to-AC power converter that changes an input AC power at one frequency to an output AC power at a different (usually lower) frequency, without an intermediate DC link.",
      detailedExplanation: "It uses anti-parallel thyristor bridges. By intelligently controlling the firing angles of the positive and negative groups, a lower frequency envelope is constructed from the higher frequency input. They are typically used in very high power, low-speed AC motor drives (e.g., cement mills, ship propulsion).",
      interviewExplanation: "Stress that it is a 'direct' conversion (no DC link), unlike an inverter system. Point out its limitation: it can generally only step down the frequency (e.g., 50Hz to 16.6Hz).",
      keyPoints: ["Direct AC to AC conversion", "No DC link used", "Steps down frequency", "Used in high power, low-speed drives"],
      followUpQuestions: ["Why is it difficult for a cycloconverter to step up the frequency?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Differentiate it from an AC voltage controller, which changes AC voltage magnitude but keeps the frequency the same."
  },
  {
    id: "ctrl-pwr-35",
    topicId: "core-ece",
    title: "What is the purpose of a Snubber Circuit in power electronics?",
    answer: {
      shortAnswer: "A snubber circuit is used to protect semiconductor devices from electrical overstress by limiting the rate of rise of voltage (dv/dt) or current (di/dt).",
      detailedExplanation: "When power switches (like SCRs or transistors) turn off, stray inductance can cause a huge voltage spike (dv/dt), potentially causing false triggering or breakdown. An RC snubber across the device absorbs this energy. Similarly, an inductor in series limits di/dt during turn-on to prevent localized heating and device destruction.",
      interviewExplanation: "Explain it as a protection circuit. Focus on the two types: Turn-off snubbers (RC across the switch for dv/dt) and Turn-on snubbers (L in series for di/dt).",
      keyPoints: ["Protects switching devices", "RC snubber limits dv/dt", "Series inductor limits di/dt"],
      followUpQuestions: ["What causes dv/dt failure in an SCR?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Relate the snubber to the physical limitations of the devices; semiconductor junctions take time to clear carriers and cannot handle instant changes."
  },
  {
    id: "ctrl-pwr-36",
    topicId: "core-ece",
    title: "What is di/dt and dv/dt rating of an SCR?",
    answer: {
      shortAnswer: "di/dt rating is the maximum rate of rise of anode current the SCR can withstand without localized melting. dv/dt rating is the maximum rate of rise of anode-cathode voltage it can withstand without false triggering.",
      detailedExplanation: "When an SCR turns on, conduction starts in a small localized area of the junction. If current rises too fast (high di/dt), localized heating creates a 'hot spot' that destroys the device. If voltage rises too fast across an off-state SCR (high dv/dt), the junction capacitance (C*dv/dt) generates enough displacement current to act like a gate pulse, falsely turning it on.",
      interviewExplanation: "Explain the physical reasons. For di/dt, it's about localized heating (hot spots). For dv/dt, it's about the internal junction capacitance causing a false charging current.",
      keyPoints: ["di/dt: Avoids hot spot melting", "dv/dt: Avoids false triggering", "di/dt protected by series L", "dv/dt protected by parallel RC"],
      followUpQuestions: ["How does an RC snubber reduce dv/dt?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Linking the ratings to their respective protective circuits (Snubbers) shows a complete understanding."
  },
  {
    id: "ctrl-pwr-37",
    topicId: "core-ece",
    title: "Explain the concept of Total Harmonic Distortion (THD).",
    answer: {
      shortAnswer: "THD is a measure of the harmonic distortion present in a signal. It is the ratio of the RMS voltage (or current) of all harmonic components to the RMS voltage of the fundamental frequency.",
      detailedExplanation: "In power electronics (like inverters), we want a pure sine wave output. However, switching action creates harmonics (multiples of the fundamental frequency). THD quantifies this impurity. A lower THD indicates a waveform closer to a perfect sine wave. High THD causes heating in motors and interference in communication lines.",
      interviewExplanation: "Define it mathematically as sqrt(V2^2 + V3^2 + ...)/V1. Explain its practical impact: harmonics do no useful work but cause heating and losses.",
      keyPoints: ["Measures waveform distortion", "Ratio of harmonics to fundamental", "Lower THD is better"],
      followUpQuestions: ["How does PWM help in reducing THD?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Mention that IEEE standards strict limits on THD for grid-connected inverters (usually < 5%)."
  },
  {
    id: "ctrl-pwr-38",
    topicId: "core-ece",
    title: "What is an Uninterruptible Power Supply (UPS)? Offline vs Online UPS?",
    answer: {
      shortAnswer: "A UPS provides emergency power to a load when the input power source fails. An Online UPS powers the load continuously through its inverter, while an Offline UPS only switches to the inverter when mains power fails.",
      detailedExplanation: "In an Offline (Standby) UPS, the load runs directly on mains. When mains fails, a switch transfers the load to the battery/inverter, causing a slight switching delay (milliseconds). In an Online (Double Conversion) UPS, the mains rectifies to DC to charge the battery, and the inverter continuously converts this DC back to AC for the load. There is zero transfer time, providing maximum protection.",
      interviewExplanation: "Differentiate them by the primary power path. Online = Mains -> Rectifier -> Battery -> Inverter -> Load. Offline = Mains -> Load (Inverter acts as backup only). Online is more expensive but safer for critical equipment.",
      keyPoints: ["Provides backup power", "Online: Zero transfer time, always on inverter", "Offline: Has transfer delay, normally on mains"],
      followUpQuestions: ["Why is Online UPS called 'Double Conversion'?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Use the term 'Double Conversion' for Online UPS to show industry knowledge."
  },
  {
    id: "ctrl-pwr-39",
    topicId: "core-ece",
    title: "What is Soft Switching in Power Electronics?",
    answer: {
      shortAnswer: "Soft switching refers to techniques (ZVS or ZCS) where power semiconductor devices are turned on or off when the voltage across them or the current through them is zero.",
      detailedExplanation: "In hard switching, switches open/close while both voltage and current are present, causing significant power loss (P = V*I) and EMI. Zero Voltage Switching (ZVS) and Zero Current Switching (ZCS) utilize resonant LC circuits to shape the waveforms so that either V or I is zero during the transition. This drastically reduces switching losses, allowing for much higher switching frequencies.",
      interviewExplanation: "Explain the problem with hard switching (switching losses at high frequency). Introduce ZVS and ZCS as solutions that use resonance to 'soften' the transition.",
      keyPoints: ["Zero Voltage Switching (ZVS)", "Zero Current Switching (ZCS)", "Reduces switching losses", "Allows higher frequency operation"],
      followUpQuestions: ["What is a resonant converter?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "This is a key concept in modern, highly efficient, high-density power supplies."
  },
  {
    id: "ctrl-pwr-40",
    topicId: "core-ece",
    title: "Explain the working of a Single Phase Half-Wave Rectifier with an R-L load.",
    answer: {
      shortAnswer: "During the positive half cycle, the diode conducts. However, due to the inductor (L), current continues to flow even into the negative half cycle until the stored inductive energy dissipates, making the output voltage negative for a brief period.",
      detailedExplanation: "The inductor opposes sudden changes in current. When the supply voltage crosses zero and goes negative, the inductor's back EMF keeps the diode forward-biased for an angle 'β' (extinction angle). This results in a negative portion of the output voltage waveform, reducing the average DC output voltage compared to a pure resistive load.",
      interviewExplanation: "This is a classic question. The key is to mention that the inductor forces the diode to stay ON past the 180-degree mark. Mention that a freewheeling diode is the solution to prevent this negative voltage.",
      keyPoints: ["Inductor stores energy", "Diode conducts into negative cycle", "Average output voltage decreases", "Solved by freewheeling diode"],
      followUpQuestions: ["How does a freewheeling diode modify this behavior?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Visualizing or drawing the voltage and current waveforms is the best way to explain this."
  },

  // --- Measurements & Instrumentation (20 Questions) ---
  {
    id: "ctrl-pwr-41",
    topicId: "core-ece",
    title: "What is the difference between Accuracy and Precision?",
    answer: {
      shortAnswer: "Accuracy is how close a measured value is to the true or accepted value. Precision is how close repeated measurements are to each other.",
      detailedExplanation: "A highly accurate instrument will give a reading very close to the standard value. A highly precise instrument will give the exact same reading if measured 10 times, even if that reading is entirely wrong. High precision does not guarantee high accuracy, and vice versa. An ideal instrument requires both.",
      interviewExplanation: "Use the classic 'dartboard' analogy. Accuracy is hitting the bullseye. Precision is hitting the same spot repeatedly, even if it's off the bullseye.",
      keyPoints: ["Accuracy: Closeness to true value", "Precision: Repeatability/Consistency", "Can be precise but not accurate"],
      followUpQuestions: ["Can a measurement be accurate but not precise?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "The dartboard analogy is universally understood; use it immediately."
  },
  {
    id: "ctrl-pwr-42",
    topicId: "core-ece",
    title: "Define Resolution and Sensitivity of an instrument.",
    answer: {
      shortAnswer: "Resolution is the smallest change in the measured quantity that the instrument can detect. Sensitivity is the ratio of the change in output to the change in input.",
      detailedExplanation: "For a digital multimeter, if the last digit represents 1 mV, its resolution is 1 mV. Sensitivity is a measure of the instrument's response; for an analog voltmeter, it is expressed in Ohms/Volt, indicating how much deflection occurs for a given voltage change.",
      interviewExplanation: "Resolution is about the 'smallest step' you can see. Sensitivity is the 'gain' of the instrument (output over input). Mention that higher sensitivity usually means less loading effect in voltmeters.",
      keyPoints: ["Resolution: Smallest detectable change", "Sensitivity: ΔOutput / ΔInput", "High sensitivity = low loading effect"],
      followUpQuestions: ["How is the sensitivity of a voltmeter related to its internal resistance?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Don't mix up resolution (smallest unit) with accuracy (correctness)."
  },
  {
    id: "ctrl-pwr-43",
    topicId: "core-ece",
    title: "What are the different types of Measurement Errors?",
    answer: {
      shortAnswer: "Measurement errors are classified into three types: Gross errors, Systematic errors, and Random errors.",
      detailedExplanation: "Gross errors are human mistakes (misreading, wrong connections). Systematic errors are consistent issues due to the instrument (calibration error), environment (temperature changes), or observation (parallax error). Random errors are unpredictable fluctuations that occur even when gross and systematic errors are removed, handled via statistical analysis.",
      interviewExplanation: "List the three main categories. Give a quick example for each: Human reading error for Gross, uncalibrated scale for Systematic, and unexplained noise for Random.",
      keyPoints: ["Gross: Human mistakes", "Systematic: Instrument/Environmental/Observational", "Random: Unpredictable, handled statistically"],
      followUpQuestions: ["How do you minimize systematic errors?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked"],
    interviewTip: "Mention that Systematic errors can be eliminated by calibration, but Random errors can only be minimized by averaging multiple readings."
  },
  {
    id: "ctrl-pwr-44",
    topicId: "core-ece",
    title: "Explain the Loading Effect in a Voltmeter.",
    answer: {
      shortAnswer: "Loading effect occurs when a voltmeter draws current from the circuit it is measuring, altering the circuit's original voltage and causing a lower reading.",
      detailedExplanation: "A voltmeter is connected in parallel with a component to measure voltage. If the voltmeter's internal resistance is not infinitely high, it acts as a parallel resistor, drawing current and dropping the equivalent resistance of that branch. This changes the voltage distribution in the circuit. To minimize this, voltmeters must have very high sensitivity (high internal resistance).",
      interviewExplanation: "Explain it as the instrument interfering with the circuit it's trying to measure. High resistance circuits are most susceptible to this. State that an ideal voltmeter has infinite resistance.",
      keyPoints: ["Voltmeter draws current", "Alters original circuit behavior", "Higher internal resistance reduces loading"],
      followUpQuestions: ["What is the ideal resistance for an ammeter? (Ans: Zero)"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Give a quick example: Measuring voltage across a 1MΩ resistor with a 1MΩ internal resistance voltmeter will cut the actual voltage in half."
  },
  {
    id: "ctrl-pwr-45",
    topicId: "core-ece",
    title: "What is the difference between an Active and a Passive Transducer?",
    answer: {
      shortAnswer: "Active transducers generate their own output electrical signal (voltage/current) without needing external power. Passive transducers require an external power supply to produce an output signal.",
      detailedExplanation: "Active (self-generating) transducers operate on energy conversion principles, like a thermocouple (heat to voltage) or piezoelectric crystal (force to voltage). Passive transducers, like an RTD or strain gauge, only change a passive parameter (resistance, capacitance) in response to a stimulus, requiring an external bridge circuit and power source to measure that change.",
      interviewExplanation: "Focus on the requirement of external power. Active = Self-generating. Passive = Needs external excitation.",
      keyPoints: ["Active: Self-generating, no external power", "Passive: Requires external excitation", "Examples: Thermocouple (Active), Strain Gauge (Passive)"],
      followUpQuestions: ["Give an example of an active transducer used for measuring light. (Ans: Photovoltaic cell)"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always back up the definitions with concrete examples."
  },
  {
    id: "ctrl-pwr-46",
    topicId: "core-ece",
    title: "Explain the working principle of an LVDT.",
    answer: {
      shortAnswer: "LVDT (Linear Variable Differential Transformer) is an inductive passive transducer that measures linear displacement based on mutual induction.",
      detailedExplanation: "It consists of a primary coil flanked by two secondary coils wound in series opposition. An AC excitation is applied to the primary. A movable magnetic core links the flux to the secondaries. When the core is centered, induced voltages in secondaries cancel out (null output). When moved, one secondary gets more flux than the other, producing an AC output voltage proportional to the core's displacement.",
      interviewExplanation: "Break down the name: 'Linear' (measures straight movement), 'Variable Differential Transformer' (uses a primary, two opposing secondaries, and a moving core). Note that the output is an AC signal that requires a phase-sensitive demodulator to determine direction.",
      keyPoints: ["Linear displacement measurement", "Primary and two opposing secondaries", "Moving magnetic core", "Output voltage proportional to displacement"],
      followUpQuestions: ["What happens at the 'null position' of an LVDT?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Mention that LVDTs are highly reliable and frictionless since there is no physical contact between the core and the coils."
  },
  {
    id: "ctrl-pwr-47",
    topicId: "core-ece",
    title: "What is a Strain Gauge and what is the Piezoresistive Effect?",
    answer: {
      shortAnswer: "A strain gauge is a passive transducer that measures mechanical strain. It works on the piezoresistive effect, where the electrical resistance of a material changes when it is mechanically deformed.",
      detailedExplanation: "When a metal wire or semiconductor is stretched, it becomes longer and thinner, increasing its resistance (R = ρL/A). The Gauge Factor (GF) relates the fractional change in resistance to the mechanical strain (GF = (ΔR/R) / (ΔL/L)). They are usually mounted in a Wheatstone bridge configuration to detect the minute changes in resistance.",
      interviewExplanation: "Explain the formula R = ρL/A. Stretching increases length and decreases area, both causing resistance to go up. Introduce 'Gauge Factor' as a measure of its sensitivity.",
      keyPoints: ["Measures mechanical strain", "Relies on change in dimensions (L and A)", "Gauge Factor indicates sensitivity", "Used in Wheatstone bridge"],
      followUpQuestions: ["What is a dummy strain gauge, and why is it used? (Ans: For temperature compensation)"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Semiconductor strain gauges have a much higher gauge factor than metallic ones, but are highly temperature sensitive."
  },
  {
    id: "ctrl-pwr-48",
    topicId: "core-ece",
    title: "Explain the working of a Thermocouple.",
    answer: {
      shortAnswer: "A thermocouple is an active temperature transducer based on the Seebeck effect: when two dissimilar metals are joined at two junctions kept at different temperatures, a small voltage is generated.",
      detailedExplanation: "The generated electromotive force (EMF) is proportional to the temperature difference between the hot (measuring) junction and the cold (reference) junction. To get an accurate reading, the cold junction must be kept at a known reference temperature (like 0°C) or compensated for electronically (Cold Junction Compensation).",
      interviewExplanation: "Mention the 'Seebeck effect' explicitly. Emphasize that it requires *two* dissimilar metals and *two* junctions. Point out the necessity of Cold Junction Compensation in modern digital meters.",
      keyPoints: ["Active transducer", "Based on Seebeck effect", "Two dissimilar metals, two junctions", "Requires Cold Junction Compensation"],
      followUpQuestions: ["What are the Peltier and Thomson effects?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Mention common types, like Type K (Chromel-Alumel), which is wide-ranging and inexpensive."
  },
  {
    id: "ctrl-pwr-49",
    topicId: "core-ece",
    title: "What is the Piezoelectric Effect?",
    answer: {
      shortAnswer: "The piezoelectric effect is the generation of an electrical charge across certain materials (like Quartz) when mechanical stress is applied to them.",
      detailedExplanation: "It is an active transducer principle used for measuring dynamic force, pressure, or acceleration. It only works for dynamic (changing) measurements, not static, because the generated charge quickly leaks away through the measuring circuit. The effect is reversible; applying a voltage causes the material to physically deform (used in ultrasonic transmitters).",
      interviewExplanation: "State that mechanical stress produces voltage. Highlight a critical limitation: it cannot measure static (constant) forces. Mention Quartz as the most common natural piezoelectric crystal.",
      keyPoints: ["Mechanical stress generates voltage", "Reversible effect", "Only measures dynamic (changing) inputs", "Quartz is a common material"],
      followUpQuestions: ["Why can't piezoelectric transducers measure static force?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Knowing that it only measures dynamic/varying signals is the key differentiator for this transducer."
  },
  {
    id: "ctrl-pwr-50",
    topicId: "core-ece",
    title: "Compare RTD and Thermistor for temperature measurement.",
    answer: {
      shortAnswer: "RTDs (Resistance Temperature Detectors) use pure metals (like Platinum) and have a positive temperature coefficient with high linearity. Thermistors use semiconductor ceramics and usually have a highly non-linear negative temperature coefficient.",
      detailedExplanation: "RTDs (e.g., PT100) are very stable, accurate, and linear over a wide temperature range, making them industry standards. However, they have low sensitivity. Thermistors are extremely sensitive (large resistance change for small temp change) and fast-acting, but they are highly non-linear and suitable only for narrow temperature ranges.",
      interviewExplanation: "Contrast them on three points: Material (Metal vs Semiconductor), Temperature Coefficient (Positive vs usually Negative), and Characteristic (Linear/Stable vs Non-linear/Sensitive).",
      keyPoints: ["RTD: Metal (Platinum), Positive TC, Linear, Stable", "Thermistor: Ceramic, Negative TC, Non-linear, Highly sensitive"],
      followUpQuestions: ["What does 'PT100' mean? (Ans: Platinum RTD with 100 ohms resistance at 0°C)"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Important"],
    interviewTip: "If you want high accuracy over a wide range, use an RTD. If you want to detect a tiny temperature shift quickly in a small device, use a Thermistor."
  },
  {
    id: "ctrl-pwr-51",
    topicId: "core-ece",
    title: "What is a Wheatstone Bridge and what is it used for?",
    answer: {
      shortAnswer: "A Wheatstone bridge is a circuit with four resistive arms used to measure an unknown electrical resistance by balancing two legs of a bridge circuit.",
      detailedExplanation: "It consists of a voltage source, a galvanometer, two known ratio resistors, one known variable resistor, and the unknown resistor. When the bridge is 'balanced' (galvanometer reads zero), the ratio of the resistances in the two parallel branches is equal (R1/R2 = R3/Rx). It is highly accurate for measuring medium resistances (1 ohm to 100 k-ohms).",
      interviewExplanation: "Explain the balance condition: cross-multiplication of opposite arm resistances are equal. Emphasize that it's a 'null deflection' method, making it highly accurate regardless of the source voltage fluctuations.",
      keyPoints: ["Measures medium unknown resistance", "Null deflection method (highly accurate)", "Balance condition: R1*Rx = R2*R3"],
      followUpQuestions: ["Why is a Wheatstone bridge unsuitable for measuring very low resistances? (Ans: Lead and contact resistances cause significant error)"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Understand the 'null' measurement concept—the measurement is taken when no current flows through the meter, removing meter loading effects."
  },
  {
    id: "ctrl-pwr-52",
    topicId: "core-ece",
    title: "Which bridge is used to measure very low resistances?",
    answer: {
      shortAnswer: "Kelvin's Double Bridge is used for measuring very low resistances (less than 1 ohm).",
      detailedExplanation: "A standard Wheatstone bridge gives inaccurate results for low resistances because the resistance of the connecting leads and contacts becomes significant. Kelvin's Double Bridge overcomes this by using a second set of ratio arms to compensate for the lead and contact resistances, allowing accurate measurement down to micro-ohms.",
      interviewExplanation: "Identify the problem with Wheatstone (lead resistance). Introduce Kelvin's Double Bridge as the specific solution that mathematically cancels out lead resistance.",
      keyPoints: ["Used for very low resistance (< 1 ohm)", "Overcomes lead and contact resistance errors", "Uses a second set of ratio arms"],
      followUpQuestions: ["How does an ohmmeter differ from a bridge circuit?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Remember the resistance ranges: Kelvin (Low < 1Ω), Wheatstone (Medium 1Ω-100kΩ), Megger (High > 100kΩ)."
  },
  {
    id: "ctrl-pwr-53",
    topicId: "core-ece",
    title: "Name the AC bridges used for measuring Inductance.",
    answer: {
      shortAnswer: "Maxwell's Inductance-Capacitance Bridge, Hay's Bridge, and Anderson's Bridge are primarily used for measuring inductance.",
      detailedExplanation: "Maxwell's bridge measures unknown inductance in terms of a known capacitance, ideal for medium Q coils (1 < Q < 10). Hay's bridge is a modification of Maxwell's, used for high Q coils (Q > 10). Anderson's bridge is a more complex 5-node bridge that provides very accurate measurement over a wide range of inductance.",
      interviewExplanation: "List the bridges and match them with their specific use cases regarding the Quality Factor (Q) of the coil.",
      keyPoints: ["Maxwell's Bridge: Medium Q coils (1 < Q < 10)", "Hay's Bridge: High Q coils (Q > 10)", "Anderson's Bridge: Accurate over wide range"],
      followUpQuestions: ["Why does Maxwell's bridge fail for high Q coils?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Knowing the Q-factor ranges for Maxwell vs Hay is a very common objective-type question."
  },
  {
    id: "ctrl-pwr-54",
    topicId: "core-ece",
    title: "What is a Schering Bridge used for?",
    answer: {
      shortAnswer: "The Schering bridge is an AC bridge used for measuring unknown capacitance, dielectric loss, and relative permittivity of insulating materials.",
      detailedExplanation: "It is widely used in high-voltage testing of cables and insulators. By balancing the bridge, one can find the equivalent series resistance and capacitance of a capacitor, which directly yields the dissipation factor (tan delta). A high dissipation factor indicates a deteriorating dielectric.",
      interviewExplanation: "Associate Schering Bridge directly with Capacitance and Insulators. Mention its practical application in checking the health of high-voltage cables via dielectric loss (tan delta) measurement.",
      keyPoints: ["Measures unknown capacitance", "Measures dielectric loss (tan delta)", "Used for high-voltage cable testing"],
      followUpQuestions: ["What does a high tan delta value signify in a capacitor?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Just as Maxwell is for Inductance, remember Schering is for Capacitance."
  },
  {
    id: "ctrl-pwr-55",
    topicId: "core-ece",
    title: "Explain the basic working blocks of a CRO (Cathode Ray Oscilloscope).",
    answer: {
      shortAnswer: "A CRO displays fast-changing electrical signals. Its main blocks are the Cathode Ray Tube (CRT), Vertical Amplifier, Horizontal Amplifier, Time Base Generator, and Trigger Circuit.",
      detailedExplanation: "The CRT generates a focused electron beam that hits a phosphor screen. The signal to be measured goes through the Vertical Amplifier to the Y-deflection plates. The Time Base Generator creates a sawtooth wave (sweep) applied to the X-deflection plates, sweeping the beam left to right at a constant speed. The Trigger circuit synchronizes the sweep with the input signal to provide a stable display.",
      interviewExplanation: "Walk through the signal path. The Y-axis represents the input voltage, the X-axis represents time (generated internally). Emphasize the role of the Trigger circuit in making the moving wave appear stationary.",
      keyPoints: ["CRT: Generates electron beam", "Vertical amp: Processes input signal (Y-axis)", "Time Base: Generates internal sweep (X-axis)", "Trigger: Synchronizes for stable display"],
      followUpQuestions: ["What is the purpose of the Aquadag coating in a CRT?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Understanding the trigger mechanism is crucial; without it, the waveforms would continuously drift across the screen."
  },
  {
    id: "ctrl-pwr-56",
    topicId: "core-ece",
    title: "What are Lissajous Figures and how are they useful?",
    answer: {
      shortAnswer: "Lissajous figures are patterns created on an oscilloscope screen when two sinusoidal signals are applied simultaneously to the X and Y deflection plates (XY mode).",
      detailedExplanation: "By analyzing the shape of the Lissajous figure (circle, ellipse, line, complex loops), one can determine the phase difference and frequency ratio between the two signals. If frequencies are equal, a straight line indicates 0° or 180° phase difference, while a circle indicates a 90° phase difference. Frequency ratio is found by counting horizontal vs vertical tangencies.",
      interviewExplanation: "Explain how to set up the CRO (XY mode, disable time base). Detail the two main applications: finding phase difference and finding unknown frequency (by comparing it to a known frequency).",
      keyPoints: ["Formed in XY mode of CRO", "Determines phase difference between two signals", "Determines frequency ratio"],
      followUpQuestions: ["What pattern appears if two signals have a 1:2 frequency ratio and 0 phase shift?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Be prepared to state that an ellipse crossing the Y-axis at Y1 and having max height Y2 has a phase angle given by sin(θ) = Y1/Y2."
  },
  {
    id: "ctrl-pwr-57",
    topicId: "core-ece",
    title: "Compare Analog CRO with Digital Storage Oscilloscope (DSO).",
    answer: {
      shortAnswer: "An analog CRO displays signals in real-time using an electron beam and phosphor persistence. A DSO digitally samples the input, stores it in memory, and then reconstructs the waveform on an LCD screen.",
      detailedExplanation: "A CRO struggles to capture single-shot or very low-frequency events because the phosphor fades quickly. A DSO uses an ADC to digitize the signal, allowing it to store waveforms indefinitely, perform complex math operations (like FFT), capture pre-trigger data, and easily export data to a computer. DSOs are limited by their sampling rate and memory depth.",
      interviewExplanation: "Focus on the storage aspect. Analog relies on physical phosphor glow; Digital relies on ADC and RAM. Highlight the DSO's ability to 'pause' and analyze a waveform after it has occurred.",
      keyPoints: ["CRO: Real-time, phosphor persistence", "DSO: Samples, digitizes, stores in memory", "DSO can capture single-shot events", "DSO allows signal processing (FFT)"],
      followUpQuestions: ["What is aliasing in a DSO and how is it prevented?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Mention the Nyquist criterion; a DSO must sample at least twice the frequency of the highest frequency component of the signal to avoid aliasing."
  },
  {
    id: "ctrl-pwr-58",
    topicId: "core-ece",
    title: "What is the working principle of a Hall Effect Sensor?",
    answer: {
      shortAnswer: "The Hall Effect principle states that when a current-carrying conductor or semiconductor is placed in a perpendicular magnetic field, a voltage (Hall voltage) is generated transverse to both the current and the magnetic field.",
      detailedExplanation: "The magnetic field exerts a Lorentz force on the moving charge carriers, pushing them to one side of the material. This charge separation creates an electric field and a measurable Hall voltage. Hall sensors are widely used as non-contact proximity sensors, position sensors, and for measuring magnetic fields or DC currents (in clamp meters).",
      interviewExplanation: "Explain the three perpendicular axes: Current (X), Magnetic Field (Y), resulting Hall Voltage (Z). Emphasize its use as a non-contact, solid-state sensor.",
      keyPoints: ["Current and magnetic field are perpendicular", "Voltage generated mutually perpendicular to both", "Used for non-contact position/current sensing"],
      followUpQuestions: ["Why are semiconductors preferred over metals for Hall effect sensors? (Ans: Higher Hall coefficient, giving larger voltage)"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Hall effect sensors are standard in modern automotive systems for wheel speed (ABS) and engine position sensing."
  },
  {
    id: "ctrl-pwr-59",
    topicId: "core-ece",
    title: "Explain the working of a Q-meter.",
    answer: {
      shortAnswer: "A Q-meter measures the Quality Factor (Q) of a coil or capacitor based on the principle of series resonance.",
      detailedExplanation: "At series resonance (XL = XC), the voltage across the capacitor or inductor is 'Q' times the applied input voltage (Voltage Magnification). By injecting a known small voltage into a resonant tank circuit containing the test component and tuning it to resonance, an internally calibrated electronic voltmeter measures the capacitor voltage and displays it directly as the Q-factor.",
      interviewExplanation: "Connect it to the concept of 'Voltage Magnification' in series resonance. It's essentially an oscillator, a known tuning capacitor, and a highly sensitive voltmeter.",
      keyPoints: ["Measures Quality Factor", "Based on series resonance", "Relies on voltage magnification (Vc = Q * Vin)"],
      followUpQuestions: ["What are the sources of error in a Q-meter? (Ans: Distributed capacitance of the coil, shunt resistance of the voltmeter)"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Remember: Series resonance = Voltage magnification (Q-meter principle). Parallel resonance = Current magnification."
  },
  {
    id: "ctrl-pwr-60",
    topicId: "core-ece",
    title: "What is an Instrumentation Amplifier and what are its key features?",
    answer: {
      shortAnswer: "An instrumentation amplifier is a specialized differential amplifier used to measure very small signals in noisy environments. Its key features are extremely high input impedance and very high Common Mode Rejection Ratio (CMRR).",
      detailedExplanation: "It usually consists of three op-amps: two non-inverting buffers at the input (providing high input impedance) and a differential amplifier at the output. The gain can be easily adjusted using a single external resistor. Because it amplifies only the difference between two inputs, it successfully rejects common-mode noise (like 50Hz mains hum) picked up by long sensor cables.",
      interviewExplanation: "Contrast it with a standard op-amp. It's designed specifically for interfacing with transducers (like Wheatstone bridges). Emphasize high CMRR and the ability to change gain with a single resistor.",
      keyPoints: ["3 op-amp design", "Extremely high input impedance", "High CMRR (rejects noise)", "Gain set by a single resistor"],
      followUpQuestions: ["What is Common Mode Rejection Ratio (CMRR)?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "In medical electronics (like ECG) or industrial sensor networks, instrumentation amplifiers are absolutely mandatory due to electrical noise."
  }
];
