import React, {Component} from 'react';
import { connect } from 'react-redux';
import SkyLight from 'react-skylight';
var ReactToastr = require("react-toastr-redux");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class PlaceEntry extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(e) {
      e.preventDefault;
      this.props.onSaveClick(this.props.place, this.props.user);
      this.refs.container.success(
        "Added!"
      );
      // this.refs.complexDialog.show();
  }
  // <p>Rating: { this.props.place.rating }</p> 
  // <p>Price Level: { this.props.place.price_level} </p>
  // <p>Reviews: { this.props.place.review.text } </p>
  render() {

    var myBigGreenDialog = {
      backgroundColor: '#FF5A3B',
      color: '#ffffff',
      width: '50%',
      height: '500px',
      marginTop: '-250px',
      marginLeft: '-25%',
      border: '10px solid #ffffff',
      overflow: scroll 
    };

    var heaven = {
      backgroundColor: '#ffffff',
      color: '#FF5A3B',
      width: '50%',
      height: '100px',
      marginTop: '-100px',
      marginLeft: '-25%',
      border: '10px solid #FF5A3B' 
    };

    var styleHeart = {
      width: '20%', 
      float: 'right', 
      position: 'relative', 
      height: '20%'
    }

    var styleInfo = {
      width: '20%', 
      float: 'left',
      position: 'absolute', 
      // position: 'relative', 
      height: '20%'
    }

    var toast = {
      width: '20%', 
      float: 'right',
      // paddingLeft: '20px',   
      height: '20%', 
      color: '#FF5A3B', 
      textAlign: 'center'
    }

    return (
      <div>
        
        <div className='place-entry animated fadeInUp'>
          <div className='place-entry animated fadeInUp'>
            <div className='place-info' >
              <h4>{ this.props.place.name }</h4>
              <p>{ this.props.place.address }</p>
              <div>
                <a className='place-entry-link' href={'//www.images.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address + '&tbm=isch'}
                target='_blank'>View Images</a>
                <span className='place-entry-link-divider'>&middot;</span>
                <a className='place-entry-link' href={'//www.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address}
                target='_blank'>Find on Google</a>
                <span className='place-entry-link-divider'>&middot;</span>
                <a className='place-entry-link' href={'https://maps.google.com?saddr=Current+Location&daddr=' + this.props.place.address}
                target='_blank'>Show Directions</a>
              </div>
          </div>     
        </div>

        <div className = 'animated fadeInUp' style = {styleHeart}>
          <span onClick = {this.handleClick.bind(this)} className = 'icon-heart' aria-hidden='true'></span> 
        </div>

        <ToastContainer ref="container"
          toastMessageFactory={ToastMessageFactory}
          style = {toast}
        />
          
        <div className='place-more-info animated fadeInUp'>
          <span onClick={() => this.refs.simpleDialog.show()} className='icon-info' aria-hidden='true'> More info</span>
        </div>



        </div>

        <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="Additional Information">
          <span>Phone Number: { this.props.place.phone }</span><br></br>
          <span>Rating: { this.props.place.rating }</span><br></br>   
          <span>Website: <a href={ this.props.place.website } target='_blank'>{ this.props.place.website }</a></span><br></br><br></br>
          <span>Reviews:</span><br></br>
          <span>{this.props.place.review[0].author_name} - {(this.props.place.review[0].text).substr(0, 145)}<a href={'//www.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address}
                target='_blank'>more...</a></span><br></br><br></br>
          <span>{this.props.place.review[1].author_name} - {(this.props.place.review[1].text).substr(0, 145)}<a href={'//www.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address}
                target='_blank'>more...</a></span><br></br><br></br>
          <span>{this.props.place.review[2].author_name} - {(this.props.place.review[2].text).substr(0, 145)}<span><a href={'//www.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address}
                target='_blank'>more...</a></span></span><br></br><br></br>


          <img src={this.props.place.icon}/>
        </SkyLight>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {user: state.user};
};

export default connect(mapStateToProps)(PlaceEntry);


  // render () {
  //   return (
  //     <div>
  //       <ToastContainer ref="container"
  //                       toastMessageFactory={ToastMessageFactory}
  //                       className="toast-top-right" />
  //       <button onClick={this.addAlert}>GGininder</button>
  //     </div>
  //   );
  // }


// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import SkyLight from 'react-skylight';
// var ReactToastr = require("react-toastr-redux");
// var {ToastContainer} = ReactToastr;
// var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

// class PlaceEntry extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick.bind(this);
//   }

//   handleClick(e) {
//       e.preventDefault;
//       this.props.onSaveClick(this.props.place, this.props.user);
//       // this.refs.container.success(
//       //   "Added!"
//       // );
//       this.refs.complexDialog.show();
//   }


//   render() {

//     var heaven = {
//       backgroundColor: '#ffffff',
//       color: '#FF5A3B',
//       width: '30%',
//       height: '100px',
//       marginTop: '-100px',
//       marginLeft: '-25%',
//       border: '10px solid #FF5A3B' 
//     };

//     var styleHeart = {
//       width: '50%', 
//       float: 'left', 
//       height: '20%'
//     }

//     var styleInfo = {
//       width: '50%', 
//       float: 'right', 
//       height: '20%'
//     }

//     return (
//       <div>
//         <div className='place-entry animated fadeInUp'>
//           <div className='place-info' >
//               <h4>{ this.props.place.name }</h4>
//               <p>{ this.props.place.address }</p>
//               <div>
//                 <a className='place-entry-link' href={'//www.images.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address + '&tbm=isch'}
//                 target='_blank'>View Images</a>
//                 <span className='place-entry-link-divider'>&middot;</span>
//                 <a className='place-entry-link' href={'//www.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address}
//                 target='_blank'>Find on Google</a>
//                 <span className='place-entry-link-divider'>&middot;</span>
//                 <a className='place-entry-link' href={'https://maps.google.com?saddr=Current+Location&daddr=' + this.props.place.address}
//                 target='_blank'>Show Directions</a>
//               </div>
//           </div>      
//         </div>

//         <div className = 'animated fadeInUp' style = {styleHeart}>
//           <span onClick = {this.handleClick.bind(this)} className = 'icon-heart' aria-hidden='true'></span> 
//         </div>

//         <SkyLight dialogStyles = {heaven} hideOnOverlayClicked ref="complexDialog" style = {styleInfo}>
//           <span>Yay, you found a piece of heaven.</span>
//         </SkyLight>


//         <div className='place-more-info animated fadeInUp' display="inline-block" width="25%" float="right">
//           <span onClick={() => this.refs.simpleDialog.show()} className='icon-info' aria-hidden='true'> More info</span>
//         </div>

//         <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Additional Information">
//           <span>Phone Number: </span><br></br> 
//           <span>Rating: { this.props.place.rating }</span><br></br> 
//           <span>Reviews: </span> 
//         </SkyLight>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {user: state.user};
// };

// export default connect(mapStateToProps)(PlaceEntry);


// <SkyLight dialogStyles = {heaven} hideOnOverlayClicked ref="complexDialog" style = {styleInfo}>
//   <span>Yay, you found a piece of heaven.</span>
//   </SkyLight>
