/**
 * Create self-marking Google Forms from Alexandria knowledge-check data.
 * HOW TO RUN:
 *   1. Go to script.google.com > New project (signed into your school account)
 *   2. Paste this whole file, save, then run createAllForms()
 *   3. Approve the permissions prompt (it only creates Forms in your Drive)
 *   4. The execution log prints each Form's edit URL and student URL —
 *      paste the student URLs into the site's quiz pages (FORM_URL_* placeholders)
 *
 * Matching questions are converted to one dropdown per pair (auto-gradable).
 */
const QUIZ_DATA = [
  {
    "course": "Year 8 — Introduction to Generative AI",
    "lesson": "Lesson 2 — Using Generative AI to Learn",
    "title": "knowledge check how to do question mapping",
    "placeholder": "FORM_URL_KC_QMAP",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "Which of the following are the two types of boxes in a concept map?",
        "options": [
          "Bubble boxes and rectangular boxes",
          "Question boxes and answer boxes",
          "Nodes and linking words",
          "Bold boxes and italic boxes"
        ],
        "correct": "Question boxes and answer boxes",
        "feedback_correct": "",
        "feedback_incorrect": ""
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "In the video, what colour did I choose for the question boxes?",
        "options": [
          "Green",
          "Blue",
          "Red",
          "Purple"
        ],
        "correct": "Green",
        "feedback_correct": "",
        "feedback_incorrect": ""
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What colour were the answer boxes?",
        "options": [
          "Green",
          "Blue",
          "Red",
          "Purple"
        ],
        "correct": "Blue",
        "feedback_correct": "",
        "feedback_incorrect": ""
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "Does it matter which colours you choose for the boxes?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": "No",
        "feedback_correct": "",
        "feedback_incorrect": ""
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "Is this the correct format for a question and answer on a concept map?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": "No",
        "feedback_correct": "",
        "feedback_incorrect": ""
      }
    ]
  },
  {
    "course": "Year 8 — Introduction to Generative AI",
    "lesson": "Lesson 4 — Using Generative AI responsibly",
    "title": "knowledge check misinformation vs disinformation",
    "placeholder": "FORM_URL_KC_MISINFO",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is disinformation?",
        "options": [
          "Information that is true but shared incorrectly.",
          "False information created to harm someone or something.",
          "Accurate information shared with harmful intent.",
          "Unverified rumors circulating online."
        ],
        "correct": "False information created to harm someone or something.",
        "feedback_correct": "Yes, that is correct. Disinformation is specifically false information created with the intention to cause harm, as defined in the content.",
        "feedback_incorrect": "Sorry, that's not correct. Disinformation is specifically false information created with the intention to cause harm, as defined in the content."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Which of the following best describes misinformation?",
        "options": [
          "Accurate information shared with malicious intent.",
          "False information not intended to cause harm.",
          "Deliberate lies told by public figures.",
          "Publicly verified claims that are misleading."
        ],
        "correct": "False information not intended to cause harm.",
        "feedback_correct": "Yes, that is correct. Misinformation refers to false information shared without the intention to harm, which is highlighted in the discussion.",
        "feedback_incorrect": "Sorry, that's not correct. Misinformation refers to false information shared without the intention to harm, which is highlighted in the discussion."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What is malinformation?",
        "options": [
          "Information that is a mix of truth and lies.",
          "False information used to mislead the public.",
          "Accurate information shared to cause harm.",
          "Rumors that people mistakenly believe to be true."
        ],
        "correct": "Accurate information shared to cause harm.",
        "feedback_correct": "Yes, that is correct. Malinformation is described as accurate information shared with the intention to harm, such as private details being exposed.",
        "feedback_incorrect": "Sorry, that's not correct. Malinformation is described as accurate information shared with the intention to harm, such as private details being exposed."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "Which example illustrates disinformation?",
        "options": [
          "A rumor about 5G technology causing health issues.",
          "A false claim about COVID-19 being created in a lab.",
          "A celebrity spreading unverified health advice.",
          "A private document leaked for public scrutiny."
        ],
        "correct": "A false claim about COVID-19 being created in a lab.",
        "feedback_correct": "Yes, that is correct. The example about COVID-19 being created in a lab is a clear instance of disinformation, as it was deliberately spread despite being false.",
        "feedback_incorrect": "Sorry, that's not correct. The example about COVID-19 being created in a lab is a clear instance of disinformation, as it was deliberately spread despite being false."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What should you do if you encounter misinformation online?",
        "options": [
          "Share it to warn others.",
          "Report it and don’t share it.",
          "Ignore it completely.",
          "Argue with those who believe it."
        ],
        "correct": "Report it and don’t share it.",
        "feedback_correct": "Yes, that is correct. It's important to report misinformation and avoid sharing it, as this helps prevent its spread.",
        "feedback_incorrect": "Sorry, that's not correct. It's important to report misinformation and avoid sharing it, as this helps prevent its spread."
      }
    ]
  },
  {
    "course": "Year 8 — Introduction to Generative AI",
    "lesson": "Lesson 4 — Using Generative AI responsibly",
    "title": "knowledge check reviewing information",
    "placeholder": "FORM_URL_KC_REVIEW",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What does the 'R' in the REVIEW method stand for?",
        "options": [
          "Reason",
          "Reputation",
          "Review",
          "Report"
        ],
        "correct": "Reputation",
        "feedback_correct": "Yes, that is correct. The 'R' stands for Reputation, which is about checking who is posting the content and their reliability.",
        "feedback_incorrect": "Sorry, that's not correct. The 'R' stands for Reputation, which is about checking who is posting the content and their reliability."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Why is it important to check the evidence behind information?",
        "options": [
          "To ignore opinions",
          "To check the facts given are correct",
          "To promote a viewpoint",
          "To share quickly"
        ],
        "correct": "To check the facts given are correct",
        "feedback_correct": "Yes, that is correct. Checking the evidence helps you find supporting facts and ensures that what you read or hear is based on reliable information.",
        "feedback_incorrect": "Sorry, that's not correct. Checking the evidence helps you find supporting facts and ensures that what you read or hear is based on reliable information."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What should you do in the verification step of the REVIEW method?",
        "options": [
          "Share the information",
          "Check other reputable sources",
          "Ignore conflicting sources",
          "Focus only on one outlet"
        ],
        "correct": "Check other reputable sources",
        "feedback_correct": "Yes, that is correct. In the verification step, you should check if other reputable news outlets are reporting the same information to confirm its accuracy.",
        "feedback_incorrect": "Sorry, that's not correct. In the verification step, you should check if other reputable news outlets are reporting the same information to confirm its accuracy."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What does the intent refer to in the REVIEW method?",
        "options": [
          "Who wrote the article",
          "Purpose behind the person posting/sharing the content",
          "Evidence used in the article",
          "The date of publishing"
        ],
        "correct": "Purpose behind the person posting/sharing the content",
        "feedback_correct": "Yes, that is correct. Intent refers to the motivation behind posting the content, such as whether it seeks to inform, entertain, or sell something.",
        "feedback_incorrect": "Sorry, that's not correct. Intent refers to the motivation behind posting the content, such as whether it seeks to inform, entertain, or sell something."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What should you consider regarding emotions when reviewing information?",
        "options": [
          "Feelings should dictate your opinion",
          "Remember emotions can cloud judgment",
          "Only positive emotions matter",
          "Dismiss all emotional articles"
        ],
        "correct": "Remember emotions can cloud judgment",
        "feedback_correct": "Yes, that is correct. Emotions can cloud your judgment and lead you to share information without verifying its reliability first.",
        "feedback_incorrect": "Sorry, that's not correct. Emotions can cloud your judgment and lead you to share information without verifying its reliability first."
      }
    ]
  },
  {
    "course": "Year 8 — Introduction to Generative AI",
    "lesson": "Lesson 1 — Safely Using Generative AI",
    "title": "Knowledge Check: What is Generative AI?",
    "placeholder": "FORM_URL_KC_WHAT_IS_GENAI",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is generative AI?",
        "options": [
          "A type of hardware for computers",
          "A computer program that produces responses based on user prompts",
          "An advanced form of artificial general intelligence",
          "A software for managing databases"
        ],
        "correct": "A computer program that produces responses based on user prompts",
        "feedback_correct": "Yes, that is correct. Generative AI refers to computer programs that generate responses, such as text or images, based on prompts from users. This definition highlights its function rather than the technology itself.",
        "feedback_incorrect": "Sorry, that's not correct. Generative AI refers to computer programs that generate responses, such as text or images, based on prompts from users. This definition highlights its function rather than the technology itself."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Which of the following is an example of a generative AI model?",
        "options": [
          "Microsoft Word",
          "ChatGPT",
          "Adobe Photoshop",
          "Excel"
        ],
        "correct": "ChatGPT",
        "feedback_correct": "Yes, that is correct. ChatGPT is a type of generative AI model specifically designed to produce text-based responses. The other options are not generative AI models.",
        "feedback_incorrect": "Sorry, that's not correct. ChatGPT is a type of generative AI model specifically designed to produce text-based responses. The other options are not generative AI models."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What is the main purpose of training data in generative AI?",
        "options": [
          "To provide power to the computer",
          "To help the AI learn patterns and improve its responses",
          "To store information permanently",
          "To manage user interactions"
        ],
        "correct": "To help the AI learn patterns and improve its responses",
        "feedback_correct": "Yes, that is correct. Training data is essential because it allows the AI to learn from existing examples, making it capable of generating relevant responses based on learned patterns.",
        "feedback_incorrect": "Sorry, that's not correct. Training data is essential because it allows the AI to learn from existing examples, making it capable of generating relevant responses based on learned patterns."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What are the three essential components needed to create a generative AI program?",
        "options": [
          "AI program, training data, and a specific goal",
          "Hardware, software, and electricity",
          "User input, machine learning, and feedback",
          "Data storage, internet connection, and user interface"
        ],
        "correct": "AI program, training data, and a specific goal",
        "feedback_correct": "Yes, that is correct. To build a generative AI model, you need an AI program to perform the task, training data for learning, and a specific goal to guide its output.",
        "feedback_incorrect": "Sorry, that's not correct. To build a generative AI model, you need an AI program to perform the task, training data for learning, and a specific goal to guide its output."
      },
      {
        "n": 5,
        "type": "matching",
        "question": "Match the types of generative AI with their examples.",
        "pairs": [
          {
            "prompt": "Large language models",
            "match": "ChatGPT"
          },
          {
            "prompt": "Image generators",
            "match": "DALL-E"
          },
          {
            "prompt": "Video generators",
            "match": "Gemini"
          }
        ],
        "feedback_correct": "You are correct!",
        "note_for_review": "As authored on Alexandria, 'Video generators' is matched to 'Gemini' - flagged for teacher review (Gemini is not primarily a video generator; Sora or Veo may have been intended)."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the generative AI components with their descriptions.",
        "pairs": [
          {
            "prompt": "AI program",
            "match": "The system that creates outputs based on prompts"
          },
          {
            "prompt": "Training data",
            "match": "Information used to teach the AI"
          },
          {
            "prompt": "Specific goal",
            "match": "The intended outcome of the AI's task"
          },
          {
            "prompt": "Prompt",
            "match": "The user's request that triggers a response"
          }
        ]
      }
    ]
  }
,
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 1 — What is a \"Computer\" anyway?",
    "title": "Knowledge Check: Bytes and Terabytes",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is a byte (B)?",
        "options": [
          "The smallest unit of data",
          "About 1,000 bytes",
          "About 1,000 KB",
          "About 1,000 GB"
        ],
        "correct": "The smallest unit of data",
        "feedback_correct": "Yes, that is correct. A byte is the smallest unit of data, capable of storing a single character or number.",
        "feedback_incorrect": "Sorry, that's not correct. A byte is the smallest unit of data, capable of storing a single character or number."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "How many bytes are in a kilobyte (KB)?",
        "options": [
          "About 100 bytes",
          "About 1,000 bytes",
          "About 10,000 bytes",
          "About 1 million bytes"
        ],
        "correct": "About 1,000 bytes",
        "feedback_correct": "Yes, that is correct. A kilobyte is approximately 1,000 bytes, making it suitable for short texts or tiny images.",
        "feedback_incorrect": "Sorry, that's not correct. A kilobyte is approximately 1,000 bytes, making it suitable for short texts or tiny images."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What can you store in a megabyte (MB)?",
        "options": [
          "One letter",
          "A short text file",
          "A photo or a short song",
          "A large video game"
        ],
        "correct": "A photo or a short song",
        "feedback_correct": "Yes, that is correct. A megabyte can hold a photo, a short song, or a few minutes of video, which is much more than what a byte can store.",
        "feedback_incorrect": "Sorry, that's not correct. A megabyte can hold a photo, a short song, or a few minutes of video, which is much more than what a byte can store."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "How much data does a gigabyte (GB) roughly contain?",
        "options": [
          "About 1 MB",
          "About 1,000 MB",
          "About 10,000 MB",
          "About 1 million MB"
        ],
        "correct": "About 1,000 MB",
        "feedback_correct": "Yes, that is correct. A gigabyte is about 1,000 megabytes, enough to store movies or large video games.",
        "feedback_incorrect": "Sorry, that's not correct. A gigabyte is about 1,000 megabytes, enough to store movies or large video games."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What is a terabyte (TB) typically used for?",
        "options": [
          "Storing a single letter",
          "Storing a short text file",
          "Storing hundreds of thousands of photos",
          "Storing one film"
        ],
        "correct": "Storing hundreds of thousands of photos",
        "feedback_correct": "Yes, that is correct. A terabyte can store an immense amount of data, including hundreds of thousands of photos or multiple films.",
        "feedback_incorrect": "Sorry, that's not correct. A terabyte can store an immense amount of data, including hundreds of thousands of photos or multiple films."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the data size with its equivalent.",
        "pairs": [
          {
            "prompt": "1 Byte",
            "match": "Single character"
          },
          {
            "prompt": "1 Kilobyte",
            "match": "About 1,000 Bytes"
          },
          {
            "prompt": "1 Megabyte",
            "match": "About 1,000 Kilobytes"
          },
          {
            "prompt": "1 Gigabyte",
            "match": "About 1,000 Megabytes"
          },
          {
            "prompt": "1 Terabyte",
            "match": "About 1,000 Gigabytes"
          }
        ]
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the storage capacity with examples of what can be stored.",
        "pairs": [
          {
            "prompt": "1 Byte",
            "match": "A single letter"
          },
          {
            "prompt": "1 Kilobyte",
            "match": "A short text file"
          },
          {
            "prompt": "1 Megabyte",
            "match": "A photo"
          },
          {
            "prompt": "1 Gigabyte",
            "match": "A movie"
          },
          {
            "prompt": "1 Terabyte",
            "match": "Hundreds of thousands of photos"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_BYTES_TERABYTES"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 2 — How To Buy The Right Computer",
    "title": "Knowledge Check: Computer Components",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is the main function of the CPU in a computer?",
        "options": [
          "To store large amounts of data",
          "To perform calculations and run programs",
          "To display images on the monitor",
          "To provide power to the components"
        ],
        "correct": "To perform calculations and run programs",
        "feedback_correct": "Yes, that is correct. The CPU (Central Processing Unit) is responsible for performing calculations and executing programs, acting as the brain of the computer.",
        "feedback_incorrect": "Sorry, that's not correct. The CPU (Central Processing Unit) is responsible for performing calculations and executing programs, acting as the brain of the computer."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Which of the below is another term for RAM?",
        "options": [
          "Hard Drive",
          "CPU",
          "Memory",
          "Motherboard"
        ],
        "correct": "Memory",
        "feedback_correct": "Yes, that is correct. RAM stands for Random Access Memory, which is used for fast data access by the CPU.",
        "feedback_incorrect": "Sorry, that's not correct. RAM stands for Random Access Memory, which is used for fast data access by the CPU."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What is the primary role of the hard drive?",
        "options": [
          "To process video graphics",
          "To store data we aren't currently using",
          "To provide memory for quick access",
          "To supply power to the motherboard"
        ],
        "correct": "To store data we aren't currently using",
        "feedback_correct": "Yes, that is correct. The hard drive is used for permanent data storage, containing files, programs, and other data.",
        "feedback_incorrect": "Sorry, that's not correct. The hard drive is used for permanent data storage, containing files, programs, and other data."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "Which component is responsible for displaying images on the monitor?",
        "options": [
          "CPU",
          "RAM",
          "Graphics Card",
          "Hard Drive"
        ],
        "correct": "Graphics Card",
        "feedback_correct": "Yes, that is correct. The Graphics Card (or GPU) processes the visual data and displays it on the monitor.",
        "feedback_incorrect": "Sorry, that's not correct. The Graphics Card (or GPU) processes the visual data and displays it on the monitor."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What connects all the components in a computer?",
        "options": [
          "Power Supply",
          "Motherboard",
          "CPU",
          "RAM"
        ],
        "correct": "Motherboard",
        "feedback_correct": "Yes, that is correct. The motherboard is the central circuit board that connects all parts of the computer together.",
        "feedback_incorrect": "Sorry, that's not correct. The motherboard is the central circuit board that connects all parts of the computer together."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the computer components to their primary functions.",
        "pairs": [
          {
            "prompt": "CPU",
            "match": "Processes data"
          },
          {
            "prompt": "RAM",
            "match": "Stores data we're currently using"
          },
          {
            "prompt": "Hard Drive",
            "match": "Stores data we're not currently using"
          },
          {
            "prompt": "Graphics Card",
            "match": "Renders images"
          }
        ]
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the terms that mean the same thing together",
        "pairs": [
          {
            "prompt": "CPU",
            "match": "Processor"
          },
          {
            "prompt": "RAM",
            "match": "Memory"
          },
          {
            "prompt": "Hard Drive",
            "match": "Storage"
          },
          {
            "prompt": "GPU",
            "match": "Graphics Processing Unit"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_COMPUTER_COMPONENTS"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 4 — Hazards and Risks in Cybersecurity",
    "title": "Knowledge Check: Consequences of Cyberattacks",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is one of the primary consequences of a cyberattack on businesses?",
        "options": [
          "Financial loss",
          "Happiness for customers",
          "Increased sales",
          "Employee satisfaction"
        ],
        "correct": "Financial loss",
        "feedback_correct": "Yes, that is correct. Financial loss is a primary consequence of a cyberattack, as businesses may experience loss of money, fines, or costs related to recovery.",
        "feedback_incorrect": "Sorry, that's not correct. Financial loss is a primary consequence of a cyberattack, as businesses may experience loss of money, fines, or costs related to recovery."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Which of the following describes 'disruption' as a consequence of cyberattacks?",
        "options": [
          "A permanent loss of customers",
          "Operational delays in business",
          "Increase in product demand",
          "Positive media coverage"
        ],
        "correct": "Operational delays in business",
        "feedback_correct": "Yes, that is correct. Disruption refers to operational delays that affect day-to-day business activities following a cyberattack.",
        "feedback_incorrect": "Sorry, that's not correct. Disruption refers to operational delays that affect day-to-day business activities following a cyberattack."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What type of loss occurs when an organization loses data in a cyberattack?",
        "options": [
          "Financial loss",
          "Reputational loss",
          "Data loss",
          "Operational loss"
        ],
        "correct": "Data loss",
        "feedback_correct": "Yes, that is correct. Data loss is a crucial aspect of cyberattacks, leading to a reduction in intangible assets that organizations rely on.",
        "feedback_incorrect": "Sorry, that's not correct. Data loss is a crucial aspect of cyberattacks, leading to a reduction in intangible assets that organizations rely on."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "How can a cyberattack impact an organization’s reputation?",
        "options": [
          "By increasing their social media followers",
          "By improving customer reviews",
          "By causing customers to lose trust",
          "By making operations more efficient"
        ],
        "correct": "By causing customers to lose trust",
        "feedback_correct": "Yes, that is correct. Cyberattacks can severely damage an organization's reputation, causing customers to lose trust and potentially abandon the company.",
        "feedback_incorrect": "Sorry, that's not correct. Cyberattacks can severely damage an organization's reputation, causing customers to lose trust and potentially abandon the company."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "Which of the following is a safety concern associated with cyberattacks?",
        "options": [
          "Lost financial records",
          "Customer complaints",
          "Compromised critical infrastructure",
          "Delayed product launches"
        ],
        "correct": "Compromised critical infrastructure",
        "feedback_correct": "Yes, that is correct. Compromising critical infrastructure during a cyberattack poses serious safety risks to individuals, such as affecting healthcare and public safety.",
        "feedback_incorrect": "Sorry, that's not correct. Compromising critical infrastructure during a cyberattack poses serious safety risks to individuals, such as affecting healthcare and public safety."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the type of consequence to its description.",
        "pairs": [
          {
            "prompt": "Financial loss",
            "match": "Loss of money due to theft or fines"
          },
          {
            "prompt": "Operational disruption",
            "match": "Delays in business operations"
          },
          {
            "prompt": "Reputation loss",
            "match": "Erosion of customer trust"
          },
          {
            "prompt": "Safety risk",
            "match": "Threat to individual well-being"
          }
        ]
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the example to the type of consequence.",
        "pairs": [
          {
            "prompt": "Cyberattack on a hospital",
            "match": "Safety risk"
          },
          {
            "prompt": "Company losing customers after an attack",
            "match": "Reputation loss"
          },
          {
            "prompt": "Costs to recover from an attack",
            "match": "Financial loss"
          },
          {
            "prompt": "Delay in service delivery",
            "match": "Operational disruption"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_CONSEQUENCES_CYBERATTACKS"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 3 — Computer Networks & The Internet",
    "title": "Knowledge Check: How does the internet work?",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is the primary medium through which the internet operates?",
        "options": [
          "A cloud of data",
          "Wires buried in the ground",
          "Wireless signals only",
          "A series of satellites"
        ],
        "correct": "Wires buried in the ground",
        "feedback_correct": "Yes, that is correct. The internet primarily operates through wires like fiber optics and copper that are buried in the ground, rather than just a cloud or wireless signals.",
        "feedback_incorrect": "Sorry, that's not correct. The internet primarily operates through wires like fiber optics and copper that are buried in the ground, rather than just a cloud or wireless signals."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "What is an IP address?",
        "options": [
          "A computer's username",
          "A unique address for each computer",
          "A type of software program",
          "A social media account"
        ],
        "correct": "A unique address for each computer",
        "feedback_correct": "Yes, that is correct. An IP address is a unique identifier for devices on the internet, similar to a postal address, that helps computers find each other.",
        "feedback_incorrect": "Sorry, that's not correct. An IP address is a unique identifier for devices on the internet, similar to a postal address, that helps computers find each other."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What happens to information sent over the internet?",
        "options": [
          "It gets stored permanently",
          "It is broken into smaller packets",
          "It disappears if not received immediately",
          "It is sent as one complete file"
        ],
        "correct": "It is broken into smaller packets",
        "feedback_correct": "Yes, that is correct. Information sent over the internet is broken into smaller pieces called packets to facilitate easier transmission and reassembly at the destination.",
        "feedback_incorrect": "Sorry, that's not correct. Information sent over the internet is broken into smaller pieces called packets to facilitate easier transmission and reassembly at the destination."
      },
      {
        "n": 4,
        "type": "matching",
        "question": "Match the terms to their definitions.",
        "pairs": [
          {
            "prompt": "Client",
            "match": "A device that connects to the internet via ISPs"
          },
          {
            "prompt": "Server",
            "match": "A special computer that hosts web content"
          },
          {
            "prompt": "Router",
            "match": "Device that directs packets of data"
          },
          {
            "prompt": "Packet",
            "match": "A small piece of information sent over the internet"
          }
        ]
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What role do routers play on the internet?",
        "options": [
          "They provide internet access to homes",
          "They direct packets toward their destinations",
          "They store web pages",
          "They prevent viruses from spreading"
        ],
        "correct": "They direct packets toward their destinations",
        "feedback_correct": "Yes, that is correct. Routers help direct packets of data around the internet, ensuring they reach their intended destinations effectively.",
        "feedback_incorrect": "Sorry, that's not correct. Routers help direct packets of data around the internet, ensuring they reach their intended destinations effectively."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the internet components to their functions.",
        "pairs": [
          {
            "prompt": "IP Address",
            "match": "Unique address for devices on the internet"
          },
          {
            "prompt": "Cloud Computing",
            "match": "Storing data on remote servers"
          },
          {
            "prompt": "Email",
            "match": "Sending messages over the internet"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_HOW_INTERNET_WORKS"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 4 — Hazards and Risks in Cybersecurity",
    "title": "Knowledge Check: Introduction to Cybersecurity",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What kind of attack did Anne experience when she received a fraudulent email?",
        "options": [
          "Malware attack",
          "Phishing attack",
          "DDoS attack",
          "SQL injection attack"
        ],
        "correct": "Phishing attack",
        "feedback_correct": "Yes, that is correct. It was a phishing attack because the hacker sent her a fraudulent email that appeared legitimate, aiming to steal her sensitive data.",
        "feedback_incorrect": "Sorry, that's not correct. It was a phishing attack because the hacker sent her a fraudulent email that appeared legitimate, aiming to steal her sensitive data."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "What is the purpose of a firewall in cybersecurity?",
        "options": [
          "To speed up internet connections",
          "To filter incoming and outgoing traffic",
          "To create passwords",
          "To provide discounts on shopping sites"
        ],
        "correct": "To filter incoming and outgoing traffic",
        "feedback_correct": "Yes, that is correct. A firewall acts as a barrier between your computer and the internet, filtering traffic to protect your network from unauthorized access.",
        "feedback_incorrect": "Sorry, that's not correct. A firewall acts as a barrier between your computer and the internet, filtering traffic to protect your network from unauthorized access."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "Which type of attack involves taking over the information path between a user's device and a server?",
        "options": [
          "Malware attack",
          "Man in the middle attack",
          "Password attack",
          "Phishing attack"
        ],
        "correct": "Man in the middle attack",
        "feedback_correct": "Yes, that is correct. This is known as a man in the middle attack, where the hacker intercepts communication between the user and the server.",
        "feedback_incorrect": "Sorry, that's not correct. This is known as a man in the middle attack, where the hacker intercepts communication between the user and the server."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What does the term 'malware' refer to?",
        "options": [
          "Legitimate software",
          "Malicious software designed to harm systems",
          "Firewall programs",
          "Data encryption techniques"
        ],
        "correct": "Malicious software designed to harm systems",
        "feedback_correct": "Yes, that is correct. Malware refers to any malicious software designed to infiltrate and damage systems, including viruses, trojans, and spyware.",
        "feedback_incorrect": "Sorry, that's not correct. Malware refers to any malicious software designed to infiltrate and damage systems, including viruses, trojans, and spyware."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What is a common method used by hackers to crack passwords?",
        "options": [
          "Using unique codes",
          "Employing brute force attacks",
          "Encrypting data",
          "Utilizing firewalls"
        ],
        "correct": "Employing brute force attacks",
        "feedback_correct": "Yes, that is correct. Hackers often use brute force attacks, trying numerous combinations until they find the correct password.",
        "feedback_incorrect": "Sorry, that's not correct. Hackers often use brute force attacks, trying numerous combinations until they find the correct password."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the type of cyber attack with its description.",
        "pairs": [
          {
            "prompt": "Phishing",
            "match": "Fraudulent emails to steal data"
          },
          {
            "prompt": "DDoS",
            "match": "Flooding networks with traffic"
          },
          {
            "prompt": "Malware",
            "match": "Malicious software designed to harm systems"
          },
          {
            "prompt": "Man in the Middle",
            "match": "Intercepting communication paths"
          }
        ]
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the cybersecurity roles with their responsibilities.",
        "pairs": [
          {
            "prompt": "Ethical Hacker",
            "match": "Identifies vulnerabilities in networks"
          },
          {
            "prompt": "Security Architect",
            "match": "Designs secure systems"
          },
          {
            "prompt": "CISO",
            "match": "Oversees overall information security"
          },
          {
            "prompt": "Cybersecurity Professional",
            "match": "Works on identifying threats"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_INTRO_CYBERSECURITY"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 3 — Computer Networks & The Internet",
    "title": "Knowledge Check: Network Hardware",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is the primary function of a router in a network?",
        "options": [
          "To store data for clients",
          "To connect different devices within a network",
          "To send data to the correct place on the internet",
          "To provide Wi-Fi access"
        ],
        "correct": "To send data to the correct place on the internet",
        "feedback_correct": "Yes, that is correct. A router's main role is to direct data traffic, ensuring that information goes to the right destination on the internet.",
        "feedback_incorrect": "Sorry, that's not correct. A router's main role is to direct data traffic, ensuring that information goes to the right destination on the internet."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "What does a switch do in a network?",
        "options": [
          "Connects multiple computers together",
          "Provides internet access to devices",
          "Stores files for users",
          "Increases Wi-Fi range"
        ],
        "correct": "Connects multiple computers together",
        "feedback_correct": "Yes, that is correct. Switches are responsible for connecting various devices within a local network, allowing them to communicate with each other.",
        "feedback_incorrect": "Sorry, that's not correct. Switches are responsible for connecting various devices within a local network, allowing them to communicate with each other."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What device allows wireless connections in a network?",
        "options": [
          "Router",
          "Client",
          "Server",
          "Wireless access point"
        ],
        "correct": "Wireless access point",
        "feedback_correct": "Yes, that is correct. A wireless access point provides the capability for devices to connect to the network using Wi-Fi, facilitating wireless communication.",
        "feedback_incorrect": "Sorry, that's not correct. A wireless access point provides the capability for devices to connect to the network using Wi-Fi, facilitating wireless communication."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What is the purpose of a client in a network?",
        "options": [
          "To connect devices to the internet",
          "To request information from a server",
          "To store websites",
          "To increase network security"
        ],
        "correct": "To request information from a server",
        "feedback_correct": "Yes, that is correct. Clients are devices that request data from servers, such as asking for a webpage or file stored on a server.",
        "feedback_incorrect": "Sorry, that's not correct. Clients are devices that request data from servers, such as asking for a webpage or file stored on a server."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "Which of the following describes a local area network (LAN)?",
        "options": [
          "A network that connects devices over a large geographic area",
          "A network that allows internet access to only one device",
          "A network limited to a small geographic area like a home or school",
          "A type of network used solely for wireless communication"
        ],
        "correct": "A network limited to a small geographic area like a home or school",
        "feedback_correct": "Yes, that is correct. A local area network (LAN) is specifically designed to connect devices within a confined area, such as a home, school, or office.",
        "feedback_incorrect": "Sorry, that's not correct. A local area network (LAN) is specifically designed to connect devices within a confined area, such as a home, school, or office."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the network hardware to their functions.",
        "pairs": [
          {
            "prompt": "Router",
            "match": "Sends data to the correct internet destination"
          },
          {
            "prompt": "Switch",
            "match": "Connects multiple devices within a network"
          },
          {
            "prompt": "Wireless Access Point",
            "match": "Allows devices to connect wirelessly"
          },
          {
            "prompt": "Server",
            "match": "Central computer that holds data that is requested by a client."
          }
        ]
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the devices to their roles in a network.",
        "pairs": [
          {
            "prompt": "Client",
            "match": "Requests information from a server"
          },
          {
            "prompt": "Switch",
            "match": "Connects devices together within a network"
          },
          {
            "prompt": "Router",
            "match": "Directs traffic on the internet"
          },
          {
            "prompt": "Server",
            "match": "Holds and provides resources to clients"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_NETWORK_HARDWARE"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 4 — Hazards and Risks in Cybersecurity",
    "title": "Knowledge Check: Types of Cyberattack",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What type of cyber attack involves software that infects computers to commit crimes?",
        "options": [
          "Phishing",
          "Malware",
          "SQL Injection",
          "Brute-force Attack"
        ],
        "correct": "Malware",
        "feedback_correct": "Yes, that is correct. Malware is the correct answer because it is specifically designed to infect computers and commit crimes such as fraud and identity theft.",
        "feedback_incorrect": "Sorry, that's not correct. Malware is the correct answer because it is specifically designed to infect computers and commit crimes such as fraud and identity theft."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Which attack method tricks users into providing personal information by disguising as a trustworthy entity?",
        "options": [
          "Denial of Service",
          "Data Interception",
          "Phishing",
          "Brute-force Attack"
        ],
        "correct": "Phishing",
        "feedback_correct": "Yes, that is correct. Phishing is the right choice as it is an online fraud technique where attackers disguise themselves to trick users into revealing personal data.",
        "feedback_incorrect": "Sorry, that's not correct. Phishing is the right choice as it is an online fraud technique where attackers disguise themselves to trick users into revealing personal data."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What describes a brute-force attack?",
        "options": [
          "A denial-of-service attack",
          "A trial-and-error method to decode encrypted data",
          "Monitoring network traffic",
          "Code injection in applications"
        ],
        "correct": "A trial-and-error method to decode encrypted data",
        "feedback_correct": "Yes, that is correct. A brute-force attack is characterized as a trial-and-error method used to decode data, such as passwords, without using any clever strategy.",
        "feedback_incorrect": "Sorry, that's not correct. A brute-force attack is characterized as a trial-and-error method used to decode data, such as passwords, without using any clever strategy."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What is the purpose of a denial-of-service attack?",
        "options": [
          "To steal personal information",
          "To flood a server with useless traffic",
          "To inject code into databases",
          "To decode encrypted data"
        ],
        "correct": "To flood a server with useless traffic",
        "feedback_correct": "Yes, that is correct. The purpose of a denial-of-service attack is to overwhelm a server with traffic, preventing it from responding to legitimate requests.",
        "feedback_incorrect": "Sorry, that's not correct. The purpose of a denial-of-service attack is to overwhelm a server with traffic, preventing it from responding to legitimate requests."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "Which type of attack involves monitoring a network to gather sensitive information?",
        "options": [
          "SQL Injection",
          "Malware",
          "Data Interception",
          "Phishing"
        ],
        "correct": "Data Interception",
        "feedback_correct": "Yes, that is correct. Data interception is the correct answer because it involves monitoring and capturing sensitive information transmitted over a network.",
        "feedback_incorrect": "Sorry, that's not correct. Data interception is the correct answer because it involves monitoring and capturing sensitive information transmitted over a network."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the cyber attack types to their effects.",
        "pairs": [
          {
            "prompt": "Denial of Service",
            "match": "Server becomes overloaded and stops working"
          },
          {
            "prompt": "Data Interception",
            "match": "Sensitive information is stolen from a network"
          },
          {
            "prompt": "Phishing",
            "match": "Identity can be stolen and used by someone else"
          }
        ]
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the types of cyber attacks to their descriptions.",
        "pairs": [
          {
            "prompt": "Malware",
            "match": "Software designed to infect computers"
          },
          {
            "prompt": "Phishing",
            "match": "Fraud technique to obtain personal info"
          },
          {
            "prompt": "Brute-force Attack",
            "match": "Trial-and-error method for decoding data"
          },
          {
            "prompt": "SQL Injection",
            "match": "Tricking an application into running your code"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_TYPES_CYBERATTACK"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 1 — What is a \"Computer\" anyway?",
    "title": "Knowledge Check: What counts as \"data\"?",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "Which of the following is NOT considered data in computing?",
        "options": [
          "Air",
          "Text",
          "Sound",
          "Videos"
        ],
        "correct": "Air",
        "feedback_correct": "Yes, that is correct. Air is not data in computing. Data refers to information that can be stored, processed, and analyzed by computers, such as text, sound, and videos.",
        "feedback_incorrect": "Sorry, that's not correct. Air is not data in computing. Data refers to information that can be stored, processed, and analyzed by computers, such as text, sound, and videos."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "How do computers store text?",
        "options": [
          "As images",
          "As sound waves",
          "As numbers representing letters",
          "As colors"
        ],
        "correct": "As numbers representing letters",
        "feedback_correct": "Yes, that is correct. Computers store text by assigning a unique number to each letter, which allows them to organize and retrieve text efficiently.",
        "feedback_incorrect": "Sorry, that's not correct. Computers store text by assigning a unique number to each letter, which allows them to organize and retrieve text efficiently."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "How are sounds represented in a computer?",
        "options": [
          "As continuous waves",
          "By measuring loudness at regular intervals",
          "By using text descriptions",
          "As video files"
        ],
        "correct": "By measuring loudness at regular intervals",
        "feedback_correct": "Yes, that is correct. Sounds are represented by measuring how loud they are at specific intervals (samples) and storing those values as numbers.",
        "feedback_incorrect": "Sorry, that's not correct. Sounds are represented by measuring how loud they are at specific intervals (samples) and storing those values as numbers."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "In which format are images stored on a computer?",
        "options": [
          "As text documents",
          "By splitting into pixels and assigning unique numbers to each colour needed",
          "As audio files",
          "As single color blocks"
        ],
        "correct": "By splitting into pixels and assigning unique numbers to each colour needed",
        "feedback_correct": "Yes, that is correct. Images are stored by breaking them down into pixels, where each pixel's color is represented by a number.",
        "feedback_incorrect": "Sorry, that's not correct. Images are stored by breaking them down into pixels, where each pixel's color is represented by a number."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What do all types of data ultimately turn into when stored in a computer?",
        "options": [
          "Text",
          "Colors",
          "Pictures",
          "Binary Numbers"
        ],
        "correct": "Binary Numbers",
        "feedback_correct": "Yes, that is correct. Regardless of the type—text, sound, or images—all data ends up being represented as numbers in the computer.",
        "feedback_incorrect": "Sorry, that's not correct. Regardless of the type—text, sound, or images—all data ends up being represented as numbers in the computer."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the type of data with its representation in a computer.",
        "pairs": [
          {
            "prompt": "Text",
            "match": "Numbers assigned to letters"
          },
          {
            "prompt": "Sound",
            "match": "Measured loudness over time"
          },
          {
            "prompt": "Image",
            "match": "Pixels with color numbers"
          },
          {
            "prompt": "Video",
            "match": "Combination of images and sound"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_WHAT_COUNTS_AS_DATA"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 1 — What is a \"Computer\" anyway?",
    "title": "Knowledge Check: What is a Computer?",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is the primary role of a computer?",
        "options": [
          "To play games",
          "To connect to the internet",
          "To display images",
          "To process data according to instructions"
        ],
        "correct": "To process data according to instructions",
        "feedback_correct": "Yes, that is correct. The primary role of a computer is to process data according to the instructions provided by programs.",
        "feedback_incorrect": "Sorry, that's not correct. The primary role of a computer is to process data according to the instructions provided by programs."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "What does a program do in a computer?",
        "options": [
          "It stores data",
          "It tells the computer what steps to follow",
          "It outputs results",
          "It takes input from users"
        ],
        "correct": "It tells the computer what steps to follow",
        "feedback_correct": "Yes, that is correct. A program provides instructions that tell the computer what steps to follow in order to process data.",
        "feedback_incorrect": "Sorry, that's not correct. A program provides instructions that tell the computer what steps to follow in order to process data."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "Which of the following is NOT a function of a computer?",
        "options": [
          "Reads instructions line by line",
          "Processes data",
          "Determines user preferences",
          "Outputs results back to the user"
        ],
        "correct": "Determines user preferences",
        "feedback_correct": "Yes, that is correct. Determining user preferences is not a core function of a computer; its main functions include reading instructions, processing data, and outputting results.",
        "feedback_incorrect": "Sorry, that's not correct. Determining user preferences is not a core function of a computer; its main functions include reading instructions, processing data, and outputting results."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What are the two main components that make up a computer's operation?",
        "options": [
          "Instructions and data",
          "Hardware and software",
          "User input and output",
          "Internet connection and applications"
        ],
        "correct": "Instructions and data",
        "feedback_correct": "Yes, that is correct. A computer operates based on two main components: instructions (programs) and data.",
        "feedback_incorrect": "Sorry, that's not correct. A computer operates based on two main components: instructions (programs) and data."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What does a computer do with input from the user?",
        "options": [
          "It ignores it",
          "It stores it permanently",
          "It processes it",
          "It displays it immediately"
        ],
        "correct": "It processes it",
        "feedback_correct": "Yes, that is correct. When a computer receives input from the user, it processes that input according to the instructions provided.",
        "feedback_incorrect": "Sorry, that's not correct. When a computer receives input from the user, it processes that input according to the instructions provided."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the components of a computer's operation with their descriptions.",
        "pairs": [
          {
            "prompt": "Instructions",
            "match": "Tell the computer what to do"
          },
          {
            "prompt": "Data",
            "match": "Information processed by the computer"
          },
          {
            "prompt": "Output",
            "match": "Results given back to the user"
          }
        ]
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the terms related to computers with their meanings.",
        "pairs": [
          {
            "prompt": "User",
            "match": "Person interacting with the computer"
          },
          {
            "prompt": "Storage",
            "match": "Where data is kept for later use"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_WHAT_IS_A_COMPUTER"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 3 — Computer Networks & The Internet",
    "title": "Knowledge Check: What is a network?",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is a computer network?",
        "options": [
          "A connection of two or more computers.",
          "A type of internet service provider.",
          "A software program for managing files.",
          "A device that connects to the internet."
        ],
        "correct": "A connection of two or more computers.",
        "feedback_correct": "Yes, that is correct. A computer network is defined as any two or more computers that are connected together, allowing them to share data.",
        "feedback_incorrect": "Sorry, that's not correct. A computer network is defined as any two or more computers that are connected together, allowing them to share data."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "What is the name of the box that contains a switch, a router, and a wireless access point in your home network?",
        "options": [
          "Modem",
          "Router",
          "Switch",
          "Access Point"
        ],
        "correct": "Router",
        "feedback_correct": "Yes, that is correct. The router is the device that connects multiple devices in a home network and also connects to the internet.",
        "feedback_incorrect": "Sorry, that's not correct. The router is the device that connects multiple devices in a home network and also connects to the internet."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "How can you connect your devices to a home network?",
        "options": [
          "Only through Wi-Fi.",
          "Only through Ethernet cables.",
          "Through both Wi-Fi and Ethernet cables.",
          "Only using mobile data."
        ],
        "correct": "Through both Wi-Fi and Ethernet cables.",
        "feedback_correct": "Yes, that is correct. Devices can connect to a home network using both Wi-Fi and Ethernet cables, depending on the setup.",
        "feedback_incorrect": "Sorry, that's not correct. Devices can connect to a home network using both Wi-Fi and Ethernet cables, depending on the setup."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What does sending a request to a website involve?",
        "options": [
          "Connecting directly to the internet.",
          "Sending data from your device to the router, which sends it to the internet, and back.",
          "Only communicating with the website directly.",
          "Using satellite communication."
        ],
        "correct": "Sending data from your device to the router, which sends it to the internet, and back.",
        "feedback_correct": "Yes, that is correct. When you send a request to open a webpage, your device communicates with the router, which then sends the request to the website.",
        "feedback_incorrect": "Sorry, that's not correct. When you send a request to open a webpage, your device communicates with the router, which then sends the request to the website."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What is one disadvantage of being connected to a network?",
        "options": [
          "Increased internet speed.",
          "Improved access to resources.",
          "Higher security risks.",
          "Easier sharing of files."
        ],
        "correct": "Higher security risks.",
        "feedback_correct": "Yes, that is correct. Being connected to a network can increase security risks, as sensitive information may be exposed.",
        "feedback_incorrect": "Sorry, that's not correct. Being connected to a network can increase security risks, as sensitive information may be exposed."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the network devices to their functions.",
        "pairs": [
          {
            "prompt": "Router",
            "match": "Connects to the internet"
          },
          {
            "prompt": "Wireless Access Point",
            "match": "Provides Wi-Fi connectivity"
          }
        ]
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the terms to their descriptions.",
        "pairs": [
          {
            "prompt": "Network",
            "match": "A collection of connected devices"
          },
          {
            "prompt": "Data",
            "match": "Information sent between devices"
          },
          {
            "prompt": "Internet",
            "match": "A computer network the covers the whole world"
          },
          {
            "prompt": "Viruses",
            "match": "Software designed to harm devices"
          }
        ],
        "note_for_review": "Source contains typo: \"network the covers the whole world\" (should be \"that\") — preserved as-is, flag for author"
      }
    ],
    "placeholder": "FORM_URL_KC_WHAT_IS_A_NETWORK"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 5 — Mitigating Cybersecurity Risks",
    "title": "Knowledge Check: What is hacking?",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is illegal hacking generally defined as?",
        "options": [
          "The process of protecting networks from attacks.",
          "Exploiting weaknesses in a computer network without authorization.",
          "Creating software viruses.",
          "Developing cybersecurity measures."
        ],
        "correct": "Exploiting weaknesses in a computer network without authorization.",
        "feedback_correct": "Yes, that is correct. Hacking is defined as exploiting weaknesses in a computer network to gain unauthorized access to information.",
        "feedback_incorrect": "Sorry, that's not correct. Hacking is defined as exploiting weaknesses in a computer network to gain unauthorized access to information."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Which type of hacker works with permission to defend an organization?",
        "options": [
          "Black hat hacker",
          "White hat hacker",
          "Grey hat hacker",
          "Script kiddie"
        ],
        "correct": "White hat hacker",
        "feedback_correct": "Yes, that is correct. White hat hackers, also known as ethical hackers, work with permission to help organizations improve their security.",
        "feedback_incorrect": "Sorry, that's not correct. White hat hackers, also known as ethical hackers, work with permission to help organizations improve their security."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What can result from a successful hacking incident like the one Dan experienced?",
        "options": [
          "Increased trust from customers",
          "A large financial loss",
          "More business opportunities",
          "Better cybersecurity measures automatically"
        ],
        "correct": "A large financial loss",
        "feedback_correct": "Yes, that is correct. Dan lost money and trust from his customers after the hacking incident, highlighting the serious consequences of such attacks.",
        "feedback_incorrect": "Sorry, that's not correct. Dan lost money and trust from his customers after the hacking incident, highlighting the serious consequences of such attacks."
      },
      {
        "n": 4,
        "type": "matching",
        "question": "Match the type of hacker to their description.",
        "pairs": [
          {
            "prompt": "Black hat hacker",
            "match": "Illegally hacks for monetary gain"
          },
          {
            "prompt": "White hat hacker",
            "match": "Ethical hacker working with permission"
          },
          {
            "prompt": "Script kiddie",
            "match": "Inexperienced hacker using existing tools"
          }
        ]
      },
      {
        "n": 5,
        "type": "matching",
        "question": "Match the cybersecurity terms to their definitions.",
        "pairs": [
          {
            "prompt": "Hacking",
            "match": "Exploiting weaknesses in a network"
          },
          {
            "prompt": "Cybersecurity",
            "match": "Protecting against digital attacks"
          },
          {
            "prompt": "Ransomware",
            "match": "Malware that demands payment"
          },
          {
            "prompt": "Vulnerability",
            "match": "A weakness that can be exploited"
          }
        ]
      }
    ],
    "placeholder": "FORM_URL_KC_WHAT_IS_HACKING"
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 3 — Computer Networks & The Internet",
    "title": "Task 1: Building Phoenix's Network",
    "type": "task",
    "links": {
      "here (starter file)": "https://drive.google.com/file/d/17BQiGlBok4wgOKM_M7XcaRC18TtvaWxb/view"
    },
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Planning a Network for Phoenix's New Office Phoenix can't just have a standalone computers - they'll need WiFi and they'll need to share files between computers.They'll also need a server to store all of their media files, especially the 4K video!In this activity, we're going to plan Phoenix Media's new network.You'll need to create a connection map to show how each of the computers is going to connect together like the below: Step 1 - Open Up the Draw.io Template:Download the starter file fromhere.Step 2 - Save the file to your Google Drive:Go to the start menu (blue window at the bottom) and search \"Google Drive\".Press the \"Google Drive\" app. If it shows you your files, you are already signed in.If it doesn't show you your files, follow the on-screen steps to sign in.Once you have signed into google drive. Go to your downloads folder and move the template to Google Drive. If you do not do this you will lose your work!Step 3 - Open the starter file:Go to draw.io, and select open. Navigate to your Google Drive and open it from wherever you saved it. The file should look like this: Step 5: Complete the network mapFor each job title you bought a computer for in lesson 1, find out which room they are in. The General Admin Team has been done for you.For each computer / laptop you have bought, add it to the network map in the correct room. Wireless devices can go in their own \"room\" together.All computers must be connected to a switch, and every switch must eventually connect to the internet. Switches may have no more than 9 connections. Use additional switches if you need additional connections in a room. Computers cannot connect to a switch that is not in their room.Step 6: Adding your media serverAdd your media server to your network so that it is accessible to all the devices on the network.Step 7: Wireless Access PointsOn your floor layout, there is a wireless access point with its range in yellow. By copy and pasting the wireless access point, work out the minimum number that would be required to ensure that the entire office was covered with WiFi. Once you have completed your network map, add a link to your Network Map that is saved in google drive below"
      }
    ]
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 2 — How To Buy The Right Computer",
    "title": "Task 1: Cores vs Clock Speed",
    "type": "task",
    "links": {
      "this website": "https://www.bbc.co.uk/bitesize/guides/zws8d2p/revision/2",
      "this video": "https://www.youtube.com/watch?v=SI4VXqGzCkA"
    },
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Cores vs Clock Speed It's easy to tell what's better when it comes to RAM and Storage. More GBs of either is better. Processors, however, are a bit more complicated. They have two things we need to consider, Clock Speed and Cores.Do some research on the difference between the two, thiswebsite would be a good place to start. You may also find thisvideo useful to help you understand the difference that number ofcores and clock speedmakes. In the box below, summarise the difference between clock speed and number of cores"
      }
    ]
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 2 — How To Buy The Right Computer",
    "title": "Task 2: Choosing Computers for Phoenix Media",
    "type": "task",
    "links": {
      "this spreadsheet": "https://docs.google.com/spreadsheets/d/1_RAJwNQQC7EpDy7_n5gIFfBMzYKlwXDBplbiJf-0V4Y/edit",
      "Currys": "https://www.currys.co.uk/computing/desktop-pcs"
    },
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Choosing Computers for Phoenix Media Now that we know what the core components of a Computer are, we're ready to start choosing some that we want to buy for the new office.We need to be really careful to make sure that we stay within budget, we don't have an infinite amount of money!Step 1, Open The Spreadsheet:Make a copy of thisspreadsheet, it has all the information we need on it and we'll use it to make sure we don't go over budget. Step 2: FindFind a computer that meets the requirements for each group of staff. Go toCurrysto find some computers that meet the requirements that have been identified.General RequirementsFor general admin staff, a Tower PC will be fine. For client managers, we'll use a laptop For the people who actually make/edit the media, we'll use a Gaming PC. Add a sharing link to your spreadsheet in the box below"
      }
    ]
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 4 — Hazards and Risks in Cybersecurity",
    "title": "Task: Cybersecurity Risk Assessment",
    "type": "task",
    "links": {
      "here (example risk assessment)": "https://docs.google.com/document/d/13oWychmrs1ydEdva1A7CNb73afMl0gh9/edit"
    },
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Complete A Cybersecurity Risk Assessment Step 1: Make a copy of the example risk assessment here.Step 2: For each of the types of cyberattack you have studied, identify the risks to the business, the employees, and the businesses' customers.Step 3:Assess how likely the risk is to happen, and how damaging it would be if it did.You donotneed to complete the control measures yet, we will do that next lesson. Add a link to your document below."
      }
    ]
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 5 — Mitigating Cybersecurity Risks",
    "title": "Task: Mitigating Cybersecurity Risks",
    "type": "task",
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Mitigating Cyber Security Risks Task 1:There are many different ways to reduce the risk of a cyber security incident. Research and make notes (in a google doc) about how the following \"mitigation\" measures work, and how they reduce the risk of cybersecurity incidents.- Acceptable Use Policy- Anti-Malware- Security Awareness Training- Patches and Updates- Application Control- Network Firewalls- Filtering and Monitoring Software (like Securely)- Physical Security (alarms, card doors)- Multi-Factor Authentication- Encryption- Email FiltersTask 2:Update your risk assessment with these control measures. Put the relevant control measures in the control measures column, and make a quick note of:- How the control measure works- Why it would reduce the specific risk that has been identifying. I.e, how does staff training reduce the risk from phishing?Task 3:Provide a link to your updated risk assessment below:"
      }
    ]
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 2 — How To Buy The Right Computer",
    "title": "L2 Self Reflection: How to Buy The Right Computer",
    "type": "self_reflection",
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Learning Outcome: I can explain what CPUs, Memory, and Storage are and the roles they play in making a computer work."
      },
      {
        "n": 2,
        "type": "paragraph",
        "question": "Learning Outcome: I can choose a computer that is suitable for a given set of requirements and job role."
      },
      {
        "n": 3,
        "type": "paragraph",
        "question": "Learning Outcome: I can put together a package of computers for all of the new roles in the satellite office, while keeping within budget."
      }
    ]
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 3 — Computer Networks & The Internet",
    "title": "L3 Self Reflection",
    "type": "self_reflection",
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Learning Outcome: I can describe the function of routers, servers, clients, switches, and access points and understand why we connect devices together."
      },
      {
        "n": 2,
        "type": "paragraph",
        "question": "Learning Outcome: I can apply my knowledge of network hardware to a real-life office and plan the network infrastructure that will be required."
      }
    ]
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 4 — Hazards and Risks in Cybersecurity",
    "title": "L4 Self-Reflection",
    "type": "self_reflection",
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Learning Outcome: I can explain how two types of cyber attack that I have studied work."
      },
      {
        "n": 2,
        "type": "paragraph",
        "question": "Learning Outcome: I can summarise and explain the three main consequences to a business of cyber attacks."
      },
      {
        "n": 3,
        "type": "paragraph",
        "question": "Learning Outcome: I can identify the main types of cybersecurity risks facing a business."
      }
    ]
  },
  {
    "course": "Year 9 — Business IT",
    "lesson": "Lesson 5 — Mitigating Cybersecurity Risks",
    "title": "Self-Reflection: Mitigating Cybersecurity Risks",
    "type": "self_reflection",
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Learning Outcome: I can research common cybersecurity risk controls."
      },
      {
        "n": 2,
        "type": "paragraph",
        "question": "Learning Outcome: I can explain the definition of hacking, and give some examples of cyber-related crimes."
      },
      {
        "n": 3,
        "type": "paragraph",
        "question": "Learning Outcome: I can complete a cybersecurity risk assessment, identifying appropriate risk-reduction controls."
      }
    ]
  },
  {
    "course": "Year 10 — GCSE Paper 1 Theory: Principles of Computer Science",
    "lesson": "Lesson 1 — Intro to Computer Systems",
    "title": "Knowledge Check: General vs Embedded Systems",
    "placeholder": "FORM_URL_KC_GEN_VS_EMBEDDED",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "matching",
        "question": "Match the keywords to the definitions.",
        "pairs": [
          {
            "prompt": "General Purpose Computers",
            "match": "Computers with a variety of uses, the tasks are usually chosen by the end user."
          },
          {
            "prompt": "Embedded System",
            "match": "Specialised computer systems that have dedicated functions within a larger system. The function is usually chosen by the manufacturer."
          }
        ],
        "feedback_correct": "",
        "feedback_incorrect": ""
      },
      {
        "n": 2,
        "type": "multi_select",
        "question": "Which of the below devices, from the picture, are likely to have embedded systems?",
        "options": [
          "Coffee Maker",
          "Printer",
          "Laptop",
          "TV",
          "Games Console",
          "Sofa",
          "(non-Smart) Lightbulb",
          "Smart Thermostat (like Hive)",
          "Smoke Alarm"
        ],
        "correct": [
          "Coffee Maker",
          "Printer",
          "TV",
          "Games Console",
          "Smart Thermostat (like Hive)"
        ],
        "image": {
          "url": "https://lwfiles.mycourse.app/6313816770e7826017236062-public/377726dd1fc6124cb871878277f9d895.png",
          "description": "Illustrated living-room scene with a coffee maker, printer, laptop, TV, games console, sofa, non-smart lightbulb, smart thermostat, and smoke alarm."
        },
        "feedback_correct": "",
        "feedback_incorrect": "",
        "note_for_review": "Source marks \"Smoke Alarm\" as NOT an embedded system — debatable, since many smoke alarms contain microcontrollers. Kept as authored; flagged for teacher review."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "Mobile phones can blur the boundaries between embedded and smart systems. Which of the two below would you consider an embedded system?",
        "options": [
          "Left",
          "Right"
        ],
        "correct": "Right",
        "image": {
          "url": "https://lwfiles.mycourse.app/6313816770e7826017236062-public/a3e0a6b19b599d3cc486566e2d90f312.jpg",
          "description": "Two phones side by side separated by \"VS\": a modern touchscreen smartphone (left) vs. a basic/feature phone printed \"SAMSUNG\" with a physical keypad (right)."
        },
        "feedback_correct": "",
        "feedback_incorrect": ""
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What's the key difference between an embedded and a general purpose system?",
        "options": [
          "Whether or not it is optimised for a specific purpose",
          "Whether or not it's made by Apple or Microsoft",
          "Whether it runs Windows or Mac",
          "Whether it's a laptop or not"
        ],
        "correct": "Whether or not it is optimised for a specific purpose",
        "feedback_correct": "",
        "feedback_incorrect": ""
      }
    ]
  },
  {
    "course": "Year 10 — GCSE Paper 1 Theory: Principles of Computer Science",
    "lesson": "Lesson 1 — Intro to Computer Systems",
    "title": "Knowledge Check: Input, Process, Output",
    "placeholder": "FORM_URL_KC_INPUT_PROCESS_OUTPUT",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What does the 'I' in IPO model stand for?",
        "options": ["Information", "Input", "Interface", "Instruction"],
        "correct": "Input",
        "feedback_correct": "Yes, that is correct. The 'I' in IPO model stands for 'Input', which refers to the data that is entered into a system.",
        "feedback_incorrect": "Sorry, that's not correct. The 'I' in IPO model stands for 'Input', which refers to the data that is entered into a system."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Which of the following is an example of an output device?",
        "options": ["Keyboard", "Mouse", "Printer", "Gaming controller"],
        "correct": "Printer",
        "feedback_correct": "Yes, that is correct. A printer is an output device because it produces information in a physical form, such as printed pages.",
        "feedback_incorrect": "Sorry, that's not correct. A printer is an output device because it produces information in a physical form, such as printed pages."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What is the role of the 'P' in the IPO model?",
        "options": ["Process", "Produce", "Present", "Prepare"],
        "correct": "Process",
        "feedback_correct": "Yes, that is correct. The 'P' in IPO model stands for 'Process', which is the step where data is manipulated or transformed to create useful information.",
        "feedback_incorrect": "Sorry, that's not correct. The 'P' in IPO model stands for 'Process', which is the step where data is manipulated or transformed to create useful information."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What is an input device used for?",
        "options": ["To display information", "To send information into the system", "To store data", "To connect to the internet"],
        "correct": "To send information into the system",
        "feedback_correct": "Yes, that is correct. An input device is used to send information into the computer system, allowing us to interact with it.",
        "feedback_incorrect": "Sorry, that's not correct. An input device is used to send information into the computer system, allowing us to interact with it."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What is the primary function of sensors in embedded systems?",
        "options": ["To receive input from the environment", "To process data", "To store information", "To provide power"],
        "correct": "To receive input from the environment",
        "feedback_correct": "Yes, that is correct. Sensors are designed to receive input from the environment, such as temperature, light, or motion. They convert these physical phenomena into electrical signals that can be processed.",
        "feedback_incorrect": "Sorry, that's not correct. Sensors are designed to receive input from the environment, such as temperature, light, or motion. They convert these physical phenomena into electrical signals that can be processed."
      },
      {
        "n": 6,
        "type": "multiple_choice",
        "question": "What role do actuators play in an embedded system?",
        "options": ["They provide user input", "They perform actions based on processed data", "They store data temporarily", "They enhance computational speed"],
        "correct": "They perform actions based on processed data",
        "feedback_correct": "Yes, that is correct. Actuators are responsible for performing actions based on the processed data. For example, they might move a motor or change a setting in response to commands from the system.",
        "feedback_incorrect": "Sorry, that's not correct. Actuators are responsible for performing actions based on the processed data. For example, they might move a motor or change a setting in response to commands from the system."
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the following terms with their definitions.",
        "pairs": [
          {"prompt": "Input Device", "match": "Sends data into the system"},
          {"prompt": "Output Device", "match": "Produces information from the system"},
          {"prompt": "Process", "match": "Manipulates data to create output"}
        ],
        "feedback_correct": "You are correct!",
        "feedback_incorrect": "Sorry, you have selected the wrong answer."
      }
    ]
  },
  {
    "course": "Year 10 — GCSE Paper 1 Theory: Principles of Computer Science",
    "lesson": "Lesson 1 — Intro to Computer Systems",
    "title": "Knowledge Check: Components of a Computer",
    "placeholder": "FORM_URL_KC_COMPONENTS_COMPUTER",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What is the primary function of RAM in a computer?",
        "options": ["Permanent data storage", "Temporary data storage for active processes", "Booting the operating system", "Managing peripheral devices"],
        "correct": "Temporary data storage for active processes",
        "feedback_correct": "Yes, that is correct. RAM (Random Access Memory) is used for temporary data storage while programs are running, allowing quick access to data that the CPU needs.",
        "feedback_incorrect": "Sorry, that's not correct. RAM (Random Access Memory) is used for temporary data storage while programs are running, allowing quick access to data that the CPU needs."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "What does ROM stand for and what is its main purpose?",
        "options": ["Read-Only Memory; to store firmware", "Random Access Memory; to manage applications", "Rapid Operational Memory; to boost performance", "Removable Online Memory; for external data"],
        "correct": "Read-Only Memory; to store firmware",
        "feedback_correct": "Yes, that is correct. ROM (Read-Only Memory) is used to store firmware and essential instructions that help boot the computer, which cannot be easily altered.",
        "feedback_incorrect": "Sorry, that's not correct. ROM (Read-Only Memory) is used to store firmware and essential instructions that help boot the computer, which cannot be easily altered."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "Which component is responsible for initiating the boot process of a computer?",
        "options": ["Hard Drive", "CPU", "BIOS", "RAM"],
        "correct": "BIOS",
        "feedback_correct": "Yes, that is correct. The BIOS (Basic Input/Output System) is responsible for starting the boot process by performing hardware checks and loading the operating system.",
        "feedback_incorrect": "Sorry, that's not correct. The BIOS (Basic Input/Output System) is responsible for starting the boot process by performing hardware checks and loading the operating system."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What is the role of a Hard Drive in a computer?",
        "options": ["Execute instructions", "Store data permanently", "Provide graphics output", "Manage input devices"],
        "correct": "Store data permanently",
        "feedback_correct": "Yes, that is correct. The Hard Drive (or secondary storage) is used for permanent data storage, saving files and programs even when the computer is turned off.",
        "feedback_incorrect": "Sorry, that's not correct. The Hard Drive (or secondary storage) is used for permanent data storage, saving files and programs even when the computer is turned off."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "What is the CPU's primary function in a computer system?",
        "options": ["Store large amounts of data", "Perform calculations and execute instructions", "Provide power to other components", "Display graphics on the screen"],
        "correct": "Perform calculations and execute instructions",
        "feedback_correct": "Yes, that is correct. The CPU (Central Processing Unit) is the brain of the computer, responsible for performing calculations, running programs, and executing instructions.",
        "feedback_incorrect": "Sorry, that's not correct. The CPU (Central Processing Unit) is the brain of the computer, responsible for performing calculations, running programs, and executing instructions."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the component to its function.",
        "pairs": [
          {"prompt": "RAM", "match": "Temporary storage for active processes"},
          {"prompt": "ROM", "match": "Stores firmware"},
          {"prompt": "BIOS", "match": "Boots the operating system"},
          {"prompt": "Hard Drive", "match": "Permanent storage"}
        ],
        "feedback_correct": "You are correct!",
        "feedback_incorrect": "Sorry, you have selected the wrong answer."
      },
      {
        "n": 7,
        "type": "matching",
        "question": "Match the acronym to its full form.",
        "pairs": [
          {"prompt": "RAM", "match": "Random Access Memory"},
          {"prompt": "ROM", "match": "Read-Only Memory"},
          {"prompt": "CPU", "match": "Central Processing Unit"},
          {"prompt": "BIOS", "match": "Basic Input/Output System"}
        ],
        "feedback_correct": "You are correct!",
        "feedback_incorrect": "Sorry, you have selected the wrong answer."
      }
    ]
  },
  {
    "course": "Year 10 — GCSE Paper 1 Theory: Principles of Computer Science",
    "lesson": "Lesson 1 — Intro to Computer Systems",
    "title": "Knowledge Check: Advantages of Embedded Systems",
    "placeholder": "FORM_URL_KC_ADV_EMBEDDED",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "multiple_choice",
        "question": "What percentage of all processors are part of embedded systems?",
        "options": ["50 percent", "75 percent", "90 percent", "98 percent"],
        "correct": "98 percent",
        "feedback_correct": "Yes, that is correct. The transcript states that 98 percent of all processors are manufactured as components of embedded systems, highlighting their prevalence.",
        "feedback_incorrect": "Sorry, that's not correct. The transcript states that 98 percent of all processors are manufactured as components of embedded systems, highlighting their prevalence."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "Which of the following is an example of an embedded system?",
        "options": ["A personal computer", "A digital clock", "A web server"],
        "correct": "A digital clock",
        "feedback_correct": "Yes, that is correct. A digital clock is an example of an embedded system, as it serves a dedicated function, unlike personal computers which are multi-functional.",
        "feedback_incorrect": "Sorry, that's not correct. A digital clock is an example of an embedded system, as it serves a dedicated function, unlike personal computers which are multi-functional."
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "question": "What is one advantage of embedded systems compared to general-purpose computers?",
        "options": ["Higher processing power", "Greater versatility", "Low power consumption", "More complex user interfaces"],
        "correct": "Low power consumption",
        "feedback_correct": "Yes, that is correct. Embedded systems are designed for specific tasks, allowing them to operate with low power consumption, while general-purpose computers are not optimized for this.",
        "feedback_incorrect": "Sorry, that's not correct. Embedded systems are designed for specific tasks, allowing them to operate with low power consumption, while general-purpose computers are not optimized for this."
      },
      {
        "n": 4,
        "type": "multiple_choice",
        "question": "What is another advantage of embedded systems compared to general-purpose computers?",
        "options": ["Higher processing power", "Greater versatility", "Can directly control the memory and components, making programs more efficient.", "More complex user interfaces"],
        "correct": "Can directly control the memory and components, making programs more efficient.",
        "feedback_correct": "Yes, that is correct. Embedded systems are designed for specific tasks, allowing them to operate with low power consumption, while general-purpose computers are not optimized for this.",
        "feedback_incorrect": "Sorry, that's not correct. Embedded systems are designed for specific tasks, allowing them to operate with low power consumption, while general-purpose computers are not optimized for this.",
        "note_for_review": "Source feedback text is a copy-paste of Q3's feedback (talks about low power consumption) even though Q4's correct answer is about direct hardware/memory control, not power consumption. Kept as authored; flagged for teacher review."
      },
      {
        "n": 5,
        "type": "multiple_choice",
        "question": "Why can embedded systems be mass-produced economically?",
        "options": ["They are more complex and require more labor", "They benefit from economies of scale", "They are less reliable than general-purpose systems", "They require custom components for every unit"],
        "correct": "They benefit from economies of scale",
        "feedback_correct": "Yes, that is correct. Embedded systems, like the coffee machine mentioned, can be mass-produced, which leads to reduced costs through economies of scale.",
        "feedback_incorrect": "Sorry, that's not correct. Embedded systems, like the coffee machine mentioned, can be mass-produced, which leads to reduced costs through economies of scale."
      },
      {
        "n": 6,
        "type": "matching",
        "question": "Match the properties of embedded systems to their benefit.",
        "pairs": [
          {"prompt": "low power consumption", "match": "devices can have a longer battery life"},
          {"prompt": "small size", "match": "devices can be smaller and more portable"},
          {"prompt": "rugged operating ranges", "match": "devices can be used on the move more easily"},
          {"prompt": "low cost per unit", "match": "the final cost of the device can be lower"},
          {"prompt": "directly control hardware and memory", "match": "the programs can run more efficiently, reducing power consumption and processor cost"}
        ],
        "feedback_correct": "You are correct!",
        "feedback_incorrect": "Sorry, you have selected the wrong answer."
      }
    ]
  },
  {
    "course": "Year 10 — GCSE Paper 1 Theory: Principles of Computer Science",
    "lesson": "Lesson 2 — Inside the CPU",
    "title": "Knowledge Check: Common CPU Components and their Functions",
    "placeholder": "FORM_URL_KC_CPU_COMPONENTS",
    "type": "knowledge_check",
    "questions": [
      {
        "n": 1,
        "type": "matching",
        "question": "Match the CPU components to their functions.",
        "pairs": [
          {"prompt": "Control Unit", "match": "Directs the flow of data and instructions"},
          {"prompt": "Arithmetic Logic Unit", "match": "Performs arithmetic and logical operations"},
          {"prompt": "Buses", "match": "Pathways for carrying data"},
          {"prompt": "Registers", "match": "Temporary storage for quick access data"},
          {"prompt": "Clock", "match": "Synchronizes all components with a steady pulse"}
        ],
        "feedback_correct": "You are correct!",
        "feedback_incorrect": "Sorry, you have selected the wrong answer."
      },
      {
        "n": 2,
        "type": "multiple_choice",
        "question": "What made the Von Neumann architecture different?",
        "options": ["The programs and the data are stored in the same memory (stored program concept)", "It used binary to encode data.", "It differentiated between primary memory and secondary memory.", "It had a BIOS"],
        "correct": "The programs and the data are stored in the same memory (stored program concept)",
        "feedback_correct": "",
        "feedback_incorrect": "",
        "note_for_review": "No feedback text was configured for this question in the source assessment builder."
      }
    ]
  },
  {
    "course": "Year 10 — GCSE Paper 1 Theory: Principles of Computer Science",
    "lesson": "Lesson 1 — Intro to Computer Systems",
    "title": "Task: Exam Style Questions - Embedded Systems",
    "type": "task",
    "images": {
      "Q3 (airport barrier photo)": "https://lwfiles.mycourse.app/6313816770e7826017236062-public/f9611c763d37308261c2a0adfcc71145.png"
    },
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Q1. Define the term 'embedded system'. [1 Mark]"
      },
      {
        "n": 2,
        "type": "paragraph",
        "question": "Q2. Complete the diagram of an embedded system by adding labelled boxes and arrows to show one sensor and one actuator that controls a motor. (Just describe in words what you would draw on the diagram.) [2 Mark]"
      },
      {
        "n": 3,
        "type": "paragraph",
        "question": "Q3. Parking at an airport is controlled by computers. No paper tickets are issued. Here is an image of the control system at the exit. The control system uses sensors, a camera and a database. The barrier lifts if the parking fee has been paid. Describe what the system does when the exit sensor is activated by a car driving towards it. [2 Mark]"
      }
    ]
  },
  {
    "course": "Year 10 — GCSE Paper 1 Theory: Principles of Computer Science",
    "lesson": "Lesson 2 — Inside the CPU",
    "title": "Task: Exam Style Questions - CPU",
    "type": "task",
    "images": {
      "Q1 (exam question image)": "https://lwfiles.mycourse.app/6313816770e7826017236062-public/1dec936616f13e43d13a6dfe4b35dca5.png"
    },
    "questions": [
      {
        "n": 1,
        "type": "paragraph",
        "question": "Answer the exam style question below: [6 Mark] Q1. Computers. The CPU carries out a process. (i) Complete the diagram. (2) [fetch-decode-execute cycle diagram, 'Execute' pre-labelled, two blanks to fill in]. (ii) Identify the hardware component that carries instructions from memory to the CPU. (1) A Binary shift / B Control unit / C Data bus / D Register. (iii) State the component of the CPU that carries out additions and comparisons. (1) (iv) State the reason why a higher clock speed is desirable. (1) (v) State the name of a bus that is unidirectional. (1) (Total for question = 6 marks)"
      }
    ]
  }
];

function createAllForms() {
  QUIZ_DATA.forEach(function(quiz) {
    // knowledge checks are auto-graded quizzes; tasks & self-reflections are
    // teacher-marked paragraph forms
    const isQuiz = quiz.type === 'knowledge_check';
    const form = FormApp.create(quiz.title);
    form.setIsQuiz(isQuiz)
        .setDescription((quiz.intro || '') +
          (isQuiz ? '\n\nYou need 100% to move on — you can retake this form.' : ''))
        .setCollectEmail(true)
        .setLimitOneResponsePerUser(false)
        .setAllowResponseEdits(true)
        .setPublishingSummary(false);

    (quiz.questions || []).forEach(function(q) {
      if (q.type === 'multiple_choice' && q.options && q.correct) {
        const item = form.addMultipleChoiceItem();
        item.setTitle(q.question).setPoints(1).setRequired(true);
        item.setChoices(q.options.map(function(opt) {
          return item.createChoice(opt, opt === q.correct);
        }));
        if (q.feedback_correct) item.setFeedbackForCorrect(
          FormApp.createFeedback().setText(q.feedback_correct).build());
        if (q.feedback_incorrect) item.setFeedbackForIncorrect(
          FormApp.createFeedback().setText(q.feedback_incorrect).build());
      } else if (q.type === 'multi_select' && q.options && q.correct) {
        // Checkbox (multi-answer) question — added for GCSE Paper 1 Theory KC1
        // (General vs Embedded Systems Q2). No multi_select handling existed
        // before this; kept minimal and consistent with the multiple_choice
        // branch above. Note: q.image (if present) is not attached to the
        // Form item automatically — add it manually in the Form editor.
        const item = form.addCheckboxItem();
        item.setTitle(q.question).setPoints(1).setRequired(true);
        item.setChoices(q.options.map(function(opt) {
          return item.createChoice(opt, q.correct.indexOf(opt) !== -1);
        }));
        if (q.feedback_correct) item.setFeedbackForCorrect(
          FormApp.createFeedback().setText(q.feedback_correct).build());
        if (q.feedback_incorrect) item.setFeedbackForIncorrect(
          FormApp.createFeedback().setText(q.feedback_incorrect).build());
      } else if (q.type === 'matching' && q.pairs) {
        const allMatches = q.pairs.map(function(p) { return p.match; });
        q.pairs.forEach(function(p) {
          const item = form.addListItem();
          item.setTitle(q.question + ' — ' + p.prompt).setPoints(1).setRequired(true);
          item.setChoices(allMatches.map(function(m) {
            return item.createChoice(m, m === p.match);
          }));
        });
      } else if (q.type === 'paragraph') {
        form.addParagraphTextItem().setTitle(q.question).setRequired(true);
      } else {
        // fallback: unanswerable/pending question types become paragraph items (teacher-marked)
        form.addParagraphTextItem().setTitle(q.question || JSON.stringify(q).slice(0, 120));
      }
    });

    Logger.log(quiz.title + (quiz.placeholder ? '  [' + quiz.placeholder + ']' : ''));
    Logger.log('  EDIT:    ' + form.getEditUrl());
    Logger.log('  STUDENT: ' + form.getPublishedUrl());
  });
}
