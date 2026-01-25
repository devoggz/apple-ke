"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  addToast,
  Select,
  SelectItem,
  Input,
  Textarea,
  Progress,
} from "@heroui/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { PRODUCT_MODELS, CONTACT_METHODS, ModelOption } from "@/app/data/data"; // Assuming you still want to reuse these

// For simplicity — you can extend/define these in data.ts if needed
const OWNERSHIP_PROOFS = [
  { key: "receipt", label: "Original Purchase Receipt" },
  { key: "invoice", label: "Invoice / Bill of Sale" },
  { key: "box", label: "Original Box with Serial/IMEI" },
  { key: "other", label: "Other (please specify)" },
];

interface TradeInFormData {
  fullName?: string;
  email?: string;
  phone?: string;
  contactMethod?: string;

  model?: string;
  storage?: string; // e.g. 128GB, 256GB
  condition?: string; // e.g. Excellent, Good, Fair, Damaged
  serialNumber?: string;
  imei?: string;

  proofOfOwnership?: string;
  ownershipDetails?: string;

  images?: string[]; // device photos + proof
}

export default function TradeInForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<TradeInFormData>({});
  const [uploadedImages, setUploadedImages] = React.useState<File[]>([]);
  const totalSteps = 5;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const handleSelectChange = (name: keyof TradeInFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (uploadedImages.length + files.length > 8) {
      // increased limit for trade-in
      addToast({
        title: "Too Many Images",
        description: "You can upload a maximum of 8 images.",
        color: "warning",
      });
      return;
    }

    const validFiles = files.filter((file) => {
      const isValid = file.type.startsWith("image/");
      const isUnder5MB = file.size <= 5 * 1024 * 1024;

      if (!isValid) {
        addToast({
          title: "Invalid File",
          description: `${file.name} is not an image file.`,
          color: "danger",
        });
      }

      if (!isUnder5MB) {
        addToast({
          title: "File Too Large",
          description: `${file.name} exceeds 5MB limit.`,
          color: "danger",
        });
      }

      return isValid && isUnder5MB;
    });

    if (validFiles.length === 0) return;

    setUploadedImages((prev) => [...prev, ...validFiles]);

    const base64Images = await Promise.all(
      validFiles.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          }),
      ),
    );

    setFormData((prev) => ({
      ...prev,
      images: [...(prev.images || []), ...base64Images],
    }));
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      images: prev.images?.filter((_, i) => i !== index),
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.fullName?.trim() &&
          formData.email?.trim() &&
          formData.phone?.trim() &&
          formData.contactMethod
        );
      case 2:
        return !!formData.model;
      case 3:
        return !!formData.serialNumber?.trim() && !!formData.imei?.trim();
      case 4:
        return !!formData.proofOfOwnership;
      case 5:
        return true; // images + final review are optional
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    } else {
      addToast({
        title: "Required Fields",
        description: "Please complete all required fields before continuing.",
        color: "warning",
      });
    }
  };

  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    if (
      !validateStep(1) ||
      !validateStep(2) ||
      !validateStep(3) ||
      !validateStep(4)
    ) {
      addToast({
        title: "Incomplete Form",
        description: "Please complete all required fields.",
        color: "danger",
      });
      return;
    }

    // For now — just log (later: send to backend / API)
    console.log("Trade-in Submission:", formData);

    addToast({
      title: "Trade-in Request Submitted",
      description: "We'll review your iPhone details and get back to you soon.",
      color: "success",
    });

    // router.push("/"); // or redirect to thank-you page
  };

  const progressValue = (currentStep / totalSteps) * 100;
  const selectedModel = formData.model
    ? (PRODUCT_MODELS["iphone"]?.find(
        (m: ModelOption) => m.key === formData.model,
      )?.label ?? formData.model)
    : "Not selected";

  return (
    <div className="w-full max-w-3xl mx-auto  py-8">
      {/* Progress Header */}
      <div className="mb-8 space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Trade-In Request</h1>
            <p className="text-sm mt-1">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </div>

        <Progress
          value={progressValue}
          size="sm"
          color="default"
          aria-label="Form progress"
          classNames={{
            base: "w-full",
            indicator: "bg-dark-200",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
        />
      </div>

      <div className="min-h-[400px] mb-8 text-dark-200">
        {/* STEP 1: Customer Information */}
        {currentStep === 1 && (
          <section className="space-y-6">
            <div>
              <p className="text-sm text-default-500 mb-6">
                Please provide your contact details so we can reach you about
                your trade-in.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleInputChange}
                placeholder="John Doe"
                isRequired
                classNames={{ base: "w-full" }}
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
                isRequired
                classNames={{ base: "w-full" }}
              />
            </div>

            <div className="phone-input-wrapper">
              <label htmlFor="phone-input">
                Phone Number
                <span className="required-asterisk">*</span>
              </label>
              <PhoneInput
                id="phone-input"
                international
                defaultCountry="KE"
                value={formData.phone || ""}
                onChange={handlePhoneChange}
                placeholder="+254 712 345 678"
                aria-label="Phone number"
              />
            </div>

            <Select
              label="Preferred Contact Method"
              placeholder="Select contact method"
              selectedKeys={
                formData.contactMethod ? [formData.contactMethod] : []
              }
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] as string;
                handleSelectChange("contactMethod", value);
              }}
              isRequired
              classNames={{ base: "w-full" }}
            >
              {CONTACT_METHODS.map((method) => (
                <SelectItem key={method.key}>{method.label}</SelectItem>
              ))}
            </Select>
          </section>
        )}

        {/* STEP 2: iPhone Model & Basic Info */}
        {currentStep === 2 && (
          <section className="space-y-6 w-full">
            <div>
              <p className="text-sm text-default-500 mb-6">
                Tell us about the iPhone you want to trade in.
              </p>
            </div>

            <Select
              label="iPhone Model"
              placeholder="Select model"
              selectedKeys={formData.model ? [formData.model] : []}
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] as string;
                handleSelectChange("model", value);
              }}
              isRequired
              classNames={{ base: "w-full" }}
            >
              {PRODUCT_MODELS["iphone"]?.map((model: ModelOption) => (
                <SelectItem key={model.key}>
                  {model.label}
                  {model.year ? ` (${model.year})` : ""}
                </SelectItem>
              )) ?? <SelectItem key="other">Other / Not listed</SelectItem>}
            </Select>

            <Input
              label="Storage Capacity"
              name="storage"
              value={formData.storage || ""}
              onChange={handleInputChange}
              placeholder="e.g. 128GB, 256GB, 512GB"
              classNames={{ base: "w-full" }}
            />

            <Select
              label="Overall Condition"
              placeholder="Select condition"
              selectedKeys={formData.condition ? [formData.condition] : []}
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] as string;
                handleSelectChange("condition", value);
              }}
              isRequired
              classNames={{ base: "w-full" }}
            >
              {[
                "Excellent",
                "Good",
                "Fair",
                "Poor",
                "Damaged / Parts only",
              ].map((cond) => (
                <SelectItem key={cond.toLowerCase()}>{cond}</SelectItem>
              ))}
            </Select>
          </section>
        )}

        {/* STEP 3: Serial & IMEI */}
        {currentStep === 3 && (
          <section className="space-y-6">
            <div>
              <p className="text-sm text-default-500 mb-6">
                Help us verify and value your device accurately.
              </p>
            </div>

            <Input
              label="Serial Number"
              name="serialNumber"
              value={formData.serialNumber || ""}
              onChange={handleInputChange}
              placeholder="C02XYZ123ABC"
              description="Found in Settings → General → About"
              isRequired
              classNames={{ base: "w-full" }}
            />

            <Input
              label="IMEI Number"
              name="imei"
              value={formData.imei || ""}
              onChange={handleInputChange}
              placeholder="e.g. 35xxxxxxxxxxxxx"
              description="Dial *#06# to view it on your iPhone"
              isRequired
              classNames={{ base: "w-full" }}
            />
          </section>
        )}

        {/* STEP 4: Proof of Ownership */}
        {currentStep === 4 && (
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Proof of Ownership</h2>
            </div>

            <Select
              label="Type of Proof"
              placeholder="Select proof type"
              selectedKeys={
                formData.proofOfOwnership ? [formData.proofOfOwnership] : []
              }
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] as string;
                handleSelectChange("proofOfOwnership", value);
              }}
              isRequired
              classNames={{ base: "w-full" }}
            >
              {OWNERSHIP_PROOFS.map((opt) => (
                <SelectItem key={opt.key}>{opt.label}</SelectItem>
              ))}
            </Select>

            <Textarea
              label="Additional Details"
              name="ownershipDetails"
              value={formData.ownershipDetails || ""}
              onChange={handleInputChange}
              placeholder="Any extra information about purchase / ownership..."
              minRows={3}
              classNames={{ base: "w-full" }}
            />
          </section>
        )}

        {/* STEP 5: Upload Images + Summary */}
        {currentStep === 5 && (
          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Upload Photos</h2>
              <p className="text-sm text-default-500 mb-6">
                Upload clear photos of the device (front/back/sides), any
                damage, and proof of ownership (receipt/box/etc). Max 8 images,
                5MB each.
              </p>
            </div>

            <div className="border-2 border-dashed border-default-300 rounded-xl p-10 text-center">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
                disabled={uploadedImages.length >= 8}
                aria-label="Upload device & proof images"
              />
              <label
                htmlFor="image-upload"
                className={`cursor-pointer ${uploadedImages.length >= 8 ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="text-default-500 mb-3">
                  <svg
                    className="w-14 h-14 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="font-medium text-lg">
                    Click to upload or drag & drop
                  </p>
                  <p className="text-sm mt-1">
                    {uploadedImages.length} / 8 images uploaded
                  </p>
                </div>
              </label>
            </div>

            {uploadedImages.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {uploadedImages.map((file, index) => (
                  <div
                    key={index}
                    className="relative group rounded-lg overflow-hidden"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}: ${file.name}`}
                      className="w-full h-28 object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      aria-label={`Remove ${file.name}`}
                      className="absolute top-1.5 right-1.5 bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                    >
                      ×
                    </button>
                    <p className="text-xs text-default-500 mt-1 truncate text-center">
                      {file.name}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="rounded-xl border border-default-200 bg-default-50/60 p-6">
              <h3 className="font-semibold text-lg mb-4">
                Review Your Trade-in Request
              </h3>
              <div className="space-y-2.5 text-sm">
                <p>
                  <span className="text-default-500">Name:</span>{" "}
                  <span className="font-medium">
                    {formData.fullName || "—"}
                  </span>
                </p>
                <p>
                  <span className="text-default-500">Model:</span>{" "}
                  <span className="font-medium">{selectedModel}</span>
                </p>
                <p>
                  <span className="text-default-500">Condition:</span>{" "}
                  <span className="font-medium">
                    {formData.condition || "—"}
                  </span>
                </p>
                <p>
                  <span className="text-default-500">Serial / IMEI:</span>{" "}
                  <span className="font-medium">
                    {formData.serialNumber || "—"} / {formData.imei || "—"}
                  </span>
                </p>
                <p>
                  <span className="text-default-500">Proof of Ownership:</span>{" "}
                  <span className="font-medium">
                    {OWNERSHIP_PROOFS.find(
                      (p) => p.key === formData.proofOfOwnership,
                    )?.label || "—"}
                  </span>
                </p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 pt-6">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            aria-label="Go to previous step"
            className="border-2 text-black py-2.5 px-7 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors"
          >
            ← Back
          </button>
        )}

        {currentStep < totalSteps ? (
          <button
            onClick={handleNext}
            aria-label="Continue to next step"
            className="flex-1 bg-dark-300 text-white py-2.5 px-7 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Continue →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            aria-label="Submit trade-in request"
            className="flex-1 bg-dark-300 text-white py-2.5 px-7 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Submit Trade-in Request
          </button>
        )}
      </div>
    </div>
  );
}
