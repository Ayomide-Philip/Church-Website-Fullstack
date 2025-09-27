export async function getAllBlogs(req, res, next) {
  try {
    return res.json({ success: true, message: "GET all blogs" });
  } catch (err) {
    next(err);
  }
}
