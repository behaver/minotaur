import React from 'react';
import Folder from './Folder';
import Media from './Media';
import AjaxHandler from '../AjaxHandler';
import '../css/Section.css';

class Section extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [], // for saving units data(include folders and medias) in the current section
      pageIndex: 1, // the page index for requesting
      scopeId: 0, // the scope id for requesting
      onLoading: false, // record the current request state
      jointDate: false,
      hasFreshData: true,
    }

    // bind this on methods
    this.requestData = this.requestData.bind(this);
    this.enterFreshScope = this.enterFreshScope.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  
  componentDidMount(){
    this.requestData();
  }

  /**
   * request units data which belong to the current section, asynchronously 
   * @return {void} 
   */
  requestData() {
    console.log(this.state.onLoading,this.state.pageIndex,this.state.jointDate)
    if (!this.state.onLoading) {

      // the current section id
      const sectionId = this.props.id;

      // open on-loading state
      this.setState({ 
        onLoading: true,
      });

      AjaxHandler.get('/subjects', {
          params: {
            'section_id': sectionId,
            'scope_id': this.state.scopeId,
            'page': this.state.pageIndex,
          }
        })
        .then((response) => {
          this.setState({
            data: this.state.jointDate ? this.state.data.concat(response.data.data) : response.data.data,
            onLoading: false,
            jointDate: false,
            hasFreshData: Boolean(response.data.data.length),
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  enterFreshScope(scope_id) {
    this.setState((state, props) => {
      return {
        scopeId: scope_id,
      }
    }, this.requestData);
  }

  loadMore(e) {
    e.preventDefault();

    this.setState((state, props) => {
      return {
        pageIndex: state.pageIndex + 1,
        jointDate: true,
      }
    }, this.requestData);
  }

  render() {
    // make SUnit list via data source
    const unitList = this.state.data.map((item) => {
      if (item.type === 'scope') 
        return <Folder key={item.id} name={item.name} onDoubleClick={this.enterFreshScope.bind(this, item.id)}/>;
      else
        return <Media key={item.id} name={item.name}/>;
    });


    return (
      <div className="Section">
        {unitList}
        {(unitList.length === 5 && this.state.hasFreshData) && <div className="LoadMore"><a href="#" onClick={this.loadMore.bind(this)}>Load More</a></div>}
      </div>
    );
  }
}

export default Section;