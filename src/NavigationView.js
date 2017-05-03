
let NavigationView = Backbone.View.extend({

  setData(data){
    this.data = data;
    this.model.setData(data);
    this.render();

  },

  render(){
      let id = this.model.get('id');
      let height = this.model.get('height');
      let width = this.model.get('width');
      let quadrant = this.model.get('quadrant');
      let placement = this.model.get('placement');

      let container = d3.select('#' + id);
      if(container.empty()){
        container = d3.select('body')
          .append('div')
          .attr('id', id);
      }

      let svg = this._createContainer(container, placement, height, width);

      let wrapper = this._createWrapper(svg, placement, height, width, quadrant);



    const brush = d3.brushX()
      .extent(this.model.configBrushExtent())
      .on("brush",this.brushed);

    wrapper.append('g')
      .attr('class', 'brush')
      .call(brush)
      .call(brush.move, this.model.xScaleConfig().range())

  },
  _createContainer(container, placement, height, width){
    let svg = container.append('svg')
      .attr('style', this.model.getMargin());

    if(placement === "horizontal"){
      svg.attr("width", height)
        .attr("height", width);
    }
    else{
      svg.attr("width", width)
        .attr("height", height);
    }
    return svg;
  },
  _createWrapper(svg, placement, height, width, quadrant){
    let wrapper = svg.append("g")
      .attr("class", "wrapper")
      .attr('stroke', 'black')
      .attr('stroke-width', '1')


    //rotate wrapper
    if(placement === "horizontal"){
      if(quadrant === 1 || quadrant === 3){
        wrapper.attr("transform", "translate(" + height + ", 0) rotate(90)");

      }
      else{
        wrapper.attr("transform", "translate(0, " + width + ") rotate(-90)");

      }
    }
    return wrapper;
  },

  brushed(){
    let selection = d3.event.selection;
    command.execute('Refresh', selection);
  },

});
