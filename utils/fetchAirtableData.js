// utils/fetchAirtableData.js
const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

export const fetchTableNames = async () => {
  const records = await base("ListOfNodes")
    .select({
      // Add other select options here if needed
    })
    .all();

  return records.map((record) => {
    const fields = record.fields;
    const name = fields.NodeName; // Existing name field
    const mission = fields.Mission; // Existing mission field
    const baseLocations = fields.Base ? fields.Base.split(',') : []; // New line
    const url = fields.URL
    const x = fields.X
    const discord = fields.Discord
    const xFollowers = fields.xFollowers
    ? fields.xFollowers.toString().replace(',', '.') + 'K' // Assuming you want to display thousands
    : 'Empty';
    const discordMembers = fields.discordMembers
    ? fields.discordMembers.toString().replace(',', '.') + 'K' // Assuming you want to display thousands
    : 'Empty';
    const opensea = fields.OpenSea
    const floorPrice = fields.FloorPrice
    ? fields.FloorPrice.toString().replace(',', '.') + 'Ξ' // Assuming you want to display thousands
    : 'Empty';
    const blur = fields.Blur
    const application = fields.Application


    // Fetching the logo URL from the Logo field
    const logo = fields.Logo || []; // Replace 'Logo' with the actual field name in your Airtable base if different
    const logoURL = logo.length ? logo[0].url : null;

    return {
      name,
      mission,
      logoURL, // Include the logo URL in the returned object
      baseLocations, // New field
      url,
      x,
      discord,
      xFollowers,
      discordMembers,
      opensea,
      floorPrice,
      blur,
      application,
    };
  });
};
