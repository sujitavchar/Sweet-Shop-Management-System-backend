import * as inventoryService from "./inventory.service.js";

export const purchaseSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const result = await inventoryService.purchaseSweet(
      Number(id),
      Number(quantity)
    );

    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const restockSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const result = await inventoryService.restockSweet(
      Number(id),
      Number(quantity)
    );

    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
