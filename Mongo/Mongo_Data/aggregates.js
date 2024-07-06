db.orders.aggregate([
  {
    $match: { size: "medium" },
  },
  {
    $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } },
  },
]);
//************************************************* */
db.orders.aggregate([
  {
    $match: {
      date: { $gte: new ISODate("2021-01-30"), $lt: new ISODate("2022-01-30") },
    },
  },
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
      totalOrderValue: { $sum: { $multiply: ["$price", "$quantity"] } },
      averageOrderQuantity: { $avg: "$quantity" },
    },
  },
  {
    $sort: { totalOrderValue: -1 },
  },
]);
//************************************************* */
