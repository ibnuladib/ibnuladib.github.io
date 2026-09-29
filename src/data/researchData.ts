export type ResearchPaper = {
  title: string;
  venue?: string;
  status?: "ongoing";
  date: string;
  description: string;
  methodology?: string;
  achievements?: string[];
  highlights?: string[];
  pdfLink?: string;
  aclLink?: string;
  tags: string[];
};

export const researchData = {
  papers: [
    {
      title: "Explainable Multimodal Pipeline for Dermatology",
      date: "Ongoing",
      status: "ongoing",
      description:
        "Leading a research project on safe, clinician-oriented AI for facial skin analysis, with the aim of publishing in a peer-reviewed journal.",
      highlights: [
        "Built a deep learning pipeline for a curated dataset of approximately 14,500 images, using deduplication and grouped train/validation/test splits to reduce leakage.",
        "Developed a multi-label Vision Transformer classifier with pretrained ViT-Base and DINOv3 models, validation-tuned thresholds, and reproducible GPU-accelerated training and export.",
        "Integrating computer vision, knowledge graphs, retrieval-augmented generation, and language models with attention to calibration, uncertainty, and evidence-grounded outputs.",
        "Designing ablations, multi-seed statistics, confidence intervals, and blinded clinician review, guided by CLAIM 2024 and TRIPOD+AI/TRIPOD-LLM.",
      ],
      tags: [
        "Vision Transformers",
        "Multi-label Classification",
        "Probability Calibration",
        "Knowledge Graphs",
        "GraphRAG/RAG",
        "LLMs",
        "PageRank",
        "Explainable AI",
        "Medical AI Reporting Standards",
      ],
    },
    {
      title: "Learning-Augmented Algorithms for Constrained Resource Allocation in Dynamic Networks",
      date: "Ongoing",
      status: "ongoing",
      description:
        "Researching valid resource assignments in dynamic networks under per-node constraints, motivated by wireless channel reassignment amid interference and device churn.",
      highlights: [
        "Designing a hybrid framework that combines graph neural networks with combinatorial optimization to reduce full recomputation while keeping assignments feasible by construction.",
        "Built a reproducible benchmark across Erdős–Rényi, Barabási–Albert, and wireless-conflict graphs, using graph-level train/validation/test splits to prevent leakage.",
        "Using paired Wilcoxon tests with Holm–Bonferroni correction to compare methods and analyze assignment quality, latency, and stability.",
        "Investigating learned heuristics for online combinatorial problems and identifying open research directions.",
      ],
      tags: [
        "Graph Neural Networks",
        "Graph Coloring",
        "Combinatorial Optimization",
        "Dynamic and Streaming Graphs",
        "Benchmarking Design",
      ],
    },
    {
      title: "BElite at BLP-2025 Task 1: Leveraging Ensemble for Multi Task Hate Speech Detection in Bangla",
      venue: "Proceedings of the Second Workshop on Bangla Language Processing (BLP-2025)",
      date: "December 2025",
      description:
        "This research focuses on detecting hate speech in Bangla social media content using machine learning. The study addresses the growing concern of online hate speech by developing automated detection systems tailored for the Bangla language. An ensemble approach was employed, combining multiple transformer-based models to improve classification accuracy across different types of hate speech. The system was evaluated on the BLP-2025 shared task dataset, which includes diverse categories of offensive and hateful content in Bangla.",
      methodology:
        "Tested 11 different algorithms including traditional ML models and deep learning approaches. Final solution used a weighted ensemble of transformer models (mBERT, XLM-R, BanglaBERT) to leverage their complementary strengths.",
      achievements: ["3rd place in Subtask 1", "6th place in Subtask 2", "4th place in Subtask 3"],
      pdfLink: "https://aclanthology.org/2025.banglalp-1.36.pdf",
      aclLink: "https://aclanthology.org/2025.banglalp-1.36/",
      tags: ["NLP", "Hate Speech Detection", "Bangla", "Ensemble Learning", "Transformers", "Deep Learning"],
    },
  ],
} satisfies { papers: ResearchPaper[] };
