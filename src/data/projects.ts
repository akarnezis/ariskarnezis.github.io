import image_5ff01893a6010adf700217a37c0896cc4086c419 from "figma:asset/5ff01893a6010adf700217a37c0896cc4086c419.png";
import image_b66c597ccbdbf818a8afd202d87aa1324dd24b2a from "figma:asset/b66c597ccbdbf818a8afd202d87aa1324dd24b2a.png";
import image_343284038a5b5fde8cc82a276654a0ed9514b4d2 from "figma:asset/343284038a5b5fde8cc82a276654a0ed9514b4d2.png";
import image_d2adf462f3c82e3d61dd40eb9b83f600ab657f6c from "figma:asset/d2adf462f3c82e3d61dd40eb9b83f600ab657f6c.png";
import image_ba1cbb963af7b26155194cf1ffe12f1dc47f805a from "figma:asset/ba1cbb963af7b26155194cf1ffe12f1dc47f805a.png";
import image_ed8b83a5d3520877a3c6541067cb8459b1a41222 from "figma:asset/ed8b83a5d3520877a3c6541067cb8459b1a41222.png";
// ============================================================================
// INSTRUCTIONS FOR ADDING YOUR OWN IMAGES AND PDFs
// ============================================================================
//
// CURRENT ENVIRONMENT (Figma Make):
// Since you're working in a text-based editor, use external URLs:
//
// 1. UPLOAD your PDF to Google Drive, Dropbox, or your university server
// 2. GET the public/shareable link
// 3. USE the URL directly in your project data below
//
// EXAMPLES:
// - Google Drive: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
// - University: "https://sheffield.ac.uk/~username/papers/my-paper.pdf"
// - Dropbox: "https://www.dropbox.com/s/xxxxx/file.pdf?dl=1"
//
// For detailed instructions, see: /HOW_TO_UPLOAD_FILES.md
//
// ============================================================================

export const projectsData = [
  {
    id: "effective-waves-in-random-materials",
    title: "Effective waves in random particulate materials",
    description:
      "Investigated how waves propagate through random particulate media by analysing reflection coefficients and effective wavenumbers in three dimensions.",
    institution: "University of Sheffield",
    period: "2022 - 2023",
    tags: [
      "Scattering Theory",
      "Particulate materials",
      "Mathematical Modeling",
    ],
    image: image_ed8b83a5d3520877a3c6541067cb8459b1a41222,
    pdfDownload:
      "https://drive.google.com/uc?export=download&id=19LmFkZPT2Mf8LZsw8i-giU1lxYUC0Zat",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `This research project focuses on understanding how acoustic and electromagnetic waves interact with random particulate materials. The work combines analytical methods with numerical simulations to characterise wave propagation in complex heterogeneous media.

By analysing reflection coefficients and deriving effective wavenumbers, this research provides fundamental insights into wave behavior in random materials, with applications ranging from materials characterisation to seismic analysis.`,
    objectives: [
      "Quantify how reflection coefficients depend on particle volume fraction and material contrast for random particulate media containing sound-soft and sound-hard scatterers",
      "Compare the Dominant Effective Wave and All-wavenumbers approaches for computing the average transmitted wave and its associated reflection coefficients, and identify regimes where a single effective wavenumber is sufficient",
      "Extend the analytical framework of Gower et al. to three spatial dimensions by deriving asymptotic formulas for an infinite set of complex effective wavenumbers and validating these against numerical solutions",
      "Assess the impact of weakly attenuating effective wavenumbers on transmission and establish a foundation for future inversion approaches that recover particle statistics (e.g., size and concentration) from reflection data",
    ],
    methodology:
      "We model wave propagation in random particulate media using an ensemble-averaged multiple-scattering framework, in which the discrete particles are replaced by effective waves with complex wavenumbers. Reflection coefficients are computed in two ways: (i) using a single dominant effective wavenumber and (ii) using a finite collection of effective wavenumbers obtained from a dispersion relation, allowing a direct comparison between reduced and fully multimode descriptions. The analysis is carried out for both sound-soft and sound-hard particles across a range of volume fractions, and is complemented by an asymptotic study of three-dimensional effective wavenumbers and their numerical validation.",
    results: [
      "Successfully characterised reflection behavior across different particle volume fractions",
      "Identified distinct regimes where single vs. multiple effective wavenumbers are required",
      "Derived and validated 3D asymptotic formulas for effective wavenumbers",
      "Established theoretical framework for inverse problems in particle characterisation",
    ],
    additionalImages: [
      image_ba1cbb963af7b26155194cf1ffe12f1dc47f805a,
      image_d2adf462f3c82e3d61dd40eb9b83f600ab657f6c,
    ],
    publications: [
      "This work is part of the author's doctoral research and is included in the PhD thesis submitted to University of Sheffield.",
    ],
  },
  {
    id: "optimising-monte-carlo",
    title:
      "Optimising Monte-Carlo accuracy in simulations of random particle configurations",
    description:
      "Studied how to improve the numerical accuracy of Monte Carlo simulations of random particle configurations, with a focus on pair-correlation functions and boundary effects in finite domains.",
    institution: "University of Sheffield",
    period: "2022 - 2023",
    tags: [
      "Monte-Carlo simulations",
      "Pair-correlations",
      "Random media",
    ],
    image: image_343284038a5b5fde8cc82a276654a0ed9514b4d2,
    pdfDownload:
      "https://drive.google.com/uc?export=download&id=1qQ3HlnQAeKX6B-APZrUsUibmyrJw8dpQ",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `This project investigates how to obtain accurate Monte Carlo simulations of random particulate media, with a particular emphasis on the pair-correlation function and the impact of finite-domain effects.
      
    We first clarify how standard quantities such as particle number density and volume fraction behave in a finite region, distinguishing between the region that contains all particle centres and the region that contains the full particles. This makes it clear why simple infinite-medium relationships break down when boundaries are present.
      
    Building on this, we compare two Monte Carlo particle-placement strategies. The bounded-sphere method places particles directly into a finite sphere and rejects overlaps, but leads to biased particle distributions that cluster near the boundary. In contrast, the cookie-cutter method draws particles in a larger region and then extracts a smaller subregion away from the outer boundary, producing a configuration that more closely resembles an infinite homogeneous medium.
      
    Using these simulated configurations, we compute numerical pair-correlation functions and compare them to analytical predictions obtained from the Percus–Yevick (PY) theory. Interestingly, we find that using the same nominal number density in both approaches does not yield agreement: the PY solution systematically overestimates the pair-correlation. By introducing an adjusted effective number density, we recover good agreement between the Monte Carlo cookie-cutter results and the PY predictions. This highlights both the importance of careful Monte Carlo design and the subtle role of finite-size and boundary effects in random media simulations.`,

    objectives: [
      "Clarify how particle number density and volume fraction should be defined and interpreted in finite regions for random particle configurations",
      "Compare the bounded-sphere and cookie-cutter Monte Carlo placement methods and quantify their impact on particle homogeneity and boundary bias",
      "Compute numerical pair-correlation functions from Monte Carlo simulations and assess how accurately they approximate an infinite medium",
      "Compare Monte Carlo pair-correlations with the Percus–Yevick analytical approximation and identify the source of discrepancies",
      "Determine an effective number density correction that brings the Percus–Yevick predictions into close agreement with cookie-cutter Monte Carlo simulations",
    ],
    methodology: `I performed Monte Carlo simulations of identical, non-overlapping spherical particles distributed in a finite spherical region. Two placement strategies were implemented:
    A "bounded-sphere" method, which places particle centres directly in a finite ball and rejects any overlapping particles, and a "cookie-cutter" method, which first generates a configuration in a larger region and then extracts an inner subregion that is at least one particle radius away from the outer boundary.
    
    For each configuration, I distinguished between the region that contains all particle centres, and the region that contains the full particles.
    
    This allowed me to define consistent measures of number density and volume fractions for finite domains.
    
    From these simulated configurations, I estimated the pair-correlation function using radial histograms (and, where appropriate, expansions in Legendre polynomials) and studied how it changes with distance. By varying the size of the larger region, the target number density, and the particle volume fraction, I quantified boundary effects and finite-size biases.
    
    Finally, I generated analytical Percus–Yevick (PY) pair-correlation curves for hard spheres at different effective number densities and systematically compared them with the Monte Carlo results to identify the effective density that gives the best agreement.`,
    results: [
      "Showed that standard infinite-medium relationships between number density and volume fraction can deviate by more than 10% in finite regions due to boundary effects.",
      "Demonstrated that the bounded-sphere Monte Carlo method produces particle configurations biased towards the boundary, whereas the cookie-cutter method yields a much more homogeneous distribution of particle centres.",
      "Quantified how the measured number density nR and pair-correlation depend on the size of the larger simulation region when using the cookie-cutter method.",
      "Computed numerical pair-correlation functions using both binned histograms and Legendre polynomial expansions, highlighting the trade-offs between noise and smoothness.",
      "Found that the Percus–Yevick approximation does not match cookie-cutter Monte Carlo results at the same nominal number density, but that excellent agreement can be achieved by introducing a reduced effective number density.",
      "Provided practical guidance for choosing simulation parameters (region size, target density, and placement strategy) to optimise Monte Carlo accuracy for random particle configurations.",
    ],
    additionalImages: [
      image_b66c597ccbdbf818a8afd202d87aa1324dd24b2a,
      image_5ff01893a6010adf700217a37c0896cc4086c419,
    ],
    publications: [
      "This work is part of the author's doctoral research and is included in the PhD thesis submitted to University of Sheffield.",
    ],
  },
  {
    id: "quantum-hydro",
    title: "Quantum Hydrodynamics near caustics",
    description:
      "Showed that near fold and cusp caustics the Bohmian trajectory initial value problem is ill posed, so trajectories fail to converge to geometric rays in the classical limit.",
    institution: "University of Crete",
    period: "2018",
    tags: [
      "Quantum hydrodynamics",
      "Bohm equations",
      "Geometrical optics",
      "Wigner transform",
    ],
    image:
      "https://images.unsplash.com/photo-1618053238059-cc7761222f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MjkzMTc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    pdfDownload:
      "https://drive.proton.me/urls/TPHS1EBKNW#SciQR9JQ94T4",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `
Considered some basic features of quantum hydrodynamics near simple fold and cusp caustics. We showed that the initial value problem for the Bohmian trajectories is not well posed, since the quantum potential and the derivatives of the phase of the wave function are too singular. These observations implied, that in the classical limit, the Bohmian trajectories do not converge to the geometric rays because caustics onset at t = 0+.

Using semiclassical tools (WKB/geometrical optics and phase-space methods), the thesis analyzes how caustic formation disrupts standard ray-based descriptions and clarifies the role of the quantum potential in these singular regimes.`,
    objectives: [
      "Examine key features of quantum hydrodynamics near fold and cusp caustics.",
      "Compute and analyse the quantum potential in canonical caustic-forming examples.",
      "Investigate well-posedness of the Bohmian trajectory (characteristic) dynamics near caustics.",
      "Understand implications for the semiclassical/classical limit and ray convergence.",
    ],
    methodology:
      "We used the WKB/geometrical-optics framework for rays and caustics, the Bohm (Madelung) hydrodynamic formulation of the Schrödinger equation, and phase-space analysis via the Wigner transform to obtain uniform expressions for the energy density and phase-gradient near caustics, enabling explicit computation of the quantum potential in fold/cusp settings.",
    results: [
      "The Bohmian-trajectory initial value problem is not well posed near fold/cusp caustics due to singular behavior in the quantum potential and phase derivatives.",
      "In examples where caustics onset at $t = 0+$, initial data for the Burgers/Bohmian characteristic dynamics cannot be prescribed consistently.",
      "Consequently, after caustic onset, Bohmian trajectories fail to converge to geometrical-optics rays in the classical limit.",
    ],
  },
  {
    id: "thz-superfocusing",
    title: "Terahertz Superfocusing in Complex Scattering Media",
    description:
      "Used THz time-domain wavefront control to achieve spatio-temporal superfocusing through scattering media.",
    institution: "University of Sussex",
    period: "2018-2019",
    tags: ["terahertz (THz)", "Complex imaging", "Wavefront shaping", "Genetic algorithm"],
    status: "Completed",
    detailedDescription: `This work developed an experimental-driven theoretical framework for complex imaging at terahertz wavelengths and proposes an iterative strategy to achieve spatio-temporal “superfocusing” through strongly scattering media.

The thesis motivates THz complex imaging via the idea that scattering is “complex” rather than information-destroying, and leverages THz time-domain detection (amplitude + phase access) together with wavefront control concepts (transmission matrix / time-reversal style reasoning).`,
    objectives: [
      "Introduce the physics of terahertz radiation and its advantages for sensing/imaging.",
      "Build the theory of imaging and focusing through complex scattering media (speckles, transmission matrix, wavefront shaping)",
      "Formulate a terahertz-specific scheme for space–time superfocusing through multiple scattering media",
      "Evaluate the approach with numerical simulations of wavefront optimization and pulse propagation through disorder.",
    ],
    methodology:
      "The thesis combines: (i) terahertz generation/detection concepts from THz time-domain spectroscopy (optical rectification + electro-optic sampling), (ii) the transmission-matrix description of scattering media (frequency-dependent TM and its time-domain impulse response), and (iii) iterative wavefront optimization using a genetic algorithm to maximize intensity at a target output mode, enabling spatio-temporal control for broadband pulses.",
    results: [
      "A terahertz superfocusing workflow is formulated where the scattering system effectively acts as a lens once the incident pattern is optimized using feedback from a point detector (in analogy to optical focusing through turbid media).",
      "genetic-algorithm optimization scheme is detailed for wavefront control (selection, breeding, mutation schedule) to accelerate convergence and improve enhancement.",
      "Simulations compare Binary Amplitude Modulation (THz) with Pseudorandom Phase Modulation (visible) and report higher enhancement for the phase-modulation case.",
      "A spatio-temporal pulse model is implemented to show how disorder broadens and distorts pulses, and how correlation/autocorrelation diagnostics help characterize speckle-pulse structure in complex media.",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    publications: [
      "This work is part of the author's research and is included in the MSc thesis submitted to University of Sussex.",
    ],
  },
];