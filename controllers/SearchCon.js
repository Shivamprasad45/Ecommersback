import { ServicesListModel } from "../Schema/ServicesList.js";

const Search = async (req, res) => {
  try {
    const searchData = req.query.SearchData; // Assuming searchData contains the search query

    console.log(searchData.length);
    if (searchData.length === 0) {
      return res.status(400).json([]);
    }
    // Construct a regex pattern for partial matching
    const regexPattern = new RegExp(`.*${searchData}.*`, "i");

    // MongoDB query to perform text search using the constructed regex pattern
    const results = await ServicesListModel.find({
      $or: [
        { title: { $regex: regexPattern } }, // Match title field
        { description: { $regex: regexPattern } },
        { category: { $regex: regexPattern } }, // Match description field
      ],
    }).limit(5);

    // Return search results to the client
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default Search;
