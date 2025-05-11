// API base URL - changes based on environment
const API_URL = import.meta.env.PROD 
  ? '/api/v1/reservation'  // In production, use relative path
  : 'http://localhost:8080/api/v1/reservation';  // In development, use localhost

export default API_URL;
