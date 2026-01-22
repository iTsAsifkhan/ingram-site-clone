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

  const [loading, setLoading] = useState(false); // optional: show loading state
  const [message, setMessage] = useState("");    // optional: success/error message

  // Update form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form to backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://plum-pigeon-480623.hostingersite.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `
            Phone: ${formData.phone}
            Manuscript Ready: ${formData.manuscriptReady}
            Published Before: ${formData.publishedBefore}
            Book Type: ${formData.bookType}
          `,
        }),
      });

      if (response.ok) {
        setMessage("Your query has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          manuscriptReady: "",
          publishedBefore: "",
          bookType: "",
        });
      } else {
        setMessage("Failed to send your query. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while sending your query.");
    }

    setLoading(false);
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
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          className="form-input"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className="form-input"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          className="form-input"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Manuscript Ready */}
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

        {/* Published Before */}
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

        {/* Book Type */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn-gold flex items-center justify-center gap-2 py-4"
          disabled={loading}
        >
          <Send className="w-5 h-5" />
          {loading ? "Sending..." : "Submit Your Query"}
        </button>
      </form>

      {message && (
        <p className="text-center mt-4 text-sm text-foreground">{message}</p>
      )}

      <p className="text-xs text-muted-foreground text-center mt-4">
        By submitting, you agree to our privacy policy and terms of service.
      </p>
    </div>
  );
};

export default InquiryForm;
