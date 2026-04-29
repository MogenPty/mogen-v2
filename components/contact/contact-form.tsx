"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Handle form submission logic here

    // Get the form data and post it to https://formsubmit.co/7829abfb5658f9588ec16362d99a9cfc
    const formData = new FormData(e.target);
    fetch("https://formsubmit.co/7829abfb5658f9588ec16362d99a9cfc", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 5000);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            budget: "",
            message: "",
          });
        } else {
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white p-8 neo-brutalist-border neo-brutalist-shadow transform rotate-1">
      <h2 className="text-3xl font-black mb-6">PROJECT DETAILS</h2>

      {isSubmitted ? (
        <div className="bg-lime-400 text-black p-8 neo-brutalist-border neo-brutalist-shadow text-center">
          <h3 className="text-2xl font-black mb-4">MESSAGE SENT! 🚀</h3>
          <p className="font-bold">
            We&apos;ll get back to you within 24 hours with your free quote.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-black mb-2">
                YOUR NAME *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="neo-brutalist-border font-bold"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-black mb-2">
                EMAIL *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="neo-brutalist-border font-bold"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block font-black mb-2">
                PHONE
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="neo-brutalist-border font-bold"
                placeholder="+27 123 456 789"
              />
            </div>
            <div>
              <label htmlFor="serviceName" className="block font-black mb-2">
                SERVICE NEEDED
              </label>
              <Select
                name="serviceName"
                value={formData.service}
                onValueChange={(value) => handleChange("service", value)}
              >
                <SelectTrigger className="neo-brutalist-borde font-bold">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">WEBSITE DEVELOPMENT</SelectItem>
                  <SelectItem value="branding">BRAND IDENTITY</SelectItem>
                  <SelectItem value="marketing">DIGITAL MARKETING</SelectItem>
                  <SelectItem value="all">ALL OF THE ABOVE</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="service" value={formData.service} />
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block font-black mb-2">
              BUDGET RANGE
            </label>
            <Select
              name="budget"
              value={formData.budget}
              onValueChange={(value) => handleChange("budget", value)}
            >
              <SelectTrigger className="neo-brutalist-border font-bold">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5000-10000">R5,000 - R10,000</SelectItem>
                <SelectItem value="10000-20000">R10,000 - R20,000</SelectItem>
                <SelectItem value="20000-50000">R20,000 - R50,000</SelectItem>
                <SelectItem value="50000+">R50,000+</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="budget" value={formData.budget} />
          </div>

          <div>
            <label htmlFor="message" className="block font-black mb-2">
              PROJECT DETAILS *
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              className="neo-brutalist-border font-bold h-32"
              placeholder="Tell us about your project, goals, and any specific requirements..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-500 text-white font-black text-lg py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-purple-600 transform hover:scale-105 transition-all duration-200"
          >
            SEND MESSAGE & GET QUOTE
          </Button>
        </form>
      )}
    </div>
  );
}
