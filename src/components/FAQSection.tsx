import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the publishing process take?",
    answer: "The publishing process duration varies and depends on factors like editing, formatting, and book cover design, typically taking 2 weeks to a couple of months. It depends on what phase you are in your Book Publishing journey with us.",
  },
  {
    question: "Do I retain rights to my e-book?",
    answer: "Yes, you retain 100% ownership of your book and intellectual property rights.",
  },
  {
    question: "When should I start the publishing process?",
    answer: "Publishing is a time-consuming process and requires major preliminary work before we can begin the actual publishing. It is best to work with a publisher when you are in the writing phase.",
  },
  {
    question: "Do I share my Royalties and Ownership with the publisher or anyone else?",
    answer: "No, you own all the royalties and 100% ownership of the book. However, publishing platforms like Amazon keep a certain percentage of your sales.",
  },
  {
    question: "What Is an ISBN, and whether I need one or not?",
    answer: "An ISBN is like a unique fingerprint or identity mark of your book. It is the International Standard Book Number specific to your book and its formats. It is an authentic way of searching and identifying books. This is especially helpful when two books (or more) exist with the same name.",
  },
  {
    question: "How do I submit my manuscript?",
    answer: "You can submit either a physical or a digital copy of your manuscript. We can work with multiple formats depending on the book requirements.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-lg">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our publishing services
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions */}
          <div className="mt-12 text-center bg-gradient-to-r from-secondary to-navy rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-lg mx-auto">
              Our publishing experts are here to help. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold">
                Chat With An Expert
              </button>
              <a href="tel:833-366-6770" className="btn-outline-white">
                Call 833-366-6770
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
