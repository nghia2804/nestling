Data = new Mongo.Collection('data');

Data.attachSchema(new SimpleSchema({
  dID: {
    type: Number,
    label: "Data ID Number",
    max: 20000
  },
  region: {
    type: Number,
    label: "Region",
    allowedValues: [1, 2, 3, 4]
  },
  division: {
    type: Number,
    label: "Division",
    allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  domain: {
    type: Number,
    label: "Reportable Domain",
    max: 26
  },
  type: {
    type: Number,
    label: "Type of Housing Unit",
    allowedValues: [1, 2, 3, 4, 5]
  },
  climate: {
    type: Number,
    label: "Climate Region",
    allowedValues: [1, 2, 3, 4, 5]
  },
  AIA: {
    type: Number,
    label: "AIA Climate Zone",
    allowedValues: [1, 2, 3, 4, 5]
  },
  isUrban: {
    type: Boolean,
    label: "Urban Population"
  },
  isOwned: {
    type: Boolean,
    label: "Owned"
  },
  built: {
    type: Number,
    label: "Range Built",
    allowedValues: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  totalBTU: {
    type: Number,
    label: "Total BTU Energy Usage"
  },
  heatBTU: {
    type: Number,
    label: "BTU Energy Usage for Space Heating"
  },
  coolBTU: {
    type: Number,
    label: "BTU Energy Usage for Air Conditioning"
  },
  waterBTU: {
    type: Number,
    label: "BTU Energy Usage for Water Heating"
  },
  refBTU: {
    type: Number,
    label: "BTU Energy Usage for Refrigeration"
  },
  otherBTU: {
    type: Number,
    label: "BTU Energy Usage for Other Categories"
  },
  totalDol: {
    type: Number,
    label: "Total USD Energy Usage"
  },
  heatDol: {
    type: Number,
    label: "USD Energy Usage for Space Heating"
  },
  coolDol: {
    type: Number,
    label: "USD Energy Usage for Air Conditioning"
  },
  waterDol: {
    type: Number,
    label: "USD Energy Usage for Water Heating"
  },
  refDol: {
    type: Number,
    label: "USD Energy Usage for Refrigeration"
  },
  otherDol: {
    type: Number,
    label: "USD Energy Usage for Other Categories"
  },
  sqft: {
    type: Number,
    label: "Total Square Footage"
  },
  isProg: {
    type: Boolean,
    label: "Has Programmable Thermostat"
  },
  income: {
    type: Number,
    label: "Income Bracket"
  },
  occupants: {
    type: Number,
    label: "Total Occupants"
  }
}));
