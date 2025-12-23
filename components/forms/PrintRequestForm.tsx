"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { printRequestSchema, PrintRequestData } from "@/lib/validations";
import Button from "../ui/Button";

interface PrintRequestFormProps {
  bookTitle: string;
}

export default function PrintRequestForm({ bookTitle }: PrintRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PrintRequestData>({
    resolver: zodResolver(printRequestSchema),
    defaultValues: {
      bookTitle,
      quantity: 1,
    },
  });

  const onSubmit = async (data: PrintRequestData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/print-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting print request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Book Title (Read-only) */}
        <div className="md:col-span-2">
          <label
            htmlFor="bookTitle"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Book Title
          </label>
          <input
            id="bookTitle"
            type="text"
            {...register("bookTitle")}
            readOnly={Boolean(bookTitle)}
            aria-readonly={bookTitle ? "true" : "false"}
            placeholder={
              bookTitle ? undefined : "Enter book title you want printed"
            }
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Quantity *
          </label>
          <input
            type="number"
            {...register("quantity", { valueAsNumber: true })}
            min="1"
            max="100"
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.quantity && (
            <p className="text-red-600 text-sm mt-1">
              {errors.quantity.message}
            </p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Street Address *
          </label>
          <textarea
            {...register("address")}
            rows={3}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.address && (
            <p className="text-red-600 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            City *
          </label>
          <input
            type="text"
            {...register("city")}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.city && (
            <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            State/Province *
          </label>
          <input
            type="text"
            {...register("state")}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.state && (
            <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>
          )}
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Postal Code *
          </label>
          <input
            type="text"
            {...register("postalCode")}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.postalCode && (
            <p className="text-red-600 text-sm mt-1">
              {errors.postalCode.message}
            </p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Country *
          </label>
          <input
            type="text"
            {...register("country")}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          {errors.country && (
            <p className="text-red-600 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full"
        >
          Submit Print Request
        </Button>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you! Your print request has been submitted successfully. We will
          contact you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          Sorry, there was an error submitting your request. Please try again.
        </div>
      )}
    </form>
  );
}
