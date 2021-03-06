const print = string => console.log(string);
const question = num => console.log(`\n--- Question ${num}---\n`);

question(2); 

function makeObj() {
  return {
    propA: 10,
    propB: 20      
  };
}

question(3); 

function createInvoice(services = {}) {
  
  return {
    phone: services.hasOwnProperty('phone') ? services.phone : 3000,
    internet: services.hasOwnProperty('internet') ? services.internet : 5500,
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.phone -= payment.phone;
      this.internet -= payment.internet;
      this.phone -= payment.amount;
    },
    addPayments(payment) {
      payment.forEach(this.addPayment, this);
    },
    amountDue() {
      return this.total();
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

question(4);

function createPayment(services = {}) {
  // implement the factory function here
  return {
    phone: services.hasOwnProperty('phone') ? services.phone : 0,
    internet: services.hasOwnProperty('internet') ? services.internet : 0,
    amount: services.hasOwnProperty('amount') ? services.amount : 0,
    total() {
      if (services.hasOwnProperty('amount')) {
        return services.amount;
      } else {
        return this.phone + this.internet;
      }
    }
  };
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

question(5);

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
print(invoice.amountDue());       // this should return 0