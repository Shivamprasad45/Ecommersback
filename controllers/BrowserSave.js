import { BrowserModel } from "../Schema/BrowseerHistoryUser.js";
import { CommentModel } from "../Schema/CommentSchema.js";

export const HistorySave = async (req, res) => {
  try {
    const {
      title,

      thumbnail,
      brand,
      Id,
      user,
    } = req.body;
    console.log(req.body);
    const BrowserData = await BrowserModel({
      title,
      thumbnail,
      brand,
      Id,
      user,
    });

    const data = await BrowserData.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const FetchHistoryId = async (req, res) => {
  try {
    const Id = req.params.Id;
    console.log(Id);
    const HistoryData = await BrowserModel.find({ user: Id });
    res.status(200).json(HistoryData);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const CommentSave = async (req, res) => {
  try {
    const { Name, Comment, ProductId, Date } = req.body;

    const Comments = await CommentModel({ Name, Comment, ProductId });
    const data = await Comments.save();

    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({ message: error });
  }
};

export const FetchComments = async (req, res) => {
  try {
    const id = req.params.id;

    const comments = await CommentModel.find({ ProductId: id });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
