import type { Question } from '../types';

export const sensorsQuestions: Question[] = [
  {
    id: "sensor-1",
    topicId: "sensors-iot",
    title: "What is the primary difference between a sensor and a transducer?",
    answer: {
      shortAnswer: "A sensor detects a physical quantity and responds to it, while a transducer converts one form of energy into another.",
      detailedExplanation: "Although often used interchangeably, there is a subtle difference. A sensor is a device that senses a physical change (like temperature, pressure, or light) and outputs a measurable response (often non-electrical). A transducer specifically converts a non-electrical physical quantity into an electrical signal (or vice-versa). Therefore, a sensor coupled with a signal converter forms a complete transducer.",
      interviewExplanation: "I would explain that a sensor reacts to physical phenomena, whereas a transducer is specifically responsible for converting energy forms. All electrical sensors are technically transducers because they convert a physical phenomenon into an electrical signal.",
      keyPoints: [
        "Sensor: Detects physical changes.",
        "Transducer: Converts energy from one form to another.",
        "Electrical sensors are a subset of transducers."
      ],
      example: "A thermometer is a sensor (detects temperature change via mercury expansion). A thermocouple is a transducer (converts temperature into voltage).",
      followUpQuestions: ["Can you give an example of a transducer that is NOT a sensor?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "Keep it simple: Sensor = Detect, Transducer = Convert."
  },
  {
    id: "sensor-2",
    topicId: "sensors-iot",
    title: "Differentiate between Active and Passive sensors.",
    answer: {
      shortAnswer: "Active sensors require an external power supply to operate, whereas passive sensors generate their own electrical output in response to an external stimulus without auxiliary power.",
      detailedExplanation: "Passive sensors generate a signal directly in response to a stimulus. They draw power from the environment they measure. Active sensors require an external excitation signal or power source to produce an output. The physical quantity modifies the excitation signal to produce the measurement.",
      interviewExplanation: "Active sensors need an external voltage or current source to function. For example, a thermistor needs a current to pass through it to measure voltage drop. Passive sensors generate power themselves, like a thermocouple generating a small voltage due to the Seebeck effect without external power.",
      keyPoints: [
        "Active sensors: Need external excitation/power.",
        "Passive sensors: Self-generating, no external power needed."
      ],
      example: "Passive: Thermocouple, Piezoelectric sensor. Active: RTD, Strain Gauge.",
      followUpQuestions: ["Why might an active sensor be preferred over a passive one despite needing a power source?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Give concrete examples of each immediately after defining them."
  },
  {
    id: "sensor-3",
    topicId: "sensors-iot",
    title: "Explain the working principle of a Strain Gauge. What is the Gauge Factor?",
    answer: {
      shortAnswer: "A strain gauge works on the principle of piezoresistivity, where its electrical resistance changes when mechanically deformed. Gauge factor is the ratio of fractional change in resistance to the fractional change in length (strain).",
      detailedExplanation: "When a conductor is stretched, it becomes longer and narrower, which increases its electrical resistance end-to-end. A strain gauge consists of a fine wire or metallic foil arranged in a grid pattern. When subjected to strain, its resistance changes proportionally. The sensitivity of the strain gauge is expressed by the Gauge Factor (GF), defined as GF = (ΔR/R) / (ΔL/L) = (ΔR/R) / ε.",
      interviewExplanation: "A strain gauge relies on the fact that an object's electrical resistance changes when it is stretched or compressed. We attach it to a structure, and as the structure deforms, the gauge deforms. The Gauge factor measures how sensitive this change is. To measure this tiny change in resistance, we typically put the strain gauge in a Wheatstone bridge circuit.",
      keyPoints: [
        "Principle: Piezoresistance (change in resistance due to strain).",
        "Gauge Factor (GF) = (ΔR/R) / ε.",
        "Typically used with a Wheatstone bridge."
      ],
      example: "Used in digital weighing scales to measure the deformation of a load cell.",
      followUpQuestions: ["Why do we use a Wheatstone bridge to measure strain gauge output?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Numerical"],
    interviewTip: "Always mention the Wheatstone bridge when talking about strain gauges."
  },
  {
    id: "sensor-4",
    topicId: "sensors-iot",
    title: "What is the Piezoelectric Effect and how is it used in sensors?",
    answer: {
      shortAnswer: "The piezoelectric effect is the generation of an electrical charge in certain solid materials in response to applied mechanical stress.",
      detailedExplanation: "Certain crystals (like Quartz) and ceramics (like PZT) exhibit the piezoelectric effect. When compressed or stretched, the crystal lattice deforms, causing a separation of positive and negative charges, which generates a voltage across the material. This effect is reversible. Piezoelectric sensors are excellent for measuring dynamic pressure, force, or acceleration, but poor for static measurements because the charge leaks away over time.",
      interviewExplanation: "Piezoelectric sensors generate a voltage when mechanical force is applied. It's a direct energy conversion from mechanical to electrical. They are ideal for high-frequency dynamic measurements, like knock sensors in car engines or ultrasound transducers. However, they can't measure static (DC) forces because the generated charge dissipates through the circuit's internal resistance.",
      keyPoints: [
        "Mechanical stress generates electric charge.",
        "Good for dynamic (AC) measurements.",
        "Poor for static (DC) measurements due to charge leakage.",
        "Common materials: Quartz, PZT."
      ],
      example: "Microphones, guitar pickups, and ultrasonic imaging probes.",
      followUpQuestions: ["How does the inverse piezoelectric effect work?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Emphasize the limitation: they cannot measure static (constant) forces."
  },
  {
    id: "sensor-5",
    topicId: "sensors-iot",
    title: "How does a Linear Variable Differential Transformer (LVDT) work?",
    answer: {
      shortAnswer: "An LVDT measures linear displacement using a primary transformer coil, two secondary coils, and a movable magnetic core that couples the coils.",
      detailedExplanation: "An LVDT consists of one primary coil and two identical secondary coils placed on either side. A ferromagnetic core slides through the center. The primary is driven by an AC signal. When the core is perfectly centered, the voltages induced in the two secondary coils are equal and opposite (if wired in series opposition), yielding a net zero output. As the core moves linearly, the coupling changes, increasing voltage in one secondary and decreasing it in the other, producing an AC output proportional to displacement.",
      interviewExplanation: "I would describe an LVDT as an electromechanical transducer for linear motion. It uses a moving core inside three coils. Driving the primary coil with AC induces voltage in the secondaries. By wiring the secondaries in reverse series, their outputs cancel at the center. Moving the core changes the magnetic coupling, producing a differential voltage that perfectly maps to the core's position. It has no sliding contacts, so it doesn't wear out.",
      keyPoints: [
        "Inductive sensor for linear displacement.",
        "One primary coil, two secondary coils.",
        "Infinite resolution and frictionless (no physical contact with the core)."
      ],
      example: "Used in CNC machines and aircraft control surfaces for precise position feedback.",
      followUpQuestions: ["How do you convert the AC output of an LVDT to a usable DC position signal?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Practical"],
    interviewTip: "Mention 'frictionless operation' and 'infinite resolution' as its key advantages."
  },
  {
    id: "sensor-6",
    topicId: "sensors-iot",
    title: "Compare RTDs, Thermocouples, and Thermistors for temperature measurement.",
    answer: {
      shortAnswer: "RTDs offer high accuracy and stability over a wide range. Thermocouples offer the widest temperature range and are rugged but less accurate. Thermistors are highly sensitive and accurate but only over a narrow, non-linear range.",
      detailedExplanation: "1. RTD (Resistance Temperature Detector): Made of pure metals (usually Platinum, like PT100). Positive Temperature Coefficient (PTC). Highly linear and accurate. \n2. Thermocouple: Made of two dissimilar metals joined at a junction (Seebeck effect). Very wide range (-200C to >2000C), self-powered, but requires cold-junction compensation. \n3. Thermistor: Ceramic/polymer materials. Usually Negative Temperature Coefficient (NTC). Highly non-linear, but offers massive resistance changes for small temperature shifts (high sensitivity).",
      interviewExplanation: "For temperature sensing, choice depends on the application. I'd use a Thermocouple for extreme environments like furnaces because they are durable and have a massive temperature range. I'd use an RTD, like a PT100, for industrial processes requiring high accuracy and linearity. I'd use a Thermistor for cheap, highly sensitive readings over a narrow range, like monitoring a CPU temperature or human body temperature.",
      keyPoints: [
        "RTD: High accuracy, linear, Pt100.",
        "Thermocouple: Widest range, Seebeck effect, needs cold-junction compensation.",
        "Thermistor: High sensitivity, narrow range, non-linear (usually NTC)."
      ],
      example: "Furnace -> Thermocouple. Laboratory standard -> RTD. Digital thermometer -> Thermistor.",
      followUpQuestions: ["What is Cold Junction Compensation (CJC) in thermocouples?"]
    },
    difficulty: "Intermediate",
    badges: ["Frequently Asked", "Practical"],
    interviewTip: "Structuring your answer by Application is a great way to show engineering judgment."
  },
  {
    id: "sensor-7",
    topicId: "sensors-iot",
    title: "What is a Hall Effect sensor and where is it used?",
    answer: {
      shortAnswer: "A Hall Effect sensor measures the magnitude of a magnetic field. It generates a transverse voltage when a magnetic field is applied perpendicular to the current flow in a conductor.",
      detailedExplanation: "When a current-carrying conductor or semiconductor is placed in a magnetic field perpendicular to the current, the charge carriers are pushed to one side of the material by the Lorentz force. This charge separation creates a measurable voltage (Hall voltage) transverse to both the current and the magnetic field. The voltage is proportional to the magnetic field strength.",
      interviewExplanation: "Hall effect sensors detect magnetic fields. They work because a magnetic field pushes flowing electrons to one side of a semiconductor, creating a small voltage difference across it. They are great because they are non-contact. You can use them to measure motor speed by placing a magnet on the shaft and counting pulses, or as proximity switches.",
      keyPoints: [
        "Based on Lorentz force on charge carriers.",
        "Outputs a voltage proportional to magnetic field strength.",
        "Non-contact measurement."
      ],
      example: "Used in BLDC (Brushless DC) motors to detect rotor position, and in ABS systems to measure wheel speed.",
      followUpQuestions: ["How does a Hall effect sensor differentiate between a North and South magnetic pole?"]
    },
    difficulty: "Beginner",
    badges: ["Important", "Practical"],
    interviewTip: "Mention non-contact and immune to dust/dirt as primary advantages over optical sensors."
  },
  {
    id: "sensor-8",
    topicId: "sensors-iot",
    title: "Explain the working of a MEMS Accelerometer.",
    answer: {
      shortAnswer: "A MEMS accelerometer measures acceleration using a microscopic mass suspended by silicon springs. Acceleration causes the mass to move, changing the capacitance between stationary and moving fingers.",
      detailedExplanation: "Micro-Electro-Mechanical Systems (MEMS) accelerometers consist of a 'proof mass' suspended by micro-machined silicon tethers (springs). Attached to the mass are interdigitated 'fingers' that sit between fixed fingers. When the sensor accelerates, inertia keeps the mass stationary while the housing moves, changing the distance between the fingers. This alters the differential capacitance, which an on-chip circuit converts into a proportional analog or digital voltage.",
      interviewExplanation: "MEMS accelerometers are essentially microscopic spring-mass systems etched into silicon. When you accelerate, a tiny suspended mass inside lags behind due to inertia. This movement changes the capacitance between the mass and fixed electrodes. The built-in circuitry measures this tiny capacitance change and converts it to an acceleration value. This is how your smartphone knows when you rotate it.",
      keyPoints: [
        "Uses a suspended proof mass.",
        "Measures capacitance change caused by displacement of the mass.",
        "Miniaturized using semiconductor fabrication techniques."
      ],
      example: "Smartphones for screen rotation, car airbag deployment systems.",
      followUpQuestions: ["How can an accelerometer measure tilt or gravity when it is entirely stationary?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual", "Practical"],
    interviewTip: "Using the smartphone screen rotation example instantly grounds the concept in reality."
  },
  {
    id: "sensor-9",
    topicId: "sensors-iot",
    title: "Why is Signal Conditioning required for most sensors?",
    answer: {
      shortAnswer: "Signal conditioning is necessary to convert a raw sensor output into a robust, readable signal suitable for an ADC or microcontroller.",
      detailedExplanation: "Raw sensor outputs are often non-ideal. They may be very small (e.g., microvolts from a thermocouple), noisy, non-linear, or riding on a large common-mode voltage. Signal conditioning circuits perform amplification, filtering (low-pass to prevent aliasing and remove noise), isolation, linearization, and level shifting to match the input range of an Analog-to-Digital Converter.",
      interviewExplanation: "You rarely connect a sensor directly to a microcontroller. First, the signal is usually too small, so it needs amplification (like using an Instrumentation Amp for a strain gauge). Second, it picks up noise, so we need filtering. Third, we might need level shifting to ensure the voltage sits between 0 and 3.3V for the ADC. Signal conditioning prepares the raw physical data for the digital world.",
      keyPoints: [
        "Amplification (boosting microvolts to volts).",
        "Filtering (removing high-frequency noise).",
        "Level Shifting (matching ADC voltage range).",
        "Linearization (correcting non-linear sensor curves)."
      ],
      example: "A thermocouple outputs millivolts. Signal conditioning amplifies it to a 0-5V range and filters out 50Hz/60Hz power line noise.",
      followUpQuestions: ["What specific amplifier is most commonly used for bridge sensors and why?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Use the acronym AFL - Amplify, Filter, Level-shift to remember the steps."
  },
  {
    id: "sensor-10",
    topicId: "sensors-iot",
    title: "Why is an Instrumentation Amplifier (In-Amp) preferred over a standard Op-Amp for sensor readouts?",
    answer: {
      shortAnswer: "An Instrumentation Amplifier provides extremely high Common-Mode Rejection Ratio (CMRR) and very high input impedance, essential for reading small differential signals in noisy environments.",
      detailedExplanation: "Sensors like strain gauges (in Wheatstone bridges) output tiny differential voltages (millivolts) riding on a large common-mode voltage (e.g., half the supply voltage). A standard differential op-amp configuration struggles here because mismatched resistors degrade CMRR, and the input impedance is limited by those resistors. An In-Amp (typically consisting of 3 op-amps) provides infinite input impedance (preventing sensor loading) and perfectly matched internal resistors, yielding exceptional CMRR to reject noise and common-mode voltages.",
      interviewExplanation: "If I'm reading a load cell, the actual signal might be 5mV, but it's sitting on a 2.5V DC bias and picking up electromagnetic noise. An Instrumentation Amplifier is specifically designed to ignore the 2.5V and the noise (high CMRR) and only amplify the 5mV difference. Plus, its buffered inputs won't draw current from the bridge, which would otherwise skew the measurement.",
      keyPoints: [
        "High CMRR: Rejects common-mode noise and DC bias.",
        "High Input Impedance: Prevents loading the sensor.",
        "Gain is easily set with a single external resistor."
      ],
      example: "Reading ECG signals from the human body, which are microvolts riding on high common-mode noise.",
      followUpQuestions: ["What exactly is Common-Mode Rejection Ratio (CMRR)?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Coding"],
    interviewTip: "Knowing the 3-op-amp topology of an In-Amp will impress hardware interviewers."
  },
  {
    id: "sensor-11",
    topicId: "sensors-iot",
    title: "State and explain the Nyquist Sampling Theorem in the context of ADCs.",
    answer: {
      shortAnswer: "The Nyquist theorem states that a continuous-time signal must be sampled at a frequency strictly greater than twice its highest frequency component to reconstruct it perfectly without aliasing.",
      detailedExplanation: "If a signal has a maximum frequency bandwidth of f_max, the sampling rate (f_s) must satisfy f_s > 2 * f_max. The frequency (f_s / 2) is known as the Nyquist frequency. If frequencies higher than the Nyquist frequency enter the ADC, they 'fold back' into the baseband, creating false, lower-frequency signals in the digital data. This phenomenon is called aliasing.",
      interviewExplanation: "If you want to digitize a sensor signal accurately, you have to sample it fast enough. Nyquist says you must sample at more than twice the highest frequency present in the signal. If you don't, high-frequency noise will disguise itself as low-frequency data in your digital readings—an error called aliasing. That's why we always put an analog low-pass filter (anti-aliasing filter) before the ADC.",
      keyPoints: [
        "f_sampling > 2 * f_max.",
        "Prevents aliasing (high frequencies mimicking low frequencies).",
        "Necessitates an anti-aliasing (low-pass) filter before the ADC."
      ],
      example: "Audio CDs sample at 44.1 kHz because human hearing goes up to 20 kHz (44.1 > 2 * 20).",
      followUpQuestions: ["What happens if you sample exactly at 2 * f_max?"]
    },
    difficulty: "Beginner",
    badges: ["Frequently Asked", "Numerical"],
    interviewTip: "Always mention the Anti-Aliasing filter when asked about Nyquist."
  },
  {
    id: "sensor-12",
    topicId: "sensors-iot",
    title: "What is ADC Resolution and how do you calculate the Step Size?",
    answer: {
      shortAnswer: "Resolution is the number of bits an ADC uses to represent an analog value. Step size (or LSB voltage) is the smallest change in analog voltage the ADC can detect.",
      detailedExplanation: "An N-bit ADC divides the reference voltage range into 2^N distinct levels. The resolution determines the precision of the conversion. The Step Size (or voltage of the Least Significant Bit, V_LSB) is calculated as: Step Size = V_ref / (2^N). A smaller step size means the ADC can detect finer changes in the sensor's output.",
      interviewExplanation: "Resolution tells you how 'granular' your digital data will be. If I have a 10-bit ADC and a 5V reference, the ADC can output 2^10, or 1024, different digital values. The step size is 5V divided by 1024, which is roughly 4.88 millivolts. This means my microcontroller can only detect changes in the sensor output that are larger than 4.88mV.",
      keyPoints: [
        "Resolution = N bits (implies 2^N levels).",
        "Step Size (V_LSB) = V_ref / 2^N.",
        "Higher resolution = smaller step size = higher precision."
      ],
      example: "A 12-bit ADC with a 3.3V reference has a step size of 3.3V / 4096 = 0.8mV.",
      followUpQuestions: ["Does higher resolution always mean higher accuracy?"]
    },
    difficulty: "Beginner",
    badges: ["Numerical", "Important"],
    interviewTip: "Be prepared to do simple mental math for 8-bit (256) or 10-bit (1024) resolutions."
  },
  {
    id: "sensor-13",
    topicId: "sensors-iot",
    title: "What is Quantization Error in an ADC?",
    answer: {
      shortAnswer: "Quantization error is the inherent difference (or noise) between the actual analog input voltage and the nearest digital step value assigned by the ADC.",
      detailedExplanation: "Because an ADC maps a continuous, infinite range of analog voltages to a finite number of digital codes, there is always a rounding error. The maximum quantization error for an ideal ADC is ±1/2 LSB (Least Significant Bit). This error acts as a noise floor (Quantization Noise) that limits the maximum Signal-to-Noise Ratio (SNR) of the system. It can only be reduced by increasing the ADC resolution.",
      interviewExplanation: "When an ADC digitizes a signal, it has to round the continuous analog voltage to the nearest discrete digital 'step'. That rounding difference is the quantization error. Even if your sensor and amplifier are perfectly noiseless, this rounding introduces a fundamental noise floor into your system. To reduce it, you simply have to use an ADC with more bits.",
      keyPoints: [
        "Caused by mapping continuous signals to discrete levels.",
        "Maximum error is ±0.5 LSB.",
        "Manifests as quantization noise.",
        "Decreases as ADC resolution increases."
      ],
      example: "If step size is 10mV and input is 14mV, the ADC rounds to 10mV. The 4mV difference is quantization error.",
      followUpQuestions: ["What is the theoretical maximum SNR of an ideal N-bit ADC?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Know the formula: SNR (dB) ≈ 6.02*N + 1.76, where N is the number of bits."
  },
  {
    id: "sensor-14",
    topicId: "sensors-iot",
    title: "Explain how a Successive Approximation Register (SAR) ADC works.",
    answer: {
      shortAnswer: "A SAR ADC uses a binary search algorithm to narrow down the input voltage. It compares the input to the output of an internal DAC, determining the digital code one bit at a time, from MSB to LSB.",
      detailedExplanation: "The SAR ADC contains a comparator, a DAC, and a Successive Approximation Register. It starts by setting the Most Significant Bit (MSB) to 1 (setting DAC to half reference). The comparator checks if the input is higher or lower. If higher, the MSB stays 1; if lower, it becomes 0. It then moves to the next bit, setting it to 1, and repeats the process. An N-bit SAR ADC takes exactly N clock cycles to complete one conversion.",
      interviewExplanation: "Think of a SAR ADC like playing the 'guess the number' game using a binary search. If the range is 0 to 100, you guess 50. If the answer is 'higher', you guess 75, and so on. The SAR does exactly this using a built-in DAC to generate the 'guesses' and a comparator to ask 'higher or lower?'. It's an excellent balance of speed, high resolution, and low power, making it the most common ADC in microcontrollers.",
      keyPoints: [
        "Uses binary search algorithm.",
        "Requires N clock cycles for N bits of resolution.",
        "Great balance of speed, resolution, and power.",
        "Usually includes an internal Sample and Hold (S/H) circuit."
      ],
      example: "The 10-bit or 12-bit ADCs built into most Arduino/STM32 microcontrollers are SAR ADCs.",
      followUpQuestions: ["Why is a Sample and Hold (S/H) circuit crucial for a SAR ADC?"]
    },
    difficulty: "Advanced",
    badges: ["Important", "Frequently Asked"],
    interviewTip: "The 'binary search' analogy is the best way to explain SAR simply and effectively."
  },
  {
    id: "sensor-15",
    topicId: "sensors-iot",
    title: "How does a Flash ADC work, and why is it the fastest?",
    answer: {
      shortAnswer: "A Flash ADC uses a massive bank of parallel comparators connected to a resistor ladder to simultaneously compare the input voltage against all possible reference levels in a single clock cycle.",
      detailedExplanation: "An N-bit flash ADC consists of 2^N - 1 comparators. A precision resistor ladder divides the reference voltage into 2^N - 1 discrete nodes. The analog input is fed to one side of all comparators, while the reference nodes feed the other. The comparators evaluate simultaneously, producing a thermometer code, which a priority encoder immediately converts to a binary output. Because it happens in parallel, it is incredibly fast (GHz range).",
      interviewExplanation: "A Flash ADC is pure brute force hardware. If it's an 8-bit ADC, it has 255 comparators inside. It drops the analog signal into all 255 comparators at the exact same time. It checks all possible levels at once, so the conversion takes only one single clock cycle. The downside? It consumes a massive amount of power and silicon area, so it's usually limited to 8 bits.",
      keyPoints: [
        "Uses 2^N - 1 comparators.",
        "Conversion takes 1 clock cycle.",
        "Extremely fast but large, expensive, and power-hungry.",
        "Resolution is usually limited (e.g., 8-bit)."
      ],
      example: "Used in digital oscilloscopes and radar systems where extreme sampling rates are required.",
      followUpQuestions: ["Why don't we usually make 16-bit Flash ADCs?"]
    },
    difficulty: "Advanced",
    badges: ["Conceptual"],
    interviewTip: "Emphasize the tradeoff: Ultimate speed comes at the cost of massive hardware (2^N-1 comparators)."
  },
  {
    id: "sensor-16",
    topicId: "sensors-iot",
    title: "Explain Sigma-Delta (Σ-Δ) ADCs and their primary advantage.",
    answer: {
      shortAnswer: "A Sigma-Delta ADC uses oversampling and noise shaping to achieve very high resolution. It converts the input into a high-frequency 1-bit stream, then digitally filters it to produce high-resolution data.",
      detailedExplanation: "A Sigma-Delta ADC works differently from others. It samples the signal at a frequency much higher than the Nyquist rate (oversampling) using a 1-bit ADC (a simple comparator). An integrator loop (Sigma) measures the delta between the input and the analog feedback. This process pushes quantization noise into very high frequencies (noise shaping). A digital low-pass filter then removes this high-frequency noise and decimates the 1-bit stream into a slow, high-resolution (e.g., 24-bit) binary word.",
      interviewExplanation: "Sigma-Delta ADCs trade speed for extreme resolution. Instead of taking slow, precise samples, it takes millions of 1-bit, sloppy samples very fast (oversampling). Using feedback, it pushes all the rounding error (noise) into high frequencies. Then, a digital filter averages out the 1-bit stream, stripping away the high-frequency noise and leaving an incredibly precise 24-bit output. They are perfect for slow sensors like strain gauges or audio.",
      keyPoints: [
        "Key concepts: Oversampling, Noise Shaping, Digital Filtering/Decimation.",
        "Very high resolution (24-bit+).",
        "Slow conversion rate.",
        "Excellent for audio and high-precision sensor weigh scales."
      ],
      example: "Used for digitizing high-fidelity audio or high-precision industrial weight scales.",
      followUpQuestions: ["What is 'Noise Shaping' in a Sigma-Delta ADC?"]
    },
    difficulty: "Advanced",
    badges: ["Frequently Asked", "Important"],
    interviewTip: "Focus on the two keywords: Oversampling and Noise Shaping."
  },
  {
    id: "sensor-17",
    topicId: "sensors-iot",
    title: "How does an R-2R Ladder DAC work?",
    answer: {
      shortAnswer: "An R-2R DAC converts a digital binary code into an analog voltage using a repeating network of only two resistor values (R and 2R) to create binary-weighted currents.",
      detailedExplanation: "Unlike a binary-weighted resistor DAC which requires drastically different resistor values for each bit, the R-2R ladder uses only two resistor values, arranged in a cascading ladder topology. Digital bits act as switches connecting the 2R branches to either the reference voltage (Vref) or ground. The ladder structure naturally divides the current such that each bit contributes a binary-weighted fraction of Vref (e.g., 1/2, 1/4, 1/8) to the output sum.",
      interviewExplanation: "If you want to convert digital bits back to an analog voltage, an R-2R ladder is a clever way to do it. It's just a network of resistors with only two values: R and 2R. As the digital bits toggle switches on the rungs of the ladder, the resistor network divides the currents so the most significant bit contributes half the voltage, the next bit a quarter, and so on. It's much easier to manufacture because you only need to match two resistor values accurately.",
      keyPoints: [
        "Uses only two resistor values (R and 2R).",
        "Easier to manufacture on silicon than binary-weighted DACs.",
        "Bits act as switches diverting current to the output node or ground."
      ],
      example: "Commonly used inside microcontrollers to provide analog outputs.",
      followUpQuestions: ["What is the main disadvantage of a standard binary-weighted DAC compared to an R-2R DAC?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Highlight manufacturability: matching two resistor sizes perfectly is easy on an IC; matching 16 vastly different sizes is impossible."
  },
  {
    id: "sensor-18",
    topicId: "sensors-iot",
    title: "How can PWM (Pulse Width Modulation) be used as a simple DAC?",
    answer: {
      shortAnswer: "A high-frequency PWM signal can be passed through a low-pass RC filter to produce a stable DC voltage proportional to the PWM duty cycle.",
      detailedExplanation: "PWM rapidly switches a digital pin between Vcc and Ground. By changing the duty cycle (the percentage of time the signal is HIGH), the average voltage changes. V_out = Duty_Cycle * Vcc. By passing this PWM signal through a simple analog low-pass filter (resistor and capacitor), the high-frequency switching is smoothed out, leaving only the continuous average DC voltage. It’s a cheap, software-driven DAC.",
      interviewExplanation: "If my microcontroller doesn't have a built-in DAC, I can make one using PWM. I output a fast square wave. If I want 2.5V from a 5V system, I set the duty cycle to 50%. But it's still a square wave. To make it a flat analog voltage, I pass it through an RC low-pass filter. The capacitor smooths out the pulses into a steady DC voltage. It's cheap but slow to respond to changes.",
      keyPoints: [
        "V_avg = Duty Cycle * Vcc.",
        "Requires a Low-Pass Filter (RC network).",
        "Cheap and ubiquitous, but slow and has some ripple."
      ],
      example: "Fading an LED smoothly or generating analog audio from a basic Arduino.",
      followUpQuestions: ["How do the PWM frequency and the RC filter cutoff frequency relate?"]
    },
    difficulty: "Beginner",
    badges: ["Practical", "Coding"],
    interviewTip: "Mention the trade-off: to reduce voltage ripple you need a heavier filter, which makes the DAC respond slower."
  },
  {
    id: "sensor-19",
    topicId: "sensors-iot",
    title: "Compare I2C and SPI communication protocols for interfacing sensors.",
    answer: {
      shortAnswer: "I2C uses 2 wires, supports multiple masters, and relies on device addresses, but is slower. SPI uses 4 wires, is much faster, supports full-duplex, but requires a separate Chip Select wire for every device.",
      detailedExplanation: "I2C (Inter-Integrated Circuit) uses SDA (data) and SCL (clock) with pull-up resistors. Devices are addressed via a 7-bit software address, meaning many devices can share the two wires. It's half-duplex and relatively slow (100kHz - 1MHz). SPI (Serial Peripheral Interface) uses MOSI, MISO, SCK, and CS (Chip Select). It is push-pull, full-duplex, and can run at tens of MHz. However, every new slave device requires its own dedicated CS pin from the master.",
      interviewExplanation: "When choosing a sensor interface, it's a tradeoff between speed and pin count. If I have five temperature sensors on a board and they don't need fast reading, I'll use I2C. I only need 2 pins on my MCU, and I call them by their addresses. If I'm reading an IMU or a high-speed ADC where I need massive data throughput, I use SPI. It's much faster and full-duplex, but I have to spend an extra IO pin for every device's chip-select line.",
      keyPoints: [
        "I2C: 2 wires, address-based, multi-master, slower, half-duplex, pull-ups required.",
        "SPI: 4 wires, chip-select based, single master, much faster, full-duplex."
      ],
      example: "I2C is standard for simple environmental sensors. SPI is used for high-speed ADCs or SD cards.",
      followUpQuestions: ["What happens if two I2C sensors have the same hardware address?"]
    },
    difficulty: "Intermediate",
    badges: ["Important", "Practical"],
    interviewTip: "Always mention pull-up resistors when discussing I2C hardware."
  },
  {
    id: "sensor-20",
    topicId: "sensors-iot",
    title: "What is Sensor Calibration, and why is Zero-Offset and Span adjustment important?",
    answer: {
      shortAnswer: "Calibration ensures a sensor's output accurately matches known physical standards. Zero-offset corrects the baseline reading (0 point), while span adjusts the scaling (slope) of the sensor's response.",
      detailedExplanation: "No sensor is perfect out of the box due to manufacturing tolerances. Calibration involves taking readings at known reference points. \n1. Zero/Offset Error: The sensor reads a non-zero value when the input is zero. This is a constant shift (y-intercept) across the entire range. \n2. Span/Gain Error: The sensor's sensitivity (slope) is incorrect. A 10-unit change in input might only cause a 9-unit change in output. Two-point calibration uses a low reference and a high reference to correct both the offset (b) and the span (m) in the linear equation y = mx + b.",
      interviewExplanation: "Imagine a digital scale. If there's nothing on it and it reads 5 grams, that's a zero-offset error. We 'tare' or calibrate it to subtract that 5g. But what if I put a known 100g weight on it, and it reads 90g? That's a span error; the slope is wrong. To fully calibrate a linear sensor, we generally do a two-point calibration: read at zero, read at max, and calculate the y=mx+b correction factors in software.",
      keyPoints: [
        "Offset: Shifts the whole curve up or down (y-intercept).",
        "Span: Changes the slope of the curve (gain).",
        "Requires a known physical reference standard."
      ],
      example: "Calibrating a pH sensor using pH 4.0 and pH 7.0 buffer solutions.",
      followUpQuestions: ["How do you correct for non-linear sensor behavior?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Use the equation y = mx + b to explain calibration clearly (m is span, b is offset)."
  },
  {
    id: "sensor-21",
    topicId: "sensors-iot",
    title: "Define Sensitivity, Accuracy, and Precision in the context of sensors.",
    answer: {
      shortAnswer: "Sensitivity is the output change per unit of input. Accuracy is how close the reading is to the true value. Precision is how repeatable the readings are.",
      detailedExplanation: "1. Sensitivity: The slope of the transfer function (e.g., 10 mV/°C). \n2. Accuracy: The maximum error between the sensor's measured value and the true physical value. Usually expressed as a percentage of full scale. \n3. Precision (Repeatability): If you measure the exact same physical quantity 10 times, precision is how tightly grouped those 10 readings are, regardless of whether they are near the true value.",
      interviewExplanation: "I like to use the target practice analogy. Accuracy is hitting the bullseye. Precision is hitting the exact same spot on the target 5 times in a row, even if it's in the corner (meaning it's precise but inaccurate). In sensors, you can fix bad accuracy with software calibration, but you cannot fix bad precision—if the sensor gives random outputs for the same input, software can't save you. Sensitivity just dictates how big of a signal you get for a small physical change.",
      keyPoints: [
        "Sensitivity: ΔOutput / ΔInput.",
        "Accuracy: Closeness to true value.",
        "Precision: Repeatability/Variance.",
        "You can calibrate for accuracy, but precision is inherent to the sensor's noise."
      ],
      example: "A precise but inaccurate temperature sensor always reads exactly 25.1C when the room is 20.0C.",
      followUpQuestions: ["What is sensor resolution and how is it different from precision?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual", "Frequently Asked"],
    interviewTip: "The bullseye/target analogy is universally understood and perfect for this."
  },
  {
    id: "sensor-22",
    topicId: "sensors-iot",
    title: "What is Hysteresis in a sensor?",
    answer: {
      shortAnswer: "Hysteresis is the phenomenon where a sensor's output for a given input differs depending on whether the input is increasing or decreasing.",
      detailedExplanation: "In an ideal sensor, a specific physical input always yields the exact same electrical output. In reality, mechanical sensors (like pressure diaphragms) or magnetic materials retain some 'memory' of their previous state. If you slowly increase pressure to 50 psi, the sensor might output 2.0V. If you increase it to 100 psi, then decrease it back down to 50 psi, it might output 2.1V. The gap between the forward curve and the reverse curve is the hysteresis error.",
      interviewExplanation: "Hysteresis is basically sensor 'memory' or lag. If you heat an oven up to 100 degrees, the sensor gives you one voltage. If you heat it to 200 degrees and let it cool back down to 100, the sensor gives you a slightly different voltage. The sensor's reading depends on the direction it approached the measurement from. It's very common in mechanical sensors and magnetic cores, and it's difficult to compensate for in software.",
      keyPoints: [
        "Different outputs for the same input based on direction of change.",
        "Creates a 'loop' in the transfer function graph.",
        "Common in magnetic sensors and mechanical diaphragms."
      ],
      example: "A bimetallic thermostat strips snapping on and off at slightly different temperatures to prevent rapid toggling.",
      followUpQuestions: ["How can intentional hysteresis be useful in comparator circuits (e.g., Schmitt Triggers)?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Be sure to mention that hysteresis is fundamentally path-dependent behavior."
  },
  {
    id: "sensor-23",
    topicId: "sensors-iot",
    title: "How does a Capacitive Touch Sensor work?",
    answer: {
      shortAnswer: "A capacitive sensor detects the presence of a conductive object (like a human finger) by measuring changes in capacitance in an electrical field.",
      detailedExplanation: "A basic capacitive touch sensor uses a copper pad on a PCB. The pad has a baseline parasitic capacitance to ground. When a human finger (which is conductive and holds a charge) comes near the pad, it acts as the second plate of a capacitor, altering the local dielectric environment and increasing the total capacitance. A microcontroller measures this change by charging the capacitor and timing how long it takes to discharge, or by using a dedicated capacitive sensing IC.",
      interviewExplanation: "Your finger is essentially a conductor filled with saltwater. When you bring it near a copper pad on a circuit board, you change the electrical field around the pad, effectively increasing its capacitance to ground. The microcontroller constantly pings the pad. When you touch it, it takes slightly longer for the pad to charge up to a certain voltage because the capacitance is higher. When the MCU detects that timing delay, it registers a touch.",
      keyPoints: [
        "Detects changes in capacitance.",
        "Human body acts as a conductive mass.",
        "Does not require physical pressure, only proximity.",
        "Can work through glass or plastic overlays."
      ],
      example: "Smartphone screens, modern microwave buttons, trackpads.",
      followUpQuestions: ["Why do capacitive touch screens fail to work well with standard gloves or water drops?"]
    },
    difficulty: "Beginner",
    badges: ["Practical"],
    interviewTip: "Highlight that it doesn't require physical deformation/pressure, distinguishing it from resistive touch."
  },
  {
    id: "sensor-24",
    topicId: "sensors-iot",
    title: "What is an Optical Encoder, and how is it used to measure rotational position?",
    answer: {
      shortAnswer: "An optical encoder uses an LED, a photodetector, and a slotted disc to convert rotary motion into a series of digital pulses.",
      detailedExplanation: "A rotary optical encoder has a disc with opaque and transparent segments mounted on a motor shaft. An LED shines light through the disc onto a photodiode. As the shaft spins, the light is interrupted, generating square wave pulses. An incremental encoder usually has two tracks offset by 90 degrees (Quadrature output). By observing which pulse channel (A or B) goes high first, the microcontroller can determine both the speed and the direction of rotation.",
      interviewExplanation: "To measure how fast a motor is spinning and which way, we use an optical encoder. It's just a slotted wheel breaking a light beam. If we just had one slot track, we'd only know speed. But if we put two slot tracks on the wheel, slightly offset, we get two square waves that are out of phase. By checking if wave A leads wave B, or B leads A, our code can instantly tell if the motor is going clockwise or counter-clockwise. This is called quadrature encoding.",
      keyPoints: [
        "Uses light interruption to generate pulses.",
        "Quadrature encoders output two signals 90° out of phase.",
        "Provides both speed and direction information."
      ],
      example: "The volume knob on modern stereos or the scroll wheel on a computer mouse.",
      followUpQuestions: ["What is the difference between an absolute encoder and an incremental encoder?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Make sure you understand and can explain the concept of Quadrature (A and B signals out of phase)."
  },
  {
    id: "sensor-25",
    topicId: "sensors-iot",
    title: "Explain the working of an Ultrasonic Distance Sensor (e.g., HC-SR04).",
    answer: {
      shortAnswer: "It calculates distance by emitting a high-frequency sound pulse and measuring the time it takes for the echo to bounce off an object and return.",
      detailedExplanation: "The sensor contains an ultrasonic transmitter and receiver. A microcontroller triggers the transmitter to send a burst of ultrasound (typically at 40 kHz). The sensor simultaneously starts a timer. The sound travels at the speed of sound in air (~343 m/s), hits an object, and reflects back to the receiver. The sensor stops the timer. The distance is calculated as: Distance = (Time * Speed of Sound) / 2.",
      interviewExplanation: "Ultrasonic sensors work exactly like bat echolocation. To measure distance, the microcontroller sends a trigger pulse. The sensor fires a 40kHz sound wave and sets an echo pin high. When the sound bounces off a wall and comes back, the echo pin goes low. In software, we measure how many microseconds the pin was high. Since we know the speed of sound, we multiply the time by the speed, and divide by two (because the sound traveled there and back) to get the distance.",
      keyPoints: [
        "Uses time-of-flight (ToF) of sound waves.",
        "Frequency usually ~40 kHz.",
        "Distance = (Time * Velocity) / 2.",
        "Affected by air temperature (which changes the speed of sound)."
      ],
      example: "Car reversing parking sensors.",
      followUpQuestions: ["Why is dividing the time by 2 critical in the distance calculation?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Practical"],
    interviewTip: "Interviewers often test if you remember to divide by 2 for the return trip of the echo."
  },
  {
    id: "sensor-26",
    topicId: "sensors-iot",
    title: "What is a Thermistor? Differentiate between NTC and PTC.",
    answer: {
      shortAnswer: "A thermistor is a thermally sensitive resistor whose resistance changes significantly with temperature. NTC resistance decreases with heat; PTC resistance increases.",
      detailedExplanation: "Thermistors are highly non-linear temperature sensors made from ceramic or polymer materials. \n1. NTC (Negative Temperature Coefficient): Resistance decreases exponentially as temperature increases. Widely used for temperature measurement and compensation. \n2. PTC (Positive Temperature Coefficient): Resistance increases sharply as temperature rises. Commonly used as self-resetting overcurrent fuses (as current heats it up, resistance spikes, cutting off current).",
      interviewExplanation: "Thermistors are resistors that are highly sensitive to temperature. NTCs are the most common for sensing—as things get hotter, their resistance drops. They are cheap and very sensitive, but highly non-linear, requiring software math (like the Steinhart-Hart equation) to convert resistance to Celsius. PTCs work the opposite way—resistance shoots up when hot—so they are often used as resettable fuses in circuits rather than measurement sensors.",
      keyPoints: [
        "NTC: Resistance goes DOWN as Temp goes UP.",
        "PTC: Resistance goes UP as Temp goes UP.",
        "Highly sensitive but non-linear (needs Steinhart-Hart equation)."
      ],
      example: "NTC used in 3D printer hotends. PTC used as a 'polyfuse' on USB ports.",
      followUpQuestions: ["How do you connect a thermistor to a microcontroller's ADC?"]
    },
    difficulty: "Beginner",
    badges: ["Conceptual"],
    interviewTip: "Mentioning the 'Steinhart-Hart' equation for linearizing NTCs in software is a great bonus point."
  },
  {
    id: "sensor-27",
    topicId: "sensors-iot",
    title: "How do you interface a basic resistive sensor (like an LDR or Thermistor) with a microcontroller ADC?",
    answer: {
      shortAnswer: "You place the resistive sensor in series with a known fixed resistor to form a voltage divider, and measure the voltage at the node between them using the ADC.",
      detailedExplanation: "Microcontrollers cannot measure resistance directly; they measure voltage. By creating a voltage divider (Vcc --- Fixed Resistor --- Node(ADC) --- Sensor --- GND), changes in the sensor's resistance cause the voltage at the node to change according to V_node = Vcc * (R_sensor / (R_fixed + R_sensor)). The ADC digitizes this voltage, and software works backward to calculate R_sensor.",
      interviewExplanation: "An ADC only reads voltage. If I have a thermistor that changes resistance, the microcontroller can't read it directly. I have to build a voltage divider. I hook one side of the thermistor to ground, the other to the ADC pin, and pull that ADC pin up to 5V with a 10k fixed resistor. As the thermistor's resistance changes, the voltage at the middle pin shifts between 0 and 5V. I read that with the ADC, and use Ohm's law in code to find the exact resistance.",
      keyPoints: [
        "MCU ADCs read voltage, not resistance.",
        "Use a Voltage Divider circuit.",
        "Choose a fixed resistor value similar to the sensor's nominal resistance for best resolution."
      ],
      example: "Connecting an LDR (Light Dependent Resistor) to an Arduino analog pin to turn on a night light.",
      followUpQuestions: ["How do you choose the optimal value for the fixed resistor in the divider?"]
    },
    difficulty: "Beginner",
    badges: ["Coding", "Practical"],
    interviewTip: "This is a very common practical question. Mention that the fixed resistor should roughly match the sensor's resistance at the point of highest interest."
  },
  {
    id: "sensor-28",
    topicId: "sensors-iot",
    title: "Explain the working principle of a Load Cell.",
    answer: {
      shortAnswer: "A load cell converts mechanical force into an electrical signal using a metallic body fitted with strain gauges arranged in a Wheatstone bridge.",
      detailedExplanation: "A load cell is a transducer comprised of a structurally designed metal block (usually aluminum or steel) that deforms predictably under weight. Strain gauges are glued to areas of maximum deformation. Typically, four strain gauges are used and wired in a full Wheatstone bridge configuration. When a load is applied, two gauges stretch (increasing resistance) and two compress (decreasing resistance). This unbalances the bridge, producing a millivolt-level differential voltage proportional to the applied force.",
      interviewExplanation: "A load cell is the heart of a digital scale. It's a block of metal with four strain gauges glued to it. When you step on the scale, the metal bends slightly. Two gauges are stretched and two are compressed. We wire these four gauges into a Wheatstone bridge. Because the resistance changes are tiny, the bridge outputs a very small voltage difference—maybe 10 millivolts. We feed that into an Instrumentation Amplifier or a specialized ADC like the HX711 to read the weight.",
      keyPoints: [
        "Mechanical metal body + Strain Gauges.",
        "Gauges wired in a Full Wheatstone Bridge.",
        "Outputs small differential voltage (mV range).",
        "Requires specialized amplification (e.g., HX711 chip)."
      ],
      example: "Digital bathroom scales, industrial weighbridges.",
      followUpQuestions: ["Why use four strain gauges (full bridge) instead of just one (quarter bridge)?"]
    },
    difficulty: "Intermediate",
    badges: ["Practical"],
    interviewTip: "Always bring up the Wheatstone bridge and temperature compensation when discussing load cells."
  },
  {
    id: "sensor-29",
    topicId: "sensors-iot",
    title: "What is an IMU (Inertial Measurement Unit) and what sensors does it contain?",
    answer: {
      shortAnswer: "An IMU is an electronic device that measures a body's specific force, angular rate, and sometimes magnetic field, usually comprising an Accelerometer, Gyroscope, and Magnetometer.",
      detailedExplanation: "IMUs are essential for tracking orientation and movement. \n1. Accelerometer: Measures linear acceleration and gravity (pitch/roll). \n2. Gyroscope: Measures angular velocity (rate of rotation). \n3. Magnetometer (Compass): Measures Earth's magnetic field to determine heading (yaw). \nA '6-DoF' (Degrees of Freedom) IMU has an accelerometer and gyro. A '9-DoF' IMU adds a magnetometer.",
      interviewExplanation: "An IMU tracks how an object moves in 3D space. It combines multiple MEMS sensors on one chip. The accelerometer tracks straight-line movement and gravity. The gyroscope tracks rotation and twisting. The magnetometer acts as a compass. We combine their data because they each have flaws: gyros suffer from drift over time, and accelerometers are noisy from vibrations. Using software techniques like a Kalman filter, we fuse the data to get perfect orientation.",
      keyPoints: [
        "Contains Accelerometer (linear), Gyroscope (rotational), and sometimes Magnetometer (heading).",
        "Subject to noise and drift.",
        "Requires 'Sensor Fusion' (like a Kalman filter) to get reliable orientation data."
      ],
      example: "Drones use IMUs for flight stabilization. VR headsets use them for head tracking.",
      followUpQuestions: ["What is 'Sensor Fusion' and why is a Kalman Filter used with an IMU?"]
    },
    difficulty: "Intermediate",
    badges: ["Important"],
    interviewTip: "The magic word here is 'Sensor Fusion'. Mentioning it shows you understand system-level integration."
  },
  {
    id: "sensor-30",
    topicId: "sensors-iot",
    title: "What are Photodiodes and Phototransistors? How do they differ?",
    answer: {
      shortAnswer: "Both are semiconductor sensors that convert light into current. A photodiode is faster and more linear, while a phototransistor includes built-in amplification, making it much more sensitive but slower.",
      detailedExplanation: "A photodiode operates in reverse bias. When photons hit the PN junction, they create electron-hole pairs, allowing a tiny reverse 'photocurrent' to flow proportionally to light intensity. A phototransistor is essentially a bipolar transistor with an exposed base region. Light hits the base, generating a small base current, which the transistor's internal beta (hFE) amplifies into a much larger collector current.",
      interviewExplanation: "If you need to detect light, you have two main solid-state choices. A photodiode is fast—it can react in nanoseconds, making it perfect for fiber optic communications or TV remote receivers. But its output is tiny. A phototransistor has built-in amplification. It outputs 100 times more current than a photodiode for the same light. The tradeoff is that the phototransistor is much slower and its response to light isn't as perfectly linear.",
      keyPoints: [
        "Photodiode: Fast response, highly linear, small current.",
        "Phototransistor: High sensitivity (internal gain), slower response, non-linear.",
        "Both operate based on the photoelectric effect generating charge carriers."
      ],
      example: "Photodiodes are used in fiber optic receivers. Phototransistors are used in cheap optoisolators and line-following robots.",
      followUpQuestions: ["Why are photodiodes usually operated in reverse bias?"]
    },
    difficulty: "Intermediate",
    badges: ["Conceptual"],
    interviewTip: "Compare them in terms of Gain vs. Speed. Photodiode = Speed. Phototransistor = Gain."
  }
];
