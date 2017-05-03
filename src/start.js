

const maxValue = 30;
const count = { 'countMin': 4, 'countMax': 20 };

function getData (maxVal, range) {
  let length =_.random(range.countMin, range.countMax);
  const data = [];

  _.each(d3.range(length), i => {
    data.push({
      group: {
        x: 1475760930000 + 1000000 * i,
        a: ++i,
        b: _.random(0, maxVal),
      }
    });
  });


  return data;
}

let command  = new Command();
command.setActions('Refresh', function (args){return console.log(`refresh ${args}`)});



const configFirst = {

  // id of the chart HTML element
  id: 'first',

  // limit max height to provided value
  height: 400,

  // optional margin of the chart
  margin: {
 //   left: 0,
  },
  //for horizontal
  /*padding:{
    top: 20,
    right:70,
    bottom: 80,
    left: 50
  },*/
  padding:{
    top: 20,
    right:50,
    bottom: 40,
    left: 140
  },

  //placement vertical or horizontal; default value  'vertical'
  //placement: 'horizontal',

  //quadrant
  quadrant: 1,



  // x axis settings
  x: {
    // how to access values from the serie to plot x
    accessor: 'group.x',

    // use this as axis label
    label: 'Value',

    // use d3 scales: scaleTime by default
    //scale: 'scaleLinear',
  },

  // y axis settings
  y: {
    accessor: 'group.a',
    label: 'Label Group.A',

    // color to plot bars with
    color: 'steelblue',
  },

  navigation: false,

};
const configSecond = {

  // id of the chart HTML element
  id: 'second',

  // limit max height to provided value
  height: 400,

  // optional margin of the chart
  margin: {
 //   right: 0,
  },
  //for horizontal
 /* padding:{
    top: 20,
    right:50,
    bottom: 80,
    left: 70
  },*/
  padding:{
    top: 20,
    right:140,
    bottom: 40,
    left: 50
  },
  //quadrant
  quadrant: 2,

  //placement vertical or horizontal; default value  'vertical'
  //placement: 'horizontal',

  // x axis settings
  x: {
    // how to access values from the serie to plot x
    accessor: 'group.x',

    // use this as axis label
    label: 'Value',

    // use d3 scales: scaleTime by default
    //scale: 'scaleLinear',
  },

  // y axis settings
  y: {
    accessor: 'group.a',
    label: 'Label Group.A',

    // color to plot bars with
    color: 'red',
  }

};
const configThree = {

  // id of the chart HTML element
  id: 'three',

  // limit max height to provided value
  height: 400,

  // optional margin of the chart
  margin: {
 //   right: 0,
  },
  //for horizontal
  /*padding:{
    bottom: 20,
    right:50,
    top: 80,
    left: 70
  },*/
  padding:{
    bottom: 20,
    right:140,
    top: 40,
    left: 50
  },
  //quadrant
  quadrant: 3,

  //placement vertical or horizontal; default value  'vertical'
  //placement: 'horizontal',

  // x axis settings
  x: {
    // how to access values from the serie to plot x
    accessor: 'group.x',

    // use this as axis label
    label: 'Value',

    // use d3 scales: scaleTime by default
    //scale: 'scaleLinear',
  },

  // y axis settings
  y: {
    accessor: 'group.a',
    label: 'Label Group.A',

    // color to plot bars with
    color: 'yellow',
  }

};
const configFour = {

  // id of the chart HTML element
  id: 'four',

  // limit max height to provided value
  height: 400,

  // optional margin of the chart
  margin: {
    //left: 0,
  },
  //for horizontal
  /*padding:{
    bottom: 20,
    right:70,
    top: 80,
    left: 50
  },*/
  padding:{
    bottom: 20,
    right:50,
    top: 40,
    left: 140
  },
  //quadrant
  quadrant: 4,

  //placement vertical or horizontal; default value  'vertical'
  //placement: 'horizontal',

  // x axis settings
  x: {
    // how to access values from the serie to plot x
    accessor: 'group.x',

    // use this as axis label
    label: 'Value',

    // use d3 scales: scaleTime by default
    //scale: 'scaleLinear',
  },

  // y axis settings
  y: {
    accessor: 'group.a',
    label: 'Label Group.A',

    // color to plot bars with
    //color: 'steelblue',
  }

};


const configModelFirst = new BarConfigModel(configFirst);
const chartFirst = new BarView({model: configModelFirst});

/*const configModelSecond = new BarConfigModel(configSecond);
const chartSecond = new BarView({model: configModelSecond});

const configModelThree = new BarConfigModel(configThree);
const chartThree = new BarView({model: configModelThree});

const configModelFour= new BarConfigModel(configFour);
const chartFour = new BarView({model: configModelFour});*/

const data = getData(maxValue, count);
chartFirst.setData(data);

const configNavigator = {

  // id of the chart HTML element
  id: 'navigation',

  // limit max height to provided value
  height: 200,

  // optional margin of the chart
  margin: {
    //   left: 0,
  },
  //for horizontal
  /*padding:{
   top: 20,
   right:70,
   bottom: 80,
   left: 50
   },*/
  padding:{
    top: 20,
    right:50,
    bottom: 40,
    left: 140
  },

  //placement vertical or horizontal; default value  'vertical'
  //placement: 'horizontal',

  //quadrant
  quadrant: 1,



  // x axis settings
  x: {
    // how to access values from the serie to plot x
    accessor: 'group.x',

    // use this as axis label
    label: 'Value',

    // use d3 scales: scaleTime by default
    //scale: 'scaleLinear',
  },

  // y axis settings
  y: {
    accessor: 'group.a',
    label: 'Label Group.A',

    // color to plot bars with
    color: 'orange',
  },

  navigation: true,

};

const configNavigatorModel = new NavigationConfigModel(configNavigator);
const navigator = new NavigationView({model: configNavigatorModel});
navigator.setData(data);





/*chartSecond.setData(data);
chartThree.setData(data);
chartFour.setData(data);*/



/* setInterval(() => {
   let data = getData(maxValue, count);
   chartFirst.setData(data);
    chartSecond.setData(data);
   chartThree.setData(data);
  chartFour.setData(data);

 }, 2000);*/

/*setTimeout(() => {
  let data = getData(maxValue, count);
 // chartFirst.setData(data);
 // chartSecond.setData(data);
  // chartThree.setData(data);
  // chartFour.setData(data);

}, 2000);*/

