"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schemas/contact";
import { z } from "zod";
import { ContactForm } from "@/components/forms/ContactForm";
import { toast } from "sonner";

// TODO: Add a form to actually send an email to contact@recipefinder.com

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Message sent successfully");
    form.reset();
    console.log(values);
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <ContactForm onSubmit={onSubmit} form={form} />
      </div>
    </div>
  );
}
