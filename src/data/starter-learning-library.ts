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
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 15 + 13?",
    "options": [
      "26",
      "28",
      "20",
      "23"
    ],
    "correctIndex": 1,
    "explanation": "15 + 13 = 28.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-8-math-skill-2",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 28 − 16?",
    "options": [
      "12",
      "20",
      "36",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 28 − 16 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-8-math-skill-3",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 8 groups with 3 items in each group. How many items are there?",
    "options": [
      "11",
      "24",
      "16",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 8 × 3 = 24.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-8-math-skill-4",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “8 more than 10”?",
    "options": [
      "-2",
      "80",
      "18",
      "1.25"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 8.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-8-math-skill-5",
    "classId": "class-8",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 40 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "40",
      "45",
      "50",
      "18"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 40 + 10 = 50 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-8-literacy-skill-1",
    "classId": "class-8",
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
    "id": "class-8-literacy-skill-2",
    "classId": "class-8",
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
    "id": "class-8-literacy-skill-3",
    "classId": "class-8",
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
    "id": "class-8-literacy-skill-4",
    "classId": "class-8",
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
    "id": "class-8-literacy-skill-5",
    "classId": "class-8",
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
    "id": "class-9-math-skill-1",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 16 + 14?",
    "options": [
      "28",
      "30",
      "21",
      "25"
    ],
    "correctIndex": 1,
    "explanation": "16 + 14 = 30.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-9-math-skill-2",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 29 − 17?",
    "options": [
      "12",
      "21",
      "37",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 29 − 17 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-9-math-skill-3",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 9 groups with 3 items in each group. How many items are there?",
    "options": [
      "12",
      "27",
      "18",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 9 × 3 = 27.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-9-math-skill-4",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “9 more than 10”?",
    "options": [
      "-1",
      "90",
      "19",
      "1.1111111111111112"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 9.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-9-math-skill-5",
    "classId": "class-9",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 45 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "45",
      "50",
      "55",
      "19"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 45 + 10 = 55 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-9-literacy-skill-1",
    "classId": "class-9",
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
    "id": "class-9-literacy-skill-2",
    "classId": "class-9",
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
    "id": "class-9-literacy-skill-3",
    "classId": "class-9",
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
    "id": "class-9-literacy-skill-4",
    "classId": "class-9",
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
    "id": "class-9-literacy-skill-5",
    "classId": "class-9",
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
    "id": "class-10-math-skill-1",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 17 + 15?",
    "options": [
      "30",
      "32",
      "22",
      "27"
    ],
    "correctIndex": 1,
    "explanation": "17 + 15 = 32.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-10-math-skill-2",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 30 − 18?",
    "options": [
      "12",
      "22",
      "38",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 30 − 18 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-10-math-skill-3",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 10 groups with 3 items in each group. How many items are there?",
    "options": [
      "13",
      "30",
      "20",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 10 × 3 = 30.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-10-math-skill-4",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “10 more than 10”?",
    "options": [
      "0",
      "100",
      "20",
      "1"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 10.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-10-math-skill-5",
    "classId": "class-10",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 50 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "50",
      "55",
      "60",
      "20"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 50 + 10 = 60 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "class-10-literacy-skill-1",
    "classId": "class-10",
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
    "id": "class-10-literacy-skill-2",
    "classId": "class-10",
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
    "id": "class-10-literacy-skill-3",
    "classId": "class-10",
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
    "id": "class-10-literacy-skill-4",
    "classId": "class-10",
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
    "id": "class-10-literacy-skill-5",
    "classId": "class-10",
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
    "id": "plus-one-math-skill-1",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 18 + 16?",
    "options": [
      "32",
      "34",
      "23",
      "29"
    ],
    "correctIndex": 1,
    "explanation": "18 + 16 = 34.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-one-math-skill-2",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 31 − 19?",
    "options": [
      "12",
      "23",
      "39",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 31 − 19 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-one-math-skill-3",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 11 groups with 3 items in each group. How many items are there?",
    "options": [
      "14",
      "33",
      "22",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 11 × 3 = 33.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-one-math-skill-4",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “11 more than 10”?",
    "options": [
      "1",
      "110",
      "21",
      "0.9090909090909091"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 11.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-one-math-skill-5",
    "classId": "plus-one",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 55 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "55",
      "60",
      "65",
      "21"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 55 + 10 = 65 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-one-literacy-skill-1",
    "classId": "plus-one",
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
    "id": "plus-one-literacy-skill-2",
    "classId": "plus-one",
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
    "id": "plus-one-literacy-skill-3",
    "classId": "plus-one",
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
    "id": "plus-one-literacy-skill-4",
    "classId": "plus-one",
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
    "id": "plus-one-literacy-skill-5",
    "classId": "plus-one",
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
    "id": "plus-two-math-skill-1",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "addition",
    "difficulty": "foundation",
    "prompt": "What is 19 + 17?",
    "options": [
      "34",
      "36",
      "24",
      "31"
    ],
    "correctIndex": 1,
    "explanation": "19 + 17 = 36.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-two-math-skill-2",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "subtraction",
    "difficulty": "foundation",
    "prompt": "What is 32 − 20?",
    "options": [
      "12",
      "24",
      "40",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "The difference is 32 − 20 = 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-two-math-skill-3",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "multiplication",
    "difficulty": "developing",
    "prompt": "A set has 12 groups with 3 items in each group. How many items are there?",
    "options": [
      "15",
      "36",
      "24",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "Equal groups are multiplied: 12 × 3 = 36.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-two-math-skill-4",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "word-problems",
    "difficulty": "developing",
    "prompt": "Which expression means “12 more than 10”?",
    "options": [
      "2",
      "120",
      "22",
      "0.8333333333333334"
    ],
    "correctIndex": 2,
    "explanation": "“More than” means addition: 10 + 12.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-two-math-skill-5",
    "classId": "plus-two",
    "subjectId": "mathematics",
    "skillTag": "time-management-math",
    "difficulty": "application",
    "prompt": "A learner studies for 60 minutes and then another 10 minutes. How many minutes in total?",
    "options": [
      "60",
      "65",
      "70",
      "22"
    ],
    "correctIndex": 2,
    "explanation": "Add both study periods: 60 + 10 = 70 minutes.",
    "syllabusAligned": false,
    "verification": "answer-key-auto-checked"
  },
  {
    "id": "plus-two-literacy-skill-1",
    "classId": "plus-two",
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
    "id": "plus-two-literacy-skill-2",
    "classId": "plus-two",
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
    "id": "plus-two-literacy-skill-3",
    "classId": "plus-two",
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
    "id": "plus-two-literacy-skill-4",
    "classId": "plus-two",
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
    "id": "plus-two-literacy-skill-5",
    "classId": "plus-two",
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
