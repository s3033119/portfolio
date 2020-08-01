import React from 'react';

import ReactTooltip from 'react-tooltip';

import Stars from './Stars';

import './Skills.css';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="skill-group">
              {/* シンプル表示 */}
              { this.props.isSimple && (
                  <ul>
                    {this.props.skills.map((skill)=> {
                        return(
                            <li>
                              <span>{skill.name}</span>
                              <Stars rate={skill.rate}/>
                            </li>
                        );
                    })}
                  </ul>
              )}

              {/* サムネイル表示 */}
              { !this.props.isSimple && (
                  <>
                    {this.props.skills.map((skill)=> {
                        return(

                            <div className="skill-content"
                                 style={{
                                     'box-shadow': '1px 0 5px 1px ' + this.props.color,
                                 }} data-tip={skill.description}>

                              <ReactTooltip effect="solid" type="light" textColor="black" place="bottom"/>
                              <div className="skill-icon">
                                <img src={require("./icons/"+skill.image)}/>
                              </div>
                              <span className="skill-name">{skill.name}</span>
                              <Stars rate={skill.rate}/>
                            </div>

                        );
                    })}
                  </>
              )}
            </div>
        );
    }
}
