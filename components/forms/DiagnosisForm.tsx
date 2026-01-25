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

export default function DiagnosisForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<FormData>({});
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

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };

      // Reset dependent field when product type changes
      if (name === "productType") {
        newData.model = undefined;
      }

      return newData;
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (uploadedImages.length + files.length > 5) {
      addToast({
        title: "Too Many Images",
        description: "You can upload a maximum of 5 images.",
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
        return !!formData.productType && !!formData.model;
      case 3:
        return !!formData.issueType;
      case 4:
        return !!formData.serialNumber?.trim() && !!formData.warrantyStatus;
      case 5:
        return true;
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

    // Store diagnosis data
    sessionStorage.setItem("diagnosisData", JSON.stringify(formData));

    addToast({
      title: "Diagnosis Request Submitted",
      description: "We'll contact you shortly with an assessment.",
      color: "success",
    });

    console.log(formData);

    // router.push("/");
  };

  const progressValue = (currentStep / totalSteps) * 100;
  const selectedProductType = formData.productType as ProductType | undefined;

  // Helper to display friendly names in summary
  const getProductDisplay = () =>
    PRODUCT_TYPES.find((p) => p.key === formData.productType)?.label ||
    "Not selected";

  const getModelDisplay = () => {
    if (!selectedProductType || !formData.model) return "Not selected";
    const model = PRODUCT_MODELS[selectedProductType]?.find(
      (m) => m.key === formData.model,
    );
    return model
      ? `${model.label}${model.year ? ` (${model.year})` : ""}`
      : formData.model;
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      {/* Progress Header */}
      <div className="mb-8 space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Device Diagnosis Request</h1>
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

      <div className="min-h-[400px] mb-8 ">
        {/* STEP 1: Customer Information */}
        {currentStep === 1 && (
          <section className="space-y-6">
            <div>
              <p className="text-sm text-default-500 mb-6">
                Please provide your contact details so we can reach you about
                your device.
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

        {/* STEP 2: Product Information */}
        {currentStep === 2 && (
          <section className="space-y-6 w-full">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Product Information
              </h2>
              <p className="text-sm text-default-500 mb-6">
                Tell us about the Apple device that needs diagnosis.
              </p>
            </div>

            <Select
              label="Product Type"
              placeholder="Select product type"
              selectedKeys={formData.productType ? [formData.productType] : []}
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] as string;
                handleSelectChange("productType", value);
              }}
              isRequired
              classNames={{ base: "w-full" }}
            >
              {PRODUCT_TYPES.map((product: ProductOption) => (
                <SelectItem key={product.key}>{product.label}</SelectItem>
              ))}
            </Select>

            {selectedProductType && PRODUCT_MODELS[selectedProductType] && (
              <Select
                label="Model"
                placeholder="Select model"
                selectedKeys={formData.model ? [formData.model] : []}
                onSelectionChange={(keys) => {
                  const value = Array.from(keys)[0] as string;
                  handleSelectChange("model", value);
                }}
                isRequired
                classNames={{ base: "w-full" }}
              >
                {PRODUCT_MODELS[selectedProductType].map(
                  (model: ModelOption) => (
                    <SelectItem key={model.key}>
                      {model.label}
                      {model.year ? ` (${model.year})` : ""}
                    </SelectItem>
                  ),
                )}
              </Select>
            )}
          </section>
        )}

        {/* STEP 3: Issue Details */}
        {currentStep === 3 && (
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Issue Details</h2>
              <p className="text-sm text-default-500 mb-6">
                Describe the problem you're experiencing with your device.
              </p>
            </div>

            <Select
              label="Primary Issue"
              placeholder="Select main issue"
              selectedKeys={formData.issueType ? [formData.issueType] : []}
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] as string;
                handleSelectChange("issueType", value);
              }}
              isRequired
              classNames={{ base: "w-full" }}
            >
              {ISSUE_TYPES.map((issue) => (
                <SelectItem key={issue.key}>{issue.label}</SelectItem>
              ))}
            </Select>

            <Textarea
              label="Additional Issue Description"
              name="additionalDescription"
              value={formData.additionalDescription || ""}
              onChange={handleInputChange}
              placeholder="Please provide any extra details about the issue..."
              minRows={4}
              classNames={{ base: "w-full" }}
            />
          </section>
        )}

        {/* STEP 4: Device Details */}
        {currentStep === 4 && (
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Device Details</h2>
              <p className="text-sm text-default-500 mb-6">
                Additional information about your device's warranty and history.
              </p>
            </div>

            <Input
              label="Serial Number"
              name="serialNumber"
              value={formData.serialNumber || ""}
              onChange={handleInputChange}
              placeholder="C02XYZ123ABC"
              description="Usually found in Settings → General → About"
              isRequired
              classNames={{ base: "w-full" }}
            />

            <Select
              label="Warranty Status"
              placeholder="Select warranty status"
              selectedKeys={
                formData.warrantyStatus ? [formData.warrantyStatus] : []
              }
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] as string;
                handleSelectChange("warrantyStatus", value);
              }}
              isRequired
              classNames={{ base: "w-full" }}
            >
              {WARRANTY_STATUS.map((status) => (
                <SelectItem key={status.key}>{status.label}</SelectItem>
              ))}
            </Select>

            <Textarea
              label="Previous Repairs"
              name="previousRepairs"
              value={formData.previousRepairs || ""}
              onChange={handleInputChange}
              placeholder="List any previous repairs or modifications (if any)..."
              minRows={3}
              classNames={{ base: "w-full" }}
            />
          </section>
        )}

        {/* STEP 5: Upload Images + Summary */}
        {currentStep === 5 && (
          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Upload Images (Optional)
              </h2>
              <p className="text-sm text-default-500 mb-6">
                Upload up to 5 images showing the issue or damage. Max 5MB per
                image.
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
                disabled={uploadedImages.length >= 5}
                aria-label="Upload device images"
              />
              <label
                htmlFor="image-upload"
                className={`cursor-pointer ${uploadedImages.length >= 5 ? "opacity-50 cursor-not-allowed" : ""}`}
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
                    {uploadedImages.length} / 5 images uploaded
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
                Review Your Submission
              </h3>
              <div className="space-y-2.5 text-sm">
                <p>
                  <span className="text-default-500">Name:</span>{" "}
                  <span className="font-medium">
                    {formData.fullName || "—"}
                  </span>
                </p>
                <p>
                  <span className="text-default-500">Device:</span>{" "}
                  <span className="font-medium">
                    {getProductDisplay()} – {getModelDisplay()}
                  </span>
                </p>
                <p>
                  <span className="text-default-500">Issue:</span>{" "}
                  <span className="font-medium">
                    {ISSUE_TYPES.find((i) => i.key === formData.issueType)
                      ?.label || "—"}
                  </span>
                </p>
                <p>
                  <span className="text-default-500">Warranty:</span>{" "}
                  <span className="font-medium">
                    {WARRANTY_STATUS.find(
                      (w) => w.key === formData.warrantyStatus,
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
            className="bg-white text-black py-2.5 px-7 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors"
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
            aria-label="Submit diagnosis request"
            className="flex-1 bg-dark-300 text-white py-2.5 px-7 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Submit Diagnosis Request
          </button>
        )}
      </div>
    </div>
  );
}
