import { ServicesListModel } from "../Schema/ServicesList.js";
import { ServicesModle } from "../Schema/servicsecatogey.js";
export const Service = async (req, res) => {
  try {
    const Services = await ServicesModle.find();
    res.status(200).json(Services);
  } catch (error) {
    res.status(200).json({ message: error });
  }
};

export const ServiceList = async (req, res) => {
  try {
    const category = req.query.category; // 'skincare'

    if (category) {
      const Services = await ServicesListModel.find({ category: category });
      return res.status(200).json(Services);
    }
  } catch (error) {
    res.status(200).json({ message: error });
  }
};

export const ServiceListDetails = async (req, res) => {
  try {
    const id = req.query.id; // '50'
    console.log(id);
    if (id) {
      const Services = await ServicesListModel.find({ id: id });

      return res.status(200).json(Services);
    }
  } catch (error) {
    res.status(200).json({ message: error });
  }
};

export const AllProducts = async (req, res) => {
  try {
    const Services = await ServicesListModel.find().limit(34);

    res.status(200).json(Services);
  } catch (error) {
    res.status(200).json({ message: error });
  }
};
