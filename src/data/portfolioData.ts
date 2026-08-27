export const portfolioData = {
  profile: {
    name: "Aranya Sarker",
    role: "Analog / RF Circuit & Layout Engineer",
    tagline: "Designing precision analog circuits from schematic to GDS.",
    bio: "I am a custom IC design engineer focused on analog and RF circuits. With a strong EEE background, my expertise spans from pre-layout schematic design to physical verification and post-layout characterization. I have worked across a wide spectrum of technology nodes (5nm to 130nm) and completed 9 successful tapeout projects, demonstrating rigorous end-to-end semiconductor process exposure.",
    summary: "Utilizing deep knowledge of Analog and RF circuits alongside precision layout techniques, with aspirations for advanced graduate study in Analog Front-End Design in the USA.",
    location: "Dhaka, Bangladesh",
    email: "aranyasarker6@gmail.com",
    phone: "+8801721197243",
  },
  socials: [
    {
      name: "LinkedIn",
      url: "http://www.linkedin.com/in/aranya-sarker-65ba67218/",
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=aranyasarker6@gmail.com",
    }
  ],
  stats: [
    { value: "9", label: "Professional Projects" },
    { value: "9", label: "Tapeout Experiences" },
    { value: "5nm–130nm", label: "Technology Nodes" },
    { value: "Analog / RF", label: "Core Focus" }
  ],
  projects: [
    {
      id: "01",
      title: "PDK Verification — 130nm",
      process: "130nm",
      category: "DRC / PDK Verification",
      year: "",
      description: "Worked on a 130nm process node for PDK verification, focusing on DRC validation and verification of different cases against PDK design-rule documentation.",
      responsibilities: [
        "Verified different DRC cases.",
        "Checked layer-specific behavior.",
        "Identified required adjustments based on DRC manual information."
      ],
      technologies: ["130nm", "DRC Validation", "PDK Verification"],
      challenges: "Verifying and making the correct adjustment across different cases and layers.",
      link: "#",
      codeLink: "",
    },
    {
      id: "02",
      title: "Analog-to-Digital Converter Layout — 40nm",
      process: "40nm",
      category: "Analog Layout (ADC / HVCMOS)",
      year: "",
      description: "Analog layout for an Analog-to-Digital Converter utilizing HVCMOS devices, focusing on precision matching and parasitic optimization.",
      responsibilities: [
        "Floorplanning from block to top level.",
        "Top-level area optimization.",
        "Current mirror matching.",
        "Input block matching.",
        "Symmetric placement and routing.",
        "Parasitic-aware layout."
      ],
      technologies: ["40nm", "HVCMOS", "ADC", "Matching"],
      link: "#",
    },
    {
      id: "03",
      title: "Analog-to-Digital Converter Layout — 130nm",
      process: "130nm",
      category: "Analog Layout (ADC with HVCMOSFETs)",
      year: "",
      description: "Complex layout for an ADC comprising 5 top-level sub-blocks (Timing block, en_dac_mux, 1st stage, 2nd stage, feedforward sum & quantizer) using Infineon 130nm PDK. Handled 2.5V domain switching signals and bias-current updates from 500nA to 3uA.",
      responsibilities: [
        "Block-to-top-level floorplanning and area optimization.",
        "Matching techniques & symmetry of placement and routing.",
        "DRC / LVS / ERC / Antenna DRC & Latch-up checks.",
        "Sinker connections & bulk connections.",
        "HV MOSFET placement and pin placement."
      ],
      technologies: ["Infineon 130nm", "ADC", "HVCMOSFETs", "LVS/DRC/ERC"],
      specs: [
        { label: "PDK", value: "Infineon 130nm" },
        { label: "Domain", value: "2.5V Switching" },
        { label: "Bias Current", value: "500nA to 3uA" }
      ],
      link: "#",
    },
    {
      id: "04",
      title: "FinFET Ring Oscillator — 5nm",
      process: "5nm",
      category: "Process Profiling (Ring Oscillator)",
      year: "",
      description: "End-to-end design and verification of a high-frequency FinFET Ring Oscillator for process profiling.",
      responsibilities: [
        "Device design and characterization.",
        "Pre-layout simulation and PVT analysis.",
        "Block-to-top-level schematic work and floorplanning.",
        "Parasitic extraction and post-layout simulation.",
        "Timing and signal-integrity verification.",
        "Client requirement-file preparation."
      ],
      technologies: ["5nm", "FinFET", "Ring Oscillator", "PVT Analysis"],
      specs: [
        { label: "PDK", value: "smsg05nm" },
        { label: "Frequency", value: "1.2GHz" },
        { label: "Instance Count", value: "132k" },
        { label: "Inverters", value: "32" }
      ],
      link: "#",
    },
    {
      id: "05",
      title: "FinFET Ring Oscillator — 8nm",
      process: "8nm",
      category: "Process Profiling",
      year: "",
      description: "End-to-end design and verification of an 8nm FinFET Ring Oscillator for process profiling.",
      responsibilities: [
        "Designed and characterized devices.",
        "Performed pre-layout simulation.",
        "Performed PVT analysis.",
        "Worked from block-level to top-level schematic.",
        "Performed block and top-level floorplanning.",
        "Performed parasitic extraction.",
        "Performed post-layout simulation.",
        "Verified timing constraints.",
        "Checked signal integrity.",
        "Confirmed correct circuit functionality.",
        "Prepared and provided required files to the client."
      ],
      technologies: ["8nm", "FinFET", "Ring Oscillator", "DRC", "LVS"],
      specs: [
        { label: "PDK", value: "smsg05nm / 8nm process context" },
        { label: "Instance Count", value: "101k" },
        { label: "Number of Inverters", value: "32" },
        { label: "Frequency", value: "1.2GHz" },
        { label: "Challenges", value: "DRC, LVS, adjusting schematic instance parameters to fulfill specifications, timing requirements, completing all flavors within the deadline" }
      ],
      link: "#",
    },
    {
      id: "06",
      title: "Planar Ring Oscillator — 28nm",
      process: "28nm",
      category: "Process Profiling (Ring Oscillator)",
      year: "",
      description: "Physical design and verification of a Planar Ring Oscillator at 28nm for process profiling and characterization.",
      responsibilities: [
        "Block and top-level floorplanning.",
        "Parasitic extraction.",
        "Post-layout simulation.",
        "Timing verification.",
        "Signal-integrity verification.",
        "Client requirement-file preparation."
      ],
      technologies: ["28nm", "Planar MOSFET", "Parasitic Extraction"],
      specs: [
        { label: "PDK", value: "TSMC 28nm" },
        { label: "Frequency", value: "1GHz" },
        { label: "Instance Count", value: "72k" },
        { label: "Area", value: "581µm²" },
        { label: "Inverters", value: "32" }
      ],
      link: "#",
    },
    {
      id: "07",
      title: "Triple-Well Level Shifter — 55nm",
      process: "55nm",
      category: "Triple-Well FinFET (Level Shifter)",
      year: "",
      description: "Layout design and physical verification of a Triple-Well Level Shifter optimized for isolated block noise.",
      responsibilities: [
        "Completed layout and routing within Metal 2.",
        "Area optimization and current-aware net-width selection.",
        "Guard-ring implementation for block-noise isolation.",
        "DRC / LVS / timing verification."
      ],
      technologies: ["55nm", "Triple-Well FinFET", "Guard Rings", "Metal 2 Routing"],
      specs: [
        { label: "Higher Metal", value: "Metal 2" }
      ],
      link: "#",
    },
    {
      id: "08",
      title: "Bandgap Reference — 12nm",
      process: "12nm",
      category: "FinFET (BGR)",
      year: "",
      description: "Analog layout of a Bandgap Reference circuit in 12nm FinFET technology focusing on precise matching and noise isolation.",
      responsibilities: [
        "Completed layout including top-level layout.",
        "Common-centroid matching and interdigitation.",
        "Current mirror layout.",
        "Guard rings around resistor and capacitor.",
        "Internal-noise isolation.",
        "DRC / LVS / timing verification."
      ],
      technologies: ["12nm", "FinFET", "Common-Centroid Matching"],
      specs: [
        { label: "PDK", value: "GF12nm" }
      ],
      link: "#",
    },
    {
      id: "09",
      title: "Rail-to-Rail Operational Amplifier — 90nm",
      process: "90nm",
      category: "Planar MOSFET (Op-Amp)",
      year: "",
      description: "Physical design of a Rail-to-Rail Operational Amplifier utilizing Planar MOSFET technology.",
      responsibilities: [
        "Completed layout.",
        "Matching techniques and sensitive-net placement.",
        "Switch-adjacent device placement.",
        "Current-aware routing.",
        "DRC / LVS / timing verification."
      ],
      technologies: ["90nm", "Planar MOSFET", "Current-Aware Routing"],
      specs: [
        { label: "PDK", value: "GF12nm (as listed in CV)" }
      ],
      link: "#",
    }
  ],
  coreSpecialization: [
    { name: "Analog Circuit", level: "Skillful" },
    { name: "Analog Layout", level: "Experienced" },
    { name: "Cadence", level: "Computer Skill" },
    { name: "Synopsys", level: "Computer Skill" },
    { name: "Communication Skills", level: "Professional" }
  ],
  expertise: [
    {
      group: "Analog Circuit Design",
      items: ["Schematic Design", "Pre-layout Simulation", "Post-layout Simulation", "PVT Analysis", "Spectre", "HSPICE", "PrimeSim"],
    },
    {
      group: "Analog Layout",
      items: ["Analog Layout Design", "Floorplanning", "Matching", "Common Centroid", "Interdigitation", "Symmetry", "Sensitive Net Routing", "Guard Ring Design", "Area Optimization"],
    },
    {
      group: "Physical Verification",
      items: ["DRC", "LVS", "ERC", "Antenna DRC", "Latch-up", "Parasitic Extraction", "PVS", "Pegasus", "Calibre", "Assura"],
    },
    {
      group: "EDA Tools",
      items: [
        "Cadence: Virtuoso Layout-L/XL, Schematic Editor L, ADE-L, ADE Explorer, Spectre", 
        "Synopsys: Custom Compiler Layout/Schematic, SDL, IC Validator, PrimeSim, HSPICE",
        "Parasitic Extraction: StarRC, QuantusRC (QRC), Assura"
      ],
    },
  ],
  technologies: [
    {
      group: "Technology Nodes",
      items: ["5nm", "8nm", "12nm", "28nm", "40nm", "55nm", "90nm", "130nm"]
    },
    {
      group: "Processes",
      items: ["Planar MOSFET", "FinFET", "HVCMOSFETs"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Electrical & Electronic Engineering (EEE)",
      institution: "American International University-Bangladesh (AIUB)",
      year: "2019–2022",
      result: "3.92 / 4.00"
    },
  ],
  awards: [
    {
      title: "Dean's Award for Academic Performance — 6 times",
      details: [
        "3.93 — Fall 19-20 semester",
        "3.95 — Spring 19-20 semester",
        "3.95 — Fall 20-21 semester",
        "3.93 — Spring 20-21 semester",
        "3.95 — Spring 21-22 semester",
        "4.00 — Fall 21-22 semester"
      ]
    },
    {
      title: "Magna Cum Laude Award"
    }
  ],
  strengths: [
    "Quick learner", 
    "Able to assume responsibility", 
    "Experience in Outcome-Based Education (OBE)", 
    "Professional behavior", 
    "Teamwork", 
    "Leadership", 
    "Problem-solving ability", 
    "Ability to find problems and quick solutions", 
    "Good sense of humor"
  ]
};
