// Author: Reinan Br <slimchatuba@gmail.com>
// Site Of Buy Candy 
// Date init: 03:45 15/01/23
// LICENSE: BSDv3

import React from 'react';
import ReactDOM from 'react-dom';


class CardCand extends React.Component{
  
  render(){
    var br_ = "\n";
    return  <div><br/><div className="card" style={{width: "16rem"}}>
      <img className="card-img-top" src={this.props.cand.src} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{this.props.cand.name}</h5>
        <small class='count'j>{this.props.cand.count} unidades restantes</small>
        <p className="card-text">{this.props.cand.aboutCand}</p>
        <a href="#" className="btn btn-primary">Comprar R${this.props.cand.price}</a>
      </div>
    </div>
    </div>
  }
}


class ListNavbar extends React.Component {
  render(){
    return <li class="nav-item active">
                  <a class="nav-link" href="#">{this.props.nameItemNavbar}<span class="sr-only"></span></a>
                </li>
  }
}


class Title extends React.Component {
  render() {
    var navbarItems = ['sorteio','galinha gorda','balaio']
    var itemsNav = []
    for(let i;i<navbarItems.length;i++){
      itemsNav.push(<ListNavbar nameItemNavbar={itemsNav[i]} />)
    }
    return (<nav class="navbar navbar-expand-lg navbar-light bg-violet title">
        <a class="navbar-brand" href="#">{this.props.label}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        
          <ul class="navbar-nav">
            
            {itemsNav}
            
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            
          </ul>
          
        </div>
      </nav>)
    // return (<h1 className="title">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="p">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    var cands = [{name:'pudim',
                aboutCand:'um pudim de 700g em um tigela aberta ',
                price:12.59,
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPg6lh0NssV6kbdTsp2jFrnofeLS-ixgkrhQ&usqp=CAU',
                count:7
    },
    {name:'caninha doce',
      aboutCand: 'aproveite e beba o caldo de cana feito na hora, de 700ml',
      price: 9.69,
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoPEAIGYYzMDYGyMkVvLYA-SqRL2GnvyYFg&usqp=CAU',
      count:5
    }]
    var rows = []
    for(let i =0;i<cands.length;i++){
      rows.push(<CardCand cand={cands[i]}/>)
      
    }
    return  (
      <div className="main">
        <Title label={this.props.title} />
         <tbody>{rows}</tbody>
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="Doces da Ana🍰" text="Caution: do not look into laser with remaining eye."></Main>,
  document.getElementById('react-app')
);
