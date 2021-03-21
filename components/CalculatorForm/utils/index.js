export const houseInfoSubmit = ({year, size, stories, cost, houseType}) => {
    let dataToSend = {
        year: Number(year),
        size: Number(size),
        stories: Number(stories),
        cost: Number(cost),
        houseType
    }

    return fetch('/api/run', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...dataToSend})
    }).then(res => res.json()).then(data => {
        console.log("returning this data", data)
        return data;
    });
};

export const houseInfoValidate = values => {
    const errors = {};
    if (!values.year) {
        errors.year = 'Required';
    }
    if (!values.size) {
        errors.size = 'Required';
    }
    if (!values.stories) {
        errors.stories = 'Required';
    }
    if (!values.cost) {
        errors.cost = 'Required';
    }
    if (!values.houseType) {
        errors.houseType = 'Required';
    }
    return errors;
};

export const costInfoSubmit = ({currentCost, heatPumpCost}) => {
    console.log(currentCost, heatPumpCost)
    return {
        currentCost,
        heatPumpCost
    }
}

export const costInfoValidate = values => {
    const errors = {};

    if(!values.currentCost) {
        errors.currentCost = 'Required';
    }

    if(!values.heatPumpCost) {
        errors.heatPumpCost = 'Required'
    }
    return errors;
}

export const getChartData = ({currentCost, heatPumpCost}) => {
    const currentCostMonthly = currentCost / 12;
    const heatPumpCostMonthly = heatPumpCost / 12;
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const chartData = data.map(month => {
        return {
            month: month,
            currentCost: month * currentCostMonthly,
            heatPumpCost: month * heatPumpCostMonthly
        }
    });
    console.log(chartData);
    return chartData;

}