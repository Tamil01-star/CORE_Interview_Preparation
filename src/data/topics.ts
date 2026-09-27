import type { Topic } from '../types';

export const topics: Topic[] = [
  { id: 'core-ece', name: 'Core ECE', description: 'Fundamental concepts of Electronics and Communication', icon: 'Cpu' },
  { id: 'digital-electronics', name: 'Digital Electronics', description: 'Logic gates, boolean algebra, combinational & sequential circuits', icon: 'Binary' },
  { id: 'analog-electronics', name: 'Analog Electronics', description: 'Diodes, BJTs, MOSFETs, Op-amps, and oscillators', icon: 'Activity' },
  { id: 'circuit-theory', name: 'Circuit Theory', description: 'Network theorems, AC/DC analysis, transients', icon: 'Zap' },
  { id: 'signals-systems', name: 'Signals & Systems', description: 'LTI systems, Fourier, Laplace, Z-transforms', icon: 'Waveform' },
  { id: 'communication', name: 'Communication Systems', description: 'AM, FM, digital modulation, multiplexing', icon: 'Radio' },
  { id: 'microprocessors', name: 'Microprocessors & Microcontrollers', description: '8086, 8051, ARM architecture and programming', icon: 'Microchip' },
  { id: 'embedded', name: 'Embedded Systems', description: 'RTOS, protocols (I2C, SPI, UART), timers, interrupts', icon: 'Cpu' },
  { id: 'vlsi', name: 'VLSI Design', description: 'CMOS, ASIC/FPGA flow, physical design, STA', icon: 'Layers' },
  { id: 'verilog', name: 'Verilog / HDL', description: 'Combinational/sequential coding, FSMs, testbenches', icon: 'Code' },
  { id: 'semiconductors', name: 'Semiconductor Devices', description: 'PN junction, MOSFET regions, device physics', icon: 'Disc' },
  { id: 'pcb', name: 'PCB Design', description: 'Schematic, layout, EMI/EMC, signal integrity', icon: 'Layout' },
  { id: 'sensors', name: 'Sensors & Instrumentation', description: 'Sensors, ADCs, calibration, signal conditioning', icon: 'Thermometer' },
  { id: 'iot', name: 'IoT', description: 'Edge computing, MQTT, Wi-Fi, LoRa', icon: 'Wifi' },
  { id: 'dsp', name: 'DSP', description: 'Digital filters (FIR/IIR), FFT, aliasing', icon: 'Activity' },
  { id: 'control-systems', name: 'Control Systems', description: 'Stability, root locus, bode plot, PID', icon: 'Settings' },
  { id: 'programming', name: 'Programming (C/C++/Python)', description: 'Pointers, memory, strings, embedded C', icon: 'Terminal' },
  { id: 'aptitude', name: 'Aptitude', description: 'Quantitative and logical reasoning', icon: 'Brain' },
  { id: 'hr', name: 'HR Interview', description: 'Behavioral, teamwork, career goals', icon: 'Users' },
  { id: 'projects', name: 'Project Interview', description: 'How to explain your projects technically', icon: 'Briefcase' }
];
