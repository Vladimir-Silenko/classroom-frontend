export const ALL_DEPARTMENTS = "all";
export const DEPARTMENTS = ["CS", "Math", "English"] as const;
export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const BASE_URL = import.meta.env.VITE_API_URL
