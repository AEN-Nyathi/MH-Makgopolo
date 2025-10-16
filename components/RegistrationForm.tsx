'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    idNumber: z.string().length(13, {
        message: "South African ID number must be 13 digits.",
    }).regex(/^[0-9]{13}$/, "Please enter a valid ID number."),
    course: z.string().min(1, {
        message: "Please specify a course.",
    }),
})

export default function RegistrationForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            idNumber: "",
            course: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "Registration Submitted!",
                    description: "We will get back to you shortly.",
                })
                setIsSubmitted(true);
                form.reset();
            } else {
                throw new Error(result.message || "An unknown error occurred");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast({
                title: "Submission Failed",
                description: "Could not submit your registration. Please try again.",
                variant: "destructive",
            })
        }
    }

    if (isSubmitted) {
        return (
            <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Submission Successful!</AlertTitle>
                <AlertDescription>
                    Thank you for your interest. We have received your application and will contact you within 24 hours to finalize your registration.
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="082 123 4567" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="idNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>South African ID Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your 13-digit ID number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course of Interest</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Grade E Security Training" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
            </form>
        </Form>
    )
}