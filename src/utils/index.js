const axios = require("axios");

exports.getCommodityPrice = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.gold-api.com/price/${req.query.metal}`
    );

    return res.status(200).json({
      ...response.data,
      units: {
        oz: response?.data?.price,
        gm: response?.data?.price / 31.1034768,
        kg: (response?.data?.price / 31.1034768) * 1000,
      },
    });
  } catch (error) {
    return res.status(404).json({ msg: "Data not found!" });
  }
};
