const translations = {
  en: {
    languageName: 'English',
    title: 'Toon JSON Formatter',
    subtitle: 'Toon-ready output in seconds',
    description:
      'Paste your JSON payload and instantly transform it into the Toon format using the official toon-format package.',
    inputTitle: 'Input JSON',
    inputDescription:
      'Provide a valid JSON document. We will attempt to parse and send it to the Toon formatter for you.',
    inputPlaceholder: '{\n  "name": "Toon",\n  "description": "A playful format for structured data"\n}',
    formatButton: 'Format to Toon',
    clearButton: 'Clear',
    copyButton: 'Copy output',
    copiedLabel: 'Copied!',
    outputTitle: 'Toon formatted result',
    outputDescription:
      'The converted structure will appear here. Copy the result directly into your Toon compatible workflow.',
    emptyOutput: 'Your formatted Toon content will appear here.',
    footer: 'All right reserved by Ali',
    emptyError: 'Please provide some JSON before formatting.',
    generalError: 'Unable to format the provided content. Please verify the JSON.'
  },
  bn: {
    languageName: 'বাংলা',
    title: 'টুন JSON ফরম্যাটার',
    subtitle: 'কয়েক সেকেন্ডে টুন আউটপুট',
    description:
    'আপনার JSON টেক্সট পেস্ট করুন এবং অফিসিয়াল toon-format প্যাকেজ ব্যবহার করে সঙ্গে সঙ্গে টুন ফরম্যাটে রূপান্তর করুন।',
    inputTitle: 'ইনপুট JSON',
    inputDescription:
    'একটি সঠিক JSON ডকুমেন্ট দিন। আমরা এটি পার্স করে টুন ফরম্যাটারে পাঠানোর চেষ্টা করব।',
    inputPlaceholder:
    '{\n  "name": "টুন",\n  "description": "স্ট্রাকচার্ড ডাটার জন্য মজার ফরম্যাট"\n}',
    formatButton: 'টুনে ফরম্যাট করুন',
    clearButton: 'মুছে ফেলুন',
    copyButton: 'আউটপুট কপি করুন',
    copiedLabel: 'কপি হয়েছে!',
    outputTitle: 'টুন ফরম্যাটেড ফলাফল',
    outputDescription:
    'রূপান্তরিত স্ট্রাকচার এখানে দেখানো হবে। সহজেই আপনার টুন ওয়ার্কফ্লোতে কপি করুন।',
    emptyOutput: 'আপনার টুন আউটপুট এখানে দেখা যাবে।',
    footer: 'All right reserved by Ali',
    emptyError: 'ফরম্যাট করার আগে অনুগ্রহ করে কিছু JSON প্রদান করুন।',
    generalError: 'প্রদত্ত কন্টেন্ট ফরম্যাট করা সম্ভব হয়নি। JSON পরীক্ষা করুন।'
  }
};

export default translations;
