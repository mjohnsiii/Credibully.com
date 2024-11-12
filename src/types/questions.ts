import { Question } from '../hooks/useQuiz';

export const questions: Question[] = [
  {
    id: 'creditGoals',
    text: 'What are your primary credit goals?',
    type: 'checkbox',
    options: [
      'Repair personal credit',
      'Increase my credit score quickly',
      'Build or establish business credit',
      'Remove negative marks (e.g., collections, inquiries)',
      'Other'
    ],
    required: true
  },
  {
    id: 'financialGoals',
    text: 'Do you have any major upcoming financial goals?',
    type: 'checkbox',
    options: [
      'Buying a car',
      'Buying a house or property',
      'Starting or funding a business',
      'Other',
      'Not at the moment, just improving my credit'
    ]
  },
  {
    id: 'creditScore',
    text: 'What\'s your current credit score range?',
    type: 'radio',
    options: ['300-500', '500-600', '600-700', '700+']
  },
  {
    id: 'creditChallenges',
    text: 'Are you currently facing any of these credit challenges?',
    type: 'checkbox',
    options: [
      'Collections accounts',
      'Hard inquiries',
      'High credit card balances',
      'Limited or no credit history',
      'Other'
    ]
  },
  {
    id: 'timeframe',
    text: 'How soon are you hoping to see improvements in your credit score?',
    type: 'radio',
    options: [
      'Within 30 days',
      'Within 3 months',
      '6 months or more',
      'I\'m not sure, I just want to improve my credit as soon as possible'
    ]
  },
  {
    id: 'motivation',
    text: 'How motivated are you to improve your credit right now?',
    type: 'radio',
    options: [
      'Extremely motivated — I\'m ready to start today',
      'Somewhat motivated — I\'d like guidance on where to begin',
      'I\'m still exploring my options'
    ]
  },
  {
    id: 'planPreference',
    text: 'Would you be interested in a step-by-step credit repair plan tailored to your situation?',
    type: 'radio',
    options: [
      'Yes, I want a customized plan',
      'I prefer a general guide or ebook',
      'I\'d like to learn more about my options first'
    ]
  },
  {
    id: 'coachingInterest',
    text: 'Are you open to 1:1 coaching or a personalized credit consultation to reach your credit goals faster?',
    type: 'radio',
    options: [
      'Yes, I\'d like personalized support',
      'Maybe, depending on the options available',
      'No, I\'m interested in self-guided resources'
    ]
  }
];