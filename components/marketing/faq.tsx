const faqs = [
  {
    id: 1,
    question: "How does the AI-powered resume builder work?",
    answer:
      "Our AI analyzes your experience and skills to generate professional, impactful content. It suggests powerful action verbs, achievement-focused bullet points, and helps quantify your accomplishments. The AI learns from successful resumes in your industry to ensure your content matches what employers are looking for.",
  },
  {
    id: 2,
    question: "What makes our templates ATS-friendly?",
    answer:
      "Our templates are specifically designed to pass Applicant Tracking Systems (ATS). They use clean formatting, standard sections, and proper heading hierarchy. We avoid complex tables, graphics, or unusual fonts that can confuse ATS systems. Plus, our AI helps you incorporate relevant keywords from job descriptions to improve your match rate.",
  },
  {
    id: 3,
    question: "How many versions of my resume can I create?",
    answer:
      "The number of resumes depends on your plan. Basic users can create one professional resume, Pro users get three tailored versions, and Career plan users enjoy unlimited resumes. We recommend tailoring your resume for each job application to maximize your chances of success.",
  },
  {
    id: 4,
    question: "Can I export my resume in different formats?",
    answer:
      "Yes! You can export your resume as PDF (perfect for applications), DOCX (for easy editing), and plain text (for online applications). All our export formats maintain ATS compatibility while preserving your resume's professional formatting.",
  },
  {
    id: 5,
    question: "What kind of support do you offer?",
    answer:
      "We provide different levels of support based on your plan. All users get access to our comprehensive guides and AI assistance. Pro users receive priority email support, while Career plan users get 24/7 priority support and personalized 1-on-1 resume reviews from our career experts.",
  },
  {
    id: 6,
    question: "How do I know if my resume is effective?",
    answer:
      "Our AI provides real-time feedback on your resume's content, formatting, and ATS compatibility. It analyzes your resume against industry standards and successful examples in your field. Career plan users also get professional resume reviews with personalized improvement suggestions.",
  },
  {
    id: 7,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. We offer a 14-day money-back guarantee to ensure you're completely satisfied. Your resumes and data remain accessible even after cancellation, and you can export them in various formats.",
  },
  {
    id: 8,
    question: "How often should I update my resume?",
    answer:
      "We recommend updating your resume every 3-6 months to include new skills and achievements, even if you're not actively job hunting. For active job seekers, you should tailor your resume for each application to match specific job requirements. Our AI makes this process quick and effective.",
  },
];

export default function FAQ() {
  return (
    <div className="px-6 pb-8 mx-auto max-w-2xl divide-y divide-gray-900/10 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
      <h2 className="text-2xl font-bold tracking-tight leading-10 text-gray-900">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
              {faq.question}
            </dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
