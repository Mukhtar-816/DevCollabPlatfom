
export const get = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Error getting item from localStorage:", error);
  }
};

export const save = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving item to localStorage:", error);
  }
};

export const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing item from localStorage:", error);
  }
};
