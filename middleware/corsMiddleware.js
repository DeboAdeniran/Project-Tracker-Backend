import cors from "cors";

const corsMiddleware = cors({
  origin: "*", // Replace with frontend URL for security
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

export default corsMiddleware;
