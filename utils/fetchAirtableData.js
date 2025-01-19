// utils/fetchAirtableData.js
const Airtable = require("airtable");

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

export const fetchTableNames = async () => {
  const records = await base("ListOfNodes")
    .select({
      // Add other select options here if needed
    })
    .all();

  return records.map((record) => {
    const fields = record.fields;
    return {
      name: fields.NodeName,
      mission: fields.Mission,
      logoURL: fields.Logo?.length ? fields.Logo[0].url : null,
      baseLocations: fields.Base ? fields.Base.split(",") : [],
      url: fields.URL,
      x: fields.X,
      discord: fields.Discord,
      followers: fields.Followers
        ? fields.Followers.toString().replace(",", ".")
        : "0",
      xFollowers: fields.xFollowers
        ? fields.xFollowers.toString().replace(",", ".") + "K"
        : "Empty",
      discordMembers: fields.discordMembers
        ? fields.discordMembers.toString().replace(",", ".") + "K"
        : "Empty",
      opensea: fields.OpenSea,
      floorPrice: fields.FloorPrice
        ? fields.FloorPrice.toString().replace(",", ".") + "Ξ"
        : "Empty",
      blur: fields.Blur,
      application: fields.Application,
      tags: fields.tags ? fields.tags.split(",") : [],
    };
  });
};
