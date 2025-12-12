import * as sweetsService from "./sweets.service.js";

export const createSweet = async (req, res) => {
  try {
    const result = await sweetsService.createSweet(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getAllSweets = async (req, res) => {
  try {
    const result = await sweetsService.getAllSweets();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const searchSweets = async (req, res) => {
  try {
    const query = req.query.q || "";
    const result = await sweetsService.searchSweets(query);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const updateSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sweetsService.updateSweet(Number(id), req.body);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const deleteSweet = async (req, res) => {
  try {
    const { id } = req.params;
    await sweetsService.deleteSweet(Number(id));
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
