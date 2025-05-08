const tickets = [
  {
    title: "Seminar",
    description: [
      {
        label: "Mahasiswa",
        items: [
          { label: "Presenter individu", price: "Rp250.000" },
          { label: "Bundling 1", price: "Rp350.000" },
        ],
      },
    ],
    link: "/form-paper",
  },
  {
    title: "Seminar & Paper",
    description: [
      {
        label: "Mahasiswa",
        items: [
          { label: "Seminar paper mhs 1 orang", price: "Rp100.000" },
          { label: "Bundling 1 : 2-3 orang satu paper", price: "Rp160.000" },
          { label: "Bundling 2 : 4-6 orang satu paper", price: "Rp250.000" },
        ],
      },
      {
        label: "Umum",
        items: [{ label: "Individu", price: "Rp150.000" }],
      },
    ],
    link: "/form-seminar",
  },
];

export default tickets;
