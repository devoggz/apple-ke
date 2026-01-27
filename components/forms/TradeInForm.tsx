"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { addToast } from "@heroui/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { PRODUCT_MODELS, CONTACT_METHODS, ModelOption } from "@/app/data/data";

const OWNERSHIP_PROOFS = [
  { key: "receipt", label: "Original Purchase Receipt" },
  { key: "invoice", label: "Invoice / Bill of Sale" },
  { key: "box", label: "Original Box with Serial / IMEI" },
  { key: "other", label: "Other (please specify)" },
];

interface TradeInFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  contactMethod?: string;
  model?: string;
  storage?: string;
  condition?: string;
  serialNumber?: string;
  imei?: string;
  proofOfOwnership?: string;
  ownershipDetails?: string;
  images?: string[];
}

const inputBase =
  "w-full rounded-xl border border-neutral-300  px-3 py-3 mt-4 text-sm text-dark-100 focus:outline-none focus:border-dark-100 transition";
const newBase =
  "w-full appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-3 px-4 pr-10 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-gray-400 dark:hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300 dark:disabled:hover:border-gray-700";
const labelBase = "text-sm font-medium text-dark-100 mb-3";

export default function TradeInForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<TradeInFormData>({});
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

  const handlePhoneChange = (value?: string) =>
    setFormData((p) => ({ ...p, phone: value || "" }));

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return !!(
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.contactMethod
        );
      case 2:
        return !!formData.model;
      case 3:
        return !!formData.serialNumber && !!formData.imei;
      case 4:
        return !!formData.proofOfOwnership;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      addToast({
        title: "Required Fields",
        description: "Please complete all required fields.",
        color: "warning",
      });
      return;
    }
    setCurrentStep((s) => Math.min(s + 1, totalSteps));
  };

  const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    console.log("Trade-in submission:", formData);
    addToast({
      title: "Trade-in Submitted",
      description: "We'll review your device and contact you shortly.",
      color: "success",
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (uploadedImages.length + files.length > 8) {
      addToast({
        title: "Too Many Images",
        description: "Maximum 8 images allowed.",
        color: "warning",
      });
      return;
    }

    setUploadedImages((p) => [...p, ...files]);

    const base64 = await Promise.all(
      files.map(
        (file) =>
          new Promise<string>((res) => {
            const r = new FileReader();
            r.onload = () => res(r.result as string);
            r.readAsDataURL(file);
          }),
      ),
    );

    setFormData((p) => ({
      ...p,
      images: [...(p.images || []), ...base64],
    }));
  };

  const removeImage = (i: number) => {
    setUploadedImages((p) => p.filter((_, idx) => idx !== i));
    setFormData((p) => ({
      ...p,
      images: p.images?.filter((_, idx) => idx !== i),
    }));
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto py-10 ">
      {/* Header */}
      <div className="mb-10 space-y-3">
        <h1 className="text-2xl font-semibold">Trade-In Request</h1>
        <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-neutral-500">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* STEP 1 */}
      {currentStep === 1 && (
        <section className="space-y-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            <div>
              <label className={labelBase}>First Name</label>
              <input
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
            <div>
              <label className={labelBase}>Last Name</label>
              <input
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
          </div>
          <div>
            <label className={labelBase}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          <div>
            <label className={labelBase}>Phone Number</label>
            <PhoneInput
              international
              defaultCountry="KE"
              value={formData.phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div>
            <label className={labelBase}>Preferred Contact</label>
            <select
              name="contactMethod"
              value={formData.contactMethod || ""}
              onChange={handleChange}
              className={newBase}
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
            <label className={labelBase}>iPhone Model</label>
            <select
              name="model"
              value={formData.model || ""}
              onChange={handleChange}
              className={newBase}
            >
              <option value="">Select…</option>
              {PRODUCT_MODELS["iphone"]?.map((m: ModelOption) => (
                <option key={m.key} value={m.key}>
                  {m.label} {m.year ? `(${m.year})` : ""}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelBase}>Storage</label>
            <input
              name="storage"
              value={formData.storage || ""}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          <div>
            <label className={labelBase}>Condition</label>
            <select
              name="condition"
              value={formData.condition || ""}
              onChange={handleChange}
              className={newBase}
            >
              <option value="">Select…</option>
              {["Excellent", "Good", "Fair", "Poor", "Damaged"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </section>
      )}

      {/* STEP 3 */}
      {currentStep === 3 && (
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
            <label className={labelBase}>IMEI</label>
            <input
              name="imei"
              value={formData.imei || ""}
              onChange={handleChange}
              className={inputBase}
            />
          </div>
        </section>
      )}

      {/* STEP 4 */}
      {currentStep === 4 && (
        <section className="space-y-6">
          <div>
            <label className={labelBase}>Proof of Ownership</label>
            <select
              name="proofOfOwnership"
              value={formData.proofOfOwnership || ""}
              onChange={handleChange}
              className={newBase}
            >
              <option value="">Select…</option>
              {OWNERSHIP_PROOFS.map((p) => (
                <option key={p.key} value={p.key}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelBase}>Additional Details</label>
            <textarea
              name="ownershipDetails"
              rows={3}
              value={formData.ownershipDetails || ""}
              onChange={handleChange}
              className={inputBase}
            />
          </div>
        </section>
      )}

      {/* STEP 5 */}
      {currentStep === 5 && (
        <section className="space-y-6">
          <div className="border border-dashed border-neutral-300 rounded-xl p-10 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="upload"
            />
            <label htmlFor="upload" className="cursor-pointer">
              Upload device & proof images (max 8)
            </label>
          </div>

          {uploadedImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {uploadedImages.map((file, i) => (
                <div key={i} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    className="h-28 w-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute top-2 right-2 bg-black text-white w-6 h-6 rounded-full"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Navigation */}
      <div className="flex gap-4 pt-10">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="px-6 py-2 hover:bg-gray-50 rounded-full border border-neutral-300"
          >
            Back
          </button>
        )}

        <button
          onClick={currentStep < totalSteps ? handleNext : handleSubmit}
          className="flex-1 px-6 py-2 hover:bg-primary rounded-full bg-dark-200 text-white"
        >
          {currentStep < totalSteps ? "Continue" : "Submit Trade-In"}
        </button>
      </div>
    </div>
  );
}
