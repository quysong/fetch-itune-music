import { API_URL } from "../utils/variables";

export const fetchData = ({ genre }) => {
  const state = genre || 'all'
  return fetch(`${API_URL}/repos/nnluukhtn/employment_bot/issues?q=is%3Aissue+is%3A${state}`).then((res) => res.json())
};