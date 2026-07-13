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
];

function createAllForms() {
  QUIZ_DATA.forEach(function(quiz) {
    const form = FormApp.create(quiz.title);
    form.setIsQuiz(true)
        .setDescription((quiz.intro || '') + '\n\nYou need 100% to move on — you can retake this form.')
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
      } else if (q.type === 'matching' && q.pairs) {
        const allMatches = q.pairs.map(function(p) { return p.match; });
        q.pairs.forEach(function(p) {
          const item = form.addListItem();
          item.setTitle(q.question + ' — ' + p.prompt).setPoints(1).setRequired(true);
          item.setChoices(allMatches.map(function(m) {
            return item.createChoice(m, m === p.match);
          }));
        });
      } else {
        // fallback: unanswerable/pending question types become paragraph items (teacher-marked)
        form.addParagraphTextItem().setTitle(q.question || JSON.stringify(q).slice(0, 120));
      }
    });

    Logger.log(quiz.title);
    Logger.log('  EDIT:    ' + form.getEditUrl());
    Logger.log('  STUDENT: ' + form.getPublishedUrl());
  });
}
