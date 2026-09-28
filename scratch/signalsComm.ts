import type { Question } from '../src/types';

export const signalsCommQuestions: Question[] = [
  {
    id: "sig-comm-1",
    topicId: "core-ece",
    title: "What is the difference between Energy and Power signals?",
    answer: {
      shortAnswer: "Energy signals have finite energy and zero average power, while power signals have finite average power and infinite energy.",
      detailedExplanation: "In signal processing, signals are classified based on their total energy and average power over time. An energy signal has finite total energy (0 < E < ∞) and consequently zero average power. These are typically non-periodic, transient signals like a single pulse. A power signal has finite average power (0 < P < ∞) and infinite energy. These are typically periodic signals or random signals that exist for all time.",
      interviewExplanation: "I would explain that energy signals are finite in duration or decay over time, making their total energy computable and finite. Power signals go on forever, so their total energy is infinite, but their power (energy per unit time) is constant. A classic example of an energy signal is a rectangular pulse, while a sine wave is a power signal.",
      keyPoints: ["Energy signals: 0 < E < ∞, P = 0", "Power signals: 0 < P < ∞, E = ∞", "A signal cannot be both simultaneously"],
      example: "Unit step function is a power signal. A decaying exponential is an energy signal.",
      followUpQuestions: ["Can a signal be neither an energy nor a power signal?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always be ready to classify a given mathematical function like e^(-at)u(t) or sin(wt) as energy or power."
  },
  {
    id: "sig-comm-2",
    topicId: "core-ece",
    title: "Explain the concept of a Linear Time-Invariant (LTI) system.",
    answer: {
      shortAnswer: "An LTI system satisfies both the superposition principle (linearity) and time-invariance (a time shift in input causes an identical shift in output).",
      detailedExplanation: "LTI systems are fundamental because they can be completely characterized by their impulse response. Linearity means the system obeys superposition and homogeneity: if input x1 yields y1 and x2 yields y2, then a*x1 + b*x2 yields a*y1 + b*y2. Time-invariance means that if input x(t) yields y(t), then x(t-T) yields y(t-T). Because of these two properties, the output of an LTI system to any input can be found using convolution.",
      interviewExplanation: "I would define the two components separately: linearity allows us to break complex signals into simpler parts, process them, and sum the results. Time invariance means the system's behavior doesn't change over time. Together, they allow us to use powerful tools like convolution and Fourier/Laplace transforms to analyze the system.",
      keyPoints: ["Linearity = Superposition + Homogeneity", "Time-invariance = shift in input equals shift in output", "Completely characterized by impulse response h(t)"],
      followUpQuestions: ["How do you determine if a system defined by a differential equation is LTI?", "Is y(t) = t*x(t) an LTI system?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Memorize the counter-examples. Multiplying by 't' breaks time-invariance. Adding a constant breaks linearity."
  },
  {
    id: "sig-comm-3",
    topicId: "core-ece",
    title: "What is the physical significance of the Convolution Integral?",
    answer: {
      shortAnswer: "Convolution mathematically expresses how a system modifies an input signal, representing the output as a weighted sum of shifted impulse responses.",
      detailedExplanation: "Physically, convolution represents the overlapping and blending of two signals. In the context of LTI systems, any input signal can be viewed as a continuum of scaled and shifted impulses. The system responds to each impulse with a scaled and shifted impulse response. The convolution integral sums up all these overlapping responses to produce the final output.",
      interviewExplanation: "Think of convolution as the system's memory. When an input enters a system, its effect doesn't disappear instantly; it lingers according to the impulse response. The current output is the sum of the current input's effect and the lingering effects of all past inputs.",
      keyPoints: ["Represents output of LTI system", "y(t) = x(t) * h(t)", "Involves folding, shifting, multiplying, and integrating"],
      followUpQuestions: ["What is the difference between linear and circular convolution?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Use the 'flip and drag' visualization to explain how it works mathematically and physically."
  },
  {
    id: "sig-comm-4",
    topicId: "core-ece",
    title: "What is the difference between Linear and Circular Convolution?",
    answer: {
      shortAnswer: "Linear convolution applies to infinite or aperiodic sequences, while circular convolution applies to periodic sequences and is typically computed using DFT/FFT.",
      detailedExplanation: "Linear convolution of two sequences of lengths N1 and N2 results in a sequence of length N1+N2-1. It assumes the signals are zero outside their defined range. Circular convolution is performed over a fixed block size N, treating the sequences as periodic. If N >= N1+N2-1, circular convolution can be used to compute linear convolution by zero-padding the sequences.",
      interviewExplanation: "I would explain that linear convolution is the natural operation in the time domain for LTI systems. Circular convolution arises when we perform multiplication in the discrete frequency domain (DFT). To make them equivalent, we must use zero-padding.",
      keyPoints: ["Linear length = N1+N2-1", "Circular operates on periodic/wrapped signals", "DFT multiplication corresponds to circular convolution"],
      followUpQuestions: ["How do you use circular convolution to perform linear convolution?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical", "Numerical"],
    interviewTip: "Be prepared to solve a quick 4-point circular convolution using the matrix method or concentric circle method."
  },
  {
    id: "sig-comm-5",
    topicId: "core-ece",
    title: "Explain the Dirichlet Conditions for Fourier Series.",
    answer: {
      shortAnswer: "Dirichlet conditions are sufficient conditions for a periodic signal to have a convergent Fourier Series.",
      detailedExplanation: "For a periodic function f(t) to have a valid Fourier series representation, it must satisfy three Dirichlet conditions over one period: 1) It must be absolutely integrable. 2) It must have a finite number of maxima and minima. 3) It must have a finite number of finite discontinuities. If these are met, the series converges to f(t) at continuous points, and to the average of the left and right limits at discontinuities.",
      interviewExplanation: "Dirichlet conditions guarantee that we can perfectly reconstruct a signal using sinusoids. If a signal has infinite discontinuities or infinite oscillations in a finite time, the Fourier coefficients won't converge.",
      keyPoints: ["Absolutely integrable", "Finite maxima and minima", "Finite discontinuities"],
      example: "A square wave meets these conditions, hence can be represented by a Fourier Series.",
      followUpQuestions: ["Are Dirichlet conditions necessary or just sufficient?", "What is Gibbs Phenomenon?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Conceptual"],
    interviewTip: "Emphasize that these conditions are sufficient but not strictly necessary for convergence."
  },
  {
    id: "sig-comm-6",
    topicId: "core-ece",
    title: "What is the Duality property of the Fourier Transform?",
    answer: {
      shortAnswer: "Duality states that if the Fourier transform of x(t) is X(f), then the Fourier transform of X(t) is x(-f).",
      detailedExplanation: "The duality property highlights the mathematical symmetry between the time and frequency domains in the Fourier Transform equations. Because the forward and inverse transform formulas are almost identical (differing only by a sign in the exponent), exchanging the time and frequency variables allows us to easily find the transform of signals that look like frequency spectra.",
      interviewExplanation: "I usually mention duality as a time-saver. For instance, we know a rectangular pulse in time gives a sinc function in frequency. By duality, a sinc function in time gives a rectangular pulse in frequency (an ideal low-pass filter).",
      keyPoints: ["Symmetry between time and frequency domains", "x(t) <--> X(f) means X(t) <--> x(-f)", "Saves time in calculating complex transforms"],
      followUpQuestions: ["How does duality apply to an impulse function?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Important"],
    interviewTip: "Use the rectangular/sinc example to immediately demonstrate you understand its practical utility."
  },
  {
    id: "sig-comm-7",
    topicId: "core-ece",
    title: "Why do we need the Laplace Transform when we already have the Fourier Transform?",
    answer: {
      shortAnswer: "The Laplace Transform handles a broader class of signals (including unstable ones) that do not converge in the Fourier Transform by introducing a damping factor.",
      detailedExplanation: "The Fourier Transform evaluates signals using purely imaginary exponentials (e^jωt), which requires the signal to be absolutely integrable. Many practical signals (like ramp functions, or exponentially growing signals) fail this. The Laplace Transform uses a complex variable s = σ + jω. The real part (σ) acts as an exponential decay factor (e^-σt) that forces the integral to converge. Furthermore, Laplace makes it easier to solve differential equations with initial conditions.",
      interviewExplanation: "I'd explain that Fourier is a subset of Laplace. Laplace evaluates a signal on the entire complex s-plane, giving us the Region of Convergence (ROC) and making stability analysis possible, while Fourier only evaluates on the imaginary axis (jω).",
      keyPoints: ["s = σ + jω (σ is damping factor)", "Analyzes unstable systems", "Solves ODEs with initial conditions"],
      followUpQuestions: ["How do you obtain the Fourier Transform from the Laplace Transform?", "What does the Region of Convergence signify?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Always mention the Region of Convergence (ROC) and initial conditions when comparing Laplace to Fourier."
  },
  {
    id: "sig-comm-8",
    topicId: "core-ece",
    title: "Explain the Region of Convergence (ROC) in Laplace and Z-Transforms.",
    answer: {
      shortAnswer: "The ROC is the set of values in the complex plane (s-plane or z-plane) for which the transform integral or sum converges to a finite value.",
      detailedExplanation: "In the Laplace Transform, the ROC consists of vertical strips in the s-plane. In the Z-transform, the ROC consists of concentric rings in the z-plane. The ROC is crucial because a rational transfer function does not uniquely identify a system; the ROC determines whether the system is causal, anti-causal, or two-sided, and whether it is stable.",
      interviewExplanation: "A transform without an ROC is incomplete. For instance, the z-transform of a causal exponential and an anti-causal exponential can have the exact same algebraic expression, but their ROCs will be different. For stability, the ROC must include the jω axis in Laplace or the unit circle in Z-transform.",
      keyPoints: ["ROC determines causality and stability", "Laplace ROC: Vertical strips", "Z-Transform ROC: Concentric rings"],
      followUpQuestions: ["What is the ROC of a finite duration sequence?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Draw a quick mental or physical sketch of the s-plane and z-plane when explaining ROC."
  },
  {
    id: "sig-comm-9",
    topicId: "core-ece",
    title: "How do you determine system stability from the Transfer Function?",
    answer: {
      shortAnswer: "A system is stable if all poles of its transfer function lie in the left half of the s-plane (continuous) or inside the unit circle of the z-plane (discrete).",
      detailedExplanation: "For a Continuous-Time LTI system to be Bounded-Input Bounded-Output (BIBO) stable, its impulse response must be absolutely integrable. In the Laplace domain, this means the ROC must include the jω-axis. For causal systems, this translates to all poles having negative real parts (left half-plane). For Discrete-Time causal systems, the ROC must include the unit circle, meaning all poles must have a magnitude less than 1 (inside the unit circle).",
      interviewExplanation: "Stability is all about where the poles are located. In continuous systems, if a pole has a positive real part, it represents an exponentially growing term in the time domain, which is unstable. In discrete systems, if a pole's magnitude is greater than 1, it also grows unboundedly.",
      keyPoints: ["Continuous causal: Poles in Left Half Plane (LHP)", "Discrete causal: Poles inside unit circle (|z| < 1)", "BIBO stability requires ROC to include frequency axis"],
      followUpQuestions: ["What happens if a pole lies exactly on the jω axis or unit circle?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Distinguish carefully between the criteria for general systems (ROC includes axis) vs causal systems (pole locations)."
  },
  {
    id: "sig-comm-10",
    topicId: "core-ece",
    title: "State and explain the Nyquist Sampling Theorem.",
    answer: {
      shortAnswer: "A continuous-time bandlimited signal can be perfectly reconstructed from its samples if the sampling frequency is strictly greater than twice the highest frequency component.",
      detailedExplanation: "The Nyquist-Shannon sampling theorem states that if a signal x(t) contains no frequency components higher than fm, it can be uniquely determined by its discrete samples if the sampling rate fs >= 2*fm. The minimum sampling rate, 2*fm, is called the Nyquist rate. Sampling in the time domain results in periodic replication of the signal's spectrum in the frequency domain. If fs < 2*fm, these replicated spectra overlap, causing aliasing.",
      interviewExplanation: "I like to explain this using the frequency domain. When we sample a signal, we copy its frequency spectrum every fs Hz. To prevent these copies from overlapping and destroying the original signal's information, we must space them out by at least twice the maximum frequency of the signal.",
      keyPoints: ["fs >= 2*fm", "Prevents aliasing", "Allows perfect reconstruction using an ideal low-pass filter"],
      followUpQuestions: ["How is reconstruction actually performed?", "What is the Nyquist interval?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Mention the role of the ideal low-pass filter in the reconstruction process to show complete understanding."
  },
  {
    id: "sig-comm-11",
    topicId: "core-ece",
    title: "What is Aliasing and how can it be prevented?",
    answer: {
      shortAnswer: "Aliasing is a phenomenon where high-frequency components fold back into lower frequencies during sampling. It is prevented using an anti-aliasing filter and sampling above the Nyquist rate.",
      detailedExplanation: "When a signal is under-sampled (fs < 2*fm), the replicated frequency spectra overlap. This overlapping causes high frequencies to appear as (or 'alias' into) lower frequencies, irrecoverably distorting the signal. To prevent it, we must ensure fs > 2*fm. However, real-world signals have infinite bandwidth due to noise. Therefore, an analog low-pass filter (anti-aliasing filter) is placed before the sampler to bandlimit the signal strictly to fm.",
      interviewExplanation: "Think of a car wheel in a movie spinning backwards. The camera's frame rate (sampling rate) is too slow to capture the fast rotation (high frequency), so it looks like a slower backward rotation (aliased low frequency). We prevent this by filtering out high frequencies before sampling.",
      keyPoints: ["Caused by fs < 2*fm", "High frequencies impersonate low frequencies", "Prevention: Anti-aliasing LPF before sampling"],
      followUpQuestions: ["Why is the anti-aliasing filter placed before, not after, the ADC?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "The wagon-wheel effect is the best intuitive analogy to use during an interview."
  },
  {
    id: "sig-comm-12",
    topicId: "core-ece",
    title: "What is the difference between Flat-top sampling and Natural sampling?",
    answer: {
      shortAnswer: "In natural sampling, the pulse top follows the shape of the analog signal, whereas in flat-top sampling, the pulse amplitude is held constant during the pulse width.",
      detailedExplanation: "Natural sampling multiplies the analog signal by a periodic pulse train, so the top of each sample pulse tracks the continuous signal. This is mathematically simpler but hard to implement and susceptible to noise. Flat-top sampling uses a Sample-and-Hold circuit to keep the amplitude constant for the duration of the pulse. This introduces the Aperture Effect (a sinc envelope distortion in the frequency domain), which must be corrected using an equalizer.",
      interviewExplanation: "Flat-top is the practical choice used in real ADCs because holding the voltage steady gives the ADC time to perform the conversion. The downside is it slightly distorts the frequency spectrum, but we can easily fix that with a simple equalizer filter.",
      keyPoints: ["Natural: Pulse top varies", "Flat-top: Constant amplitude (Sample & Hold)", "Flat-top causes Aperture effect"],
      followUpQuestions: ["What is the aperture effect and how is it compensated?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Link flat-top sampling to practical Sample-and-Hold circuits used in actual hardware."
  },
  {
    id: "sig-comm-13",
    topicId: "core-ece",
    title: "What is a Z-Transform and how is it related to the Laplace Transform?",
    answer: {
      shortAnswer: "The Z-transform is the discrete-time equivalent of the Laplace Transform. They are related by the mapping z = e^(sT), where T is the sampling period.",
      detailedExplanation: "The Z-transform converts a discrete-time signal into a complex frequency domain representation. While Laplace evaluates continuous systems on the s-plane, the Z-transform evaluates discrete systems on the z-plane. By substituting s = σ + jω into z = e^(sT), we see that the jω axis in the s-plane maps to the unit circle (|z|=1) in the z-plane. The Left Half Plane (LHP) maps to the inside of the unit circle, and the RHP maps to the outside.",
      interviewExplanation: "I view the Z-transform as taking the infinite s-plane and rolling it up into a cylinder, then looking at it from the top down. The stability boundary shifts from the vertical y-axis to the unit circle.",
      keyPoints: ["Discrete equivalent of Laplace", "z = e^(sT)", "jω axis maps to unit circle"],
      followUpQuestions: ["How does frequency aliasing appear on the z-plane?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "The mapping z = e^(sT) is the most critical equation to write down when asked this question."
  },
  {
    id: "sig-comm-14",
    topicId: "core-ece",
    title: "Explain the Final Value Theorem in Laplace and its limitation.",
    answer: {
      shortAnswer: "The Final Value Theorem finds the steady-state value of a signal in the time domain directly from its Laplace transform: lim(t->∞) f(t) = lim(s->0) s*F(s).",
      detailedExplanation: "This theorem is incredibly useful for finding the steady-state error of control systems without having to perform an inverse Laplace transform. However, it has a strict limitation: it only applies if the system is stable. Specifically, all poles of s*F(s) must lie strictly in the left half of the s-plane (no poles on the jω-axis or RHP).",
      interviewExplanation: "It's a shortcut to find where a system settles. But you have to check stability first. If a system is an oscillator (poles on the jω axis), the math will give you a number, but the actual signal never settles to a final value, making the result invalid.",
      keyPoints: ["lim(t->∞) f(t) = lim(s->0) s*F(s)", "Finds steady-state value", "Requires all poles of sF(s) to be in LHP"],
      followUpQuestions: ["What happens if you apply FVT to a sine wave?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical", "Important"],
    interviewTip: "Always mention the stability prerequisite; interviewers look for candidates who know the limitations of mathematical tools."
  },
  {
    id: "sig-comm-15",
    topicId: "core-ece",
    title: "What is Auto-correlation and Cross-correlation?",
    answer: {
      shortAnswer: "Auto-correlation measures the similarity of a signal with a delayed version of itself, while cross-correlation measures the similarity between two different signals.",
      detailedExplanation: "Cross-correlation slides one signal over another to find where they match best, which is heavily used in radar and signal detection. Auto-correlation does this with the same signal. The auto-correlation function at zero delay gives the total energy or average power of the signal. According to the Wiener-Khinchin theorem, the Fourier Transform of the auto-correlation function yields the Power Spectral Density (PSD) of the signal.",
      interviewExplanation: "Think of correlation as a pattern-matching tool. Cross-correlation finds a target signature in noisy data. Auto-correlation helps find hidden periodicities in a single noisy signal and relates directly to the signal's frequency power distribution.",
      keyPoints: ["Cross: Pattern matching between two signals", "Auto: Finds periodicities in one signal", "FT of Auto-correlation = PSD"],
      followUpQuestions: ["How is correlation mathematically different from convolution?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Mention the Wiener-Khinchin theorem to show deep knowledge of how time-domain statistics relate to frequency-domain power."
  },
  {
    id: "sig-comm-16",
    topicId: "core-ece",
    title: "What is the Hilbert Transform and its primary application?",
    answer: {
      shortAnswer: "The Hilbert transform shifts the phase of all positive frequencies of a signal by -90 degrees and negative frequencies by +90 degrees. It's used to create analytic signals.",
      detailedExplanation: "Unlike Fourier or Laplace, the Hilbert transform does not change the domain; it produces a time-domain signal from a time-domain signal. Mathematically, it is the convolution of a signal with 1/(πt). Its main application is in communications to generate Single Sideband (SSB) modulation. By combining a signal with its Hilbert transform, we create an 'analytic signal' that has no negative frequency components.",
      interviewExplanation: "It is essentially a perfect wideband 90-degree phase shifter. In analog communication, we use it to elegantly cancel out the redundant sideband in AM, saving exactly half the bandwidth without needing a mathematically perfect bandpass filter.",
      keyPoints: ["90-degree phase shift", "Creates analytic signals (pre-envelope)", "Used for SSB modulation"],
      followUpQuestions: ["How do you mathematically represent an SSB signal using Hilbert Transform?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Link it directly to SSB modulation, as this is the most common practical context in ECE interviews."
  },
  {
    id: "sig-comm-17",
    topicId: "core-ece",
    title: "Explain Parseval's Theorem.",
    answer: {
      shortAnswer: "Parseval's theorem states that the total energy (or power) of a signal computed in the time domain is equal to the total energy (or power) computed in the frequency domain.",
      detailedExplanation: "Mathematically, the integral of the square of the magnitude of a signal in time equals the integral of the square of the magnitude of its Fourier transform (normalized by 1/2π). This implies that the Fourier transform is a unitary operation that preserves energy.",
      interviewExplanation: "Parseval's theorem is incredibly practical. It tells us that energy is conserved across domains. If a time-domain integral is too difficult to solve, we can transform the signal and calculate the energy from its frequency spectrum, which is often much easier.",
      keyPoints: ["Energy in time = Energy in frequency", "Valid for Fourier Series and Transform", "Illustrates energy conservation"],
      followUpQuestions: ["Can you write the equation for Parseval's theorem for discrete time signals?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Numerical"],
    interviewTip: "Point out that Parseval's theorem justifies the concept of Energy Spectral Density (ESD)."
  },
  {
    id: "sig-comm-18",
    topicId: "core-ece",
    title: "What is a Fast Fourier Transform (FFT)?",
    answer: {
      shortAnswer: "FFT is an efficient algorithm to compute the Discrete Fourier Transform (DFT), reducing the computational complexity from O(N^2) to O(N log N).",
      detailedExplanation: "The standard DFT formula requires N^2 complex multiplications. The FFT (typically the Cooley-Tukey algorithm) uses a divide-and-conquer approach, recursively breaking down a DFT of size N into smaller DFTs. This drastically reduces computation time, making real-time digital signal processing possible.",
      interviewExplanation: "If we want to process audio in real-time, computing the standard DFT takes too long for large sample sizes. FFT exploits the periodicity and symmetry of the twiddle factors (roots of unity) to skip redundant calculations. Without FFT, modern digital communications like OFDM or Wi-Fi wouldn't be possible.",
      keyPoints: ["Reduces complexity to O(N log N)", "Exploits symmetry of roots of unity", "Enables real-time DSP"],
      followUpQuestions: ["What is the Radix-2 FFT and what constraint does it place on N?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Coding", "Practical"],
    interviewTip: "Always explicitly state the time complexity improvement (O(N^2) vs O(N log N))."
  },
  {
    id: "sig-comm-19",
    topicId: "core-ece",
    title: "How do you find the Inverse Z-Transform?",
    answer: {
      shortAnswer: "Common methods include Partial Fraction Expansion, Power Series Expansion (Long Division), and the Inversion Integral (Residue method).",
      detailedExplanation: "Partial Fraction Expansion involves breaking a complex rational function X(z) into simpler fractions that match standard Z-transform pairs. Power series expansion involves performing polynomial long division to get a sequence of z^-n terms, where the coefficients are the time-domain values. The residue method uses complex contour integration over the ROC.",
      interviewExplanation: "In practice, I almost always use Partial Fraction Expansion. You divide X(z) by z, perform partial fractions, multiply the z back, and then look up the standard pairs in a table, being careful to use the ROC to determine if the sequence is causal or anti-causal.",
      keyPoints: ["Partial Fraction Expansion", "Power Series (Long Division)", "Residue Method", "ROC determines causality"],
      followUpQuestions: ["Why do we often expand X(z)/z instead of X(z) in partial fractions?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical", "Important"],
    interviewTip: "Mention expanding X(z)/z. This prevents having a delay operator in the numerator, making table lookup easier."
  },
  {
    id: "sig-comm-20",
    topicId: "core-ece",
    title: "What is an Impulse Response and why is it important?",
    answer: {
      shortAnswer: "The impulse response is the output of a system when the input is a Dirac delta function. It completely characterizes an LTI system.",
      detailedExplanation: "Because any input signal can be represented as an infinite sum of scaled and shifted impulses, knowing how the system responds to a single impulse allows us to determine the response to any input using convolution. In the frequency domain, the Fourier/Laplace transform of the impulse response is the system's Transfer Function.",
      interviewExplanation: "Think of an impulse response like hitting a bell with a hammer. The hammer strike is the impulse, and the ringing sound is the impulse response. Once you know how the bell rings for one hit, you can mathematically predict how it will sound if you play a complex rhythm on it.",
      keyPoints: ["Output when input is δ(t)", "Completely defines an LTI system", "FT of impulse response = Transfer Function"],
      followUpQuestions: ["How do you find the step response if you know the impulse response?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "The bell and hammer analogy is a great way to show physical intuition for a mathematical concept."
  },
  {
    id: "sig-comm-21",
    topicId: "core-ece",
    title: "How do you obtain the Step Response from the Impulse Response?",
    answer: {
      shortAnswer: "The step response is the time integral of the impulse response.",
      detailedExplanation: "Since the unit step function u(t) is the integral of the unit impulse function δ(t), the output of an LTI system to a step input (the step response) is the integral of the system's output to an impulse input (the impulse response). Conversely, the impulse response is the derivative of the step response.",
      interviewExplanation: "Because the system is Linear and Time-Invariant, linear operations performed on the input apply directly to the output. Taking the integral of the input impulse gives a step function, so taking the integral of the output impulse response gives the step response.",
      keyPoints: ["Step response = Integral of impulse response", "Impulse response = Derivative of step response", "Relies on Linearity"],
      followUpQuestions: ["Why is step response preferred over impulse response in practical testing?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Conceptual"],
    interviewTip: "Explain this using the linearity property of LTI systems to show a deeper understanding of the underlying theory."
  },
  {
    id: "sig-comm-22",
    topicId: "core-ece",
    title: "Why do we use Baseband vs Passband Transmission?",
    answer: {
      shortAnswer: "Baseband transmission sends signals at their original low frequencies (e.g., wires), while passband uses modulation to shift the signal to a higher frequency for wireless transmission.",
      detailedExplanation: "Baseband transmission (like Ethernet) is simple but only works over guided media where we don't have to worry about antenna sizes or channel sharing. Passband transmission (like radio or cellular) modulates a high-frequency carrier. This is necessary for three reasons: 1) It reduces antenna size to practical lengths, 2) It allows Frequency Division Multiplexing (multiple channels in the air), and 3) It overcomes poor low-frequency propagation characteristics of the atmosphere.",
      interviewExplanation: "If we tried to transmit human voice (3 kHz) directly via antennas (baseband), the antenna would need to be kilometers long. By modulating it to 100 MHz (passband), the antenna shrinks to about a meter. Modulation makes wireless communication physically practical.",
      keyPoints: ["Baseband: Unmodulated, guided media", "Passband: Modulated carrier, wireless", "Modulation reduces antenna size and allows FDM"],
      followUpQuestions: ["What is the relationship between antenna length and frequency?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "The 'antenna length' argument is the most compelling and practically relevant reason to give in an interview."
  },
  {
    id: "sig-comm-23",
    topicId: "core-ece",
    title: "What is Amplitude Modulation (AM)? Discuss its Bandwidth and Power.",
    answer: {
      shortAnswer: "AM changes the amplitude of a high-frequency carrier according to a baseband message signal. Its bandwidth is twice the message bandwidth, and it is highly power inefficient.",
      detailedExplanation: "In standard AM (DSB-FC), the modulated signal consists of the carrier and two sidebands (Upper and Lower). The bandwidth is 2*fm, where fm is the maximum frequency of the message. The total power is Pc * (1 + (μ^2)/2), where Pc is carrier power and μ is the modulation index. Since the carrier contains no information, at best (μ=1), only 33.3% of the transmitted power carries information, making standard AM very inefficient.",
      interviewExplanation: "AM is simple and allows for very cheap receivers (envelope detectors). However, you pay for that simplicity at the transmitter. You waste a lot of power transmitting the carrier, and you waste bandwidth by transmitting two mirrored sidebands that contain the exact same information.",
      keyPoints: ["Bandwidth = 2 * fm", "Max efficiency = 33.3%", "Uses simple envelope detector"],
      followUpQuestions: ["How can we improve the power efficiency of AM?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Numerical"],
    interviewTip: "Be ready to calculate the power efficiency percentage if given a specific modulation index (e.g., μ=0.5)."
  },
  {
    id: "sig-comm-24",
    topicId: "core-ece",
    title: "Explain Modulation Index in AM. What happens if it exceeds 1?",
    answer: {
      shortAnswer: "The modulation index (μ = Am/Ac) is the ratio of message amplitude to carrier amplitude. If μ > 1, overmodulation occurs, causing phase reversals and envelope distortion.",
      detailedExplanation: "The modulation index determines the extent of amplitude variation in the carrier. It typically ranges from 0 to 1. If μ > 1, the carrier envelope crosses the zero axis and goes negative, causing a 180-degree phase reversal. A standard envelope detector receiver only tracks the absolute magnitude, so it will fold the negative peaks upward, severely distorting the recovered audio signal.",
      interviewExplanation: "I describe modulation index as how 'loud' the message is compared to the carrier. If it's too loud (μ > 1), the wave pinches off completely. A simple AM radio receiver will clip and distort the sound. To fix overmodulation, you either need to lower the audio volume or use a complex synchronous detector.",
      keyPoints: ["μ = Am/Ac", "Ideal range: 0 < μ <= 1", "Overmodulation (μ > 1) causes envelope distortion"],
      followUpQuestions: ["How can we recover an overmodulated AM signal?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Draw a quick sketch of an overmodulated waveform showing the phase reversal envelope."
  },
  {
    id: "sig-comm-25",
    topicId: "core-ece",
    title: "Compare DSB-SC and SSB Modulation.",
    answer: {
      shortAnswer: "DSB-SC transmits both sidebands but suppresses the carrier to save power. SSB suppresses the carrier and one sideband, saving both power and bandwidth.",
      detailedExplanation: "Double Sideband Suppressed Carrier (DSB-SC) saves the 66% power wasted by the AM carrier, achieving 100% power efficiency, but still uses 2*fm bandwidth. Single Sideband (SSB) recognizes that the upper and lower sidebands carry identical information. By transmitting only one, SSB cuts the bandwidth in half (to fm) while maintaining 100% power efficiency.",
      interviewExplanation: "SSB is the ultimate analog modulation for efficiency. However, the trade-off is complexity. Generating SSB requires sharp filters or phase-shift (Hilbert) networks. Also, because the carrier is suppressed in both, the receiver must generate a perfectly synchronized local oscillator to demodulate them (Coherent detection).",
      keyPoints: ["DSB-SC: 100% power efficient, Bandwidth = 2*fm", "SSB: 100% power efficient, Bandwidth = fm", "Both require complex synchronous receivers"],
      followUpQuestions: ["Why don't we use SSB for commercial radio broadcasting?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Highlight the trade-off triangle: Power vs Bandwidth vs Receiver Complexity."
  },
  {
    id: "sig-comm-26",
    topicId: "core-ece",
    title: "What is Vestigial Sideband (VSB) Modulation and where is it used?",
    answer: {
      shortAnswer: "VSB transmits one full sideband and a 'vestige' (small portion) of the other. It's a compromise between DSB and SSB, traditionally used in analog TV broadcasting.",
      detailedExplanation: "SSB is highly efficient but requires idealized 'brick-wall' filters, which are physically impossible, especially for signals with significant low-frequency content like video. VSB solves this by allowing a gradual filter roll-off. It transmits one sideband completely and a small trace of the other. The bandwidth is fm + fv (where fv is the vestige width), slightly more than SSB but much less than DSB.",
      interviewExplanation: "When transmitting video, low frequencies carry the main structural parts of the image. You can't afford to cut them off with a sharp SSB filter. VSB lets us be a bit sloppy with our filtering at the transmitter, preserving the low frequencies and still saving substantial bandwidth compared to DSB.",
      keyPoints: ["Compromise between DSB and SSB", "Bandwidth = fm + fv", "Solves the practical filtering problem of SSB", "Used for analog TV video"],
      followUpQuestions: ["Why is the audio in analog TV sent via FM while video is sent via VSB?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Conceptual"],
    interviewTip: "Always associate VSB with Analog Television Video transmission."
  },
  {
    id: "sig-comm-27",
    topicId: "core-ece",
    title: "What are the advantages of Frequency Modulation (FM) over AM?",
    answer: {
      shortAnswer: "FM offers superior noise immunity, better audio quality, and allows for constant transmitter power, but it requires significantly more bandwidth than AM.",
      detailedExplanation: "In FM, the frequency of the carrier changes with the message, while amplitude remains constant. Most atmospheric noise and interference affect the amplitude of a signal. Because FM receivers use limiters to strip away amplitude variations before demodulation, they are highly immune to noise. Furthermore, FM utilizes the 'Capture Effect', where a stronger signal completely suppresses a weaker one on the same frequency.",
      interviewExplanation: "I'd emphasize that AM's vulnerability is that the information is in the amplitude, which is exactly what noise corrupts. FM hides the information in the zero-crossings (frequency). The trade-off is bandwidth: commercial AM takes 10 kHz, while commercial FM takes 200 kHz to achieve that high fidelity and low noise.",
      keyPoints: ["High noise immunity", "Constant envelope power", "Capture effect", "Trade-off: requires large bandwidth"],
      followUpQuestions: ["What is Carson's Rule?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Mention the 'limiter' circuit in FM receivers as the physical reason for noise immunity."
  },
  {
    id: "sig-comm-28",
    topicId: "core-ece",
    title: "Explain Carson's Rule for FM Bandwidth.",
    answer: {
      shortAnswer: "Carson's Rule estimates the practical bandwidth of an FM signal as roughly twice the sum of the peak frequency deviation and the highest message frequency.",
      detailedExplanation: "Mathematically, true FM has infinite bandwidth with an infinite number of sidebands (represented by Bessel functions). However, 98% of the signal power is contained within a specific range. Carson's Rule approximates this usable bandwidth as BW = 2 * (Δf + fm), where Δf is the peak frequency deviation and fm is the maximum modulating frequency.",
      interviewExplanation: "Since FM mathematically generates infinite sidebands, we needed a practical rule for engineers to space radio stations apart. Carson's rule tells us that the bandwidth is driven by how far we swing the frequency (deviation) plus the speed of that swing (message frequency).",
      keyPoints: ["BW = 2(Δf + fm)", "Contains ~98% of signal power", "True FM bandwidth is technically infinite"],
      followUpQuestions: ["What is the modulation index in FM (β)?", "How does Wideband FM differ from Narrowband FM?"]
    },
    difficulty: "Intermediate",
    badges: ["Numerical", "Important"],
    interviewTip: "Memorize the formula BW = 2(Δf + fm). It is highly likely to be a quick numerical question."
  },
  {
    id: "sig-comm-29",
    topicId: "core-ece",
    title: "What are Pre-emphasis and De-emphasis in FM?",
    answer: {
      shortAnswer: "Pre-emphasis artificially boosts high-frequency audio components at the transmitter. De-emphasis attenuates them at the receiver to restore the original signal while heavily suppressing high-frequency noise.",
      detailedExplanation: "In FM, the Power Spectral Density of noise at the demodulator output increases quadratically with frequency (it's 'colored' noise). This means high-frequency audio is drowned out by noise. To combat this, pre-emphasis filters boost the high frequencies of the message before modulation. At the receiver, a de-emphasis filter reverses the boost, which simultaneously pushes the high-frequency channel noise down, drastically improving the overall Signal-to-Noise Ratio (SNR).",
      interviewExplanation: "It's exactly like Dolby Noise Reduction for cassette tapes. You make the treble artificially loud before sending it over the noisy channel. At the receiver, you turn the treble down to normal, which squashes the channel hiss.",
      keyPoints: ["Combats quadratic noise in FM", "Pre-emphasis: Boosts highs at Tx", "De-emphasis: Cuts highs at Rx", "Improves overall SNR"],
      followUpQuestions: ["What type of filters are used for pre-emphasis and de-emphasis?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Use the term 'quadratic noise' or 'colored noise' to impress the interviewer with your knowledge of FM noise characteristics."
  },
  {
    id: "sig-comm-30",
    topicId: "core-ece",
    title: "How does a Superheterodyne Receiver work?",
    answer: {
      shortAnswer: "A superheterodyne receiver mixes an incoming radio signal with a local oscillator to translate it to a fixed Intermediate Frequency (IF) for easier, consistent filtering and amplification.",
      detailedExplanation: "Building a high-gain, narrow-bandpass filter that can tune across many frequencies is practically impossible. A superhet receiver solves this by shifting the tuning burden to a local oscillator (LO). The incoming RF signal is mixed with the LO to create a constant IF (e.g., 455 kHz for AM, 10.7 MHz for FM). Most of the receiver's amplification and filtering are then done at this fixed IF by highly optimized, non-tunable components.",
      interviewExplanation: "Instead of moving a mountain to Mohammad, we move Mohammad to the mountain. Instead of making our filters adjustable to match the radio station, we use a mixer to shift the radio station's frequency down to perfectly match our fixed, high-quality filters.",
      keyPoints: ["Mixes RF with LO to create IF", "IF is constant (e.g., 455 kHz)", "Allows fixed, high-Q filtering and stable amplification", "Suffers from image frequency interference"],
      followUpQuestions: ["What is Image Frequency and how is it rejected?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Mention 'Image Frequency' as the main disadvantage to preemptively guide the interviewer to the next question."
  },
  {
    id: "sig-comm-31",
    topicId: "core-ece",
    title: "What is an Image Frequency in Superheterodyne receivers?",
    answer: {
      shortAnswer: "Image frequency is an unwanted external RF signal that mixes with the Local Oscillator to produce the exact same Intermediate Frequency (IF) as the desired signal.",
      detailedExplanation: "In a mixer, IF = |f_RF - f_LO|. If we tune to f_RF = f_LO - IF, there is another frequency, the image frequency f_image = f_LO + IF, that will also produce the IF. f_image is located at f_RF + 2*IF. If an actual signal exists at f_image, it will pass right through the IF filters and interfere with the desired station. It must be rejected by an RF filter before the mixer.",
      interviewExplanation: "Because the mixer outputs the difference in frequencies, it can't tell if the incoming signal is above or below the local oscillator. The image is exactly 2*IF away from the station we want. Once it enters the mixer, the damage is done, so we must filter it out at the antenna stage.",
      keyPoints: ["f_image = f_RF + 2*IF", "Causes interference", "Must be filtered at the RF stage, BEFORE mixing"],
      followUpQuestions: ["Why don't we use a very high IF to make filtering the image easier?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "Memorize the formula f_image = fs + 2*IF. Know the trade-off: higher IF makes image rejection easier, but makes sharp filtering harder."
  },
  {
    id: "sig-comm-32",
    topicId: "core-ece",
    title: "Describe Pulse Code Modulation (PCM).",
    answer: {
      shortAnswer: "PCM is a digital representation of an analog signal consisting of three steps: Sampling, Quantization, and Encoding.",
      detailedExplanation: "1) Sampling converts continuous time into discrete time (following Nyquist). 2) Quantization maps the continuous amplitude to a set of discrete levels, introducing irreversible quantization noise. 3) Encoding assigns a binary digital code (usually n-bits) to each quantized level. The final bit rate is Rb = n * fs.",
      interviewExplanation: "PCM is the foundation of digital audio (like CDs or WAV files). We sample the wave, round the voltage to the nearest notch on a ruler (quantization), and write down the binary number for that notch (encoding). The rounding part is what creates quantization noise.",
      keyPoints: ["Sampling, Quantization, Encoding", "Bit rate Rb = n * fs", "Quantization introduces noise"],
      followUpQuestions: ["How does increasing the number of bits (n) affect the signal?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Be ready to calculate bit rate given the bandwidth and number of quantization levels (L = 2^n)."
  },
  {
    id: "sig-comm-33",
    topicId: "core-ece",
    title: "What is Quantization Noise and how does it relate to the number of bits?",
    answer: {
      shortAnswer: "Quantization noise is the error introduced when continuous analog values are rounded to discrete quantization levels. Increasing bits by 1 improves SNR by ~6 dB.",
      detailedExplanation: "The difference between the original analog signal and the quantized staircase signal represents an error voltage, perceived as white noise. If the step size is Δ, the maximum error is ±Δ/2, and the quantization noise power is (Δ^2)/12. The Signal-to-Quantization Noise Ratio (SQNR) in dB is approximately 1.8 + 6n. Therefore, every additional bit added to the PCM encoder improves the SQNR by 6 dB.",
      interviewExplanation: "I would explain it as a rounding error. You can never perfectly recover the original analog amplitude. But if we increase the number of bits, our 'ruler' gets finer markings, the rounding error gets smaller, and the noise floor drops. The golden rule is 6 dB per bit.",
      keyPoints: ["Rounding error in ADC", "Noise power = (Δ^2)/12", "SQNR ≈ 1.8 + 6n dB", "1 bit = 6 dB improvement"],
      followUpQuestions: ["How can we improve SQNR for weak signals without increasing the number of bits?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "The '6 dB per bit' rule is a standard piece of ECE trivia that every interviewer expects you to know instantly."
  },
  {
    id: "sig-comm-34",
    topicId: "core-ece",
    title: "What is Companding in PCM?",
    answer: {
      shortAnswer: "Companding (Compressing-Expanding) compresses large signal amplitudes and amplifies small ones before quantization to provide a uniform Signal-to-Noise Ratio for all signal levels.",
      detailedExplanation: "In standard uniform quantization, weak signals suffer from a terrible SQNR because the fixed step size (Δ) is large relative to the signal amplitude. Companding solves this by passing the analog signal through a logarithmic compressor (A-law or μ-law) before uniform quantization. Small amplitudes are given more quantization levels, and large amplitudes get fewer. At the receiver, an expander reverses the process.",
      interviewExplanation: "Human speech has many quiet pauses and few loud bursts. Uniform quantization treats them equally, which makes the quiet parts sound very noisy. Companding is like a dynamic volume control: it boosts the whispers before digitizing so they use more bits, ensuring clear audio regardless of the speaker's volume.",
      keyPoints: ["Compressing at Tx, Expanding at Rx", "Improves SQNR for weak signals", "Non-uniform quantization", "μ-law (US/Japan) and A-law (Europe)"],
      followUpQuestions: ["What are μ-law and A-law?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Relate companding to non-uniform quantization, where step sizes are small near zero and large at higher amplitudes."
  },
  {
    id: "sig-comm-35",
    topicId: "core-ece",
    title: "Explain Delta Modulation (DM) and its two main distortions.",
    answer: {
      shortAnswer: "Delta Modulation is a 1-bit PCM scheme that transmits the difference between successive samples. Its distortions are Slope Overload and Granular Noise.",
      detailedExplanation: "Instead of sending absolute values, DM uses a comparator to check if the current sample is higher or lower than the previous one, sending a '1' (step up) or '0' (step down). If the input signal changes too rapidly for the step size to keep up, 'Slope Overload' occurs. If the input signal is flat, the output will continuously hunt up and down, causing 'Granular Noise'.",
      interviewExplanation: "DM trades bandwidth and complexity for a simple 1-bit stream. The problem is the fixed step size. If the signal spikes quickly, the staircase can't climb fast enough (Slope Overload). If the signal is quiet, the staircase takes unnecessary steps up and down (Granular Noise).",
      keyPoints: ["1-bit PCM (Differential)", "Sends only change (+Δ or -Δ)", "Slope Overload (fast signals)", "Granular Noise (slow/flat signals)"],
      followUpQuestions: ["How does Adaptive Delta Modulation (ADM) fix these issues?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Be prepared to draw the staircase waveform showing it lagging behind a steep sine wave (slope overload)."
  },
  {
    id: "sig-comm-36",
    topicId: "core-ece",
    title: "Compare ASK, FSK, and PSK digital modulation schemes.",
    answer: {
      shortAnswer: "ASK modulates amplitude (susceptible to noise), FSK modulates frequency (robust but bandwidth inefficient), and PSK modulates phase (highly power and bandwidth efficient).",
      detailedExplanation: "Amplitude Shift Keying (ASK/OOK) represents 1 and 0 by turning the carrier on and off; it's cheap but very sensitive to noise. Frequency Shift Keying (FSK) uses two different frequencies; it has a constant envelope, making it robust against non-linear amplifiers and noise, but uses more bandwidth. Phase Shift Keying (BPSK/QPSK) shifts the phase by 180 or 90 degrees. PSK offers the best error performance (BER) and power efficiency, but requires complex synchronous receivers to track phase.",
      interviewExplanation: "If I'm designing a cheap garage door opener, I use ASK. If I'm designing a rugged, low-data-rate industrial sensor, I use FSK. But for high-speed, efficient data like Wi-Fi or satellite, PSK is king because it gives the best distance and speed for a given amount of power.",
      keyPoints: ["ASK: Simple, noise-prone", "FSK: Constant envelope, uses more bandwidth", "PSK: Best performance, complex receiver"],
      followUpQuestions: ["What is QPSK and how does it compare to BPSK in terms of bandwidth?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Constellation diagrams are a great way to visually compare these. Mention that PSK maximizes the distance between constellation points for a given power."
  },
  {
    id: "sig-comm-37",
    topicId: "core-ece",
    title: "What is Quadrature Amplitude Modulation (QAM)?",
    answer: {
      shortAnswer: "QAM combines Amplitude and Phase modulation to send multiple bits per symbol, achieving high data rates by modulating two orthogonal carriers (sine and cosine).",
      detailedExplanation: "In QAM, two independent baseband data streams are multiplied by a sine and cosine carrier of the same frequency. Because sine and cosine are orthogonal, they don't interfere with each other and can be separated at the receiver. A 16-QAM system has 16 points in its constellation diagram, meaning each symbol represents log2(16) = 4 bits. This drastically increases spectral efficiency.",
      interviewExplanation: "QAM is how modern networks achieve massive gigabit speeds. By tweaking both the volume and the phase of the wave simultaneously, we create a grid of possible states (the constellation). The trade-off is that as you cram more points into the grid (like 256-QAM or 1024-QAM), they get closer together, requiring a very high Signal-to-Noise Ratio to prevent errors.",
      keyPoints: ["Combines ASK and PSK", "Uses orthogonal carriers (I and Q)", "High spectral efficiency (bits/sec/Hz)", "Susceptible to noise at high orders (e.g., 256-QAM)"],
      followUpQuestions: ["What happens to the Bit Error Rate (BER) as we move from 16-QAM to 64-QAM?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Know the relationship between M-ary QAM and bits per symbol: b = log2(M). Also mention I (In-phase) and Q (Quadrature) channels."
  },
  {
    id: "sig-comm-38",
    topicId: "core-ece",
    title: "Explain Orthogonal Frequency Division Multiplexing (OFDM).",
    answer: {
      shortAnswer: "OFDM divides a high-speed data stream into many slow-speed streams, transmitting them simultaneously on overlapping, mutually orthogonal subcarriers.",
      detailedExplanation: "Instead of sending one very fast pulse (which is highly susceptible to multipath delay spread and intersymbol interference), OFDM splits the data across hundreds of closely spaced subcarriers. By making the subcarriers mathematically orthogonal (the peak of one coincides with the nulls of the others), they can overlap in the frequency domain without interfering. It is typically implemented efficiently using IFFT at the transmitter and FFT at the receiver.",
      interviewExplanation: "Think of an old single-lane highway where cars are moving at 200 mph; one crash ruins the whole road (multipath fading). OFDM is like a 100-lane highway where cars move at 2 mph. It carries the same amount of data, but is incredibly resilient to obstacles and reflections. It's the core of Wi-Fi, 4G, and 5G.",
      keyPoints: ["Overlapping orthogonal subcarriers", "Converts high-rate to many low-rate streams", "Highly robust against multipath fading (ISI)", "Implemented using FFT/IFFT"],
      followUpQuestions: ["What is the Cyclic Prefix in OFDM and why is it used?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "The FFT/IFFT implementation and resilience to Intersymbol Interference (ISI) are the two most critical points to hit."
  },
  {
    id: "sig-comm-39",
    topicId: "core-ece",
    title: "State Shannon's Channel Capacity Theorem.",
    answer: {
      shortAnswer: "The theorem provides the theoretical maximum data rate for error-free communication over a channel with a specific bandwidth and Signal-to-Noise Ratio (SNR).",
      detailedExplanation: "The formula is C = B * log2(1 + S/N), where C is capacity in bits per second, B is bandwidth in Hertz, S is signal power, and N is noise power (assumed AWGN). As long as the transmission rate R is less than C, there exists a coding scheme that can achieve arbitrarily low error rates. It shows a fundamental trade-off: you can trade bandwidth for signal power.",
      interviewExplanation: "This is the 'speed limit' of the universe for data. It tells us that to get faster internet, you only have two options: buy more spectrum bandwidth (which is expensive), or pump up your transmitter power to increase the SNR. However, because power is inside the logarithm, increasing power yields diminishing returns compared to increasing bandwidth.",
      keyPoints: ["C = B * log2(1 + S/N)", "Theoretical maximum error-free rate", "Bandwidth and Power trade-off"],
      followUpQuestions: ["What happens to capacity if the bandwidth becomes infinite?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Important", "Numerical"],
    interviewTip: "Interviewers often ask the infinite bandwidth question. The answer is not infinite capacity; it asymptotes to 1.44 * S/N0 due to wideband noise."
  },
  {
    id: "sig-comm-40",
    topicId: "core-ece",
    title: "What is Intersymbol Interference (ISI) and how is it mitigated?",
    answer: {
      shortAnswer: "ISI occurs when successive pulses smear into one another due to channel filtering or multipath, causing decoding errors. It is mitigated using pulse shaping (Raised Cosine Filter) and equalizers.",
      detailedExplanation: "In digital communications, transmitting square pulses requires infinite bandwidth. A practical bandlimited channel acts as a low-pass filter, causing the pulses to spread out in time and overlap with adjacent symbols. To prevent ISI, Nyquist proposed pulse shaping using a sinc function, which has zero-crossings at regular symbol intervals. In practice, a Raised Cosine Filter is used to provide a tunable roll-off that reduces timing jitter sensitivity.",
      interviewExplanation: "When we send digital bits, we want them to stay in their own time slot. If the channel distorts them, a '1' might bleed over into the next time slot and turn a '0' into a '1'. We fix this by mathematically shaping the pulses so that their 'tails' equal exactly zero at the exact moment we sample the next bit.",
      keyPoints: ["Pulses smearing into each other", "Caused by bandlimited channels or multipath", "Mitigated by Raised Cosine Filters and Equalization"],
      followUpQuestions: ["What is an Eye Diagram and how is it used to measure ISI?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Mention the 'Eye Diagram' - a wide open eye means low ISI, a closed eye means high ISI."
  },
  {
    id: "sig-comm-41",
    topicId: "core-ece",
    title: "Explain Noise Figure (NF) and Noise Temperature.",
    answer: {
      shortAnswer: "Noise Figure measures how much a component degrades the SNR (NF = SNR_in / SNR_out). Noise Temperature is an equivalent way to express that added noise as a physical temperature.",
      detailedExplanation: "Every electronic component (like an amplifier) adds its own internal thermal noise to a signal. The Noise Factor (F) is the ratio of input SNR to output SNR. Noise Figure is 10*log10(F) in dB. For low-noise applications like satellite receivers, NF becomes awkwardly small to work with, so we use Equivalent Noise Temperature (Te). Te = T0(F - 1), where T0 is 290K. This tells us the temperature a resistor would need to be to generate the same amount of noise.",
      interviewExplanation: "If you put a perfectly clean signal into an amplifier, it comes out louder but slightly hissier because the amp added its own noise. The Noise Figure is a grade of how 'noisy' the amp itself is. In cascades, the very first amplifier (LNA) dictates the overall noise figure of the entire system (Friis formula).",
      keyPoints: ["NF = SNR_in / SNR_out (in dB)", "Measures internal noise addition", "Friis formula highlights importance of the first stage"],
      followUpQuestions: ["What is Friis' formula for cascaded noise figures?"]
    },
    difficulty: "Advanced",
    badges: ["Numerical", "Practical"],
    interviewTip: "Highlight Friis' formula: F_total = F1 + (F2-1)/G1. It shows why the first amplifier (LNA) must have high gain and low noise."
  },
  {
    id: "sig-comm-42",
    topicId: "core-ece",
    title: "What is Additive White Gaussian Noise (AWGN)?",
    answer: {
      shortAnswer: "AWGN is a basic noise model used in communication systems. It is additive, has a flat frequency spectrum (white), and follows a Gaussian (normal) amplitude distribution.",
      detailedExplanation: "'Additive' means the noise is simply superimposed on the signal. 'White' means its Power Spectral Density (PSD) is constant across all frequencies (N0/2), analogous to white light containing all colors. 'Gaussian' means the probability of the noise voltage taking any particular value follows a bell curve, representing thermal noise created by random electron motion.",
      interviewExplanation: "AWGN is the baseline assumption for almost all communication theory. We model it this way because the Central Limit Theorem states that the sum of many random processes (like billions of vibrating electrons) tends toward a Gaussian distribution. It is the inescapable background hiss of the universe.",
      keyPoints: ["Additive: Linear addition to signal", "White: Flat power spectrum", "Gaussian: Normal probability distribution", "Represents thermal noise"],
      followUpQuestions: ["Why is the PSD of white noise denoted as N0/2?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Important"],
    interviewTip: "Break down the acronym A-W-G-N letter by letter to give a perfectly structured answer."
  },
  {
    id: "sig-comm-43",
    topicId: "core-ece",
    title: "What is an Antenna's Directivity and Gain?",
    answer: {
      shortAnswer: "Directivity is an antenna's ability to focus radiation in a specific direction. Gain is Directivity multiplied by the antenna's electrical efficiency.",
      detailedExplanation: "An isotropic radiator (a theoretical point source) radiates energy equally in all directions (sphere). Directivity measures how much more intensely a real antenna radiates in its maximum direction compared to the isotropic source. Gain takes into account the physical losses of the antenna materials (ohmic heating). If an antenna is 100% efficient, Gain equals Directivity. Gain is usually expressed in dBi (relative to isotropic).",
      interviewExplanation: "Think of a lightbulb versus a flashlight. They might both use 5 Watts, but the flashlight uses a reflector to focus all the light into a beam. Directivity is how narrow that beam is. Gain is the directivity minus the light lost due to the reflector being a bit dirty.",
      keyPoints: ["Directivity: Focusing ability vs Isotropic source", "Gain = Directivity * Efficiency", "Measured in dBi"],
      followUpQuestions: ["What is the difference between dBi and dBd?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "The flashlight analogy is universally understood and effectively separates the concepts of total power and focused intensity."
  },
  {
    id: "sig-comm-44",
    topicId: "core-ece",
    title: "Explain the types of Electromagnetic Wave Propagation.",
    answer: {
      shortAnswer: "The three main types are Ground Wave (follows earth curvature, <2MHz), Sky Wave (bounces off ionosphere, 2-30MHz), and Space Wave / Line-of-Sight (travels directly, >30MHz).",
      detailedExplanation: "Ground wave propagation occurs at low frequencies (VLF, AM radio) where the wave diffracts along the earth's surface. Sky wave (HF, shortwave) relies on refraction from the ionosphere to achieve over-the-horizon, intercontinental communication. Space wave or Line-of-Sight (VHF, UHF, microwaves) punches right through the ionosphere, requiring direct visibility between antennas, which limits range to the radio horizon (used for FM, TV, cellular, and satellite).",
      interviewExplanation: "Frequency dictates how the wave interacts with the Earth. Low frequencies stick to the ground. Medium/High frequencies bounce off the upper atmosphere like a mirror, which is how amateur radio operators talk across the globe. Very high frequencies act like lasers; they go straight into space unless there's a receiver in direct view.",
      keyPoints: ["Ground Wave: < 2 MHz, diffraction", "Sky Wave: 2-30 MHz, ionospheric reflection", "Space Wave (LOS): > 30 MHz, direct path"],
      followUpQuestions: ["How does the day/night cycle affect Sky Wave propagation?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "Link each propagation type to a practical technology: AM Radio for ground, Shortwave for sky, Cellular/Wi-Fi for Space wave."
  },
  {
    id: "sig-comm-45",
    topicId: "core-ece",
    title: "What is Phase Locked Loop (PLL) and where is it used?",
    answer: {
      shortAnswer: "A PLL is a control system that generates an output signal whose phase is constantly matched to the phase of an input reference signal.",
      detailedExplanation: "A basic PLL consists of a Phase Detector, a Low Pass Filter, and a Voltage Controlled Oscillator (VCO). The phase detector compares the input signal with the VCO output, generating an error voltage. The LPF smooths this voltage, which drives the VCO to speed up or slow down until its phase locks with the input. Once locked, the VCO tracks the input frequency exactly.",
      interviewExplanation: "A PLL is basically a frequency tracking machine. We use it heavily in communications for coherent demodulation (recovering the exact carrier phase for BPSK/SSB), frequency synthesis (generating multiple radio channels from one crystal oscillator), and FM demodulation.",
      keyPoints: ["Components: Phase Detector, LPF, VCO", "Locks output phase to input phase", "Used for FM demodulation and Frequency Synthesis"],
      followUpQuestions: ["How is a PLL used to demodulate an FM signal?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Draw a quick block diagram (Phase Detector -> LPF -> VCO -> feedback) as it clarifies the explanation immediately."
  },
  {
    id: "sig-comm-46",
    topicId: "core-ece",
    title: "Explain matched filter and its purpose.",
    answer: {
      shortAnswer: "A matched filter is the optimal linear filter designed to maximize the Signal-to-Noise Ratio (SNR) in the presence of additive white Gaussian noise.",
      detailedExplanation: "The impulse response of a matched filter is simply the time-reversed and delayed version of the known input signal. By matching the filter to the signal shape, the filter effectively performs a cross-correlation between the received noisy signal and the expected signal template. The output peaks at the exact moment the whole pulse has entered the filter, offering the highest possible SNR for a threshold detector to make a decision.",
      interviewExplanation: "If you are looking for a specific shape in a sea of noise, the matched filter is mathematically the best possible magnifying glass you can use. Radar systems ping a specific waveform, and the receiver's matched filter is perfectly tuned to look only for that exact returning echo, ignoring everything else.",
      keyPoints: ["Maximizes SNR", "h(t) = s(T-t) (time-reversed signal)", "Equivalent to cross-correlation"],
      followUpQuestions: ["What is the peak SNR value at the output of a matched filter?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Numerical"],
    interviewTip: "State that the maximum output SNR depends ONLY on the signal energy and noise PSD (E/N0), NOT on the signal's shape."
  },
  {
    id: "sig-comm-47",
    topicId: "core-ece",
    title: "What is Shannon limit? Is it possible to reach it?",
    answer: {
      shortAnswer: "The Shannon limit is the maximum rate of error-free data transfer theoretically possible over a noisy channel. Modern coding techniques approach it, but cannot exceed it.",
      detailedExplanation: "Derived from Shannon's Capacity theorem (C = B log2(1 + S/N)), the limit establishes an absolute mathematical boundary. For decades, engineers were far from this limit. However, with the invention of Turbo codes in the 1990s, and later Low-Density Parity-Check (LDPC) and Polar codes, modern systems like 5G and deep-space communications operate within fractions of a decibel of the Shannon limit.",
      interviewExplanation: "Shannon defined the absolute laws of physics for information. We can never break his speed limit. However, through highly complex error-correcting codes like LDPC, we are now driving right up against the bumper of that limit.",
      keyPoints: ["Absolute bound for error-free transmission", "C = B log2(1 + S/N)", "Turbo and LDPC codes closely approach it"],
      followUpQuestions: ["What is the trade-off to getting closer to the Shannon limit? (Hint: Latency/Complexity)"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Important"],
    interviewTip: "Mentioning Turbo codes and LDPC shows you are up-to-date with modern digital communications, not just textbook theory."
  },
  {
    id: "sig-comm-48",
    topicId: "core-ece",
    title: "Describe the differences between IIR and FIR filters.",
    answer: {
      shortAnswer: "FIR filters have a finite impulse response, are always stable, and can have strictly linear phase. IIR filters have an infinite response, use feedback, are highly efficient, but can be unstable and have non-linear phase.",
      detailedExplanation: "FIR (Finite Impulse Response) relies only on current and past inputs (no feedback). Thus, their poles are always at the origin of the z-plane, guaranteeing stability. They can easily be designed for linear phase, preventing phase distortion. IIR (Infinite Impulse Response) uses feedback (past outputs). They can achieve steep roll-offs with far fewer coefficients than FIR, saving computational power, but feedback introduces the risk of instability and phase distortion.",
      interviewExplanation: "FIR filters are the safe, high-quality option. They never blow up and don't distort the phase of audio or images. The downside is they require a lot of memory and math. IIR filters are fast and cheap, mimicking analog filters, but you have to be very careful with stability and phase.",
      keyPoints: ["FIR: Stable, Linear Phase, High complexity", "IIR: Feedback, High efficiency, Potential instability", "FIR uses only zeros (typically), IIR uses poles and zeros"],
      followUpQuestions: ["Why is linear phase important in signal processing?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "The linear phase property of FIR is its biggest selling point. Always highlight it."
  },
  {
    id: "sig-comm-49",
    topicId: "core-ece",
    title: "Why is Linear Phase important in filters?",
    answer: {
      shortAnswer: "Linear phase ensures that all frequency components of a signal are delayed by the exact same amount of time, preserving the signal's wave shape.",
      detailedExplanation: "A linear phase response (phase angle proportional to frequency) corresponds to a constant group delay across all frequencies. If a filter has a non-linear phase, different frequency components of the signal will travel through the filter at different speeds. When they recombine at the output, the wave shape will be distorted (phase distortion or dispersion).",
      interviewExplanation: "Think of an orchestra playing. If the high notes from the violins reach your ear slightly before the low notes from the cellos, the music will sound muddy and wrong, even if all the notes are there. Linear phase ensures the entire signal travels together, preserving sharp edges in digital pulses or clear tones in audio.",
      keyPoints: ["Constant group delay", "Prevents phase distortion / dispersion", "Crucial for digital data and image processing", "Easily achieved with FIR filters"],
      followUpQuestions: ["What causes group delay to vary in an IIR filter?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Important"],
    interviewTip: "The orchestra analogy or the concept of 'group delay' perfectly illustrates the physical meaning of phase."
  },
  {
    id: "sig-comm-50",
    topicId: "core-ece",
    title: "What is Gibbs Phenomenon?",
    answer: {
      shortAnswer: "Gibbs Phenomenon is the ringing or overshoot that occurs at the discontinuities of a signal when reconstructed using a truncated Fourier series.",
      detailedExplanation: "When approximating a square wave (which has sudden jump discontinuities) with a finite number of sine waves (Fourier series), an overshoot of about 9% occurs at the edges. No matter how many terms (harmonics) you add to the series, the amplitude of the overshoot does not decrease; the ringing simply gets squeezed closer to the discontinuity. This is a direct consequence of trying to represent an infinitely fast transition with bandlimited (continuous) functions.",
      interviewExplanation: "It's the math's way of saying 'I can't turn corners instantly.' When you cut off the high frequencies of a square wave, the edges ring. This is why practical low-pass filters applied to digital signals often result in rippling edges on an oscilloscope.",
      keyPoints: ["Overshoot at discontinuities", "Amplitude of overshoot stays ~9%", "Caused by finite bandwidth / truncated series"],
      followUpQuestions: ["How do windowing techniques affect the Gibbs phenomenon in FIR filter design?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Important"],
    interviewTip: "Draw a square wave with the classic 'bat-ear' overshoots on the corners."
  },
  {
    id: "sig-comm-51",
    topicId: "core-ece",
    title: "Explain the concept of Multipath Fading.",
    answer: {
      shortAnswer: "Multipath fading occurs when a radio signal reaches the receiver via multiple reflected paths. These waves interfere constructively or destructively, causing rapid signal strength fluctuations.",
      detailedExplanation: "In an urban environment, a transmitted signal bounces off buildings, mountains, and the ground. The receiver picks up the direct line-of-sight signal plus several delayed copies. Because the copies travel different distances, they arrive with different phases. If a reflected wave arrives 180 degrees out of phase with the main wave, they cancel out (a 'deep fade'). Additionally, the delay spread can cause one symbol to bleed into the next, causing Intersymbol Interference (ISI).",
      interviewExplanation: "It's exactly like echoes in a large cave. If you speak too fast, your current word gets mixed up with the echo of your previous word. In cell phones, as you walk down the street, you constantly move in and out of microscopic 'dead zones' caused by these colliding radio echoes.",
      keyPoints: ["Signals take multiple paths", "Phase differences cause constructive/destructive interference", "Causes Rayleigh fading and ISI"],
      followUpQuestions: ["How does OFDM combat multipath fading?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Use the 'echo' analogy and link it to everyday cellular connectivity drops to show practical understanding."
  },
  {
    id: "sig-comm-52",
    topicId: "core-ece",
    title: "What is the difference between FDM and TDM?",
    answer: {
      shortAnswer: "FDM separates multiple users by assigning them different frequency bands at the same time. TDM separates users by assigning them different time slots on the same frequency.",
      detailedExplanation: "Frequency Division Multiplexing (FDM) divides the total channel bandwidth into non-overlapping frequency sub-bands, separated by guard bands (e.g., traditional FM radio stations). Time Division Multiplexing (TDM) uses the entire bandwidth but rapidly switches between users, giving each a small time slice (e.g., 2G GSM cellular). FDM is continuous in time; TDM is continuous in frequency.",
      interviewExplanation: "FDM is like a multi-lane highway. Everyone drives at the same time, but you have to stay in your own lane. TDM is like a single-lane bridge with a traffic light. Cars take turns crossing one by one, using the whole width of the bridge.",
      keyPoints: ["FDM: Different frequencies, same time", "TDM: Same frequency, different times", "FDM needs guard bands, TDM needs guard times (sync)"],
      followUpQuestions: ["What is CDMA and how does it differ from FDM and TDM?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Conceptual"],
    interviewTip: "The highway vs traffic light analogy makes this very intuitive."
  },
  {
    id: "sig-comm-53",
    topicId: "core-ece",
    title: "Explain CDMA (Code Division Multiple Access).",
    answer: {
      shortAnswer: "CDMA allows multiple users to transmit simultaneously on the same frequency by assigning each user a unique, mathematically orthogonal digital code.",
      detailedExplanation: "Unlike FDM (which divides frequency) or TDM (which divides time), CDMA uses Spread Spectrum technology. The baseband data of each user is multiplied by a high-rate spreading code (chipping sequence). All users broadcast at the same time over the same wide frequency band. The receiver uses the exact same unique code to despread and recover the desired signal, while all other users' signals appear as low-level background noise.",
      interviewExplanation: "Imagine a crowded cocktail party. FDM is people speaking at different pitches. TDM is people taking turns speaking. CDMA is everyone speaking at the exact same time, but in different languages. You can tune out the noise and only understand the person speaking English.",
      keyPoints: ["Same time, same frequency", "Separated by orthogonal spreading codes", "Highly secure and resistant to jamming (Spread Spectrum)"],
      followUpQuestions: ["What is the 'Near-Far' problem in CDMA?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual", "Practical"],
    interviewTip: "The 'cocktail party' analogy is the gold standard for explaining CDMA in an interview."
  },
  {
    id: "sig-comm-54",
    topicId: "core-ece",
    title: "What is the Near-Far problem in CDMA?",
    answer: {
      shortAnswer: "The Near-Far problem occurs when a transmitter close to the receiver overwhelms the signal of a transmitter further away, causing the distant signal to be lost.",
      detailedExplanation: "In CDMA, all users share the same frequency at the same time. The receiver separates them by codes, treating other users as background noise. If User A is 10 meters from the cell tower and User B is 5 kilometers away, User A's signal will be massively more powerful at the tower. Because cross-correlation between codes isn't absolutely perfect, User A's 'noise' will completely drown out User B. This is solved by fast, strict power control loops.",
      interviewExplanation: "Going back to the cocktail party analogy: if someone right next to your ear is screaming, you won't be able to hear your friend across the room, even if they are speaking different languages. The network fixes this by dynamically telling the person near the tower to whisper, and the person far away to shout.",
      keyPoints: ["Close transmitters drown out distant ones", "Critical flaw in CDMA systems", "Solved by strict, dynamic power control"],
      followUpQuestions: ["How fast does power control need to operate in 3G networks?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "Emphasize that Power Control is the mandatory technical solution that makes CDMA practically viable."
  },
  {
    id: "sig-comm-55",
    topicId: "core-ece",
    title: "How does a Phase-Shift Keying (PSK) receiver recover the carrier?",
    answer: {
      shortAnswer: "PSK requires a coherent receiver. It uses techniques like the Costas Loop or squaring loops to regenerate a local oscillator phase-locked to the suppressed carrier.",
      detailedExplanation: "In PSK (like BPSK), there is no carrier tone transmitted (it's suppressed, much like DSB-SC). A standard PLL cannot lock onto it because the phase changes by 180 degrees randomly, averaging the carrier to zero. A squaring loop squares the received signal, converting the 180-degree phase shifts into 360-degree (0 degree) shifts, stripping the modulation and creating a pure tone at 2fc. A PLL locks to this, and a frequency divider halves it to recover the exact carrier (fc).",
      interviewExplanation: "Because PSK hides the data in the phase, the receiver must have a local sine wave that is perfectly aligned with the transmitter's sine wave. Since the transmitter doesn't send a pure carrier, we have to use non-linear math tricks—like squaring the signal—to temporarily wipe out the data and reveal the hidden carrier frequency.",
      keyPoints: ["PSK requires coherent detection", "Carrier is suppressed", "Costas loop or Squaring loop used to recover phase"],
      followUpQuestions: ["What is Phase Ambiguity in PSK and how is Differential encoding used to solve it?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Mentioning the 'Costas Loop' shows advanced knowledge of receiver architectures."
  },
  {
    id: "sig-comm-56",
    topicId: "core-ece",
    title: "What is Differential PSK (DPSK) and why is it used?",
    answer: {
      shortAnswer: "DPSK encodes data in the phase *difference* between successive symbols rather than absolute phase, eliminating the need for a complex coherent carrier recovery circuit.",
      detailedExplanation: "In standard PSK, if the receiver's local oscillator locks 180-degrees out of phase (phase ambiguity), every 1 is read as a 0 and vice versa. DPSK solves this by sending data as phase changes. For example, a '0' means 'keep the phase the same', and a '1' means 'shift phase by 180 degrees'. The receiver simply compares the current symbol's phase to the previous symbol's phase. This is much cheaper to implement but performs ~3dB worse in noise than coherent PSK.",
      interviewExplanation: "DPSK sacrifices a little bit of noise immunity to vastly simplify the receiver. You don't need a perfectly locked local oscillator; the signal acts as its own reference. It also completely solves the 'upside-down' phase ambiguity problem of standard PSK.",
      keyPoints: ["Data encoded in phase changes", "Non-coherent detection", "Solves phase ambiguity", "Trade-off: 3dB penalty in SNR"],
      followUpQuestions: ["How does the bit error rate of DPSK compare to BPSK?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Conceptual"],
    interviewTip: "Clearly state the trade-off: DPSK is cheaper and solves ambiguity, but pays a 3dB penalty in noise performance."
  },
  {
    id: "sig-comm-57",
    topicId: "core-ece",
    title: "What is Eye Pattern / Eye Diagram in digital communication?",
    answer: {
      shortAnswer: "An eye diagram is an oscilloscope display where digital data signals are superimposed over one another. It visually indicates signal quality, timing jitter, and Intersymbol Interference (ISI).",
      detailedExplanation: "By triggering the oscilloscope at the symbol rate, all the possible transitions (0-to-1, 1-to-0, 0-to-0, etc.) are overlaid. A clean, undistorted signal creates a wide-open 'eye'. The vertical opening indicates noise margin (immunity to voltage noise). The horizontal opening indicates timing margin (immunity to sampling jitter). The thickness of the traces indicates the amount of ISI.",
      interviewExplanation: "It's the ultimate diagnostic tool for digital links. Just by looking at the 'eye', I can tell you if the cable is too long, if there's too much noise, or if the clock is jittery. If the eye is closed, the receiver can't reliably distinguish a 1 from a 0.",
      keyPoints: ["Visualizes signal integrity", "Vertical opening = Noise margin", "Horizontal opening = Timing jitter margin", "Thickness = ISI"],
      followUpQuestions: ["What causes the eye diagram to close vertically?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Frequently Asked"],
    interviewTip: "Describe the two axes clearly: Vertical is voltage/noise, Horizontal is time/jitter."
  },
  {
    id: "sig-comm-58",
    topicId: "core-ece",
    title: "Explain the concept of Skin Effect.",
    answer: {
      shortAnswer: "Skin effect is the tendency of high-frequency alternating current to flow primarily near the outer surface (skin) of a conductor, increasing its effective resistance.",
      detailedExplanation: "As frequency increases, the alternating magnetic fields within the conductor create eddy currents that push the main current toward the surface. The 'skin depth' is the depth at which the current density falls to 37% (1/e) of the surface value. Because the current is confined to a smaller cross-sectional area, the AC resistance of the wire is much higher than its DC resistance.",
      interviewExplanation: "At DC, electrons use the whole wire. But at microwave frequencies, they only travel on a microscopically thin layer on the outside. This is why high-frequency coaxial cables are often made of a cheap copper-clad steel core, or why waveguides are just empty metal pipes: the inside of the wire literally doesn't matter.",
      keyPoints: ["Current confined to surface at high frequencies", "Increases AC resistance", "Skin depth decreases as frequency increases", "Crucial for RF/Microwave transmission lines"],
      followUpQuestions: ["How does skin effect influence the design of RF cables?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Mentioning 'waveguides' or 'copper-clad steel' shows you understand the practical engineering implications of the physics."
  },
  {
    id: "sig-comm-59",
    topicId: "core-ece",
    title: "What is a Transceiver and what is Duplexing?",
    answer: {
      shortAnswer: "A transceiver is a single device that both transmits and receives. Duplexing is the method allowing two-way communication (Half-Duplex = one at a time, Full-Duplex = simultaneously).",
      detailedExplanation: "To communicate in both directions, we use duplexing. In Time-Division Duplexing (TDD), the transmitter and receiver take turns using the same frequency (Walkie-Talkies). In Frequency-Division Duplexing (FDD), they transmit simultaneously but on two different frequencies to avoid interfering with each other (Cell phones). FDD requires a 'diplexer' or highly selective filter to isolate the strong transmitter from the sensitive receiver.",
      interviewExplanation: "Duplexing is how we manage conversation. Half-duplex is like a walkie-talkie where you have to say 'over'. Full-duplex is like a regular phone call where you can interrupt each other. FDD uses two frequencies to do this, while TDD just flips the switch back and forth faster than humanly noticeable.",
      keyPoints: ["Transceiver: Tx and Rx in one box", "Half-Duplex: TDD (alternating time)", "Full-Duplex: FDD (separate frequencies)"],
      followUpQuestions: ["What is a Diplexer and why is it needed in FDD?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Practical"],
    interviewTip: "The walkie-talkie vs cell phone analogy perfectly differentiates Half vs Full Duplex."
  },
  {
    id: "sig-comm-60",
    topicId: "core-ece",
    title: "What are S-parameters and why are they used instead of Z or Y parameters at high frequencies?",
    answer: {
      shortAnswer: "Scattering (S) parameters relate incident and reflected voltage waves. They are used at RF/Microwave frequencies because traditional open/short circuit tests for Z and Y parameters are physically impossible or unstable.",
      detailedExplanation: "At low frequencies, we define networks using Impedance (Z) or Admittance (Y) parameters, which require strict open or short circuits. At microwave frequencies, a true 'short' acts like an inductor, an 'open' radiates like an antenna, and many active RF devices oscillate if terminated this way. S-parameters solve this by characterizing the network using matched loads (typically 50 ohms) and measuring the power that reflects back (S11) or transmits through (S21).",
      interviewExplanation: "When dealing with microwaves, you can't just leave a wire hanging open to test it; it becomes an antenna. S-parameters treat the circuit like a system of plumbing. We pump a wave in, and measure how much bounces back off the wall (reflection/S11) and how much makes it to the other side (transmission/S21), all while keeping the pipes properly sealed with a 50-ohm terminator.",
      keyPoints: ["S-params measure incident/reflected waves", "Z/Y params require opens/shorts (impossible at RF)", "S11 = Reflection coefficient", "S21 = Forward gain/loss"],
      followUpQuestions: ["What does S11 specifically represent in an antenna context?"]
    },
    difficulty: "Advanced",
    badges: ["Practical", "Important"],
    interviewTip: "The plumbing analogy (measuring bouncing waves instead of probing voltage with opens/shorts) clearly demonstrates intuition for high-frequency physics."
  }
];
