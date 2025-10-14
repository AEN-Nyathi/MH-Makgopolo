'use client'

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}
