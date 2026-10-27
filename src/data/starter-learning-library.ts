/**
 * Original starter learning content for Kerala Learning Hub.
 * This is a substantial cross-grade skills pack, NOT an official syllabus or chapter database.
 * Do not label entries as syllabus-aligned until matched to the learner's current textbook edition.
 * Review and expand subject-specific material before broad public release.
 */
export type StarterLearningModule = {
  id:string; classId:string; classLabel:string; stage:string; subjectId:string; subject:string;
  sequence:number; title:string; kind:string; language:string; syllabusAligned:false;
  verification:string; sourceIds:string[]; ageAppropriateGuidance:string;
  learningGoals:string[]; miniLesson:string; activities:string[]; reviewChecklist:string[];
};
export type StarterQuestion = {
  id:string; classId:string; subjectId:string; skillTag:string; difficulty:string;
  prompt:string; options:string[]; correctIndex:number; explanation:string;
  syllabusAligned:false; verification:string;
};
export const STARTER_MODULES: StarterLearningModule[] = [
  {
    "id": "class-1-mathematics-1",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-mathematics-2",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-mathematics-3",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-mathematics-4",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-english-1",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-english-2",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-english-3",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-english-4",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-malayalam-1",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-malayalam-2",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-malayalam-3",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-malayalam-4",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-science-1",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-science-2",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-science-3",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-science-4",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-social-science-1",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-social-science-2",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-social-science-3",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-social-science-4",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-digital-literacy-1",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-digital-literacy-2",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-digital-literacy-3",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-1-digital-literacy-4",
    "classId": "class-1",
    "classLabel": "Class 1",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 1 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-mathematics-1",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-mathematics-2",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-mathematics-3",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-mathematics-4",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-english-1",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-english-2",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-english-3",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-english-4",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-malayalam-1",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-malayalam-2",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-malayalam-3",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-malayalam-4",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-science-1",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-science-2",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-science-3",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-science-4",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-social-science-1",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-social-science-2",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-social-science-3",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-social-science-4",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-digital-literacy-1",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-digital-literacy-2",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-digital-literacy-3",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-2-digital-literacy-4",
    "classId": "class-2",
    "classLabel": "Class 2",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 2 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-mathematics-1",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-mathematics-2",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-mathematics-3",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-mathematics-4",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-english-1",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-english-2",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-english-3",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-english-4",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-malayalam-1",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-malayalam-2",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-malayalam-3",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-malayalam-4",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-science-1",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-science-2",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-science-3",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-science-4",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-social-science-1",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-social-science-2",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-social-science-3",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-social-science-4",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-digital-literacy-1",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-digital-literacy-2",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-digital-literacy-3",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-3-digital-literacy-4",
    "classId": "class-3",
    "classLabel": "Class 3",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 3 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-mathematics-1",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-mathematics-2",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-mathematics-3",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-mathematics-4",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-english-1",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-english-2",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-english-3",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-english-4",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-malayalam-1",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-malayalam-2",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-malayalam-3",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-malayalam-4",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-science-1",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-science-2",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-science-3",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-science-4",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-social-science-1",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-social-science-2",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-social-science-3",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-social-science-4",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-digital-literacy-1",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-digital-literacy-2",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-digital-literacy-3",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-4-digital-literacy-4",
    "classId": "class-4",
    "classLabel": "Class 4",
    "stage": "primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use short, concrete explanations, pictures, oral discussion and hands-on practice. Adult guidance may be needed.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 4 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-mathematics-1",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-mathematics-2",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-mathematics-3",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-mathematics-4",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-english-1",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-english-2",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-english-3",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-english-4",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-malayalam-1",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-malayalam-2",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-malayalam-3",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-malayalam-4",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-science-1",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-science-2",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-science-3",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-science-4",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-social-science-1",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-social-science-2",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-social-science-3",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-social-science-4",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-digital-literacy-1",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-digital-literacy-2",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-digital-literacy-3",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-5-digital-literacy-4",
    "classId": "class-5",
    "classLabel": "Class 5",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 5 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-mathematics-1",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-mathematics-2",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-mathematics-3",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-mathematics-4",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-english-1",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-english-2",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-english-3",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-english-4",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-malayalam-1",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-malayalam-2",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-malayalam-3",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-malayalam-4",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-science-1",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-science-2",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-science-3",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-science-4",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-social-science-1",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-social-science-2",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-social-science-3",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-social-science-4",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-digital-literacy-1",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-digital-literacy-2",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-digital-literacy-3",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-6-digital-literacy-4",
    "classId": "class-6",
    "classLabel": "Class 6",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 6 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-mathematics-1",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-mathematics-2",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-mathematics-3",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-mathematics-4",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-english-1",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-english-2",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-english-3",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-english-4",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-malayalam-1",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-malayalam-2",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-malayalam-3",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-malayalam-4",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-science-1",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-science-2",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-science-3",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-science-4",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-social-science-1",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-social-science-2",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-social-science-3",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-social-science-4",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-digital-literacy-1",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-digital-literacy-2",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-digital-literacy-3",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-7-digital-literacy-4",
    "classId": "class-7",
    "classLabel": "Class 7",
    "stage": "upper-primary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Connect concepts to everyday examples; gradually introduce independent practice, diagrams and written reasoning.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 7 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-mathematics-1",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-mathematics-2",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-mathematics-3",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-mathematics-4",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-english-1",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-english-2",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-english-3",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-english-4",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-malayalam-1",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-malayalam-2",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-malayalam-3",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-malayalam-4",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-science-1",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-science-2",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-science-3",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-science-4",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-social-science-1",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-social-science-2",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-social-science-3",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-social-science-4",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-digital-literacy-1",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-digital-literacy-2",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-digital-literacy-3",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-8-digital-literacy-4",
    "classId": "class-8",
    "classLabel": "Class 8",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 8 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-mathematics-1",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-mathematics-2",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-mathematics-3",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-mathematics-4",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-english-1",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-english-2",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-english-3",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-english-4",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-malayalam-1",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-malayalam-2",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-malayalam-3",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-malayalam-4",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-science-1",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-science-2",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-science-3",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-science-4",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-social-science-1",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-social-science-2",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-social-science-3",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-social-science-4",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-digital-literacy-1",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-digital-literacy-2",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-digital-literacy-3",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-9-digital-literacy-4",
    "classId": "class-9",
    "classLabel": "Class 9",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 9 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-mathematics-1",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of number sense at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-mathematics-2",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-mathematics-3",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-mathematics-4",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-english-1",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-english-2",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-english-3",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-english-4",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-malayalam-1",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-malayalam-2",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-malayalam-3",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-malayalam-4",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-science-1",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-science-2",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of living systems at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-science-3",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-science-4",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-social-science-1",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-social-science-2",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-social-science-3",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of civic life at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-social-science-4",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-digital-literacy-1",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-digital-literacy-2",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-digital-literacy-3",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "class-10-digital-literacy-4",
    "classId": "class-10",
    "classLabel": "Class 10",
    "stage": "secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Emphasise precise vocabulary, multi-step reasoning, evidence, worked examples and self-checking.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Class 10 starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-mathematics-1",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of number sense at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-mathematics-2",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-mathematics-3",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-mathematics-4",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-english-1",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-english-2",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-english-3",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-english-4",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-malayalam-1",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-malayalam-2",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-malayalam-3",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-malayalam-4",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-science-1",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-science-2",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of living systems at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-science-3",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-science-4",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-social-science-1",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-social-science-2",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-social-science-3",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of civic life at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-social-science-4",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-digital-literacy-1",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-digital-literacy-2",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-digital-literacy-3",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-one-digital-literacy-4",
    "classId": "plus-one",
    "classLabel": "Plus One",
    "stage": "higher-secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Plus One starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-mathematics-1",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 1,
    "title": "Number sense",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of number sense at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to number sense. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-mathematics-2",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 2,
    "title": "Patterns and algebra",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of patterns and algebra at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to patterns and algebra. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-mathematics-3",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 3,
    "title": "Shape and measurement",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of shape and measurement at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to shape and measurement. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-mathematics-4",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "mathematics",
    "subject": "Mathematics",
    "sequence": 4,
    "title": "Data and probability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of data and probability at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to data and probability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Make a number line and mark three values.",
      "Explain the pattern in your own words.",
      "Solve one example, then check it using a second method.",
      "Collect five everyday measurements and compare them."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-english-1",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 1,
    "title": "Reading comprehension",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of reading comprehension at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to reading comprehension. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-english-2",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 2,
    "title": "Grammar in context",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of grammar in context at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to grammar in context. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-english-3",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 3,
    "title": "Vocabulary and usage",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of vocabulary and usage at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to vocabulary and usage. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-english-4",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "english",
    "subject": "English",
    "sequence": 4,
    "title": "Writing and communication",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of writing and communication at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to writing and communication. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Read a short paragraph and state its main idea.",
      "Find two unfamiliar words and infer their meaning from context.",
      "Rewrite a sentence clearly without changing its meaning.",
      "Write a short paragraph, then check punctuation and spelling."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-malayalam-1",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 1,
    "title": "വായനയും ആശയഗ്രഹണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of വായനയും ആശയഗ്രഹണവും at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to വായനയും ആശയഗ്രഹണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-malayalam-2",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 2,
    "title": "പദസമ്പത്തും വ്യാകരണവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of പദസമ്പത്തും വ്യാകരണവും at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to പദസമ്പത്തും വ്യാകരണവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-malayalam-3",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 3,
    "title": "എഴുത്തും ആശയവിനിമയവും",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of എഴുത്തും ആശയവിനിമയവും at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to എഴുത്തും ആശയവിനിമയവും. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-malayalam-4",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "malayalam",
    "subject": "Malayalam",
    "sequence": 4,
    "title": "സാഹിത്യവായന",
    "kind": "foundational-skill",
    "language": "ml",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of സാഹിത്യവായന at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to സാഹിത്യവായന. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "ഒരു ചെറിയ ഖണ്ഡിക വായിച്ച് പ്രധാന ആശയം പറയുക.",
      "പുതിയ രണ്ട് പദങ്ങളുടെ അർത്ഥം സന്ദർഭത്തിൽ നിന്ന് കണ്ടെത്തുക.",
      "ഒരു വാക്യം അർത്ഥം മാറ്റാതെ വ്യക്തമായി പുനരാഖ്യാനം ചെയ്യുക.",
      "ഒരു ചെറിയ കുറിപ്പ് എഴുതി അക്ഷരശുദ്ധിയും വിരാമചിഹ്നങ്ങളും പരിശോധിക്കുക."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-science-1",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 1,
    "title": "Observation and evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of observation and evidence at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to observation and evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-science-2",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 2,
    "title": "Living systems",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of living systems at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to living systems. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-science-3",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 3,
    "title": "Matter and energy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of matter and energy at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to matter and energy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-science-4",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "science",
    "subject": "Science",
    "sequence": 4,
    "title": "Environment and sustainability",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of environment and sustainability at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to environment and sustainability. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Write an observation before proposing an explanation.",
      "Separate what you observed from what you inferred.",
      "Draw and label a simple model or process.",
      "Suggest a fair test and identify what should remain unchanged."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-social-science-1",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 1,
    "title": "Place and maps",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of place and maps at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to place and maps. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-social-science-2",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 2,
    "title": "Time and historical evidence",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of time and historical evidence at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to time and historical evidence. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-social-science-3",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 3,
    "title": "Civic life",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of civic life at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to civic life. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-social-science-4",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "social-science",
    "subject": "Social Science",
    "sequence": 4,
    "title": "Resources and economy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of resources and economy at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to resources and economy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Identify the place, time or community involved.",
      "Separate a source's evidence from your interpretation.",
      "Draw a simple labelled map, timeline or comparison table.",
      "Explain how the topic connects to daily life in Kerala."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-digital-literacy-1",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 1,
    "title": "Device and file basics",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of device and file basics at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to device and file basics. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-digital-literacy-2",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 2,
    "title": "Information literacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of information literacy at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to information literacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-digital-literacy-3",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 3,
    "title": "Online safety and privacy",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of online safety and privacy at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to online safety and privacy. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  },
  {
    "id": "plus-two-digital-literacy-4",
    "classId": "plus-two",
    "classLabel": "Plus Two",
    "stage": "higher-secondary",
    "subjectId": "digital-literacy",
    "subject": "ICT & Digital Skills",
    "sequence": 4,
    "title": "Computational thinking",
    "kind": "foundational-skill",
    "language": "bilingual",
    "syllabusAligned": false,
    "verification": "starter-content-not-syllabus-verified",
    "sourceIds": [],
    "ageAppropriateGuidance": "Use analytical explanations, structured notes, independent research and explicit checks against the learner's chosen subject syllabus.",
    "learningGoals": [
      "Understand the core idea of computational thinking at a Plus Two starter level.",
      "Explain one important idea in your own words.",
      "Apply the idea to an everyday example and check your work."
    ],
    "miniLesson": "Start with a familiar example related to computational thinking. Identify the key idea, explain why it matters, and work through one small example step by step. Pause to ask: what do I know, what am I trying to find out, and how can I check my answer? Use the current textbook and teacher's instructions to connect this starter activity to the exact chapter being studied.",
    "activities": [
      "Describe the steps you took in order.",
      "Check who published a piece of online information.",
      "Identify personal information that should not be shared publicly.",
      "Break a task into smaller steps and test each step."
    ],
    "reviewChecklist": [
      "Check the exact textbook chapter before treating this as syllabus content.",
      "Check all facts, terminology and answer keys before publishing.",
      "Adapt language, complexity and examples to the learner's needs."
    ]
  }
];
export const STARTER_QUESTIONS: StarterQuestion[] = [
  {
    "id": "class-1-math-skill-1",
    "classId": "class-1",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 8 + 6?",
    "options": [
      "12",
      "14",
      "13",
      "9"
    ],
    "correctIndex": 1,
    "explanation": "8 + 6 = 14.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-1-math-skill-2",
    "classId": "class-1",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 21 − 9?",
    "options": [
      "12",
      "13",
      "29",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 21 − 9 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-1-math-skill-3",
    "classId": "class-1",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 1 groups with 3 items in each group. How many items are there?",
    "options": [
      "4",
      "3",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 1 × 3 = 3.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-1-math-skill-4",
    "classId": "class-1",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “1 more than 10”?",
    "options": [
      "-9",
      "10",
      "11",
      "10"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 1.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-1-math-skill-5",
    "classId": "class-1",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 5 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "5",
      "10",
      "15",
      "11"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 5 + 10 = 15 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-1-literacy-skill-1",
    "classId": "class-1",
    "subjectId": "english",
    "skillTag": "main-idea",
    "difficulty": "foundation",
    "prompt": "Which sentence gives the main idea of a paragraph?",
    "options": [
      "A detail mentioned once",
      "The central point the paragraph explains",
      "The longest sentence",
      "The final word"
    ],
    "correctIndex": 1,
    "explanation": "The main idea is the central point; supporting details explain it.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-1-literacy-skill-2",
    "classId": "class-1",
    "subjectId": "english",
    "skillTag": "context-clues",
    "difficulty": "foundation",
    "prompt": "Which is the best way to infer a word's meaning while reading?",
    "options": [
      "Ignore the whole sentence",
      "Use surrounding clues and then verify",
      "Always choose the shortest meaning",
      "Guess without rereading"
    ],
    "correctIndex": 1,
    "explanation": "Context clues help form a sensible meaning, which should be checked if possible.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-1-literacy-skill-3",
    "classId": "class-1",
    "subjectId": "english",
    "skillTag": "clear-writing",
    "difficulty": "developing",
    "prompt": "Which sentence is clearest for formal school writing?",
    "options": [
      "Thing was good and stuff",
      "The experiment showed a clear change in temperature.",
      "It was like, you know, different",
      "Very very very different"
    ],
    "correctIndex": 1,
    "explanation": "Specific wording communicates the observation clearly and precisely.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-1-literacy-skill-4",
    "classId": "class-1",
    "subjectId": "english",
    "skillTag": "source-checking",
    "difficulty": "developing",
    "prompt": "What should you do before sharing a factual claim online?",
    "options": [
      "Share it immediately",
      "Check the source and compare reliable references",
      "Trust the headline only",
      "Assume a picture proves it"
    ],
    "correctIndex": 1,
    "explanation": "Check the original source, date and corroborating evidence before sharing.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-1-literacy-skill-5",
    "classId": "class-1",
    "subjectId": "english",
    "skillTag": "revision-strategy",
    "difficulty": "application",
    "prompt": "What makes a useful revision note?",
    "options": [
      "Copying every sentence",
      "A short summary in your own words with key terms",
      "Only highlighting the page",
      "Writing without checking meaning"
    ],
    "correctIndex": 1,
    "explanation": "Concise notes in your own words support understanding and recall.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-2-math-skill-1",
    "classId": "class-2",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 9 + 7?",
    "options": [
      "14",
      "16",
      "14",
      "11"
    ],
    "correctIndex": 1,
    "explanation": "9 + 7 = 16.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-2-math-skill-2",
    "classId": "class-2",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 22 − 10?",
    "options": [
      "12",
      "14",
      "30",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 22 − 10 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-2-math-skill-3",
    "classId": "class-2",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 2 groups with 3 items in each group. How many items are there?",
    "options": [
      "5",
      "6",
      "4",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 2 × 3 = 6.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-2-math-skill-4",
    "classId": "class-2",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “2 more than 10”?",
    "options": [
      "-8",
      "20",
      "12",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 2.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-2-math-skill-5",
    "classId": "class-2",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 10 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "10",
      "15",
      "20",
      "12"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 10 + 10 = 20 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-2-literacy-skill-1",
    "classId": "class-2",
    "subjectId": "english",
    "skillTag": "main-idea",
    "difficulty": "foundation",
    "prompt": "Which sentence gives the main idea of a paragraph?",
    "options": [
      "A detail mentioned once",
      "The central point the paragraph explains",
      "The longest sentence",
      "The final word"
    ],
    "correctIndex": 1,
    "explanation": "The main idea is the central point; supporting details explain it.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-2-literacy-skill-2",
    "classId": "class-2",
    "subjectId": "english",
    "skillTag": "context-clues",
    "difficulty": "foundation",
    "prompt": "Which is the best way to infer a word's meaning while reading?",
    "options": [
      "Ignore the whole sentence",
      "Use surrounding clues and then verify",
      "Always choose the shortest meaning",
      "Guess without rereading"
    ],
    "correctIndex": 1,
    "explanation": "Context clues help form a sensible meaning, which should be checked if possible.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-2-literacy-skill-3",
    "classId": "class-2",
    "subjectId": "english",
    "skillTag": "clear-writing",
    "difficulty": "developing",
    "prompt": "Which sentence is clearest for formal school writing?",
    "options": [
      "Thing was good and stuff",
      "The experiment showed a clear change in temperature.",
      "It was like, you know, different",
      "Very very very different"
    ],
    "correctIndex": 1,
    "explanation": "Specific wording communicates the observation clearly and precisely.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-2-literacy-skill-4",
    "classId": "class-2",
    "subjectId": "english",
    "skillTag": "source-checking",
    "difficulty": "developing",
    "prompt": "What should you do before sharing a factual claim online?",
    "options": [
      "Share it immediately",
      "Check the source and compare reliable references",
      "Trust the headline only",
      "Assume a picture proves it"
    ],
    "correctIndex": 1,
    "explanation": "Check the original source, date and corroborating evidence before sharing.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-2-literacy-skill-5",
    "classId": "class-2",
    "subjectId": "english",
    "skillTag": "revision-strategy",
    "difficulty": "application",
    "prompt": "What makes a useful revision note?",
    "options": [
      "Copying every sentence",
      "A short summary in your own words with key terms",
      "Only highlighting the page",
      "Writing without checking meaning"
    ],
    "correctIndex": 1,
    "explanation": "Concise notes in your own words support understanding and recall.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-3-math-skill-1",
    "classId": "class-3",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 10 + 8?",
    "options": [
      "16",
      "18",
      "15",
      "13"
    ],
    "correctIndex": 1,
    "explanation": "10 + 8 = 18.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-3-math-skill-2",
    "classId": "class-3",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 23 − 11?",
    "options": [
      "12",
      "15",
      "31",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 23 − 11 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-3-math-skill-3",
    "classId": "class-3",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 3 groups with 3 items in each group. How many items are there?",
    "options": [
      "6",
      "9",
      "6",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 3 × 3 = 9.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-3-math-skill-4",
    "classId": "class-3",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “3 more than 10”?",
    "options": [
      "-7",
      "30",
      "13",
      "3.3333333333333335"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 3.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-3-math-skill-5",
    "classId": "class-3",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 15 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "15",
      "20",
      "25",
      "13"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 15 + 10 = 25 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-3-literacy-skill-1",
    "classId": "class-3",
    "subjectId": "english",
    "skillTag": "main-idea",
    "difficulty": "foundation",
    "prompt": "Which sentence gives the main idea of a paragraph?",
    "options": [
      "A detail mentioned once",
      "The central point the paragraph explains",
      "The longest sentence",
      "The final word"
    ],
    "correctIndex": 1,
    "explanation": "The main idea is the central point; supporting details explain it.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-3-literacy-skill-2",
    "classId": "class-3",
    "subjectId": "english",
    "skillTag": "context-clues",
    "difficulty": "foundation",
    "prompt": "Which is the best way to infer a word's meaning while reading?",
    "options": [
      "Ignore the whole sentence",
      "Use surrounding clues and then verify",
      "Always choose the shortest meaning",
      "Guess without rereading"
    ],
    "correctIndex": 1,
    "explanation": "Context clues help form a sensible meaning, which should be checked if possible.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-3-literacy-skill-3",
    "classId": "class-3",
    "subjectId": "english",
    "skillTag": "clear-writing",
    "difficulty": "developing",
    "prompt": "Which sentence is clearest for formal school writing?",
    "options": [
      "Thing was good and stuff",
      "The experiment showed a clear change in temperature.",
      "It was like, you know, different",
      "Very very very different"
    ],
    "correctIndex": 1,
    "explanation": "Specific wording communicates the observation clearly and precisely.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-3-literacy-skill-4",
    "classId": "class-3",
    "subjectId": "english",
    "skillTag": "source-checking",
    "difficulty": "developing",
    "prompt": "What should you do before sharing a factual claim online?",
    "options": [
      "Share it immediately",
      "Check the source and compare reliable references",
      "Trust the headline only",
      "Assume a picture proves it"
    ],
    "correctIndex": 1,
    "explanation": "Check the original source, date and corroborating evidence before sharing.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-3-literacy-skill-5",
    "classId": "class-3",
    "subjectId": "english",
    "skillTag": "revision-strategy",
    "difficulty": "application",
    "prompt": "What makes a useful revision note?",
    "options": [
      "Copying every sentence",
      "A short summary in your own words with key terms",
      "Only highlighting the page",
      "Writing without checking meaning"
    ],
    "correctIndex": 1,
    "explanation": "Concise notes in your own words support understanding and recall.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-4-math-skill-1",
    "classId": "class-4",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 11 + 9?",
    "options": [
      "18",
      "20",
      "16",
      "15"
    ],
    "correctIndex": 1,
    "explanation": "11 + 9 = 20.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-4-math-skill-2",
    "classId": "class-4",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 24 − 12?",
    "options": [
      "12",
      "16",
      "32",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 24 − 12 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-4-math-skill-3",
    "classId": "class-4",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 4 groups with 3 items in each group. How many items are there?",
    "options": [
      "7",
      "12",
      "8",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 4 × 3 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-4-math-skill-4",
    "classId": "class-4",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “4 more than 10”?",
    "options": [
      "-6",
      "40",
      "14",
      "2.5"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 4.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-4-math-skill-5",
    "classId": "class-4",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 20 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "20",
      "25",
      "30",
      "14"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 20 + 10 = 30 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-4-literacy-skill-1",
    "classId": "class-4",
    "subjectId": "english",
    "skillTag": "main-idea",
    "difficulty": "foundation",
    "prompt": "Which sentence gives the main idea of a paragraph?",
    "options": [
      "A detail mentioned once",
      "The central point the paragraph explains",
      "The longest sentence",
      "The final word"
    ],
    "correctIndex": 1,
    "explanation": "The main idea is the central point; supporting details explain it.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-4-literacy-skill-2",
    "classId": "class-4",
    "subjectId": "english",
    "skillTag": "context-clues",
    "difficulty": "foundation",
    "prompt": "Which is the best way to infer a word's meaning while reading?",
    "options": [
      "Ignore the whole sentence",
      "Use surrounding clues and then verify",
      "Always choose the shortest meaning",
      "Guess without rereading"
    ],
    "correctIndex": 1,
    "explanation": "Context clues help form a sensible meaning, which should be checked if possible.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-4-literacy-skill-3",
    "classId": "class-4",
    "subjectId": "english",
    "skillTag": "clear-writing",
    "difficulty": "developing",
    "prompt": "Which sentence is clearest for formal school writing?",
    "options": [
      "Thing was good and stuff",
      "The experiment showed a clear change in temperature.",
      "It was like, you know, different",
      "Very very very different"
    ],
    "correctIndex": 1,
    "explanation": "Specific wording communicates the observation clearly and precisely.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-4-literacy-skill-4",
    "classId": "class-4",
    "subjectId": "english",
    "skillTag": "source-checking",
    "difficulty": "developing",
    "prompt": "What should you do before sharing a factual claim online?",
    "options": [
      "Share it immediately",
      "Check the source and compare reliable references",
      "Trust the headline only",
      "Assume a picture proves it"
    ],
    "correctIndex": 1,
    "explanation": "Check the original source, date and corroborating evidence before sharing.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-4-literacy-skill-5",
    "classId": "class-4",
    "subjectId": "english",
    "skillTag": "revision-strategy",
    "difficulty": "application",
    "prompt": "What makes a useful revision note?",
    "options": [
      "Copying every sentence",
      "A short summary in your own words with key terms",
      "Only highlighting the page",
      "Writing without checking meaning"
    ],
    "correctIndex": 1,
    "explanation": "Concise notes in your own words support understanding and recall.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-5-math-skill-1",
    "classId": "class-5",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 12 + 10?",
    "options": [
      "20",
      "22",
      "17",
      "17"
    ],
    "correctIndex": 1,
    "explanation": "12 + 10 = 22.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-5-math-skill-2",
    "classId": "class-5",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 25 − 13?",
    "options": [
      "12",
      "17",
      "33",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 25 − 13 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-5-math-skill-3",
    "classId": "class-5",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 5 groups with 3 items in each group. How many items are there?",
    "options": [
      "8",
      "15",
      "10",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 5 × 3 = 15.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-5-math-skill-4",
    "classId": "class-5",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “5 more than 10”?",
    "options": [
      "-5",
      "50",
      "15",
      "2"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 5.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-5-math-skill-5",
    "classId": "class-5",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 25 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "25",
      "30",
      "35",
      "15"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 25 + 10 = 35 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-5-literacy-skill-1",
    "classId": "class-5",
    "subjectId": "english",
    "skillTag": "main-idea",
    "difficulty": "foundation",
    "prompt": "Which sentence gives the main idea of a paragraph?",
    "options": [
      "A detail mentioned once",
      "The central point the paragraph explains",
      "The longest sentence",
      "The final word"
    ],
    "correctIndex": 1,
    "explanation": "The main idea is the central point; supporting details explain it.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-5-literacy-skill-2",
    "classId": "class-5",
    "subjectId": "english",
    "skillTag": "context-clues",
    "difficulty": "foundation",
    "prompt": "Which is the best way to infer a word's meaning while reading?",
    "options": [
      "Ignore the whole sentence",
      "Use surrounding clues and then verify",
      "Always choose the shortest meaning",
      "Guess without rereading"
    ],
    "correctIndex": 1,
    "explanation": "Context clues help form a sensible meaning, which should be checked if possible.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-5-literacy-skill-3",
    "classId": "class-5",
    "subjectId": "english",
    "skillTag": "clear-writing",
    "difficulty": "developing",
    "prompt": "Which sentence is clearest for formal school writing?",
    "options": [
      "Thing was good and stuff",
      "The experiment showed a clear change in temperature.",
      "It was like, you know, different",
      "Very very very different"
    ],
    "correctIndex": 1,
    "explanation": "Specific wording communicates the observation clearly and precisely.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-5-literacy-skill-4",
    "classId": "class-5",
    "subjectId": "english",
    "skillTag": "source-checking",
    "difficulty": "developing",
    "prompt": "What should you do before sharing a factual claim online?",
    "options": [
      "Share it immediately",
      "Check the source and compare reliable references",
      "Trust the headline only",
      "Assume a picture proves it"
    ],
    "correctIndex": 1,
    "explanation": "Check the original source, date and corroborating evidence before sharing.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-5-literacy-skill-5",
    "classId": "class-5",
    "subjectId": "english",
    "skillTag": "revision-strategy",
    "difficulty": "application",
    "prompt": "What makes a useful revision note?",
    "options": [
      "Copying every sentence",
      "A short summary in your own words with key terms",
      "Only highlighting the page",
      "Writing without checking meaning"
    ],
    "correctIndex": 1,
    "explanation": "Concise notes in your own words support understanding and recall.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-6-math-skill-1",
    "classId": "class-6",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 13 + 11?",
    "options": [
      "22",
      "24",
      "18",
      "19"
    ],
    "correctIndex": 1,
    "explanation": "13 + 11 = 24.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-6-math-skill-2",
    "classId": "class-6",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 26 − 14?",
    "options": [
      "12",
      "18",
      "34",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 26 − 14 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-6-math-skill-3",
    "classId": "class-6",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 6 groups with 3 items in each group. How many items are there?",
    "options": [
      "9",
      "18",
      "12",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 6 × 3 = 18.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-6-math-skill-4",
    "classId": "class-6",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “6 more than 10”?",
    "options": [
      "-4",
      "60",
      "16",
      "1.6666666666666667"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 6.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-6-math-skill-5",
    "classId": "class-6",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 30 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "30",
      "35",
      "40",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 30 + 10 = 40 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-6-literacy-skill-1",
    "classId": "class-6",
    "subjectId": "english",
    "skillTag": "main-idea",
    "difficulty": "foundation",
    "prompt": "Which sentence gives the main idea of a paragraph?",
    "options": [
      "A detail mentioned once",
      "The central point the paragraph explains",
      "The longest sentence",
      "The final word"
    ],
    "correctIndex": 1,
    "explanation": "The main idea is the central point; supporting details explain it.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-6-literacy-skill-2",
    "classId": "class-6",
    "subjectId": "english",
    "skillTag": "context-clues",
    "difficulty": "foundation",
    "prompt": "Which is the best way to infer a word's meaning while reading?",
    "options": [
      "Ignore the whole sentence",
      "Use surrounding clues and then verify",
      "Always choose the shortest meaning",
      "Guess without rereading"
    ],
    "correctIndex": 1,
    "explanation": "Context clues help form a sensible meaning, which should be checked if possible.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-6-literacy-skill-3",
    "classId": "class-6",
    "subjectId": "english",
    "skillTag": "clear-writing",
    "difficulty": "developing",
    "prompt": "Which sentence is clearest for formal school writing?",
    "options": [
      "Thing was good and stuff",
      "The experiment showed a clear change in temperature.",
      "It was like, you know, different",
      "Very very very different"
    ],
    "correctIndex": 1,
    "explanation": "Specific wording communicates the observation clearly and precisely.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-6-literacy-skill-4",
    "classId": "class-6",
    "subjectId": "english",
    "skillTag": "source-checking",
    "difficulty": "developing",
    "prompt": "What should you do before sharing a factual claim online?",
    "options": [
      "Share it immediately",
      "Check the source and compare reliable references",
      "Trust the headline only",
      "Assume a picture proves it"
    ],
    "correctIndex": 1,
    "explanation": "Check the original source, date and corroborating evidence before sharing.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-6-literacy-skill-5",
    "classId": "class-6",
    "subjectId": "english",
    "skillTag": "revision-strategy",
    "difficulty": "application",
    "prompt": "What makes a useful revision note?",
    "options": [
      "Copying every sentence",
      "A short summary in your own words with key terms",
      "Only highlighting the page",
      "Writing without checking meaning"
    ],
    "correctIndex": 1,
    "explanation": "Concise notes in your own words support understanding and recall.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-7-math-skill-1",
    "classId": "class-7",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 14 + 12?",
    "options": [
      "24",
      "26",
      "19",
      "21"
    ],
    "correctIndex": 1,
    "explanation": "14 + 12 = 26.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-7-math-skill-2",
    "classId": "class-7",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 27 − 15?",
    "options": [
      "12",
      "19",
      "35",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 27 − 15 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-7-math-skill-3",
    "classId": "class-7",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 7 groups with 3 items in each group. How many items are there?",
    "options": [
      "10",
      "21",
      "14",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 7 × 3 = 21.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-7-math-skill-4",
    "classId": "class-7",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “7 more than 10”?",
    "options": [
      "-3",
      "70",
      "17",
      "1.4285714285714286"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 7.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-7-math-skill-5",
    "classId": "class-7",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 35 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "35",
      "40",
      "45",
      "17"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 35 + 10 = 45 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-7-literacy-skill-1",
    "classId": "class-7",
    "subjectId": "english",
    "skillTag": "main-idea",
    "difficulty": "foundation",
    "prompt": "Which sentence gives the main idea of a paragraph?",
    "options": [
      "A detail mentioned once",
      "The central point the paragraph explains",
      "The longest sentence",
      "The final word"
    ],
    "correctIndex": 1,
    "explanation": "The main idea is the central point; supporting details explain it.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-7-literacy-skill-2",
    "classId": "class-7",
    "subjectId": "english",
    "skillTag": "context-clues",
    "difficulty": "foundation",
    "prompt": "Which is the best way to infer a word's meaning while reading?",
    "options": [
      "Ignore the whole sentence",
      "Use surrounding clues and then verify",
      "Always choose the shortest meaning",
      "Guess without rereading"
    ],
    "correctIndex": 1,
    "explanation": "Context clues help form a sensible meaning, which should be checked if possible.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-7-literacy-skill-3",
    "classId": "class-7",
    "subjectId": "english",
    "skillTag": "clear-writing",
    "difficulty": "developing",
    "prompt": "Which sentence is clearest for formal school writing?",
    "options": [
      "Thing was good and stuff",
      "The experiment showed a clear change in temperature.",
      "It was like, you know, different",
      "Very very very different"
    ],
    "correctIndex": 1,
    "explanation": "Specific wording communicates the observation clearly and precisely.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-7-literacy-skill-4",
    "classId": "class-7",
    "subjectId": "english",
    "skillTag": "source-checking",
    "difficulty": "developing",
    "prompt": "What should you do before sharing a factual claim online?",
    "options": [
      "Share it immediately",
      "Check the source and compare reliable references",
      "Trust the headline only",
      "Assume a picture proves it"
    ],
    "correctIndex": 1,
    "explanation": "Check the original source, date and corroborating evidence before sharing.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-7-literacy-skill-5",
    "classId": "class-7",
    "subjectId": "english",
    "skillTag": "revision-strategy",
    "difficulty": "application",
    "prompt": "What makes a useful revision note?",
    "options": [
      "Copying every sentence",
      "A short summary in your own words with key terms",
      "Only highlighting the page",
      "Writing without checking meaning"
    ],
    "correctIndex": 1,
    "explanation": "Concise notes in your own words support understanding and recall.",
    "syllabusAligned": false,
    "verification": "answer-key-reviewed"
  },
  {
    "id": "class-8-math-skill-1",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "linear-equations",
    "difficulty": "developing",
    "prompt": "Solve 3x − 7 = 20.",
    "options": [
      "x = 7",
      "x = 9",
      "x = 13",
      "x = 27"
    ],
    "correctIndex": 1,
    "explanation": "Add 7 to both sides to get 3x = 27, then divide by 3. Therefore x = 9.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-math-skill-2",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "laws-of-exponents",
    "difficulty": "developing",
    "prompt": "Simplify (2³ × 2⁴) ÷ 2².",
    "options": [
      "2⁵ = 32",
      "2⁹ = 512",
      "2³ = 8",
      "2¹ = 2"
    ],
    "correctIndex": 0,
    "explanation": "When multiplying powers with the same base, add the exponents; when dividing, subtract them: 3 + 4 − 2 = 5.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-math-skill-3",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "percentage-discount",
    "difficulty": "developing",
    "prompt": "A bag marked ₹800 is sold at a 15% discount. What is the sale price?",
    "options": [
      "₹680",
      "₹700",
      "₹720",
      "₹785"
    ],
    "correctIndex": 0,
    "explanation": "15% of ₹800 is ₹120. Subtract the discount: ₹800 − ₹120 = ₹680.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-math-skill-4",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "ratio-and-angles",
    "difficulty": "developing",
    "prompt": "The angles of a triangle are in the ratio 2:3:4. What is the largest angle?",
    "options": [
      "40°",
      "60°",
      "80°",
      "100°"
    ],
    "correctIndex": 2,
    "explanation": "The ratio has 9 equal parts, so each part is 180° ÷ 9 = 20°. The largest angle is 4 × 20° = 80°.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-math-skill-5",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "probability",
    "difficulty": "developing",
    "prompt": "A fair six-sided die is rolled once. What is the probability of getting a prime number?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctIndex": 2,
    "explanation": "The prime results are 2, 3 and 5: 3 favourable outcomes out of 6, so the probability is 3/6 = 1/2.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-literacy-skill-1",
    "classId": "class-8",
    "subjectId": "english",
    "skillTag": "subject-verb-agreement",
    "difficulty": "developing",
    "prompt": "Choose the correct verb: “Neither of the players ___ ready.”",
    "options": [
      "are",
      "is",
      "were",
      "be"
    ],
    "correctIndex": 1,
    "explanation": "“Neither” is singular in this construction, so the verb is “is”.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-literacy-skill-2",
    "classId": "class-8",
    "subjectId": "english",
    "skillTag": "context-clues",
    "difficulty": "developing",
    "prompt": "In “The footpath was treacherous after the rain; loose stones made every step risky,” what does “treacherous” mean?",
    "options": [
      "Beautiful",
      "Dangerous",
      "Familiar",
      "Convenient"
    ],
    "correctIndex": 1,
    "explanation": "The loose stones and risky steps show that the path is dangerous.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-literacy-skill-3",
    "classId": "class-8",
    "subjectId": "english",
    "skillTag": "reported-speech",
    "difficulty": "developing",
    "prompt": "Mira said, “I am waiting for the bus.” Which sentence reports her words correctly?",
    "options": [
      "Mira said that I am waiting for the bus.",
      "Mira said that she was waiting for the bus.",
      "Mira says that she waited for the bus yesterday.",
      "Mira said she is waited for the bus."
    ],
    "correctIndex": 1,
    "explanation": "In reported speech, “I” becomes “she” and “am waiting” usually shifts to “was waiting” when the reporting verb is past.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-literacy-skill-4",
    "classId": "class-8",
    "subjectId": "english",
    "skillTag": "passive-voice",
    "difficulty": "developing",
    "prompt": "Choose the correct passive form of “The students planted the saplings.”",
    "options": [
      "The saplings planted the students.",
      "The saplings were planted by the students.",
      "The students were planted by the saplings.",
      "The saplings are planting the students."
    ],
    "correctIndex": 1,
    "explanation": "The object “the saplings” becomes the subject; the past simple passive is “were planted”.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-8-literacy-skill-5",
    "classId": "class-8",
    "subjectId": "english",
    "skillTag": "evidence-and-opinion",
    "difficulty": "developing",
    "prompt": "Which detail is strongest evidence that a school recycling plan reduced waste?",
    "options": [
      "Students said the bins looked attractive.",
      "The headteacher liked the idea.",
      "Measured landfill waste fell by 20% in the month after sorting bins were introduced.",
      "Recycling is always the best activity."
    ],
    "correctIndex": 2,
    "explanation": "A measured change directly connected to the plan is stronger evidence than preference or opinion.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-math-skill-1",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "factorisation",
    "difficulty": "application",
    "prompt": "Which is the factorisation of x² − 9x + 20?",
    "options": [
      "(x − 2)(x − 10)",
      "(x + 4)(x + 5)",
      "(x − 4)(x − 5)",
      "(x − 1)(x − 20)"
    ],
    "correctIndex": 2,
    "explanation": "The numbers −4 and −5 multiply to 20 and add to −9, so x² − 9x + 20 = (x − 4)(x − 5).",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-math-skill-2",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "pythagoras-theorem",
    "difficulty": "application",
    "prompt": "A right triangle has perpendicular sides of 6 cm and 8 cm. What is its hypotenuse?",
    "options": [
      "9 cm",
      "10 cm",
      "12 cm",
      "14 cm"
    ],
    "correctIndex": 1,
    "explanation": "By Pythagoras' theorem, c² = 6² + 8² = 36 + 64 = 100, so c = 10 cm.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-math-skill-3",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "linear-equations-substitution",
    "difficulty": "application",
    "prompt": "If 2x + 3y = 12 and x = 3, what is y?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "explanation": "Substitute x = 3: 6 + 3y = 12, so 3y = 6 and y = 2.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-math-skill-4",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "coordinate-geometry-midpoint",
    "difficulty": "application",
    "prompt": "What is the midpoint of A(−2, 4) and B(6, 8)?",
    "options": [
      "(2, 6)",
      "(4, 4)",
      "(−4, 6)",
      "(2, 12)"
    ],
    "correctIndex": 0,
    "explanation": "Average the x-coordinates and y-coordinates: ((−2 + 6)/2, (4 + 8)/2) = (2, 6).",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-math-skill-5",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "probability",
    "difficulty": "application",
    "prompt": "A fair die is rolled once. What is the probability of getting a number greater than 4?",
    "options": [
      "1/6",
      "1/2",
      "1/3",
      "2/3"
    ],
    "correctIndex": 2,
    "explanation": "Only 5 and 6 are greater than 4. The probability is 2/6 = 1/3.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-literacy-skill-1",
    "classId": "class-9",
    "subjectId": "english",
    "skillTag": "subordinate-clauses",
    "difficulty": "application",
    "prompt": "In “Although the road was narrow, the driver slowed down,” which words form the subordinate clause?",
    "options": [
      "The driver slowed down",
      "Although the road was narrow",
      "The road was",
      "Slowed down"
    ],
    "correctIndex": 1,
    "explanation": "“Although the road was narrow” depends on the main clause and begins with the subordinating conjunction “although”.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-literacy-skill-2",
    "classId": "class-9",
    "subjectId": "english",
    "skillTag": "inference-from-evidence",
    "difficulty": "application",
    "prompt": "After a week of heavy rain, a river rose above the lower steps at a ghat. When the rain stopped, the waterline slowly fell. What is supported by these details?",
    "options": [
      "The river has dried up completely.",
      "The river level fell after the rainfall stopped.",
      "The ghat was rebuilt.",
      "The river will never rise again."
    ],
    "correctIndex": 1,
    "explanation": "The passage directly describes the waterline falling; it does not support claims about the river drying up or future conditions.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-literacy-skill-3",
    "classId": "class-9",
    "subjectId": "english",
    "skillTag": "reported-speech",
    "difficulty": "application",
    "prompt": "The coach said, “We will practise tomorrow.” Which is the most appropriate reported form?",
    "options": [
      "The coach said they will practise tomorrow.",
      "The coach said that they would practise the following day.",
      "The coach says that we practised the day before.",
      "The coach said that they practise yesterday."
    ],
    "correctIndex": 1,
    "explanation": "With a past reporting verb, “will” commonly shifts to “would” and “tomorrow” to “the following day”.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-literacy-skill-4",
    "classId": "class-9",
    "subjectId": "english",
    "skillTag": "sentence-punctuation",
    "difficulty": "application",
    "prompt": "Choose the correctly punctuated sentence.",
    "options": [
      "When the bell rang the students, left the room.",
      "When, the bell rang the students left the room.",
      "When the bell rang, the students left the room.",
      "When the bell, rang the students left the room."
    ],
    "correctIndex": 2,
    "explanation": "A comma separates the introductory dependent clause from the main clause.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-9-literacy-skill-5",
    "classId": "class-9",
    "subjectId": "english",
    "skillTag": "source-evaluation",
    "difficulty": "application",
    "prompt": "You need reliable annual rainfall totals for a school report. Which source should you consult first?",
    "options": [
      "An anonymous social-media comment.",
      "A screenshot with no date or source.",
      "An official meteorological dataset with dates and methods.",
      "A forwarded message that says “trust me”."
    ],
    "correctIndex": 2,
    "explanation": "An official dataset with provenance and dates can be checked and is more reliable than unsourced claims.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-math-skill-1",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "quadratic-equations",
    "difficulty": "exam-practice",
    "prompt": "What are the roots of x² − 5x + 6 = 0?",
    "options": [
      "1 and 6",
      "−2 and −3",
      "2 and 3",
      "−2 and 3"
    ],
    "correctIndex": 2,
    "explanation": "Factor the equation as (x − 2)(x − 3) = 0. The roots are x = 2 and x = 3.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-math-skill-2",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "arithmetic-progression",
    "difficulty": "exam-practice",
    "prompt": "An arithmetic sequence begins 5, 8, 11, 14, … What is its 20th term?",
    "options": [
      "59",
      "60",
      "62",
      "65"
    ],
    "correctIndex": 2,
    "explanation": "The first term is 5 and the common difference is 3. The 20th term is 5 + 19 × 3 = 62.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-math-skill-3",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "trigonometry",
    "difficulty": "exam-practice",
    "prompt": "For an acute angle θ, tan θ = 3/4. What is sin θ?",
    "options": [
      "4/5",
      "3/5",
      "3/4",
      "5/3"
    ],
    "correctIndex": 1,
    "explanation": "A right triangle with opposite:adjacent = 3:4 has hypotenuse 5. Therefore sin θ = opposite/hypotenuse = 3/5.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-math-skill-4",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "coordinate-geometry-distance",
    "difficulty": "exam-practice",
    "prompt": "What is the distance between points (1, 2) and (4, 6)?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "The horizontal and vertical differences are 3 and 4. The distance is √(3² + 4²) = √25 = 5.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-math-skill-5",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "probability",
    "difficulty": "exam-practice",
    "prompt": "A bag contains 3 red, 2 blue and 1 green counter. One counter is picked at random. What is the probability it is not blue?",
    "options": [
      "1/3",
      "1/2",
      "2/3",
      "5/6"
    ],
    "correctIndex": 2,
    "explanation": "There are 4 non-blue counters out of 6 in total, so the probability is 4/6 = 2/3.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-literacy-skill-1",
    "classId": "class-10",
    "subjectId": "english",
    "skillTag": "reported-speech",
    "difficulty": "exam-practice",
    "prompt": "Riya said, “I have completed the assignment.” Choose the correct reported form.",
    "options": [
      "Riya said that I have completed the assignment.",
      "Riya said that she had completed the assignment.",
      "Riya says she completed the assignment tomorrow.",
      "Riya said that she has completing the assignment."
    ],
    "correctIndex": 1,
    "explanation": "The pronoun changes to “she” and the present perfect commonly shifts to past perfect after a past reporting verb.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-literacy-skill-2",
    "classId": "class-10",
    "subjectId": "english",
    "skillTag": "subject-verb-agreement",
    "difficulty": "exam-practice",
    "prompt": "Choose the correct verb: “Neither the teachers nor the principal ___ available for the meeting.”",
    "options": [
      "were",
      "are",
      "was",
      "have been"
    ],
    "correctIndex": 2,
    "explanation": "With “neither … nor”, the verb commonly agrees with the nearer subject, “the principal”, which is singular.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-literacy-skill-3",
    "classId": "class-10",
    "subjectId": "english",
    "skillTag": "passive-voice",
    "difficulty": "exam-practice",
    "prompt": "Choose the correct passive form of “The team will publish the results tomorrow.”",
    "options": [
      "The results will publish the team tomorrow.",
      "The results will be published by the team tomorrow.",
      "The team will be published by the results tomorrow.",
      "The results were publishing tomorrow."
    ],
    "correctIndex": 1,
    "explanation": "The future passive uses “will be” plus the past participle: “will be published”.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-literacy-skill-4",
    "classId": "class-10",
    "subjectId": "english",
    "skillTag": "logical-connectors",
    "difficulty": "exam-practice",
    "prompt": "In “The road was flooded; therefore, the match was postponed,” what relationship does “therefore” signal?",
    "options": [
      "Contrast",
      "A result or consequence",
      "An example",
      "A comparison"
    ],
    "correctIndex": 1,
    "explanation": "“Therefore” introduces the consequence of the road being flooded.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "class-10-literacy-skill-5",
    "classId": "class-10",
    "subjectId": "english",
    "skillTag": "author-attitude",
    "difficulty": "exam-practice",
    "prompt": "A report says: “The proposal promises faster service, but it provides no budget, timeline or evidence of feasibility.” What is the writer’s attitude?",
    "options": [
      "Unquestioningly enthusiastic",
      "Cautious and sceptical",
      "Amused",
      "Completely unrelated to the proposal"
    ],
    "correctIndex": 1,
    "explanation": "The writer points out missing evidence, signalling caution rather than accepting the promises at face value.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-math-skill-1",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "function-evaluation",
    "difficulty": "higher-secondary",
    "prompt": "If f(x) = x² − 3x + 2, what is f(4)?",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correctIndex": 2,
    "explanation": "Substitute x = 4: f(4) = 16 − 12 + 2 = 6.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-math-skill-2",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "trigonometric-ratios",
    "difficulty": "higher-secondary",
    "prompt": "If sin θ = 3/5 and θ is acute, what is cos θ?",
    "options": [
      "2/5",
      "3/4",
      "4/5",
      "5/4"
    ],
    "correctIndex": 2,
    "explanation": "Using a 3–4–5 right triangle, the adjacent side is 4 and the hypotenuse is 5, so cos θ = 4/5.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-math-skill-3",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "equation-of-a-line",
    "difficulty": "higher-secondary",
    "prompt": "A line has slope −2 and passes through (2, 3). Which is its equation?",
    "options": [
      "y = 2x − 1",
      "y = −2x + 7",
      "y = −2x − 1",
      "y = 3x − 2"
    ],
    "correctIndex": 1,
    "explanation": "Use y − 3 = −2(x − 2). Expanding gives y − 3 = −2x + 4, hence y = −2x + 7.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-math-skill-4",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "combinations",
    "difficulty": "higher-secondary",
    "prompt": "How many different pairs can be selected from 5 distinct students?",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "The number of pairs is ⁵C₂ = 5 × 4 ÷ 2 = 10.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-math-skill-5",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "probability-independent-events",
    "difficulty": "higher-secondary",
    "prompt": "Two fair coins are tossed. What is the probability of getting exactly one head?",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "1"
    ],
    "correctIndex": 1,
    "explanation": "The equally likely outcomes are HH, HT, TH and TT. Two of the four outcomes have exactly one head, so the probability is 2/4 = 1/2.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-literacy-skill-1",
    "classId": "plus-one",
    "subjectId": "english",
    "skillTag": "figurative-language",
    "difficulty": "higher-secondary",
    "prompt": "What figure of speech appears in “The city never sleeps”?",
    "options": [
      "Simile",
      "Personification",
      "Onomatopoeia",
      "Oxymoron"
    ],
    "correctIndex": 1,
    "explanation": "The city is described as if it were a person capable of sleeping, which is personification.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-literacy-skill-2",
    "classId": "plus-one",
    "subjectId": "english",
    "skillTag": "evidence-quality",
    "difficulty": "higher-secondary",
    "prompt": "Which evidence most strongly supports the claim that a school garden can improve science learning?",
    "options": [
      "One student says gardening is fun.",
      "A poster says gardens are wonderful.",
      "A controlled study compares science assessments before and after a garden programme with results from a similar class.",
      "A social-media post has many likes."
    ],
    "correctIndex": 2,
    "explanation": "A comparison using defined learning measures provides stronger evidence than an isolated opinion or popularity.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-literacy-skill-3",
    "classId": "plus-one",
    "subjectId": "english",
    "skillTag": "punctuation",
    "difficulty": "higher-secondary",
    "prompt": "Choose the correctly punctuated sentence.",
    "options": [
      "The experiment failed, however the data remained useful.",
      "The experiment failed; however, the data remained useful.",
      "The experiment failed however; the data remained useful.",
      "The experiment; failed, however the data remained useful."
    ],
    "correctIndex": 1,
    "explanation": "A semicolon can link two independent clauses; “however” is followed by a comma in this construction.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-literacy-skill-4",
    "classId": "plus-one",
    "subjectId": "english",
    "skillTag": "vocabulary-in-context",
    "difficulty": "higher-secondary",
    "prompt": "“Wireless internet is ubiquitous in the city: it is available in nearly every café, library and station.” What does “ubiquitous” mean?",
    "options": [
      "Rare",
      "Widespread",
      "Temporary",
      "Expensive"
    ],
    "correctIndex": 1,
    "explanation": "The examples show that wireless internet is present in many places, so “ubiquitous” means widespread.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-one-literacy-skill-5",
    "classId": "plus-one",
    "subjectId": "english",
    "skillTag": "fact-and-opinion",
    "difficulty": "higher-secondary",
    "prompt": "Which statement is mainly an opinion?",
    "options": [
      "The book contains twelve chapters.",
      "The author published the novel in 2022.",
      "The novel is the most inspiring book of the decade.",
      "The final chapter begins on page 211."
    ],
    "correctIndex": 2,
    "explanation": "“Most inspiring” is a subjective judgement that cannot be established by the factual details alone.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-math-skill-1",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "derivatives",
    "difficulty": "higher-secondary",
    "prompt": "For f(x) = x³ − 6x² + 9x, what is f′(2)?",
    "options": [
      "−3",
      "0",
      "3",
      "9"
    ],
    "correctIndex": 0,
    "explanation": "Differentiate: f′(x) = 3x² − 12x + 9. At x = 2, f′(2) = 12 − 24 + 9 = −3.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-math-skill-2",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "indefinite-integrals",
    "difficulty": "higher-secondary",
    "prompt": "Evaluate ∫(2x + 3) dx.",
    "options": [
      "2x² + 3 + C",
      "x² + 3x + C",
      "x² + 3 + C",
      "2 + 3x + C"
    ],
    "correctIndex": 1,
    "explanation": "Integrate each term: ∫2x dx = x² and ∫3 dx = 3x. Include the constant C.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-math-skill-3",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "determinants",
    "difficulty": "higher-secondary",
    "prompt": "What is the determinant of the matrix [[2, 1], [5, 3]]?",
    "options": [
      "−1",
      "1",
      "6",
      "11"
    ],
    "correctIndex": 1,
    "explanation": "For a 2×2 matrix, the determinant is ad − bc = (2 × 3) − (1 × 5) = 1.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-math-skill-4",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "vectors-dot-product",
    "difficulty": "higher-secondary",
    "prompt": "For vectors a = (2, −1) and b = (3, 4), what is a · b?",
    "options": [
      "−2",
      "2",
      "6",
      "10"
    ],
    "correctIndex": 1,
    "explanation": "The dot product is 2 × 3 + (−1) × 4 = 6 − 4 = 2.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-math-skill-5",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "binomial-probability",
    "difficulty": "higher-secondary",
    "prompt": "A fair coin is tossed three times. What is the probability of exactly two heads?",
    "options": [
      "1/8",
      "1/4",
      "3/8",
      "1/2"
    ],
    "correctIndex": 2,
    "explanation": "There are ³C₂ = 3 ways to choose which two tosses are heads. Each outcome has probability 1/8, giving 3/8.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-literacy-skill-1",
    "classId": "plus-two",
    "subjectId": "english",
    "skillTag": "logical-fallacies",
    "difficulty": "higher-secondary",
    "prompt": "A student says, “One graduate found a job after taking this course, so the course guarantees employment for every student.” What is the main flaw?",
    "options": [
      "A hasty generalisation from limited evidence",
      "A mathematical proof",
      "A definition",
      "A comparison of equal samples"
    ],
    "correctIndex": 0,
    "explanation": "One person's outcome is not enough evidence to guarantee the same result for everyone.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-literacy-skill-2",
    "classId": "plus-two",
    "subjectId": "english",
    "skillTag": "academic-integrity",
    "difficulty": "higher-secondary",
    "prompt": "You want to include a finding from a research article in your essay. Which approach is best?",
    "options": [
      "Copy the paragraph and omit the source.",
      "Change two words and present it as your own.",
      "Paraphrase the finding accurately in your own words and cite the source.",
      "Cite a different article you have not read."
    ],
    "correctIndex": 2,
    "explanation": "Accurate paraphrasing with a citation gives credit and lets readers check the original source.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-literacy-skill-3",
    "classId": "plus-two",
    "subjectId": "english",
    "skillTag": "complex-sentence-punctuation",
    "difficulty": "higher-secondary",
    "prompt": "Choose the sentence with correct punctuation.",
    "options": [
      "Although the sample was small the findings, were consistent.",
      "Although the sample was small, the findings were consistent.",
      "Although, the sample was small the findings were consistent.",
      "Although the sample, was small, the findings were consistent."
    ],
    "correctIndex": 1,
    "explanation": "The comma follows the introductory dependent clause; the main clause then continues without an unnecessary comma.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-literacy-skill-4",
    "classId": "plus-two",
    "subjectId": "english",
    "skillTag": "critical-tone",
    "difficulty": "higher-secondary",
    "prompt": "An editorial states: “The plan promises equal access, yet it sets no deadlines and identifies no funding.” Which tone is most evident?",
    "options": [
      "Uncritical celebration",
      "Critical and questioning",
      "Playful nostalgia",
      "Indifference to evidence"
    ],
    "correctIndex": 1,
    "explanation": "The contrast between promises and missing implementation details signals a critical, questioning tone.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  },
  {
    "id": "plus-two-literacy-skill-5",
    "classId": "plus-two",
    "subjectId": "english",
    "skillTag": "summary-writing",
    "difficulty": "higher-secondary",
    "prompt": "What should a good academic summary do?",
    "options": [
      "Repeat every example and minor detail.",
      "Add the writer’s personal opinion.",
      "Preserve the source’s central claim and key evidence concisely.",
      "Replace the source’s argument with a different one."
    ],
    "correctIndex": 2,
    "explanation": "A good summary is concise, accurate and faithful to the original central claim and main supporting evidence.",
    "syllabusAligned": false,
    "verification": "original-practice-answer-checked"
  }
];
export const STARTER_LIBRARY_STATS = {
  classBands: 12,
  subjectAreas: 6,
  modules: STARTER_MODULES.length,
  originalPracticeQuestions: STARTER_QUESTIONS.length,
  syllabusVerifiedModules: 0,
  note: "Starter content is not chapter-specific or syllabus-verified."
} as const;
export function getStarterModules(classId:string, subjectId?:string) {
  return STARTER_MODULES.filter(item => item.classId === classId && (!subjectId || item.subjectId === subjectId));
}
export function getStarterQuestions(classId:string, subjectId?:string) {
  return STARTER_QUESTIONS.filter(item => item.classId === classId && (!subjectId || item.subjectId === subjectId));
}
