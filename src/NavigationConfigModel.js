class NavigationConfigModel extends ContrailModel{
  get defaults(){ return {
    id: 'navigator',
    height: 200,
    width: 500,
    barPadding: 1,
    padding:{
      top: 20,
      left:150,
      bottom: 40,
      right: 50
    },
    margin: {
      top: 5,
      left: 5,
      bottom: 5,
      right: 5
    },
    x: {
      accessor: 'group.x',
      label: 'Value',
      scale: 'scaleTime'
    },
    y: {
      accessor: 'group.a',
      label: 'Label Group.A',
      color: 'orange',
    },
    quadrant: 1,
    placement: 'vertical',
    navigation: false,
  }}

  initialize(){
    this.data = [];

  }

  setData(data){
    this.data = data;
  }

  getMargin(){
    let margin = this.get('margin');
    let top = margin.top === undefined ? '0px' : margin.top + "px";
    let right = margin.right === undefined ? '0px' : margin.right + "px";
    let bottom = margin.bottom === undefined ? '0px' : margin.bottom + "px";
    let left = margin.left === undefined ? '0px' : margin.left + "px";

    return "margin: " + top + " " +  right + " " + bottom + " " + left;
  }
  getAccessor(axis){
    let accessor = this.get(axis).accessor;
    let args = accessor.split('.');
    let group = args[0];
    let key = args[1];
    return {group, key};
  }
  calculateBarWidth(){
    let data = this.data;
    let width = this.get('width');
    let paddingLeft = this.get('padding').left;
    let paddingRight = this.get('padding').right;
    let barPadding = this.get('barPadding');

    return ((width - paddingLeft - paddingRight)/(data.length)) - barPadding;
  }
  xScaleConfig(){
    let data = this.data;
    let scale = this.get('x').scale;
    let xScale = d3[scale]();
    let width = this.get('width');
    let paddingLeft = this.get('padding').left;
    let paddingRight = this.get('padding').right;
    let quadrant = this.get('quadrant');
    let placement = this.get('placement');
    let { group, key} = this.getAccessor('x');




    if( placement === 'horizontal' ){
      xScale.domain([d3.max(data, d => d[group][key]), d3.min(data, d => d[group][key])]);
    }
    else{
      xScale.domain([d3.min(data, d => d[group][key]), d3.max(data, d => d[group][key])]);
    }

    if( quadrant === 1 || quadrant === 4 ){
      xScale.range([paddingLeft, width - paddingRight -(this.calculateBarWidth()/2)]);
    }
    else {
      xScale.range([width - paddingRight - (this.calculateBarWidth()/2), paddingLeft]);
    }



    return xScale;
  }

  configBrushExtent(){
    const paddingLeft = this.get('padding').left;
    const paddingRight = this.get('padding').right;
    const paddingTop = this.get('padding').top;
    const paddingBottom = this.get('padding').bottom;
    const width = this.get('width');
    const height = this.get('height');

    return [[paddingLeft, paddingTop], [(width - paddingRight), (height - paddingBottom)]];
  }
}
