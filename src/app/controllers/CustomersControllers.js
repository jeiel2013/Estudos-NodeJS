let customers = [
    { id: 1, nomeLoja: "UOL" },
    { id: 2, nomeLoja: "Jeiel Informática" },
    { id: 3, nomeLoja: "Google" },
    { id: 4, nomeLoja: "Eclipse" },
  ];

class CustomersControllers {
  // Listagem dos Customers (get)
  index(req, res) {
    return res.json(customers);
  }

  // Recupera um Customer
  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    console.debug("GET :: /customers/:id ", customer);

    return res.status(status).json(customer);
  }

  // Cria um novo Customer
  create(req, res) {
    const { nomeLoja } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, nomeLoja };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
  }

  // Atualiza um Customer
  update(req, res) {
    const id = parseInt(req.params.id);
    const { nomeLoja } = req.body;
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers[index] = { id: parseInt(id), nomeLoja };
    }

    return res.status(status).json(customers[index]);
  }

  // Exclui um Customer
  destroy(req, res) {
    const { id } = req.body;
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers.splice(index, 1);
    }

    return res.status(status).json("Customer excluído com sucesso!");
  }
}

module.exports = new CustomersControllers();
