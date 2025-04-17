export default [
  {
    method: "get",
    path: "/",
    handler: async (req, res) => {
      res.render("home");
    },
  },
];
