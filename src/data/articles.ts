export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const articlesData: Article[] = [
  {
    id: "beautiful-mathematics-protein-folding",
    title: "The Beautiful Mathematics Behind Protein Folding",
    excerpt: "Exploring how computational models mimic nature's most elegant solutions to one of biology's fundamental challenges.",
    date: "November 5, 2024",
    readTime: "8 min read",
    category: "Biology",
    tags: ["Protein Folding", "Mathematics", "Computational Biology"],
    content: `Proteins are the workhorses of biology. From the hemoglobin carrying oxygen in your blood to the enzymes breaking down your food, these molecular machines perform countless essential functions. But here's the fascinating part: each protein's function is entirely determined by its three-dimensional shape, which in turn arises from a simple chain of amino acids folding in on itself.

## The Folding Problem

The question of how a protein goes from a linear sequence of amino acids to a complex 3D structure has puzzled scientists for decades. This is known as the protein folding problem, and it's one of the most important challenges in computational biology.

Consider this: a typical protein might contain 300 amino acids. Each amino acid can adopt multiple conformations, giving us an astronomical number of possible shapes—far too many to test one by one. Yet somehow, proteins fold into their correct shape in milliseconds.

## Mathematical Models

To understand protein folding, researchers have developed sophisticated mathematical models. These models treat the protein as an energy landscape, where the goal is to find the configuration with the lowest energy—the native state.

### Energy Minimization

The most common approach uses potential energy functions that account for various molecular interactions: hydrogen bonds, electrostatic forces, van der Waals interactions, and hydrophobic effects. The folding process can be viewed as a minimization problem in a high-dimensional space.

### Statistical Mechanics

Another powerful framework comes from statistical mechanics, which describes the ensemble of possible protein conformations. This probabilistic approach helps explain not just the final structure, but also the folding pathway and the presence of intermediate states.

## Computational Approaches

Modern computational methods combine these mathematical insights with machine learning. AlphaFold, developed by DeepMind, uses deep neural networks trained on known protein structures to predict how new sequences will fold.

The success of these computational models validates our mathematical understanding while opening new possibilities for drug design and disease treatment. When we understand the mathematics of folding, we can predict how mutations affect protein function and design new proteins with desired properties.

## Looking Forward

As computational power increases and our mathematical models become more sophisticated, we're moving closer to a complete solution of the protein folding problem. This won't just be a triumph of pure science—it will have profound implications for medicine, biotechnology, and our understanding of life itself.`,
  },
  {
    id: "dna-not-destiny-epigenetics",
    title: "Why Your DNA Isn't Your Destiny: An Introduction to Epigenetics",
    excerpt: "Understanding how environmental factors influence gene expression and what it means for personalized medicine.",
    date: "October 28, 2024",
    readTime: "6 min read",
    category: "Biology",
    tags: ["Epigenetics", "Genetics", "Medicine"],
    content: "Article content coming soon...",
  },
  {
    id: "machine-learning-drug-discovery",
    title: "Machine Learning Meets Drug Discovery: A Game Changer?",
    excerpt: "An honest look at the promises and limitations of AI in pharmaceutical research, based on our latest findings.",
    date: "October 15, 2024",
    readTime: "10 min read",
    category: "Computing",
    tags: ["AI", "Drug Discovery", "Opinion"],
    content: `The pharmaceutical industry is buzzing with excitement about artificial intelligence. Headlines promise that machine learning will revolutionize drug discovery, cutting development times from decades to years and costs from billions to millions. But as someone working at the intersection of computation and biology, I think we need a more nuanced view.

## The Promise

Machine learning has indeed achieved remarkable successes in drug discovery. AI models can now predict molecular properties, identify potential drug candidates, and even design entirely new molecules with desired characteristics.

### Screening and Optimization

Traditional drug screening involves testing millions of compounds—a time-consuming and expensive process. ML models can predict which molecules are most likely to bind to target proteins, dramatically reducing the number of compounds that need physical testing.

### Property Prediction

Modern neural networks can predict crucial properties like toxicity, solubility, and metabolic stability. This allows researchers to filter out problematic candidates early in the development pipeline.

## The Reality Check

Despite these advances, AI hasn't replaced the need for careful experimental validation. Biology is messy and complex in ways that even our best models struggle to capture.

### Data Quality Issues

Machine learning is only as good as its training data. In drug discovery, we often have limited data on novel targets, and the data we do have may be noisy or biased. Models trained on existing drugs may not generalize well to entirely new chemical spaces.

### The Valley of Death

Predicting that a molecule will work in a test tube is very different from showing it will work safely and effectively in humans. The journey from computational prediction to approved drug is still long and expensive.

## A Balanced Perspective

Machine learning is a powerful tool, but it's not magic. The most successful applications combine AI with deep domain expertise and careful experimental validation. As the field matures, I expect we'll see AI becoming an integral part of the drug discovery toolkit—augmenting rather than replacing human researchers.

The real game-changer won't be AI alone, but the synergy between computational methods, biological understanding, and clinical expertise.`,
  },
  {
    id: "problem-with-p-values",
    title: "The Problem with P-Values: A Researcher's Perspective",
    excerpt: "Statistical significance doesn't always mean what we think it does. Let's talk about better ways to interpret research findings.",
    date: "September 30, 2024",
    readTime: "7 min read",
    category: "Mathematics",
    tags: ["Statistics", "Research Methods", "Science Communication"],
    content: "Article content coming soon...",
  },
  {
    id: "lab-to-life-basic-research",
    title: "From Lab to Life: How Basic Research Shapes Medicine",
    excerpt: "Real stories of how seemingly obscure discoveries led to breakthrough treatments we use today.",
    date: "September 12, 2024",
    readTime: "9 min read",
    category: "Chemistry",
    tags: ["Medical Research", "History", "Innovation"],
    content: "Article content coming soon...",
  },
  {
    id: "open-science-sharing-data",
    title: "Open Science: Why I Share My Research Data",
    excerpt: "The case for transparency in research and how open data accelerates scientific progress.",
    date: "August 25, 2024",
    readTime: "5 min read",
    category: "Physics",
    tags: ["Open Science", "Research Ethics", "Collaboration"],
    content: "Article content coming soon...",
  },
];