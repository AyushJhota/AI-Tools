export const aiTools = [
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "category": "Conversational AI",
    "description": "A generative artificial intelligence chatbot developed by OpenAI that uses large language models to create human-like responses in text, speech, and images.",
    "useCases": [
      "Content creation (articles, blogs, social media posts, emails)",
      "Brainstorming and exploring ideas",
      "Summarizing meetings and finding insights",
      "Generating and debugging code",
      "Learning new concepts and answering complex questions",
      "Customer support automation",
      "Data analysis and chart creation",
      "Image generation and editing",
      "Translation",
      "Market research",
      "Workflow automation",
      "Personalized learning and advice"
    ],
    "additionalDetails": "Offers various subscription plans including a free tier with limited access, ChatGPT Plus ($20/month) for priority access and higher limits, ChatGPT Team ($30/user/month) for collaboration and shared custom GPTs, and ChatGPT Enterprise (custom pricing) for large organizations with advanced security and analytics. It can interact via text and voice, browse the web, and analyze uploaded files.",
    "link": "https://openai.com/chatgpt/overview/"
  },
  {
    "id": "claude",
    "name": "Claude",
    "category": "Conversational AI",
    "description": "A next-generation AI assistant built by Anthropic, designed to be helpful, honest, and harmless, excelling in natural language processing and long-context understanding.",
    "useCases": [
      "Summarizing long articles, papers, or documents",
      "Generating various creative text formats (song lyrics, essays, short stories)",
      "Answering questions on a wide range of topics",
      "Drafting business plans",
      "Translating text between languages",
      "Analyzing and describing images",
      "Code generation",
      "Research assistance",
      "Task completion (e.g., filling out forms, scheduling appointments)",
      "Personalization of interactions"
    ],
    "additionalDetails": "Known for its large context window (up to 200,000 tokens), allowing it to process and understand extensive information. It offers a free plan with limited daily usage, a Pro plan ($20/month) for higher limits and access to the latest models, a Team plan ($25-$30/user/month) for collaborative features, and an Enterprise plan (custom pricing) for large organizations with enhanced security and integrations. Utilizes 'Constitutional AI' for safety and beneficial outputs.",
    "link": "https://claude.ai/"
  },
  {
    "id": "perplexity",
    "name": "Perplexity AI",
    "category": "Search Engine / Knowledge Assistant",
    "description": "A conversational AI search engine that processes queries using large language models and synthesizes responses with citations from web search results, allowing for follow-up questions.",
    "useCases": [
      "Getting accurate answers to any question with sources and citations",
      "Deep research and exploration of topics",
      "Summarizing articles and webpages",
      "Generating keywords for SEO optimization",
      "Customizing outputs for specific audiences or needs",
      "Drafting emails and scheduling appointments (Assistant feature)",
      "Reporting and project creation (Perplexity Labs)"
    ],
    "additionalDetails": "Distinguishes itself by providing sourced answers, making it a reliable tool for factual information. Offers a Free (Standard) plan with limited 'Pro' searches and features, Perplexity Pro (Individual) for $20/month or $200/year for unlimited 'Pro' searches, access to advanced AI models, and image generation. Also provides a Sonar API for developers and an Enterprise Pro plan for organizations with advanced seat management and stricter data privacy.",
    "link": "https://www.perplexity.ai/"
  },
  {
    "id": "convergenceai",
    "name": "ConvergenceAI",
    "category": "AI Agent / Productivity",
    "description": "An innovative company focused on leveraging artificial intelligence to enhance productivity and efficiency. Their flagship product, Proxy, is an AI-powered digital assistant designed to automate a wide range of tasks by emulating human interactions on the web.",
    "useCases": [
      "Automating repetitive tasks (scheduling, email management, data entry)",
      "Navigating websites and interacting with online content autonomously",
      "Streamlining complex workflows",
      "Consolidating customer feedback",
      "Summarizing email correspondences",
      "Receiving daily digests of academic publications",
      "Automating code reviews and condensing code snippets",
      "Managing client communications and reservations for freelancers",
      "Internal knowledge search and organizational file repository (Enterprise Plan)"
    ],
    "additionalDetails": "ConvergenceAI focuses on creating AI that acquires new skills like humans through 'Large Meta Learning Models (LMLMs)'. Proxy can remember tasks long-term and integrate with existing online interfaces. It offers a Free Plan with basic features (5 free sessions/day, 1 automation), a Pro Plan ($20/month) with unlimited sessions, 20 automations, and up to 20 parallel sessions, and an Enterprise Plan (custom pricing) with tailored features for large organizations. Also introduced Proxy Lite, an open-source VLM.",
    "link": "https://convergence.ai/"
  },
  {
    "id": "cline",
    "name": "Cline (AI Coding Agent)",
    "category": "Coding Helper / AI Agent",
    "description": "An AI-powered coding agent that operates directly within development environments to autonomously handle complex software tasks, including creating and modifying files, executing commands, and navigating web resources.",
    "useCases": [
      "Automating complex software development tasks (e.g., refactoring legacy systems)",
      "Generating and modifying code directly in the editor with diff views",
      "Executing terminal commands (installing packages, running build scripts)",
      "Monitoring linter and compiler errors and autonomously addressing them",
      "Interacting with web elements for debugging, testing, and data extraction",
      "Creating and integrating custom tools tailored to specific workflows"
    ],
    "additionalDetails": "Cline is an open-source AI coding assistant, allowing for customization and extensibility. It leverages various large language models (like Claude 3.5 Sonnet, GPT-4o, cursor-small, etc.) and integrates with popular APIs (OpenRouter, Anthropic, OpenAI, Google Gemini, AWS Bedrock, Azure, GCP Vertex). It tracks token usage and API costs. It's known for its autonomous capabilities and its ability to learn and adapt to specific project needs. While it can be resource-intensive in terms of API usage, it aims to significantly boost developer productivity.",
    "link": "https://cline.bot/"
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "category": "Coding Helper / Integrated Development Environment (IDE)",
    "description": "An AI-powered integrated development environment (IDE) based on Visual Studio Code, designed to enhance developer productivity by deeply integrating advanced artificial intelligence features directly into the coding workflow.",
    "useCases": [
      "Generating new code or updating existing code from natural language instructions",
      "Autocompleting lines and blocks of code",
      "Smart rewrites and refactoring of multiple lines of code simultaneously",
      "Querying the entire codebase in natural language for understanding and insights",
      "Troubleshooting and debugging code with AI assistance",
      "Translating plain English commands into terminal commands",
      "Conducting code reviews and identifying potential issues",
      "Writing unit tests and improving code quality"
    ],
    "additionalDetails": "Cursor is a proprietary software developed by Anysphere Inc. It's a fork of VS Code, meaning it maintains compatibility with existing VS Code extensions and settings. Key features include deep context awareness (understanding the whole codebase), AI chat for real-time assistance, and a 'Composer' mode for multi-step AI operations. It supports various AI models (GPT-4o, GPT-4, Claude 3.5 Sonnet, cursor-small). Offers privacy modes where code is not stored remotely and is SOC 2 certified. Available through a subscription model.",
    "link": "https://www.cursor.com/"
  },
  {
    "id": "wan_ai",
    "name": "Wan AI (Video Generator)",
    "category": "Video Generation / Content Creation",
    "description": "An AI video generator that transforms text descriptions and still images into dynamic videos with natural motion, offering high-resolution output and fast generation speeds.",
    "useCases": [
      "Creating videos from text descriptions (text-to-video conversion)",
      "Animating still images to create dynamic videos (image-to-video animation)",
      "Producing marketing and promotional videos quickly",
      "Developing educational content and product demonstrations",
      "Generating short-form videos for social media (e.g., TikTok, Instagram Reels)",
      "Creating cinematic quality videos with realistic physics simulation",
      "Generating sound effects and background music for videos"
    ],
    "additionalDetails": "Wan AI (specifically Wan 2.1) is developed by Alibaba Cloud. It's notable for its fast video generation speed (e.g., 1 minute of content in 15 seconds) and support for high-resolution output (up to 1080P). It also offers an open-source framework, allowing developers to customize models. Supports both English and Chinese prompts. Available as an app on Google Play and likely through Alibaba Cloud services. The company 'WAN-AI' (tracxn.com) appears to be a separate entity focused on network analytics, not directly tied to this video generation tool.",
    "link": "https://www.wan-ai.org/"
  },
  {
    "id": "contentcore",
    "name": "ContentCore",
    "category": "Content Moderation / Video Identification",
    "description": "A video identification engine that uses advanced video fingerprinting and AI to detect copyrighted, duplicated, or harmful content among videos stored on platforms like Amazon S3.",
    "useCases": [
      "Create 3D Mockups, 3D Motion Templates, 3D Icons & Shapes, 3D Text & Logos",
    ],
    "additionalDetails": "Contentcore.xyz is a platform focused on simplifying content creation, specifically for generating and exporting images and videos. It emphasizes user-friendly tools for designing, marketing, and digital content creation. The platform allows users to create and export content in various formats, including 3D visuals and motion-based content. It also features tools for animation, lighting, and material customization, aiming to provide a streamlined content creation experience. ",
    "link": "https://contentcore.xyz/"
  }
];