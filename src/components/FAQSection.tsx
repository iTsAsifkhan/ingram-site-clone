import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is self-publishing?",
    answer: "Self-publishing is the process by which independent authors publish their books without traditional publishing houses. It allows authors to retain full creative control and ownership over their work. BookBaby is a full-service self-publishing company ready to be your partner throughout the journey.",
  },
  {
    question: "What services does a self-publishing company provide?",
    answer: "A self-publishing company typically offers editing, cover design, formatting, eBook conversion, printing, distribution, and marketing assistance. We provide every resource you need including book cover design, editing, eBook creation, audiobook creation, and marketing services, all in one place!",
  },
  {
    question: "How much does self-publishing usually cost?",
    answer: "The cost can vary from hundreds to thousands of dollars depending on book formatting, design, and publishing platform. We print novels for as low as $4.95 a copy, hardcover children's books for as low as $8.75 each, and cookbooks for as low as $11.75 per book.",
  },
  {
    question: "What is Print On Demand (POD) and how does it work?",
    answer: "Print On Demand is a book printing method where books are printed and shipped only when an order is placed. It eliminates the need for large upfront printing costs and allows for flexible inventory management. Our POD services are included in every self-publishing package!",
  },
  {
    question: "Can I sell my self-published book through major retailers?",
    answer: "Yes, most self-publishing companies offer distribution to major online retailers like Amazon, Barnes & Noble, and more. At BookBaby, we provide access to the world's largest distribution network, allowing our authors to expand their readership and have a worldwide impact.",
  },
  {
    question: "Do I retain the rights to my self-published book?",
    answer: "Yes, with self-publishing, you retain all rights to your book, and you can make decisions about its distribution, pricing, and future adaptations. You maintain 100% ownership of your work.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - FAQ */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <span className="font-semibold text-lg" style={{ color: '#C65300' }}>Frequently Asked Questions</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4" style={{ color: '#212733' }}>
                Common Questions About Self-Publishing
              </h2>
              <p className="text-lg" style={{ color: '#212733' }}>
                Find answers to common questions about our publishing services
              </p>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-xl px-6 border shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '#F2F0E5', borderColor: '#E3E1D4' }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold py-6" style={{ color: '#212733' }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base pb-6 leading-relaxed" style={{ color: '#212733' }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right - Contact Form */}
          <div>
            <div className="rounded-2xl p-8 md:p-12 sticky top-20" style={{ backgroundColor: '#F2F0E5' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#212733' }}>
                Tell Us About Your Project
              </h3>
              <p className="mb-6" style={{ color: '#212733' }}>
                We have writers, editors, designers, and publishing pros on board who can turn your manuscript into a book you'll be proud of.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Type your Name" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E3E1D4', color: '#212733' }}
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Type your Email Address" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E3E1D4', color: '#212733' }}
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Type your Phone Number" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E3E1D4', color: '#212733' }}
                    required
                  />
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E3E1D4', color: '#212733' }}
                    required
                  >
                    <option value="">Do you have a manuscript ready?</option>
                    <option value="Yes, I'm ready to publish today">Yes, I'm ready to publish today</option>
                    <option value="Yes, I'll be ready to publish in 1 to 3 months">Yes, I'll be ready to publish in 1 to 3 months</option>
                    <option value="Yes, I'll be ready to publish in 3 to 6 months">Yes, I'll be ready to publish in 3 to 6 months</option>
                    <option value="Yes, I'll be ready to publish in 6 to 12 months">Yes, I'll be ready to publish in 6 to 12 months</option>
                    <option value="No, I do not have a book or manuscript ready">No, I do not have a book or manuscript ready</option>
                  </select>
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E3E1D4', color: '#212733' }}
                    required
                  >
                    <option value="">Have you published before?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E3E1D4', color: '#212733' }}
                    required
                  >
                    <option value="">What type of book do you plan on publishing?</option>
                    <option value="Business">Business</option>
                    <option value="Biography">Biography</option>
                    <option value="Inspirational">Inspirational</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="How-To">How-To</option>
                    <option value="Autobiography/Memoir">Autobiography/Memoir</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="Children">Children</option>
                    <option value="Spiritual/Religious">Spiritual/Religious</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Art/Photography">Art/Photography</option>
                    <option value="Cookbook">Cookbook</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us what you're looking for..." 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E3E1D4', color: '#212733' }}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-gold w-full">
                  Submit Your Query
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: '#EBF5F5' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#212733' }}>
            Ready to Get Started?
          </h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: '#212733' }}>
            Our team is here to help. When your manuscript is ready, reach out to a friendly, helpful Publishing Specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gold">
              Book some time with us
            </button>
            <a href="tel:18779616878" className="px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300" style={{ backgroundColor: '#FFFFFF', color: '#212733', borderColor: '#C65300' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C65300'; e.currentTarget.style.color = '#FFFFFF'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#212733'; }}>
              Call 1-877-961-6878
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
