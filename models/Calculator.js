export default class CalculatorModel {
    constructor() {}

    static create(data) {
        return Object.freeze(new CalculatorModel(data));
    }

    static api = {
        submitRequest({data}) {
            return {
                url: `/api/`,
                method: 'POST ',
                headers: {
                    'Content-Type': 'application/json'
                },
                data
            }
        }
    }
}