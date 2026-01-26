"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  PRODUCT_TYPES,
  ISSUE_TYPES,
  WARRANTY_STATUS,
  CONTACT_METHODS,
  PRODUCT_MODELS,
  ProductType,
  ProductOption,
  ModelOption,
} from "@/app/data/data";

interface FormData {
  fullName?: string;
  email?: string;
  phone?: string;
  contactMethod?: string;
  productType?: ProductType;
  model?: string;
  serialNumber?: string;
  warrantyStatus?: string;
  issueType?: string;
  previousRepairs?: string;
  additionalDescription?: string;
  images?: string[];
}

const inputBase =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-black transition";

const labelBase = "text-sm font-medium text-dark-200 mb-4";

export default function DiagnosisForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<FormData>({});
  const [uploadedImages, setUploadedImages] = React.useState<File[]>([]);
  const totalSteps = 5;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleNext = () => setCurrentStep((s) => Math.min(s + 1, totalSteps));
  const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const progress = (currentStep / totalSteps) * 100;
  const selectedProductType = formData.productType as ProductType | undefined;

  return (
    <div className="w-full max-w-3xl mx-auto py-10 space-y-4">
      {/* Progress */}
      <div className="mb-10 space-y-4">
        <h1 className="text-2xl font-semibold">Device Diagnosis Request</h1>
        <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-neutral-500">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* STEP 1 */}
      {currentStep === 1 && (
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className={labelBase}>Full Name</label>
              <input
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleChange}
                className={inputBase}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className={labelBase}>Email</label>
              <input
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleChange}
                className={inputBase}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className={labelBase}>Phone</label>
            <PhoneInput
              international
              defaultCountry="KE"
              value={formData.phone}
              onChange={(v) => setFormData((p) => ({ ...p, phone: v || "" }))}
              className="apple-phone-input"
            />
          </div>

          <div className="">
            <label className={labelBase}>Preferred Contact Method</label>
            <select
              name="contactMethod"
              value={formData.contactMethod || ""}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="">Select…</option>
              {CONTACT_METHODS.map((m) => (
                <option key={m.key} value={m.key}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
        </section>
      )}

      {/* STEP 2 */}
      {currentStep === 2 && (
        <section className="space-y-6">
          <div>
            <label className={labelBase}>Select your Apple product</label>
            <select
              name="productType"
              value={formData.productType || ""}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="">Select…</option>
              {PRODUCT_TYPES.map((p) => (
                <option key={p.key} value={p.key}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          {selectedProductType && (
            <div>
              <label className={labelBase}>Model</label>
              <select
                name="model"
                value={formData.model || ""}
                onChange={handleChange}
                className={inputBase}
              >
                <option value="">Select…</option>
                {PRODUCT_MODELS[selectedProductType]?.map((m) => (
                  <option key={m.key} value={m.key}>
                    {m.label} {m.year ? `(${m.year})` : ""}
                  </option>
                ))}
              </select>
            </div>
          )}
        </section>
      )}

      {/* STEP 3 */}
      {currentStep === 3 && (
        <section className="space-y-6">
          <div>
            <label className={labelBase}>Primary Issue</label>
            <select
              name="issueType"
              value={formData.issueType || ""}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="">Select…</option>
              {ISSUE_TYPES.map((i) => (
                <option key={i.key} value={i.key}>
                  {i.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelBase}>Additional Details</label>
            <textarea
              name="additionalDescription"
              value={formData.additionalDescription || ""}
              onChange={handleChange}
              rows={4}
              className={inputBase}
            />
          </div>
        </section>
      )}

      {/* STEP 4 */}
      {currentStep === 4 && (
        <section className="space-y-6">
          <div>
            <label className={labelBase}>Serial Number</label>
            <input
              name="serialNumber"
              value={formData.serialNumber || ""}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          <div>
            <label className={labelBase}>Warranty Status</label>
            <select
              name="warrantyStatus"
              value={formData.warrantyStatus || ""}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="">Select…</option>
              {WARRANTY_STATUS.map((w) => (
                <option key={w.key} value={w.key}>
                  {w.label}
                </option>
              ))}
            </select>
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="flex gap-4 pt-10">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="px-6 py-2 rounded-full hover:bg-gray-50 border border-neutral-300"
          >
            Back
          </button>
        )}

        <button
          onClick={handleNext}
          className="flex-1 px-6 py-2 rounded-full bg-black hover:bg-primary text-white"
        >
          {currentStep < totalSteps ? "Continue" : "Submit"}
        </button>
      </div>
    </div>
  );
}
