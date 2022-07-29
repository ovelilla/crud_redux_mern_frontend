const formatCurrency = (num) => {
    const formatter = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",

    });

    return formatter.format(num);
};

export default formatCurrency;
