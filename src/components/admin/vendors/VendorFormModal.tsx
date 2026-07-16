import React, { useState, useEffect } from "react";
import { AdminVendor } from "@/types/admin";

interface VendorFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<AdminVendor, "id"> & { id?: string }) => void;
  initialData?: AdminVendor | null;
}

export default function VendorFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData
}: VendorFormModalProps) {
  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("Gold Refiners");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [paymentTerms, setPaymentTerms] = useState("Net 30");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setContactName(initialData.contactName || "");
      setEmail(initialData.email || "");
      setPhone(initialData.phone || "");
      setAddress(initialData.address || "");
      setCategory(initialData.category || "Gold Refiners");
      setStatus(initialData.status || "Active");
      setPaymentTerms(initialData.paymentTerms || "Net 30");
      setNotes(initialData.notes || "");
      setError("");
    } else {
      setName("");
      setContactName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCategory("Gold Refiners");
      setStatus("Active");
      setPaymentTerms("Net 30");
      setNotes("");
      setError("");
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Vendor Name is required");
      return;
    }
    setError("");

    onSubmit({
      id: initialData?.id,
      name: name.trim(),
      contactName: contactName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      address: address.trim(),
      category,
      status,
      paymentTerms,
      notes: notes.trim(),
    });
  };

  const categories = [
    "Gold Refiners",
    "Diamonds",
    "Gemstones",
    "Pearl Sourcing",
    "Packaging",
    "Other"
  ];

  const paymentTermsOptions = [
    "Net 15",
    "Net 30",
    "Net 45",
    "Net 60",
    "Due on Receipt",
    "Cash on Delivery"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white border border-[#E5E5E5] rounded-[16px] w-full max-w-2xl shadow-2xl flex flex-col my-8 animate-fadeIn max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-neutral-50 rounded-t-[16px]">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-800 font-sans">
              {initialData ? "Edit Vendor" : "Add New Vendor"}
            </h2>
            <p className="text-[10px] text-neutral-400 font-medium mt-0.5">
              {initialData ? `Modify details for ${initialData.name}` : "Create a new product sourcing vendor profile"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-450 hover:text-neutral-800 transition-colors p-1 rounded-full hover:bg-neutral-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5 no-scrollbar">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-[11px] text-red-600 font-medium flex items-center space-x-2">
              <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Row 1: Name & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
                Vendor Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Heritage Gold Refiners"
                className="px-3.5 py-2.5 border border-neutral-200 rounded-lg text-xs outline-none focus:border-[#C99213] text-neutral-800 placeholder-neutral-400 bg-white"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
                Sourcing Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3.5 py-2.5 border border-neutral-200 rounded-lg text-xs outline-none focus:border-[#C99213] text-neutral-800 bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Contact Person & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
                Contact Person Name
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Sarah Chen"
                className="px-3.5 py-2.5 border border-neutral-200 rounded-lg text-xs outline-none focus:border-[#C99213] text-neutral-800 placeholder-neutral-400 bg-white"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. contact@vendor.com"
                className="px-3.5 py-2.5 border border-neutral-200 rounded-lg text-xs outline-none focus:border-[#C99213] text-neutral-800 placeholder-neutral-400 bg-white"
              />
            </div>
          </div>

          {/* Row 3: Phone & Payment Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +1 (555) 000-0000"
                className="px-3.5 py-2.5 border border-neutral-200 rounded-lg text-xs outline-none focus:border-[#C99213] text-neutral-800 placeholder-neutral-400 bg-white"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
                Payment Terms
              </label>
              <select
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                className="px-3.5 py-2.5 border border-neutral-200 rounded-lg text-xs outline-none focus:border-[#C99213] text-neutral-800 bg-white"
              >
                {paymentTermsOptions.map((term) => (
                  <option key={term} value={term}>
                    {term}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Status (Active Toggle) */}
          <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-100">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-neutral-800">
                Vendor Status
              </span>
              <span className="text-[10px] text-neutral-400">
                Inactive vendors will be filtered out from purchasing workflows
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setStatus("Active")}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider transition-all border ${
                  status === "Active"
                    ? "bg-green-50 border-green-200 text-green-700 shadow-sm"
                    : "bg-white border-neutral-200 text-neutral-400 hover:bg-neutral-100"
                }`}
              >
                ACTIVE
              </button>
              <button
                type="button"
                onClick={() => setStatus("Inactive")}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider transition-all border ${
                  status === "Inactive"
                    ? "bg-red-50 border-red-200 text-red-700 shadow-sm"
                    : "bg-white border-neutral-200 text-neutral-400 hover:bg-neutral-100"
                }`}
              >
                INACTIVE
              </button>
            </div>
          </div>

          {/* Row 5: Address */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
              Office / Facility Address
            </label>
            <textarea
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Street Address, Suite, City, State, ZIP"
              className="px-3.5 py-2.5 border border-neutral-200 rounded-lg text-xs outline-none focus:border-[#C99213] text-neutral-800 placeholder-neutral-400 bg-white"
            />
          </div>

          {/* Row 6: Purchase Details / Notes */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
              Purchase Details & Sourcing Notes
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Lead times, certifications, pricing details, custom packaging options..."
              className="px-3.5 py-2.5 border border-neutral-200 rounded-lg text-xs outline-none focus:border-[#C99213] text-neutral-800 placeholder-neutral-400 bg-white"
            />
          </div>

          {/* Form Actions */}
          <div className="border-t border-neutral-100 pt-4 flex items-center justify-end space-x-3 bg-white">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-neutral-250 text-neutral-700 rounded-full text-xs font-semibold hover:bg-neutral-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-neutral-950 hover:bg-neutral-850 text-white rounded-full text-xs font-semibold tracking-wide transition-colors"
            >
              {initialData ? "Save Changes" : "Create Vendor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
