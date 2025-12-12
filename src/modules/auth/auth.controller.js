import * as authService from "./auth.service.js";

export const register = async (req, res) => {
  try {
    const result = await authService.register(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
