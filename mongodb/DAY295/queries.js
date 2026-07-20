// Day 295: Schema Modeling
// Embedded address pattern (1-to-few):
const userWithEmbeddedAddress = {
  name: "Kushal",
  mobile: "9876543210",
  savedAddresses: [
    { type: "Hostel", street: "Koramangala 4th Block", pin: "560034" },
    { type: "Home", street: "Indiranagar 100ft Road", pin: "560038" }
  ]
};
