export type LinkItem = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  captionZh: string;
  captionEn: string;
};

export type ResearchProject = {
  slug: string;
  titleZh: string;
  titleEn: string;
  year: string;
  status: string;
  categoryZh: string;
  categoryEn: string;
  summaryZh: string;
  summaryEn: string;
  roleZh: string;
  roleEn: string;
  keywords: string[];
  featured: boolean;
  hasDetail: boolean;
  links: LinkItem[];
  images?: ProjectImage[];
  detail?: {
    challengeZh: string;
    challengeEn: string;
    approachZh: string;
    approachEn: string;
    outcomesZh: string[];
    outcomesEn: string[];
  };
};

export const researchOverview = {
  titleZh: 'Study & Research',
  titleEn: 'Study & Research',
  summaryZh:
    '我的研究集中在面向 MHz wireless power transfer 的 PCB-based resonators、resonant couplers 和 electromagnetic metasurfaces，重点关注高品质因数、紧凑化、错位容忍度和快速设计迭代。',
  summaryEn:
    'My research focuses on PCB-based resonators, resonant couplers, and electromagnetic metasurfaces for MHz wireless power transfer, with an emphasis on high quality factor, compact structures, misalignment tolerance, and faster design iteration.',
  focusZh: [
    'Wireless power transfer',
    'Coupler / transformer optimization',
    'Electromagnetic metasurface'
  ],
  focusEn: [
    'Wireless power transfer',
    'Coupler / transformer optimization',
    'Electromagnetic metasurface'
  ]
};

export const projects: ResearchProject[] = [
  {
    slug: 'pcb-electromagnetic-metasurfaces',
    titleZh: 'PCB-based electromagnetic metasurfaces for MHz wireless power transfer',
    titleEn: 'PCB-Based Electromagnetic Metasurfaces for MHz Wireless Power Transfer',
    year: '2024-Present',
    status: 'Ongoing',
    categoryZh: '无线电能传输',
    categoryEn: 'Wireless Power Transfer',
    summaryZh:
      '设计 PCB-based electromagnetic metasurfaces，并通过仿真和实验验证其在 MHz wireless power transfer 系统中的电压增强效果。',
    summaryEn:
      'Designed PCB-based electromagnetic metasurfaces and validated their voltage enhancement in MHz wireless power transfer systems through simulations and experiments.',
    roleZh: 'Research Assistant / Ph.D. Student',
    roleEn: 'Research Assistant / Ph.D. Student',
    keywords: ['MHz WPT', 'PCB Metasurface', 'Experiment'],
    featured: true,
    hasDetail: true,
    links: [{ label: 'Project page', href: '/research/projects/pcb-electromagnetic-metasurfaces/' }],
    images: [
      {
        src: '/images/research/emts-schematic.png',
        alt: 'PCB-based electromagnetic metasurface schematic',
        captionZh: 'PCB-based 3 x 3 electromagnetic metasurface 及其单元结构示意图。',
        captionEn: 'Schematic of the PCB-based 3 x 3 electromagnetic metasurface and its unit structure.'
      },
      {
        src: '/images/research/emts-simulation-model.png',
        alt: 'EMTS simulation model',
        captionZh: '用于 HFSS 仿真的 EMTS 单元三维模型。',
        captionEn: 'Three-dimensional EMTS unit model used in HFSS simulation.'
      },
      {
        src: '/images/research/emts-experimental-setup.png',
        alt: 'Experimental setup of the WPT system incorporating EMTS',
        captionZh: '包含 EMTS 的无线电能传输系统实验平台及几何配置。',
        captionEn: 'Experimental setup and geometric configuration of the WPT system incorporating the EMTS.'
      }
    ],
    detail: {
      challengeZh:
        'MHz wireless power transfer 系统需要在紧凑 PCB 结构中获得更高的耦合与电压增强，同时保持可制造性和实验可验证性。',
      challengeEn:
        'MHz wireless power transfer systems require stronger coupling and voltage enhancement in compact PCB structures while maintaining manufacturability and experimental verifiability.',
      approachZh:
        '通过 PCB electromagnetic metasurface 设计、有限元仿真、PCB 原型制作和实验测量，评估结构对系统电压增强和传输表现的影响。',
      approachEn:
        'The work combines PCB electromagnetic metasurface design, finite-element simulation, PCB prototyping, and experimental measurement to evaluate voltage enhancement and transfer behavior.',
      outcomesZh: ['完成 PCB-based metasurface 结构设计', '通过仿真和实验验证电压增强效果', '形成后续 resonator / coupler 优化的研究基础'],
      outcomesEn: ['Designed PCB-based metasurface structures', 'Validated voltage enhancement through simulation and experiments', 'Built a foundation for later resonator and coupler optimization']
    }
  },
  {
    slug: 'fem-assisted-resonant-coupler-optimization',
    titleZh: '紧凑型 PCB resonant coupler 的两阶段 FEM-assisted optimization',
    titleEn: 'Two-Stage FEM-Assisted Optimization of Compact PCB-Based Resonant Couplers',
    year: '2024-Present',
    status: 'Ongoing',
    categoryZh: '仿真与优化',
    categoryEn: 'Simulation and Optimization',
    summaryZh:
      '开发两阶段有限元辅助优化策略，用于 compact PCB-based resonant couplers，覆盖 capacitive 与 hybrid wireless power transfer 系统。',
    summaryEn:
      'Developed two-stage FEM-assisted optimization strategies for compact PCB-based resonant couplers in capacitive and hybrid wireless power transfer systems.',
    roleZh: '建模、优化流程设计、仿真验证',
    roleEn: 'Modeling, optimization workflow design, simulation validation',
    keywords: ['FEM', 'Optimization', 'Capacitive WPT'],
    featured: true,
    hasDetail: true,
    links: [{ label: 'Project page', href: '/research/projects/fem-assisted-resonant-coupler-optimization/' }],
    images: [
      {
        src: '/images/research/coupler-3d-structure.png',
        alt: 'Compact PCB-based resonant coupler structure',
        captionZh: '紧凑型 PCB-based resonant coupler 的三维结构示意。',
        captionEn: 'Three-dimensional structure of the compact PCB-based resonant coupler.'
      },
      {
        src: '/images/research/coupler-equivalent-circuit.png',
        alt: 'Equivalent circuit of the PCB-based coupler system',
        captionZh: 'PCB-based coupler 系统等效电路，用于建模与优化目标定义。',
        captionEn: 'Equivalent circuit of the PCB-based coupler system for modeling and optimization targets.'
      },
      {
        src: '/images/research/coupler-experimental-setup.png',
        alt: 'Experimental setup for PCB coupler measurement',
        captionZh: 'PCB coil / coupler 与阻抗分析仪实验测量平台。',
        captionEn: 'Experimental measurement setup with PCB coil / coupler and impedance analyzer.'
      },
      {
        src: '/images/research/optimization-flow.png',
        alt: 'Two-stage optimization workflow',
        captionZh: '两阶段优化流程，用于筛选结构参数并提升品质因数。',
        captionEn: 'Two-stage optimization workflow for structural parameter screening and quality-factor enhancement.'
      },
      {
        src: '/images/research/sandwich-resonator-structure.png',
        alt: 'Sandwich-structured PCB resonator',
        captionZh: 'Sandwich-structured PCB resonator 结构示意。',
        captionEn: 'Structure of the sandwich-structured PCB resonator.'
      }
    ],
    detail: {
      challengeZh:
        '紧凑型 PCB resonant coupler 设计空间大、参数耦合强，直接依赖有限元扫参会导致迭代成本过高。',
      challengeEn:
        'Compact PCB-based resonant couplers have large design spaces and strongly coupled parameters, making brute-force finite-element sweeps too costly for iteration.',
      approachZh:
        '构建两阶段优化流程，结合等效电路目标、有限元仿真和结构参数筛选，降低 DC equivalent series resistance 并提升品质因数。',
      approachEn:
        'The workflow combines equivalent-circuit objectives, finite-element simulations, and structural parameter screening to reduce DC equivalent series resistance and improve quality factor.',
      outcomesZh: ['用于 capacitive 和 hybrid WPT coupler 设计', '支撑 ICIEA 2025 与 ITEC Asia-Pacific 2025 相关论文', '提升紧凑 PCB 结构的设计效率'],
      outcomesEn: ['Applied to capacitive and hybrid WPT coupler design', 'Supported related ICIEA 2025 and ITEC Asia-Pacific 2025 papers', 'Improved the design iteration efficiency of compact PCB structures']
    }
  },
  {
    slug: 'self-resonant-hybrid-wpt-frequency-control',
    titleZh: 'Self-resonant PCB-based hybrid WPT 系统频率控制',
    titleEn: 'Frequency Control for Self-Resonant PCB-Based Hybrid WPT Systems',
    year: '2025-2026',
    status: 'Manuscript',
    categoryZh: '系统建模与控制',
    categoryEn: 'System Modeling and Control',
    summaryZh:
      '围绕 self-resonant PCB-based hybrid wireless power transfer 系统，结合电路模型、参数识别和闭环频率控制，提高系统在负载和工作点变化下的输出调节能力。',
    summaryEn:
      'This work studies self-resonant PCB-based hybrid wireless power transfer systems by combining circuit modeling, parameter identification, and closed-loop frequency control to improve output regulation under load and operating-point variations.',
    roleZh: '系统建模、实验验证、控制策略分析',
    roleEn: 'System modeling, experimental validation, control strategy analysis',
    keywords: ['Hybrid WPT', 'Frequency Control', 'Model Validation'],
    featured: false,
    hasDetail: true,
    links: [{ label: 'Project page', href: '/research/projects/self-resonant-hybrid-wpt-frequency-control/' }],
    images: [
      {
        src: '/images/research/hybrid-wpt-experimental-setup.png',
        alt: 'Experimental setup for self-resonant PCB-based hybrid WPT system',
        captionZh: 'Self-resonant PCB-based hybrid WPT 系统的模型验证与闭环控制实验平台。',
        captionEn: 'Experimental setup for model validation and closed-loop control of the self-resonant PCB-based hybrid WPT system.'
      }
    ],
    detail: {
      challengeZh:
        'Hybrid WPT 系统中 resonant coupler、功率变换器和负载之间存在强耦合，频率偏移会显著影响输出功率和传输效率。',
      challengeEn:
        'Hybrid WPT systems involve strong coupling among the resonant coupler, power converter, and load, while frequency drift can significantly affect output power and transfer efficiency.',
      approachZh:
        '通过电路模型增强的频率控制思路，将模型辨识、系统响应分析和实验平台验证结合起来，评估不同控制策略的动态性能。',
      approachEn:
        'The model-enhanced frequency-control approach combines model identification, system response analysis, and experimental validation to evaluate the dynamic performance of different control strategies.',
      outcomesZh: ['搭建完整实验平台', '完成系统等效模型与参数验证', '比较不同频率控制策略的暂态调节性能'],
      outcomesEn: ['Built a complete experimental platform', 'Validated the system equivalent model and parameters', 'Compared transient regulation performance across frequency-control strategies']
    }
  },
  {
    slug: 'xps-host-software',
    titleZh: 'X-ray Photoelectron Spectroscopy 上位机软件',
    titleEn: 'Host Software for X-ray Photoelectron Spectroscopy',
    year: '2024-2025',
    status: 'Completed',
    categoryZh: '科研软件',
    categoryEn: 'Research Software',
    summaryZh:
      '使用 PyQt5 设计实验操作界面，并开发与 FPGA 和探测器通信的模块，用于 X-ray Photoelectron Spectroscopy 系统。',
    summaryEn:
      'Designed a PyQt5-based user interface for experimental operation and developed communication modules for FPGA and detector interaction in an X-ray Photoelectron Spectroscopy system.',
    roleZh: 'GUI 设计、通信模块开发、测试',
    roleEn: 'GUI design, communication module development, testing',
    keywords: ['Python', 'PyQt5', 'FPGA Communication'],
    featured: false,
    hasDetail: false,
    links: []
  },
  {
    slug: 'gamma-ray-detector-high-voltage-circuit',
    titleZh: 'MeV gamma-ray detector 高压电路设计',
    titleEn: 'High-Voltage Circuit Design for a MeV Gamma-Ray Detector',
    year: '2022-2023',
    status: 'Completed',
    categoryZh: '电路与 PCB',
    categoryEn: 'Circuit and PCB Design',
    summaryZh:
      '负责 MeV gamma-ray detector 电源模块的原理图与 PCB 设计，并完成模块验证和噪声问题处理。',
    summaryEn:
      'Designed the schematic and PCB of the power module for a MeV gamma-ray detector, then validated the module and mitigated noise issues.',
    roleZh: '原理图设计、PCB 设计、硬件验证',
    roleEn: 'Schematic design, PCB design, hardware validation',
    keywords: ['PCB Design', 'High Voltage', 'Detector Electronics'],
    featured: false,
    hasDetail: false,
    links: []
  }
];

export const publications = [
  {
    type: 'Journal Paper',
    typeZh: '期刊论文',
    year: '2026',
    authors: 'Yao Wang; Junxiang Yang; Yingying Song; Kaiyuan Wang; Yun Yang',
    title: 'Three-Mode MHz Wireless Power Transfer: Inductive, Capacitive, and Hybrid, With a Unified Coupling Architecture',
    venue: 'IEEE Journal on Wireless Power Technologies',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/JWPT.2026.3680415' }],
    selected: true
  },
  {
    type: 'Journal Paper',
    typeZh: '期刊论文',
    year: '2026',
    authors: 'Kaiyuan Wang; Junxiang Yang; Zhen Sun; Yun Yang',
    title: 'Optimized Stacked Passive Coil Array Design for High Efficiency and Misalignment Tolerance in PCB-Based Wireless Power Transfer Systems',
    venue: 'IEEE Transactions on Power Electronics',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/TPEL.2026.3680802' }],
    selected: true
  },
  {
    type: 'Journal Paper',
    typeZh: '期刊论文',
    year: '2026',
    authors: 'Xiaojun Deng; Noven Lee; Junxiang Yang; Yajie Jiang; Yun Yang',
    title: 'Offset Mitigation of a Switched Capacitor Single-Input-Multioutput Converter Using an Artificial Neural Network Based Virtual Reference Control',
    venue: 'IEEE Transactions on Power Electronics',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/TPEL.2025.3626401' }],
    selected: true
  },
  {
    type: 'Conference Paper',
    typeZh: '会议论文',
    year: '2025',
    authors: 'Junxiang Yang; Kaiyuan Wang; Jiayang Wu; Yun Yang',
    title: 'Two-Stage Optimization of DC Equivalent Series Resistances in Compact PCB-Based Resonant Couplers for Capacitive Power Transfer',
    venue: '2025 IEEE 20th Conference on Industrial Electronics and Applications (ICIEA)',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/ICIEA65512.2025.11149148' }],
    selected: true
  },
  {
    type: 'Conference Paper',
    typeZh: '会议论文',
    year: '2025',
    authors: 'Kaiyuan Wang; Junxiang Yang; Ching-Ming Lai; Yun Yang',
    title: 'Equivalent Circuit Modeling and Analysis of Low-Frequency Electromagnetic Metasurface-Based Wireless Power Transfer Systems',
    venue: '2025 IEEE 20th Conference on Industrial Electronics and Applications (ICIEA)',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/ICIEA65512.2025.11149069' }],
    selected: true
  },
  {
    type: 'Conference Paper',
    typeZh: '会议论文',
    year: '2025',
    authors: 'Junxiang Yang; Kaiyuan Wang; Zhen Sun; Junming Zeng',
    title: 'A Two-Stage Optimization Strategy for Enhancing the Quality Factors of Sandwich-Structured PCB Based Resonators',
    venue: '2025 IEEE Transportation Electrification Conference and Expo, Asia-Pacific (ITEC Asia-Pacific)',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/ITECAsia-Pacific63742.2025.11345033' }],
    selected: false
  },
  {
    type: 'Journal Paper',
    typeZh: '期刊论文',
    year: '2025',
    authors: 'Yao Wang; Junxiang Yang; Kaiyuan Wang; Yun Yang',
    title: 'Highly Integrated Hybrid Inductive and Capacitive Power Transfer System With Asymmetrical Printed-Circuit-Board-Based Self-Resonator',
    venue: 'IEEE Transactions on Power Electronics, vol. 40, no. 7, pp. 10254-10264',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/TPEL.2025.3547902' }],
    selected: true
  },
  {
    type: 'Journal Paper',
    typeZh: '期刊论文',
    year: '2024',
    authors: 'Junxiang Yang; Xiangrong Zhang; Yici Wang; Shuye Shang; Kaiyuan Wang; Yun Yang',
    title: 'A Frequency-Adjustable PCB Shielding Coil in Wireless Power Transfer System',
    venue: 'Wireless Power Transfer, 11, e006',
    links: [{ label: 'DOI', href: 'https://doi.org/10.48130/wpt-0024-0008' }],
    selected: true
  },
  {
    type: 'Conference Paper',
    typeZh: '会议论文',
    year: '2024',
    authors: 'Kaiyuan Wang; Junxiang Yang; Zhen Sun; Junming Zeng; Yun Yang',
    title: 'Analysis and Design of Domino Inductive Power Transfer System with Improved Quasi-Load-Independent Constant Current Output',
    venue: '2024 IEEE Wireless Power Technology Conference and Expo (WPTCE)',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/WPTCE59894.2024.10557257' }],
    selected: false
  },
  {
    type: 'Conference Paper',
    typeZh: '会议论文',
    year: '2024',
    authors: 'Yajie Jiang; Junxiang Yang; Jiayang Wu; Kerui Li; Yun Yang; Siew-Chong Tan',
    title: 'A Secure Fast Charging Control Based on A Machine Learning-Aided Electrothermal Model for Lithiumion Batteries',
    venue: '2024 IEEE Energy Conversion Congress and Exposition (ECCE)',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/ECCE55643.2024.10861556' }],
    selected: false
  },
  {
    type: 'Conference Paper',
    typeZh: '会议论文',
    year: '2024',
    authors: 'Shuye Shang; Junxiang Yang; Tenghao Ji; Minghao Fan; Kaiyuan Wang; Heshou Wang',
    title: 'Investigations of A Simplified PCB-Based Wireless Power Resonator Operating at 13.56MHz',
    venue: '2024 10th International Conference on Power Electronics Systems and Applications (PESA)',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/PESA62148.2024.10594837' }],
    selected: false
  }
];
