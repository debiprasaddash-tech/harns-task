export const generateRange = (length, prefix = "") => {
  const children = Array.from({ length }, (_, k) => ({
    id: `${prefix}-${k + 1}`,
    name: `${k + 1}`
  }));

  return children;
};

export const defaultNodes = [
  {
    id: "root",
    name: "root",
    children: [
      {
        id: "root-child-2",
        name: "root-child-2",
        children: [
          {
            id: "root-child-2-i-child",
            name: "root-child-2-i-child",
            children: generateRange(200, "root-child-2")
          },
          {
            id: "root-child-2-ii-child",
            name: "root-child-2-ii-child",
            children: generateRange(220, "root-child-2")
          }
        ]
      },
      {
        id: "root-child-3",
        name: "root-child-3",
        children: [
          {
            id: "root-child-3-i-child",
            name: "root-child-3-i-child",
            children: generateRange(300, "root-child-3")
          },
          {
            id: "root-child-3-ii-child",
            name: "root-child-3-ii-child",
            children: generateRange(300, "root-child-3")
          }
        ]
      }
    ]
  }
];
