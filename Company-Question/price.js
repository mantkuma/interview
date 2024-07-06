const users = [
  {
    id: 1,
    name: 'Employee #1',
    activatedOn: new Date('2019-01-05'),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 2,
    name: 'Employee #2',
    activatedOn: new Date('2019-01-01'),
    deactivatedOn: null,
    customerId: 1,
  },
];

const plan = {
  id: 1,
  customerId: 1,
  monthlyPriceInCents: 5000,
};

const calculate = async (month, subscription, users) => {
    const date = new Date(month);
    const startDay = date
    const endDay = lastDayOfMonth(date)
    const totalDays = endDay.getUTCDate() - startDay.getUTCDate()+1
    let price = 0;
    //if activatedOn is null then deactivate is also null;
    for(user of users){
        console.log(user)
            if(user.deactivatedOn === null && user.activatedOn.getUTCDate() === startDay.getUTCDate()){
            price = price+subscription.monthlyPriceInCents;
        }else if(user.activatedOn != null && user.deactivatedOn != null)
        {
            const days =  await calculateDays(user.activatedOn, user.deactivatedOn)
            price = price + await calculatePriceForLessThanMonth(days, totalDays, subscription.monthlyPriceInCents)
        }
    }
    return price;
    
}


const calculateDays  = async(startDate, endDate) => {
    return endDate.getUTCDate() - startDate.getUTCDate()+1
}

const calculatePriceForLessThanMonth = async(days,totalDays, price)=> {
   return (price/totalDays)*days
}


function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}
calculate("2022-04", plan, users).then(data => {
    console.log(data)
})