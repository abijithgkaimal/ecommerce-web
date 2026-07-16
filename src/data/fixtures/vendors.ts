import { AdminVendor } from "@/types/admin";

export const adminVendorsFixture: AdminVendor[] = [
  {
    id: "vend-001",
    name: "Heritage Gold Refiners",
    contactName: "John Anderson",
    email: "j.anderson@heritagegold.com",
    phone: "+1 (555) 234-5678",
    address: "742 Evergreen Terrace, Springfield, OR",
    category: "Gold Refiners",
    status: "Active",
    paymentTerms: "Net 30",
    notes: "Primary supplier of 18k and 22k gold bullion. High purity certifications provided with each batch. Shipping is typically insured and takes 3-5 business days."
  },
  {
    id: "vend-002",
    name: "Apex Diamond Cutters Ltd",
    contactName: "Sarah Stone",
    email: "s.stone@apexdiamonds.co.uk",
    phone: "+44 20 7946 0958",
    address: "88 Hatton Garden, London, EC1N 8PN, UK",
    category: "Gemstones & Diamonds",
    status: "Active",
    paymentTerms: "Net 15",
    notes: "Provides premium conflict-free GIA certified diamonds. Custom cuts are available upon 14-day advance requests."
  },
  {
    id: "vend-003",
    name: "Zambian Gem Sourcing Corp",
    contactName: "David Chilufya",
    email: "d.chilufya@zambiangems.com",
    phone: "+260 211 234567",
    address: "Plot 1045, Great East Road, Lusaka, Zambia",
    category: "Gemstones & Diamonds",
    status: "Active",
    paymentTerms: "Due on Receipt",
    notes: "Specializes in raw and cut emeralds. Grade A to AAA gems. Fast customs clearing through our logistics partner."
  },
  {
    id: "vend-004",
    name: "Freshwater Sourcing",
    contactName: "Mei Ling",
    email: "ling.mei@freshwatersources.cn",
    phone: "+86 21 6234 5678",
    address: "99 Huaihai Road, Shanghai, China",
    category: "Pearls",
    status: "Active",
    paymentTerms: "Net 30",
    notes: "Wholesale provider of high-luster freshwater and Akoya pearls. Sizes range from 4mm to 12mm. Strict grading standards."
  },
  {
    id: "vend-005",
    name: "Luxe Packaging Supply",
    contactName: "Robert Vance",
    email: "r.vance@luxepackaging.com",
    phone: "+1 (555) 987-6543",
    address: "420 Industrial Parkway, Scranton, PA",
    category: "Packaging",
    status: "Inactive",
    paymentTerms: "Net 45",
    notes: "Provides premium velvet boxes, gold-foiled bags, and custom jewelry cleaning cloth. Currently inactive due to contract renegotiations."
  }
];
