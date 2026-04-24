import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useContactFormDialog } from "./ContactFormDialogContext";

const Contact = () => {
  // get Dialog state from context
  const { isOpen, close } = useContactFormDialog();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const formspreeUrl = 'https://formspree.io/f/mwpbbbja';
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        close();
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Formspree error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-estate-50">
      <Dialog open={isOpen} onOpenChange={open => { if (!open) close(); }}>
        {/* Hidden trigger for keyboard accessibility */}
        <DialogTrigger asChild>
          <span className="sr-only">Open Contact Form</span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send us a Message</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-estate-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-estate-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-estate-700 mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-estate-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your requirements..."
                required
              />
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-estate-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-estate-600 max-w-2xl mx-auto">
            Ready to transform your technical initiatives? Contact us today for a consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-estate-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Duplicate form, but in main card for desktop experience */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name-desktop" className="block text-sm font-medium text-estate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name-desktop"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email-desktop" className="block text-sm font-medium text-estate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email-desktop"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company-desktop" className="block text-sm font-medium text-estate-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company-desktop"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="message-desktop" className="block text-sm font-medium text-estate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message-desktop"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                {/* Phone Card */}
                {/* First Phone Number */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex items-center space-x-4 mb-4 cursor-pointer">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-estate-800">Phone</h3>
                        <p className="text-estate-600 underline hover:text-blue-700 transition-colors">
                          +91 99587 78135
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Call TECHNOVENT</DialogTitle>
                      <DialogDescription>
                        Would you like to call us at <strong>+91 99587 78135</strong>?<br />
                        <a
                          href="tel:+919958778135"
                          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors"
                        >
                          Call Now
                        </a>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                {/* Second Phone Number */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex items-center space-x-4 mb-4 cursor-pointer">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-estate-800 sr-only">Phone</h3>
                        <p className="text-estate-600 underline hover:text-blue-700 transition-colors">
                          +91 88603 37425
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Call TECHNOVENT</DialogTitle>
                      <DialogDescription>
                        Would you like to call us at <strong>+91 88603 37425</strong>?<br />
                        <a
                          href="tel:+918860337425"
                          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors"
                        >
                          Call Now
                        </a>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-estate-800">Email</h3>
                    <a
                      href="mailto:Info.technovent0786@gmail.com"
                      className="text-estate-600 underline hover:text-blue-700 transition-colors"
                    >
                      Info.technovent0786@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
