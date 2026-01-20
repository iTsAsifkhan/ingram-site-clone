import { useState } from "react";
import { Send } from "lucide-react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    manuscriptReady: "",
    publishedBefore: "",
    bookType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        Tell Us About Your Project
      </h3>
      <p className="text-muted-foreground mb-6">
        Get a free consultation with our publishing experts
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <select
            name="manuscriptReady"
            required
            className="form-input"
            value={formData.manuscriptReady}
            onChange={handleChange}
          >
            <option value="">Do you have a manuscript ready?</option>
            <option value="ready">Yes, I'm ready to publish today</option>
            <option value="1-3months">Yes, I'll be ready in 1 to 3 months</option>
            <option value="3-6months">Yes, I'll be ready in 3 to 6 months</option>
            <option value="6-12months">Yes, I'll be ready in 6 to 12 months</option>
            <option value="no">No, I do not have a manuscript ready</option>
          </select>
        </div>
        
        <div>
          <select
            name="publishedBefore"
            required
            className="form-input"
            value={formData.publishedBefore}
            onChange={handleChange}
          >
            <option value="">Have you published before?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
        <div>
          <select
            name="bookType"
            required
            className="form-input"
            value={formData.bookType}
            onChange={handleChange}
          >
            <option value="">What type of book do you plan on publishing?</option>
            <option value="business">Business</option>
            <option value="biography">Biography</option>
            <option value="inspirational">Inspirational</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="how-to">How-To</option>
            <option value="autobiography">Autobiography/Memoir</option>
            <option value="self-help">Self-Help</option>
            <option value="children">Children</option>
            <option value="spiritual">Spiritual/Religious</option>
            <option value="fiction">Fiction</option>
            <option value="art">Art/Photography</option>
            <option value="cookbook">Cookbook</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="w-full btn-gold flex items-center justify-center gap-2 py-4"
        >
          <Send className="w-5 h-5" />
          Submit Your Query
        </button>
      </form>
      
      <p className="text-xs text-muted-foreground text-center mt-4">
        By submitting, you agree to our privacy policy and terms of service.
      </p>
    </div>
  );
};

export default InquiryForm;
